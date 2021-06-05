export default class GiphySearchBar {
    element: HTMLElement;
    visibility = false;
    gifButtonElement: HTMLButtonElement;
    apiKey: string;
    // eslint-disable-next-line 
    axios = require('axios').default;
    constructor(element:HTMLElement,gifButtonElement:HTMLButtonElement) {
      this.element = element;
      this.gifButtonElement = gifButtonElement;
      this.apiKey = "D4p2zMgMNgUEF8nt9pXd8KskWCFAwNZc";
      this.activateListeners(element);
    }
  
    activateListeners(element) {
        console.log(element)
        const input = this.element.firstElementChild as HTMLInputElement;
        this.gifButtonElement.onclick = this.toggleVisibility
        input.oninput= this._onKeyDown
    //   this.element.parentNode.addEventListener('keyup', this.onKeyUp, true);
    //   // we need to add it to the parent, since base fvtt does use "onCapture =  true" on the text area, which results in listeners being called in order of definition.... so preventing the "Enter" won't be possible that way
    //   this.element.parentNode.addEventListener('keydown', (ev) => this._onKeyDown(ev), true);
    //   this.element.addEventListener('submit', ev => console.log(ev));
    }

    toggleVisibility = ()=>{ 
        this.visibility = !this.visibility
        if (this.visibility){
            this.element.classList.remove("hidden")
            this.element.classList.add("slide-in-bottom")
        }
        else {
            this.element.classList.remove("slide-in-bottom")
            this.element.classList.add("hidden")
            const input = this.element.firstElementChild as HTMLInputElement;
            input.value = "";
            const searchResults = this.element.lastElementChild as HTMLDivElement;
        searchResults.innerHTML=""

        }
    }
  
    _onKeyDown = (ev:Event)=>{
        const inputText = (ev.target as HTMLInputElement).value;
        if (inputText.length >= 3){
            console.log("search functionality")
            this.axios.get('http://api.giphy.com/v1/gifs/search', {
                params: {
                  q: inputText,
                  api_key: this.apiKey
                }
              })
              .then( (response)=>{
                this.populateImages(response.data.data)
              })
              .catch(function (error) {
                console.log(error);
              })
        }
        console.log("change detected")
    }

    populateImages(images:Array<any>){
        console.log("populating images")
        const searchResults = this.element.lastElementChild as HTMLDivElement;
        searchResults.innerHTML=""
        images.forEach(image=>{
            const gif = document.createElement("img")
            gif.src=image.images.downsized.url
            searchResults?.appendChild(gif)
        })
    }
  
    onKeyUp = (ev) => this._onKeyUp(ev);
  
    
  
    _onKeyUp(ev) {
        console.log(ev)
    }

  
    static bind(element,gifButtonElement) {
      return new GiphySearchBar(element,gifButtonElement);
    }
  }