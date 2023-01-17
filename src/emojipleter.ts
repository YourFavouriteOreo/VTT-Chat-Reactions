import {CustomEmoji, EmojiRecord, IndexedDbStoreFactory } from "picmo";

import {toCodePoints} from "./common";

export default class EmojiPleter {
  public readonly element: HTMLTextAreaElement;
  public html: HTMLDivElement | undefined;
  private _selected: Element | undefined;
  private _word = '';
  private _lastSearchTime;
  private readonly _customEmojis: CustomEmoji[];
  private readonly _maxResults;
  private _db;

  constructor(element: HTMLTextAreaElement, customEmojis: CustomEmoji[], maxResults) {
    this.element = element;
    this._customEmojis = customEmojis;
    this._maxResults = maxResults;
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

  _queryMatches(emoji, query: string) {
    return emoji.label.toLowerCase().includes(query.toLowerCase()) || emoji.tags?.some(tag => tag.toLowerCase().includes(query.toLowerCase()));
  }

  async _filter(str, searchStartTime) {
    const str2 = str.substring(1).replace(/-/g, ' ');
    const results: EmojiRecord[] = this._customEmojis.filter(emoji => this._queryMatches(emoji, str2));

    return new Promise((resolve, reject) => {
      if (results.length >= this._maxResults) return resolve(results); // Custom emojis already exceed result limit
      const transaction = this._db.db.transaction("emoji", "readonly");
      const emojiStore = transaction.objectStore("emoji");
      const request = emojiStore.openCursor();

      request.addEventListener("success", (event) => {
        const cursor = event.target.result;
        if (!cursor)
          return resolve(results)

        const emoji = cursor.value;
        if (this._queryMatches(emoji, str2)) {
          results.push(emoji);
          if (results.length >= this._maxResults) {
            return resolve(results);
          }
        }
        cursor.continue();

        if (this._lastSearchTime !== searchStartTime)
          return resolve([]);
      });

      request.addEventListener("error", (error) => {
        reject(error);
      });
    })
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
      if (!list) return; // search was aborted due to a new search being started
      if (list === -1) return this.close();

      if (!this._visible) this.show(list);
      this.html = this.html as HTMLDivElement;
      this.html.replaceChild(list, this.html.children[0]);
      this._selected = this.html.querySelector('.emojipleter-emoji') as Element;
      this._selected.classList.add('selected');
      this.html.scrollTop = this.html.scrollHeight;
    });
  }

  async getListTemplate(word) {
    const searchTime = Date.now();
    this._lastSearchTime = searchTime;
    const list = await this._filter(word, searchTime) as EmojiRecord[];
    if (this._lastSearchTime !== searchTime) return;
    if (list.length === 0) return -1;
    const ul = document.createElement('ul');
    ul.classList.add('emojipleter-emojilist');
    for (const e of list) {
      const li = ul.appendChild(document.createElement('li'));
      li.classList.add('emojipleter-emoji');
      if (e.url) { // custom emoji
        const img = li.appendChild(document.createElement('img'))
        img.src = e.url;
        img.classList.add('emoji');
        img.draggable = false;
        li.dataset['customEmoji'] = e.emoji
      } else {
        li.innerHTML += `<svg class="emoji"><use xlink:href="#${toCodePoints(e.emoji).join('-')}"></use></svg>`
        li.dataset['emoji'] = e.emoji;
      }

      li.appendChild(document.createElement('span')).innerText = e.label.replace(/ /g, '-');
    }
    return ul;
  }

  get spawnCSS() {
    const rect = (this.element.parentNode as Element).getBoundingClientRect();
    return {
      width: rect.width + 'px',
      bottom: (this.element.closest("body") as HTMLBodyElement).getBoundingClientRect().height - rect.top + 'px',
      left: rect.left + 'px'
    }
  }

  show(list) {
    if (this.html) return;
    const div = document.createElement('div');
    div.id = 'emojipleter';
    div.appendChild(list);
    (this.element.closest("body") as HTMLBodyElement).appendChild(div);

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
