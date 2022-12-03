import {CustomEmoji, IndexedDbStoreFactory} from "picmo";
import { parse } from "twemoji-parser";

export default class EmojiPleter {
  public readonly element: HTMLTextAreaElement;
  public html: HTMLDivElement | undefined;
  private _selected: Element | undefined;
  private _word = '';
  private readonly _customEmojis: CustomEmoji[];
  private readonly _categories: { key: string, order: number }[];
  private _db;

  constructor(element: HTMLTextAreaElement, customEmojis: CustomEmoji[], categories: string[]) {
    this.element = element;
    this._customEmojis = customEmojis;
    this._categories = categories.filter(c => c !== "recents").reverse().map((c, i) => ({ key: c, order: i }));
    this._db = IndexedDbStoreFactory('en');
    this._db.open();
    this.activateListeners();
  }

  activateListeners() {
    (this.element.parentNode as Element).addEventListener('keyup', this.onKeyUp, true);
    // we need to add it to the parent, since base fvtt does use "onCapture =  true" on the text area, which results in listeners being called in order of definition.... so preventing the "Enter" won't be possible that way
    (this.element.parentNode as Element).addEventListener('keydown', (ev) => this._onKeyDown(ev), true);
    //this.element.addEventListener('submit', ev => console.log(ev));
  }

  _onKeyDown(ev) {
    const code = ev.key;
    if (code === 'Enter' && this._visible) {
      const word = this._getWord();
      if (/^:[\w_-]*$/.exec(word)) {
        ev.stopPropagation();
        ev.preventDefault();
        this.select(this._selected?.querySelector('span')?.innerText);
      }
      this.close();
    } else if (code === "Escape") {
      this.close();
    } else if (code === 'ArrowDown' || code === 'ArrowUp') {
      // prevent up/down e.g. for codemirror
      ev.preventDefault(); ev.stopPropagation();
    }

  }

  onKeyUp = (ev) => this._onKeyUp(ev);

  _visible = false;

  _onKeyUp(ev) {
    if (ev.key === 'Enter') return;
    if (ev.key === 'ArrowUp') {
      ev.preventDefault(); ev.stopPropagation();
      const next = this._selected?.nextElementSibling;
      if (!next) return;

      this._selected?.classList.remove('selected');
      next.classList.add('selected');
      this._selected = next;
    } else if (ev.key === 'ArrowDown') {
      ev.preventDefault(); ev.stopPropagation();
      const next = this._selected?.previousElementSibling;
      if (!next) return;

      this._selected?.classList.remove('selected');
      next.classList.add('selected');
      this._selected = next;
    } else {
      const word = this._getWord();
      if (/^:[\w_-]+$/.exec(word)) {
        if (word.length > 2 && word !== this._word) {
          ev.preventDefault();
          ev.stopPropagation();
          this._word = word;
          this.update(word);
        }
        return;
      }
      this._word = word;
      this.close();
    }
  }

  async _filter(str) {
    const str2 = str.substring(1).replace(/-/g, ' ');
    // return [...this._customEmojis.filter(e => e.code.includes(str)), ...CONFIG.emojule.list.filter(e => e.code.includes(str2, 2))];
    return await this._db.searchEmojis(str2, this._customEmojis, Infinity, this._categories);
  }

  _getWord() {
    const start = this.element.selectionStart;
    const preText = this.element.value.substring(0, start);
    const afterText = this.element.value.substring(start)
    const wordStart = /[\S_-]*$/.exec(preText) as RegExpExecArray;
    const wordEnd = /^[\S_-]*/.exec(afterText) as RegExpExecArray;
    return wordStart[0] + wordEnd[0];
  }

  update(word) {
    this.getListTemplate(word).then((list) => {
      if (!list) return this.close();

      if (!this._visible) this.show(list);
      this.html = this.html as HTMLDivElement;
      this.html.replaceChild(list, this.html.children[0]);
      this._selected = this.html.querySelector('.emojipleter-emoji') as Element;
      this._selected.classList.add('selected');
      this.html.scrollTop = this.html.scrollHeight;
    });
  }

  async getListTemplate(word) {
    const list = await this._filter(word);
    if (list.length === 0) return null;
    const ul = document.createElement('ul');
    ul.classList.add('emojipleter-emojilist');
    for (const e of list) {
      const li = ul.appendChild(document.createElement('li'));
      li.classList.add('emojipleter-emoji');
      const img = li.appendChild(document.createElement('img'))
      if (e.url) {
        img.src = e.url;
        li.dataset['customEmoji'] = e.emoji
      } else {
        img.src = parse(e.emoji)[0].url;
        li.dataset['emoji'] = e.emoji;
      }

      img.classList.add('emoji');
      img.draggable = false;
      li.appendChild(document.createElement('span')).innerText = e.label.replace(/ /g, '-');
    }
    return ul;
  }

  get spawnCSS() {
    const rect = (this.element.parentNode as Element).getBoundingClientRect();
    return {
      width: rect.width + 'px',
      bottom: window.innerHeight - rect.top + 'px',
      left: rect.left + 'px'
    }
  }

  show(list) {
    if (this.html) return;
    const div = document.createElement('div');
    div.id = 'emojipleter';
    div.appendChild(list);
    document.body.appendChild(div);

    div.scrollTop = div.scrollHeight;
    this.html = div;
    const css = this.spawnCSS;
    for (const key in css) {
      this.html.style[key] = css[key];
    }

    div.addEventListener('click', ev => {
      const target = (ev.target as Element | undefined)?.closest('.emojipleter-emoji');
      if (!target) return;
      this.select((target.querySelector('span') as HTMLSpanElement).innerText);
      this.close();
    });
    div.addEventListener('mousemove', ev => {
      const target = (ev.target as Element | undefined)?.closest('.emojipleter-emoji');
      if (!target || target === this._selected) return;
      if (this._selected)
        this._selected.classList.remove('selected');
      this._selected = target;
      target.classList.add('selected');
    })
    this._visible = true;
  }

  close()  {
    if (!this._visible) return;

    (this.html as Element).remove();
    this.html = undefined;
    this._visible = false;
  }

  select(str) {
    if (!Hooks.call('emojuleSelectEmoji', str, this.element)) return;

    const orig = this.element.value;
    const start = this.element.selectionStart;
    const preText = this.element.value.substring(0, start);
    const afterText = this.element.value.substring(start)
    const wordStart = (/[\S_-]*$/.exec(preText) as RegExpExecArray)[0];
    const wordEnd = (/^[\S_-]*/.exec(afterText) as RegExpExecArray)[0];

    this.element.value = orig.substring(0, start - wordStart.length)
                       + ((this._selected as HTMLElement).dataset['emoji'] || `:${(this._selected as HTMLElement).dataset['customEmoji']}:`)
                       + orig.substring(start + wordEnd.length);
    this.element.focus();
  }
}
