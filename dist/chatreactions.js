/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@joeattardi/emoji-button/dist/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@joeattardi/emoji-button/dist/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmojiButton": () => (/* binding */ rn)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function e(e,o,n,i){return new(n||(n=Promise))((function(a,r){function t(e){try{m(i.next(e))}catch(e){r(e)}}function s(e){try{m(i.throw(e))}catch(e){r(e)}}function m(e){var o;e.done?a(e.value):(o=e.value,o instanceof n?o:new n((function(e){e(o)}))).then(t,s)}m((i=i.apply(e,o||[])).next())}))}!function(e,o){void 0===o&&(o={});var n=o.insertAt;if(e&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&i.firstChild?i.insertBefore(a,i.firstChild):i.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}('@keyframes show {\n  0% {\n    opacity: 0;\n    transform: scale3d(0.8, 0.8, 0.8);\n  }\n\n  50% {\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n\n  100% {\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes hide {\n  0% {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n\n  100% {\n    opacity: 0;\n    transform: scale3d(0.8, 0.8, 0.8);\n  }\n}\n\n@keyframes grow {\n  0% {\n    opacity: 0;\n    transform: scale3d(0.8, 0.8, 0.8); \n  }\n\n  100% { \n    opacity: 1;\n    transform: scale3d(1, 1, 1); \n  }\n}\n\n@keyframes shrink {\n  0% { \n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n\n  100% { \n    opacity: 0;\n    transform: scale3d(0.8, 0.8, 0.8); \n  }\n}\n\n@keyframes fade-in {\n  0% { opacity: 0; }\n  100% { opacity: 1; }\n}\n\n@keyframes fade-out {\n  0% { opacity: 1; }\n  100% { opacity: 0; }\n}\n\n.emoji-picker {\n  --animation-duration: 0.2s;\n  --animation-easing: ease-in-out;\n\n  --emoji-size: 1.8em;\n  --emoji-size-multiplier: 1.5;\n  --emoji-preview-size: 2em;\n  --emoji-per-row: 8;\n  --row-count: 6;\n\n  --content-height: calc((var(--emoji-size) * var(--emoji-size-multiplier)) * var(--row-count) + var(--category-name-size) + var(--category-button-height) + 0.5em);\n\n  --category-name-size: 0.85em;\n\n  --category-button-height: 2em;\n  --category-button-size: 1.1em;\n  --category-border-bottom-size: 4px;\n\n  --focus-indicator-color: #999999;\n\n  --search-height: 2em;\n\n  --blue-color: #4F81E5;\n\n  --border-color: #CCCCCC;\n  --background-color: #FFFFFF;\n  --text-color: #000000;\n  --secondary-text-color: #666666;\n  --hover-color: #E8F4F9;\n  --search-focus-border-color: var(--blue-color);\n  --search-icon-color: #CCCCCC;\n  --overlay-background-color: rgba(0, 0, 0, 0.8);\n  --popup-background-color: #FFFFFF;\n  --category-button-color: #666666;\n  --category-button-active-color: var(--blue-color);\n\n  --dark-border-color: #666666;\n  --dark-background-color: #333333;\n  --dark-text-color: #FFFFFF;\n  --dark-secondary-text-color: #999999;\n  --dark-hover-color: #666666;\n  --dark-search-background-color: #666666;\n  --dark-search-border-color: #999999;\n  --dark-search-placeholder-color: #999999;\n  --dark-search-focus-border-color: #DBE5F9;\n  --dark-popup-background-color: #333333;\n  --dark-category-button-color: #FFFFFF;\n\n  --font: Arial, Helvetica, sans-serif;\n  --font-size: 16px;\n}\n\n.emoji-picker {\n  font-size: var(--font-size);\n  border: 1px solid var(--border-color);\n  border-radius: 5px;\n  background: var(--background-color);\n  width: calc(var(--emoji-per-row) * var(--emoji-size) * var(--emoji-size-multiplier) + 1em + 1.5rem);\n  font-family: var(--font);\n  overflow: hidden;\n  animation: show var(--animation-duration) var(--animation-easing);\n}\n\n.emoji-picker * {\n  font-family: var(--font);\n  box-sizing: content-box;\n}\n\n.emoji-picker__overlay {\n  background: rgba(0, 0, 0, 0.75);\n  z-index: 1000;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.emoji-picker.hiding {\n  animation: hide var(--animation-duration) var(--animation-easing);\n}\n\n.emoji-picker.dark {\n  background: var(--dark-background-color);\n  color: var(--dark-text-color);\n  border-color: var(--dark-border-color);\n}\n\n.emoji-picker__content {\n  padding: 0.5em;\n  height: var(--content-height);\n  position: relative;\n}\n\n.emoji-picker__preview {\n  height: var(--emoji-preview-size);\n  padding: 0.5em;\n  border-top: 1px solid var(--border-color);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.emoji-picker.dark .emoji-picker__preview {\n  border-top-color: var(--dark-border-color);\n}\n\n.emoji-picker__preview-emoji {\n  font-size: var(--emoji-preview-size);\n  margin-right: 0.25em;\n  font-family: "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "EmojiOne Color", "Android Emoji";\n}\n\n.emoji-picker__preview-emoji img.emoji {\n  height: 1em;\n  width: 1em;\n  margin: 0 .05em 0 .1em;\n  vertical-align: -0.1em;\n}\n\n.emoji-picker__preview-name {\n  color: var(--text-color);\n  font-size: 0.85em;\n  overflow-wrap: break-word;\n  word-break: break-all;\n}\n\n.emoji-picker.dark .emoji-picker__preview-name {\n  color: var(--dark-text-color);\n}\n\n.emoji-picker__container {\n  display: grid;\n  justify-content: center;\n  grid-template-columns: repeat(var(--emoji-per-row), calc(var(--emoji-size) * var(--emoji-size-multiplier)));\n  grid-auto-rows: calc(var(--emoji-size) * var(--emoji-size-multiplier));\n}\n\n.emoji-picker__container.search-results {\n  height: var(--content-height);\n  overflow-y: auto;\n}\n\n.emoji-picker__custom-emoji {\n  width: 1em;\n  height: 1em;\n}\n\n.emoji-picker__emoji {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  overflow: hidden;\n  font-size: var(--emoji-size);\n  width: 1.5em;\n  height: 1.5em;\n  padding: 0;\n  margin: 0;\n  outline: none;\n  font-family: "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "EmojiOne Color", "Android Emoji";\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.emoji-picker__emoji img.emoji {\n  height: 1em;\n  width: 1em;\n  margin: 0 .05em 0 .1em;\n  vertical-align: -0.1em;\n}\n\n.emoji-picker__emoji:focus, .emoji-picker__emoji:hover {\n  background: var(--hover-color);\n}\n\n.emoji-picker__emoji:focus {\n  outline: 1px dotted var(--focus-indicator-color);\n}\n\n.emoji-picker.dark .emoji-picker__emoji:focus, .emoji-picker.dark .emoji-picker__emoji:hover {\n  background: var(--dark-hover-color);\n}\n\n.emoji-picker__plugin-container {\n  margin: 0.5em;\n  display: flex;\n  flex-direction: row;\n}\n\n.emoji-picker__search-container {\n  margin: 0.5em;\n  position: relative;\n  height: var(--search-height);\n  display: flex;\n}\n\n.emoji-picker__search {\n  box-sizing: border-box;\n  width: 100%;\n  border-radius: 3px;\n  border: 1px solid var(--border-color);\n  padding-right: 2em;\n  padding: 0.5em 2.25em 0.5em 0.5em;\n  font-size: 0.85em;\n  outline: none;\n}\n\n.emoji-picker.dark .emoji-picker__search {\n  background: var(--dark-search-background-color);\n  color: var(--dark-text-color);\n  border-color: var(--dark-search-border-color);\n}\n\n.emoji-picker.dark .emoji-picker__search::placeholder {\n  color: var(--dark-search-placeholder-color);\n}\n\n.emoji-picker__search:focus {\n  border: 1px solid var(--search-focus-border-color);\n}\n\n.emoji-picker.dark .emoji-picker__search:focus {\n  border-color: var(--dark-search-focus-border-color);\n}\n\n.emoji-picker__search-icon {\n  position: absolute;\n  color: var(--search-icon-color);\n  width: 1em;\n  height: 1em;\n  right: 0.75em;\n  top: calc(50% - 0.5em);\n}\n\n.emoji-picker__search-icon img {\n  width: 1em;\n  height: 1em;\n}\n\n.emoji-picker__search-not-found {\n  color: var(--secondary-text-color);\n  text-align: center;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.emoji-picker__search-not-found h2 {\n  color: var(--secondary-text-color);\n}\n\n.emoji-picker.dark .emoji-picker__search-not-found {\n  color: var(--dark-secondary-text-color);\n}\n\n.emoji-picker.dark .emoji-picker__search-not-found h2 {\n  color: var(--dark-secondary-text-color);\n}\n\n.emoji-picker__search-not-found-icon {\n  font-size: 3em;\n}\n\n.emoji-picker__search-not-found-icon img {\n  width: 1em;\n  height: 1em;\n}\n\n.emoji-picker__search-not-found h2 {\n  margin: 0.5em 0;\n  font-size: 1em;\n}\n\n.emoji-picker__variant-overlay {\n  background: var(--overlay-background-color);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  animation: fade-in var(--animation-duration) var(--animation-easing);\n}\n\n.emoji-picker__variant-overlay.hiding {\n  animation: fade-out var(--animation-duration) var(--animation-easing);\n}\n\n.emoji-picker__variant-popup {\n  background: var(--popup-background-color);\n  margin: 0.5em;\n  padding: 0.5em;\n  text-align: center;\n  border-radius: 5px;\n  animation: grow var(--animation-duration) var(--animation-easing);\n  user-select: none;\n}\n\n.emoji-picker__variant-overlay.hiding .emoji-picker__variant-popup {\n  animation: shrink var(--animation-duration) var(--animation-easing);\n}\n\n.emoji-picker.dark .emoji-picker__variant-popup {\n  background: var(--dark-popup-background-color);\n}\n\n.emoji-picker__emojis {\n  overflow-y: auto;\n  position: relative;\n  height: calc((var(--emoji-size) * var(--emoji-size-multiplier)) * var(--row-count) + var(--category-name-size));\n}\n\n.emoji-picker__emojis.hiding {\n  animation: fade-out 0.05s var(--animation-easing);\n}\n\n.emoji-picker__emojis h2.emoji-picker__category-name {\n  font-size: 0.85em;\n  color: var(--secondary-text-color);\n  text-transform: uppercase;\n  margin: 0.25em 0;\n  text-align: left;\n}\n\n.emoji-picker.dark h2.emoji-picker__category-name {\n  color: var(--dark-secondary-text-color);\n}\n\n.emoji-picker__category-buttons {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  height: var(--category-button-height);\n  margin-bottom: 0.5em;\n}\n\nbutton.emoji-picker__category-button {\n  flex-grow: 1;\n  background: transparent;\n  padding: 0;\n  border: none;\n  cursor: pointer;\n  font-size: var(--category-button-size);\n  vertical-align: middle;\n  color: var(--category-button-color);\n  border-bottom: var(--category-border-bottom-size) solid transparent;\n  outline: none;\n}\n\nbutton.emoji-picker__category-button img {\n  width: var(--category-button-size);\n  height: var(--category-button-size);\n}\n\n.emoji-picker.keyboard button.emoji-picker__category-button:focus {\n  outline: 1px dotted var(--focus-indicator-color);\n}\n\n.emoji-picker.dark button.emoji-picker__category-button.active {\n  color: var(--category-button-active-color);\n}\n\n.emoji-picker.dark button.emoji-picker__category-button {\n  color: var(--dark-category-button-color);\n}\n\nbutton.emoji-picker__category-button.active {\n  color: var(--category-button-active-color);\n  border-bottom: var(--category-border-bottom-size) solid var(--category-button-active-color);\n}\n\n@media (prefers-color-scheme: dark) {\n  .emoji-picker.auto {\n    background: var(--dark-background-color);\n    color: var(--dark-text-color);\n    border-color: var(--dark-border-color);\n  }\n\n  .emoji-picker.auto .emoji-picker__preview {\n    border-top-color: var(--dark-border-color);\n  }\n\n  .emoji-picker.auto .emoji-picker__preview-name {\n    color: var(--dark-text-color);\n  }\n\n  .emoji-picker.auto button.emoji-picker__category-button {\n    color: var(--dark-category-button-color);\n  }\n\n  .emoji-picker.auto button.emoji-picker__category-button.active {\n    color: var(--category-button-active-color);\n  }\n\n  .emoji-picker.auto .emoji-picker__emoji:focus, .emoji-picker.auto .emoji-picker__emoji:hover {\n    background: var(--dark-hover-color);\n  }\n\n  .emoji-picker.auto .emoji-picker__search {\n    background: var(--dark-search-background-color);\n    color: var(--dark-text-color);\n    border-color: var(--dark-search-border-color);\n  }\n \n  .emoji-picker.auto h2.emoji-picker__category-name {\n    color: var(--dark-secondary-text-color);\n  }\n\n  .emoji-picker.auto .emoji-picker__search::placeholder {\n    color: var(--dark-search-placeholder-color);\n  }\n\n  .emoji-picker.auto .emoji-picker__search:focus {\n    border-color: var(--dark-search-focus-border-color);\n  }\n\n  .emoji-picker.auto .emoji-picker__search-not-found {\n    color: var(--dark-secondary-text-color);\n  }\n\n  .emoji-picker.auto .emoji-picker__search-not-found h2 {\n    color: var(--dark-secondary-text-color);\n  }\n\n  .emoji-picker.auto .emoji-picker__variant-popup {\n    background: var(--dark-popup-background-color);\n  }\n}');var o=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],n=o.join(","),i="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function a(e,o){o=o||{};var a,t,s,d=[],g=[],u=e.querySelectorAll(n);for(o.includeContainer&&i.call(e,n)&&(u=Array.prototype.slice.apply(u)).unshift(e),a=0;a<u.length;a++)r(t=u[a])&&(0===(s=m(t))?d.push(t):g.push({documentOrder:a,tabIndex:s,node:t}));return g.sort(c).map((function(e){return e.node})).concat(d)}function r(e){return!(!t(e)||function(e){return function(e){return d(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var o=function(e){for(var o=0;o<e.length;o++)if(e[o].checked)return e[o]}(e.ownerDocument.querySelectorAll('input[type="radio"][name="'+e.name+'"]'));return!o||o===e}(e)}(e)||m(e)<0)}function t(e){return!(e.disabled||function(e){return d(e)&&"hidden"===e.type}(e)||function(e){return null===e.offsetParent||"hidden"===getComputedStyle(e).visibility}(e))}a.isTabbable=function(e){if(!e)throw new Error("No node provided");return!1!==i.call(e,n)&&r(e)},a.isFocusable=function(e){if(!e)throw new Error("No node provided");return!1!==i.call(e,s)&&t(e)};var s=o.concat("iframe").join(",");function m(e){var o=parseInt(e.getAttribute("tabindex"),10);return isNaN(o)?function(e){return"true"===e.contentEditable}(e)?0:e.tabIndex:o}function c(e,o){return e.tabIndex===o.tabIndex?e.documentOrder-o.documentOrder:e.tabIndex-o.tabIndex}function d(e){return"INPUT"===e.tagName}var g,u=a,l=function(){for(var e={},o=0;o<arguments.length;o++){var n=arguments[o];for(var i in n)v.call(n,i)&&(e[i]=n[i])}return e},v=Object.prototype.hasOwnProperty;var f,y=(f=[],{activateTrap:function(e){if(f.length>0){var o=f[f.length-1];o!==e&&o.pause()}var n=f.indexOf(e);-1===n||f.splice(n,1),f.push(e)},deactivateTrap:function(e){var o=f.indexOf(e);-1!==o&&f.splice(o,1),f.length>0&&f[f.length-1].unpause()}});function j(e){return setTimeout(e,0)}var h=function(e,o){var n=document,i="string"==typeof e?n.querySelector(e):e,a=l({returnFocusOnDeactivate:!0,escapeDeactivates:!0},o),r={firstTabbableNode:null,lastTabbableNode:null,nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1},t={activate:function(e){if(r.active)return;w(),r.active=!0,r.paused=!1,r.nodeFocusedBeforeActivation=n.activeElement;var o=e&&e.onActivate?e.onActivate:a.onActivate;o&&o();return m(),t},deactivate:s,pause:function(){if(r.paused||!r.active)return;r.paused=!0,c()},unpause:function(){if(!r.paused||!r.active)return;r.paused=!1,w(),m()}};return t;function s(e){if(r.active){clearTimeout(g),c(),r.active=!1,r.paused=!1,y.deactivateTrap(t);var o=e&&void 0!==e.onDeactivate?e.onDeactivate:a.onDeactivate;return o&&o(),(e&&void 0!==e.returnFocus?e.returnFocus:a.returnFocusOnDeactivate)&&j((function(){var e;k((e=r.nodeFocusedBeforeActivation,d("setReturnFocus")||e))})),t}}function m(){if(r.active)return y.activateTrap(t),g=j((function(){k(v())})),n.addEventListener("focusin",h,!0),n.addEventListener("mousedown",f,{capture:!0,passive:!1}),n.addEventListener("touchstart",f,{capture:!0,passive:!1}),n.addEventListener("click",b,{capture:!0,passive:!1}),n.addEventListener("keydown",p,{capture:!0,passive:!1}),t}function c(){if(r.active)return n.removeEventListener("focusin",h,!0),n.removeEventListener("mousedown",f,!0),n.removeEventListener("touchstart",f,!0),n.removeEventListener("click",b,!0),n.removeEventListener("keydown",p,!0),t}function d(e){var o=a[e],i=o;if(!o)return null;if("string"==typeof o&&!(i=n.querySelector(o)))throw new Error("`"+e+"` refers to no known node");if("function"==typeof o&&!(i=o()))throw new Error("`"+e+"` did not return a node");return i}function v(){var e;if(!(e=null!==d("initialFocus")?d("initialFocus"):i.contains(n.activeElement)?n.activeElement:r.firstTabbableNode||d("fallbackFocus")))throw new Error("Your focus-trap needs to have at least one focusable element");return e}function f(e){i.contains(e.target)||(a.clickOutsideDeactivates?s({returnFocus:!u.isFocusable(e.target)}):a.allowOutsideClick&&a.allowOutsideClick(e)||e.preventDefault())}function h(e){i.contains(e.target)||e.target instanceof Document||(e.stopImmediatePropagation(),k(r.mostRecentlyFocusedNode||v()))}function p(e){if(!1!==a.escapeDeactivates&&function(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}(e))return e.preventDefault(),void s();(function(e){return"Tab"===e.key||9===e.keyCode})(e)&&function(e){if(w(),e.shiftKey&&e.target===r.firstTabbableNode)return e.preventDefault(),void k(r.lastTabbableNode);if(!e.shiftKey&&e.target===r.lastTabbableNode)e.preventDefault(),k(r.firstTabbableNode)}(e)}function b(e){a.clickOutsideDeactivates||i.contains(e.target)||a.allowOutsideClick&&a.allowOutsideClick(e)||(e.preventDefault(),e.stopImmediatePropagation())}function w(){var e=u(i);r.firstTabbableNode=e[0]||v(),r.lastTabbableNode=e[e.length-1]||v()}function k(e){e!==n.activeElement&&(e&&e.focus?(e.focus(),r.mostRecentlyFocusedNode=e,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}(e)&&e.select()):k(v()))}};function p(){}p.prototype={on:function(e,o,n){var i=this.e||(this.e={});return(i[e]||(i[e]=[])).push({fn:o,ctx:n}),this},once:function(e,o,n){var i=this;function a(){i.off(e,a),o.apply(n,arguments)}return a._=o,this.on(e,a,n)},emit:function(e){for(var o=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),i=0,a=n.length;i<a;i++)n[i].fn.apply(n[i].ctx,o);return this},off:function(e,o){var n=this.e||(this.e={}),i=n[e],a=[];if(i&&o)for(var r=0,t=i.length;r<t;r++)i[r].fn!==o&&i[r].fn._!==o&&a.push(i[r]);return a.length?n[e]=a:delete n[e],this}};var b=p;function w(e){var o=e.getBoundingClientRect();return{width:o.width,height:o.height,top:o.top,right:o.right,bottom:o.bottom,left:o.left,x:o.left,y:o.top}}function k(e){if("[object Window]"!==e.toString()){var o=e.ownerDocument;return o?o.defaultView:window}return e}function x(e){var o=k(e);return{scrollLeft:o.pageXOffset,scrollTop:o.pageYOffset}}function C(e){return e instanceof k(e).Element||e instanceof Element}function E(e){return e instanceof k(e).HTMLElement||e instanceof HTMLElement}function _(e){return e?(e.nodeName||"").toLowerCase():null}function z(e){return(C(e)?e.ownerDocument:e.document).documentElement}function O(e){return w(z(e)).left+x(e).scrollLeft}function I(e){return k(e).getComputedStyle(e)}function S(e){var o=I(e),n=o.overflow,i=o.overflowX,a=o.overflowY;return/auto|scroll|overlay|hidden/.test(n+a+i)}function P(e,o,n){void 0===n&&(n=!1);var i,a,r=z(o),t=w(e),s={scrollLeft:0,scrollTop:0},m={x:0,y:0};return n||(("body"!==_(o)||S(r))&&(s=(i=o)!==k(i)&&E(i)?{scrollLeft:(a=i).scrollLeft,scrollTop:a.scrollTop}:x(i)),E(o)?((m=w(o)).x+=o.clientLeft,m.y+=o.clientTop):r&&(m.x=O(r))),{x:t.left+s.scrollLeft-m.x,y:t.top+s.scrollTop-m.y,width:t.width,height:t.height}}function M(e){return{x:e.offsetLeft,y:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}}function A(e){return"html"===_(e)?e:e.assignedSlot||e.parentNode||e.host||z(e)}function L(e){return["html","body","#document"].indexOf(_(e))>=0?e.ownerDocument.body:E(e)&&S(e)?e:L(A(e))}function T(e,o){void 0===o&&(o=[]);var n=L(e),i="body"===_(n),a=k(n),r=i?[a].concat(a.visualViewport||[],S(n)?n:[]):n,t=o.concat(r);return i?t:t.concat(T(A(r)))}function N(e){return["table","td","th"].indexOf(_(e))>=0}function F(e){return E(e)&&"fixed"!==I(e).position?e.offsetParent:null}function B(e){for(var o=k(e),n=F(e);n&&N(n);)n=F(n);return n&&"body"===_(n)&&"static"===I(n).position?o:n||o}p.TinyEmitter=b;var D="top",R="bottom",q="right",V="left",H=[D,R,q,V],U=H.reduce((function(e,o){return e.concat([o+"-start",o+"-end"])}),[]),W=[].concat(H,["auto"]).reduce((function(e,o){return e.concat([o,o+"-start",o+"-end"])}),[]),K=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function J(e){var o=new Map,n=new Set,i=[];function a(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var i=o.get(e);i&&a(i)}})),i.push(e)}return e.forEach((function(e){o.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||a(e)})),i}function G(e){return e.split("-")[0]}var X={placement:"bottom",modifiers:[],strategy:"absolute"};function Y(){for(var e=arguments.length,o=new Array(e),n=0;n<e;n++)o[n]=arguments[n];return!o.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function $(e){void 0===e&&(e={});var o=e,n=o.defaultModifiers,i=void 0===n?[]:n,a=o.defaultOptions,r=void 0===a?X:a;return function(e,o,n){void 0===n&&(n=r);var a,t,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},X,{},r),modifiersData:{},elements:{reference:e,popper:o},attributes:{},styles:{}},m=[],c=!1,d={state:s,setOptions:function(n){g(),s.options=Object.assign({},r,{},s.options,{},n),s.scrollParents={reference:C(e)?T(e):e.contextElement?T(e.contextElement):[],popper:T(o)};var a,t,c=function(e){var o=J(e);return K.reduce((function(e,n){return e.concat(o.filter((function(e){return e.phase===n})))}),[])}((a=[].concat(i,s.options.modifiers),t=a.reduce((function(e,o){var n=e[o.name];return e[o.name]=n?Object.assign({},n,{},o,{options:Object.assign({},n.options,{},o.options),data:Object.assign({},n.data,{},o.data)}):o,e}),{}),Object.keys(t).map((function(e){return t[e]}))));return s.orderedModifiers=c.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var o=e.name,n=e.options,i=void 0===n?{}:n,a=e.effect;if("function"==typeof a){var r=a({state:s,name:o,instance:d,options:i}),t=function(){};m.push(r||t)}})),d.update()},forceUpdate:function(){if(!c){var e=s.elements,o=e.reference,n=e.popper;if(Y(o,n)){s.rects={reference:P(o,B(n),"fixed"===s.options.strategy),popper:M(n)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}));for(var i=0;i<s.orderedModifiers.length;i++)if(!0!==s.reset){var a=s.orderedModifiers[i],r=a.fn,t=a.options,m=void 0===t?{}:t,g=a.name;"function"==typeof r&&(s=r({state:s,options:m,name:g,instance:d})||s)}else s.reset=!1,i=-1}}},update:(a=function(){return new Promise((function(e){d.forceUpdate(),e(s)}))},function(){return t||(t=new Promise((function(e){Promise.resolve().then((function(){t=void 0,e(a())}))}))),t}),destroy:function(){g(),c=!0}};if(!Y(e,o))return d;function g(){m.forEach((function(e){return e()})),m=[]}return d.setOptions(n).then((function(e){!c&&n.onFirstUpdate&&n.onFirstUpdate(e)})),d}}var Z={passive:!0};function Q(e){return e.split("-")[1]}function ee(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function oe(e){var o,n=e.reference,i=e.element,a=e.placement,r=a?G(a):null,t=a?Q(a):null,s=n.x+n.width/2-i.width/2,m=n.y+n.height/2-i.height/2;switch(r){case D:o={x:s,y:n.y-i.height};break;case R:o={x:s,y:n.y+n.height};break;case q:o={x:n.x+n.width,y:m};break;case V:o={x:n.x-i.width,y:m};break;default:o={x:n.x,y:n.y}}var c=r?ee(r):null;if(null!=c){var d="y"===c?"height":"width";switch(t){case"start":o[c]=Math.floor(o[c])-Math.floor(n[d]/2-i[d]/2);break;case"end":o[c]=Math.floor(o[c])+Math.ceil(n[d]/2-i[d]/2)}}return o}var ne={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ie(e){var o,n=e.popper,i=e.popperRect,a=e.placement,r=e.offsets,t=e.position,s=e.gpuAcceleration,m=e.adaptive,c=function(e){var o=e.x,n=e.y,i=window.devicePixelRatio||1;return{x:Math.round(o*i)/i||0,y:Math.round(n*i)/i||0}}(r),d=c.x,g=c.y,u=r.hasOwnProperty("x"),l=r.hasOwnProperty("y"),v=V,f=D,y=window;if(m){var j=B(n);j===k(n)&&(j=z(n)),a===D&&(f=R,g-=j.clientHeight-i.height,g*=s?1:-1),a===V&&(v=q,d-=j.clientWidth-i.width,d*=s?1:-1)}var h,p=Object.assign({position:t},m&&ne);return s?Object.assign({},p,((h={})[f]=l?"0":"",h[v]=u?"0":"",h.transform=(y.devicePixelRatio||1)<2?"translate("+d+"px, "+g+"px)":"translate3d("+d+"px, "+g+"px, 0)",h)):Object.assign({},p,((o={})[f]=l?g+"px":"",o[v]=u?d+"px":"",o.transform="",o))}var ae={left:"right",right:"left",bottom:"top",top:"bottom"};function re(e){return e.replace(/left|right|bottom|top/g,(function(e){return ae[e]}))}var te={start:"end",end:"start"};function se(e){return e.replace(/start|end/g,(function(e){return te[e]}))}function me(e){return parseFloat(e)||0}function ce(e){var o=k(e),n=function(e){var o=E(e)?I(e):{};return{top:me(o.borderTopWidth),right:me(o.borderRightWidth),bottom:me(o.borderBottomWidth),left:me(o.borderLeftWidth)}}(e),i="html"===_(e),a=O(e),r=e.clientWidth+n.right,t=e.clientHeight+n.bottom;return i&&o.innerHeight-e.clientHeight>50&&(t=o.innerHeight-n.bottom),{top:i?0:e.clientTop,right:e.clientLeft>n.left?n.right:i?o.innerWidth-r-a:e.offsetWidth-r,bottom:i?o.innerHeight-t:e.offsetHeight-t,left:i?a:e.clientLeft}}function de(e,o){var n=Boolean(o.getRootNode&&o.getRootNode().host);if(e.contains(o))return!0;if(n){var i=o;do{if(i&&e.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function ge(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ue(e,o){return"viewport"===o?ge(function(e){var o=k(e),n=o.visualViewport,i=o.innerWidth,a=o.innerHeight;return n&&/iPhone|iPod|iPad/.test(navigator.platform)&&(i=n.width,a=n.height),{width:i,height:a,x:0,y:0}}(e)):E(o)?w(o):ge(function(e){var o=k(e),n=x(e),i=P(z(e),o);return i.height=Math.max(i.height,o.innerHeight),i.width=Math.max(i.width,o.innerWidth),i.x=-n.scrollLeft,i.y=-n.scrollTop,i}(z(e)))}function le(e,o,n){var i="clippingParents"===o?function(e){var o=T(e),n=["absolute","fixed"].indexOf(I(e).position)>=0&&E(e)?B(e):e;return C(n)?o.filter((function(e){return C(e)&&de(e,n)})):[]}(e):[].concat(o),a=[].concat(i,[n]),r=a[0],t=a.reduce((function(o,n){var i=ue(e,n),a=ce(E(n)?n:z(e));return o.top=Math.max(i.top+a.top,o.top),o.right=Math.min(i.right-a.right,o.right),o.bottom=Math.min(i.bottom-a.bottom,o.bottom),o.left=Math.max(i.left+a.left,o.left),o}),ue(e,r));return t.width=t.right-t.left,t.height=t.bottom-t.top,t.x=t.left,t.y=t.top,t}function ve(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},{},e)}function fe(e,o){return o.reduce((function(o,n){return o[n]=e,o}),{})}function ye(e,o){void 0===o&&(o={});var n=o,i=n.placement,a=void 0===i?e.placement:i,r=n.boundary,t=void 0===r?"clippingParents":r,s=n.rootBoundary,m=void 0===s?"viewport":s,c=n.elementContext,d=void 0===c?"popper":c,g=n.altBoundary,u=void 0!==g&&g,l=n.padding,v=void 0===l?0:l,f=ve("number"!=typeof v?v:fe(v,H)),y="popper"===d?"reference":"popper",j=e.elements.reference,h=e.rects.popper,p=e.elements[u?y:d],b=le(C(p)?p:p.contextElement||z(e.elements.popper),t,m),k=w(j),x=oe({reference:k,element:h,strategy:"absolute",placement:a}),E=ge(Object.assign({},h,{},x)),_="popper"===d?E:k,O={top:b.top-_.top+f.top,bottom:_.bottom-b.bottom+f.bottom,left:b.left-_.left+f.left,right:_.right-b.right+f.right},I=e.modifiersData.offset;if("popper"===d&&I){var S=I[a];Object.keys(O).forEach((function(e){var o=[q,R].indexOf(e)>=0?1:-1,n=[D,R].indexOf(e)>=0?"y":"x";O[e]+=S[n]*o}))}return O}function je(e,o){void 0===o&&(o={});var n=o,i=n.placement,a=n.boundary,r=n.rootBoundary,t=n.padding,s=n.flipVariations,m=n.allowedAutoPlacements,c=void 0===m?W:m,d=Q(i),g=(d?s?U:U.filter((function(e){return Q(e)===d})):H).filter((function(e){return c.indexOf(e)>=0})).reduce((function(o,n){return o[n]=ye(e,{placement:n,boundary:a,rootBoundary:r,padding:t})[G(n)],o}),{});return Object.keys(g).sort((function(e,o){return g[e]-g[o]}))}function he(e,o,n){return Math.max(e,Math.min(o,n))}function pe(e,o,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-o.height-n.y,right:e.right-o.width+n.x,bottom:e.bottom-o.height+n.y,left:e.left-o.width-n.x}}function be(e){return[D,q,R,V].some((function(o){return e[o]>=0}))}var we=$({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var o=e.state,n=e.instance,i=e.options,a=i.scroll,r=void 0===a||a,t=i.resize,s=void 0===t||t,m=k(o.elements.popper),c=[].concat(o.scrollParents.reference,o.scrollParents.popper);return r&&c.forEach((function(e){e.addEventListener("scroll",n.update,Z)})),s&&m.addEventListener("resize",n.update,Z),function(){r&&c.forEach((function(e){e.removeEventListener("scroll",n.update,Z)})),s&&m.removeEventListener("resize",n.update,Z)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var o=e.state,n=e.name;o.modifiersData[n]=oe({reference:o.rects.reference,element:o.rects.popper,strategy:"absolute",placement:o.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var o=e.state,n=e.options,i=n.gpuAcceleration,a=void 0===i||i,r=n.adaptive,t=void 0===r||r,s={placement:G(o.placement),popper:o.elements.popper,popperRect:o.rects.popper,gpuAcceleration:a};null!=o.modifiersData.popperOffsets&&(o.styles.popper=Object.assign({},o.styles.popper,{},ie(Object.assign({},s,{offsets:o.modifiersData.popperOffsets,position:o.options.strategy,adaptive:t})))),null!=o.modifiersData.arrow&&(o.styles.arrow=Object.assign({},o.styles.arrow,{},ie(Object.assign({},s,{offsets:o.modifiersData.arrow,position:"absolute",adaptive:!1})))),o.attributes.popper=Object.assign({},o.attributes.popper,{"data-popper-placement":o.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var o=e.state;Object.keys(o.elements).forEach((function(e){var n=o.styles[e]||{},i=o.attributes[e]||{},a=o.elements[e];E(a)&&_(a)&&(Object.assign(a.style,n),Object.keys(i).forEach((function(e){var o=i[e];!1===o?a.removeAttribute(e):a.setAttribute(e,!0===o?"":o)})))}))},effect:function(e){var o=e.state,n={popper:{position:o.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(o.elements.popper.style,n.popper),o.elements.arrow&&Object.assign(o.elements.arrow.style,n.arrow),function(){Object.keys(o.elements).forEach((function(e){var i=o.elements[e],a=o.attributes[e]||{},r=Object.keys(o.styles.hasOwnProperty(e)?o.styles[e]:n[e]).reduce((function(e,o){return e[o]="",e}),{});E(i)&&_(i)&&(Object.assign(i.style,r),Object.keys(a).forEach((function(e){i.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var o=e.state,n=e.options,i=e.name,a=n.offset,r=void 0===a?[0,0]:a,t=W.reduce((function(e,n){return e[n]=function(e,o,n){var i=G(e),a=[V,D].indexOf(i)>=0?-1:1,r="function"==typeof n?n(Object.assign({},o,{placement:e})):n,t=r[0],s=r[1];return t=t||0,s=(s||0)*a,[V,q].indexOf(i)>=0?{x:s,y:t}:{x:t,y:s}}(n,o.rects,r),e}),{}),s=t[o.placement],m=s.x,c=s.y;null!=o.modifiersData.popperOffsets&&(o.modifiersData.popperOffsets.x+=m,o.modifiersData.popperOffsets.y+=c),o.modifiersData[i]=t}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var o=e.state,n=e.options,i=e.name;if(!o.modifiersData[i]._skip){for(var a=n.mainAxis,r=void 0===a||a,t=n.altAxis,s=void 0===t||t,m=n.fallbackPlacements,c=n.padding,d=n.boundary,g=n.rootBoundary,u=n.altBoundary,l=n.flipVariations,v=void 0===l||l,f=n.allowedAutoPlacements,y=o.options.placement,j=G(y),h=m||(j===y||!v?[re(y)]:function(e){if("auto"===G(e))return[];var o=re(e);return[se(e),o,se(o)]}(y)),p=[y].concat(h).reduce((function(e,n){return e.concat("auto"===G(n)?je(o,{placement:n,boundary:d,rootBoundary:g,padding:c,flipVariations:v,allowedAutoPlacements:f}):n)}),[]),b=o.rects.reference,w=o.rects.popper,k=new Map,x=!0,C=p[0],E=0;E<p.length;E++){var _=p[E],z=G(_),O="start"===Q(_),I=[D,R].indexOf(z)>=0,S=I?"width":"height",P=ye(o,{placement:_,boundary:d,rootBoundary:g,altBoundary:u,padding:c}),M=I?O?q:V:O?R:D;b[S]>w[S]&&(M=re(M));var A=re(M),L=[];if(r&&L.push(P[z]<=0),s&&L.push(P[M]<=0,P[A]<=0),L.every((function(e){return e}))){C=_,x=!1;break}k.set(_,L)}if(x)for(var T=function(e){var o=p.find((function(o){var n=k.get(o);if(n)return n.slice(0,e).every((function(e){return e}))}));if(o)return C=o,"break"},N=v?3:1;N>0;N--){if("break"===T(N))break}o.placement!==C&&(o.modifiersData[i]._skip=!0,o.placement=C,o.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var o=e.state,n=e.options,i=e.name,a=n.mainAxis,r=void 0===a||a,t=n.altAxis,s=void 0!==t&&t,m=n.boundary,c=n.rootBoundary,d=n.altBoundary,g=n.padding,u=n.tether,l=void 0===u||u,v=n.tetherOffset,f=void 0===v?0:v,y=ye(o,{boundary:m,rootBoundary:c,padding:g,altBoundary:d}),j=G(o.placement),h=Q(o.placement),p=!h,b=ee(j),w="x"===b?"y":"x",k=o.modifiersData.popperOffsets,x=o.rects.reference,C=o.rects.popper,E="function"==typeof f?f(Object.assign({},o.rects,{placement:o.placement})):f,_={x:0,y:0};if(k){if(r){var z="y"===b?D:V,O="y"===b?R:q,I="y"===b?"height":"width",S=k[b],P=k[b]+y[z],A=k[b]-y[O],L=l?-C[I]/2:0,T="start"===h?x[I]:C[I],N="start"===h?-C[I]:-x[I],F=o.elements.arrow,H=l&&F?M(F):{width:0,height:0},U=o.modifiersData["arrow#persistent"]?o.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},W=U[z],K=U[O],J=he(0,x[I],H[I]),X=p?x[I]/2-L-J-W-E:T-J-W-E,Y=p?-x[I]/2+L+J+K+E:N+J+K+E,$=o.elements.arrow&&B(o.elements.arrow),Z=$?"y"===b?$.clientTop||0:$.clientLeft||0:0,oe=o.modifiersData.offset?o.modifiersData.offset[o.placement][b]:0,ne=k[b]+X-oe-Z,ie=k[b]+Y-oe,ae=he(l?Math.min(P,ne):P,S,l?Math.max(A,ie):A);k[b]=ae,_[b]=ae-S}if(s){var re="x"===b?D:V,te="x"===b?R:q,se=k[w],me=he(se+y[re],se,se-y[te]);k[w]=me,_[w]=me-se}o.modifiersData[i]=_}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var o,n=e.state,i=e.name,a=n.elements.arrow,r=n.modifiersData.popperOffsets,t=G(n.placement),s=ee(t),m=[V,q].indexOf(t)>=0?"height":"width";if(a&&r){var c=n.modifiersData[i+"#persistent"].padding,d=M(a),g="y"===s?D:V,u="y"===s?R:q,l=n.rects.reference[m]+n.rects.reference[s]-r[s]-n.rects.popper[m],v=r[s]-n.rects.reference[s],f=B(a),y=f?"y"===s?f.clientHeight||0:f.clientWidth||0:0,j=l/2-v/2,h=c[g],p=y-d[m]-c[u],b=y/2-d[m]/2+j,w=he(h,b,p),k=s;n.modifiersData[i]=((o={})[k]=w,o.centerOffset=w-b,o)}},effect:function(e){var o=e.state,n=e.options,i=e.name,a=n.element,r=void 0===a?"[data-popper-arrow]":a,t=n.padding,s=void 0===t?0:t;null!=r&&("string"!=typeof r||(r=o.elements.popper.querySelector(r)))&&de(o.elements.popper,r)&&(o.elements.arrow=r,o.modifiersData[i+"#persistent"]={padding:ve("number"!=typeof s?s:fe(s,H))})},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var o=e.state,n=e.name,i=o.rects.reference,a=o.rects.popper,r=o.modifiersData.preventOverflow,t=ye(o,{elementContext:"reference"}),s=ye(o,{altBoundary:!0}),m=pe(t,i),c=pe(s,a,r),d=be(m),g=be(c);o.modifiersData[n]={referenceClippingOffsets:m,popperEscapeOffsets:c,isReferenceHidden:d,hasPopperEscaped:g},o.attributes.popper=Object.assign({},o.attributes.popper,{"data-popper-reference-hidden":d,"data-popper-escaped":g})}}]}),ke=function(){var e={base:"https://twemoji.maxcdn.com/v/13.0.0/",ext:".png",size:"72x72",className:"emoji",convert:{fromCodePoint:function(e){var o="string"==typeof e?parseInt(e,16):e;if(o<65536)return s(o);return s(55296+((o-=65536)>>10),56320+(1023&o))},toCodePoint:j},onerror:function(){this.parentNode&&this.parentNode.replaceChild(m(this.alt,!1),this)},parse:function(o,n){n&&"function"!=typeof n||(n={callback:n});return("string"==typeof o?l:u)(o,{callback:n.callback||c,attributes:"function"==typeof n.attributes?n.attributes:f,base:"string"==typeof n.base?n.base:e.base,ext:n.ext||e.ext,size:n.folder||(i=n.size||e.size,"number"==typeof i?i+"x"+i:i),className:n.className||e.className,onerror:n.onerror||e.onerror});var i},replace:y,test:function(e){n.lastIndex=0;var o=n.test(e);return n.lastIndex=0,o}},o={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},n=/(?:\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d])|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udeeb\udeec\udef4-\udefc\udfe0-\udfeb]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd1d\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78\udd7a-\uddb4\uddb7\uddba\uddbc-\uddcb\uddd0\uddde-\uddff\ude70-\ude74\ude78-\ude7a\ude80-\ude86\ude90-\udea8\udeb0-\udeb6\udec0-\udec2\uded0-\uded6]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g,i=/\uFE0F/g,a=String.fromCharCode(8205),r=/[&<>'"]/g,t=/^(?:iframe|noframes|noscript|script|select|style|textarea)$/,s=String.fromCharCode;return e;function m(e,o){return document.createTextNode(o?e.replace(i,""):e)}function c(e,o){return"".concat(o.base,o.size,"/",e,o.ext)}function d(e,o){for(var n,i,a=e.childNodes,r=a.length;r--;)3===(i=(n=a[r]).nodeType)?o.push(n):1!==i||"ownerSVGElement"in n||t.test(n.nodeName.toLowerCase())||d(n,o);return o}function g(e){return j(e.indexOf(a)<0?e.replace(i,""):e)}function u(e,o){for(var i,a,r,t,s,c,u,l,v,f,y,j,h,p=d(e,[]),b=p.length;b--;){for(r=!1,t=document.createDocumentFragment(),c=(s=p[b]).nodeValue,l=0;u=n.exec(c);){if((v=u.index)!==l&&t.appendChild(m(c.slice(l,v),!0)),j=g(y=u[0]),l=v+y.length,h=o.callback(j,o),j&&h){for(a in(f=new Image).onerror=o.onerror,f.setAttribute("draggable","false"),i=o.attributes(y,j))i.hasOwnProperty(a)&&0!==a.indexOf("on")&&!f.hasAttribute(a)&&f.setAttribute(a,i[a]);f.className=o.className,f.alt=y,f.src=h,r=!0,t.appendChild(f)}f||t.appendChild(m(y,!1)),f=null}r&&(l<c.length&&t.appendChild(m(c.slice(l),!0)),s.parentNode.replaceChild(t,s))}return e}function l(e,o){return y(e,(function(e){var n,i,a=e,t=g(e),s=o.callback(t,o);if(t&&s){for(i in a="<img ".concat('class="',o.className,'" ','draggable="false" ','alt="',e,'"',' src="',s,'"'),n=o.attributes(e,t))n.hasOwnProperty(i)&&0!==i.indexOf("on")&&-1===a.indexOf(" "+i+"=")&&(a=a.concat(" ",i,'="',n[i].replace(r,v),'"'));a=a.concat("/>")}return a}))}function v(e){return o[e]}function f(){return null}function y(e,o){return String(e).replace(n,o)}function j(e,o){for(var n=[],i=0,a=0,r=0;r<e.length;)i=e.charCodeAt(r++),a?(n.push((65536+(a-55296<<10)+(i-56320)).toString(16)),a=0):55296<=i&&i<=56319?a=i:n.push(i.toString(16));return n.join(o||"-")}}(),xe={categories:["smileys","people","animals","food","travel","activities","objects","symbols","flags"],emoji:[{emoji:"😀",category:0,name:"grinning face",version:"1.0"},{emoji:"😃",category:0,name:"grinning face with big eyes",version:"1.0"},{emoji:"😄",category:0,name:"grinning face with smiling eyes",version:"1.0"},{emoji:"😁",category:0,name:"beaming face with smiling eyes",version:"1.0"},{emoji:"😆",category:0,name:"grinning squinting face",version:"1.0"},{emoji:"😅",category:0,name:"grinning face with sweat",version:"1.0"},{emoji:"🤣",category:0,name:"rolling on the floor laughing",version:"3.0"},{emoji:"😂",category:0,name:"face with tears of joy",version:"1.0"},{emoji:"🙂",category:0,name:"slightly smiling face",version:"1.0"},{emoji:"🙃",category:0,name:"upside-down face",version:"1.0"},{emoji:"😉",category:0,name:"winking face",version:"1.0"},{emoji:"😊",category:0,name:"smiling face with smiling eyes",version:"1.0"},{emoji:"😇",category:0,name:"smiling face with halo",version:"1.0"},{emoji:"🥰",category:0,name:"smiling face with hearts",version:"11.0"},{emoji:"😍",category:0,name:"smiling face with heart-eyes",version:"1.0"},{emoji:"🤩",category:0,name:"star-struck",version:"5.0"},{emoji:"😘",category:0,name:"face blowing a kiss",version:"1.0"},{emoji:"😗",category:0,name:"kissing face",version:"1.0"},{emoji:"☺️",category:0,name:"smiling face",version:"1.0"},{emoji:"😚",category:0,name:"kissing face with closed eyes",version:"1.0"},{emoji:"😙",category:0,name:"kissing face with smiling eyes",version:"1.0"},{emoji:"🥲",category:0,name:"smiling face with tear",version:"13.0"},{emoji:"😋",category:0,name:"face savoring food",version:"1.0"},{emoji:"😛",category:0,name:"face with tongue",version:"1.0"},{emoji:"😜",category:0,name:"winking face with tongue",version:"1.0"},{emoji:"🤪",category:0,name:"zany face",version:"5.0"},{emoji:"😝",category:0,name:"squinting face with tongue",version:"1.0"},{emoji:"🤑",category:0,name:"money-mouth face",version:"1.0"},{emoji:"🤗",category:0,name:"hugging face",version:"1.0"},{emoji:"🤭",category:0,name:"face with hand over mouth",version:"5.0"},{emoji:"🤫",category:0,name:"shushing face",version:"5.0"},{emoji:"🤔",category:0,name:"thinking face",version:"1.0"},{emoji:"🤐",category:0,name:"zipper-mouth face",version:"1.0"},{emoji:"🤨",category:0,name:"face with raised eyebrow",version:"5.0"},{emoji:"😐",category:0,name:"neutral face",version:"1.0"},{emoji:"😑",category:0,name:"expressionless face",version:"1.0"},{emoji:"😶",category:0,name:"face without mouth",version:"1.0"},{emoji:"😏",category:0,name:"smirking face",version:"1.0"},{emoji:"😒",category:0,name:"unamused face",version:"1.0"},{emoji:"🙄",category:0,name:"face with rolling eyes",version:"1.0"},{emoji:"😬",category:0,name:"grimacing face",version:"1.0"},{emoji:"🤥",category:0,name:"lying face",version:"3.0"},{emoji:"😌",category:0,name:"relieved face",version:"1.0"},{emoji:"😔",category:0,name:"pensive face",version:"1.0"},{emoji:"😪",category:0,name:"sleepy face",version:"1.0"},{emoji:"🤤",category:0,name:"drooling face",version:"3.0"},{emoji:"😴",category:0,name:"sleeping face",version:"1.0"},{emoji:"😷",category:0,name:"face with medical mask",version:"1.0"},{emoji:"🤒",category:0,name:"face with thermometer",version:"1.0"},{emoji:"🤕",category:0,name:"face with head-bandage",version:"1.0"},{emoji:"🤢",category:0,name:"nauseated face",version:"3.0"},{emoji:"🤮",category:0,name:"face vomiting",version:"5.0"},{emoji:"🤧",category:0,name:"sneezing face",version:"3.0"},{emoji:"🥵",category:0,name:"hot face",version:"11.0"},{emoji:"🥶",category:0,name:"cold face",version:"11.0"},{emoji:"🥴",category:0,name:"woozy face",version:"11.0"},{emoji:"😵",category:0,name:"dizzy face",version:"1.0"},{emoji:"🤯",category:0,name:"exploding head",version:"5.0"},{emoji:"🤠",category:0,name:"cowboy hat face",version:"3.0"},{emoji:"🥳",category:0,name:"partying face",version:"11.0"},{emoji:"🥸",category:0,name:"disguised face",version:"13.0"},{emoji:"😎",category:0,name:"smiling face with sunglasses",version:"1.0"},{emoji:"🤓",category:0,name:"nerd face",version:"1.0"},{emoji:"🧐",category:0,name:"face with monocle",version:"5.0"},{emoji:"😕",category:0,name:"confused face",version:"1.0"},{emoji:"😟",category:0,name:"worried face",version:"1.0"},{emoji:"🙁",category:0,name:"slightly frowning face",version:"1.0"},{emoji:"☹️",category:0,name:"frowning face",version:"1.0"},{emoji:"😮",category:0,name:"face with open mouth",version:"1.0"},{emoji:"😯",category:0,name:"hushed face",version:"1.0"},{emoji:"😲",category:0,name:"astonished face",version:"1.0"},{emoji:"😳",category:0,name:"flushed face",version:"1.0"},{emoji:"🥺",category:0,name:"pleading face",version:"11.0"},{emoji:"😦",category:0,name:"frowning face with open mouth",version:"1.0"},{emoji:"😧",category:0,name:"anguished face",version:"1.0"},{emoji:"😨",category:0,name:"fearful face",version:"1.0"},{emoji:"😰",category:0,name:"anxious face with sweat",version:"1.0"},{emoji:"😥",category:0,name:"sad but relieved face",version:"1.0"},{emoji:"😢",category:0,name:"crying face",version:"1.0"},{emoji:"😭",category:0,name:"loudly crying face",version:"1.0"},{emoji:"😱",category:0,name:"face screaming in fear",version:"1.0"},{emoji:"😖",category:0,name:"confounded face",version:"1.0"},{emoji:"😣",category:0,name:"persevering face",version:"1.0"},{emoji:"😞",category:0,name:"disappointed face",version:"1.0"},{emoji:"😓",category:0,name:"downcast face with sweat",version:"1.0"},{emoji:"😩",category:0,name:"weary face",version:"1.0"},{emoji:"😫",category:0,name:"tired face",version:"1.0"},{emoji:"🥱",category:0,name:"yawning face",version:"12.0"},{emoji:"😤",category:0,name:"face with steam from nose",version:"1.0"},{emoji:"😡",category:0,name:"pouting face",version:"1.0"},{emoji:"😠",category:0,name:"angry face",version:"1.0"},{emoji:"🤬",category:0,name:"face with symbols on mouth",version:"5.0"},{emoji:"😈",category:0,name:"smiling face with horns",version:"1.0"},{emoji:"👿",category:0,name:"angry face with horns",version:"1.0"},{emoji:"💀",category:0,name:"skull",version:"1.0"},{emoji:"☠️",category:0,name:"skull and crossbones",version:"1.0"},{emoji:"💩",category:0,name:"pile of poo",version:"1.0"},{emoji:"🤡",category:0,name:"clown face",version:"3.0"},{emoji:"👹",category:0,name:"ogre",version:"1.0"},{emoji:"👺",category:0,name:"goblin",version:"1.0"},{emoji:"👻",category:0,name:"ghost",version:"1.0"},{emoji:"👽",category:0,name:"alien",version:"1.0"},{emoji:"👾",category:0,name:"alien monster",version:"1.0"},{emoji:"🤖",category:0,name:"robot",version:"1.0"},{emoji:"😺",category:0,name:"grinning cat",version:"1.0"},{emoji:"😸",category:0,name:"grinning cat with smiling eyes",version:"1.0"},{emoji:"😹",category:0,name:"cat with tears of joy",version:"1.0"},{emoji:"😻",category:0,name:"smiling cat with heart-eyes",version:"1.0"},{emoji:"😼",category:0,name:"cat with wry smile",version:"1.0"},{emoji:"😽",category:0,name:"kissing cat",version:"1.0"},{emoji:"🙀",category:0,name:"weary cat",version:"1.0"},{emoji:"😿",category:0,name:"crying cat",version:"1.0"},{emoji:"😾",category:0,name:"pouting cat",version:"1.0"},{emoji:"🙈",category:0,name:"see-no-evil monkey",version:"1.0"},{emoji:"🙉",category:0,name:"hear-no-evil monkey",version:"1.0"},{emoji:"🙊",category:0,name:"speak-no-evil monkey",version:"1.0"},{emoji:"💋",category:0,name:"kiss mark",version:"1.0"},{emoji:"💌",category:0,name:"love letter",version:"1.0"},{emoji:"💘",category:0,name:"heart with arrow",version:"1.0"},{emoji:"💝",category:0,name:"heart with ribbon",version:"1.0"},{emoji:"💖",category:0,name:"sparkling heart",version:"1.0"},{emoji:"💗",category:0,name:"growing heart",version:"1.0"},{emoji:"💓",category:0,name:"beating heart",version:"1.0"},{emoji:"💞",category:0,name:"revolving hearts",version:"1.0"},{emoji:"💕",category:0,name:"two hearts",version:"1.0"},{emoji:"💟",category:0,name:"heart decoration",version:"1.0"},{emoji:"❣️",category:0,name:"heart exclamation",version:"1.0"},{emoji:"💔",category:0,name:"broken heart",version:"1.0"},{emoji:"❤️",category:0,name:"red heart",version:"1.0"},{emoji:"🧡",category:0,name:"orange heart",version:"5.0"},{emoji:"💛",category:0,name:"yellow heart",version:"1.0"},{emoji:"💚",category:0,name:"green heart",version:"1.0"},{emoji:"💙",category:0,name:"blue heart",version:"1.0"},{emoji:"💜",category:0,name:"purple heart",version:"1.0"},{emoji:"🤎",category:0,name:"brown heart",version:"12.0"},{emoji:"🖤",category:0,name:"black heart",version:"3.0"},{emoji:"🤍",category:0,name:"white heart",version:"12.0"},{emoji:"💯",category:0,name:"hundred points",version:"1.0"},{emoji:"💢",category:0,name:"anger symbol",version:"1.0"},{emoji:"💥",category:0,name:"collision",version:"1.0"},{emoji:"💫",category:0,name:"dizzy",version:"1.0"},{emoji:"💦",category:0,name:"sweat droplets",version:"1.0"},{emoji:"💨",category:0,name:"dashing away",version:"1.0"},{emoji:"🕳️",category:0,name:"hole",version:"1.0"},{emoji:"💣",category:0,name:"bomb",version:"1.0"},{emoji:"💬",category:0,name:"speech balloon",version:"1.0"},{emoji:"👁️‍🗨️",category:0,name:"eye in speech bubble",version:"2.0"},{emoji:"🗨️",category:0,name:"left speech bubble",version:"2.0"},{emoji:"🗯️",category:0,name:"right anger bubble",version:"1.0"},{emoji:"💭",category:0,name:"thought balloon",version:"1.0"},{emoji:"💤",category:0,name:"zzz",version:"1.0"},{emoji:"👋",category:1,name:"waving hand",variations:["👋🏻","👋🏼","👋🏽","👋🏾","👋🏿"],version:"1.0"},{emoji:"🤚",category:1,name:"raised back of hand",variations:["🤚🏻","🤚🏼","🤚🏽","🤚🏾","🤚🏿"],version:"3.0"},{emoji:"🖐️",category:1,name:"hand with fingers splayed",variations:["🖐🏻","🖐🏼","🖐🏽","🖐🏾","🖐🏿"],version:"1.0"},{emoji:"✋",category:1,name:"raised hand",variations:["✋🏻","✋🏼","✋🏽","✋🏾","✋🏿"],version:"1.0"},{emoji:"🖖",category:1,name:"vulcan salute",variations:["🖖🏻","🖖🏼","🖖🏽","🖖🏾","🖖🏿"],version:"1.0"},{emoji:"👌",category:1,name:"OK hand",variations:["👌🏻","👌🏼","👌🏽","👌🏾","👌🏿"],version:"1.0"},{emoji:"🤌",category:1,name:"pinched fingers",variations:["🤌🏻","🤌🏼","🤌🏽","🤌🏾","🤌🏿"],version:"13.0"},{emoji:"🤏",category:1,name:"pinching hand",variations:["🤏🏻","🤏🏼","🤏🏽","🤏🏾","🤏🏿"],version:"12.0"},{emoji:"✌️",category:1,name:"victory hand",variations:["✌🏻","✌🏼","✌🏽","✌🏾","✌🏿"],version:"1.0"},{emoji:"🤞",category:1,name:"crossed fingers",variations:["🤞🏻","🤞🏼","🤞🏽","🤞🏾","🤞🏿"],version:"3.0"},{emoji:"🤟",category:1,name:"love-you gesture",variations:["🤟🏻","🤟🏼","🤟🏽","🤟🏾","🤟🏿"],version:"5.0"},{emoji:"🤘",category:1,name:"sign of the horns",variations:["🤘🏻","🤘🏼","🤘🏽","🤘🏾","🤘🏿"],version:"1.0"},{emoji:"🤙",category:1,name:"call me hand",variations:["🤙🏻","🤙🏼","🤙🏽","🤙🏾","🤙🏿"],version:"3.0"},{emoji:"👈",category:1,name:"backhand index pointing left",variations:["👈🏻","👈🏼","👈🏽","👈🏾","👈🏿"],version:"1.0"},{emoji:"👉",category:1,name:"backhand index pointing right",variations:["👉🏻","👉🏼","👉🏽","👉🏾","👉🏿"],version:"1.0"},{emoji:"👆",category:1,name:"backhand index pointing up",variations:["👆🏻","👆🏼","👆🏽","👆🏾","👆🏿"],version:"1.0"},{emoji:"🖕",category:1,name:"middle finger",variations:["🖕🏻","🖕🏼","🖕🏽","🖕🏾","🖕🏿"],version:"1.0"},{emoji:"👇",category:1,name:"backhand index pointing down",variations:["👇🏻","👇🏼","👇🏽","👇🏾","👇🏿"],version:"1.0"},{emoji:"☝️",category:1,name:"index pointing up",variations:["☝🏻","☝🏼","☝🏽","☝🏾","☝🏿"],version:"1.0"},{emoji:"👍",category:1,name:"thumbs up",variations:["👍🏻","👍🏼","👍🏽","👍🏾","👍🏿"],version:"1.0"},{emoji:"👎",category:1,name:"thumbs down",variations:["👎🏻","👎🏼","👎🏽","👎🏾","👎🏿"],version:"1.0"},{emoji:"✊",category:1,name:"raised fist",variations:["✊🏻","✊🏼","✊🏽","✊🏾","✊🏿"],version:"1.0"},{emoji:"👊",category:1,name:"oncoming fist",variations:["👊🏻","👊🏼","👊🏽","👊🏾","👊🏿"],version:"1.0"},{emoji:"🤛",category:1,name:"left-facing fist",variations:["🤛🏻","🤛🏼","🤛🏽","🤛🏾","🤛🏿"],version:"3.0"},{emoji:"🤜",category:1,name:"right-facing fist",variations:["🤜🏻","🤜🏼","🤜🏽","🤜🏾","🤜🏿"],version:"3.0"},{emoji:"👏",category:1,name:"clapping hands",variations:["👏🏻","👏🏼","👏🏽","👏🏾","👏🏿"],version:"1.0"},{emoji:"🙌",category:1,name:"raising hands",variations:["🙌🏻","🙌🏼","🙌🏽","🙌🏾","🙌🏿"],version:"1.0"},{emoji:"👐",category:1,name:"open hands",variations:["👐🏻","👐🏼","👐🏽","👐🏾","👐🏿"],version:"1.0"},{emoji:"🤲",category:1,name:"palms up together",variations:["🤲🏻","🤲🏼","🤲🏽","🤲🏾","🤲🏿"],version:"5.0"},{emoji:"🤝",category:1,name:"handshake",version:"3.0"},{emoji:"🙏",category:1,name:"folded hands",variations:["🙏🏻","🙏🏼","🙏🏽","🙏🏾","🙏🏿"],version:"1.0"},{emoji:"✍️",category:1,name:"writing hand",variations:["✍🏻","✍🏼","✍🏽","✍🏾","✍🏿"],version:"1.0"},{emoji:"💅",category:1,name:"nail polish",variations:["💅🏻","💅🏼","💅🏽","💅🏾","💅🏿"],version:"1.0"},{emoji:"🤳",category:1,name:"selfie",variations:["🤳🏻","🤳🏼","🤳🏽","🤳🏾","🤳🏿"],version:"3.0"},{emoji:"💪",category:1,name:"flexed biceps",variations:["💪🏻","💪🏼","💪🏽","💪🏾","💪🏿"],version:"1.0"},{emoji:"🦾",category:1,name:"mechanical arm",version:"12.0"},{emoji:"🦿",category:1,name:"mechanical leg",version:"12.0"},{emoji:"🦵",category:1,name:"leg",variations:["🦵🏻","🦵🏼","🦵🏽","🦵🏾","🦵🏿"],version:"11.0"},{emoji:"🦶",category:1,name:"foot",variations:["🦶🏻","🦶🏼","🦶🏽","🦶🏾","🦶🏿"],version:"11.0"},{emoji:"👂",category:1,name:"ear",variations:["👂🏻","👂🏼","👂🏽","👂🏾","👂🏿"],version:"1.0"},{emoji:"🦻",category:1,name:"ear with hearing aid",variations:["🦻🏻","🦻🏼","🦻🏽","🦻🏾","🦻🏿"],version:"12.0"},{emoji:"👃",category:1,name:"nose",variations:["👃🏻","👃🏼","👃🏽","👃🏾","👃🏿"],version:"1.0"},{emoji:"🧠",category:1,name:"brain",version:"5.0"},{emoji:"🫀",category:1,name:"anatomical heart",version:"13.0"},{emoji:"🫁",category:1,name:"lungs",version:"13.0"},{emoji:"🦷",category:1,name:"tooth",version:"11.0"},{emoji:"🦴",category:1,name:"bone",version:"11.0"},{emoji:"👀",category:1,name:"eyes",version:"1.0"},{emoji:"👁️",category:1,name:"eye",version:"1.0"},{emoji:"👅",category:1,name:"tongue",version:"1.0"},{emoji:"👄",category:1,name:"mouth",version:"1.0"},{emoji:"👶",category:1,name:"baby",variations:["👶🏻","👶🏼","👶🏽","👶🏾","👶🏿"],version:"1.0"},{emoji:"🧒",category:1,name:"child",variations:["🧒🏻","🧒🏼","🧒🏽","🧒🏾","🧒🏿"],version:"5.0"},{emoji:"👦",category:1,name:"boy",variations:["👦🏻","👦🏼","👦🏽","👦🏾","👦🏿"],version:"1.0"},{emoji:"👧",category:1,name:"girl",variations:["👧🏻","👧🏼","👧🏽","👧🏾","👧🏿"],version:"1.0"},{emoji:"🧑",category:1,name:"person",variations:["🧑🏻","🧑🏼","🧑🏽","🧑🏾","🧑🏿"],version:"5.0"},{emoji:"👱",category:1,name:"person with blond hair",variations:["👱🏻","👱🏼","👱🏽","👱🏾","👱🏿"],version:"1.0"},{emoji:"👨",category:1,name:"man",variations:["👨🏻","👨🏼","👨🏽","👨🏾","👨🏿"],version:"1.0"},{emoji:"🧔",category:1,name:"man with beard",variations:["🧔🏻","🧔🏼","🧔🏽","🧔🏾","🧔🏿"],version:"5.0"},{emoji:"👨‍🦰",category:1,name:"man with red hair",variations:["👨🏻‍🦰","👨🏼‍🦰","👨🏽‍🦰","👨🏾‍🦰","👨🏿‍🦰"],version:"11.0"},{emoji:"👨‍🦱",category:1,name:"man with curly hair",variations:["👨🏻‍🦱","👨🏼‍🦱","👨🏽‍🦱","👨🏾‍🦱","👨🏿‍🦱"],version:"11.0"},{emoji:"👨‍🦳",category:1,name:"man with white hair",variations:["👨🏻‍🦳","👨🏼‍🦳","👨🏽‍🦳","👨🏾‍🦳","👨🏿‍🦳"],version:"11.0"},{emoji:"👨‍🦲",category:1,name:"man with no hair",variations:["👨🏻‍🦲","👨🏼‍🦲","👨🏽‍🦲","👨🏾‍🦲","👨🏿‍🦲"],version:"11.0"},{emoji:"👩",category:1,name:"woman",variations:["👩🏻","👩🏼","👩🏽","👩🏾","👩🏿"],version:"1.0"},{emoji:"👩‍🦰",category:1,name:"woman with red hair",variations:["👩🏻‍🦰","👩🏼‍🦰","👩🏽‍🦰","👩🏾‍🦰","👩🏿‍🦰"],version:"11.0"},{emoji:"🧑‍🦰",category:1,name:"person with red hair",variations:["🧑🏻‍🦰","🧑🏼‍🦰","🧑🏽‍🦰","🧑🏾‍🦰","🧑🏿‍🦰"],version:"12.1"},{emoji:"👩‍🦱",category:1,name:"woman with curly hair",variations:["👩🏻‍🦱","👩🏼‍🦱","👩🏽‍🦱","👩🏾‍🦱","👩🏿‍🦱"],version:"11.0"},{emoji:"🧑‍🦱",category:1,name:"person with curly hair",variations:["🧑🏻‍🦱","🧑🏼‍🦱","🧑🏽‍🦱","🧑🏾‍🦱","🧑🏿‍🦱"],version:"12.1"},{emoji:"👩‍🦳",category:1,name:"woman with white hair",variations:["👩🏻‍🦳","👩🏼‍🦳","👩🏽‍🦳","👩🏾‍🦳","👩🏿‍🦳"],version:"11.0"},{emoji:"🧑‍🦳",category:1,name:"person with white hair",variations:["🧑🏻‍🦳","🧑🏼‍🦳","🧑🏽‍🦳","🧑🏾‍🦳","🧑🏿‍🦳"],version:"12.1"},{emoji:"👩‍🦲",category:1,name:"woman with no hair",variations:["👩🏻‍🦲","👩🏼‍🦲","👩🏽‍🦲","👩🏾‍🦲","👩🏿‍🦲"],version:"11.0"},{emoji:"🧑‍🦲",category:1,name:"person with no hair",variations:["🧑🏻‍🦲","🧑🏼‍🦲","🧑🏽‍🦲","🧑🏾‍🦲","🧑🏿‍🦲"],version:"12.1"},{emoji:"👱‍♀️",category:1,name:"woman with blond hair",variations:["👱🏻‍♀️","👱🏼‍♀️","👱🏽‍♀️","👱🏾‍♀️","👱🏿‍♀️"],version:"4.0"},{emoji:"👱‍♂️",category:1,name:"man with blond hair",variations:["👱🏻‍♂️","👱🏼‍♂️","👱🏽‍♂️","👱🏾‍♂️","👱🏿‍♂️"],version:"4.0"},{emoji:"🧓",category:1,name:"older person",variations:["🧓🏻","🧓🏼","🧓🏽","🧓🏾","🧓🏿"],version:"5.0"},{emoji:"👴",category:1,name:"old man",variations:["👴🏻","👴🏼","👴🏽","👴🏾","👴🏿"],version:"1.0"},{emoji:"👵",category:1,name:"old woman",variations:["👵🏻","👵🏼","👵🏽","👵🏾","👵🏿"],version:"1.0"},{emoji:"🙍",category:1,name:"person frowning",variations:["🙍🏻","🙍🏼","🙍🏽","🙍🏾","🙍🏿"],version:"1.0"},{emoji:"🙍‍♂️",category:1,name:"man frowning",variations:["🙍🏻‍♂️","🙍🏼‍♂️","🙍🏽‍♂️","🙍🏾‍♂️","🙍🏿‍♂️"],version:"4.0"},{emoji:"🙍‍♀️",category:1,name:"woman frowning",variations:["🙍🏻‍♀️","🙍🏼‍♀️","🙍🏽‍♀️","🙍🏾‍♀️","🙍🏿‍♀️"],version:"4.0"},{emoji:"🙎",category:1,name:"person pouting",variations:["🙎🏻","🙎🏼","🙎🏽","🙎🏾","🙎🏿"],version:"1.0"},{emoji:"🙎‍♂️",category:1,name:"man pouting",variations:["🙎🏻‍♂️","🙎🏼‍♂️","🙎🏽‍♂️","🙎🏾‍♂️","🙎🏿‍♂️"],version:"4.0"},{emoji:"🙎‍♀️",category:1,name:"woman pouting",variations:["🙎🏻‍♀️","🙎🏼‍♀️","🙎🏽‍♀️","🙎🏾‍♀️","🙎🏿‍♀️"],version:"4.0"},{emoji:"🙅",category:1,name:"person gesturing NO",variations:["🙅🏻","🙅🏼","🙅🏽","🙅🏾","🙅🏿"],version:"1.0"},{emoji:"🙅‍♂️",category:1,name:"man gesturing NO",variations:["🙅🏻‍♂️","🙅🏼‍♂️","🙅🏽‍♂️","🙅🏾‍♂️","🙅🏿‍♂️"],version:"4.0"},{emoji:"🙅‍♀️",category:1,name:"woman gesturing NO",variations:["🙅🏻‍♀️","🙅🏼‍♀️","🙅🏽‍♀️","🙅🏾‍♀️","🙅🏿‍♀️"],version:"4.0"},{emoji:"🙆",category:1,name:"person gesturing OK",variations:["🙆🏻","🙆🏼","🙆🏽","🙆🏾","🙆🏿"],version:"1.0"},{emoji:"🙆‍♂️",category:1,name:"man gesturing OK",variations:["🙆🏻‍♂️","🙆🏼‍♂️","🙆🏽‍♂️","🙆🏾‍♂️","🙆🏿‍♂️"],version:"4.0"},{emoji:"🙆‍♀️",category:1,name:"woman gesturing OK",variations:["🙆🏻‍♀️","🙆🏼‍♀️","🙆🏽‍♀️","🙆🏾‍♀️","🙆🏿‍♀️"],version:"4.0"},{emoji:"💁",category:1,name:"person tipping hand",variations:["💁🏻","💁🏼","💁🏽","💁🏾","💁🏿"],version:"1.0"},{emoji:"💁‍♂️",category:1,name:"man tipping hand",variations:["💁🏻‍♂️","💁🏼‍♂️","💁🏽‍♂️","💁🏾‍♂️","💁🏿‍♂️"],version:"4.0"},{emoji:"💁‍♀️",category:1,name:"woman tipping hand",variations:["💁🏻‍♀️","💁🏼‍♀️","💁🏽‍♀️","💁🏾‍♀️","💁🏿‍♀️"],version:"4.0"},{emoji:"🙋",category:1,name:"person raising hand",variations:["🙋🏻","🙋🏼","🙋🏽","🙋🏾","🙋🏿"],version:"1.0"},{emoji:"🙋‍♂️",category:1,name:"man raising hand",variations:["🙋🏻‍♂️","🙋🏼‍♂️","🙋🏽‍♂️","🙋🏾‍♂️","🙋🏿‍♂️"],version:"4.0"},{emoji:"🙋‍♀️",category:1,name:"woman raising hand",variations:["🙋🏻‍♀️","🙋🏼‍♀️","🙋🏽‍♀️","🙋🏾‍♀️","🙋🏿‍♀️"],version:"4.0"},{emoji:"🧏",category:1,name:"deaf person",variations:["🧏🏻","🧏🏼","🧏🏽","🧏🏾","🧏🏿"],version:"12.0"},{emoji:"🧏‍♂️",category:1,name:"deaf man",variations:["🧏🏻‍♂️","🧏🏼‍♂️","🧏🏽‍♂️","🧏🏾‍♂️","🧏🏿‍♂️"],version:"12.0"},{emoji:"🧏‍♀️",category:1,name:"deaf woman",variations:["🧏🏻‍♀️","🧏🏼‍♀️","🧏🏽‍♀️","🧏🏾‍♀️","🧏🏿‍♀️"],version:"12.0"},{emoji:"🙇",category:1,name:"person bowing",variations:["🙇🏻","🙇🏼","🙇🏽","🙇🏾","🙇🏿"],version:"1.0"},{emoji:"🙇‍♂️",category:1,name:"man bowing",variations:["🙇🏻‍♂️","🙇🏼‍♂️","🙇🏽‍♂️","🙇🏾‍♂️","🙇🏿‍♂️"],version:"4.0"},{emoji:"🙇‍♀️",category:1,name:"woman bowing",variations:["🙇🏻‍♀️","🙇🏼‍♀️","🙇🏽‍♀️","🙇🏾‍♀️","🙇🏿‍♀️"],version:"4.0"},{emoji:"🤦",category:1,name:"person facepalming",variations:["🤦🏻","🤦🏼","🤦🏽","🤦🏾","🤦🏿"],version:"3.0"},{emoji:"🤦‍♂️",category:1,name:"man facepalming",variations:["🤦🏻‍♂️","🤦🏼‍♂️","🤦🏽‍♂️","🤦🏾‍♂️","🤦🏿‍♂️"],version:"4.0"},{emoji:"🤦‍♀️",category:1,name:"woman facepalming",variations:["🤦🏻‍♀️","🤦🏼‍♀️","🤦🏽‍♀️","🤦🏾‍♀️","🤦🏿‍♀️"],version:"4.0"},{emoji:"🤷",category:1,name:"person shrugging",variations:["🤷🏻","🤷🏼","🤷🏽","🤷🏾","🤷🏿"],version:"3.0"},{emoji:"🤷‍♂️",category:1,name:"man shrugging",variations:["🤷🏻‍♂️","🤷🏼‍♂️","🤷🏽‍♂️","🤷🏾‍♂️","🤷🏿‍♂️"],version:"4.0"},{emoji:"🤷‍♀️",category:1,name:"woman shrugging",variations:["🤷🏻‍♀️","🤷🏼‍♀️","🤷🏽‍♀️","🤷🏾‍♀️","🤷🏿‍♀️"],version:"4.0"},{emoji:"🧑‍⚕️",category:1,name:"health worker",variations:["🧑🏻‍⚕️","🧑🏼‍⚕️","🧑🏽‍⚕️","🧑🏾‍⚕️","🧑🏿‍⚕️"],version:"12.1"},{emoji:"👨‍⚕️",category:1,name:"man health worker",variations:["👨🏻‍⚕️","👨🏼‍⚕️","👨🏽‍⚕️","👨🏾‍⚕️","👨🏿‍⚕️"],version:"4.0"},{emoji:"👩‍⚕️",category:1,name:"woman health worker",variations:["👩🏻‍⚕️","👩🏼‍⚕️","👩🏽‍⚕️","👩🏾‍⚕️","👩🏿‍⚕️"],version:"4.0"},{emoji:"🧑‍🎓",category:1,name:"student",variations:["🧑🏻‍🎓","🧑🏼‍🎓","🧑🏽‍🎓","🧑🏾‍🎓","🧑🏿‍🎓"],version:"12.1"},{emoji:"👨‍🎓",category:1,name:"man student",variations:["👨🏻‍🎓","👨🏼‍🎓","👨🏽‍🎓","👨🏾‍🎓","👨🏿‍🎓"],version:"4.0"},{emoji:"👩‍🎓",category:1,name:"woman student",variations:["👩🏻‍🎓","👩🏼‍🎓","👩🏽‍🎓","👩🏾‍🎓","👩🏿‍🎓"],version:"4.0"},{emoji:"🧑‍🏫",category:1,name:"teacher",variations:["🧑🏻‍🏫","🧑🏼‍🏫","🧑🏽‍🏫","🧑🏾‍🏫","🧑🏿‍🏫"],version:"12.1"},{emoji:"👨‍🏫",category:1,name:"man teacher",variations:["👨🏻‍🏫","👨🏼‍🏫","👨🏽‍🏫","👨🏾‍🏫","👨🏿‍🏫"],version:"4.0"},{emoji:"👩‍🏫",category:1,name:"woman teacher",variations:["👩🏻‍🏫","👩🏼‍🏫","👩🏽‍🏫","👩🏾‍🏫","👩🏿‍🏫"],version:"4.0"},{emoji:"🧑‍⚖️",category:1,name:"judge",variations:["🧑🏻‍⚖️","🧑🏼‍⚖️","🧑🏽‍⚖️","🧑🏾‍⚖️","🧑🏿‍⚖️"],version:"12.1"},{emoji:"👨‍⚖️",category:1,name:"man judge",variations:["👨🏻‍⚖️","👨🏼‍⚖️","👨🏽‍⚖️","👨🏾‍⚖️","👨🏿‍⚖️"],version:"4.0"},{emoji:"👩‍⚖️",category:1,name:"woman judge",variations:["👩🏻‍⚖️","👩🏼‍⚖️","👩🏽‍⚖️","👩🏾‍⚖️","👩🏿‍⚖️"],version:"4.0"},{emoji:"🧑‍🌾",category:1,name:"farmer",variations:["🧑🏻‍🌾","🧑🏼‍🌾","🧑🏽‍🌾","🧑🏾‍🌾","🧑🏿‍🌾"],version:"12.1"},{emoji:"👨‍🌾",category:1,name:"man farmer",variations:["👨🏻‍🌾","👨🏼‍🌾","👨🏽‍🌾","👨🏾‍🌾","👨🏿‍🌾"],version:"4.0"},{emoji:"👩‍🌾",category:1,name:"woman farmer",variations:["👩🏻‍🌾","👩🏼‍🌾","👩🏽‍🌾","👩🏾‍🌾","👩🏿‍🌾"],version:"4.0"},{emoji:"🧑‍🍳",category:1,name:"cook",variations:["🧑🏻‍🍳","🧑🏼‍🍳","🧑🏽‍🍳","🧑🏾‍🍳","🧑🏿‍🍳"],version:"12.1"},{emoji:"👨‍🍳",category:1,name:"man cook",variations:["👨🏻‍🍳","👨🏼‍🍳","👨🏽‍🍳","👨🏾‍🍳","👨🏿‍🍳"],version:"4.0"},{emoji:"👩‍🍳",category:1,name:"woman cook",variations:["👩🏻‍🍳","👩🏼‍🍳","👩🏽‍🍳","👩🏾‍🍳","👩🏿‍🍳"],version:"4.0"},{emoji:"🧑‍🔧",category:1,name:"mechanic",variations:["🧑🏻‍🔧","🧑🏼‍🔧","🧑🏽‍🔧","🧑🏾‍🔧","🧑🏿‍🔧"],version:"12.1"},{emoji:"👨‍🔧",category:1,name:"man mechanic",variations:["👨🏻‍🔧","👨🏼‍🔧","👨🏽‍🔧","👨🏾‍🔧","👨🏿‍🔧"],version:"4.0"},{emoji:"👩‍🔧",category:1,name:"woman mechanic",variations:["👩🏻‍🔧","👩🏼‍🔧","👩🏽‍🔧","👩🏾‍🔧","👩🏿‍🔧"],version:"4.0"},{emoji:"🧑‍🏭",category:1,name:"factory worker",variations:["🧑🏻‍🏭","🧑🏼‍🏭","🧑🏽‍🏭","🧑🏾‍🏭","🧑🏿‍🏭"],version:"12.1"},{emoji:"👨‍🏭",category:1,name:"man factory worker",variations:["👨🏻‍🏭","👨🏼‍🏭","👨🏽‍🏭","👨🏾‍🏭","👨🏿‍🏭"],version:"4.0"},{emoji:"👩‍🏭",category:1,name:"woman factory worker",variations:["👩🏻‍🏭","👩🏼‍🏭","👩🏽‍🏭","👩🏾‍🏭","👩🏿‍🏭"],version:"4.0"},{emoji:"🧑‍💼",category:1,name:"office worker",variations:["🧑🏻‍💼","🧑🏼‍💼","🧑🏽‍💼","🧑🏾‍💼","🧑🏿‍💼"],version:"12.1"},{emoji:"👨‍💼",category:1,name:"man office worker",variations:["👨🏻‍💼","👨🏼‍💼","👨🏽‍💼","👨🏾‍💼","👨🏿‍💼"],version:"4.0"},{emoji:"👩‍💼",category:1,name:"woman office worker",variations:["👩🏻‍💼","👩🏼‍💼","👩🏽‍💼","👩🏾‍💼","👩🏿‍💼"],version:"4.0"},{emoji:"🧑‍🔬",category:1,name:"scientist",variations:["🧑🏻‍🔬","🧑🏼‍🔬","🧑🏽‍🔬","🧑🏾‍🔬","🧑🏿‍🔬"],version:"12.1"},{emoji:"👨‍🔬",category:1,name:"man scientist",variations:["👨🏻‍🔬","👨🏼‍🔬","👨🏽‍🔬","👨🏾‍🔬","👨🏿‍🔬"],version:"4.0"},{emoji:"👩‍🔬",category:1,name:"woman scientist",variations:["👩🏻‍🔬","👩🏼‍🔬","👩🏽‍🔬","👩🏾‍🔬","👩🏿‍🔬"],version:"4.0"},{emoji:"🧑‍💻",category:1,name:"technologist",variations:["🧑🏻‍💻","🧑🏼‍💻","🧑🏽‍💻","🧑🏾‍💻","🧑🏿‍💻"],version:"12.1"},{emoji:"👨‍💻",category:1,name:"man technologist",variations:["👨🏻‍💻","👨🏼‍💻","👨🏽‍💻","👨🏾‍💻","👨🏿‍💻"],version:"4.0"},{emoji:"👩‍💻",category:1,name:"woman technologist",variations:["👩🏻‍💻","👩🏼‍💻","👩🏽‍💻","👩🏾‍💻","👩🏿‍💻"],version:"4.0"},{emoji:"🧑‍🎤",category:1,name:"singer",variations:["🧑🏻‍🎤","🧑🏼‍🎤","🧑🏽‍🎤","🧑🏾‍🎤","🧑🏿‍🎤"],version:"12.1"},{emoji:"👨‍🎤",category:1,name:"man singer",variations:["👨🏻‍🎤","👨🏼‍🎤","👨🏽‍🎤","👨🏾‍🎤","👨🏿‍🎤"],version:"4.0"},{emoji:"👩‍🎤",category:1,name:"woman singer",variations:["👩🏻‍🎤","👩🏼‍🎤","👩🏽‍🎤","👩🏾‍🎤","👩🏿‍🎤"],version:"4.0"},{emoji:"🧑‍🎨",category:1,name:"artist",variations:["🧑🏻‍🎨","🧑🏼‍🎨","🧑🏽‍🎨","🧑🏾‍🎨","🧑🏿‍🎨"],version:"12.1"},{emoji:"👨‍🎨",category:1,name:"man artist",variations:["👨🏻‍🎨","👨🏼‍🎨","👨🏽‍🎨","👨🏾‍🎨","👨🏿‍🎨"],version:"4.0"},{emoji:"👩‍🎨",category:1,name:"woman artist",variations:["👩🏻‍🎨","👩🏼‍🎨","👩🏽‍🎨","👩🏾‍🎨","👩🏿‍🎨"],version:"4.0"},{emoji:"🧑‍✈️",category:1,name:"pilot",variations:["🧑🏻‍✈️","🧑🏼‍✈️","🧑🏽‍✈️","🧑🏾‍✈️","🧑🏿‍✈️"],version:"12.1"},{emoji:"👨‍✈️",category:1,name:"man pilot",variations:["👨🏻‍✈️","👨🏼‍✈️","👨🏽‍✈️","👨🏾‍✈️","👨🏿‍✈️"],version:"4.0"},{emoji:"👩‍✈️",category:1,name:"woman pilot",variations:["👩🏻‍✈️","👩🏼‍✈️","👩🏽‍✈️","👩🏾‍✈️","👩🏿‍✈️"],version:"4.0"},{emoji:"🧑‍🚀",category:1,name:"astronaut",variations:["🧑🏻‍🚀","🧑🏼‍🚀","🧑🏽‍🚀","🧑🏾‍🚀","🧑🏿‍🚀"],version:"12.1"},{emoji:"👨‍🚀",category:1,name:"man astronaut",variations:["👨🏻‍🚀","👨🏼‍🚀","👨🏽‍🚀","👨🏾‍🚀","👨🏿‍🚀"],version:"4.0"},{emoji:"👩‍🚀",category:1,name:"woman astronaut",variations:["👩🏻‍🚀","👩🏼‍🚀","👩🏽‍🚀","👩🏾‍🚀","👩🏿‍🚀"],version:"4.0"},{emoji:"🧑‍🚒",category:1,name:"firefighter",variations:["🧑🏻‍🚒","🧑🏼‍🚒","🧑🏽‍🚒","🧑🏾‍🚒","🧑🏿‍🚒"],version:"12.1"},{emoji:"👨‍🚒",category:1,name:"man firefighter",variations:["👨🏻‍🚒","👨🏼‍🚒","👨🏽‍🚒","👨🏾‍🚒","👨🏿‍🚒"],version:"4.0"},{emoji:"👩‍🚒",category:1,name:"woman firefighter",variations:["👩🏻‍🚒","👩🏼‍🚒","👩🏽‍🚒","👩🏾‍🚒","👩🏿‍🚒"],version:"4.0"},{emoji:"👮",category:1,name:"police officer",variations:["👮🏻","👮🏼","👮🏽","👮🏾","👮🏿"],version:"1.0"},{emoji:"👮‍♂️",category:1,name:"man police officer",variations:["👮🏻‍♂️","👮🏼‍♂️","👮🏽‍♂️","👮🏾‍♂️","👮🏿‍♂️"],version:"4.0"},{emoji:"👮‍♀️",category:1,name:"woman police officer",variations:["👮🏻‍♀️","👮🏼‍♀️","👮🏽‍♀️","👮🏾‍♀️","👮🏿‍♀️"],version:"4.0"},{emoji:"🕵️",category:1,name:"detective",variations:["🕵🏻","🕵🏼","🕵🏽","🕵🏾","🕵🏿"],version:"1.0"},{emoji:"🕵️‍♂️",category:1,name:"man detective",variations:["🕵🏻‍♂️","🕵🏼‍♂️","🕵🏽‍♂️","🕵🏾‍♂️","🕵🏿‍♂️"],version:"4.0"},{emoji:"🕵️‍♀️",category:1,name:"woman detective",variations:["🕵🏻‍♀️","🕵🏼‍♀️","🕵🏽‍♀️","🕵🏾‍♀️","🕵🏿‍♀️"],version:"4.0"},{emoji:"💂",category:1,name:"guard",variations:["💂🏻","💂🏼","💂🏽","💂🏾","💂🏿"],version:"1.0"},{emoji:"💂‍♂️",category:1,name:"man guard",variations:["💂🏻‍♂️","💂🏼‍♂️","💂🏽‍♂️","💂🏾‍♂️","💂🏿‍♂️"],version:"4.0"},{emoji:"💂‍♀️",category:1,name:"woman guard",variations:["💂🏻‍♀️","💂🏼‍♀️","💂🏽‍♀️","💂🏾‍♀️","💂🏿‍♀️"],version:"4.0"},{emoji:"🥷",category:1,name:"ninja",variations:["🥷🏻","🥷🏼","🥷🏽","🥷🏾","🥷🏿"],version:"13.0"},{emoji:"👷",category:1,name:"construction worker",variations:["👷🏻","👷🏼","👷🏽","👷🏾","👷🏿"],version:"1.0"},{emoji:"👷‍♂️",category:1,name:"man construction worker",variations:["👷🏻‍♂️","👷🏼‍♂️","👷🏽‍♂️","👷🏾‍♂️","👷🏿‍♂️"],version:"4.0"},{emoji:"👷‍♀️",category:1,name:"woman construction worker",variations:["👷🏻‍♀️","👷🏼‍♀️","👷🏽‍♀️","👷🏾‍♀️","👷🏿‍♀️"],version:"4.0"},{emoji:"🤴",category:1,name:"prince",variations:["🤴🏻","🤴🏼","🤴🏽","🤴🏾","🤴🏿"],version:"3.0"},{emoji:"👸",category:1,name:"princess",variations:["👸🏻","👸🏼","👸🏽","👸🏾","👸🏿"],version:"1.0"},{emoji:"👳",category:1,name:"person wearing turban",variations:["👳🏻","👳🏼","👳🏽","👳🏾","👳🏿"],version:"1.0"},{emoji:"👳‍♂️",category:1,name:"man wearing turban",variations:["👳🏻‍♂️","👳🏼‍♂️","👳🏽‍♂️","👳🏾‍♂️","👳🏿‍♂️"],version:"4.0"},{emoji:"👳‍♀️",category:1,name:"woman wearing turban",variations:["👳🏻‍♀️","👳🏼‍♀️","👳🏽‍♀️","👳🏾‍♀️","👳🏿‍♀️"],version:"4.0"},{emoji:"👲",category:1,name:"person with skullcap",variations:["👲🏻","👲🏼","👲🏽","👲🏾","👲🏿"],version:"1.0"},{emoji:"🧕",category:1,name:"woman with headscarf",variations:["🧕🏻","🧕🏼","🧕🏽","🧕🏾","🧕🏿"],version:"5.0"},{emoji:"🤵",category:1,name:"person in tuxedo",variations:["🤵🏻","🤵🏼","🤵🏽","🤵🏾","🤵🏿"],version:"3.0"},{emoji:"🤵‍♂️",category:1,name:"man in tuxedo",variations:["🤵🏻‍♂️","🤵🏼‍♂️","🤵🏽‍♂️","🤵🏾‍♂️","🤵🏿‍♂️"],version:"13.0"},{emoji:"🤵‍♀️",category:1,name:"woman in tuxedo",variations:["🤵🏻‍♀️","🤵🏼‍♀️","🤵🏽‍♀️","🤵🏾‍♀️","🤵🏿‍♀️"],version:"13.0"},{emoji:"👰",category:1,name:"person with veil",variations:["👰🏻","👰🏼","👰🏽","👰🏾","👰🏿"],version:"1.0"},{emoji:"👰‍♂️",category:1,name:"man with veil",variations:["👰🏻‍♂️","👰🏼‍♂️","👰🏽‍♂️","👰🏾‍♂️","👰🏿‍♂️"],version:"13.0"},{emoji:"👰‍♀️",category:1,name:"woman with veil",variations:["👰🏻‍♀️","👰🏼‍♀️","👰🏽‍♀️","👰🏾‍♀️","👰🏿‍♀️"],version:"13.0"},{emoji:"🤰",category:1,name:"pregnant woman",variations:["🤰🏻","🤰🏼","🤰🏽","🤰🏾","🤰🏿"],version:"3.0"},{emoji:"🤱",category:1,name:"breast-feeding",variations:["🤱🏻","🤱🏼","🤱🏽","🤱🏾","🤱🏿"],version:"5.0"},{emoji:"👩‍🍼",category:1,name:"woman feeding baby",variations:["👩🏻‍🍼","👩🏼‍🍼","👩🏽‍🍼","👩🏾‍🍼","👩🏿‍🍼"],version:"13.0"},{emoji:"👨‍🍼",category:1,name:"man feeding baby",variations:["👨🏻‍🍼","👨🏼‍🍼","👨🏽‍🍼","👨🏾‍🍼","👨🏿‍🍼"],version:"13.0"},{emoji:"🧑‍🍼",category:1,name:"person feeding baby",variations:["🧑🏻‍🍼","🧑🏼‍🍼","🧑🏽‍🍼","🧑🏾‍🍼","🧑🏿‍🍼"],version:"13.0"},{emoji:"👼",category:1,name:"baby angel",variations:["👼🏻","👼🏼","👼🏽","👼🏾","👼🏿"],version:"1.0"},{emoji:"🎅",category:1,name:"Santa Claus",variations:["🎅🏻","🎅🏼","🎅🏽","🎅🏾","🎅🏿"],version:"1.0"},{emoji:"🤶",category:1,name:"Mrs. Claus",variations:["🤶🏻","🤶🏼","🤶🏽","🤶🏾","🤶🏿"],version:"3.0"},{emoji:"🧑‍🎄",category:1,name:"mx claus",variations:["🧑🏻‍🎄","🧑🏼‍🎄","🧑🏽‍🎄","🧑🏾‍🎄","🧑🏿‍🎄"],version:"13.0"},{emoji:"🦸",category:1,name:"superhero",variations:["🦸🏻","🦸🏼","🦸🏽","🦸🏾","🦸🏿"],version:"11.0"},{emoji:"🦸‍♂️",category:1,name:"man superhero",variations:["🦸🏻‍♂️","🦸🏼‍♂️","🦸🏽‍♂️","🦸🏾‍♂️","🦸🏿‍♂️"],version:"11.0"},{emoji:"🦸‍♀️",category:1,name:"woman superhero",variations:["🦸🏻‍♀️","🦸🏼‍♀️","🦸🏽‍♀️","🦸🏾‍♀️","🦸🏿‍♀️"],version:"11.0"},{emoji:"🦹",category:1,name:"supervillain",variations:["🦹🏻","🦹🏼","🦹🏽","🦹🏾","🦹🏿"],version:"11.0"},{emoji:"🦹‍♂️",category:1,name:"man supervillain",variations:["🦹🏻‍♂️","🦹🏼‍♂️","🦹🏽‍♂️","🦹🏾‍♂️","🦹🏿‍♂️"],version:"11.0"},{emoji:"🦹‍♀️",category:1,name:"woman supervillain",variations:["🦹🏻‍♀️","🦹🏼‍♀️","🦹🏽‍♀️","🦹🏾‍♀️","🦹🏿‍♀️"],version:"11.0"},{emoji:"🧙",category:1,name:"mage",variations:["🧙🏻","🧙🏼","🧙🏽","🧙🏾","🧙🏿"],version:"5.0"},{emoji:"🧙‍♂️",category:1,name:"man mage",variations:["🧙🏻‍♂️","🧙🏼‍♂️","🧙🏽‍♂️","🧙🏾‍♂️","🧙🏿‍♂️"],version:"5.0"},{emoji:"🧙‍♀️",category:1,name:"woman mage",variations:["🧙🏻‍♀️","🧙🏼‍♀️","🧙🏽‍♀️","🧙🏾‍♀️","🧙🏿‍♀️"],version:"5.0"},{emoji:"🧚",category:1,name:"fairy",variations:["🧚🏻","🧚🏼","🧚🏽","🧚🏾","🧚🏿"],version:"5.0"},{emoji:"🧚‍♂️",category:1,name:"man fairy",variations:["🧚🏻‍♂️","🧚🏼‍♂️","🧚🏽‍♂️","🧚🏾‍♂️","🧚🏿‍♂️"],version:"5.0"},{emoji:"🧚‍♀️",category:1,name:"woman fairy",variations:["🧚🏻‍♀️","🧚🏼‍♀️","🧚🏽‍♀️","🧚🏾‍♀️","🧚🏿‍♀️"],version:"5.0"},{emoji:"🧛",category:1,name:"vampire",variations:["🧛🏻","🧛🏼","🧛🏽","🧛🏾","🧛🏿"],version:"5.0"},{emoji:"🧛‍♂️",category:1,name:"man vampire",variations:["🧛🏻‍♂️","🧛🏼‍♂️","🧛🏽‍♂️","🧛🏾‍♂️","🧛🏿‍♂️"],version:"5.0"},{emoji:"🧛‍♀️",category:1,name:"woman vampire",variations:["🧛🏻‍♀️","🧛🏼‍♀️","🧛🏽‍♀️","🧛🏾‍♀️","🧛🏿‍♀️"],version:"5.0"},{emoji:"🧜",category:1,name:"merperson",variations:["🧜🏻","🧜🏼","🧜🏽","🧜🏾","🧜🏿"],version:"5.0"},{emoji:"🧜‍♂️",category:1,name:"merman",variations:["🧜🏻‍♂️","🧜🏼‍♂️","🧜🏽‍♂️","🧜🏾‍♂️","🧜🏿‍♂️"],version:"5.0"},{emoji:"🧜‍♀️",category:1,name:"mermaid",variations:["🧜🏻‍♀️","🧜🏼‍♀️","🧜🏽‍♀️","🧜🏾‍♀️","🧜🏿‍♀️"],version:"5.0"},{emoji:"🧝",category:1,name:"elf",variations:["🧝🏻","🧝🏼","🧝🏽","🧝🏾","🧝🏿"],version:"5.0"},{emoji:"🧝‍♂️",category:1,name:"man elf",variations:["🧝🏻‍♂️","🧝🏼‍♂️","🧝🏽‍♂️","🧝🏾‍♂️","🧝🏿‍♂️"],version:"5.0"},{emoji:"🧝‍♀️",category:1,name:"woman elf",variations:["🧝🏻‍♀️","🧝🏼‍♀️","🧝🏽‍♀️","🧝🏾‍♀️","🧝🏿‍♀️"],version:"5.0"},{emoji:"🧞",category:1,name:"genie",version:"5.0"},{emoji:"🧞‍♂️",category:1,name:"man genie",version:"5.0"},{emoji:"🧞‍♀️",category:1,name:"woman genie",version:"5.0"},{emoji:"🧟",category:1,name:"zombie",version:"5.0"},{emoji:"🧟‍♂️",category:1,name:"man zombie",version:"5.0"},{emoji:"🧟‍♀️",category:1,name:"woman zombie",version:"5.0"},{emoji:"💆",category:1,name:"person getting massage",variations:["💆🏻","💆🏼","💆🏽","💆🏾","💆🏿"],version:"1.0"},{emoji:"💆‍♂️",category:1,name:"man getting massage",variations:["💆🏻‍♂️","💆🏼‍♂️","💆🏽‍♂️","💆🏾‍♂️","💆🏿‍♂️"],version:"4.0"},{emoji:"💆‍♀️",category:1,name:"woman getting massage",variations:["💆🏻‍♀️","💆🏼‍♀️","💆🏽‍♀️","💆🏾‍♀️","💆🏿‍♀️"],version:"4.0"},{emoji:"💇",category:1,name:"person getting haircut",variations:["💇🏻","💇🏼","💇🏽","💇🏾","💇🏿"],version:"1.0"},{emoji:"💇‍♂️",category:1,name:"man getting haircut",variations:["💇🏻‍♂️","💇🏼‍♂️","💇🏽‍♂️","💇🏾‍♂️","💇🏿‍♂️"],version:"4.0"},{emoji:"💇‍♀️",category:1,name:"woman getting haircut",variations:["💇🏻‍♀️","💇🏼‍♀️","💇🏽‍♀️","💇🏾‍♀️","💇🏿‍♀️"],version:"4.0"},{emoji:"🚶",category:1,name:"person walking",variations:["🚶🏻","🚶🏼","🚶🏽","🚶🏾","🚶🏿"],version:"1.0"},{emoji:"🚶‍♂️",category:1,name:"man walking",variations:["🚶🏻‍♂️","🚶🏼‍♂️","🚶🏽‍♂️","🚶🏾‍♂️","🚶🏿‍♂️"],version:"4.0"},{emoji:"🚶‍♀️",category:1,name:"woman walking",variations:["🚶🏻‍♀️","🚶🏼‍♀️","🚶🏽‍♀️","🚶🏾‍♀️","🚶🏿‍♀️"],version:"4.0"},{emoji:"🧍",category:1,name:"person standing",variations:["🧍🏻","🧍🏼","🧍🏽","🧍🏾","🧍🏿"],version:"12.0"},{emoji:"🧍‍♂️",category:1,name:"man standing",variations:["🧍🏻‍♂️","🧍🏼‍♂️","🧍🏽‍♂️","🧍🏾‍♂️","🧍🏿‍♂️"],version:"12.0"},{emoji:"🧍‍♀️",category:1,name:"woman standing",variations:["🧍🏻‍♀️","🧍🏼‍♀️","🧍🏽‍♀️","🧍🏾‍♀️","🧍🏿‍♀️"],version:"12.0"},{emoji:"🧎",category:1,name:"person kneeling",variations:["🧎🏻","🧎🏼","🧎🏽","🧎🏾","🧎🏿"],version:"12.0"},{emoji:"🧎‍♂️",category:1,name:"man kneeling",variations:["🧎🏻‍♂️","🧎🏼‍♂️","🧎🏽‍♂️","🧎🏾‍♂️","🧎🏿‍♂️"],version:"12.0"},{emoji:"🧎‍♀️",category:1,name:"woman kneeling",variations:["🧎🏻‍♀️","🧎🏼‍♀️","🧎🏽‍♀️","🧎🏾‍♀️","🧎🏿‍♀️"],version:"12.0"},{emoji:"🧑‍🦯",category:1,name:"person with white cane",variations:["🧑🏻‍🦯","🧑🏼‍🦯","🧑🏽‍🦯","🧑🏾‍🦯","🧑🏿‍🦯"],version:"12.1"},{emoji:"👨‍🦯",category:1,name:"man with white cane",variations:["👨🏻‍🦯","👨🏼‍🦯","👨🏽‍🦯","👨🏾‍🦯","👨🏿‍🦯"],version:"12.0"},{emoji:"👩‍🦯",category:1,name:"woman with white cane",variations:["👩🏻‍🦯","👩🏼‍🦯","👩🏽‍🦯","👩🏾‍🦯","👩🏿‍🦯"],version:"12.0"},{emoji:"🧑‍🦼",category:1,name:"person in motorized wheelchair",variations:["🧑🏻‍🦼","🧑🏼‍🦼","🧑🏽‍🦼","🧑🏾‍🦼","🧑🏿‍🦼"],version:"12.1"},{emoji:"👨‍🦼",category:1,name:"man in motorized wheelchair",variations:["👨🏻‍🦼","👨🏼‍🦼","👨🏽‍🦼","👨🏾‍🦼","👨🏿‍🦼"],version:"12.0"},{emoji:"👩‍🦼",category:1,name:"woman in motorized wheelchair",variations:["👩🏻‍🦼","👩🏼‍🦼","👩🏽‍🦼","👩🏾‍🦼","👩🏿‍🦼"],version:"12.0"},{emoji:"🧑‍🦽",category:1,name:"person in manual wheelchair",variations:["🧑🏻‍🦽","🧑🏼‍🦽","🧑🏽‍🦽","🧑🏾‍🦽","🧑🏿‍🦽"],version:"12.1"},{emoji:"👨‍🦽",category:1,name:"man in manual wheelchair",variations:["👨🏻‍🦽","👨🏼‍🦽","👨🏽‍🦽","👨🏾‍🦽","👨🏿‍🦽"],version:"12.0"},{emoji:"👩‍🦽",category:1,name:"woman in manual wheelchair",variations:["👩🏻‍🦽","👩🏼‍🦽","👩🏽‍🦽","👩🏾‍🦽","👩🏿‍🦽"],version:"12.0"},{emoji:"🏃",category:1,name:"person running",variations:["🏃🏻","🏃🏼","🏃🏽","🏃🏾","🏃🏿"],version:"1.0"},{emoji:"🏃‍♂️",category:1,name:"man running",variations:["🏃🏻‍♂️","🏃🏼‍♂️","🏃🏽‍♂️","🏃🏾‍♂️","🏃🏿‍♂️"],version:"4.0"},{emoji:"🏃‍♀️",category:1,name:"woman running",variations:["🏃🏻‍♀️","🏃🏼‍♀️","🏃🏽‍♀️","🏃🏾‍♀️","🏃🏿‍♀️"],version:"4.0"},{emoji:"💃",category:1,name:"woman dancing",variations:["💃🏻","💃🏼","💃🏽","💃🏾","💃🏿"],version:"1.0"},{emoji:"🕺",category:1,name:"man dancing",variations:["🕺🏻","🕺🏼","🕺🏽","🕺🏾","🕺🏿"],version:"3.0"},{emoji:"🕴️",category:1,name:"person in suit levitating",variations:["🕴🏻","🕴🏼","🕴🏽","🕴🏾","🕴🏿"],version:"1.0"},{emoji:"👯",category:1,name:"people with bunny ears",version:"1.0"},{emoji:"👯‍♂️",category:1,name:"men with bunny ears",version:"4.0"},{emoji:"👯‍♀️",category:1,name:"women with bunny ears",version:"4.0"},{emoji:"🧖",category:1,name:"person in steamy room",variations:["🧖🏻","🧖🏼","🧖🏽","🧖🏾","🧖🏿"],version:"5.0"},{emoji:"🧖‍♂️",category:1,name:"man in steamy room",variations:["🧖🏻‍♂️","🧖🏼‍♂️","🧖🏽‍♂️","🧖🏾‍♂️","🧖🏿‍♂️"],version:"5.0"},{emoji:"🧖‍♀️",category:1,name:"woman in steamy room",variations:["🧖🏻‍♀️","🧖🏼‍♀️","🧖🏽‍♀️","🧖🏾‍♀️","🧖🏿‍♀️"],version:"5.0"},{emoji:"🧗",category:1,name:"person climbing",variations:["🧗🏻","🧗🏼","🧗🏽","🧗🏾","🧗🏿"],version:"5.0"},{emoji:"🧗‍♂️",category:1,name:"man climbing",variations:["🧗🏻‍♂️","🧗🏼‍♂️","🧗🏽‍♂️","🧗🏾‍♂️","🧗🏿‍♂️"],version:"5.0"},{emoji:"🧗‍♀️",category:1,name:"woman climbing",variations:["🧗🏻‍♀️","🧗🏼‍♀️","🧗🏽‍♀️","🧗🏾‍♀️","🧗🏿‍♀️"],version:"5.0"},{emoji:"🤺",category:1,name:"person fencing",version:"3.0"},{emoji:"🏇",category:1,name:"horse racing",variations:["🏇🏻","🏇🏼","🏇🏽","🏇🏾","🏇🏿"],version:"1.0"},{emoji:"⛷️",category:1,name:"skier",version:"1.0"},{emoji:"🏂",category:1,name:"snowboarder",variations:["🏂🏻","🏂🏼","🏂🏽","🏂🏾","🏂🏿"],version:"1.0"},{emoji:"🏌️",category:1,name:"person golfing",variations:["🏌🏻","🏌🏼","🏌🏽","🏌🏾","🏌🏿"],version:"1.0"},{emoji:"🏌️‍♂️",category:1,name:"man golfing",variations:["🏌🏻‍♂️","🏌🏼‍♂️","🏌🏽‍♂️","🏌🏾‍♂️","🏌🏿‍♂️"],version:"4.0"},{emoji:"🏌️‍♀️",category:1,name:"woman golfing",variations:["🏌🏻‍♀️","🏌🏼‍♀️","🏌🏽‍♀️","🏌🏾‍♀️","🏌🏿‍♀️"],version:"4.0"},{emoji:"🏄",category:1,name:"person surfing",variations:["🏄🏻","🏄🏼","🏄🏽","🏄🏾","🏄🏿"],version:"1.0"},{emoji:"🏄‍♂️",category:1,name:"man surfing",variations:["🏄🏻‍♂️","🏄🏼‍♂️","🏄🏽‍♂️","🏄🏾‍♂️","🏄🏿‍♂️"],version:"4.0"},{emoji:"🏄‍♀️",category:1,name:"woman surfing",variations:["🏄🏻‍♀️","🏄🏼‍♀️","🏄🏽‍♀️","🏄🏾‍♀️","🏄🏿‍♀️"],version:"4.0"},{emoji:"🚣",category:1,name:"person rowing boat",variations:["🚣🏻","🚣🏼","🚣🏽","🚣🏾","🚣🏿"],version:"1.0"},{emoji:"🚣‍♂️",category:1,name:"man rowing boat",variations:["🚣🏻‍♂️","🚣🏼‍♂️","🚣🏽‍♂️","🚣🏾‍♂️","🚣🏿‍♂️"],version:"4.0"},{emoji:"🚣‍♀️",category:1,name:"woman rowing boat",variations:["🚣🏻‍♀️","🚣🏼‍♀️","🚣🏽‍♀️","🚣🏾‍♀️","🚣🏿‍♀️"],version:"4.0"},{emoji:"🏊",category:1,name:"person swimming",variations:["🏊🏻","🏊🏼","🏊🏽","🏊🏾","🏊🏿"],version:"1.0"},{emoji:"🏊‍♂️",category:1,name:"man swimming",variations:["🏊🏻‍♂️","🏊🏼‍♂️","🏊🏽‍♂️","🏊🏾‍♂️","🏊🏿‍♂️"],version:"4.0"},{emoji:"🏊‍♀️",category:1,name:"woman swimming",variations:["🏊🏻‍♀️","🏊🏼‍♀️","🏊🏽‍♀️","🏊🏾‍♀️","🏊🏿‍♀️"],version:"4.0"},{emoji:"⛹️",category:1,name:"person bouncing ball",variations:["⛹🏻","⛹🏼","⛹🏽","⛹🏾","⛹🏿"],version:"1.0"},{emoji:"⛹️‍♂️",category:1,name:"man bouncing ball",variations:["⛹🏻‍♂️","⛹🏼‍♂️","⛹🏽‍♂️","⛹🏾‍♂️","⛹🏿‍♂️"],version:"4.0"},{emoji:"⛹️‍♀️",category:1,name:"woman bouncing ball",variations:["⛹🏻‍♀️","⛹🏼‍♀️","⛹🏽‍♀️","⛹🏾‍♀️","⛹🏿‍♀️"],version:"4.0"},{emoji:"🏋️",category:1,name:"person lifting weights",variations:["🏋🏻","🏋🏼","🏋🏽","🏋🏾","🏋🏿"],version:"1.0"},{emoji:"🏋️‍♂️",category:1,name:"man lifting weights",variations:["🏋🏻‍♂️","🏋🏼‍♂️","🏋🏽‍♂️","🏋🏾‍♂️","🏋🏿‍♂️"],version:"4.0"},{emoji:"🏋️‍♀️",category:1,name:"woman lifting weights",variations:["🏋🏻‍♀️","🏋🏼‍♀️","🏋🏽‍♀️","🏋🏾‍♀️","🏋🏿‍♀️"],version:"4.0"},{emoji:"🚴",category:1,name:"person biking",variations:["🚴🏻","🚴🏼","🚴🏽","🚴🏾","🚴🏿"],version:"1.0"},{emoji:"🚴‍♂️",category:1,name:"man biking",variations:["🚴🏻‍♂️","🚴🏼‍♂️","🚴🏽‍♂️","🚴🏾‍♂️","🚴🏿‍♂️"],version:"4.0"},{emoji:"🚴‍♀️",category:1,name:"woman biking",variations:["🚴🏻‍♀️","🚴🏼‍♀️","🚴🏽‍♀️","🚴🏾‍♀️","🚴🏿‍♀️"],version:"4.0"},{emoji:"🚵",category:1,name:"person mountain biking",variations:["🚵🏻","🚵🏼","🚵🏽","🚵🏾","🚵🏿"],version:"1.0"},{emoji:"🚵‍♂️",category:1,name:"man mountain biking",variations:["🚵🏻‍♂️","🚵🏼‍♂️","🚵🏽‍♂️","🚵🏾‍♂️","🚵🏿‍♂️"],version:"4.0"},{emoji:"🚵‍♀️",category:1,name:"woman mountain biking",variations:["🚵🏻‍♀️","🚵🏼‍♀️","🚵🏽‍♀️","🚵🏾‍♀️","🚵🏿‍♀️"],version:"4.0"},{emoji:"🤸",category:1,name:"person cartwheeling",variations:["🤸🏻","🤸🏼","🤸🏽","🤸🏾","🤸🏿"],version:"3.0"},{emoji:"🤸‍♂️",category:1,name:"man cartwheeling",variations:["🤸🏻‍♂️","🤸🏼‍♂️","🤸🏽‍♂️","🤸🏾‍♂️","🤸🏿‍♂️"],version:"4.0"},{emoji:"🤸‍♀️",category:1,name:"woman cartwheeling",variations:["🤸🏻‍♀️","🤸🏼‍♀️","🤸🏽‍♀️","🤸🏾‍♀️","🤸🏿‍♀️"],version:"4.0"},{emoji:"🤼",category:1,name:"people wrestling",version:"3.0"},{emoji:"🤼‍♂️",category:1,name:"men wrestling",version:"4.0"},{emoji:"🤼‍♀️",category:1,name:"women wrestling",version:"4.0"},{emoji:"🤽",category:1,name:"person playing water polo",variations:["🤽🏻","🤽🏼","🤽🏽","🤽🏾","🤽🏿"],version:"3.0"},{emoji:"🤽‍♂️",category:1,name:"man playing water polo",variations:["🤽🏻‍♂️","🤽🏼‍♂️","🤽🏽‍♂️","🤽🏾‍♂️","🤽🏿‍♂️"],version:"4.0"},{emoji:"🤽‍♀️",category:1,name:"woman playing water polo",variations:["🤽🏻‍♀️","🤽🏼‍♀️","🤽🏽‍♀️","🤽🏾‍♀️","🤽🏿‍♀️"],version:"4.0"},{emoji:"🤾",category:1,name:"person playing handball",variations:["🤾🏻","🤾🏼","🤾🏽","🤾🏾","🤾🏿"],version:"3.0"},{emoji:"🤾‍♂️",category:1,name:"man playing handball",variations:["🤾🏻‍♂️","🤾🏼‍♂️","🤾🏽‍♂️","🤾🏾‍♂️","🤾🏿‍♂️"],version:"4.0"},{emoji:"🤾‍♀️",category:1,name:"woman playing handball",variations:["🤾🏻‍♀️","🤾🏼‍♀️","🤾🏽‍♀️","🤾🏾‍♀️","🤾🏿‍♀️"],version:"4.0"},{emoji:"🤹",category:1,name:"person juggling",variations:["🤹🏻","🤹🏼","🤹🏽","🤹🏾","🤹🏿"],version:"3.0"},{emoji:"🤹‍♂️",category:1,name:"man juggling",variations:["🤹🏻‍♂️","🤹🏼‍♂️","🤹🏽‍♂️","🤹🏾‍♂️","🤹🏿‍♂️"],version:"4.0"},{emoji:"🤹‍♀️",category:1,name:"woman juggling",variations:["🤹🏻‍♀️","🤹🏼‍♀️","🤹🏽‍♀️","🤹🏾‍♀️","🤹🏿‍♀️"],version:"4.0"},{emoji:"🧘",category:1,name:"person in lotus position",variations:["🧘🏻","🧘🏼","🧘🏽","🧘🏾","🧘🏿"],version:"5.0"},{emoji:"🧘‍♂️",category:1,name:"man in lotus position",variations:["🧘🏻‍♂️","🧘🏼‍♂️","🧘🏽‍♂️","🧘🏾‍♂️","🧘🏿‍♂️"],version:"5.0"},{emoji:"🧘‍♀️",category:1,name:"woman in lotus position",variations:["🧘🏻‍♀️","🧘🏼‍♀️","🧘🏽‍♀️","🧘🏾‍♀️","🧘🏿‍♀️"],version:"5.0"},{emoji:"🛀",category:1,name:"person taking bath",variations:["🛀🏻","🛀🏼","🛀🏽","🛀🏾","🛀🏿"],version:"1.0"},{emoji:"🛌",category:1,name:"person in bed",variations:["🛌🏻","🛌🏼","🛌🏽","🛌🏾","🛌🏿"],version:"1.0"},{emoji:"🧑‍🤝‍🧑",category:1,name:"people holding hands",variations:["🧑🏻‍🤝‍🧑🏻","🧑🏻‍🤝‍🧑🏼","🧑🏻‍🤝‍🧑🏽","🧑🏻‍🤝‍🧑🏾","🧑🏻‍🤝‍🧑🏿","🧑🏼‍🤝‍🧑🏻","🧑🏼‍🤝‍🧑🏼","🧑🏼‍🤝‍🧑🏽","🧑🏼‍🤝‍🧑🏾","🧑🏼‍🤝‍🧑🏿","🧑🏽‍🤝‍🧑🏻","🧑🏽‍🤝‍🧑🏼","🧑🏽‍🤝‍🧑🏽","🧑🏽‍🤝‍🧑🏾","🧑🏽‍🤝‍🧑🏿","🧑🏾‍🤝‍🧑🏻","🧑🏾‍🤝‍🧑🏼","🧑🏾‍🤝‍🧑🏽","🧑🏾‍🤝‍🧑🏾","🧑🏾‍🤝‍🧑🏿","🧑🏿‍🤝‍🧑🏻","🧑🏿‍🤝‍🧑🏼","🧑🏿‍🤝‍🧑🏽","🧑🏿‍🤝‍🧑🏾","🧑🏿‍🤝‍🧑🏿"],version:"12.0"},{emoji:"👭",category:1,name:"women holding hands",variations:["👭🏻","👩🏻‍🤝‍👩🏼","👩🏻‍🤝‍👩🏽","👩🏻‍🤝‍👩🏾","👩🏻‍🤝‍👩🏿","👩🏼‍🤝‍👩🏻","👭🏼","👩🏼‍🤝‍👩🏽","👩🏼‍🤝‍👩🏾","👩🏼‍🤝‍👩🏿","👩🏽‍🤝‍👩🏻","👩🏽‍🤝‍👩🏼","👭🏽","👩🏽‍🤝‍👩🏾","👩🏽‍🤝‍👩🏿","👩🏾‍🤝‍👩🏻","👩🏾‍🤝‍👩🏼","👩🏾‍🤝‍👩🏽","👭🏾","👩🏾‍🤝‍👩🏿","👩🏿‍🤝‍👩🏻","👩🏿‍🤝‍👩🏼","👩🏿‍🤝‍👩🏽","👩🏿‍🤝‍👩🏾","👭🏿"],version:"1.0"},{emoji:"👫",category:1,name:"woman and man holding hands",variations:["👫🏻","👩🏻‍🤝‍👨🏼","👩🏻‍🤝‍👨🏽","👩🏻‍🤝‍👨🏾","👩🏻‍🤝‍👨🏿","👩🏼‍🤝‍👨🏻","👫🏼","👩🏼‍🤝‍👨🏽","👩🏼‍🤝‍👨🏾","👩🏼‍🤝‍👨🏿","👩🏽‍🤝‍👨🏻","👩🏽‍🤝‍👨🏼","👫🏽","👩🏽‍🤝‍👨🏾","👩🏽‍🤝‍👨🏿","👩🏾‍🤝‍👨🏻","👩🏾‍🤝‍👨🏼","👩🏾‍🤝‍👨🏽","👫🏾","👩🏾‍🤝‍👨🏿","👩🏿‍🤝‍👨🏻","👩🏿‍🤝‍👨🏼","👩🏿‍🤝‍👨🏽","👩🏿‍🤝‍👨🏾","👫🏿"],version:"1.0"},{emoji:"👬",category:1,name:"men holding hands",variations:["👬🏻","👨🏻‍🤝‍👨🏼","👨🏻‍🤝‍👨🏽","👨🏻‍🤝‍👨🏾","👨🏻‍🤝‍👨🏿","👨🏼‍🤝‍👨🏻","👬🏼","👨🏼‍🤝‍👨🏽","👨🏼‍🤝‍👨🏾","👨🏼‍🤝‍👨🏿","👨🏽‍🤝‍👨🏻","👨🏽‍🤝‍👨🏼","👬🏽","👨🏽‍🤝‍👨🏾","👨🏽‍🤝‍👨🏿","👨🏾‍🤝‍👨🏻","👨🏾‍🤝‍👨🏼","👨🏾‍🤝‍👨🏽","👬🏾","👨🏾‍🤝‍👨🏿","👨🏿‍🤝‍👨🏻","👨🏿‍🤝‍👨🏼","👨🏿‍🤝‍👨🏽","👨🏿‍🤝‍👨🏾","👬🏿"],version:"1.0"},{emoji:"💏",category:1,name:"kiss",variations:["👩‍❤️‍💋‍👨","👨‍❤️‍💋‍👨","👩‍❤️‍💋‍👩"],version:"1.0"},{emoji:"💑",category:1,name:"couple with heart",variations:["👩‍❤️‍👨","👨‍❤️‍👨","👩‍❤️‍👩"],version:"1.0"},{emoji:"👪",category:1,name:"family",version:"1.0"},{emoji:"👨‍👩‍👦",category:1,name:"family: man, woman, boy",version:"2.0"},{emoji:"👨‍👩‍👧",category:1,name:"family: man, woman, girl",version:"2.0"},{emoji:"👨‍👩‍👧‍👦",category:1,name:"family: man, woman, girl, boy",version:"2.0"},{emoji:"👨‍👩‍👦‍👦",category:1,name:"family: man, woman, boy, boy",version:"2.0"},{emoji:"👨‍👩‍👧‍👧",category:1,name:"family: man, woman, girl, girl",version:"2.0"},{emoji:"👨‍👨‍👦",category:1,name:"family: man, man, boy",version:"2.0"},{emoji:"👨‍👨‍👧",category:1,name:"family: man, man, girl",version:"2.0"},{emoji:"👨‍👨‍👧‍👦",category:1,name:"family: man, man, girl, boy",version:"2.0"},{emoji:"👨‍👨‍👦‍👦",category:1,name:"family: man, man, boy, boy",version:"2.0"},{emoji:"👨‍👨‍👧‍👧",category:1,name:"family: man, man, girl, girl",version:"2.0"},{emoji:"👩‍👩‍👦",category:1,name:"family: woman, woman, boy",version:"2.0"},{emoji:"👩‍👩‍👧",category:1,name:"family: woman, woman, girl",version:"2.0"},{emoji:"👩‍👩‍👧‍👦",category:1,name:"family: woman, woman, girl, boy",version:"2.0"},{emoji:"👩‍👩‍👦‍👦",category:1,name:"family: woman, woman, boy, boy",version:"2.0"},{emoji:"👩‍👩‍👧‍👧",category:1,name:"family: woman, woman, girl, girl",version:"2.0"},{emoji:"👨‍👦",category:1,name:"family: man, boy",version:"4.0"},{emoji:"👨‍👦‍👦",category:1,name:"family: man, boy, boy",version:"4.0"},{emoji:"👨‍👧",category:1,name:"family: man, girl",version:"4.0"},{emoji:"👨‍👧‍👦",category:1,name:"family: man, girl, boy",version:"4.0"},{emoji:"👨‍👧‍👧",category:1,name:"family: man, girl, girl",version:"4.0"},{emoji:"👩‍👦",category:1,name:"family: woman, boy",version:"4.0"},{emoji:"👩‍👦‍👦",category:1,name:"family: woman, boy, boy",version:"4.0"},{emoji:"👩‍👧",category:1,name:"family: woman, girl",version:"4.0"},{emoji:"👩‍👧‍👦",category:1,name:"family: woman, girl, boy",version:"4.0"},{emoji:"👩‍👧‍👧",category:1,name:"family: woman, girl, girl",version:"4.0"},{emoji:"🗣️",category:1,name:"speaking head",version:"1.0"},{emoji:"👤",category:1,name:"bust in silhouette",version:"1.0"},{emoji:"👥",category:1,name:"busts in silhouette",version:"1.0"},{emoji:"🫂",category:1,name:"people hugging",version:"13.0"},{emoji:"👣",category:1,name:"footprints",version:"1.0"},{emoji:"🐵",category:2,name:"monkey face",version:"1.0"},{emoji:"🐒",category:2,name:"monkey",version:"1.0"},{emoji:"🦍",category:2,name:"gorilla",version:"3.0"},{emoji:"🦧",category:2,name:"orangutan",version:"12.0"},{emoji:"🐶",category:2,name:"dog face",version:"1.0"},{emoji:"🐕",category:2,name:"dog",version:"1.0"},{emoji:"🦮",category:2,name:"guide dog",version:"12.0"},{emoji:"🐕‍🦺",category:2,name:"service dog",version:"12.0"},{emoji:"🐩",category:2,name:"poodle",version:"1.0"},{emoji:"🐺",category:2,name:"wolf",version:"1.0"},{emoji:"🦊",category:2,name:"fox",version:"3.0"},{emoji:"🦝",category:2,name:"raccoon",version:"11.0"},{emoji:"🐱",category:2,name:"cat face",version:"1.0"},{emoji:"🐈",category:2,name:"cat",version:"1.0"},{emoji:"🐈‍⬛",category:2,name:"black cat",version:"13.0"},{emoji:"🦁",category:2,name:"lion",version:"1.0"},{emoji:"🐯",category:2,name:"tiger face",version:"1.0"},{emoji:"🐅",category:2,name:"tiger",version:"1.0"},{emoji:"🐆",category:2,name:"leopard",version:"1.0"},{emoji:"🐴",category:2,name:"horse face",version:"1.0"},{emoji:"🐎",category:2,name:"horse",version:"1.0"},{emoji:"🦄",category:2,name:"unicorn",version:"1.0"},{emoji:"🦓",category:2,name:"zebra",version:"5.0"},{emoji:"🦌",category:2,name:"deer",version:"3.0"},{emoji:"🦬",category:2,name:"bison",version:"13.0"},{emoji:"🐮",category:2,name:"cow face",version:"1.0"},{emoji:"🐂",category:2,name:"ox",version:"1.0"},{emoji:"🐃",category:2,name:"water buffalo",version:"1.0"},{emoji:"🐄",category:2,name:"cow",version:"1.0"},{emoji:"🐷",category:2,name:"pig face",version:"1.0"},{emoji:"🐖",category:2,name:"pig",version:"1.0"},{emoji:"🐗",category:2,name:"boar",version:"1.0"},{emoji:"🐽",category:2,name:"pig nose",version:"1.0"},{emoji:"🐏",category:2,name:"ram",version:"1.0"},{emoji:"🐑",category:2,name:"ewe",version:"1.0"},{emoji:"🐐",category:2,name:"goat",version:"1.0"},{emoji:"🐪",category:2,name:"camel",version:"1.0"},{emoji:"🐫",category:2,name:"two-hump camel",version:"1.0"},{emoji:"🦙",category:2,name:"llama",version:"11.0"},{emoji:"🦒",category:2,name:"giraffe",version:"5.0"},{emoji:"🐘",category:2,name:"elephant",version:"1.0"},{emoji:"🦣",category:2,name:"mammoth",version:"13.0"},{emoji:"🦏",category:2,name:"rhinoceros",version:"3.0"},{emoji:"🦛",category:2,name:"hippopotamus",version:"11.0"},{emoji:"🐭",category:2,name:"mouse face",version:"1.0"},{emoji:"🐁",category:2,name:"mouse",version:"1.0"},{emoji:"🐀",category:2,name:"rat",version:"1.0"},{emoji:"🐹",category:2,name:"hamster",version:"1.0"},{emoji:"🐰",category:2,name:"rabbit face",version:"1.0"},{emoji:"🐇",category:2,name:"rabbit",version:"1.0"},{emoji:"🐿️",category:2,name:"chipmunk",version:"1.0"},{emoji:"🦫",category:2,name:"beaver",version:"13.0"},{emoji:"🦔",category:2,name:"hedgehog",version:"5.0"},{emoji:"🦇",category:2,name:"bat",version:"3.0"},{emoji:"🐻",category:2,name:"bear",version:"1.0"},{emoji:"🐻‍❄️",category:2,name:"polar bear",version:"13.0"},{emoji:"🐨",category:2,name:"koala",version:"1.0"},{emoji:"🐼",category:2,name:"panda",version:"1.0"},{emoji:"🦥",category:2,name:"sloth",version:"12.0"},{emoji:"🦦",category:2,name:"otter",version:"12.0"},{emoji:"🦨",category:2,name:"skunk",version:"12.0"},{emoji:"🦘",category:2,name:"kangaroo",version:"11.0"},{emoji:"🦡",category:2,name:"badger",version:"11.0"},{emoji:"🐾",category:2,name:"paw prints",version:"1.0"},{emoji:"🦃",category:2,name:"turkey",version:"1.0"},{emoji:"🐔",category:2,name:"chicken",version:"1.0"},{emoji:"🐓",category:2,name:"rooster",version:"1.0"},{emoji:"🐣",category:2,name:"hatching chick",version:"1.0"},{emoji:"🐤",category:2,name:"baby chick",version:"1.0"},{emoji:"🐥",category:2,name:"front-facing baby chick",version:"1.0"},{emoji:"🐦",category:2,name:"bird",version:"1.0"},{emoji:"🐧",category:2,name:"penguin",version:"1.0"},{emoji:"🕊️",category:2,name:"dove",version:"1.0"},{emoji:"🦅",category:2,name:"eagle",version:"3.0"},{emoji:"🦆",category:2,name:"duck",version:"3.0"},{emoji:"🦢",category:2,name:"swan",version:"11.0"},{emoji:"🦉",category:2,name:"owl",version:"3.0"},{emoji:"🦤",category:2,name:"dodo",version:"13.0"},{emoji:"🪶",category:2,name:"feather",version:"13.0"},{emoji:"🦩",category:2,name:"flamingo",version:"12.0"},{emoji:"🦚",category:2,name:"peacock",version:"11.0"},{emoji:"🦜",category:2,name:"parrot",version:"11.0"},{emoji:"🐸",category:2,name:"frog",version:"1.0"},{emoji:"🐊",category:2,name:"crocodile",version:"1.0"},{emoji:"🐢",category:2,name:"turtle",version:"1.0"},{emoji:"🦎",category:2,name:"lizard",version:"3.0"},{emoji:"🐍",category:2,name:"snake",version:"1.0"},{emoji:"🐲",category:2,name:"dragon face",version:"1.0"},{emoji:"🐉",category:2,name:"dragon",version:"1.0"},{emoji:"🦕",category:2,name:"sauropod",version:"5.0"},{emoji:"🦖",category:2,name:"T-Rex",version:"5.0"},{emoji:"🐳",category:2,name:"spouting whale",version:"1.0"},{emoji:"🐋",category:2,name:"whale",version:"1.0"},{emoji:"🐬",category:2,name:"dolphin",version:"1.0"},{emoji:"🦭",category:2,name:"seal",version:"13.0"},{emoji:"🐟",category:2,name:"fish",version:"1.0"},{emoji:"🐠",category:2,name:"tropical fish",version:"1.0"},{emoji:"🐡",category:2,name:"blowfish",version:"1.0"},{emoji:"🦈",category:2,name:"shark",version:"3.0"},{emoji:"🐙",category:2,name:"octopus",version:"1.0"},{emoji:"🐚",category:2,name:"spiral shell",version:"1.0"},{emoji:"🐌",category:2,name:"snail",version:"1.0"},{emoji:"🦋",category:2,name:"butterfly",version:"3.0"},{emoji:"🐛",category:2,name:"bug",version:"1.0"},{emoji:"🐜",category:2,name:"ant",version:"1.0"},{emoji:"🐝",category:2,name:"honeybee",version:"1.0"},{emoji:"🪲",category:2,name:"beetle",version:"13.0"},{emoji:"🐞",category:2,name:"lady beetle",version:"1.0"},{emoji:"🦗",category:2,name:"cricket",version:"5.0"},{emoji:"🪳",category:2,name:"cockroach",version:"13.0"},{emoji:"🕷️",category:2,name:"spider",version:"1.0"},{emoji:"🕸️",category:2,name:"spider web",version:"1.0"},{emoji:"🦂",category:2,name:"scorpion",version:"1.0"},{emoji:"🦟",category:2,name:"mosquito",version:"11.0"},{emoji:"🪰",category:2,name:"fly",version:"13.0"},{emoji:"🪱",category:2,name:"worm",version:"13.0"},{emoji:"🦠",category:2,name:"microbe",version:"11.0"},{emoji:"💐",category:2,name:"bouquet",version:"1.0"},{emoji:"🌸",category:2,name:"cherry blossom",version:"1.0"},{emoji:"💮",category:2,name:"white flower",version:"1.0"},{emoji:"🏵️",category:2,name:"rosette",version:"1.0"},{emoji:"🌹",category:2,name:"rose",version:"1.0"},{emoji:"🥀",category:2,name:"wilted flower",version:"3.0"},{emoji:"🌺",category:2,name:"hibiscus",version:"1.0"},{emoji:"🌻",category:2,name:"sunflower",version:"1.0"},{emoji:"🌼",category:2,name:"blossom",version:"1.0"},{emoji:"🌷",category:2,name:"tulip",version:"1.0"},{emoji:"🌱",category:2,name:"seedling",version:"1.0"},{emoji:"🪴",category:2,name:"potted plant",version:"13.0"},{emoji:"🌲",category:2,name:"evergreen tree",version:"1.0"},{emoji:"🌳",category:2,name:"deciduous tree",version:"1.0"},{emoji:"🌴",category:2,name:"palm tree",version:"1.0"},{emoji:"🌵",category:2,name:"cactus",version:"1.0"},{emoji:"🌾",category:2,name:"sheaf of rice",version:"1.0"},{emoji:"🌿",category:2,name:"herb",version:"1.0"},{emoji:"☘️",category:2,name:"shamrock",version:"1.0"},{emoji:"🍀",category:2,name:"four leaf clover",version:"1.0"},{emoji:"🍁",category:2,name:"maple leaf",version:"1.0"},{emoji:"🍂",category:2,name:"fallen leaf",version:"1.0"},{emoji:"🍃",category:2,name:"leaf fluttering in wind",version:"1.0"},{emoji:"🍇",category:3,name:"grapes",version:"1.0"},{emoji:"🍈",category:3,name:"melon",version:"1.0"},{emoji:"🍉",category:3,name:"watermelon",version:"1.0"},{emoji:"🍊",category:3,name:"tangerine",version:"1.0"},{emoji:"🍋",category:3,name:"lemon",version:"1.0"},{emoji:"🍌",category:3,name:"banana",version:"1.0"},{emoji:"🍍",category:3,name:"pineapple",version:"1.0"},{emoji:"🥭",category:3,name:"mango",version:"11.0"},{emoji:"🍎",category:3,name:"red apple",version:"1.0"},{emoji:"🍏",category:3,name:"green apple",version:"1.0"},{emoji:"🍐",category:3,name:"pear",version:"1.0"},{emoji:"🍑",category:3,name:"peach",version:"1.0"},{emoji:"🍒",category:3,name:"cherries",version:"1.0"},{emoji:"🍓",category:3,name:"strawberry",version:"1.0"},{emoji:"🫐",category:3,name:"blueberries",version:"13.0"},{emoji:"🥝",category:3,name:"kiwi fruit",version:"3.0"},{emoji:"🍅",category:3,name:"tomato",version:"1.0"},{emoji:"🫒",category:3,name:"olive",version:"13.0"},{emoji:"🥥",category:3,name:"coconut",version:"5.0"},{emoji:"🥑",category:3,name:"avocado",version:"3.0"},{emoji:"🍆",category:3,name:"eggplant",version:"1.0"},{emoji:"🥔",category:3,name:"potato",version:"3.0"},{emoji:"🥕",category:3,name:"carrot",version:"3.0"},{emoji:"🌽",category:3,name:"ear of corn",version:"1.0"},{emoji:"🌶️",category:3,name:"hot pepper",version:"1.0"},{emoji:"🫑",category:3,name:"bell pepper",version:"13.0"},{emoji:"🥒",category:3,name:"cucumber",version:"3.0"},{emoji:"🥬",category:3,name:"leafy green",version:"11.0"},{emoji:"🥦",category:3,name:"broccoli",version:"5.0"},{emoji:"🧄",category:3,name:"garlic",version:"12.0"},{emoji:"🧅",category:3,name:"onion",version:"12.0"},{emoji:"🍄",category:3,name:"mushroom",version:"1.0"},{emoji:"🥜",category:3,name:"peanuts",version:"3.0"},{emoji:"🌰",category:3,name:"chestnut",version:"1.0"},{emoji:"🍞",category:3,name:"bread",version:"1.0"},{emoji:"🥐",category:3,name:"croissant",version:"3.0"},{emoji:"🥖",category:3,name:"baguette bread",version:"3.0"},{emoji:"🫓",category:3,name:"flatbread",version:"13.0"},{emoji:"🥨",category:3,name:"pretzel",version:"5.0"},{emoji:"🥯",category:3,name:"bagel",version:"11.0"},{emoji:"🥞",category:3,name:"pancakes",version:"3.0"},{emoji:"🧇",category:3,name:"waffle",version:"12.0"},{emoji:"🧀",category:3,name:"cheese wedge",version:"1.0"},{emoji:"🍖",category:3,name:"meat on bone",version:"1.0"},{emoji:"🍗",category:3,name:"poultry leg",version:"1.0"},{emoji:"🥩",category:3,name:"cut of meat",version:"5.0"},{emoji:"🥓",category:3,name:"bacon",version:"3.0"},{emoji:"🍔",category:3,name:"hamburger",version:"1.0"},{emoji:"🍟",category:3,name:"french fries",version:"1.0"},{emoji:"🍕",category:3,name:"pizza",version:"1.0"},{emoji:"🌭",category:3,name:"hot dog",version:"1.0"},{emoji:"🥪",category:3,name:"sandwich",version:"5.0"},{emoji:"🌮",category:3,name:"taco",version:"1.0"},{emoji:"🌯",category:3,name:"burrito",version:"1.0"},{emoji:"🫔",category:3,name:"tamale",version:"13.0"},{emoji:"🥙",category:3,name:"stuffed flatbread",version:"3.0"},{emoji:"🧆",category:3,name:"falafel",version:"12.0"},{emoji:"🥚",category:3,name:"egg",version:"3.0"},{emoji:"🍳",category:3,name:"cooking",version:"1.0"},{emoji:"🥘",category:3,name:"shallow pan of food",version:"3.0"},{emoji:"🍲",category:3,name:"pot of food",version:"1.0"},{emoji:"🫕",category:3,name:"fondue",version:"13.0"},{emoji:"🥣",category:3,name:"bowl with spoon",version:"5.0"},{emoji:"🥗",category:3,name:"green salad",version:"3.0"},{emoji:"🍿",category:3,name:"popcorn",version:"1.0"},{emoji:"🧈",category:3,name:"butter",version:"12.0"},{emoji:"🧂",category:3,name:"salt",version:"11.0"},{emoji:"🥫",category:3,name:"canned food",version:"5.0"},{emoji:"🍱",category:3,name:"bento box",version:"1.0"},{emoji:"🍘",category:3,name:"rice cracker",version:"1.0"},{emoji:"🍙",category:3,name:"rice ball",version:"1.0"},{emoji:"🍚",category:3,name:"cooked rice",version:"1.0"},{emoji:"🍛",category:3,name:"curry rice",version:"1.0"},{emoji:"🍜",category:3,name:"steaming bowl",version:"1.0"},{emoji:"🍝",category:3,name:"spaghetti",version:"1.0"},{emoji:"🍠",category:3,name:"roasted sweet potato",version:"1.0"},{emoji:"🍢",category:3,name:"oden",version:"1.0"},{emoji:"🍣",category:3,name:"sushi",version:"1.0"},{emoji:"🍤",category:3,name:"fried shrimp",version:"1.0"},{emoji:"🍥",category:3,name:"fish cake with swirl",version:"1.0"},{emoji:"🥮",category:3,name:"moon cake",version:"11.0"},{emoji:"🍡",category:3,name:"dango",version:"1.0"},{emoji:"🥟",category:3,name:"dumpling",version:"5.0"},{emoji:"🥠",category:3,name:"fortune cookie",version:"5.0"},{emoji:"🥡",category:3,name:"takeout box",version:"5.0"},{emoji:"🦀",category:3,name:"crab",version:"1.0"},{emoji:"🦞",category:3,name:"lobster",version:"11.0"},{emoji:"🦐",category:3,name:"shrimp",version:"3.0"},{emoji:"🦑",category:3,name:"squid",version:"3.0"},{emoji:"🦪",category:3,name:"oyster",version:"12.0"},{emoji:"🍦",category:3,name:"soft ice cream",version:"1.0"},{emoji:"🍧",category:3,name:"shaved ice",version:"1.0"},{emoji:"🍨",category:3,name:"ice cream",version:"1.0"},{emoji:"🍩",category:3,name:"doughnut",version:"1.0"},{emoji:"🍪",category:3,name:"cookie",version:"1.0"},{emoji:"🎂",category:3,name:"birthday cake",version:"1.0"},{emoji:"🍰",category:3,name:"shortcake",version:"1.0"},{emoji:"🧁",category:3,name:"cupcake",version:"11.0"},{emoji:"🥧",category:3,name:"pie",version:"5.0"},{emoji:"🍫",category:3,name:"chocolate bar",version:"1.0"},{emoji:"🍬",category:3,name:"candy",version:"1.0"},{emoji:"🍭",category:3,name:"lollipop",version:"1.0"},{emoji:"🍮",category:3,name:"custard",version:"1.0"},{emoji:"🍯",category:3,name:"honey pot",version:"1.0"},{emoji:"🍼",category:3,name:"baby bottle",version:"1.0"},{emoji:"🥛",category:3,name:"glass of milk",version:"3.0"},{emoji:"☕",category:3,name:"hot beverage",version:"1.0"},{emoji:"🫖",category:3,name:"teapot",version:"13.0"},{emoji:"🍵",category:3,name:"teacup without handle",version:"1.0"},{emoji:"🍶",category:3,name:"sake",version:"1.0"},{emoji:"🍾",category:3,name:"bottle with popping cork",version:"1.0"},{emoji:"🍷",category:3,name:"wine glass",version:"1.0"},{emoji:"🍸",category:3,name:"cocktail glass",version:"1.0"},{emoji:"🍹",category:3,name:"tropical drink",version:"1.0"},{emoji:"🍺",category:3,name:"beer mug",version:"1.0"},{emoji:"🍻",category:3,name:"clinking beer mugs",version:"1.0"},{emoji:"🥂",category:3,name:"clinking glasses",version:"3.0"},{emoji:"🥃",category:3,name:"tumbler glass",version:"3.0"},{emoji:"🥤",category:3,name:"cup with straw",version:"5.0"},{emoji:"🧋",category:3,name:"bubble tea",version:"13.0"},{emoji:"🧃",category:3,name:"beverage box",version:"12.0"},{emoji:"🧉",category:3,name:"mate",version:"12.0"},{emoji:"🧊",category:3,name:"ice",version:"12.0"},{emoji:"🥢",category:3,name:"chopsticks",version:"5.0"},{emoji:"🍽️",category:3,name:"fork and knife with plate",version:"1.0"},{emoji:"🍴",category:3,name:"fork and knife",version:"1.0"},{emoji:"🥄",category:3,name:"spoon",version:"3.0"},{emoji:"🔪",category:3,name:"kitchen knife",version:"1.0"},{emoji:"🏺",category:3,name:"amphora",version:"1.0"},{emoji:"🌍",category:4,name:"globe showing Europe-Africa",version:"1.0"},{emoji:"🌎",category:4,name:"globe showing Americas",version:"1.0"},{emoji:"🌏",category:4,name:"globe showing Asia-Australia",version:"1.0"},{emoji:"🌐",category:4,name:"globe with meridians",version:"1.0"},{emoji:"🗺️",category:4,name:"world map",version:"1.0"},{emoji:"🗾",category:4,name:"map of Japan",version:"1.0"},{emoji:"🧭",category:4,name:"compass",version:"11.0"},{emoji:"🏔️",category:4,name:"snow-capped mountain",version:"1.0"},{emoji:"⛰️",category:4,name:"mountain",version:"1.0"},{emoji:"🌋",category:4,name:"volcano",version:"1.0"},{emoji:"🗻",category:4,name:"mount fuji",version:"1.0"},{emoji:"🏕️",category:4,name:"camping",version:"1.0"},{emoji:"🏖️",category:4,name:"beach with umbrella",version:"1.0"},{emoji:"🏜️",category:4,name:"desert",version:"1.0"},{emoji:"🏝️",category:4,name:"desert island",version:"1.0"},{emoji:"🏞️",category:4,name:"national park",version:"1.0"},{emoji:"🏟️",category:4,name:"stadium",version:"1.0"},{emoji:"🏛️",category:4,name:"classical building",version:"1.0"},{emoji:"🏗️",category:4,name:"building construction",version:"1.0"},{emoji:"🧱",category:4,name:"brick",version:"11.0"},{emoji:"🪨",category:4,name:"rock",version:"13.0"},{emoji:"🪵",category:4,name:"wood",version:"13.0"},{emoji:"🛖",category:4,name:"hut",version:"13.0"},{emoji:"🏘️",category:4,name:"houses",version:"1.0"},{emoji:"🏚️",category:4,name:"derelict house",version:"1.0"},{emoji:"🏠",category:4,name:"house",version:"1.0"},{emoji:"🏡",category:4,name:"house with garden",version:"1.0"},{emoji:"🏢",category:4,name:"office building",version:"1.0"},{emoji:"🏣",category:4,name:"Japanese post office",version:"1.0"},{emoji:"🏤",category:4,name:"post office",version:"1.0"},{emoji:"🏥",category:4,name:"hospital",version:"1.0"},{emoji:"🏦",category:4,name:"bank",version:"1.0"},{emoji:"🏨",category:4,name:"hotel",version:"1.0"},{emoji:"🏩",category:4,name:"love hotel",version:"1.0"},{emoji:"🏪",category:4,name:"convenience store",version:"1.0"},{emoji:"🏫",category:4,name:"school",version:"1.0"},{emoji:"🏬",category:4,name:"department store",version:"1.0"},{emoji:"🏭",category:4,name:"factory",version:"1.0"},{emoji:"🏯",category:4,name:"Japanese castle",version:"1.0"},{emoji:"🏰",category:4,name:"castle",version:"1.0"},{emoji:"💒",category:4,name:"wedding",version:"1.0"},{emoji:"🗼",category:4,name:"Tokyo tower",version:"1.0"},{emoji:"🗽",category:4,name:"Statue of Liberty",version:"1.0"},{emoji:"⛪",category:4,name:"church",version:"1.0"},{emoji:"🕌",category:4,name:"mosque",version:"1.0"},{emoji:"🛕",category:4,name:"hindu temple",version:"12.0"},{emoji:"🕍",category:4,name:"synagogue",version:"1.0"},{emoji:"⛩️",category:4,name:"shinto shrine",version:"1.0"},{emoji:"🕋",category:4,name:"kaaba",version:"1.0"},{emoji:"⛲",category:4,name:"fountain",version:"1.0"},{emoji:"⛺",category:4,name:"tent",version:"1.0"},{emoji:"🌁",category:4,name:"foggy",version:"1.0"},{emoji:"🌃",category:4,name:"night with stars",version:"1.0"},{emoji:"🏙️",category:4,name:"cityscape",version:"1.0"},{emoji:"🌄",category:4,name:"sunrise over mountains",version:"1.0"},{emoji:"🌅",category:4,name:"sunrise",version:"1.0"},{emoji:"🌆",category:4,name:"cityscape at dusk",version:"1.0"},{emoji:"🌇",category:4,name:"sunset",version:"1.0"},{emoji:"🌉",category:4,name:"bridge at night",version:"1.0"},{emoji:"♨️",category:4,name:"hot springs",version:"1.0"},{emoji:"🎠",category:4,name:"carousel horse",version:"1.0"},{emoji:"🎡",category:4,name:"ferris wheel",version:"1.0"},{emoji:"🎢",category:4,name:"roller coaster",version:"1.0"},{emoji:"💈",category:4,name:"barber pole",version:"1.0"},{emoji:"🎪",category:4,name:"circus tent",version:"1.0"},{emoji:"🚂",category:4,name:"locomotive",version:"1.0"},{emoji:"🚃",category:4,name:"railway car",version:"1.0"},{emoji:"🚄",category:4,name:"high-speed train",version:"1.0"},{emoji:"🚅",category:4,name:"bullet train",version:"1.0"},{emoji:"🚆",category:4,name:"train",version:"1.0"},{emoji:"🚇",category:4,name:"metro",version:"1.0"},{emoji:"🚈",category:4,name:"light rail",version:"1.0"},{emoji:"🚉",category:4,name:"station",version:"1.0"},{emoji:"🚊",category:4,name:"tram",version:"1.0"},{emoji:"🚝",category:4,name:"monorail",version:"1.0"},{emoji:"🚞",category:4,name:"mountain railway",version:"1.0"},{emoji:"🚋",category:4,name:"tram car",version:"1.0"},{emoji:"🚌",category:4,name:"bus",version:"1.0"},{emoji:"🚍",category:4,name:"oncoming bus",version:"1.0"},{emoji:"🚎",category:4,name:"trolleybus",version:"1.0"},{emoji:"🚐",category:4,name:"minibus",version:"1.0"},{emoji:"🚑",category:4,name:"ambulance",version:"1.0"},{emoji:"🚒",category:4,name:"fire engine",version:"1.0"},{emoji:"🚓",category:4,name:"police car",version:"1.0"},{emoji:"🚔",category:4,name:"oncoming police car",version:"1.0"},{emoji:"🚕",category:4,name:"taxi",version:"1.0"},{emoji:"🚖",category:4,name:"oncoming taxi",version:"1.0"},{emoji:"🚗",category:4,name:"automobile",version:"1.0"},{emoji:"🚘",category:4,name:"oncoming automobile",version:"1.0"},{emoji:"🚙",category:4,name:"sport utility vehicle",version:"1.0"},{emoji:"🛻",category:4,name:"pickup truck",version:"13.0"},{emoji:"🚚",category:4,name:"delivery truck",version:"1.0"},{emoji:"🚛",category:4,name:"articulated lorry",version:"1.0"},{emoji:"🚜",category:4,name:"tractor",version:"1.0"},{emoji:"🏎️",category:4,name:"racing car",version:"1.0"},{emoji:"🏍️",category:4,name:"motorcycle",version:"1.0"},{emoji:"🛵",category:4,name:"motor scooter",version:"3.0"},{emoji:"🦽",category:4,name:"manual wheelchair",version:"12.0"},{emoji:"🦼",category:4,name:"motorized wheelchair",version:"12.0"},{emoji:"🛺",category:4,name:"auto rickshaw",version:"12.0"},{emoji:"🚲",category:4,name:"bicycle",version:"1.0"},{emoji:"🛴",category:4,name:"kick scooter",version:"3.0"},{emoji:"🛹",category:4,name:"skateboard",version:"11.0"},{emoji:"🛼",category:4,name:"roller skate",version:"13.0"},{emoji:"🚏",category:4,name:"bus stop",version:"1.0"},{emoji:"🛣️",category:4,name:"motorway",version:"1.0"},{emoji:"🛤️",category:4,name:"railway track",version:"1.0"},{emoji:"🛢️",category:4,name:"oil drum",version:"1.0"},{emoji:"⛽",category:4,name:"fuel pump",version:"1.0"},{emoji:"🚨",category:4,name:"police car light",version:"1.0"},{emoji:"🚥",category:4,name:"horizontal traffic light",version:"1.0"},{emoji:"🚦",category:4,name:"vertical traffic light",version:"1.0"},{emoji:"🛑",category:4,name:"stop sign",version:"3.0"},{emoji:"🚧",category:4,name:"construction",version:"1.0"},{emoji:"⚓",category:4,name:"anchor",version:"1.0"},{emoji:"⛵",category:4,name:"sailboat",version:"1.0"},{emoji:"🛶",category:4,name:"canoe",version:"3.0"},{emoji:"🚤",category:4,name:"speedboat",version:"1.0"},{emoji:"🛳️",category:4,name:"passenger ship",version:"1.0"},{emoji:"⛴️",category:4,name:"ferry",version:"1.0"},{emoji:"🛥️",category:4,name:"motor boat",version:"1.0"},{emoji:"🚢",category:4,name:"ship",version:"1.0"},{emoji:"✈️",category:4,name:"airplane",version:"1.0"},{emoji:"🛩️",category:4,name:"small airplane",version:"1.0"},{emoji:"🛫",category:4,name:"airplane departure",version:"1.0"},{emoji:"🛬",category:4,name:"airplane arrival",version:"1.0"},{emoji:"🪂",category:4,name:"parachute",version:"12.0"},{emoji:"💺",category:4,name:"seat",version:"1.0"},{emoji:"🚁",category:4,name:"helicopter",version:"1.0"},{emoji:"🚟",category:4,name:"suspension railway",version:"1.0"},{emoji:"🚠",category:4,name:"mountain cableway",version:"1.0"},{emoji:"🚡",category:4,name:"aerial tramway",version:"1.0"},{emoji:"🛰️",category:4,name:"satellite",version:"1.0"},{emoji:"🚀",category:4,name:"rocket",version:"1.0"},{emoji:"🛸",category:4,name:"flying saucer",version:"5.0"},{emoji:"🛎️",category:4,name:"bellhop bell",version:"1.0"},{emoji:"🧳",category:4,name:"luggage",version:"11.0"},{emoji:"⌛",category:4,name:"hourglass done",version:"1.0"},{emoji:"⏳",category:4,name:"hourglass not done",version:"1.0"},{emoji:"⌚",category:4,name:"watch",version:"1.0"},{emoji:"⏰",category:4,name:"alarm clock",version:"1.0"},{emoji:"⏱️",category:4,name:"stopwatch",version:"1.0"},{emoji:"⏲️",category:4,name:"timer clock",version:"1.0"},{emoji:"🕰️",category:4,name:"mantelpiece clock",version:"1.0"},{emoji:"🕛",category:4,name:"twelve o’clock",version:"1.0"},{emoji:"🕧",category:4,name:"twelve-thirty",version:"1.0"},{emoji:"🕐",category:4,name:"one o’clock",version:"1.0"},{emoji:"🕜",category:4,name:"one-thirty",version:"1.0"},{emoji:"🕑",category:4,name:"two o’clock",version:"1.0"},{emoji:"🕝",category:4,name:"two-thirty",version:"1.0"},{emoji:"🕒",category:4,name:"three o’clock",version:"1.0"},{emoji:"🕞",category:4,name:"three-thirty",version:"1.0"},{emoji:"🕓",category:4,name:"four o’clock",version:"1.0"},{emoji:"🕟",category:4,name:"four-thirty",version:"1.0"},{emoji:"🕔",category:4,name:"five o’clock",version:"1.0"},{emoji:"🕠",category:4,name:"five-thirty",version:"1.0"},{emoji:"🕕",category:4,name:"six o’clock",version:"1.0"},{emoji:"🕡",category:4,name:"six-thirty",version:"1.0"},{emoji:"🕖",category:4,name:"seven o’clock",version:"1.0"},{emoji:"🕢",category:4,name:"seven-thirty",version:"1.0"},{emoji:"🕗",category:4,name:"eight o’clock",version:"1.0"},{emoji:"🕣",category:4,name:"eight-thirty",version:"1.0"},{emoji:"🕘",category:4,name:"nine o’clock",version:"1.0"},{emoji:"🕤",category:4,name:"nine-thirty",version:"1.0"},{emoji:"🕙",category:4,name:"ten o’clock",version:"1.0"},{emoji:"🕥",category:4,name:"ten-thirty",version:"1.0"},{emoji:"🕚",category:4,name:"eleven o’clock",version:"1.0"},{emoji:"🕦",category:4,name:"eleven-thirty",version:"1.0"},{emoji:"🌑",category:4,name:"new moon",version:"1.0"},{emoji:"🌒",category:4,name:"waxing crescent moon",version:"1.0"},{emoji:"🌓",category:4,name:"first quarter moon",version:"1.0"},{emoji:"🌔",category:4,name:"waxing gibbous moon",version:"1.0"},{emoji:"🌕",category:4,name:"full moon",version:"1.0"},{emoji:"🌖",category:4,name:"waning gibbous moon",version:"1.0"},{emoji:"🌗",category:4,name:"last quarter moon",version:"1.0"},{emoji:"🌘",category:4,name:"waning crescent moon",version:"1.0"},{emoji:"🌙",category:4,name:"crescent moon",version:"1.0"},{emoji:"🌚",category:4,name:"new moon face",version:"1.0"},{emoji:"🌛",category:4,name:"first quarter moon face",version:"1.0"},{emoji:"🌜",category:4,name:"last quarter moon face",version:"1.0"},{emoji:"🌡️",category:4,name:"thermometer",version:"1.0"},{emoji:"☀️",category:4,name:"sun",version:"1.0"},{emoji:"🌝",category:4,name:"full moon face",version:"1.0"},{emoji:"🌞",category:4,name:"sun with face",version:"1.0"},{emoji:"🪐",category:4,name:"ringed planet",version:"12.0"},{emoji:"⭐",category:4,name:"star",version:"1.0"},{emoji:"🌟",category:4,name:"glowing star",version:"1.0"},{emoji:"🌠",category:4,name:"shooting star",version:"1.0"},{emoji:"🌌",category:4,name:"milky way",version:"1.0"},{emoji:"☁️",category:4,name:"cloud",version:"1.0"},{emoji:"⛅",category:4,name:"sun behind cloud",version:"1.0"},{emoji:"⛈️",category:4,name:"cloud with lightning and rain",version:"1.0"},{emoji:"🌤️",category:4,name:"sun behind small cloud",version:"1.0"},{emoji:"🌥️",category:4,name:"sun behind large cloud",version:"1.0"},{emoji:"🌦️",category:4,name:"sun behind rain cloud",version:"1.0"},{emoji:"🌧️",category:4,name:"cloud with rain",version:"1.0"},{emoji:"🌨️",category:4,name:"cloud with snow",version:"1.0"},{emoji:"🌩️",category:4,name:"cloud with lightning",version:"1.0"},{emoji:"🌪️",category:4,name:"tornado",version:"1.0"},{emoji:"🌫️",category:4,name:"fog",version:"1.0"},{emoji:"🌬️",category:4,name:"wind face",version:"1.0"},{emoji:"🌀",category:4,name:"cyclone",version:"1.0"},{emoji:"🌈",category:4,name:"rainbow",version:"1.0"},{emoji:"🌂",category:4,name:"closed umbrella",version:"1.0"},{emoji:"☂️",category:4,name:"umbrella",version:"1.0"},{emoji:"☔",category:4,name:"umbrella with rain drops",version:"1.0"},{emoji:"⛱️",category:4,name:"umbrella on ground",version:"1.0"},{emoji:"⚡",category:4,name:"high voltage",version:"1.0"},{emoji:"❄️",category:4,name:"snowflake",version:"1.0"},{emoji:"☃️",category:4,name:"snowman",version:"1.0"},{emoji:"⛄",category:4,name:"snowman without snow",version:"1.0"},{emoji:"☄️",category:4,name:"comet",version:"1.0"},{emoji:"🔥",category:4,name:"fire",version:"1.0"},{emoji:"💧",category:4,name:"droplet",version:"1.0"},{emoji:"🌊",category:4,name:"water wave",version:"1.0"},{emoji:"🎃",category:5,name:"jack-o-lantern",version:"1.0"},{emoji:"🎄",category:5,name:"Christmas tree",version:"1.0"},{emoji:"🎆",category:5,name:"fireworks",version:"1.0"},{emoji:"🎇",category:5,name:"sparkler",version:"1.0"},{emoji:"🧨",category:5,name:"firecracker",version:"11.0"},{emoji:"✨",category:5,name:"sparkles",version:"1.0"},{emoji:"🎈",category:5,name:"balloon",version:"1.0"},{emoji:"🎉",category:5,name:"party popper",version:"1.0"},{emoji:"🎊",category:5,name:"confetti ball",version:"1.0"},{emoji:"🎋",category:5,name:"tanabata tree",version:"1.0"},{emoji:"🎍",category:5,name:"pine decoration",version:"1.0"},{emoji:"🎎",category:5,name:"Japanese dolls",version:"1.0"},{emoji:"🎏",category:5,name:"carp streamer",version:"1.0"},{emoji:"🎐",category:5,name:"wind chime",version:"1.0"},{emoji:"🎑",category:5,name:"moon viewing ceremony",version:"1.0"},{emoji:"🧧",category:5,name:"red envelope",version:"11.0"},{emoji:"🎀",category:5,name:"ribbon",version:"1.0"},{emoji:"🎁",category:5,name:"wrapped gift",version:"1.0"},{emoji:"🎗️",category:5,name:"reminder ribbon",version:"1.0"},{emoji:"🎟️",category:5,name:"admission tickets",version:"1.0"},{emoji:"🎫",category:5,name:"ticket",version:"1.0"},{emoji:"🎖️",category:5,name:"military medal",version:"1.0"},{emoji:"🏆",category:5,name:"trophy",version:"1.0"},{emoji:"🏅",category:5,name:"sports medal",version:"1.0"},{emoji:"🥇",category:5,name:"1st place medal",version:"3.0"},{emoji:"🥈",category:5,name:"2nd place medal",version:"3.0"},{emoji:"🥉",category:5,name:"3rd place medal",version:"3.0"},{emoji:"⚽",category:5,name:"soccer ball",version:"1.0"},{emoji:"⚾",category:5,name:"baseball",version:"1.0"},{emoji:"🥎",category:5,name:"softball",version:"11.0"},{emoji:"🏀",category:5,name:"basketball",version:"1.0"},{emoji:"🏐",category:5,name:"volleyball",version:"1.0"},{emoji:"🏈",category:5,name:"american football",version:"1.0"},{emoji:"🏉",category:5,name:"rugby football",version:"1.0"},{emoji:"🎾",category:5,name:"tennis",version:"1.0"},{emoji:"🥏",category:5,name:"flying disc",version:"11.0"},{emoji:"🎳",category:5,name:"bowling",version:"1.0"},{emoji:"🏏",category:5,name:"cricket game",version:"1.0"},{emoji:"🏑",category:5,name:"field hockey",version:"1.0"},{emoji:"🏒",category:5,name:"ice hockey",version:"1.0"},{emoji:"🥍",category:5,name:"lacrosse",version:"11.0"},{emoji:"🏓",category:5,name:"ping pong",version:"1.0"},{emoji:"🏸",category:5,name:"badminton",version:"1.0"},{emoji:"🥊",category:5,name:"boxing glove",version:"3.0"},{emoji:"🥋",category:5,name:"martial arts uniform",version:"3.0"},{emoji:"🥅",category:5,name:"goal net",version:"3.0"},{emoji:"⛳",category:5,name:"flag in hole",version:"1.0"},{emoji:"⛸️",category:5,name:"ice skate",version:"1.0"},{emoji:"🎣",category:5,name:"fishing pole",version:"1.0"},{emoji:"🤿",category:5,name:"diving mask",version:"12.0"},{emoji:"🎽",category:5,name:"running shirt",version:"1.0"},{emoji:"🎿",category:5,name:"skis",version:"1.0"},{emoji:"🛷",category:5,name:"sled",version:"5.0"},{emoji:"🥌",category:5,name:"curling stone",version:"5.0"},{emoji:"🎯",category:5,name:"direct hit",version:"1.0"},{emoji:"🪀",category:5,name:"yo-yo",version:"12.0"},{emoji:"🪁",category:5,name:"kite",version:"12.0"},{emoji:"🎱",category:5,name:"pool 8 ball",version:"1.0"},{emoji:"🔮",category:5,name:"crystal ball",version:"1.0"},{emoji:"🪄",category:5,name:"magic wand",version:"13.0"},{emoji:"🧿",category:5,name:"nazar amulet",version:"11.0"},{emoji:"🎮",category:5,name:"video game",version:"1.0"},{emoji:"🕹️",category:5,name:"joystick",version:"1.0"},{emoji:"🎰",category:5,name:"slot machine",version:"1.0"},{emoji:"🎲",category:5,name:"game die",version:"1.0"},{emoji:"🧩",category:5,name:"puzzle piece",version:"11.0"},{emoji:"🧸",category:5,name:"teddy bear",version:"11.0"},{emoji:"🪅",category:5,name:"piñata",version:"13.0"},{emoji:"🪆",category:5,name:"nesting dolls",version:"13.0"},{emoji:"♠️",category:5,name:"spade suit",version:"1.0"},{emoji:"♥️",category:5,name:"heart suit",version:"1.0"},{emoji:"♦️",category:5,name:"diamond suit",version:"1.0"},{emoji:"♣️",category:5,name:"club suit",version:"1.0"},{emoji:"♟️",category:5,name:"chess pawn",version:"11.0"},{emoji:"🃏",category:5,name:"joker",version:"1.0"},{emoji:"🀄",category:5,name:"mahjong red dragon",version:"1.0"},{emoji:"🎴",category:5,name:"flower playing cards",version:"1.0"},{emoji:"🎭",category:5,name:"performing arts",version:"1.0"},{emoji:"🖼️",category:5,name:"framed picture",version:"1.0"},{emoji:"🎨",category:5,name:"artist palette",version:"1.0"},{emoji:"🧵",category:5,name:"thread",version:"11.0"},{emoji:"🪡",category:5,name:"sewing needle",version:"13.0"},{emoji:"🧶",category:5,name:"yarn",version:"11.0"},{emoji:"🪢",category:5,name:"knot",version:"13.0"},{emoji:"👓",category:6,name:"glasses",version:"1.0"},{emoji:"🕶️",category:6,name:"sunglasses",version:"1.0"},{emoji:"🥽",category:6,name:"goggles",version:"11.0"},{emoji:"🥼",category:6,name:"lab coat",version:"11.0"},{emoji:"🦺",category:6,name:"safety vest",version:"12.0"},{emoji:"👔",category:6,name:"necktie",version:"1.0"},{emoji:"👕",category:6,name:"t-shirt",version:"1.0"},{emoji:"👖",category:6,name:"jeans",version:"1.0"},{emoji:"🧣",category:6,name:"scarf",version:"5.0"},{emoji:"🧤",category:6,name:"gloves",version:"5.0"},{emoji:"🧥",category:6,name:"coat",version:"5.0"},{emoji:"🧦",category:6,name:"socks",version:"5.0"},{emoji:"👗",category:6,name:"dress",version:"1.0"},{emoji:"👘",category:6,name:"kimono",version:"1.0"},{emoji:"🥻",category:6,name:"sari",version:"12.0"},{emoji:"🩱",category:6,name:"one-piece swimsuit",version:"12.0"},{emoji:"🩲",category:6,name:"briefs",version:"12.0"},{emoji:"🩳",category:6,name:"shorts",version:"12.0"},{emoji:"👙",category:6,name:"bikini",version:"1.0"},{emoji:"👚",category:6,name:"woman’s clothes",version:"1.0"},{emoji:"👛",category:6,name:"purse",version:"1.0"},{emoji:"👜",category:6,name:"handbag",version:"1.0"},{emoji:"👝",category:6,name:"clutch bag",version:"1.0"},{emoji:"🛍️",category:6,name:"shopping bags",version:"1.0"},{emoji:"🎒",category:6,name:"backpack",version:"1.0"},{emoji:"🩴",category:6,name:"thong sandal",version:"13.0"},{emoji:"👞",category:6,name:"man’s shoe",version:"1.0"},{emoji:"👟",category:6,name:"running shoe",version:"1.0"},{emoji:"🥾",category:6,name:"hiking boot",version:"11.0"},{emoji:"🥿",category:6,name:"flat shoe",version:"11.0"},{emoji:"👠",category:6,name:"high-heeled shoe",version:"1.0"},{emoji:"👡",category:6,name:"woman’s sandal",version:"1.0"},{emoji:"🩰",category:6,name:"ballet shoes",version:"12.0"},{emoji:"👢",category:6,name:"woman’s boot",version:"1.0"},{emoji:"👑",category:6,name:"crown",version:"1.0"},{emoji:"👒",category:6,name:"woman’s hat",version:"1.0"},{emoji:"🎩",category:6,name:"top hat",version:"1.0"},{emoji:"🎓",category:6,name:"graduation cap",version:"1.0"},{emoji:"🧢",category:6,name:"billed cap",version:"5.0"},{emoji:"🪖",category:6,name:"military helmet",version:"13.0"},{emoji:"⛑️",category:6,name:"rescue worker’s helmet",version:"1.0"},{emoji:"📿",category:6,name:"prayer beads",version:"1.0"},{emoji:"💄",category:6,name:"lipstick",version:"1.0"},{emoji:"💍",category:6,name:"ring",version:"1.0"},{emoji:"💎",category:6,name:"gem stone",version:"1.0"},{emoji:"🔇",category:6,name:"muted speaker",version:"1.0"},{emoji:"🔈",category:6,name:"speaker low volume",version:"1.0"},{emoji:"🔉",category:6,name:"speaker medium volume",version:"1.0"},{emoji:"🔊",category:6,name:"speaker high volume",version:"1.0"},{emoji:"📢",category:6,name:"loudspeaker",version:"1.0"},{emoji:"📣",category:6,name:"megaphone",version:"1.0"},{emoji:"📯",category:6,name:"postal horn",version:"1.0"},{emoji:"🔔",category:6,name:"bell",version:"1.0"},{emoji:"🔕",category:6,name:"bell with slash",version:"1.0"},{emoji:"🎼",category:6,name:"musical score",version:"1.0"},{emoji:"🎵",category:6,name:"musical note",version:"1.0"},{emoji:"🎶",category:6,name:"musical notes",version:"1.0"},{emoji:"🎙️",category:6,name:"studio microphone",version:"1.0"},{emoji:"🎚️",category:6,name:"level slider",version:"1.0"},{emoji:"🎛️",category:6,name:"control knobs",version:"1.0"},{emoji:"🎤",category:6,name:"microphone",version:"1.0"},{emoji:"🎧",category:6,name:"headphone",version:"1.0"},{emoji:"📻",category:6,name:"radio",version:"1.0"},{emoji:"🎷",category:6,name:"saxophone",version:"1.0"},{emoji:"🪗",category:6,name:"accordion",version:"13.0"},{emoji:"🎸",category:6,name:"guitar",version:"1.0"},{emoji:"🎹",category:6,name:"musical keyboard",version:"1.0"},{emoji:"🎺",category:6,name:"trumpet",version:"1.0"},{emoji:"🎻",category:6,name:"violin",version:"1.0"},{emoji:"🪕",category:6,name:"banjo",version:"12.0"},{emoji:"🥁",category:6,name:"drum",version:"3.0"},{emoji:"🪘",category:6,name:"long drum",version:"13.0"},{emoji:"📱",category:6,name:"mobile phone",version:"1.0"},{emoji:"📲",category:6,name:"mobile phone with arrow",version:"1.0"},{emoji:"☎️",category:6,name:"telephone",version:"1.0"},{emoji:"📞",category:6,name:"telephone receiver",version:"1.0"},{emoji:"📟",category:6,name:"pager",version:"1.0"},{emoji:"📠",category:6,name:"fax machine",version:"1.0"},{emoji:"🔋",category:6,name:"battery",version:"1.0"},{emoji:"🔌",category:6,name:"electric plug",version:"1.0"},{emoji:"💻",category:6,name:"laptop",version:"1.0"},{emoji:"🖥️",category:6,name:"desktop computer",version:"1.0"},{emoji:"🖨️",category:6,name:"printer",version:"1.0"},{emoji:"⌨️",category:6,name:"keyboard",version:"1.0"},{emoji:"🖱️",category:6,name:"computer mouse",version:"1.0"},{emoji:"🖲️",category:6,name:"trackball",version:"1.0"},{emoji:"💽",category:6,name:"computer disk",version:"1.0"},{emoji:"💾",category:6,name:"floppy disk",version:"1.0"},{emoji:"💿",category:6,name:"optical disk",version:"1.0"},{emoji:"📀",category:6,name:"dvd",version:"1.0"},{emoji:"🧮",category:6,name:"abacus",version:"11.0"},{emoji:"🎥",category:6,name:"movie camera",version:"1.0"},{emoji:"🎞️",category:6,name:"film frames",version:"1.0"},{emoji:"📽️",category:6,name:"film projector",version:"1.0"},{emoji:"🎬",category:6,name:"clapper board",version:"1.0"},{emoji:"📺",category:6,name:"television",version:"1.0"},{emoji:"📷",category:6,name:"camera",version:"1.0"},{emoji:"📸",category:6,name:"camera with flash",version:"1.0"},{emoji:"📹",category:6,name:"video camera",version:"1.0"},{emoji:"📼",category:6,name:"videocassette",version:"1.0"},{emoji:"🔍",category:6,name:"magnifying glass tilted left",version:"1.0"},{emoji:"🔎",category:6,name:"magnifying glass tilted right",version:"1.0"},{emoji:"🕯️",category:6,name:"candle",version:"1.0"},{emoji:"💡",category:6,name:"light bulb",version:"1.0"},{emoji:"🔦",category:6,name:"flashlight",version:"1.0"},{emoji:"🏮",category:6,name:"red paper lantern",version:"1.0"},{emoji:"🪔",category:6,name:"diya lamp",version:"12.0"},{emoji:"📔",category:6,name:"notebook with decorative cover",version:"1.0"},{emoji:"📕",category:6,name:"closed book",version:"1.0"},{emoji:"📖",category:6,name:"open book",version:"1.0"},{emoji:"📗",category:6,name:"green book",version:"1.0"},{emoji:"📘",category:6,name:"blue book",version:"1.0"},{emoji:"📙",category:6,name:"orange book",version:"1.0"},{emoji:"📚",category:6,name:"books",version:"1.0"},{emoji:"📓",category:6,name:"notebook",version:"1.0"},{emoji:"📒",category:6,name:"ledger",version:"1.0"},{emoji:"📃",category:6,name:"page with curl",version:"1.0"},{emoji:"📜",category:6,name:"scroll",version:"1.0"},{emoji:"📄",category:6,name:"page facing up",version:"1.0"},{emoji:"📰",category:6,name:"newspaper",version:"1.0"},{emoji:"🗞️",category:6,name:"rolled-up newspaper",version:"1.0"},{emoji:"📑",category:6,name:"bookmark tabs",version:"1.0"},{emoji:"🔖",category:6,name:"bookmark",version:"1.0"},{emoji:"🏷️",category:6,name:"label",version:"1.0"},{emoji:"💰",category:6,name:"money bag",version:"1.0"},{emoji:"🪙",category:6,name:"coin",version:"13.0"},{emoji:"💴",category:6,name:"yen banknote",version:"1.0"},{emoji:"💵",category:6,name:"dollar banknote",version:"1.0"},{emoji:"💶",category:6,name:"euro banknote",version:"1.0"},{emoji:"💷",category:6,name:"pound banknote",version:"1.0"},{emoji:"💸",category:6,name:"money with wings",version:"1.0"},{emoji:"💳",category:6,name:"credit card",version:"1.0"},{emoji:"🧾",category:6,name:"receipt",version:"11.0"},{emoji:"💹",category:6,name:"chart increasing with yen",version:"1.0"},{emoji:"✉️",category:6,name:"envelope",version:"1.0"},{emoji:"📧",category:6,name:"e-mail",version:"1.0"},{emoji:"📨",category:6,name:"incoming envelope",version:"1.0"},{emoji:"📩",category:6,name:"envelope with arrow",version:"1.0"},{emoji:"📤",category:6,name:"outbox tray",version:"1.0"},{emoji:"📥",category:6,name:"inbox tray",version:"1.0"},{emoji:"📦",category:6,name:"package",version:"1.0"},{emoji:"📫",category:6,name:"closed mailbox with raised flag",version:"1.0"},{emoji:"📪",category:6,name:"closed mailbox with lowered flag",version:"1.0"},{emoji:"📬",category:6,name:"open mailbox with raised flag",version:"1.0"},{emoji:"📭",category:6,name:"open mailbox with lowered flag",version:"1.0"},{emoji:"📮",category:6,name:"postbox",version:"1.0"},{emoji:"🗳️",category:6,name:"ballot box with ballot",version:"1.0"},{emoji:"✏️",category:6,name:"pencil",version:"1.0"},{emoji:"✒️",category:6,name:"black nib",version:"1.0"},{emoji:"🖋️",category:6,name:"fountain pen",version:"1.0"},{emoji:"🖊️",category:6,name:"pen",version:"1.0"},{emoji:"🖌️",category:6,name:"paintbrush",version:"1.0"},{emoji:"🖍️",category:6,name:"crayon",version:"1.0"},{emoji:"📝",category:6,name:"memo",version:"1.0"},{emoji:"💼",category:6,name:"briefcase",version:"1.0"},{emoji:"📁",category:6,name:"file folder",version:"1.0"},{emoji:"📂",category:6,name:"open file folder",version:"1.0"},{emoji:"🗂️",category:6,name:"card index dividers",version:"1.0"},{emoji:"📅",category:6,name:"calendar",version:"1.0"},{emoji:"📆",category:6,name:"tear-off calendar",version:"1.0"},{emoji:"🗒️",category:6,name:"spiral notepad",version:"1.0"},{emoji:"🗓️",category:6,name:"spiral calendar",version:"1.0"},{emoji:"📇",category:6,name:"card index",version:"1.0"},{emoji:"📈",category:6,name:"chart increasing",version:"1.0"},{emoji:"📉",category:6,name:"chart decreasing",version:"1.0"},{emoji:"📊",category:6,name:"bar chart",version:"1.0"},{emoji:"📋",category:6,name:"clipboard",version:"1.0"},{emoji:"📌",category:6,name:"pushpin",version:"1.0"},{emoji:"📍",category:6,name:"round pushpin",version:"1.0"},{emoji:"📎",category:6,name:"paperclip",version:"1.0"},{emoji:"🖇️",category:6,name:"linked paperclips",version:"1.0"},{emoji:"📏",category:6,name:"straight ruler",version:"1.0"},{emoji:"📐",category:6,name:"triangular ruler",version:"1.0"},{emoji:"✂️",category:6,name:"scissors",version:"1.0"},{emoji:"🗃️",category:6,name:"card file box",version:"1.0"},{emoji:"🗄️",category:6,name:"file cabinet",version:"1.0"},{emoji:"🗑️",category:6,name:"wastebasket",version:"1.0"},{emoji:"🔒",category:6,name:"locked",version:"1.0"},{emoji:"🔓",category:6,name:"unlocked",version:"1.0"},{emoji:"🔏",category:6,name:"locked with pen",version:"1.0"},{emoji:"🔐",category:6,name:"locked with key",version:"1.0"},{emoji:"🔑",category:6,name:"key",version:"1.0"},{emoji:"🗝️",category:6,name:"old key",version:"1.0"},{emoji:"🔨",category:6,name:"hammer",version:"1.0"},{emoji:"🪓",category:6,name:"axe",version:"12.0"},{emoji:"⛏️",category:6,name:"pick",version:"1.0"},{emoji:"⚒️",category:6,name:"hammer and pick",version:"1.0"},{emoji:"🛠️",category:6,name:"hammer and wrench",version:"1.0"},{emoji:"🗡️",category:6,name:"dagger",version:"1.0"},{emoji:"⚔️",category:6,name:"crossed swords",version:"1.0"},{emoji:"🔫",category:6,name:"pistol",version:"1.0"},{emoji:"🪃",category:6,name:"boomerang",version:"13.0"},{emoji:"🏹",category:6,name:"bow and arrow",version:"1.0"},{emoji:"🛡️",category:6,name:"shield",version:"1.0"},{emoji:"🪚",category:6,name:"carpentry saw",version:"13.0"},{emoji:"🔧",category:6,name:"wrench",version:"1.0"},{emoji:"🪛",category:6,name:"screwdriver",version:"13.0"},{emoji:"🔩",category:6,name:"nut and bolt",version:"1.0"},{emoji:"⚙️",category:6,name:"gear",version:"1.0"},{emoji:"🗜️",category:6,name:"clamp",version:"1.0"},{emoji:"⚖️",category:6,name:"balance scale",version:"1.0"},{emoji:"🦯",category:6,name:"white cane",version:"12.0"},{emoji:"🔗",category:6,name:"link",version:"1.0"},{emoji:"⛓️",category:6,name:"chains",version:"1.0"},{emoji:"🪝",category:6,name:"hook",version:"13.0"},{emoji:"🧰",category:6,name:"toolbox",version:"11.0"},{emoji:"🧲",category:6,name:"magnet",version:"11.0"},{emoji:"🪜",category:6,name:"ladder",version:"13.0"},{emoji:"⚗️",category:6,name:"alembic",version:"1.0"},{emoji:"🧪",category:6,name:"test tube",version:"11.0"},{emoji:"🧫",category:6,name:"petri dish",version:"11.0"},{emoji:"🧬",category:6,name:"dna",version:"11.0"},{emoji:"🔬",category:6,name:"microscope",version:"1.0"},{emoji:"🔭",category:6,name:"telescope",version:"1.0"},{emoji:"📡",category:6,name:"satellite antenna",version:"1.0"},{emoji:"💉",category:6,name:"syringe",version:"1.0"},{emoji:"🩸",category:6,name:"drop of blood",version:"12.0"},{emoji:"💊",category:6,name:"pill",version:"1.0"},{emoji:"🩹",category:6,name:"adhesive bandage",version:"12.0"},{emoji:"🩺",category:6,name:"stethoscope",version:"12.0"},{emoji:"🚪",category:6,name:"door",version:"1.0"},{emoji:"🛗",category:6,name:"elevator",version:"13.0"},{emoji:"🪞",category:6,name:"mirror",version:"13.0"},{emoji:"🪟",category:6,name:"window",version:"13.0"},{emoji:"🛏️",category:6,name:"bed",version:"1.0"},{emoji:"🛋️",category:6,name:"couch and lamp",version:"1.0"},{emoji:"🪑",category:6,name:"chair",version:"12.0"},{emoji:"🚽",category:6,name:"toilet",version:"1.0"},{emoji:"🪠",category:6,name:"plunger",version:"13.0"},{emoji:"🚿",category:6,name:"shower",version:"1.0"},{emoji:"🛁",category:6,name:"bathtub",version:"1.0"},{emoji:"🪤",category:6,name:"mouse trap",version:"13.0"},{emoji:"🪒",category:6,name:"razor",version:"12.0"},{emoji:"🧴",category:6,name:"lotion bottle",version:"11.0"},{emoji:"🧷",category:6,name:"safety pin",version:"11.0"},{emoji:"🧹",category:6,name:"broom",version:"11.0"},{emoji:"🧺",category:6,name:"basket",version:"11.0"},{emoji:"🧻",category:6,name:"roll of paper",version:"11.0"},{emoji:"🪣",category:6,name:"bucket",version:"13.0"},{emoji:"🧼",category:6,name:"soap",version:"11.0"},{emoji:"🪥",category:6,name:"toothbrush",version:"13.0"},{emoji:"🧽",category:6,name:"sponge",version:"11.0"},{emoji:"🧯",category:6,name:"fire extinguisher",version:"11.0"},{emoji:"🛒",category:6,name:"shopping cart",version:"3.0"},{emoji:"🚬",category:6,name:"cigarette",version:"1.0"},{emoji:"⚰️",category:6,name:"coffin",version:"1.0"},{emoji:"🪦",category:6,name:"headstone",version:"13.0"},{emoji:"⚱️",category:6,name:"funeral urn",version:"1.0"},{emoji:"🗿",category:6,name:"moai",version:"1.0"},{emoji:"🪧",category:6,name:"placard",version:"13.0"},{emoji:"🏧",category:7,name:"ATM sign",version:"1.0"},{emoji:"🚮",category:7,name:"litter in bin sign",version:"1.0"},{emoji:"🚰",category:7,name:"potable water",version:"1.0"},{emoji:"♿",category:7,name:"wheelchair symbol",version:"1.0"},{emoji:"🚹",category:7,name:"men’s room",version:"1.0"},{emoji:"🚺",category:7,name:"women’s room",version:"1.0"},{emoji:"🚻",category:7,name:"restroom",version:"1.0"},{emoji:"🚼",category:7,name:"baby symbol",version:"1.0"},{emoji:"🚾",category:7,name:"water closet",version:"1.0"},{emoji:"🛂",category:7,name:"passport control",version:"1.0"},{emoji:"🛃",category:7,name:"customs",version:"1.0"},{emoji:"🛄",category:7,name:"baggage claim",version:"1.0"},{emoji:"🛅",category:7,name:"left luggage",version:"1.0"},{emoji:"⚠️",category:7,name:"warning",version:"1.0"},{emoji:"🚸",category:7,name:"children crossing",version:"1.0"},{emoji:"⛔",category:7,name:"no entry",version:"1.0"},{emoji:"🚫",category:7,name:"prohibited",version:"1.0"},{emoji:"🚳",category:7,name:"no bicycles",version:"1.0"},{emoji:"🚭",category:7,name:"no smoking",version:"1.0"},{emoji:"🚯",category:7,name:"no littering",version:"1.0"},{emoji:"🚱",category:7,name:"non-potable water",version:"1.0"},{emoji:"🚷",category:7,name:"no pedestrians",version:"1.0"},{emoji:"📵",category:7,name:"no mobile phones",version:"1.0"},{emoji:"🔞",category:7,name:"no one under eighteen",version:"1.0"},{emoji:"☢️",category:7,name:"radioactive",version:"1.0"},{emoji:"☣️",category:7,name:"biohazard",version:"1.0"},{emoji:"⬆️",category:7,name:"up arrow",version:"1.0"},{emoji:"↗️",category:7,name:"up-right arrow",version:"1.0"},{emoji:"➡️",category:7,name:"right arrow",version:"1.0"},{emoji:"↘️",category:7,name:"down-right arrow",version:"1.0"},{emoji:"⬇️",category:7,name:"down arrow",version:"1.0"},{emoji:"↙️",category:7,name:"down-left arrow",version:"1.0"},{emoji:"⬅️",category:7,name:"left arrow",version:"1.0"},{emoji:"↖️",category:7,name:"up-left arrow",version:"1.0"},{emoji:"↕️",category:7,name:"up-down arrow",version:"1.0"},{emoji:"↔️",category:7,name:"left-right arrow",version:"1.0"},{emoji:"↩️",category:7,name:"right arrow curving left",version:"1.0"},{emoji:"↪️",category:7,name:"left arrow curving right",version:"1.0"},{emoji:"⤴️",category:7,name:"right arrow curving up",version:"1.0"},{emoji:"⤵️",category:7,name:"right arrow curving down",version:"1.0"},{emoji:"🔃",category:7,name:"clockwise vertical arrows",version:"1.0"},{emoji:"🔄",category:7,name:"counterclockwise arrows button",version:"1.0"},{emoji:"🔙",category:7,name:"BACK arrow",version:"1.0"},{emoji:"🔚",category:7,name:"END arrow",version:"1.0"},{emoji:"🔛",category:7,name:"ON! arrow",version:"1.0"},{emoji:"🔜",category:7,name:"SOON arrow",version:"1.0"},{emoji:"🔝",category:7,name:"TOP arrow",version:"1.0"},{emoji:"🛐",category:7,name:"place of worship",version:"1.0"},{emoji:"⚛️",category:7,name:"atom symbol",version:"1.0"},{emoji:"🕉️",category:7,name:"om",version:"1.0"},{emoji:"✡️",category:7,name:"star of David",version:"1.0"},{emoji:"☸️",category:7,name:"wheel of dharma",version:"1.0"},{emoji:"☯️",category:7,name:"yin yang",version:"1.0"},{emoji:"✝️",category:7,name:"latin cross",version:"1.0"},{emoji:"☦️",category:7,name:"orthodox cross",version:"1.0"},{emoji:"☪️",category:7,name:"star and crescent",version:"1.0"},{emoji:"☮️",category:7,name:"peace symbol",version:"1.0"},{emoji:"🕎",category:7,name:"menorah",version:"1.0"},{emoji:"🔯",category:7,name:"dotted six-pointed star",version:"1.0"},{emoji:"♈",category:7,name:"Aries",version:"1.0"},{emoji:"♉",category:7,name:"Taurus",version:"1.0"},{emoji:"♊",category:7,name:"Gemini",version:"1.0"},{emoji:"♋",category:7,name:"Cancer",version:"1.0"},{emoji:"♌",category:7,name:"Leo",version:"1.0"},{emoji:"♍",category:7,name:"Virgo",version:"1.0"},{emoji:"♎",category:7,name:"Libra",version:"1.0"},{emoji:"♏",category:7,name:"Scorpio",version:"1.0"},{emoji:"♐",category:7,name:"Sagittarius",version:"1.0"},{emoji:"♑",category:7,name:"Capricorn",version:"1.0"},{emoji:"♒",category:7,name:"Aquarius",version:"1.0"},{emoji:"♓",category:7,name:"Pisces",version:"1.0"},{emoji:"⛎",category:7,name:"Ophiuchus",version:"1.0"},{emoji:"🔀",category:7,name:"shuffle tracks button",version:"1.0"},{emoji:"🔁",category:7,name:"repeat button",version:"1.0"},{emoji:"🔂",category:7,name:"repeat single button",version:"1.0"},{emoji:"▶️",category:7,name:"play button",version:"1.0"},{emoji:"⏩",category:7,name:"fast-forward button",version:"1.0"},{emoji:"⏭️",category:7,name:"next track button",version:"1.0"},{emoji:"⏯️",category:7,name:"play or pause button",version:"1.0"},{emoji:"◀️",category:7,name:"reverse button",version:"1.0"},{emoji:"⏪",category:7,name:"fast reverse button",version:"1.0"},{emoji:"⏮️",category:7,name:"last track button",version:"1.0"},{emoji:"🔼",category:7,name:"upwards button",version:"1.0"},{emoji:"⏫",category:7,name:"fast up button",version:"1.0"},{emoji:"🔽",category:7,name:"downwards button",version:"1.0"},{emoji:"⏬",category:7,name:"fast down button",version:"1.0"},{emoji:"⏸️",category:7,name:"pause button",version:"1.0"},{emoji:"⏹️",category:7,name:"stop button",version:"1.0"},{emoji:"⏺️",category:7,name:"record button",version:"1.0"},{emoji:"⏏️",category:7,name:"eject button",version:"1.0"},{emoji:"🎦",category:7,name:"cinema",version:"1.0"},{emoji:"🔅",category:7,name:"dim button",version:"1.0"},{emoji:"🔆",category:7,name:"bright button",version:"1.0"},{emoji:"📶",category:7,name:"antenna bars",version:"1.0"},{emoji:"📳",category:7,name:"vibration mode",version:"1.0"},{emoji:"📴",category:7,name:"mobile phone off",version:"1.0"},{emoji:"♀️",category:7,name:"female sign",version:"4.0"},{emoji:"♂️",category:7,name:"male sign",version:"4.0"},{emoji:"⚧️",category:7,name:"transgender symbol",version:"13.0"},{emoji:"✖️",category:7,name:"multiply",version:"1.0"},{emoji:"➕",category:7,name:"plus",version:"1.0"},{emoji:"➖",category:7,name:"minus",version:"1.0"},{emoji:"➗",category:7,name:"divide",version:"1.0"},{emoji:"♾️",category:7,name:"infinity",version:"11.0"},{emoji:"‼️",category:7,name:"double exclamation mark",version:"1.0"},{emoji:"⁉️",category:7,name:"exclamation question mark",version:"1.0"},{emoji:"❓",category:7,name:"question mark",version:"1.0"},{emoji:"❔",category:7,name:"white question mark",version:"1.0"},{emoji:"❕",category:7,name:"white exclamation mark",version:"1.0"},{emoji:"❗",category:7,name:"exclamation mark",version:"1.0"},{emoji:"〰️",category:7,name:"wavy dash",version:"1.0"},{emoji:"💱",category:7,name:"currency exchange",version:"1.0"},{emoji:"💲",category:7,name:"heavy dollar sign",version:"1.0"},{emoji:"⚕️",category:7,name:"medical symbol",version:"4.0"},{emoji:"♻️",category:7,name:"recycling symbol",version:"1.0"},{emoji:"⚜️",category:7,name:"fleur-de-lis",version:"1.0"},{emoji:"🔱",category:7,name:"trident emblem",version:"1.0"},{emoji:"📛",category:7,name:"name badge",version:"1.0"},{emoji:"🔰",category:7,name:"Japanese symbol for beginner",version:"1.0"},{emoji:"⭕",category:7,name:"hollow red circle",version:"1.0"},{emoji:"✅",category:7,name:"check mark button",version:"1.0"},{emoji:"☑️",category:7,name:"check box with check",version:"1.0"},{emoji:"✔️",category:7,name:"check mark",version:"1.0"},{emoji:"❌",category:7,name:"cross mark",version:"1.0"},{emoji:"❎",category:7,name:"cross mark button",version:"1.0"},{emoji:"➰",category:7,name:"curly loop",version:"1.0"},{emoji:"➿",category:7,name:"double curly loop",version:"1.0"},{emoji:"〽️",category:7,name:"part alternation mark",version:"1.0"},{emoji:"✳️",category:7,name:"eight-spoked asterisk",version:"1.0"},{emoji:"✴️",category:7,name:"eight-pointed star",version:"1.0"},{emoji:"❇️",category:7,name:"sparkle",version:"1.0"},{emoji:"©️",category:7,name:"copyright",version:"1.0"},{emoji:"®️",category:7,name:"registered",version:"1.0"},{emoji:"™️",category:7,name:"trade mark",version:"1.0"},{emoji:"#️⃣",category:7,name:"keycap: #",version:"1.0"},{emoji:"*️⃣",category:7,name:"keycap: *",version:"2.0"},{emoji:"0️⃣",category:7,name:"keycap: 0",version:"1.0"},{emoji:"1️⃣",category:7,name:"keycap: 1",version:"1.0"},{emoji:"2️⃣",category:7,name:"keycap: 2",version:"1.0"},{emoji:"3️⃣",category:7,name:"keycap: 3",version:"1.0"},{emoji:"4️⃣",category:7,name:"keycap: 4",version:"1.0"},{emoji:"5️⃣",category:7,name:"keycap: 5",version:"1.0"},{emoji:"6️⃣",category:7,name:"keycap: 6",version:"1.0"},{emoji:"7️⃣",category:7,name:"keycap: 7",version:"1.0"},{emoji:"8️⃣",category:7,name:"keycap: 8",version:"1.0"},{emoji:"9️⃣",category:7,name:"keycap: 9",version:"1.0"},{emoji:"🔟",category:7,name:"keycap: 10",version:"1.0"},{emoji:"🔠",category:7,name:"input latin uppercase",version:"1.0"},{emoji:"🔡",category:7,name:"input latin lowercase",version:"1.0"},{emoji:"🔢",category:7,name:"input numbers",version:"1.0"},{emoji:"🔣",category:7,name:"input symbols",version:"1.0"},{emoji:"🔤",category:7,name:"input latin letters",version:"1.0"},{emoji:"🅰️",category:7,name:"A button (blood type)",version:"1.0"},{emoji:"🆎",category:7,name:"AB button (blood type)",version:"1.0"},{emoji:"🅱️",category:7,name:"B button (blood type)",version:"1.0"},{emoji:"🆑",category:7,name:"CL button",version:"1.0"},{emoji:"🆒",category:7,name:"COOL button",version:"1.0"},{emoji:"🆓",category:7,name:"FREE button",version:"1.0"},{emoji:"ℹ️",category:7,name:"information",version:"1.0"},{emoji:"🆔",category:7,name:"ID button",version:"1.0"},{emoji:"Ⓜ️",category:7,name:"circled M",version:"1.0"},{emoji:"🆕",category:7,name:"NEW button",version:"1.0"},{emoji:"🆖",category:7,name:"NG button",version:"1.0"},{emoji:"🅾️",category:7,name:"O button (blood type)",version:"1.0"},{emoji:"🆗",category:7,name:"OK button",version:"1.0"},{emoji:"🅿️",category:7,name:"P button",version:"1.0"},{emoji:"🆘",category:7,name:"SOS button",version:"1.0"},{emoji:"🆙",category:7,name:"UP! button",version:"1.0"},{emoji:"🆚",category:7,name:"VS button",version:"1.0"},{emoji:"🈁",category:7,name:"Japanese “here” button",version:"1.0"},{emoji:"🈂️",category:7,name:"Japanese “service charge” button",version:"1.0"},{emoji:"🈷️",category:7,name:"Japanese “monthly amount” button",version:"1.0"},{emoji:"🈶",category:7,name:"Japanese “not free of charge” button",version:"1.0"},{emoji:"🈯",category:7,name:"Japanese “reserved” button",version:"1.0"},{emoji:"🉐",category:7,name:"Japanese “bargain” button",version:"1.0"},{emoji:"🈹",category:7,name:"Japanese “discount” button",version:"1.0"},{emoji:"🈚",category:7,name:"Japanese “free of charge” button",version:"1.0"},{emoji:"🈲",category:7,name:"Japanese “prohibited” button",version:"1.0"},{emoji:"🉑",category:7,name:"Japanese “acceptable” button",version:"1.0"},{emoji:"🈸",category:7,name:"Japanese “application” button",version:"1.0"},{emoji:"🈴",category:7,name:"Japanese “passing grade” button",version:"1.0"},{emoji:"🈳",category:7,name:"Japanese “vacancy” button",version:"1.0"},{emoji:"㊗️",category:7,name:"Japanese “congratulations” button",version:"1.0"},{emoji:"㊙️",category:7,name:"Japanese “secret” button",version:"1.0"},{emoji:"🈺",category:7,name:"Japanese “open for business” button",version:"1.0"},{emoji:"🈵",category:7,name:"Japanese “no vacancy” button",version:"1.0"},{emoji:"🔴",category:7,name:"red circle",version:"1.0"},{emoji:"🟠",category:7,name:"orange circle",version:"12.0"},{emoji:"🟡",category:7,name:"yellow circle",version:"12.0"},{emoji:"🟢",category:7,name:"green circle",version:"12.0"},{emoji:"🔵",category:7,name:"blue circle",version:"1.0"},{emoji:"🟣",category:7,name:"purple circle",version:"12.0"},{emoji:"🟤",category:7,name:"brown circle",version:"12.0"},{emoji:"⚫",category:7,name:"black circle",version:"1.0"},{emoji:"⚪",category:7,name:"white circle",version:"1.0"},{emoji:"🟥",category:7,name:"red square",version:"12.0"},{emoji:"🟧",category:7,name:"orange square",version:"12.0"},{emoji:"🟨",category:7,name:"yellow square",version:"12.0"},{emoji:"🟩",category:7,name:"green square",version:"12.0"},{emoji:"🟦",category:7,name:"blue square",version:"12.0"},{emoji:"🟪",category:7,name:"purple square",version:"12.0"},{emoji:"🟫",category:7,name:"brown square",version:"12.0"},{emoji:"⬛",category:7,name:"black large square",version:"1.0"},{emoji:"⬜",category:7,name:"white large square",version:"1.0"},{emoji:"◼️",category:7,name:"black medium square",version:"1.0"},{emoji:"◻️",category:7,name:"white medium square",version:"1.0"},{emoji:"◾",category:7,name:"black medium-small square",version:"1.0"},{emoji:"◽",category:7,name:"white medium-small square",version:"1.0"},{emoji:"▪️",category:7,name:"black small square",version:"1.0"},{emoji:"▫️",category:7,name:"white small square",version:"1.0"},{emoji:"🔶",category:7,name:"large orange diamond",version:"1.0"},{emoji:"🔷",category:7,name:"large blue diamond",version:"1.0"},{emoji:"🔸",category:7,name:"small orange diamond",version:"1.0"},{emoji:"🔹",category:7,name:"small blue diamond",version:"1.0"},{emoji:"🔺",category:7,name:"red triangle pointed up",version:"1.0"},{emoji:"🔻",category:7,name:"red triangle pointed down",version:"1.0"},{emoji:"💠",category:7,name:"diamond with a dot",version:"1.0"},{emoji:"🔘",category:7,name:"radio button",version:"1.0"},{emoji:"🔳",category:7,name:"white square button",version:"1.0"},{emoji:"🔲",category:7,name:"black square button",version:"1.0"},{emoji:"🏁",category:8,name:"chequered flag",version:"1.0"},{emoji:"🚩",category:8,name:"triangular flag",version:"1.0"},{emoji:"🎌",category:8,name:"crossed flags",version:"1.0"},{emoji:"🏴",category:8,name:"black flag",version:"1.0"},{emoji:"🏳️",category:8,name:"white flag",version:"1.0"},{emoji:"🏳️‍🌈",category:8,name:"rainbow flag",version:"4.0"},{emoji:"🏳️‍⚧️",category:8,name:"transgender flag",version:"13.0"},{emoji:"🏴‍☠️",category:8,name:"pirate flag",version:"11.0"},{emoji:"🇦🇨",category:8,name:"flag: Ascension Island",version:"2.0"},{emoji:"🇦🇩",category:8,name:"flag: Andorra",version:"2.0"},{emoji:"🇦🇪",category:8,name:"flag: United Arab Emirates",version:"2.0"},{emoji:"🇦🇫",category:8,name:"flag: Afghanistan",version:"2.0"},{emoji:"🇦🇬",category:8,name:"flag: Antigua & Barbuda",version:"2.0"},{emoji:"🇦🇮",category:8,name:"flag: Anguilla",version:"2.0"},{emoji:"🇦🇱",category:8,name:"flag: Albania",version:"2.0"},{emoji:"🇦🇲",category:8,name:"flag: Armenia",version:"2.0"},{emoji:"🇦🇴",category:8,name:"flag: Angola",version:"2.0"},{emoji:"🇦🇶",category:8,name:"flag: Antarctica",version:"2.0"},{emoji:"🇦🇷",category:8,name:"flag: Argentina",version:"2.0"},{emoji:"🇦🇸",category:8,name:"flag: American Samoa",version:"2.0"},{emoji:"🇦🇹",category:8,name:"flag: Austria",version:"2.0"},{emoji:"🇦🇺",category:8,name:"flag: Australia",version:"2.0"},{emoji:"🇦🇼",category:8,name:"flag: Aruba",version:"2.0"},{emoji:"🇦🇽",category:8,name:"flag: Åland Islands",version:"2.0"},{emoji:"🇦🇿",category:8,name:"flag: Azerbaijan",version:"2.0"},{emoji:"🇧🇦",category:8,name:"flag: Bosnia & Herzegovina",version:"2.0"},{emoji:"🇧🇧",category:8,name:"flag: Barbados",version:"2.0"},{emoji:"🇧🇩",category:8,name:"flag: Bangladesh",version:"2.0"},{emoji:"🇧🇪",category:8,name:"flag: Belgium",version:"2.0"},{emoji:"🇧🇫",category:8,name:"flag: Burkina Faso",version:"2.0"},{emoji:"🇧🇬",category:8,name:"flag: Bulgaria",version:"2.0"},{emoji:"🇧🇭",category:8,name:"flag: Bahrain",version:"2.0"},{emoji:"🇧🇮",category:8,name:"flag: Burundi",version:"2.0"},{emoji:"🇧🇯",category:8,name:"flag: Benin",version:"2.0"},{emoji:"🇧🇱",category:8,name:"flag: St. Barthélemy",version:"2.0"},{emoji:"🇧🇲",category:8,name:"flag: Bermuda",version:"2.0"},{emoji:"🇧🇳",category:8,name:"flag: Brunei",version:"2.0"},{emoji:"🇧🇴",category:8,name:"flag: Bolivia",version:"2.0"},{emoji:"🇧🇶",category:8,name:"flag: Caribbean Netherlands",version:"2.0"},{emoji:"🇧🇷",category:8,name:"flag: Brazil",version:"2.0"},{emoji:"🇧🇸",category:8,name:"flag: Bahamas",version:"2.0"},{emoji:"🇧🇹",category:8,name:"flag: Bhutan",version:"2.0"},{emoji:"🇧🇻",category:8,name:"flag: Bouvet Island",version:"2.0"},{emoji:"🇧🇼",category:8,name:"flag: Botswana",version:"2.0"},{emoji:"🇧🇾",category:8,name:"flag: Belarus",version:"2.0"},{emoji:"🇧🇿",category:8,name:"flag: Belize",version:"2.0"},{emoji:"🇨🇦",category:8,name:"flag: Canada",version:"2.0"},{emoji:"🇨🇨",category:8,name:"flag: Cocos (Keeling) Islands",version:"2.0"},{emoji:"🇨🇩",category:8,name:"flag: Congo - Kinshasa",version:"2.0"},{emoji:"🇨🇫",category:8,name:"flag: Central African Republic",version:"2.0"},{emoji:"🇨🇬",category:8,name:"flag: Congo - Brazzaville",version:"2.0"},{emoji:"🇨🇭",category:8,name:"flag: Switzerland",version:"2.0"},{emoji:"🇨🇮",category:8,name:"flag: Côte d’Ivoire",version:"2.0"},{emoji:"🇨🇰",category:8,name:"flag: Cook Islands",version:"2.0"},{emoji:"🇨🇱",category:8,name:"flag: Chile",version:"2.0"},{emoji:"🇨🇲",category:8,name:"flag: Cameroon",version:"2.0"},{emoji:"🇨🇳",category:8,name:"flag: China",version:"1.0"},{emoji:"🇨🇴",category:8,name:"flag: Colombia",version:"2.0"},{emoji:"🇨🇵",category:8,name:"flag: Clipperton Island",version:"2.0"},{emoji:"🇨🇷",category:8,name:"flag: Costa Rica",version:"2.0"},{emoji:"🇨🇺",category:8,name:"flag: Cuba",version:"2.0"},{emoji:"🇨🇻",category:8,name:"flag: Cape Verde",version:"2.0"},{emoji:"🇨🇼",category:8,name:"flag: Curaçao",version:"2.0"},{emoji:"🇨🇽",category:8,name:"flag: Christmas Island",version:"2.0"},{emoji:"🇨🇾",category:8,name:"flag: Cyprus",version:"2.0"},{emoji:"🇨🇿",category:8,name:"flag: Czechia",version:"2.0"},{emoji:"🇩🇪",category:8,name:"flag: Germany",version:"1.0"},{emoji:"🇩🇬",category:8,name:"flag: Diego Garcia",version:"2.0"},{emoji:"🇩🇯",category:8,name:"flag: Djibouti",version:"2.0"},{emoji:"🇩🇰",category:8,name:"flag: Denmark",version:"2.0"},{emoji:"🇩🇲",category:8,name:"flag: Dominica",version:"2.0"},{emoji:"🇩🇴",category:8,name:"flag: Dominican Republic",version:"2.0"},{emoji:"🇩🇿",category:8,name:"flag: Algeria",version:"2.0"},{emoji:"🇪🇦",category:8,name:"flag: Ceuta & Melilla",version:"2.0"},{emoji:"🇪🇨",category:8,name:"flag: Ecuador",version:"2.0"},{emoji:"🇪🇪",category:8,name:"flag: Estonia",version:"2.0"},{emoji:"🇪🇬",category:8,name:"flag: Egypt",version:"2.0"},{emoji:"🇪🇭",category:8,name:"flag: Western Sahara",version:"2.0"},{emoji:"🇪🇷",category:8,name:"flag: Eritrea",version:"2.0"},{emoji:"🇪🇸",category:8,name:"flag: Spain",version:"1.0"},{emoji:"🇪🇹",category:8,name:"flag: Ethiopia",version:"2.0"},{emoji:"🇪🇺",category:8,name:"flag: European Union",version:"2.0"},{emoji:"🇫🇮",category:8,name:"flag: Finland",version:"2.0"},{emoji:"🇫🇯",category:8,name:"flag: Fiji",version:"2.0"},{emoji:"🇫🇰",category:8,name:"flag: Falkland Islands",version:"2.0"},{emoji:"🇫🇲",category:8,name:"flag: Micronesia",version:"2.0"},{emoji:"🇫🇴",category:8,name:"flag: Faroe Islands",version:"2.0"},{emoji:"🇫🇷",category:8,name:"flag: France",version:"1.0"},{emoji:"🇬🇦",category:8,name:"flag: Gabon",version:"2.0"},{emoji:"🇬🇧",category:8,name:"flag: United Kingdom",version:"1.0"},{emoji:"🇬🇩",category:8,name:"flag: Grenada",version:"2.0"},{emoji:"🇬🇪",category:8,name:"flag: Georgia",version:"2.0"},{emoji:"🇬🇫",category:8,name:"flag: French Guiana",version:"2.0"},{emoji:"🇬🇬",category:8,name:"flag: Guernsey",version:"2.0"},{emoji:"🇬🇭",category:8,name:"flag: Ghana",version:"2.0"},{emoji:"🇬🇮",category:8,name:"flag: Gibraltar",version:"2.0"},{emoji:"🇬🇱",category:8,name:"flag: Greenland",version:"2.0"},{emoji:"🇬🇲",category:8,name:"flag: Gambia",version:"2.0"},{emoji:"🇬🇳",category:8,name:"flag: Guinea",version:"2.0"},{emoji:"🇬🇵",category:8,name:"flag: Guadeloupe",version:"2.0"},{emoji:"🇬🇶",category:8,name:"flag: Equatorial Guinea",version:"2.0"},{emoji:"🇬🇷",category:8,name:"flag: Greece",version:"2.0"},{emoji:"🇬🇸",category:8,name:"flag: South Georgia & South Sandwich Islands",version:"2.0"},{emoji:"🇬🇹",category:8,name:"flag: Guatemala",version:"2.0"},{emoji:"🇬🇺",category:8,name:"flag: Guam",version:"2.0"},{emoji:"🇬🇼",category:8,name:"flag: Guinea-Bissau",version:"2.0"},{emoji:"🇬🇾",category:8,name:"flag: Guyana",version:"2.0"},{emoji:"🇭🇰",category:8,name:"flag: Hong Kong SAR China",version:"2.0"},{emoji:"🇭🇲",category:8,name:"flag: Heard & McDonald Islands",version:"2.0"},{emoji:"🇭🇳",category:8,name:"flag: Honduras",version:"2.0"},{emoji:"🇭🇷",category:8,name:"flag: Croatia",version:"2.0"},{emoji:"🇭🇹",category:8,name:"flag: Haiti",version:"2.0"},{emoji:"🇭🇺",category:8,name:"flag: Hungary",version:"2.0"},{emoji:"🇮🇨",category:8,name:"flag: Canary Islands",version:"2.0"},{emoji:"🇮🇩",category:8,name:"flag: Indonesia",version:"2.0"},{emoji:"🇮🇪",category:8,name:"flag: Ireland",version:"2.0"},{emoji:"🇮🇱",category:8,name:"flag: Israel",version:"2.0"},{emoji:"🇮🇲",category:8,name:"flag: Isle of Man",version:"2.0"},{emoji:"🇮🇳",category:8,name:"flag: India",version:"2.0"},{emoji:"🇮🇴",category:8,name:"flag: British Indian Ocean Territory",version:"2.0"},{emoji:"🇮🇶",category:8,name:"flag: Iraq",version:"2.0"},{emoji:"🇮🇷",category:8,name:"flag: Iran",version:"2.0"},{emoji:"🇮🇸",category:8,name:"flag: Iceland",version:"2.0"},{emoji:"🇮🇹",category:8,name:"flag: Italy",version:"1.0"},{emoji:"🇯🇪",category:8,name:"flag: Jersey",version:"2.0"},{emoji:"🇯🇲",category:8,name:"flag: Jamaica",version:"2.0"},{emoji:"🇯🇴",category:8,name:"flag: Jordan",version:"2.0"},{emoji:"🇯🇵",category:8,name:"flag: Japan",version:"1.0"},{emoji:"🇰🇪",category:8,name:"flag: Kenya",version:"2.0"},{emoji:"🇰🇬",category:8,name:"flag: Kyrgyzstan",version:"2.0"},{emoji:"🇰🇭",category:8,name:"flag: Cambodia",version:"2.0"},{emoji:"🇰🇮",category:8,name:"flag: Kiribati",version:"2.0"},{emoji:"🇰🇲",category:8,name:"flag: Comoros",version:"2.0"},{emoji:"🇰🇳",category:8,name:"flag: St. Kitts & Nevis",version:"2.0"},{emoji:"🇰🇵",category:8,name:"flag: North Korea",version:"2.0"},{emoji:"🇰🇷",category:8,name:"flag: South Korea",version:"1.0"},{emoji:"🇰🇼",category:8,name:"flag: Kuwait",version:"2.0"},{emoji:"🇰🇾",category:8,name:"flag: Cayman Islands",version:"2.0"},{emoji:"🇰🇿",category:8,name:"flag: Kazakhstan",version:"2.0"},{emoji:"🇱🇦",category:8,name:"flag: Laos",version:"2.0"},{emoji:"🇱🇧",category:8,name:"flag: Lebanon",version:"2.0"},{emoji:"🇱🇨",category:8,name:"flag: St. Lucia",version:"2.0"},{emoji:"🇱🇮",category:8,name:"flag: Liechtenstein",version:"2.0"},{emoji:"🇱🇰",category:8,name:"flag: Sri Lanka",version:"2.0"},{emoji:"🇱🇷",category:8,name:"flag: Liberia",version:"2.0"},{emoji:"🇱🇸",category:8,name:"flag: Lesotho",version:"2.0"},{emoji:"🇱🇹",category:8,name:"flag: Lithuania",version:"2.0"},{emoji:"🇱🇺",category:8,name:"flag: Luxembourg",version:"2.0"},{emoji:"🇱🇻",category:8,name:"flag: Latvia",version:"2.0"},{emoji:"🇱🇾",category:8,name:"flag: Libya",version:"2.0"},{emoji:"🇲🇦",category:8,name:"flag: Morocco",version:"2.0"},{emoji:"🇲🇨",category:8,name:"flag: Monaco",version:"2.0"},{emoji:"🇲🇩",category:8,name:"flag: Moldova",version:"2.0"},{emoji:"🇲🇪",category:8,name:"flag: Montenegro",version:"2.0"},{emoji:"🇲🇫",category:8,name:"flag: St. Martin",version:"2.0"},{emoji:"🇲🇬",category:8,name:"flag: Madagascar",version:"2.0"},{emoji:"🇲🇭",category:8,name:"flag: Marshall Islands",version:"2.0"},{emoji:"🇲🇰",category:8,name:"flag: North Macedonia",version:"2.0"},{emoji:"🇲🇱",category:8,name:"flag: Mali",version:"2.0"},{emoji:"🇲🇲",category:8,name:"flag: Myanmar (Burma)",version:"2.0"},{emoji:"🇲🇳",category:8,name:"flag: Mongolia",version:"2.0"},{emoji:"🇲🇴",category:8,name:"flag: Macao SAR China",version:"2.0"},{emoji:"🇲🇵",category:8,name:"flag: Northern Mariana Islands",version:"2.0"},{emoji:"🇲🇶",category:8,name:"flag: Martinique",version:"2.0"},{emoji:"🇲🇷",category:8,name:"flag: Mauritania",version:"2.0"},{emoji:"🇲🇸",category:8,name:"flag: Montserrat",version:"2.0"},{emoji:"🇲🇹",category:8,name:"flag: Malta",version:"2.0"},{emoji:"🇲🇺",category:8,name:"flag: Mauritius",version:"2.0"},{emoji:"🇲🇻",category:8,name:"flag: Maldives",version:"2.0"},{emoji:"🇲🇼",category:8,name:"flag: Malawi",version:"2.0"},{emoji:"🇲🇽",category:8,name:"flag: Mexico",version:"2.0"},{emoji:"🇲🇾",category:8,name:"flag: Malaysia",version:"2.0"},{emoji:"🇲🇿",category:8,name:"flag: Mozambique",version:"2.0"},{emoji:"🇳🇦",category:8,name:"flag: Namibia",version:"2.0"},{emoji:"🇳🇨",category:8,name:"flag: New Caledonia",version:"2.0"},{emoji:"🇳🇪",category:8,name:"flag: Niger",version:"2.0"},{emoji:"🇳🇫",category:8,name:"flag: Norfolk Island",version:"2.0"},{emoji:"🇳🇬",category:8,name:"flag: Nigeria",version:"2.0"},{emoji:"🇳🇮",category:8,name:"flag: Nicaragua",version:"2.0"},{emoji:"🇳🇱",category:8,name:"flag: Netherlands",version:"2.0"},{emoji:"🇳🇴",category:8,name:"flag: Norway",version:"2.0"},{emoji:"🇳🇵",category:8,name:"flag: Nepal",version:"2.0"},{emoji:"🇳🇷",category:8,name:"flag: Nauru",version:"2.0"},{emoji:"🇳🇺",category:8,name:"flag: Niue",version:"2.0"},{emoji:"🇳🇿",category:8,name:"flag: New Zealand",version:"2.0"},{emoji:"🇴🇲",category:8,name:"flag: Oman",version:"2.0"},{emoji:"🇵🇦",category:8,name:"flag: Panama",version:"2.0"},{emoji:"🇵🇪",category:8,name:"flag: Peru",version:"2.0"},{emoji:"🇵🇫",category:8,name:"flag: French Polynesia",version:"2.0"},{emoji:"🇵🇬",category:8,name:"flag: Papua New Guinea",version:"2.0"},{emoji:"🇵🇭",category:8,name:"flag: Philippines",version:"2.0"},{emoji:"🇵🇰",category:8,name:"flag: Pakistan",version:"2.0"},{emoji:"🇵🇱",category:8,name:"flag: Poland",version:"2.0"},{emoji:"🇵🇲",category:8,name:"flag: St. Pierre & Miquelon",version:"2.0"},{emoji:"🇵🇳",category:8,name:"flag: Pitcairn Islands",version:"2.0"},{emoji:"🇵🇷",category:8,name:"flag: Puerto Rico",version:"2.0"},{emoji:"🇵🇸",category:8,name:"flag: Palestinian Territories",version:"2.0"},{emoji:"🇵🇹",category:8,name:"flag: Portugal",version:"2.0"},{emoji:"🇵🇼",category:8,name:"flag: Palau",version:"2.0"},{emoji:"🇵🇾",category:8,name:"flag: Paraguay",version:"2.0"},{emoji:"🇶🇦",category:8,name:"flag: Qatar",version:"2.0"},{emoji:"🇷🇪",category:8,name:"flag: Réunion",version:"2.0"},{emoji:"🇷🇴",category:8,name:"flag: Romania",version:"2.0"},{emoji:"🇷🇸",category:8,name:"flag: Serbia",version:"2.0"},{emoji:"🇷🇺",category:8,name:"flag: Russia",version:"1.0"},{emoji:"🇷🇼",category:8,name:"flag: Rwanda",version:"2.0"},{emoji:"🇸🇦",category:8,name:"flag: Saudi Arabia",version:"2.0"},{emoji:"🇸🇧",category:8,name:"flag: Solomon Islands",version:"2.0"},{emoji:"🇸🇨",category:8,name:"flag: Seychelles",version:"2.0"},{emoji:"🇸🇩",category:8,name:"flag: Sudan",version:"2.0"},{emoji:"🇸🇪",category:8,name:"flag: Sweden",version:"2.0"},{emoji:"🇸🇬",category:8,name:"flag: Singapore",version:"2.0"},{emoji:"🇸🇭",category:8,name:"flag: St. Helena",version:"2.0"},{emoji:"🇸🇮",category:8,name:"flag: Slovenia",version:"2.0"},{emoji:"🇸🇯",category:8,name:"flag: Svalbard & Jan Mayen",version:"2.0"},{emoji:"🇸🇰",category:8,name:"flag: Slovakia",version:"2.0"},{emoji:"🇸🇱",category:8,name:"flag: Sierra Leone",version:"2.0"},{emoji:"🇸🇲",category:8,name:"flag: San Marino",version:"2.0"},{emoji:"🇸🇳",category:8,name:"flag: Senegal",version:"2.0"},{emoji:"🇸🇴",category:8,name:"flag: Somalia",version:"2.0"},{emoji:"🇸🇷",category:8,name:"flag: Suriname",version:"2.0"},{emoji:"🇸🇸",category:8,name:"flag: South Sudan",version:"2.0"},{emoji:"🇸🇹",category:8,name:"flag: São Tomé & Príncipe",version:"2.0"},{emoji:"🇸🇻",category:8,name:"flag: El Salvador",version:"2.0"},{emoji:"🇸🇽",category:8,name:"flag: Sint Maarten",version:"2.0"},{emoji:"🇸🇾",category:8,name:"flag: Syria",version:"2.0"},{emoji:"🇸🇿",category:8,name:"flag: Eswatini",version:"2.0"},{emoji:"🇹🇦",category:8,name:"flag: Tristan da Cunha",version:"2.0"},{emoji:"🇹🇨",category:8,name:"flag: Turks & Caicos Islands",version:"2.0"},{emoji:"🇹🇩",category:8,name:"flag: Chad",version:"2.0"},{emoji:"🇹🇫",category:8,name:"flag: French Southern Territories",version:"2.0"},{emoji:"🇹🇬",category:8,name:"flag: Togo",version:"2.0"},{emoji:"🇹🇭",category:8,name:"flag: Thailand",version:"2.0"},{emoji:"🇹🇯",category:8,name:"flag: Tajikistan",version:"2.0"},{emoji:"🇹🇰",category:8,name:"flag: Tokelau",version:"2.0"},{emoji:"🇹🇱",category:8,name:"flag: Timor-Leste",version:"2.0"},{emoji:"🇹🇲",category:8,name:"flag: Turkmenistan",version:"2.0"},{emoji:"🇹🇳",category:8,name:"flag: Tunisia",version:"2.0"},{emoji:"🇹🇴",category:8,name:"flag: Tonga",version:"2.0"},{emoji:"🇹🇷",category:8,name:"flag: Turkey",version:"2.0"},{emoji:"🇹🇹",category:8,name:"flag: Trinidad & Tobago",version:"2.0"},{emoji:"🇹🇻",category:8,name:"flag: Tuvalu",version:"2.0"},{emoji:"🇹🇼",category:8,name:"flag: Taiwan",version:"2.0"},{emoji:"🇹🇿",category:8,name:"flag: Tanzania",version:"2.0"},{emoji:"🇺🇦",category:8,name:"flag: Ukraine",version:"2.0"},{emoji:"🇺🇬",category:8,name:"flag: Uganda",version:"2.0"},{emoji:"🇺🇲",category:8,name:"flag: U.S. Outlying Islands",version:"2.0"},{emoji:"🇺🇳",category:8,name:"flag: United Nations",version:"4.0"},{emoji:"🇺🇸",category:8,name:"flag: United States",version:"1.0"},{emoji:"🇺🇾",category:8,name:"flag: Uruguay",version:"2.0"},{emoji:"🇺🇿",category:8,name:"flag: Uzbekistan",version:"2.0"},{emoji:"🇻🇦",category:8,name:"flag: Vatican City",version:"2.0"},{emoji:"🇻🇨",category:8,name:"flag: St. Vincent & Grenadines",version:"2.0"},{emoji:"🇻🇪",category:8,name:"flag: Venezuela",version:"2.0"},{emoji:"🇻🇬",category:8,name:"flag: British Virgin Islands",version:"2.0"},{emoji:"🇻🇮",category:8,name:"flag: U.S. Virgin Islands",version:"2.0"},{emoji:"🇻🇳",category:8,name:"flag: Vietnam",version:"2.0"},{emoji:"🇻🇺",category:8,name:"flag: Vanuatu",version:"2.0"},{emoji:"🇼🇫",category:8,name:"flag: Wallis & Futuna",version:"2.0"},{emoji:"🇼🇸",category:8,name:"flag: Samoa",version:"2.0"},{emoji:"🇽🇰",category:8,name:"flag: Kosovo",version:"2.0"},{emoji:"🇾🇪",category:8,name:"flag: Yemen",version:"2.0"},{emoji:"🇾🇹",category:8,name:"flag: Mayotte",version:"2.0"},{emoji:"🇿🇦",category:8,name:"flag: South Africa",version:"2.0"},{emoji:"🇿🇲",category:8,name:"flag: Zambia",version:"2.0"},{emoji:"🇿🇼",category:8,name:"flag: Zimbabwe",version:"2.0"},{emoji:"🏴󠁧󠁢󠁥󠁮󠁧󠁿",category:8,name:"flag: England",version:"5.0"},{emoji:"🏴󠁧󠁢󠁳󠁣󠁴󠁿",category:8,name:"flag: Scotland",version:"5.0"},{emoji:"🏴󠁧󠁢󠁷󠁬󠁳󠁿",category:8,name:"flag: Wales",version:"5.0"}]};const Ce="emoji-picker__emoji";function Ee(e,o){const n=document.createElement(e);return o&&(n.className=o),n}function _e(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function ze(e,o){e.dataset.loaded||(e.dataset.custom?function(e){const o=Ee("img","emoji-picker__custom-emoji");e.dataset.emoji&&(o.src=e.dataset.emoji,e.innerText="",e.appendChild(o))}(e):"twemoji"===o.style&&function(e,o){e.dataset.emoji&&(e.innerHTML=ke.parse(e.dataset.emoji,o.twemojiOptions))}(e,o),e.dataset.loaded="true",e.style.opacity="1")}class Oe{constructor(e,o){this.events=e,this.options=o}render(){const e=Ee("div","emoji-picker__preview");return this.emoji=Ee("div","emoji-picker__preview-emoji"),e.appendChild(this.emoji),this.name=Ee("div","emoji-picker__preview-name"),e.appendChild(this.name),this.events.on("showPreview",(e=>this.showPreview(e))),this.events.on("hidePreview",(()=>this.hidePreview())),e}showPreview(e){let o=e.emoji;e.custom?o=`<img class="emoji-picker__custom-emoji" src="${e.emoji}">`:"twemoji"===this.options.style&&(o=ke.parse(e.emoji,this.options.twemojiOptions)),this.emoji.innerHTML=o,this.name.innerHTML=e.name}hidePreview(){this.emoji.innerHTML="",this.name.innerHTML=""}}function Ie(e,o){for(var n=0;n<o.length;n++){var i=o[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function Se(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function Pe(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(o){Se(e,o,n[o])}))}return e}function Me(e,o){return function(e){if(Array.isArray(e))return e}(e)||function(e,o){var n=[],i=!0,a=!1,r=void 0;try{for(var t,s=e[Symbol.iterator]();!(i=(t=s.next()).done)&&(n.push(t.value),!o||n.length!==o);i=!0);}catch(e){a=!0,r=e}finally{try{i||null==s.return||s.return()}finally{if(a)throw r}}return n}(e,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var Ae=function(){},Le={},Te={},Ne={mark:Ae,measure:Ae};try{"undefined"!=typeof window&&(Le=window),"undefined"!=typeof document&&(Te=document),"undefined"!=typeof MutationObserver&&MutationObserver,"undefined"!=typeof performance&&(Ne=performance)}catch(e){}var Fe=(Le.navigator||{}).userAgent,Be=void 0===Fe?"":Fe,De=Le,Re=Te,qe=Ne,Ve=(De.document,!!Re.documentElement&&!!Re.head&&"function"==typeof Re.addEventListener&&"function"==typeof Re.createElement),He=(~Be.indexOf("MSIE")||Be.indexOf("Trident/"),function(){try{}catch(e){return!1}}(),"group"),Ue="primary",We="secondary",Ke=De.FontAwesomeConfig||{};if(Re&&"function"==typeof Re.querySelector){[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((function(e){var o=Me(e,2),n=o[0],i=o[1],a=function(e){return""===e||"false"!==e&&("true"===e||e)}(function(e){var o=Re.querySelector("script["+e+"]");if(o)return o.getAttribute(e)}(n));null!=a&&(Ke[i]=a)}))}var Je=Pe({},{familyPrefix:"fa",replacementClass:"svg-inline--fa",autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Ke);Je.autoReplaceSvg||(Je.observeMutations=!1);var Ge=Pe({},Je);De.FontAwesomeConfig=Ge;var Xe=De||{};Xe.___FONT_AWESOME___||(Xe.___FONT_AWESOME___={}),Xe.___FONT_AWESOME___.styles||(Xe.___FONT_AWESOME___.styles={}),Xe.___FONT_AWESOME___.hooks||(Xe.___FONT_AWESOME___.hooks={}),Xe.___FONT_AWESOME___.shims||(Xe.___FONT_AWESOME___.shims=[]);var Ye=Xe.___FONT_AWESOME___,$e=[];Ve&&((Re.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Re.readyState)||Re.addEventListener("DOMContentLoaded",(function e(){Re.removeEventListener("DOMContentLoaded",e),1,$e.map((function(e){return e()}))})));"undefined"!=typeof __webpack_require__.g&&void 0!==__webpack_require__.g.process&&__webpack_require__.g.process.emit,"undefined"==typeof setImmediate?setTimeout:setImmediate;var Ze={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Qe(){for(var e=12,o="";e-- >0;)o+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return o}function eo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function oo(e){return Object.keys(e||{}).reduce((function(o,n){return o+"".concat(n,": ").concat(e[n],";")}),"")}function no(e){return e.size!==Ze.size||e.x!==Ze.x||e.y!==Ze.y||e.rotate!==Ze.rotate||e.flipX||e.flipY}function io(e){var o=e.transform,n=e.containerWidth,i=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},r="translate(".concat(32*o.x,", ").concat(32*o.y,") "),t="scale(".concat(o.size/16*(o.flipX?-1:1),", ").concat(o.size/16*(o.flipY?-1:1),") "),s="rotate(".concat(o.rotate," 0 0)");return{outer:a,inner:{transform:"".concat(r," ").concat(t," ").concat(s)},path:{transform:"translate(".concat(i/2*-1," -256)")}}}var ao={x:0,y:0,width:"100%",height:"100%"};function ro(e){var o=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e.attributes&&(e.attributes.fill||o)&&(e.attributes.fill="black"),e}function to(e){var o=e.icons,n=o.main,i=o.mask,a=e.prefix,r=e.iconName,t=e.transform,s=e.symbol,m=e.title,c=e.maskId,d=e.titleId,g=e.extra,u=e.watchable,l=void 0!==u&&u,v=i.found?i:n,f=v.width,y=v.height,j="fa-w-".concat(Math.ceil(f/y*16)),h=[Ge.replacementClass,r?"".concat(Ge.familyPrefix,"-").concat(r):"",j].filter((function(e){return-1===g.classes.indexOf(e)})).concat(g.classes).join(" "),p={children:[],attributes:Pe({},g.attributes,{"data-prefix":a,"data-icon":r,class:h,role:g.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(f," ").concat(y)})};l&&(p.attributes["data-fa-i2svg"]=""),m&&p.children.push({tag:"title",attributes:{id:p.attributes["aria-labelledby"]||"title-".concat(d||Qe())},children:[m]});var b=Pe({},p,{prefix:a,iconName:r,main:n,mask:i,maskId:c,transform:t,symbol:s,styles:g.styles}),w=i.found&&n.found?function(e){var o,n=e.children,i=e.attributes,a=e.main,r=e.mask,t=e.maskId,s=e.transform,m=a.width,c=a.icon,d=r.width,g=r.icon,u=io({transform:s,containerWidth:d,iconWidth:m}),l={tag:"rect",attributes:Pe({},ao,{fill:"white"})},v=c.children?{children:c.children.map(ro)}:{},f={tag:"g",attributes:Pe({},u.inner),children:[ro(Pe({tag:c.tag,attributes:Pe({},c.attributes,u.path)},v))]},y={tag:"g",attributes:Pe({},u.outer),children:[f]},j="mask-".concat(t||Qe()),h="clip-".concat(t||Qe()),p={tag:"mask",attributes:Pe({},ao,{id:j,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[l,y]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:(o=g,"g"===o.tag?o.children:[o])},p]};return n.push(b,{tag:"rect",attributes:Pe({fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(j,")")},ao)}),{children:n,attributes:i}}(b):function(e){var o=e.children,n=e.attributes,i=e.main,a=e.transform,r=oo(e.styles);if(r.length>0&&(n.style=r),no(a)){var t=io({transform:a,containerWidth:i.width,iconWidth:i.width});o.push({tag:"g",attributes:Pe({},t.outer),children:[{tag:"g",attributes:Pe({},t.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:Pe({},i.icon.attributes,t.path)}]}]})}else o.push(i.icon);return{children:o,attributes:n}}(b),k=w.children,x=w.attributes;return b.children=k,b.attributes=x,s?function(e){var o=e.prefix,n=e.iconName,i=e.children,a=e.attributes,r=e.symbol;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Pe({},a,{id:!0===r?"".concat(o,"-").concat(Ge.familyPrefix,"-").concat(n):r}),children:i}]}]}(b):function(e){var o=e.children,n=e.main,i=e.mask,a=e.attributes,r=e.styles,t=e.transform;if(no(t)&&n.found&&!i.found){var s={x:n.width/n.height/2,y:.5};a.style=oo(Pe({},r,{"transform-origin":"".concat(s.x+t.x/16,"em ").concat(s.y+t.y/16,"em")}))}return[{tag:"svg",attributes:a,children:o}]}(b)}var so=function(){},mo=(Ge.measurePerformance&&qe&&qe.mark&&qe.measure,function(e,o,n,i){var a,r,t,s=Object.keys(e),m=s.length,c=void 0!==i?function(e,o){return function(n,i,a,r){return e.call(o,n,i,a,r)}}(o,i):o;for(void 0===n?(a=1,t=e[s[0]]):(a=0,t=n);a<m;a++)t=c(t,e[r=s[a]],r,e);return t});function co(e,o){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.skipHooks,a=void 0!==i&&i,r=Object.keys(o).reduce((function(e,n){var i=o[n];return!!i.icon?e[i.iconName]=i.icon:e[n]=i,e}),{});"function"!=typeof Ye.hooks.addPack||a?Ye.styles[e]=Pe({},Ye.styles[e]||{},r):Ye.hooks.addPack(e,r),"fas"===e&&co("fa",o)}var go=Ye.styles,uo=Ye.shims,lo=function(){var e=function(e){return mo(go,(function(o,n,i){return o[i]=mo(n,e,{}),o}),{})};e((function(e,o,n){return o[3]&&(e[o[3]]=n),e})),e((function(e,o,n){var i=o[2];return e[n]=n,i.forEach((function(o){e[o]=n})),e}));var o="far"in go;mo(uo,(function(e,n){var i=n[0],a=n[1],r=n[2];return"far"!==a||o||(a="fas"),e[i]={prefix:a,iconName:r},e}),{})};lo();Ye.styles;function vo(e,o,n){if(e&&e[o]&&e[o][n])return{prefix:o,iconName:n,icon:e[o][n]}}function fo(e){var o=e.tag,n=e.attributes,i=void 0===n?{}:n,a=e.children,r=void 0===a?[]:a;return"string"==typeof e?eo(e):"<".concat(o," ").concat(function(e){return Object.keys(e||{}).reduce((function(o,n){return o+"".concat(n,'="').concat(eo(e[n]),'" ')}),"").trim()}(i),">").concat(r.map(fo).join(""),"</").concat(o,">")}function yo(e){this.name="MissingIcon",this.message=e||"Icon unavailable",this.stack=(new Error).stack}yo.prototype=Object.create(Error.prototype),yo.prototype.constructor=yo;var jo={fill:"currentColor"},ho={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},po=(Pe({},jo,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}),Pe({},ho,{attributeName:"opacity"}));Pe({},jo,{cx:"256",cy:"364",r:"28"}),Pe({},ho,{attributeName:"r",values:"28;14;28;28;14;28;"}),Pe({},po,{values:"1;0;1;1;0;1;"}),Pe({},jo,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),Pe({},po,{values:"1;0;0;0;0;1;"}),Pe({},jo,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),Pe({},po,{values:"0;0;1;1;0;0;"}),Ye.styles;function bo(e){var o=e[0],n=e[1],i=Me(e.slice(4),1)[0];return{found:!0,width:o,height:n,icon:Array.isArray(i)?{tag:"g",attributes:{class:"".concat(Ge.familyPrefix,"-").concat(He)},children:[{tag:"path",attributes:{class:"".concat(Ge.familyPrefix,"-").concat(We),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(Ge.familyPrefix,"-").concat(Ue),fill:"currentColor",d:i[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:i}}}}Ye.styles;function wo(){Ge.autoAddCss&&!_o&&(!function(e){if(e&&Ve){var o=Re.createElement("style");o.setAttribute("type","text/css"),o.innerHTML=e;for(var n=Re.head.childNodes,i=null,a=n.length-1;a>-1;a--){var r=n[a],t=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(t)>-1&&(i=r)}Re.head.insertBefore(o,i)}}(function(){var e="fa",o="svg-inline--fa",n=Ge.familyPrefix,i=Ge.replacementClass,a='svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';if(n!==e||i!==o){var r=new RegExp("\\.".concat(e,"\\-"),"g"),t=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(o),"g");a=a.replace(r,".".concat(n,"-")).replace(t,"--".concat(n,"-")).replace(s,".".concat(i))}return a}()),_o=!0)}function ko(e,o){return Object.defineProperty(e,"abstract",{get:o}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map((function(e){return fo(e)}))}}),Object.defineProperty(e,"node",{get:function(){if(Ve){var o=Re.createElement("div");return o.innerHTML=e.html,o.children}}}),e}function xo(e){var o=e.prefix,n=void 0===o?"fa":o,i=e.iconName;if(i)return vo(Eo.definitions,n,i)||vo(Ye.styles,n,i)}var Co,Eo=new(function(){function e(){!function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,e),this.definitions={}}var o,n,i;return o=e,(n=[{key:"add",value:function(){for(var e=this,o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];var a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach((function(o){e.definitions[o]=Pe({},e.definitions[o]||{},a[o]),co(o,a[o]),lo()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,o){var n=o.prefix&&o.iconName&&o.icon?{0:o}:o;return Object.keys(n).map((function(o){var i=n[o],a=i.prefix,r=i.iconName,t=i.icon;e[a]||(e[a]={}),e[a][r]=t})),e}}])&&Ie(o.prototype,n),i&&Ie(o,i),e}()),_o=!1,zo=(Co=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=o.transform,i=void 0===n?Ze:n,a=o.symbol,r=void 0!==a&&a,t=o.mask,s=void 0===t?null:t,m=o.maskId,c=void 0===m?null:m,d=o.title,g=void 0===d?null:d,u=o.titleId,l=void 0===u?null:u,v=o.classes,f=void 0===v?[]:v,y=o.attributes,j=void 0===y?{}:y,h=o.styles,p=void 0===h?{}:h;if(e){var b=e.prefix,w=e.iconName,k=e.icon;return ko(Pe({type:"icon"},e),(function(){return wo(),Ge.autoA11y&&(g?j["aria-labelledby"]="".concat(Ge.replacementClass,"-title-").concat(l||Qe()):(j["aria-hidden"]="true",j.focusable="false")),to({icons:{main:bo(k),mask:s?bo(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:w,transform:Pe({},Ze,i),symbol:r,title:g,maskId:c,titleId:l,extra:{attributes:j,styles:p,classes:f}})}))}},function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(e||{}).icon?e:xo(e||{}),i=o.mask;return i&&(i=(i||{}).icon?i:xo(i||{})),Co(n,Pe({},o,{mask:i}))});Eo.add({prefix:"far",iconName:"building",icon:[448,512,[],"f1ad","M128 148v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12zm140 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-128 96h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm128 0h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-76 84v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm76 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm180 124v36H0v-36c0-6.6 5.4-12 12-12h19.5V24c0-13.3 10.7-24 24-24h337c13.3 0 24 10.7 24 24v440H436c6.6 0 12 5.4 12 12zM79.5 463H192v-67c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v67h112.5V49L80 48l-.5 415z"]},{prefix:"fas",iconName:"cat",icon:[512,512,[],"f6be","M290.59 192c-20.18 0-106.82 1.98-162.59 85.95V192c0-52.94-43.06-96-96-96-17.67 0-32 14.33-32 32s14.33 32 32 32c17.64 0 32 14.36 32 32v256c0 35.3 28.7 64 64 64h176c8.84 0 16-7.16 16-16v-16c0-17.67-14.33-32-32-32h-32l128-96v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V289.86c-10.29 2.67-20.89 4.54-32 4.54-61.81 0-113.52-44.05-125.41-102.4zM448 96h-64l-64-64v134.4c0 53.02 42.98 96 96 96s96-42.98 96-96V32l-64 64zm-72 80c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16zm80 0c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16z"]},{prefix:"fas",iconName:"coffee",icon:[640,512,[],"f0f4","M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z"]},{prefix:"far",iconName:"flag",icon:[512,512,[],"f024","M336.174 80c-49.132 0-93.305-32-161.913-32-31.301 0-58.303 6.482-80.721 15.168a48.04 48.04 0 0 0 2.142-20.727C93.067 19.575 74.167 1.594 51.201.104 23.242-1.71 0 20.431 0 48c0 17.764 9.657 33.262 24 41.562V496c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-83.443C109.869 395.28 143.259 384 199.826 384c49.132 0 93.305 32 161.913 32 58.479 0 101.972-22.617 128.548-39.981C503.846 367.161 512 352.051 512 335.855V95.937c0-34.459-35.264-57.768-66.904-44.117C409.193 67.309 371.641 80 336.174 80zM464 336c-21.783 15.412-60.824 32-102.261 32-59.945 0-102.002-32-161.913-32-43.361 0-96.379 9.403-127.826 24V128c21.784-15.412 60.824-32 102.261-32 59.945 0 102.002 32 161.913 32 43.271 0 96.32-17.366 127.826-32v240z"]},{prefix:"far",iconName:"frown",icon:[496,512,[],"f119","M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160-64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-80 128c-40.2 0-78 17.7-103.8 48.6-8.5 10.2-7.1 25.3 3.1 33.8 10.2 8.4 25.3 7.1 33.8-3.1 16.6-19.9 41-31.4 66.9-31.4s50.3 11.4 66.9 31.4c8.1 9.7 23.1 11.9 33.8 3.1 10.2-8.5 11.5-23.6 3.1-33.8C326 321.7 288.2 304 248 304z"]},{prefix:"fas",iconName:"futbol",icon:[512,512,[],"f1e3","M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-48 0l-.003-.282-26.064 22.741-62.679-58.5 16.454-84.355 34.303 3.072c-24.889-34.216-60.004-60.089-100.709-73.141l13.651 31.939L256 139l-74.953-41.525 13.651-31.939c-40.631 13.028-75.78 38.87-100.709 73.141l34.565-3.073 16.192 84.355-62.678 58.5-26.064-22.741-.003.282c0 43.015 13.497 83.952 38.472 117.991l7.704-33.897 85.138 10.447 36.301 77.826-29.902 17.786c40.202 13.122 84.29 13.148 124.572 0l-29.902-17.786 36.301-77.826 85.138-10.447 7.704 33.897C442.503 339.952 456 299.015 456 256zm-248.102 69.571l-29.894-91.312L256 177.732l77.996 56.527-29.622 91.312h-96.476z"]},{prefix:"fas",iconName:"history",icon:[512,512,[],"f1da","M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"]},{prefix:"fas",iconName:"icons",icon:[512,512,[],"f86d","M116.65 219.35a15.68 15.68 0 0 0 22.65 0l96.75-99.83c28.15-29 26.5-77.1-4.91-103.88C203.75-7.7 163-3.5 137.86 22.44L128 32.58l-9.85-10.14C93.05-3.5 52.25-7.7 24.86 15.64c-31.41 26.78-33 74.85-5 103.88zm143.92 100.49h-48l-7.08-14.24a27.39 27.39 0 0 0-25.66-17.78h-71.71a27.39 27.39 0 0 0-25.66 17.78l-7 14.24h-48A27.45 27.45 0 0 0 0 347.3v137.25A27.44 27.44 0 0 0 27.43 512h233.14A27.45 27.45 0 0 0 288 484.55V347.3a27.45 27.45 0 0 0-27.43-27.46zM144 468a52 52 0 1 1 52-52 52 52 0 0 1-52 52zm355.4-115.9h-60.58l22.36-50.75c2.1-6.65-3.93-13.21-12.18-13.21h-75.59c-6.3 0-11.66 3.9-12.5 9.1l-16.8 106.93c-1 6.3 4.88 11.89 12.5 11.89h62.31l-24.2 83c-1.89 6.65 4.2 12.9 12.23 12.9a13.26 13.26 0 0 0 10.92-5.25l92.4-138.91c4.88-6.91-1.16-15.7-10.87-15.7zM478.08.33L329.51 23.17C314.87 25.42 304 38.92 304 54.83V161.6a83.25 83.25 0 0 0-16-1.7c-35.35 0-64 21.48-64 48s28.65 48 64 48c35.2 0 63.73-21.32 64-47.66V99.66l112-17.22v47.18a83.25 83.25 0 0 0-16-1.7c-35.35 0-64 21.48-64 48s28.65 48 64 48c35.2 0 63.73-21.32 64-47.66V32c0-19.48-16-34.42-33.92-31.67z"]},{prefix:"far",iconName:"lightbulb",icon:[352,512,[],"f0eb","M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z"]},{prefix:"fas",iconName:"music",icon:[512,512,[],"f001","M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"]},{prefix:"fas",iconName:"search",icon:[512,512,[],"f002","M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"]},{prefix:"far",iconName:"smile",icon:[496,512,[],"f118","M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm4 72.6c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.1-8.4-25.3-7.1-33.8 3.1z"]},{prefix:"fas",iconName:"times",icon:[352,512,[],"f00d","M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"]},{prefix:"fas",iconName:"user",icon:[448,512,[],"f007","M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"]});const Oo=zo({prefix:"far",iconName:"building"}).html[0],Io=zo({prefix:"fas",iconName:"cat"}).html[0],So=zo({prefix:"fas",iconName:"coffee"}).html[0],Po=zo({prefix:"far",iconName:"flag"}).html[0],Mo=zo({prefix:"fas",iconName:"futbol"}).html[0],Ao=zo({prefix:"far",iconName:"frown"}).html[0],Lo=zo({prefix:"fas",iconName:"history"}).html[0],To=zo({prefix:"fas",iconName:"icons"}).html[0],No=zo({prefix:"far",iconName:"lightbulb"}).html[0],Fo=zo({prefix:"fas",iconName:"music"}).html[0],Bo=zo({prefix:"fas",iconName:"search"}).html[0],Do=zo({prefix:"far",iconName:"smile"}).html[0],Ro=zo({prefix:"fas",iconName:"times"}).html[0],qo=zo({prefix:"fas",iconName:"user"}).html[0];function Vo(e){const o=document.createElement("img");return o.src=e,o}function Ho(){const e=localStorage.getItem("emojiPicker.recent");return(e?JSON.parse(e):[]).filter((e=>!!e.emoji))}class Uo{constructor(e,o,n,i,a,r=!0){this.emoji=e,this.showVariants=o,this.showPreview=n,this.events=i,this.options=a,this.lazy=r}render(){this.emojiButton=Ee("button",Ce);let e=this.emoji.emoji;return this.emoji.custom?e=this.lazy?Do:`<img class="emoji-picker__custom-emoji" src="${this.emoji.emoji}">`:"twemoji"===this.options.style&&(e=this.lazy?Do:ke.parse(this.emoji.emoji,this.options.twemojiOptions)),this.emojiButton.innerHTML=e,this.emojiButton.tabIndex=-1,this.emojiButton.dataset.emoji=this.emoji.emoji,this.emoji.custom&&(this.emojiButton.dataset.custom="true"),this.emojiButton.title=this.emoji.name,this.emojiButton.addEventListener("focus",(()=>this.onEmojiHover())),this.emojiButton.addEventListener("blur",(()=>this.onEmojiLeave())),this.emojiButton.addEventListener("click",(()=>this.onEmojiClick())),this.emojiButton.addEventListener("mouseover",(()=>this.onEmojiHover())),this.emojiButton.addEventListener("mouseout",(()=>this.onEmojiLeave())),"twemoji"===this.options.style&&this.lazy&&(this.emojiButton.style.opacity="0.25"),this.emojiButton}onEmojiClick(){this.emoji.variations&&this.showVariants&&this.options.showVariants||!this.options.showRecents||function(e,o){const n=Ho(),i={emoji:e.emoji,name:e.name,key:e.key||e.name,custom:e.custom};localStorage.setItem("emojiPicker.recent",JSON.stringify([i,...n.filter((e=>!!e.emoji&&e.key!==i.key))].slice(0,o.recentsCount)))}(this.emoji,this.options),this.events.emit("emoji",{emoji:this.emoji,showVariants:this.showVariants,button:this.emojiButton})}onEmojiHover(){this.showPreview&&this.events.emit("showPreview",this.emoji)}onEmojiLeave(){this.showPreview&&this.events.emit("hidePreview")}}class Wo{constructor(e,o,n,i,a=!0){this.showVariants=o,this.events=n,this.options=i,this.lazy=a,this.emojis=e.filter((e=>!e.version||parseFloat(e.version)<=parseFloat(i.emojiVersion)))}render(){const e=Ee("div","emoji-picker__container");return this.emojis.forEach((o=>e.appendChild(new Uo(o,this.showVariants,!0,this.events,this.options,this.lazy).render()))),e}}var Ko="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof __webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{};var Jo,Go=(function(e){var o,n;o=Ko,n=function(){var e="undefined"==typeof window,o=new Map,n=new Map,i=[];i.total=0;var a=[],r=[];function t(){o.clear(),n.clear(),a=[],r=[]}function s(e){for(var o=-9007199254740991,n=e.length-1;n>=0;--n){var i=e[n];if(null!==i){var a=i.score;a>o&&(o=a)}}return-9007199254740991===o?null:o}function m(e,o){var n=e[o];if(void 0!==n)return n;var i=o;Array.isArray(o)||(i=o.split("."));for(var a=i.length,r=-1;e&&++r<a;)e=e[i[r]];return e}function c(e){return"object"==typeof e}var d=function(){var e=[],o=0,n={};function i(){for(var n=0,i=e[n],a=1;a<o;){var r=a+1;n=a,r<o&&e[r].score<e[a].score&&(n=r),e[n-1>>1]=e[n],a=1+(n<<1)}for(var t=n-1>>1;n>0&&i.score<e[t].score;t=(n=t)-1>>1)e[n]=e[t];e[n]=i}return n.add=function(n){var i=o;e[o++]=n;for(var a=i-1>>1;i>0&&n.score<e[a].score;a=(i=a)-1>>1)e[i]=e[a];e[i]=n},n.poll=function(){if(0!==o){var n=e[0];return e[0]=e[--o],i(),n}},n.peek=function(n){if(0!==o)return e[0]},n.replaceTop=function(o){e[0]=o,i()},n},g=d();return function u(l){var v={single:function(e,o,n){return e?(c(e)||(e=v.getPreparedSearch(e)),o?(c(o)||(o=v.getPrepared(o)),((n&&void 0!==n.allowTypo?n.allowTypo:!l||void 0===l.allowTypo||l.allowTypo)?v.algorithm:v.algorithmNoTypo)(e,o,e[0])):null):null},go:function(e,o,n){if(!e)return i;var a=(e=v.prepareSearch(e))[0],r=n&&n.threshold||l&&l.threshold||-9007199254740991,t=n&&n.limit||l&&l.limit||9007199254740991,d=(n&&void 0!==n.allowTypo?n.allowTypo:!l||void 0===l.allowTypo||l.allowTypo)?v.algorithm:v.algorithmNoTypo,u=0,f=0,y=o.length;if(n&&n.keys)for(var j=n.scoreFn||s,h=n.keys,p=h.length,b=y-1;b>=0;--b){for(var w=o[b],k=new Array(p),x=p-1;x>=0;--x)(_=m(w,E=h[x]))?(c(_)||(_=v.getPrepared(_)),k[x]=d(e,_,a)):k[x]=null;k.obj=w;var C=j(k);null!==C&&(C<r||(k.score=C,u<t?(g.add(k),++u):(++f,C>g.peek().score&&g.replaceTop(k))))}else if(n&&n.key){var E=n.key;for(b=y-1;b>=0;--b)(_=m(w=o[b],E))&&(c(_)||(_=v.getPrepared(_)),null!==(z=d(e,_,a))&&(z.score<r||(z={target:z.target,_targetLowerCodes:null,_nextBeginningIndexes:null,score:z.score,indexes:z.indexes,obj:w},u<t?(g.add(z),++u):(++f,z.score>g.peek().score&&g.replaceTop(z)))))}else for(b=y-1;b>=0;--b){var _,z;(_=o[b])&&(c(_)||(_=v.getPrepared(_)),null!==(z=d(e,_,a))&&(z.score<r||(u<t?(g.add(z),++u):(++f,z.score>g.peek().score&&g.replaceTop(z)))))}if(0===u)return i;var O=new Array(u);for(b=u-1;b>=0;--b)O[b]=g.poll();return O.total=u+f,O},goAsync:function(o,n,a){var r=!1,t=new Promise((function(t,g){if(!o)return t(i);var u=(o=v.prepareSearch(o))[0],f=d(),y=n.length-1,j=a&&a.threshold||l&&l.threshold||-9007199254740991,h=a&&a.limit||l&&l.limit||9007199254740991,p=(a&&void 0!==a.allowTypo?a.allowTypo:!l||void 0===l.allowTypo||l.allowTypo)?v.algorithm:v.algorithmNoTypo,b=0,w=0;function k(){if(r)return g("canceled");var d=Date.now();if(a&&a.keys)for(var l=a.scoreFn||s,x=a.keys,C=x.length;y>=0;--y){for(var E=n[y],_=new Array(C),z=C-1;z>=0;--z)(S=m(E,I=x[z]))?(c(S)||(S=v.getPrepared(S)),_[z]=p(o,S,u)):_[z]=null;_.obj=E;var O=l(_);if(null!==O&&!(O<j)&&(_.score=O,b<h?(f.add(_),++b):(++w,O>f.peek().score&&f.replaceTop(_)),y%1e3==0&&Date.now()-d>=10))return void(e?setImmediate(k):setTimeout(k))}else if(a&&a.key){for(var I=a.key;y>=0;--y)if((S=m(E=n[y],I))&&(c(S)||(S=v.getPrepared(S)),null!==(P=p(o,S,u))&&!(P.score<j)&&(P={target:P.target,_targetLowerCodes:null,_nextBeginningIndexes:null,score:P.score,indexes:P.indexes,obj:E},b<h?(f.add(P),++b):(++w,P.score>f.peek().score&&f.replaceTop(P)),y%1e3==0&&Date.now()-d>=10)))return void(e?setImmediate(k):setTimeout(k))}else for(;y>=0;--y){var S,P;if((S=n[y])&&(c(S)||(S=v.getPrepared(S)),null!==(P=p(o,S,u))&&!(P.score<j)&&(b<h?(f.add(P),++b):(++w,P.score>f.peek().score&&f.replaceTop(P)),y%1e3==0&&Date.now()-d>=10)))return void(e?setImmediate(k):setTimeout(k))}if(0===b)return t(i);for(var M=new Array(b),A=b-1;A>=0;--A)M[A]=f.poll();M.total=b+w,t(M)}e?setImmediate(k):k()}));return t.cancel=function(){r=!0},t},highlight:function(e,o,n){if(null===e)return null;void 0===o&&(o="<b>"),void 0===n&&(n="</b>");for(var i="",a=0,r=!1,t=e.target,s=t.length,m=e.indexes,c=0;c<s;++c){var d=t[c];if(m[a]===c){if(r||(r=!0,i+=o),++a===m.length){i+=d+n+t.substr(c+1);break}}else r&&(r=!1,i+=n);i+=d}return i},prepare:function(e){if(e)return{target:e,_targetLowerCodes:v.prepareLowerCodes(e),_nextBeginningIndexes:null,score:null,indexes:null,obj:null}},prepareSlow:function(e){if(e)return{target:e,_targetLowerCodes:v.prepareLowerCodes(e),_nextBeginningIndexes:v.prepareNextBeginningIndexes(e),score:null,indexes:null,obj:null}},prepareSearch:function(e){if(e)return v.prepareLowerCodes(e)},getPrepared:function(e){if(e.length>999)return v.prepare(e);var n=o.get(e);return void 0!==n||(n=v.prepare(e),o.set(e,n)),n},getPreparedSearch:function(e){if(e.length>999)return v.prepareSearch(e);var o=n.get(e);return void 0!==o||(o=v.prepareSearch(e),n.set(e,o)),o},algorithm:function(e,o,n){for(var i=o._targetLowerCodes,t=e.length,s=i.length,m=0,c=0,d=0,g=0;;){if(n===i[c]){if(a[g++]=c,++m===t)break;n=e[0===d?m:d===m?m+1:d===m-1?m-1:m]}if(++c>=s)for(;;){if(m<=1)return null;if(0===d){if(n===e[--m])continue;d=m}else{if(1===d)return null;if((n=e[1+(m=--d)])===e[m])continue}c=a[(g=m)-1]+1;break}}m=0;var u=0,l=!1,f=0,y=o._nextBeginningIndexes;null===y&&(y=o._nextBeginningIndexes=v.prepareNextBeginningIndexes(o.target));var j=c=0===a[0]?0:y[a[0]-1];if(c!==s)for(;;)if(c>=s){if(m<=0){if(++u>t-2)break;if(e[u]===e[u+1])continue;c=j;continue}--m,c=y[r[--f]]}else if(e[0===u?m:u===m?m+1:u===m-1?m-1:m]===i[c]){if(r[f++]=c,++m===t){l=!0;break}++c}else c=y[c];if(l)var h=r,p=f;else h=a,p=g;for(var b=0,w=-1,k=0;k<t;++k)w!==(c=h[k])-1&&(b-=c),w=c;for(l?0!==u&&(b+=-20):(b*=1e3,0!==d&&(b+=-20)),b-=s-t,o.score=b,o.indexes=new Array(p),k=p-1;k>=0;--k)o.indexes[k]=h[k];return o},algorithmNoTypo:function(e,o,n){for(var i=o._targetLowerCodes,t=e.length,s=i.length,m=0,c=0,d=0;;){if(n===i[c]){if(a[d++]=c,++m===t)break;n=e[m]}if(++c>=s)return null}m=0;var g=!1,u=0,l=o._nextBeginningIndexes;if(null===l&&(l=o._nextBeginningIndexes=v.prepareNextBeginningIndexes(o.target)),(c=0===a[0]?0:l[a[0]-1])!==s)for(;;)if(c>=s){if(m<=0)break;--m,c=l[r[--u]]}else if(e[m]===i[c]){if(r[u++]=c,++m===t){g=!0;break}++c}else c=l[c];if(g)var f=r,y=u;else f=a,y=d;for(var j=0,h=-1,p=0;p<t;++p)h!==(c=f[p])-1&&(j-=c),h=c;for(g||(j*=1e3),j-=s-t,o.score=j,o.indexes=new Array(y),p=y-1;p>=0;--p)o.indexes[p]=f[p];return o},prepareLowerCodes:function(e){for(var o=e.length,n=[],i=e.toLowerCase(),a=0;a<o;++a)n[a]=i.charCodeAt(a);return n},prepareBeginningIndexes:function(e){for(var o=e.length,n=[],i=0,a=!1,r=!1,t=0;t<o;++t){var s=e.charCodeAt(t),m=s>=65&&s<=90,c=m||s>=97&&s<=122||s>=48&&s<=57,d=m&&!a||!r||!c;a=m,r=c,d&&(n[i++]=t)}return n},prepareNextBeginningIndexes:function(e){for(var o=e.length,n=v.prepareBeginningIndexes(e),i=[],a=n[0],r=0,t=0;t<o;++t)a>t?i[t]=a:(a=n[++r],i[t]=void 0===a?o:a);return i},cleanup:t,new:u};return v}()},e.exports?e.exports=n():o.fuzzysort=n()}(Jo={exports:{}},Jo.exports),Jo.exports);class Xo{constructor(e,o){this.message=e,this.iconUrl=o}render(){const e=Ee("div","emoji-picker__search-not-found"),o=Ee("div","emoji-picker__search-not-found-icon");this.iconUrl?o.appendChild(Vo(this.iconUrl)):o.innerHTML=Ao,e.appendChild(o);const n=Ee("h2");return n.innerHTML=this.message,e.appendChild(n),e}}class Yo{constructor(e,o,n,i,a){if(this.events=e,this.i18n=o,this.options=n,this.focusedEmojiIndex=0,this.emojisPerRow=this.options.emojisPerRow||8,this.emojiData=i.filter((e=>e.version&&parseFloat(e.version)<=parseFloat(n.emojiVersion)&&void 0!==e.category&&a.indexOf(e.category)>=0)),this.options.custom){const e=this.options.custom.map((e=>Object.assign(Object.assign({},e),{custom:!0})));this.emojiData=[...this.emojiData,...e]}this.events.on("hideVariantPopup",(()=>{setTimeout((()=>this.setFocusedEmoji(this.focusedEmojiIndex)))}))}render(){return this.searchContainer=Ee("div","emoji-picker__search-container"),this.searchField=Ee("input","emoji-picker__search"),this.searchField.placeholder=this.i18n.search,this.searchContainer.appendChild(this.searchField),this.searchIcon=Ee("span","emoji-picker__search-icon"),this.options.icons&&this.options.icons.search?this.searchIcon.appendChild(Vo(this.options.icons.search)):this.searchIcon.innerHTML=Bo,this.searchIcon.addEventListener("click",(e=>this.onClearSearch(e))),this.searchContainer.appendChild(this.searchIcon),this.searchField.addEventListener("keydown",(e=>this.onKeyDown(e))),this.searchField.addEventListener("keyup",(e=>this.onKeyUp(e))),this.searchContainer}clear(){this.searchField.value=""}focus(){this.searchField.focus()}onClearSearch(e){e.stopPropagation(),this.searchField.value&&(this.searchField.value="",this.resultsContainer=null,this.options.icons&&this.options.icons.search?(_e(this.searchIcon),this.searchIcon.appendChild(Vo(this.options.icons.search))):this.searchIcon.innerHTML=Bo,this.searchIcon.style.cursor="default",this.events.emit("hideSearchResults"),setTimeout((()=>this.searchField.focus())))}setFocusedEmoji(e){if(this.resultsContainer){const o=this.resultsContainer.querySelectorAll("."+Ce);o[this.focusedEmojiIndex].tabIndex=-1,this.focusedEmojiIndex=e;const n=o[this.focusedEmojiIndex];n.tabIndex=0,n.focus()}}handleResultsKeydown(e){if(this.resultsContainer){const o=this.resultsContainer.querySelectorAll("."+Ce);"ArrowRight"===e.key?this.setFocusedEmoji(Math.min(this.focusedEmojiIndex+1,o.length-1)):"ArrowLeft"===e.key?this.setFocusedEmoji(Math.max(0,this.focusedEmojiIndex-1)):"ArrowDown"===e.key?(e.preventDefault(),this.focusedEmojiIndex<o.length-this.emojisPerRow&&this.setFocusedEmoji(this.focusedEmojiIndex+this.emojisPerRow)):"ArrowUp"===e.key?(e.preventDefault(),this.focusedEmojiIndex>=this.emojisPerRow&&this.setFocusedEmoji(this.focusedEmojiIndex-this.emojisPerRow)):"Escape"===e.key&&this.onClearSearch(e)}}onKeyDown(e){"Escape"===e.key&&this.searchField.value&&this.onClearSearch(e)}onKeyUp(e){if("Tab"!==e.key&&"Shift"!==e.key)if(this.searchField.value){this.options.icons&&this.options.icons.clearSearch?(_e(this.searchIcon),this.searchIcon.appendChild(Vo(this.options.icons.clearSearch))):this.searchIcon.innerHTML=Ro,this.searchIcon.style.cursor="pointer";const e=Go.go(this.searchField.value,this.emojiData,{allowTypo:!0,limit:100,key:"name"}).map((e=>e.obj));this.events.emit("hidePreview"),e.length?(this.resultsContainer=new Wo(e,!0,this.events,this.options,!1).render(),this.resultsContainer&&(this.resultsContainer.querySelector("."+Ce).tabIndex=0,this.focusedEmojiIndex=0,this.resultsContainer.addEventListener("keydown",(e=>this.handleResultsKeydown(e))),this.events.emit("showSearchResults",this.resultsContainer))):this.events.emit("showSearchResults",new Xo(this.i18n.notFound,this.options.icons&&this.options.icons.notFound).render())}else this.options.icons&&this.options.icons.search?(_e(this.searchIcon),this.searchIcon.appendChild(Vo(this.options.icons.search))):this.searchIcon.innerHTML=Bo,this.searchIcon.style.cursor="default",this.events.emit("hideSearchResults")}}class $o{constructor(e,o,n){this.events=e,this.emoji=o,this.options=n,this.focusedEmojiIndex=0}getEmoji(e){return this.popup.querySelectorAll("."+Ce)[e]}setFocusedEmoji(e){this.getEmoji(this.focusedEmojiIndex).tabIndex=-1,this.focusedEmojiIndex=e;const o=this.getEmoji(this.focusedEmojiIndex);o.tabIndex=0,o.focus()}render(){this.popup=Ee("div","emoji-picker__variant-popup");const e=Ee("div","emoji-picker__variant-overlay");e.addEventListener("click",(e=>{e.stopPropagation(),this.popup.contains(e.target)||this.events.emit("hideVariantPopup")})),this.popup.appendChild(new Uo(this.emoji,!1,!1,this.events,this.options,!1).render()),(this.emoji.variations||[]).forEach(((e,o)=>this.popup.appendChild(new Uo({name:this.emoji.name,emoji:e,key:this.emoji.name+o},!1,!1,this.events,this.options,!1).render())));const o=this.popup.querySelector("."+Ce);return this.focusedEmojiIndex=0,o.tabIndex=0,setTimeout((()=>o.focus())),this.popup.addEventListener("keydown",(e=>{"ArrowRight"===e.key?this.setFocusedEmoji(Math.min(this.focusedEmojiIndex+1,this.popup.querySelectorAll("."+Ce).length-1)):"ArrowLeft"===e.key?this.setFocusedEmoji(Math.max(this.focusedEmojiIndex-1,0)):"Escape"===e.key&&(e.stopPropagation(),this.events.emit("hideVariantPopup"))})),e.appendChild(this.popup),e}}const Zo={search:"Search emojis...",categories:{recents:"Recent Emojis",smileys:"Smileys & Emotion",people:"People & Body",animals:"Animals & Nature",food:"Food & Drink",activities:"Activities",travel:"Travel & Places",objects:"Objects",symbols:"Symbols",flags:"Flags",custom:"Custom"},notFound:"No emojis found"},Qo={recents:Lo,smileys:Do,people:qo,animals:Io,food:So,activities:Mo,travel:Oo,objects:No,symbols:Fo,flags:Po,custom:To};class en{constructor(e,o,n){this.options=e,this.events=o,this.i18n=n,this.activeButton=0,this.buttons=[]}render(){var e;const o=Ee("div","emoji-picker__category-buttons"),n=this.options.categories||(null===(e=this.options.emojiData)||void 0===e?void 0:e.categories)||xe.categories;let i=this.options.showRecents?["recents",...n]:n;return this.options.custom&&(i=[...i,"custom"]),i.forEach((e=>{const n=Ee("button","emoji-picker__category-button");this.options.icons&&this.options.icons.categories&&this.options.icons.categories[e]?n.appendChild(Vo(this.options.icons.categories[e])):n.innerHTML=Qo[e],n.tabIndex=-1,n.title=this.i18n.categories[e],o.appendChild(n),this.buttons.push(n),n.addEventListener("click",(()=>{this.events.emit("categoryClicked",e)}))})),o.addEventListener("keydown",(e=>{switch(e.key){case"ArrowRight":this.events.emit("categoryClicked",i[(this.activeButton+1)%this.buttons.length]);break;case"ArrowLeft":this.events.emit("categoryClicked",i[0===this.activeButton?this.buttons.length-1:this.activeButton-1]);break;case"ArrowUp":case"ArrowDown":e.stopPropagation(),e.preventDefault()}})),o}setActiveButton(e,o=!0){let n=this.buttons[this.activeButton];n.classList.remove("active"),n.tabIndex=-1,this.activeButton=e,n=this.buttons[this.activeButton],n.classList.add("active"),n.tabIndex=0,o&&n.focus()}}const on=["recents","smileys","people","animals","food","activities","travel","objects","symbols","flags","custom"];class nn{constructor(e,o,n,i){var a;this.events=e,this.i18n=o,this.options=n,this.emojiCategories=i,this.currentCategory=0,this.headers=[],this.focusedIndex=0,this.handleKeyDown=e=>{switch(this.emojis.removeEventListener("scroll",this.highlightCategory),e.key){case"ArrowRight":this.focusedEmoji.tabIndex=-1,this.focusedIndex===this.currentEmojiCount-1&&this.currentCategory<this.categories.length-1?(this.options.showCategoryButtons&&this.categoryButtons.setActiveButton(++this.currentCategory),this.setFocusedEmoji(0)):this.focusedIndex<this.currentEmojiCount-1&&this.setFocusedEmoji(this.focusedIndex+1);break;case"ArrowLeft":this.focusedEmoji.tabIndex=-1,0===this.focusedIndex&&this.currentCategory>0?(this.options.showCategoryButtons&&this.categoryButtons.setActiveButton(--this.currentCategory),this.setFocusedEmoji(this.currentEmojiCount-1)):this.setFocusedEmoji(Math.max(0,this.focusedIndex-1));break;case"ArrowDown":e.preventDefault(),this.focusedEmoji.tabIndex=-1,this.focusedIndex+this.emojisPerRow>=this.currentEmojiCount&&this.currentCategory<this.categories.length-1?(this.currentCategory++,this.options.showCategoryButtons&&this.categoryButtons.setActiveButton(this.currentCategory),this.setFocusedEmoji(Math.min(this.focusedIndex%this.emojisPerRow,this.currentEmojiCount-1))):this.currentEmojiCount-this.focusedIndex>this.emojisPerRow&&this.setFocusedEmoji(this.focusedIndex+this.emojisPerRow);break;case"ArrowUp":if(e.preventDefault(),this.focusedEmoji.tabIndex=-1,this.focusedIndex<this.emojisPerRow&&this.currentCategory>0){const e=this.getEmojiCount(this.currentCategory-1);let o=e%this.emojisPerRow;0===o&&(o=this.emojisPerRow);const n=this.focusedIndex,i=n>o-1?e-1:e-o+n;this.currentCategory--,this.options.showCategoryButtons&&this.categoryButtons.setActiveButton(this.currentCategory),this.setFocusedEmoji(i)}else this.setFocusedEmoji(this.focusedIndex>=this.emojisPerRow?this.focusedIndex-this.emojisPerRow:this.focusedIndex)}requestAnimationFrame((()=>this.emojis.addEventListener("scroll",this.highlightCategory)))},this.addCategory=(e,o)=>{const n=Ee("h2","emoji-picker__category-name");n.innerHTML=this.i18n.categories[e]||Zo.categories[e],this.emojis.appendChild(n),this.headers.push(n),this.emojis.appendChild(new Wo(o,!0,this.events,this.options,"recents"!==e).render())},this.selectCategory=(e,o=!0)=>{this.emojis.removeEventListener("scroll",this.highlightCategory),this.focusedEmoji&&(this.focusedEmoji.tabIndex=-1);const n=this.categories.indexOf(e);this.currentCategory=n,this.setFocusedEmoji(0,!1),this.options.showCategoryButtons&&this.categoryButtons.setActiveButton(this.currentCategory,o);const i=this.headerOffsets[n];this.emojis.scrollTop=i,requestAnimationFrame((()=>this.emojis.addEventListener("scroll",this.highlightCategory)))},this.highlightCategory=()=>{if(document.activeElement&&document.activeElement.classList.contains("emoji-picker__emoji"))return;let e=this.headerOffsets.findIndex((e=>e>=Math.round(this.emojis.scrollTop)));this.emojis.scrollTop+this.emojis.offsetHeight===this.emojis.scrollHeight&&(e=-1),0===e?e=1:e<0&&(e=this.headerOffsets.length),this.headerOffsets[e]===this.emojis.scrollTop&&e++,this.currentCategory=e-1,this.options.showCategoryButtons&&this.categoryButtons.setActiveButton(this.currentCategory)},this.emojisPerRow=n.emojisPerRow||8,this.categories=(null===(a=n.emojiData)||void 0===a?void 0:a.categories)||n.categories||xe.categories,n.showRecents&&(this.categories=["recents",...this.categories]),n.custom&&(this.categories=[...this.categories,"custom"]),this.categories.sort(((e,o)=>on.indexOf(e)-on.indexOf(o)))}updateRecents(){if(this.options.showRecents){this.emojiCategories.recents=Ho();const e=this.emojis.querySelector(".emoji-picker__container");e&&e.parentNode&&e.parentNode.replaceChild(new Wo(this.emojiCategories.recents,!0,this.events,this.options,!1).render(),e)}}render(){this.container=Ee("div","emoji-picker__emoji-area"),this.options.showCategoryButtons&&(this.categoryButtons=new en(this.options,this.events,this.i18n),this.container.appendChild(this.categoryButtons.render())),this.emojis=Ee("div","emoji-picker__emojis"),this.options.showRecents&&(this.emojiCategories.recents=Ho()),this.options.custom&&(this.emojiCategories.custom=this.options.custom.map((e=>Object.assign(Object.assign({},e),{custom:!0})))),this.categories.forEach((e=>this.addCategory(e,this.emojiCategories[e]))),requestAnimationFrame((()=>{setTimeout((()=>{setTimeout((()=>this.emojis.addEventListener("scroll",this.highlightCategory)))}))})),this.emojis.addEventListener("keydown",this.handleKeyDown),this.events.on("categoryClicked",this.selectCategory),this.container.appendChild(this.emojis);return this.container.querySelectorAll("."+Ce)[0].tabIndex=0,this.container}reset(){this.headerOffsets=Array.prototype.map.call(this.headers,(e=>e.offsetTop)),this.selectCategory(this.options.initialCategory||"smileys",!1),this.currentCategory=this.categories.indexOf(this.options.initialCategory||"smileys"),this.options.showCategoryButtons&&this.categoryButtons.setActiveButton(this.currentCategory,!1)}get currentCategoryEl(){return this.emojis.querySelectorAll(".emoji-picker__container")[this.currentCategory]}get focusedEmoji(){return this.currentCategoryEl.querySelectorAll("."+Ce)[this.focusedIndex]}get currentEmojiCount(){return this.currentCategoryEl.querySelectorAll("."+Ce).length}getEmojiCount(e){return this.emojis.querySelectorAll(".emoji-picker__container")[e].querySelectorAll("."+Ce).length}setFocusedEmoji(e,o=!0){this.focusedIndex=e,this.focusedEmoji&&(this.focusedEmoji.tabIndex=0,o&&this.focusedEmoji.focus())}}const an={position:"auto",autoHide:!0,autoFocusSearch:!0,showAnimation:!0,showPreview:!0,showSearch:!0,showRecents:!0,showVariants:!0,showCategoryButtons:!0,recentsCount:50,emojiData:xe,emojiVersion:"12.1",theme:"light",categories:["smileys","people","animals","food","activities","travel","objects","symbols","flags"],style:"native",twemojiOptions:{ext:".svg",folder:"svg"},emojisPerRow:8,rows:6,emojiSize:"1.8em",initialCategory:"smileys"};class rn{constructor(e={}){this.events=new b,this.publicEvents=new b,this.pickerVisible=!1,this.options=Object.assign(Object.assign({},an),e),this.options.rootElement||(this.options.rootElement=document.body),this.i18n=Object.assign(Object.assign({},Zo),e.i18n),this.onDocumentClick=this.onDocumentClick.bind(this),this.onDocumentKeydown=this.onDocumentKeydown.bind(this),this.theme=this.options.theme||"light",this.emojiCategories=function(e){const o={};return e.emoji.forEach((n=>{let i=o[e.categories[n.category||0]];i||(i=o[e.categories[n.category||0]]=[]),i.push(n)})),o}(this.options.emojiData||xe),this.buildPicker()}on(e,o){this.publicEvents.on(e,o)}off(e,o){this.publicEvents.off(e,o)}setStyleProperties(){this.options.showAnimation||this.pickerEl.style.setProperty("--animation-duration","0s"),this.options.emojisPerRow&&this.pickerEl.style.setProperty("--emoji-per-row",this.options.emojisPerRow.toString()),this.options.rows&&this.pickerEl.style.setProperty("--row-count",this.options.rows.toString()),this.options.emojiSize&&this.pickerEl.style.setProperty("--emoji-size",this.options.emojiSize),this.options.showCategoryButtons||this.pickerEl.style.setProperty("--category-button-height","0"),this.options.styleProperties&&Object.keys(this.options.styleProperties).forEach((e=>{this.options.styleProperties&&this.pickerEl.style.setProperty(e,this.options.styleProperties[e])}))}showSearchResults(e){_e(this.pickerContent),e.classList.add("search-results"),this.pickerContent.appendChild(e)}hideSearchResults(){this.pickerContent.firstChild!==this.emojiArea.container&&(_e(this.pickerContent),this.pickerContent.appendChild(this.emojiArea.container)),this.emojiArea.reset()}emitEmoji({emoji:o,showVariants:n}){return e(this,void 0,void 0,(function*(){if(o.variations&&n&&this.options.showVariants)this.showVariantPopup(o);else{let e;setTimeout((()=>this.emojiArea.updateRecents())),e=o.custom?this.emitCustomEmoji(o):"twemoji"===this.options.style?yield this.emitTwemoji(o):this.emitNativeEmoji(o),this.publicEvents.emit("emoji",e),this.options.autoHide&&this.hidePicker()}}))}emitNativeEmoji(e){return{emoji:e.emoji,name:e.name}}emitCustomEmoji(e){return{url:e.emoji,name:e.name,custom:!0}}emitTwemoji(e){return new Promise((o=>{ke.parse(e.emoji,Object.assign(Object.assign({},this.options.twemojiOptions),{callback:(n,{base:i,size:a,ext:r})=>{const t=`${i}${a}/${n}${r}`;return o({url:t,emoji:e.emoji,name:e.name}),t}}))}))}buildSearch(){var e;this.options.showSearch&&(this.search=new Yo(this.events,this.i18n,this.options,(null===(e=this.options.emojiData)||void 0===e?void 0:e.emoji)||xe.emoji,(this.options.categories||[]).map((e=>(this.options.emojiData||xe).categories.indexOf(e)))),this.pickerEl.appendChild(this.search.render()))}buildPreview(){this.options.showPreview&&this.pickerEl.appendChild(new Oe(this.events,this.options).render())}initPlugins(){if(this.options.plugins){const e=Ee("div","emoji-picker__plugin-container");this.options.plugins.forEach((o=>{if(!o.render)throw new Error('Emoji Button plugins must have a "render" function.');e.appendChild(o.render(this))})),this.pickerEl.appendChild(e)}}initFocusTrap(){this.focusTrap=h(this.pickerEl,{clickOutsideDeactivates:!0,initialFocus:this.options.showSearch&&this.options.autoFocusSearch?".emoji-picker__search":'.emoji-picker__emoji[tabindex="0"]'})}buildPicker(){this.pickerEl=Ee("div","emoji-picker"),this.pickerEl.classList.add(this.theme),this.setStyleProperties(),this.initFocusTrap(),this.pickerContent=Ee("div","emoji-picker__content"),this.initPlugins(),this.buildSearch(),this.pickerEl.appendChild(this.pickerContent),this.emojiArea=new nn(this.events,this.i18n,this.options,this.emojiCategories),this.pickerContent.appendChild(this.emojiArea.render()),this.events.on("showSearchResults",this.showSearchResults.bind(this)),this.events.on("hideSearchResults",this.hideSearchResults.bind(this)),this.events.on("emoji",this.emitEmoji.bind(this)),this.buildPreview(),this.wrapper=Ee("div","emoji-picker__wrapper"),this.wrapper.appendChild(this.pickerEl),this.wrapper.style.display="none",this.options.zIndex&&(this.wrapper.style.zIndex=this.options.zIndex+""),this.options.rootElement&&this.options.rootElement.appendChild(this.wrapper),this.observeForLazyLoad()}showVariantPopup(e){const o=new $o(this.events,e,this.options).render();o&&this.pickerEl.appendChild(o),this.events.on("hideVariantPopup",(()=>{o&&(o.classList.add("hiding"),setTimeout((()=>{o&&this.pickerEl.removeChild(o)}),175)),this.events.off("hideVariantPopup")}))}observeForLazyLoad(){this.observer=new IntersectionObserver(this.handleIntersectionChange.bind(this),{root:this.emojiArea.emojis}),this.emojiArea.emojis.querySelectorAll("."+Ce).forEach((e=>{this.shouldLazyLoad(e)&&this.observer.observe(e)}))}handleIntersectionChange(e){Array.prototype.filter.call(e,(e=>e.intersectionRatio>0)).map((e=>e.target)).forEach((e=>{ze(e,this.options)}))}shouldLazyLoad(e){return"twemoji"===this.options.style||"true"===e.dataset.custom}onDocumentClick(e){this.pickerEl.contains(e.target)||this.hidePicker()}destroyPicker(){this.events.off("emoji"),this.events.off("hideVariantPopup"),this.options.rootElement&&(this.options.rootElement.removeChild(this.wrapper),this.popper&&this.popper.destroy()),this.observer&&this.observer.disconnect(),this.options.plugins&&this.options.plugins.forEach((e=>{e.destroy&&e.destroy()}))}hidePicker(){this.hideInProgress=!0,this.focusTrap.deactivate(),this.pickerVisible=!1,this.overlay&&(document.body.removeChild(this.overlay),this.overlay=void 0),this.emojiArea.emojis.removeEventListener("scroll",this.emojiArea.highlightCategory),this.pickerEl.classList.add("hiding"),setTimeout((()=>{this.wrapper.style.display="none",this.pickerEl.classList.remove("hiding"),this.pickerContent.firstChild!==this.emojiArea.container&&(_e(this.pickerContent),this.pickerContent.appendChild(this.emojiArea.container)),this.search&&this.search.clear(),this.events.emit("hideVariantPopup"),this.hideInProgress=!1,this.popper&&this.popper.destroy(),this.publicEvents.emit("hidden")}),this.options.showAnimation?170:0),setTimeout((()=>{document.removeEventListener("click",this.onDocumentClick),document.removeEventListener("keydown",this.onDocumentKeydown)}))}showPicker(e){this.hideInProgress?setTimeout((()=>this.showPicker(e)),100):(this.pickerVisible=!0,this.wrapper.style.display="block",this.determineDisplay(e),this.focusTrap.activate(),setTimeout((()=>{this.addEventListeners(),this.setInitialFocus()})),this.emojiArea.reset())}determineDisplay(e){window.matchMedia("screen and (max-width: 450px)").matches?this.showMobileView():"string"==typeof this.options.position?this.setRelativePosition(e):this.setFixedPosition()}setInitialFocus(){this.pickerEl.querySelector(this.options.showSearch&&this.options.autoFocusSearch?".emoji-picker__search":`.${Ce}[tabindex="0"]`).focus()}addEventListeners(){document.addEventListener("click",this.onDocumentClick),document.addEventListener("keydown",this.onDocumentKeydown)}setRelativePosition(e){this.popper=we(e,this.wrapper,{placement:this.options.position})}setFixedPosition(){var e;if(null===(e=this.options)||void 0===e?void 0:e.position){this.wrapper.style.position="fixed";const e=this.options.position;Object.keys(e).forEach((o=>{this.wrapper.style[o]=e[o]}))}}showMobileView(){const e=window.getComputedStyle(this.pickerEl),o=document.querySelector("html"),n=o&&o.clientHeight,i=o&&o.clientWidth,a=parseInt(e.height),r=n?n/2-a/2:0,t=parseInt(e.width),s=i?i/2-t/2:0;this.wrapper.style.position="fixed",this.wrapper.style.top=r+"px",this.wrapper.style.left=s+"px",this.wrapper.style.zIndex="5000",this.overlay=Ee("div","emoji-picker__overlay"),document.body.appendChild(this.overlay)}togglePicker(e){this.pickerVisible?this.hidePicker():this.showPicker(e)}isPickerVisible(){return this.pickerVisible}onDocumentKeydown(e){"Escape"===e.key?this.hidePicker():"Tab"===e.key?this.pickerEl.classList.add("keyboard"):e.key.match(/^[\w]$/)&&this.search&&this.search.focus()}setTheme(e){e!==this.theme&&(this.pickerEl.classList.remove(this.theme),this.theme=e,this.pickerEl.classList.add(e))}}


/***/ }),

/***/ "./node_modules/ansi-html/index.js":
/*!*****************************************!*\
  !*** ./node_modules/ansi-html/index.js ***!
  \*****************************************/
/***/ ((module) => {

"use strict";


module.exports = ansiHTML

// Reference to https://github.com/sindresorhus/ansi-regex
var _regANSI = /(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/

var _defColors = {
  reset: ['fff', '000'], // [FOREGROUD_COLOR, BACKGROUND_COLOR]
  black: '000',
  red: 'ff0000',
  green: '209805',
  yellow: 'e8bf03',
  blue: '0000ff',
  magenta: 'ff00ff',
  cyan: '00ffee',
  lightgrey: 'f0f0f0',
  darkgrey: '888'
}
var _styles = {
  30: 'black',
  31: 'red',
  32: 'green',
  33: 'yellow',
  34: 'blue',
  35: 'magenta',
  36: 'cyan',
  37: 'lightgrey'
}
var _openTags = {
  '1': 'font-weight:bold', // bold
  '2': 'opacity:0.5', // dim
  '3': '<i>', // italic
  '4': '<u>', // underscore
  '8': 'display:none', // hidden
  '9': '<del>' // delete
}
var _closeTags = {
  '23': '</i>', // reset italic
  '24': '</u>', // reset underscore
  '29': '</del>' // reset delete
}

;[0, 21, 22, 27, 28, 39, 49].forEach(function (n) {
  _closeTags[n] = '</span>'
})

/**
 * Converts text with ANSI color codes to HTML markup.
 * @param {String} text
 * @returns {*}
 */
function ansiHTML (text) {
  // Returns the text if the string has no ANSI escape code.
  if (!_regANSI.test(text)) {
    return text
  }

  // Cache opened sequence.
  var ansiCodes = []
  // Replace with markup.
  var ret = text.replace(/\033\[(\d+)*m/g, function (match, seq) {
    var ot = _openTags[seq]
    if (ot) {
      // If current sequence has been opened, close it.
      if (!!~ansiCodes.indexOf(seq)) { // eslint-disable-line no-extra-boolean-cast
        ansiCodes.pop()
        return '</span>'
      }
      // Open tag.
      ansiCodes.push(seq)
      return ot[0] === '<' ? ot : '<span style="' + ot + ';">'
    }

    var ct = _closeTags[seq]
    if (ct) {
      // Pop sequence
      ansiCodes.pop()
      return ct
    }
    return ''
  })

  // Make sure tags are closed.
  var l = ansiCodes.length
  ;(l > 0) && (ret += Array(l + 1).join('</span>'))

  return ret
}

/**
 * Customize colors.
 * @param {Object} colors reference to _defColors
 */
ansiHTML.setColors = function (colors) {
  if (typeof colors !== 'object') {
    throw new Error('`colors` parameter must be an Object.')
  }

  var _finalColors = {}
  for (var key in _defColors) {
    var hex = colors.hasOwnProperty(key) ? colors[key] : null
    if (!hex) {
      _finalColors[key] = _defColors[key]
      continue
    }
    if ('reset' === key) {
      if (typeof hex === 'string') {
        hex = [hex]
      }
      if (!Array.isArray(hex) || hex.length === 0 || hex.some(function (h) {
        return typeof h !== 'string'
      })) {
        throw new Error('The value of `' + key + '` property must be an Array and each item could only be a hex string, e.g.: FF0000')
      }
      var defHexColor = _defColors[key]
      if (!hex[0]) {
        hex[0] = defHexColor[0]
      }
      if (hex.length === 1 || !hex[1]) {
        hex = [hex[0]]
        hex.push(defHexColor[1])
      }

      hex = hex.slice(0, 2)
    } else if (typeof hex !== 'string') {
      throw new Error('The value of `' + key + '` property must be a hex string, e.g.: FF0000')
    }
    _finalColors[key] = hex
  }
  _setTags(_finalColors)
}

/**
 * Reset colors.
 */
ansiHTML.reset = function () {
  _setTags(_defColors)
}

/**
 * Expose tags, including open and close.
 * @type {Object}
 */
ansiHTML.tags = {}

if (Object.defineProperty) {
  Object.defineProperty(ansiHTML.tags, 'open', {
    get: function () { return _openTags }
  })
  Object.defineProperty(ansiHTML.tags, 'close', {
    get: function () { return _closeTags }
  })
} else {
  ansiHTML.tags.open = _openTags
  ansiHTML.tags.close = _closeTags
}

function _setTags (colors) {
  // reset all
  _openTags['0'] = 'font-weight:normal;opacity:1;color:#' + colors.reset[0] + ';background:#' + colors.reset[1]
  // inverse
  _openTags['7'] = 'color:#' + colors.reset[1] + ';background:#' + colors.reset[0]
  // dark grey
  _openTags['90'] = 'color:#' + colors.darkgrey

  for (var code in _styles) {
    var color = _styles[code]
    var oriColor = colors[color] || '000'
    _openTags[code] = 'color:#' + oriColor
    code = parseInt(code)
    _openTags[(code + 10).toString()] = 'background:#' + oriColor
  }
}

ansiHTML.reset()


/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/***/ ((module) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


/***/ }),

/***/ "./node_modules/html-entities/lib/html4-entities.js":
/*!**********************************************************!*\
  !*** ./node_modules/html-entities/lib/html4-entities.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var surrogate_pairs_1 = __webpack_require__(/*! ./surrogate-pairs */ "./node_modules/html-entities/lib/surrogate-pairs.js");
var HTML_ALPHA = ['apos', 'nbsp', 'iexcl', 'cent', 'pound', 'curren', 'yen', 'brvbar', 'sect', 'uml', 'copy', 'ordf', 'laquo', 'not', 'shy', 'reg', 'macr', 'deg', 'plusmn', 'sup2', 'sup3', 'acute', 'micro', 'para', 'middot', 'cedil', 'sup1', 'ordm', 'raquo', 'frac14', 'frac12', 'frac34', 'iquest', 'Agrave', 'Aacute', 'Acirc', 'Atilde', 'Auml', 'Aring', 'AElig', 'Ccedil', 'Egrave', 'Eacute', 'Ecirc', 'Euml', 'Igrave', 'Iacute', 'Icirc', 'Iuml', 'ETH', 'Ntilde', 'Ograve', 'Oacute', 'Ocirc', 'Otilde', 'Ouml', 'times', 'Oslash', 'Ugrave', 'Uacute', 'Ucirc', 'Uuml', 'Yacute', 'THORN', 'szlig', 'agrave', 'aacute', 'acirc', 'atilde', 'auml', 'aring', 'aelig', 'ccedil', 'egrave', 'eacute', 'ecirc', 'euml', 'igrave', 'iacute', 'icirc', 'iuml', 'eth', 'ntilde', 'ograve', 'oacute', 'ocirc', 'otilde', 'ouml', 'divide', 'oslash', 'ugrave', 'uacute', 'ucirc', 'uuml', 'yacute', 'thorn', 'yuml', 'quot', 'amp', 'lt', 'gt', 'OElig', 'oelig', 'Scaron', 'scaron', 'Yuml', 'circ', 'tilde', 'ensp', 'emsp', 'thinsp', 'zwnj', 'zwj', 'lrm', 'rlm', 'ndash', 'mdash', 'lsquo', 'rsquo', 'sbquo', 'ldquo', 'rdquo', 'bdquo', 'dagger', 'Dagger', 'permil', 'lsaquo', 'rsaquo', 'euro', 'fnof', 'Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta', 'Eta', 'Theta', 'Iota', 'Kappa', 'Lambda', 'Mu', 'Nu', 'Xi', 'Omicron', 'Pi', 'Rho', 'Sigma', 'Tau', 'Upsilon', 'Phi', 'Chi', 'Psi', 'Omega', 'alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta', 'eta', 'theta', 'iota', 'kappa', 'lambda', 'mu', 'nu', 'xi', 'omicron', 'pi', 'rho', 'sigmaf', 'sigma', 'tau', 'upsilon', 'phi', 'chi', 'psi', 'omega', 'thetasym', 'upsih', 'piv', 'bull', 'hellip', 'prime', 'Prime', 'oline', 'frasl', 'weierp', 'image', 'real', 'trade', 'alefsym', 'larr', 'uarr', 'rarr', 'darr', 'harr', 'crarr', 'lArr', 'uArr', 'rArr', 'dArr', 'hArr', 'forall', 'part', 'exist', 'empty', 'nabla', 'isin', 'notin', 'ni', 'prod', 'sum', 'minus', 'lowast', 'radic', 'prop', 'infin', 'ang', 'and', 'or', 'cap', 'cup', 'int', 'there4', 'sim', 'cong', 'asymp', 'ne', 'equiv', 'le', 'ge', 'sub', 'sup', 'nsub', 'sube', 'supe', 'oplus', 'otimes', 'perp', 'sdot', 'lceil', 'rceil', 'lfloor', 'rfloor', 'lang', 'rang', 'loz', 'spades', 'clubs', 'hearts', 'diams'];
var HTML_CODES = [39, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 34, 38, 60, 62, 338, 339, 352, 353, 376, 710, 732, 8194, 8195, 8201, 8204, 8205, 8206, 8207, 8211, 8212, 8216, 8217, 8218, 8220, 8221, 8222, 8224, 8225, 8240, 8249, 8250, 8364, 402, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 931, 932, 933, 934, 935, 936, 937, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 977, 978, 982, 8226, 8230, 8242, 8243, 8254, 8260, 8472, 8465, 8476, 8482, 8501, 8592, 8593, 8594, 8595, 8596, 8629, 8656, 8657, 8658, 8659, 8660, 8704, 8706, 8707, 8709, 8711, 8712, 8713, 8715, 8719, 8721, 8722, 8727, 8730, 8733, 8734, 8736, 8743, 8744, 8745, 8746, 8747, 8756, 8764, 8773, 8776, 8800, 8801, 8804, 8805, 8834, 8835, 8836, 8838, 8839, 8853, 8855, 8869, 8901, 8968, 8969, 8970, 8971, 9001, 9002, 9674, 9824, 9827, 9829, 9830];
var alphaIndex = {};
var numIndex = {};
(function () {
    var i = 0;
    var length = HTML_ALPHA.length;
    while (i < length) {
        var a = HTML_ALPHA[i];
        var c = HTML_CODES[i];
        alphaIndex[a] = String.fromCharCode(c);
        numIndex[c] = a;
        i++;
    }
})();
var Html4Entities = /** @class */ (function () {
    function Html4Entities() {
    }
    Html4Entities.prototype.decode = function (str) {
        if (!str || !str.length) {
            return '';
        }
        return str.replace(/&(#?[\w\d]+);?/g, function (s, entity) {
            var chr;
            if (entity.charAt(0) === "#") {
                var code = entity.charAt(1).toLowerCase() === 'x' ?
                    parseInt(entity.substr(2), 16) :
                    parseInt(entity.substr(1));
                if (!isNaN(code) || code >= -32768) {
                    if (code <= 65535) {
                        chr = String.fromCharCode(code);
                    }
                    else {
                        chr = surrogate_pairs_1.fromCodePoint(code);
                    }
                }
            }
            else {
                chr = alphaIndex[entity];
            }
            return chr || s;
        });
    };
    Html4Entities.decode = function (str) {
        return new Html4Entities().decode(str);
    };
    Html4Entities.prototype.encode = function (str) {
        if (!str || !str.length) {
            return '';
        }
        var strLength = str.length;
        var result = '';
        var i = 0;
        while (i < strLength) {
            var alpha = numIndex[str.charCodeAt(i)];
            result += alpha ? "&" + alpha + ";" : str.charAt(i);
            i++;
        }
        return result;
    };
    Html4Entities.encode = function (str) {
        return new Html4Entities().encode(str);
    };
    Html4Entities.prototype.encodeNonUTF = function (str) {
        if (!str || !str.length) {
            return '';
        }
        var strLength = str.length;
        var result = '';
        var i = 0;
        while (i < strLength) {
            var cc = str.charCodeAt(i);
            var alpha = numIndex[cc];
            if (alpha) {
                result += "&" + alpha + ";";
            }
            else if (cc < 32 || cc > 126) {
                if (cc >= surrogate_pairs_1.highSurrogateFrom && cc <= surrogate_pairs_1.highSurrogateTo) {
                    result += '&#' + surrogate_pairs_1.getCodePoint(str, i) + ';';
                    i++;
                }
                else {
                    result += '&#' + cc + ';';
                }
            }
            else {
                result += str.charAt(i);
            }
            i++;
        }
        return result;
    };
    Html4Entities.encodeNonUTF = function (str) {
        return new Html4Entities().encodeNonUTF(str);
    };
    Html4Entities.prototype.encodeNonASCII = function (str) {
        if (!str || !str.length) {
            return '';
        }
        var strLength = str.length;
        var result = '';
        var i = 0;
        while (i < strLength) {
            var c = str.charCodeAt(i);
            if (c <= 255) {
                result += str[i++];
                continue;
            }
            if (c >= surrogate_pairs_1.highSurrogateFrom && c <= surrogate_pairs_1.highSurrogateTo) {
                result += '&#' + surrogate_pairs_1.getCodePoint(str, i) + ';';
                i++;
            }
            else {
                result += '&#' + c + ';';
            }
            i++;
        }
        return result;
    };
    Html4Entities.encodeNonASCII = function (str) {
        return new Html4Entities().encodeNonASCII(str);
    };
    return Html4Entities;
}());
exports.Html4Entities = Html4Entities;


/***/ }),

/***/ "./node_modules/html-entities/lib/html5-entities.js":
/*!**********************************************************!*\
  !*** ./node_modules/html-entities/lib/html5-entities.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var surrogate_pairs_1 = __webpack_require__(/*! ./surrogate-pairs */ "./node_modules/html-entities/lib/surrogate-pairs.js");
var ENTITIES = [['Aacute', [193]], ['aacute', [225]], ['Abreve', [258]], ['abreve', [259]], ['ac', [8766]], ['acd', [8767]], ['acE', [8766, 819]], ['Acirc', [194]], ['acirc', [226]], ['acute', [180]], ['Acy', [1040]], ['acy', [1072]], ['AElig', [198]], ['aelig', [230]], ['af', [8289]], ['Afr', [120068]], ['afr', [120094]], ['Agrave', [192]], ['agrave', [224]], ['alefsym', [8501]], ['aleph', [8501]], ['Alpha', [913]], ['alpha', [945]], ['Amacr', [256]], ['amacr', [257]], ['amalg', [10815]], ['amp', [38]], ['AMP', [38]], ['andand', [10837]], ['And', [10835]], ['and', [8743]], ['andd', [10844]], ['andslope', [10840]], ['andv', [10842]], ['ang', [8736]], ['ange', [10660]], ['angle', [8736]], ['angmsdaa', [10664]], ['angmsdab', [10665]], ['angmsdac', [10666]], ['angmsdad', [10667]], ['angmsdae', [10668]], ['angmsdaf', [10669]], ['angmsdag', [10670]], ['angmsdah', [10671]], ['angmsd', [8737]], ['angrt', [8735]], ['angrtvb', [8894]], ['angrtvbd', [10653]], ['angsph', [8738]], ['angst', [197]], ['angzarr', [9084]], ['Aogon', [260]], ['aogon', [261]], ['Aopf', [120120]], ['aopf', [120146]], ['apacir', [10863]], ['ap', [8776]], ['apE', [10864]], ['ape', [8778]], ['apid', [8779]], ['apos', [39]], ['ApplyFunction', [8289]], ['approx', [8776]], ['approxeq', [8778]], ['Aring', [197]], ['aring', [229]], ['Ascr', [119964]], ['ascr', [119990]], ['Assign', [8788]], ['ast', [42]], ['asymp', [8776]], ['asympeq', [8781]], ['Atilde', [195]], ['atilde', [227]], ['Auml', [196]], ['auml', [228]], ['awconint', [8755]], ['awint', [10769]], ['backcong', [8780]], ['backepsilon', [1014]], ['backprime', [8245]], ['backsim', [8765]], ['backsimeq', [8909]], ['Backslash', [8726]], ['Barv', [10983]], ['barvee', [8893]], ['barwed', [8965]], ['Barwed', [8966]], ['barwedge', [8965]], ['bbrk', [9141]], ['bbrktbrk', [9142]], ['bcong', [8780]], ['Bcy', [1041]], ['bcy', [1073]], ['bdquo', [8222]], ['becaus', [8757]], ['because', [8757]], ['Because', [8757]], ['bemptyv', [10672]], ['bepsi', [1014]], ['bernou', [8492]], ['Bernoullis', [8492]], ['Beta', [914]], ['beta', [946]], ['beth', [8502]], ['between', [8812]], ['Bfr', [120069]], ['bfr', [120095]], ['bigcap', [8898]], ['bigcirc', [9711]], ['bigcup', [8899]], ['bigodot', [10752]], ['bigoplus', [10753]], ['bigotimes', [10754]], ['bigsqcup', [10758]], ['bigstar', [9733]], ['bigtriangledown', [9661]], ['bigtriangleup', [9651]], ['biguplus', [10756]], ['bigvee', [8897]], ['bigwedge', [8896]], ['bkarow', [10509]], ['blacklozenge', [10731]], ['blacksquare', [9642]], ['blacktriangle', [9652]], ['blacktriangledown', [9662]], ['blacktriangleleft', [9666]], ['blacktriangleright', [9656]], ['blank', [9251]], ['blk12', [9618]], ['blk14', [9617]], ['blk34', [9619]], ['block', [9608]], ['bne', [61, 8421]], ['bnequiv', [8801, 8421]], ['bNot', [10989]], ['bnot', [8976]], ['Bopf', [120121]], ['bopf', [120147]], ['bot', [8869]], ['bottom', [8869]], ['bowtie', [8904]], ['boxbox', [10697]], ['boxdl', [9488]], ['boxdL', [9557]], ['boxDl', [9558]], ['boxDL', [9559]], ['boxdr', [9484]], ['boxdR', [9554]], ['boxDr', [9555]], ['boxDR', [9556]], ['boxh', [9472]], ['boxH', [9552]], ['boxhd', [9516]], ['boxHd', [9572]], ['boxhD', [9573]], ['boxHD', [9574]], ['boxhu', [9524]], ['boxHu', [9575]], ['boxhU', [9576]], ['boxHU', [9577]], ['boxminus', [8863]], ['boxplus', [8862]], ['boxtimes', [8864]], ['boxul', [9496]], ['boxuL', [9563]], ['boxUl', [9564]], ['boxUL', [9565]], ['boxur', [9492]], ['boxuR', [9560]], ['boxUr', [9561]], ['boxUR', [9562]], ['boxv', [9474]], ['boxV', [9553]], ['boxvh', [9532]], ['boxvH', [9578]], ['boxVh', [9579]], ['boxVH', [9580]], ['boxvl', [9508]], ['boxvL', [9569]], ['boxVl', [9570]], ['boxVL', [9571]], ['boxvr', [9500]], ['boxvR', [9566]], ['boxVr', [9567]], ['boxVR', [9568]], ['bprime', [8245]], ['breve', [728]], ['Breve', [728]], ['brvbar', [166]], ['bscr', [119991]], ['Bscr', [8492]], ['bsemi', [8271]], ['bsim', [8765]], ['bsime', [8909]], ['bsolb', [10693]], ['bsol', [92]], ['bsolhsub', [10184]], ['bull', [8226]], ['bullet', [8226]], ['bump', [8782]], ['bumpE', [10926]], ['bumpe', [8783]], ['Bumpeq', [8782]], ['bumpeq', [8783]], ['Cacute', [262]], ['cacute', [263]], ['capand', [10820]], ['capbrcup', [10825]], ['capcap', [10827]], ['cap', [8745]], ['Cap', [8914]], ['capcup', [10823]], ['capdot', [10816]], ['CapitalDifferentialD', [8517]], ['caps', [8745, 65024]], ['caret', [8257]], ['caron', [711]], ['Cayleys', [8493]], ['ccaps', [10829]], ['Ccaron', [268]], ['ccaron', [269]], ['Ccedil', [199]], ['ccedil', [231]], ['Ccirc', [264]], ['ccirc', [265]], ['Cconint', [8752]], ['ccups', [10828]], ['ccupssm', [10832]], ['Cdot', [266]], ['cdot', [267]], ['cedil', [184]], ['Cedilla', [184]], ['cemptyv', [10674]], ['cent', [162]], ['centerdot', [183]], ['CenterDot', [183]], ['cfr', [120096]], ['Cfr', [8493]], ['CHcy', [1063]], ['chcy', [1095]], ['check', [10003]], ['checkmark', [10003]], ['Chi', [935]], ['chi', [967]], ['circ', [710]], ['circeq', [8791]], ['circlearrowleft', [8634]], ['circlearrowright', [8635]], ['circledast', [8859]], ['circledcirc', [8858]], ['circleddash', [8861]], ['CircleDot', [8857]], ['circledR', [174]], ['circledS', [9416]], ['CircleMinus', [8854]], ['CirclePlus', [8853]], ['CircleTimes', [8855]], ['cir', [9675]], ['cirE', [10691]], ['cire', [8791]], ['cirfnint', [10768]], ['cirmid', [10991]], ['cirscir', [10690]], ['ClockwiseContourIntegral', [8754]], ['clubs', [9827]], ['clubsuit', [9827]], ['colon', [58]], ['Colon', [8759]], ['Colone', [10868]], ['colone', [8788]], ['coloneq', [8788]], ['comma', [44]], ['commat', [64]], ['comp', [8705]], ['compfn', [8728]], ['complement', [8705]], ['complexes', [8450]], ['cong', [8773]], ['congdot', [10861]], ['Congruent', [8801]], ['conint', [8750]], ['Conint', [8751]], ['ContourIntegral', [8750]], ['copf', [120148]], ['Copf', [8450]], ['coprod', [8720]], ['Coproduct', [8720]], ['copy', [169]], ['COPY', [169]], ['copysr', [8471]], ['CounterClockwiseContourIntegral', [8755]], ['crarr', [8629]], ['cross', [10007]], ['Cross', [10799]], ['Cscr', [119966]], ['cscr', [119992]], ['csub', [10959]], ['csube', [10961]], ['csup', [10960]], ['csupe', [10962]], ['ctdot', [8943]], ['cudarrl', [10552]], ['cudarrr', [10549]], ['cuepr', [8926]], ['cuesc', [8927]], ['cularr', [8630]], ['cularrp', [10557]], ['cupbrcap', [10824]], ['cupcap', [10822]], ['CupCap', [8781]], ['cup', [8746]], ['Cup', [8915]], ['cupcup', [10826]], ['cupdot', [8845]], ['cupor', [10821]], ['cups', [8746, 65024]], ['curarr', [8631]], ['curarrm', [10556]], ['curlyeqprec', [8926]], ['curlyeqsucc', [8927]], ['curlyvee', [8910]], ['curlywedge', [8911]], ['curren', [164]], ['curvearrowleft', [8630]], ['curvearrowright', [8631]], ['cuvee', [8910]], ['cuwed', [8911]], ['cwconint', [8754]], ['cwint', [8753]], ['cylcty', [9005]], ['dagger', [8224]], ['Dagger', [8225]], ['daleth', [8504]], ['darr', [8595]], ['Darr', [8609]], ['dArr', [8659]], ['dash', [8208]], ['Dashv', [10980]], ['dashv', [8867]], ['dbkarow', [10511]], ['dblac', [733]], ['Dcaron', [270]], ['dcaron', [271]], ['Dcy', [1044]], ['dcy', [1076]], ['ddagger', [8225]], ['ddarr', [8650]], ['DD', [8517]], ['dd', [8518]], ['DDotrahd', [10513]], ['ddotseq', [10871]], ['deg', [176]], ['Del', [8711]], ['Delta', [916]], ['delta', [948]], ['demptyv', [10673]], ['dfisht', [10623]], ['Dfr', [120071]], ['dfr', [120097]], ['dHar', [10597]], ['dharl', [8643]], ['dharr', [8642]], ['DiacriticalAcute', [180]], ['DiacriticalDot', [729]], ['DiacriticalDoubleAcute', [733]], ['DiacriticalGrave', [96]], ['DiacriticalTilde', [732]], ['diam', [8900]], ['diamond', [8900]], ['Diamond', [8900]], ['diamondsuit', [9830]], ['diams', [9830]], ['die', [168]], ['DifferentialD', [8518]], ['digamma', [989]], ['disin', [8946]], ['div', [247]], ['divide', [247]], ['divideontimes', [8903]], ['divonx', [8903]], ['DJcy', [1026]], ['djcy', [1106]], ['dlcorn', [8990]], ['dlcrop', [8973]], ['dollar', [36]], ['Dopf', [120123]], ['dopf', [120149]], ['Dot', [168]], ['dot', [729]], ['DotDot', [8412]], ['doteq', [8784]], ['doteqdot', [8785]], ['DotEqual', [8784]], ['dotminus', [8760]], ['dotplus', [8724]], ['dotsquare', [8865]], ['doublebarwedge', [8966]], ['DoubleContourIntegral', [8751]], ['DoubleDot', [168]], ['DoubleDownArrow', [8659]], ['DoubleLeftArrow', [8656]], ['DoubleLeftRightArrow', [8660]], ['DoubleLeftTee', [10980]], ['DoubleLongLeftArrow', [10232]], ['DoubleLongLeftRightArrow', [10234]], ['DoubleLongRightArrow', [10233]], ['DoubleRightArrow', [8658]], ['DoubleRightTee', [8872]], ['DoubleUpArrow', [8657]], ['DoubleUpDownArrow', [8661]], ['DoubleVerticalBar', [8741]], ['DownArrowBar', [10515]], ['downarrow', [8595]], ['DownArrow', [8595]], ['Downarrow', [8659]], ['DownArrowUpArrow', [8693]], ['DownBreve', [785]], ['downdownarrows', [8650]], ['downharpoonleft', [8643]], ['downharpoonright', [8642]], ['DownLeftRightVector', [10576]], ['DownLeftTeeVector', [10590]], ['DownLeftVectorBar', [10582]], ['DownLeftVector', [8637]], ['DownRightTeeVector', [10591]], ['DownRightVectorBar', [10583]], ['DownRightVector', [8641]], ['DownTeeArrow', [8615]], ['DownTee', [8868]], ['drbkarow', [10512]], ['drcorn', [8991]], ['drcrop', [8972]], ['Dscr', [119967]], ['dscr', [119993]], ['DScy', [1029]], ['dscy', [1109]], ['dsol', [10742]], ['Dstrok', [272]], ['dstrok', [273]], ['dtdot', [8945]], ['dtri', [9663]], ['dtrif', [9662]], ['duarr', [8693]], ['duhar', [10607]], ['dwangle', [10662]], ['DZcy', [1039]], ['dzcy', [1119]], ['dzigrarr', [10239]], ['Eacute', [201]], ['eacute', [233]], ['easter', [10862]], ['Ecaron', [282]], ['ecaron', [283]], ['Ecirc', [202]], ['ecirc', [234]], ['ecir', [8790]], ['ecolon', [8789]], ['Ecy', [1069]], ['ecy', [1101]], ['eDDot', [10871]], ['Edot', [278]], ['edot', [279]], ['eDot', [8785]], ['ee', [8519]], ['efDot', [8786]], ['Efr', [120072]], ['efr', [120098]], ['eg', [10906]], ['Egrave', [200]], ['egrave', [232]], ['egs', [10902]], ['egsdot', [10904]], ['el', [10905]], ['Element', [8712]], ['elinters', [9191]], ['ell', [8467]], ['els', [10901]], ['elsdot', [10903]], ['Emacr', [274]], ['emacr', [275]], ['empty', [8709]], ['emptyset', [8709]], ['EmptySmallSquare', [9723]], ['emptyv', [8709]], ['EmptyVerySmallSquare', [9643]], ['emsp13', [8196]], ['emsp14', [8197]], ['emsp', [8195]], ['ENG', [330]], ['eng', [331]], ['ensp', [8194]], ['Eogon', [280]], ['eogon', [281]], ['Eopf', [120124]], ['eopf', [120150]], ['epar', [8917]], ['eparsl', [10723]], ['eplus', [10865]], ['epsi', [949]], ['Epsilon', [917]], ['epsilon', [949]], ['epsiv', [1013]], ['eqcirc', [8790]], ['eqcolon', [8789]], ['eqsim', [8770]], ['eqslantgtr', [10902]], ['eqslantless', [10901]], ['Equal', [10869]], ['equals', [61]], ['EqualTilde', [8770]], ['equest', [8799]], ['Equilibrium', [8652]], ['equiv', [8801]], ['equivDD', [10872]], ['eqvparsl', [10725]], ['erarr', [10609]], ['erDot', [8787]], ['escr', [8495]], ['Escr', [8496]], ['esdot', [8784]], ['Esim', [10867]], ['esim', [8770]], ['Eta', [919]], ['eta', [951]], ['ETH', [208]], ['eth', [240]], ['Euml', [203]], ['euml', [235]], ['euro', [8364]], ['excl', [33]], ['exist', [8707]], ['Exists', [8707]], ['expectation', [8496]], ['exponentiale', [8519]], ['ExponentialE', [8519]], ['fallingdotseq', [8786]], ['Fcy', [1060]], ['fcy', [1092]], ['female', [9792]], ['ffilig', [64259]], ['fflig', [64256]], ['ffllig', [64260]], ['Ffr', [120073]], ['ffr', [120099]], ['filig', [64257]], ['FilledSmallSquare', [9724]], ['FilledVerySmallSquare', [9642]], ['fjlig', [102, 106]], ['flat', [9837]], ['fllig', [64258]], ['fltns', [9649]], ['fnof', [402]], ['Fopf', [120125]], ['fopf', [120151]], ['forall', [8704]], ['ForAll', [8704]], ['fork', [8916]], ['forkv', [10969]], ['Fouriertrf', [8497]], ['fpartint', [10765]], ['frac12', [189]], ['frac13', [8531]], ['frac14', [188]], ['frac15', [8533]], ['frac16', [8537]], ['frac18', [8539]], ['frac23', [8532]], ['frac25', [8534]], ['frac34', [190]], ['frac35', [8535]], ['frac38', [8540]], ['frac45', [8536]], ['frac56', [8538]], ['frac58', [8541]], ['frac78', [8542]], ['frasl', [8260]], ['frown', [8994]], ['fscr', [119995]], ['Fscr', [8497]], ['gacute', [501]], ['Gamma', [915]], ['gamma', [947]], ['Gammad', [988]], ['gammad', [989]], ['gap', [10886]], ['Gbreve', [286]], ['gbreve', [287]], ['Gcedil', [290]], ['Gcirc', [284]], ['gcirc', [285]], ['Gcy', [1043]], ['gcy', [1075]], ['Gdot', [288]], ['gdot', [289]], ['ge', [8805]], ['gE', [8807]], ['gEl', [10892]], ['gel', [8923]], ['geq', [8805]], ['geqq', [8807]], ['geqslant', [10878]], ['gescc', [10921]], ['ges', [10878]], ['gesdot', [10880]], ['gesdoto', [10882]], ['gesdotol', [10884]], ['gesl', [8923, 65024]], ['gesles', [10900]], ['Gfr', [120074]], ['gfr', [120100]], ['gg', [8811]], ['Gg', [8921]], ['ggg', [8921]], ['gimel', [8503]], ['GJcy', [1027]], ['gjcy', [1107]], ['gla', [10917]], ['gl', [8823]], ['glE', [10898]], ['glj', [10916]], ['gnap', [10890]], ['gnapprox', [10890]], ['gne', [10888]], ['gnE', [8809]], ['gneq', [10888]], ['gneqq', [8809]], ['gnsim', [8935]], ['Gopf', [120126]], ['gopf', [120152]], ['grave', [96]], ['GreaterEqual', [8805]], ['GreaterEqualLess', [8923]], ['GreaterFullEqual', [8807]], ['GreaterGreater', [10914]], ['GreaterLess', [8823]], ['GreaterSlantEqual', [10878]], ['GreaterTilde', [8819]], ['Gscr', [119970]], ['gscr', [8458]], ['gsim', [8819]], ['gsime', [10894]], ['gsiml', [10896]], ['gtcc', [10919]], ['gtcir', [10874]], ['gt', [62]], ['GT', [62]], ['Gt', [8811]], ['gtdot', [8919]], ['gtlPar', [10645]], ['gtquest', [10876]], ['gtrapprox', [10886]], ['gtrarr', [10616]], ['gtrdot', [8919]], ['gtreqless', [8923]], ['gtreqqless', [10892]], ['gtrless', [8823]], ['gtrsim', [8819]], ['gvertneqq', [8809, 65024]], ['gvnE', [8809, 65024]], ['Hacek', [711]], ['hairsp', [8202]], ['half', [189]], ['hamilt', [8459]], ['HARDcy', [1066]], ['hardcy', [1098]], ['harrcir', [10568]], ['harr', [8596]], ['hArr', [8660]], ['harrw', [8621]], ['Hat', [94]], ['hbar', [8463]], ['Hcirc', [292]], ['hcirc', [293]], ['hearts', [9829]], ['heartsuit', [9829]], ['hellip', [8230]], ['hercon', [8889]], ['hfr', [120101]], ['Hfr', [8460]], ['HilbertSpace', [8459]], ['hksearow', [10533]], ['hkswarow', [10534]], ['hoarr', [8703]], ['homtht', [8763]], ['hookleftarrow', [8617]], ['hookrightarrow', [8618]], ['hopf', [120153]], ['Hopf', [8461]], ['horbar', [8213]], ['HorizontalLine', [9472]], ['hscr', [119997]], ['Hscr', [8459]], ['hslash', [8463]], ['Hstrok', [294]], ['hstrok', [295]], ['HumpDownHump', [8782]], ['HumpEqual', [8783]], ['hybull', [8259]], ['hyphen', [8208]], ['Iacute', [205]], ['iacute', [237]], ['ic', [8291]], ['Icirc', [206]], ['icirc', [238]], ['Icy', [1048]], ['icy', [1080]], ['Idot', [304]], ['IEcy', [1045]], ['iecy', [1077]], ['iexcl', [161]], ['iff', [8660]], ['ifr', [120102]], ['Ifr', [8465]], ['Igrave', [204]], ['igrave', [236]], ['ii', [8520]], ['iiiint', [10764]], ['iiint', [8749]], ['iinfin', [10716]], ['iiota', [8489]], ['IJlig', [306]], ['ijlig', [307]], ['Imacr', [298]], ['imacr', [299]], ['image', [8465]], ['ImaginaryI', [8520]], ['imagline', [8464]], ['imagpart', [8465]], ['imath', [305]], ['Im', [8465]], ['imof', [8887]], ['imped', [437]], ['Implies', [8658]], ['incare', [8453]], ['in', [8712]], ['infin', [8734]], ['infintie', [10717]], ['inodot', [305]], ['intcal', [8890]], ['int', [8747]], ['Int', [8748]], ['integers', [8484]], ['Integral', [8747]], ['intercal', [8890]], ['Intersection', [8898]], ['intlarhk', [10775]], ['intprod', [10812]], ['InvisibleComma', [8291]], ['InvisibleTimes', [8290]], ['IOcy', [1025]], ['iocy', [1105]], ['Iogon', [302]], ['iogon', [303]], ['Iopf', [120128]], ['iopf', [120154]], ['Iota', [921]], ['iota', [953]], ['iprod', [10812]], ['iquest', [191]], ['iscr', [119998]], ['Iscr', [8464]], ['isin', [8712]], ['isindot', [8949]], ['isinE', [8953]], ['isins', [8948]], ['isinsv', [8947]], ['isinv', [8712]], ['it', [8290]], ['Itilde', [296]], ['itilde', [297]], ['Iukcy', [1030]], ['iukcy', [1110]], ['Iuml', [207]], ['iuml', [239]], ['Jcirc', [308]], ['jcirc', [309]], ['Jcy', [1049]], ['jcy', [1081]], ['Jfr', [120077]], ['jfr', [120103]], ['jmath', [567]], ['Jopf', [120129]], ['jopf', [120155]], ['Jscr', [119973]], ['jscr', [119999]], ['Jsercy', [1032]], ['jsercy', [1112]], ['Jukcy', [1028]], ['jukcy', [1108]], ['Kappa', [922]], ['kappa', [954]], ['kappav', [1008]], ['Kcedil', [310]], ['kcedil', [311]], ['Kcy', [1050]], ['kcy', [1082]], ['Kfr', [120078]], ['kfr', [120104]], ['kgreen', [312]], ['KHcy', [1061]], ['khcy', [1093]], ['KJcy', [1036]], ['kjcy', [1116]], ['Kopf', [120130]], ['kopf', [120156]], ['Kscr', [119974]], ['kscr', [120000]], ['lAarr', [8666]], ['Lacute', [313]], ['lacute', [314]], ['laemptyv', [10676]], ['lagran', [8466]], ['Lambda', [923]], ['lambda', [955]], ['lang', [10216]], ['Lang', [10218]], ['langd', [10641]], ['langle', [10216]], ['lap', [10885]], ['Laplacetrf', [8466]], ['laquo', [171]], ['larrb', [8676]], ['larrbfs', [10527]], ['larr', [8592]], ['Larr', [8606]], ['lArr', [8656]], ['larrfs', [10525]], ['larrhk', [8617]], ['larrlp', [8619]], ['larrpl', [10553]], ['larrsim', [10611]], ['larrtl', [8610]], ['latail', [10521]], ['lAtail', [10523]], ['lat', [10923]], ['late', [10925]], ['lates', [10925, 65024]], ['lbarr', [10508]], ['lBarr', [10510]], ['lbbrk', [10098]], ['lbrace', [123]], ['lbrack', [91]], ['lbrke', [10635]], ['lbrksld', [10639]], ['lbrkslu', [10637]], ['Lcaron', [317]], ['lcaron', [318]], ['Lcedil', [315]], ['lcedil', [316]], ['lceil', [8968]], ['lcub', [123]], ['Lcy', [1051]], ['lcy', [1083]], ['ldca', [10550]], ['ldquo', [8220]], ['ldquor', [8222]], ['ldrdhar', [10599]], ['ldrushar', [10571]], ['ldsh', [8626]], ['le', [8804]], ['lE', [8806]], ['LeftAngleBracket', [10216]], ['LeftArrowBar', [8676]], ['leftarrow', [8592]], ['LeftArrow', [8592]], ['Leftarrow', [8656]], ['LeftArrowRightArrow', [8646]], ['leftarrowtail', [8610]], ['LeftCeiling', [8968]], ['LeftDoubleBracket', [10214]], ['LeftDownTeeVector', [10593]], ['LeftDownVectorBar', [10585]], ['LeftDownVector', [8643]], ['LeftFloor', [8970]], ['leftharpoondown', [8637]], ['leftharpoonup', [8636]], ['leftleftarrows', [8647]], ['leftrightarrow', [8596]], ['LeftRightArrow', [8596]], ['Leftrightarrow', [8660]], ['leftrightarrows', [8646]], ['leftrightharpoons', [8651]], ['leftrightsquigarrow', [8621]], ['LeftRightVector', [10574]], ['LeftTeeArrow', [8612]], ['LeftTee', [8867]], ['LeftTeeVector', [10586]], ['leftthreetimes', [8907]], ['LeftTriangleBar', [10703]], ['LeftTriangle', [8882]], ['LeftTriangleEqual', [8884]], ['LeftUpDownVector', [10577]], ['LeftUpTeeVector', [10592]], ['LeftUpVectorBar', [10584]], ['LeftUpVector', [8639]], ['LeftVectorBar', [10578]], ['LeftVector', [8636]], ['lEg', [10891]], ['leg', [8922]], ['leq', [8804]], ['leqq', [8806]], ['leqslant', [10877]], ['lescc', [10920]], ['les', [10877]], ['lesdot', [10879]], ['lesdoto', [10881]], ['lesdotor', [10883]], ['lesg', [8922, 65024]], ['lesges', [10899]], ['lessapprox', [10885]], ['lessdot', [8918]], ['lesseqgtr', [8922]], ['lesseqqgtr', [10891]], ['LessEqualGreater', [8922]], ['LessFullEqual', [8806]], ['LessGreater', [8822]], ['lessgtr', [8822]], ['LessLess', [10913]], ['lesssim', [8818]], ['LessSlantEqual', [10877]], ['LessTilde', [8818]], ['lfisht', [10620]], ['lfloor', [8970]], ['Lfr', [120079]], ['lfr', [120105]], ['lg', [8822]], ['lgE', [10897]], ['lHar', [10594]], ['lhard', [8637]], ['lharu', [8636]], ['lharul', [10602]], ['lhblk', [9604]], ['LJcy', [1033]], ['ljcy', [1113]], ['llarr', [8647]], ['ll', [8810]], ['Ll', [8920]], ['llcorner', [8990]], ['Lleftarrow', [8666]], ['llhard', [10603]], ['lltri', [9722]], ['Lmidot', [319]], ['lmidot', [320]], ['lmoustache', [9136]], ['lmoust', [9136]], ['lnap', [10889]], ['lnapprox', [10889]], ['lne', [10887]], ['lnE', [8808]], ['lneq', [10887]], ['lneqq', [8808]], ['lnsim', [8934]], ['loang', [10220]], ['loarr', [8701]], ['lobrk', [10214]], ['longleftarrow', [10229]], ['LongLeftArrow', [10229]], ['Longleftarrow', [10232]], ['longleftrightarrow', [10231]], ['LongLeftRightArrow', [10231]], ['Longleftrightarrow', [10234]], ['longmapsto', [10236]], ['longrightarrow', [10230]], ['LongRightArrow', [10230]], ['Longrightarrow', [10233]], ['looparrowleft', [8619]], ['looparrowright', [8620]], ['lopar', [10629]], ['Lopf', [120131]], ['lopf', [120157]], ['loplus', [10797]], ['lotimes', [10804]], ['lowast', [8727]], ['lowbar', [95]], ['LowerLeftArrow', [8601]], ['LowerRightArrow', [8600]], ['loz', [9674]], ['lozenge', [9674]], ['lozf', [10731]], ['lpar', [40]], ['lparlt', [10643]], ['lrarr', [8646]], ['lrcorner', [8991]], ['lrhar', [8651]], ['lrhard', [10605]], ['lrm', [8206]], ['lrtri', [8895]], ['lsaquo', [8249]], ['lscr', [120001]], ['Lscr', [8466]], ['lsh', [8624]], ['Lsh', [8624]], ['lsim', [8818]], ['lsime', [10893]], ['lsimg', [10895]], ['lsqb', [91]], ['lsquo', [8216]], ['lsquor', [8218]], ['Lstrok', [321]], ['lstrok', [322]], ['ltcc', [10918]], ['ltcir', [10873]], ['lt', [60]], ['LT', [60]], ['Lt', [8810]], ['ltdot', [8918]], ['lthree', [8907]], ['ltimes', [8905]], ['ltlarr', [10614]], ['ltquest', [10875]], ['ltri', [9667]], ['ltrie', [8884]], ['ltrif', [9666]], ['ltrPar', [10646]], ['lurdshar', [10570]], ['luruhar', [10598]], ['lvertneqq', [8808, 65024]], ['lvnE', [8808, 65024]], ['macr', [175]], ['male', [9794]], ['malt', [10016]], ['maltese', [10016]], ['Map', [10501]], ['map', [8614]], ['mapsto', [8614]], ['mapstodown', [8615]], ['mapstoleft', [8612]], ['mapstoup', [8613]], ['marker', [9646]], ['mcomma', [10793]], ['Mcy', [1052]], ['mcy', [1084]], ['mdash', [8212]], ['mDDot', [8762]], ['measuredangle', [8737]], ['MediumSpace', [8287]], ['Mellintrf', [8499]], ['Mfr', [120080]], ['mfr', [120106]], ['mho', [8487]], ['micro', [181]], ['midast', [42]], ['midcir', [10992]], ['mid', [8739]], ['middot', [183]], ['minusb', [8863]], ['minus', [8722]], ['minusd', [8760]], ['minusdu', [10794]], ['MinusPlus', [8723]], ['mlcp', [10971]], ['mldr', [8230]], ['mnplus', [8723]], ['models', [8871]], ['Mopf', [120132]], ['mopf', [120158]], ['mp', [8723]], ['mscr', [120002]], ['Mscr', [8499]], ['mstpos', [8766]], ['Mu', [924]], ['mu', [956]], ['multimap', [8888]], ['mumap', [8888]], ['nabla', [8711]], ['Nacute', [323]], ['nacute', [324]], ['nang', [8736, 8402]], ['nap', [8777]], ['napE', [10864, 824]], ['napid', [8779, 824]], ['napos', [329]], ['napprox', [8777]], ['natural', [9838]], ['naturals', [8469]], ['natur', [9838]], ['nbsp', [160]], ['nbump', [8782, 824]], ['nbumpe', [8783, 824]], ['ncap', [10819]], ['Ncaron', [327]], ['ncaron', [328]], ['Ncedil', [325]], ['ncedil', [326]], ['ncong', [8775]], ['ncongdot', [10861, 824]], ['ncup', [10818]], ['Ncy', [1053]], ['ncy', [1085]], ['ndash', [8211]], ['nearhk', [10532]], ['nearr', [8599]], ['neArr', [8663]], ['nearrow', [8599]], ['ne', [8800]], ['nedot', [8784, 824]], ['NegativeMediumSpace', [8203]], ['NegativeThickSpace', [8203]], ['NegativeThinSpace', [8203]], ['NegativeVeryThinSpace', [8203]], ['nequiv', [8802]], ['nesear', [10536]], ['nesim', [8770, 824]], ['NestedGreaterGreater', [8811]], ['NestedLessLess', [8810]], ['nexist', [8708]], ['nexists', [8708]], ['Nfr', [120081]], ['nfr', [120107]], ['ngE', [8807, 824]], ['nge', [8817]], ['ngeq', [8817]], ['ngeqq', [8807, 824]], ['ngeqslant', [10878, 824]], ['nges', [10878, 824]], ['nGg', [8921, 824]], ['ngsim', [8821]], ['nGt', [8811, 8402]], ['ngt', [8815]], ['ngtr', [8815]], ['nGtv', [8811, 824]], ['nharr', [8622]], ['nhArr', [8654]], ['nhpar', [10994]], ['ni', [8715]], ['nis', [8956]], ['nisd', [8954]], ['niv', [8715]], ['NJcy', [1034]], ['njcy', [1114]], ['nlarr', [8602]], ['nlArr', [8653]], ['nldr', [8229]], ['nlE', [8806, 824]], ['nle', [8816]], ['nleftarrow', [8602]], ['nLeftarrow', [8653]], ['nleftrightarrow', [8622]], ['nLeftrightarrow', [8654]], ['nleq', [8816]], ['nleqq', [8806, 824]], ['nleqslant', [10877, 824]], ['nles', [10877, 824]], ['nless', [8814]], ['nLl', [8920, 824]], ['nlsim', [8820]], ['nLt', [8810, 8402]], ['nlt', [8814]], ['nltri', [8938]], ['nltrie', [8940]], ['nLtv', [8810, 824]], ['nmid', [8740]], ['NoBreak', [8288]], ['NonBreakingSpace', [160]], ['nopf', [120159]], ['Nopf', [8469]], ['Not', [10988]], ['not', [172]], ['NotCongruent', [8802]], ['NotCupCap', [8813]], ['NotDoubleVerticalBar', [8742]], ['NotElement', [8713]], ['NotEqual', [8800]], ['NotEqualTilde', [8770, 824]], ['NotExists', [8708]], ['NotGreater', [8815]], ['NotGreaterEqual', [8817]], ['NotGreaterFullEqual', [8807, 824]], ['NotGreaterGreater', [8811, 824]], ['NotGreaterLess', [8825]], ['NotGreaterSlantEqual', [10878, 824]], ['NotGreaterTilde', [8821]], ['NotHumpDownHump', [8782, 824]], ['NotHumpEqual', [8783, 824]], ['notin', [8713]], ['notindot', [8949, 824]], ['notinE', [8953, 824]], ['notinva', [8713]], ['notinvb', [8951]], ['notinvc', [8950]], ['NotLeftTriangleBar', [10703, 824]], ['NotLeftTriangle', [8938]], ['NotLeftTriangleEqual', [8940]], ['NotLess', [8814]], ['NotLessEqual', [8816]], ['NotLessGreater', [8824]], ['NotLessLess', [8810, 824]], ['NotLessSlantEqual', [10877, 824]], ['NotLessTilde', [8820]], ['NotNestedGreaterGreater', [10914, 824]], ['NotNestedLessLess', [10913, 824]], ['notni', [8716]], ['notniva', [8716]], ['notnivb', [8958]], ['notnivc', [8957]], ['NotPrecedes', [8832]], ['NotPrecedesEqual', [10927, 824]], ['NotPrecedesSlantEqual', [8928]], ['NotReverseElement', [8716]], ['NotRightTriangleBar', [10704, 824]], ['NotRightTriangle', [8939]], ['NotRightTriangleEqual', [8941]], ['NotSquareSubset', [8847, 824]], ['NotSquareSubsetEqual', [8930]], ['NotSquareSuperset', [8848, 824]], ['NotSquareSupersetEqual', [8931]], ['NotSubset', [8834, 8402]], ['NotSubsetEqual', [8840]], ['NotSucceeds', [8833]], ['NotSucceedsEqual', [10928, 824]], ['NotSucceedsSlantEqual', [8929]], ['NotSucceedsTilde', [8831, 824]], ['NotSuperset', [8835, 8402]], ['NotSupersetEqual', [8841]], ['NotTilde', [8769]], ['NotTildeEqual', [8772]], ['NotTildeFullEqual', [8775]], ['NotTildeTilde', [8777]], ['NotVerticalBar', [8740]], ['nparallel', [8742]], ['npar', [8742]], ['nparsl', [11005, 8421]], ['npart', [8706, 824]], ['npolint', [10772]], ['npr', [8832]], ['nprcue', [8928]], ['nprec', [8832]], ['npreceq', [10927, 824]], ['npre', [10927, 824]], ['nrarrc', [10547, 824]], ['nrarr', [8603]], ['nrArr', [8655]], ['nrarrw', [8605, 824]], ['nrightarrow', [8603]], ['nRightarrow', [8655]], ['nrtri', [8939]], ['nrtrie', [8941]], ['nsc', [8833]], ['nsccue', [8929]], ['nsce', [10928, 824]], ['Nscr', [119977]], ['nscr', [120003]], ['nshortmid', [8740]], ['nshortparallel', [8742]], ['nsim', [8769]], ['nsime', [8772]], ['nsimeq', [8772]], ['nsmid', [8740]], ['nspar', [8742]], ['nsqsube', [8930]], ['nsqsupe', [8931]], ['nsub', [8836]], ['nsubE', [10949, 824]], ['nsube', [8840]], ['nsubset', [8834, 8402]], ['nsubseteq', [8840]], ['nsubseteqq', [10949, 824]], ['nsucc', [8833]], ['nsucceq', [10928, 824]], ['nsup', [8837]], ['nsupE', [10950, 824]], ['nsupe', [8841]], ['nsupset', [8835, 8402]], ['nsupseteq', [8841]], ['nsupseteqq', [10950, 824]], ['ntgl', [8825]], ['Ntilde', [209]], ['ntilde', [241]], ['ntlg', [8824]], ['ntriangleleft', [8938]], ['ntrianglelefteq', [8940]], ['ntriangleright', [8939]], ['ntrianglerighteq', [8941]], ['Nu', [925]], ['nu', [957]], ['num', [35]], ['numero', [8470]], ['numsp', [8199]], ['nvap', [8781, 8402]], ['nvdash', [8876]], ['nvDash', [8877]], ['nVdash', [8878]], ['nVDash', [8879]], ['nvge', [8805, 8402]], ['nvgt', [62, 8402]], ['nvHarr', [10500]], ['nvinfin', [10718]], ['nvlArr', [10498]], ['nvle', [8804, 8402]], ['nvlt', [60, 8402]], ['nvltrie', [8884, 8402]], ['nvrArr', [10499]], ['nvrtrie', [8885, 8402]], ['nvsim', [8764, 8402]], ['nwarhk', [10531]], ['nwarr', [8598]], ['nwArr', [8662]], ['nwarrow', [8598]], ['nwnear', [10535]], ['Oacute', [211]], ['oacute', [243]], ['oast', [8859]], ['Ocirc', [212]], ['ocirc', [244]], ['ocir', [8858]], ['Ocy', [1054]], ['ocy', [1086]], ['odash', [8861]], ['Odblac', [336]], ['odblac', [337]], ['odiv', [10808]], ['odot', [8857]], ['odsold', [10684]], ['OElig', [338]], ['oelig', [339]], ['ofcir', [10687]], ['Ofr', [120082]], ['ofr', [120108]], ['ogon', [731]], ['Ograve', [210]], ['ograve', [242]], ['ogt', [10689]], ['ohbar', [10677]], ['ohm', [937]], ['oint', [8750]], ['olarr', [8634]], ['olcir', [10686]], ['olcross', [10683]], ['oline', [8254]], ['olt', [10688]], ['Omacr', [332]], ['omacr', [333]], ['Omega', [937]], ['omega', [969]], ['Omicron', [927]], ['omicron', [959]], ['omid', [10678]], ['ominus', [8854]], ['Oopf', [120134]], ['oopf', [120160]], ['opar', [10679]], ['OpenCurlyDoubleQuote', [8220]], ['OpenCurlyQuote', [8216]], ['operp', [10681]], ['oplus', [8853]], ['orarr', [8635]], ['Or', [10836]], ['or', [8744]], ['ord', [10845]], ['order', [8500]], ['orderof', [8500]], ['ordf', [170]], ['ordm', [186]], ['origof', [8886]], ['oror', [10838]], ['orslope', [10839]], ['orv', [10843]], ['oS', [9416]], ['Oscr', [119978]], ['oscr', [8500]], ['Oslash', [216]], ['oslash', [248]], ['osol', [8856]], ['Otilde', [213]], ['otilde', [245]], ['otimesas', [10806]], ['Otimes', [10807]], ['otimes', [8855]], ['Ouml', [214]], ['ouml', [246]], ['ovbar', [9021]], ['OverBar', [8254]], ['OverBrace', [9182]], ['OverBracket', [9140]], ['OverParenthesis', [9180]], ['para', [182]], ['parallel', [8741]], ['par', [8741]], ['parsim', [10995]], ['parsl', [11005]], ['part', [8706]], ['PartialD', [8706]], ['Pcy', [1055]], ['pcy', [1087]], ['percnt', [37]], ['period', [46]], ['permil', [8240]], ['perp', [8869]], ['pertenk', [8241]], ['Pfr', [120083]], ['pfr', [120109]], ['Phi', [934]], ['phi', [966]], ['phiv', [981]], ['phmmat', [8499]], ['phone', [9742]], ['Pi', [928]], ['pi', [960]], ['pitchfork', [8916]], ['piv', [982]], ['planck', [8463]], ['planckh', [8462]], ['plankv', [8463]], ['plusacir', [10787]], ['plusb', [8862]], ['pluscir', [10786]], ['plus', [43]], ['plusdo', [8724]], ['plusdu', [10789]], ['pluse', [10866]], ['PlusMinus', [177]], ['plusmn', [177]], ['plussim', [10790]], ['plustwo', [10791]], ['pm', [177]], ['Poincareplane', [8460]], ['pointint', [10773]], ['popf', [120161]], ['Popf', [8473]], ['pound', [163]], ['prap', [10935]], ['Pr', [10939]], ['pr', [8826]], ['prcue', [8828]], ['precapprox', [10935]], ['prec', [8826]], ['preccurlyeq', [8828]], ['Precedes', [8826]], ['PrecedesEqual', [10927]], ['PrecedesSlantEqual', [8828]], ['PrecedesTilde', [8830]], ['preceq', [10927]], ['precnapprox', [10937]], ['precneqq', [10933]], ['precnsim', [8936]], ['pre', [10927]], ['prE', [10931]], ['precsim', [8830]], ['prime', [8242]], ['Prime', [8243]], ['primes', [8473]], ['prnap', [10937]], ['prnE', [10933]], ['prnsim', [8936]], ['prod', [8719]], ['Product', [8719]], ['profalar', [9006]], ['profline', [8978]], ['profsurf', [8979]], ['prop', [8733]], ['Proportional', [8733]], ['Proportion', [8759]], ['propto', [8733]], ['prsim', [8830]], ['prurel', [8880]], ['Pscr', [119979]], ['pscr', [120005]], ['Psi', [936]], ['psi', [968]], ['puncsp', [8200]], ['Qfr', [120084]], ['qfr', [120110]], ['qint', [10764]], ['qopf', [120162]], ['Qopf', [8474]], ['qprime', [8279]], ['Qscr', [119980]], ['qscr', [120006]], ['quaternions', [8461]], ['quatint', [10774]], ['quest', [63]], ['questeq', [8799]], ['quot', [34]], ['QUOT', [34]], ['rAarr', [8667]], ['race', [8765, 817]], ['Racute', [340]], ['racute', [341]], ['radic', [8730]], ['raemptyv', [10675]], ['rang', [10217]], ['Rang', [10219]], ['rangd', [10642]], ['range', [10661]], ['rangle', [10217]], ['raquo', [187]], ['rarrap', [10613]], ['rarrb', [8677]], ['rarrbfs', [10528]], ['rarrc', [10547]], ['rarr', [8594]], ['Rarr', [8608]], ['rArr', [8658]], ['rarrfs', [10526]], ['rarrhk', [8618]], ['rarrlp', [8620]], ['rarrpl', [10565]], ['rarrsim', [10612]], ['Rarrtl', [10518]], ['rarrtl', [8611]], ['rarrw', [8605]], ['ratail', [10522]], ['rAtail', [10524]], ['ratio', [8758]], ['rationals', [8474]], ['rbarr', [10509]], ['rBarr', [10511]], ['RBarr', [10512]], ['rbbrk', [10099]], ['rbrace', [125]], ['rbrack', [93]], ['rbrke', [10636]], ['rbrksld', [10638]], ['rbrkslu', [10640]], ['Rcaron', [344]], ['rcaron', [345]], ['Rcedil', [342]], ['rcedil', [343]], ['rceil', [8969]], ['rcub', [125]], ['Rcy', [1056]], ['rcy', [1088]], ['rdca', [10551]], ['rdldhar', [10601]], ['rdquo', [8221]], ['rdquor', [8221]], ['CloseCurlyDoubleQuote', [8221]], ['rdsh', [8627]], ['real', [8476]], ['realine', [8475]], ['realpart', [8476]], ['reals', [8477]], ['Re', [8476]], ['rect', [9645]], ['reg', [174]], ['REG', [174]], ['ReverseElement', [8715]], ['ReverseEquilibrium', [8651]], ['ReverseUpEquilibrium', [10607]], ['rfisht', [10621]], ['rfloor', [8971]], ['rfr', [120111]], ['Rfr', [8476]], ['rHar', [10596]], ['rhard', [8641]], ['rharu', [8640]], ['rharul', [10604]], ['Rho', [929]], ['rho', [961]], ['rhov', [1009]], ['RightAngleBracket', [10217]], ['RightArrowBar', [8677]], ['rightarrow', [8594]], ['RightArrow', [8594]], ['Rightarrow', [8658]], ['RightArrowLeftArrow', [8644]], ['rightarrowtail', [8611]], ['RightCeiling', [8969]], ['RightDoubleBracket', [10215]], ['RightDownTeeVector', [10589]], ['RightDownVectorBar', [10581]], ['RightDownVector', [8642]], ['RightFloor', [8971]], ['rightharpoondown', [8641]], ['rightharpoonup', [8640]], ['rightleftarrows', [8644]], ['rightleftharpoons', [8652]], ['rightrightarrows', [8649]], ['rightsquigarrow', [8605]], ['RightTeeArrow', [8614]], ['RightTee', [8866]], ['RightTeeVector', [10587]], ['rightthreetimes', [8908]], ['RightTriangleBar', [10704]], ['RightTriangle', [8883]], ['RightTriangleEqual', [8885]], ['RightUpDownVector', [10575]], ['RightUpTeeVector', [10588]], ['RightUpVectorBar', [10580]], ['RightUpVector', [8638]], ['RightVectorBar', [10579]], ['RightVector', [8640]], ['ring', [730]], ['risingdotseq', [8787]], ['rlarr', [8644]], ['rlhar', [8652]], ['rlm', [8207]], ['rmoustache', [9137]], ['rmoust', [9137]], ['rnmid', [10990]], ['roang', [10221]], ['roarr', [8702]], ['robrk', [10215]], ['ropar', [10630]], ['ropf', [120163]], ['Ropf', [8477]], ['roplus', [10798]], ['rotimes', [10805]], ['RoundImplies', [10608]], ['rpar', [41]], ['rpargt', [10644]], ['rppolint', [10770]], ['rrarr', [8649]], ['Rrightarrow', [8667]], ['rsaquo', [8250]], ['rscr', [120007]], ['Rscr', [8475]], ['rsh', [8625]], ['Rsh', [8625]], ['rsqb', [93]], ['rsquo', [8217]], ['rsquor', [8217]], ['CloseCurlyQuote', [8217]], ['rthree', [8908]], ['rtimes', [8906]], ['rtri', [9657]], ['rtrie', [8885]], ['rtrif', [9656]], ['rtriltri', [10702]], ['RuleDelayed', [10740]], ['ruluhar', [10600]], ['rx', [8478]], ['Sacute', [346]], ['sacute', [347]], ['sbquo', [8218]], ['scap', [10936]], ['Scaron', [352]], ['scaron', [353]], ['Sc', [10940]], ['sc', [8827]], ['sccue', [8829]], ['sce', [10928]], ['scE', [10932]], ['Scedil', [350]], ['scedil', [351]], ['Scirc', [348]], ['scirc', [349]], ['scnap', [10938]], ['scnE', [10934]], ['scnsim', [8937]], ['scpolint', [10771]], ['scsim', [8831]], ['Scy', [1057]], ['scy', [1089]], ['sdotb', [8865]], ['sdot', [8901]], ['sdote', [10854]], ['searhk', [10533]], ['searr', [8600]], ['seArr', [8664]], ['searrow', [8600]], ['sect', [167]], ['semi', [59]], ['seswar', [10537]], ['setminus', [8726]], ['setmn', [8726]], ['sext', [10038]], ['Sfr', [120086]], ['sfr', [120112]], ['sfrown', [8994]], ['sharp', [9839]], ['SHCHcy', [1065]], ['shchcy', [1097]], ['SHcy', [1064]], ['shcy', [1096]], ['ShortDownArrow', [8595]], ['ShortLeftArrow', [8592]], ['shortmid', [8739]], ['shortparallel', [8741]], ['ShortRightArrow', [8594]], ['ShortUpArrow', [8593]], ['shy', [173]], ['Sigma', [931]], ['sigma', [963]], ['sigmaf', [962]], ['sigmav', [962]], ['sim', [8764]], ['simdot', [10858]], ['sime', [8771]], ['simeq', [8771]], ['simg', [10910]], ['simgE', [10912]], ['siml', [10909]], ['simlE', [10911]], ['simne', [8774]], ['simplus', [10788]], ['simrarr', [10610]], ['slarr', [8592]], ['SmallCircle', [8728]], ['smallsetminus', [8726]], ['smashp', [10803]], ['smeparsl', [10724]], ['smid', [8739]], ['smile', [8995]], ['smt', [10922]], ['smte', [10924]], ['smtes', [10924, 65024]], ['SOFTcy', [1068]], ['softcy', [1100]], ['solbar', [9023]], ['solb', [10692]], ['sol', [47]], ['Sopf', [120138]], ['sopf', [120164]], ['spades', [9824]], ['spadesuit', [9824]], ['spar', [8741]], ['sqcap', [8851]], ['sqcaps', [8851, 65024]], ['sqcup', [8852]], ['sqcups', [8852, 65024]], ['Sqrt', [8730]], ['sqsub', [8847]], ['sqsube', [8849]], ['sqsubset', [8847]], ['sqsubseteq', [8849]], ['sqsup', [8848]], ['sqsupe', [8850]], ['sqsupset', [8848]], ['sqsupseteq', [8850]], ['square', [9633]], ['Square', [9633]], ['SquareIntersection', [8851]], ['SquareSubset', [8847]], ['SquareSubsetEqual', [8849]], ['SquareSuperset', [8848]], ['SquareSupersetEqual', [8850]], ['SquareUnion', [8852]], ['squarf', [9642]], ['squ', [9633]], ['squf', [9642]], ['srarr', [8594]], ['Sscr', [119982]], ['sscr', [120008]], ['ssetmn', [8726]], ['ssmile', [8995]], ['sstarf', [8902]], ['Star', [8902]], ['star', [9734]], ['starf', [9733]], ['straightepsilon', [1013]], ['straightphi', [981]], ['strns', [175]], ['sub', [8834]], ['Sub', [8912]], ['subdot', [10941]], ['subE', [10949]], ['sube', [8838]], ['subedot', [10947]], ['submult', [10945]], ['subnE', [10955]], ['subne', [8842]], ['subplus', [10943]], ['subrarr', [10617]], ['subset', [8834]], ['Subset', [8912]], ['subseteq', [8838]], ['subseteqq', [10949]], ['SubsetEqual', [8838]], ['subsetneq', [8842]], ['subsetneqq', [10955]], ['subsim', [10951]], ['subsub', [10965]], ['subsup', [10963]], ['succapprox', [10936]], ['succ', [8827]], ['succcurlyeq', [8829]], ['Succeeds', [8827]], ['SucceedsEqual', [10928]], ['SucceedsSlantEqual', [8829]], ['SucceedsTilde', [8831]], ['succeq', [10928]], ['succnapprox', [10938]], ['succneqq', [10934]], ['succnsim', [8937]], ['succsim', [8831]], ['SuchThat', [8715]], ['sum', [8721]], ['Sum', [8721]], ['sung', [9834]], ['sup1', [185]], ['sup2', [178]], ['sup3', [179]], ['sup', [8835]], ['Sup', [8913]], ['supdot', [10942]], ['supdsub', [10968]], ['supE', [10950]], ['supe', [8839]], ['supedot', [10948]], ['Superset', [8835]], ['SupersetEqual', [8839]], ['suphsol', [10185]], ['suphsub', [10967]], ['suplarr', [10619]], ['supmult', [10946]], ['supnE', [10956]], ['supne', [8843]], ['supplus', [10944]], ['supset', [8835]], ['Supset', [8913]], ['supseteq', [8839]], ['supseteqq', [10950]], ['supsetneq', [8843]], ['supsetneqq', [10956]], ['supsim', [10952]], ['supsub', [10964]], ['supsup', [10966]], ['swarhk', [10534]], ['swarr', [8601]], ['swArr', [8665]], ['swarrow', [8601]], ['swnwar', [10538]], ['szlig', [223]], ['Tab', [9]], ['target', [8982]], ['Tau', [932]], ['tau', [964]], ['tbrk', [9140]], ['Tcaron', [356]], ['tcaron', [357]], ['Tcedil', [354]], ['tcedil', [355]], ['Tcy', [1058]], ['tcy', [1090]], ['tdot', [8411]], ['telrec', [8981]], ['Tfr', [120087]], ['tfr', [120113]], ['there4', [8756]], ['therefore', [8756]], ['Therefore', [8756]], ['Theta', [920]], ['theta', [952]], ['thetasym', [977]], ['thetav', [977]], ['thickapprox', [8776]], ['thicksim', [8764]], ['ThickSpace', [8287, 8202]], ['ThinSpace', [8201]], ['thinsp', [8201]], ['thkap', [8776]], ['thksim', [8764]], ['THORN', [222]], ['thorn', [254]], ['tilde', [732]], ['Tilde', [8764]], ['TildeEqual', [8771]], ['TildeFullEqual', [8773]], ['TildeTilde', [8776]], ['timesbar', [10801]], ['timesb', [8864]], ['times', [215]], ['timesd', [10800]], ['tint', [8749]], ['toea', [10536]], ['topbot', [9014]], ['topcir', [10993]], ['top', [8868]], ['Topf', [120139]], ['topf', [120165]], ['topfork', [10970]], ['tosa', [10537]], ['tprime', [8244]], ['trade', [8482]], ['TRADE', [8482]], ['triangle', [9653]], ['triangledown', [9663]], ['triangleleft', [9667]], ['trianglelefteq', [8884]], ['triangleq', [8796]], ['triangleright', [9657]], ['trianglerighteq', [8885]], ['tridot', [9708]], ['trie', [8796]], ['triminus', [10810]], ['TripleDot', [8411]], ['triplus', [10809]], ['trisb', [10701]], ['tritime', [10811]], ['trpezium', [9186]], ['Tscr', [119983]], ['tscr', [120009]], ['TScy', [1062]], ['tscy', [1094]], ['TSHcy', [1035]], ['tshcy', [1115]], ['Tstrok', [358]], ['tstrok', [359]], ['twixt', [8812]], ['twoheadleftarrow', [8606]], ['twoheadrightarrow', [8608]], ['Uacute', [218]], ['uacute', [250]], ['uarr', [8593]], ['Uarr', [8607]], ['uArr', [8657]], ['Uarrocir', [10569]], ['Ubrcy', [1038]], ['ubrcy', [1118]], ['Ubreve', [364]], ['ubreve', [365]], ['Ucirc', [219]], ['ucirc', [251]], ['Ucy', [1059]], ['ucy', [1091]], ['udarr', [8645]], ['Udblac', [368]], ['udblac', [369]], ['udhar', [10606]], ['ufisht', [10622]], ['Ufr', [120088]], ['ufr', [120114]], ['Ugrave', [217]], ['ugrave', [249]], ['uHar', [10595]], ['uharl', [8639]], ['uharr', [8638]], ['uhblk', [9600]], ['ulcorn', [8988]], ['ulcorner', [8988]], ['ulcrop', [8975]], ['ultri', [9720]], ['Umacr', [362]], ['umacr', [363]], ['uml', [168]], ['UnderBar', [95]], ['UnderBrace', [9183]], ['UnderBracket', [9141]], ['UnderParenthesis', [9181]], ['Union', [8899]], ['UnionPlus', [8846]], ['Uogon', [370]], ['uogon', [371]], ['Uopf', [120140]], ['uopf', [120166]], ['UpArrowBar', [10514]], ['uparrow', [8593]], ['UpArrow', [8593]], ['Uparrow', [8657]], ['UpArrowDownArrow', [8645]], ['updownarrow', [8597]], ['UpDownArrow', [8597]], ['Updownarrow', [8661]], ['UpEquilibrium', [10606]], ['upharpoonleft', [8639]], ['upharpoonright', [8638]], ['uplus', [8846]], ['UpperLeftArrow', [8598]], ['UpperRightArrow', [8599]], ['upsi', [965]], ['Upsi', [978]], ['upsih', [978]], ['Upsilon', [933]], ['upsilon', [965]], ['UpTeeArrow', [8613]], ['UpTee', [8869]], ['upuparrows', [8648]], ['urcorn', [8989]], ['urcorner', [8989]], ['urcrop', [8974]], ['Uring', [366]], ['uring', [367]], ['urtri', [9721]], ['Uscr', [119984]], ['uscr', [120010]], ['utdot', [8944]], ['Utilde', [360]], ['utilde', [361]], ['utri', [9653]], ['utrif', [9652]], ['uuarr', [8648]], ['Uuml', [220]], ['uuml', [252]], ['uwangle', [10663]], ['vangrt', [10652]], ['varepsilon', [1013]], ['varkappa', [1008]], ['varnothing', [8709]], ['varphi', [981]], ['varpi', [982]], ['varpropto', [8733]], ['varr', [8597]], ['vArr', [8661]], ['varrho', [1009]], ['varsigma', [962]], ['varsubsetneq', [8842, 65024]], ['varsubsetneqq', [10955, 65024]], ['varsupsetneq', [8843, 65024]], ['varsupsetneqq', [10956, 65024]], ['vartheta', [977]], ['vartriangleleft', [8882]], ['vartriangleright', [8883]], ['vBar', [10984]], ['Vbar', [10987]], ['vBarv', [10985]], ['Vcy', [1042]], ['vcy', [1074]], ['vdash', [8866]], ['vDash', [8872]], ['Vdash', [8873]], ['VDash', [8875]], ['Vdashl', [10982]], ['veebar', [8891]], ['vee', [8744]], ['Vee', [8897]], ['veeeq', [8794]], ['vellip', [8942]], ['verbar', [124]], ['Verbar', [8214]], ['vert', [124]], ['Vert', [8214]], ['VerticalBar', [8739]], ['VerticalLine', [124]], ['VerticalSeparator', [10072]], ['VerticalTilde', [8768]], ['VeryThinSpace', [8202]], ['Vfr', [120089]], ['vfr', [120115]], ['vltri', [8882]], ['vnsub', [8834, 8402]], ['vnsup', [8835, 8402]], ['Vopf', [120141]], ['vopf', [120167]], ['vprop', [8733]], ['vrtri', [8883]], ['Vscr', [119985]], ['vscr', [120011]], ['vsubnE', [10955, 65024]], ['vsubne', [8842, 65024]], ['vsupnE', [10956, 65024]], ['vsupne', [8843, 65024]], ['Vvdash', [8874]], ['vzigzag', [10650]], ['Wcirc', [372]], ['wcirc', [373]], ['wedbar', [10847]], ['wedge', [8743]], ['Wedge', [8896]], ['wedgeq', [8793]], ['weierp', [8472]], ['Wfr', [120090]], ['wfr', [120116]], ['Wopf', [120142]], ['wopf', [120168]], ['wp', [8472]], ['wr', [8768]], ['wreath', [8768]], ['Wscr', [119986]], ['wscr', [120012]], ['xcap', [8898]], ['xcirc', [9711]], ['xcup', [8899]], ['xdtri', [9661]], ['Xfr', [120091]], ['xfr', [120117]], ['xharr', [10231]], ['xhArr', [10234]], ['Xi', [926]], ['xi', [958]], ['xlarr', [10229]], ['xlArr', [10232]], ['xmap', [10236]], ['xnis', [8955]], ['xodot', [10752]], ['Xopf', [120143]], ['xopf', [120169]], ['xoplus', [10753]], ['xotime', [10754]], ['xrarr', [10230]], ['xrArr', [10233]], ['Xscr', [119987]], ['xscr', [120013]], ['xsqcup', [10758]], ['xuplus', [10756]], ['xutri', [9651]], ['xvee', [8897]], ['xwedge', [8896]], ['Yacute', [221]], ['yacute', [253]], ['YAcy', [1071]], ['yacy', [1103]], ['Ycirc', [374]], ['ycirc', [375]], ['Ycy', [1067]], ['ycy', [1099]], ['yen', [165]], ['Yfr', [120092]], ['yfr', [120118]], ['YIcy', [1031]], ['yicy', [1111]], ['Yopf', [120144]], ['yopf', [120170]], ['Yscr', [119988]], ['yscr', [120014]], ['YUcy', [1070]], ['yucy', [1102]], ['yuml', [255]], ['Yuml', [376]], ['Zacute', [377]], ['zacute', [378]], ['Zcaron', [381]], ['zcaron', [382]], ['Zcy', [1047]], ['zcy', [1079]], ['Zdot', [379]], ['zdot', [380]], ['zeetrf', [8488]], ['ZeroWidthSpace', [8203]], ['Zeta', [918]], ['zeta', [950]], ['zfr', [120119]], ['Zfr', [8488]], ['ZHcy', [1046]], ['zhcy', [1078]], ['zigrarr', [8669]], ['zopf', [120171]], ['Zopf', [8484]], ['Zscr', [119989]], ['zscr', [120015]], ['zwj', [8205]], ['zwnj', [8204]]];
var DECODE_ONLY_ENTITIES = [['NewLine', [10]]];
var alphaIndex = {};
var charIndex = {};
createIndexes(alphaIndex, charIndex);
var Html5Entities = /** @class */ (function () {
    function Html5Entities() {
    }
    Html5Entities.prototype.decode = function (str) {
        if (!str || !str.length) {
            return '';
        }
        return str.replace(/&(#?[\w\d]+);?/g, function (s, entity) {
            var chr;
            if (entity.charAt(0) === "#") {
                var code = entity.charAt(1) === 'x' ?
                    parseInt(entity.substr(2).toLowerCase(), 16) :
                    parseInt(entity.substr(1));
                if (!isNaN(code) || code >= -32768) {
                    if (code <= 65535) {
                        chr = String.fromCharCode(code);
                    }
                    else {
                        chr = surrogate_pairs_1.fromCodePoint(code);
                    }
                }
            }
            else {
                chr = alphaIndex[entity];
            }
            return chr || s;
        });
    };
    Html5Entities.decode = function (str) {
        return new Html5Entities().decode(str);
    };
    Html5Entities.prototype.encode = function (str) {
        if (!str || !str.length) {
            return '';
        }
        var strLength = str.length;
        var result = '';
        var i = 0;
        while (i < strLength) {
            var charInfo = charIndex[str.charCodeAt(i)];
            if (charInfo) {
                var alpha = charInfo[str.charCodeAt(i + 1)];
                if (alpha) {
                    i++;
                }
                else {
                    alpha = charInfo[''];
                }
                if (alpha) {
                    result += "&" + alpha + ";";
                    i++;
                    continue;
                }
            }
            result += str.charAt(i);
            i++;
        }
        return result;
    };
    Html5Entities.encode = function (str) {
        return new Html5Entities().encode(str);
    };
    Html5Entities.prototype.encodeNonUTF = function (str) {
        if (!str || !str.length) {
            return '';
        }
        var strLength = str.length;
        var result = '';
        var i = 0;
        while (i < strLength) {
            var c = str.charCodeAt(i);
            var charInfo = charIndex[c];
            if (charInfo) {
                var alpha = charInfo[str.charCodeAt(i + 1)];
                if (alpha) {
                    i++;
                }
                else {
                    alpha = charInfo[''];
                }
                if (alpha) {
                    result += "&" + alpha + ";";
                    i++;
                    continue;
                }
            }
            if (c < 32 || c > 126) {
                if (c >= surrogate_pairs_1.highSurrogateFrom && c <= surrogate_pairs_1.highSurrogateTo) {
                    result += '&#' + surrogate_pairs_1.getCodePoint(str, i) + ';';
                    i++;
                }
                else {
                    result += '&#' + c + ';';
                }
            }
            else {
                result += str.charAt(i);
            }
            i++;
        }
        return result;
    };
    Html5Entities.encodeNonUTF = function (str) {
        return new Html5Entities().encodeNonUTF(str);
    };
    Html5Entities.prototype.encodeNonASCII = function (str) {
        if (!str || !str.length) {
            return '';
        }
        var strLength = str.length;
        var result = '';
        var i = 0;
        while (i < strLength) {
            var c = str.charCodeAt(i);
            if (c <= 255) {
                result += str[i++];
                continue;
            }
            if (c >= surrogate_pairs_1.highSurrogateFrom && c <= surrogate_pairs_1.highSurrogateTo) {
                result += '&#' + surrogate_pairs_1.getCodePoint(str, i) + ';';
                i += 2;
            }
            else {
                result += '&#' + c + ';';
                i++;
            }
        }
        return result;
    };
    Html5Entities.encodeNonASCII = function (str) {
        return new Html5Entities().encodeNonASCII(str);
    };
    return Html5Entities;
}());
exports.Html5Entities = Html5Entities;
function createIndexes(alphaIndex, charIndex) {
    var i = ENTITIES.length;
    while (i--) {
        var _a = ENTITIES[i], alpha = _a[0], _b = _a[1], chr = _b[0], chr2 = _b[1];
        var addChar = (chr < 32 || chr > 126) || chr === 62 || chr === 60 || chr === 38 || chr === 34 || chr === 39;
        var charInfo = void 0;
        if (addChar) {
            charInfo = charIndex[chr] = charIndex[chr] || {};
        }
        if (chr2) {
            alphaIndex[alpha] = String.fromCharCode(chr) + String.fromCharCode(chr2);
            addChar && (charInfo[chr2] = alpha);
        }
        else {
            alphaIndex[alpha] = String.fromCharCode(chr);
            addChar && (charInfo[''] = alpha);
        }
    }
    i = DECODE_ONLY_ENTITIES.length;
    while (i--) {
        var _c = DECODE_ONLY_ENTITIES[i], alpha = _c[0], _d = _c[1], chr = _d[0], chr2 = _d[1];
        alphaIndex[alpha] = String.fromCharCode(chr) + (chr2 ? String.fromCharCode(chr2) : '');
    }
}


/***/ }),

/***/ "./node_modules/html-entities/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/html-entities/lib/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var xml_entities_1 = __webpack_require__(/*! ./xml-entities */ "./node_modules/html-entities/lib/xml-entities.js");
exports.XmlEntities = xml_entities_1.XmlEntities;
var html4_entities_1 = __webpack_require__(/*! ./html4-entities */ "./node_modules/html-entities/lib/html4-entities.js");
exports.Html4Entities = html4_entities_1.Html4Entities;
var html5_entities_1 = __webpack_require__(/*! ./html5-entities */ "./node_modules/html-entities/lib/html5-entities.js");
exports.Html5Entities = html5_entities_1.Html5Entities;
exports.AllHtmlEntities = html5_entities_1.Html5Entities;


/***/ }),

/***/ "./node_modules/html-entities/lib/surrogate-pairs.js":
/*!***********************************************************!*\
  !*** ./node_modules/html-entities/lib/surrogate-pairs.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fromCodePoint = String.fromCodePoint || function (astralCodePoint) {
    return String.fromCharCode(Math.floor((astralCodePoint - 0x10000) / 0x400) + 0xD800, (astralCodePoint - 0x10000) % 0x400 + 0xDC00);
};
exports.getCodePoint = String.prototype.codePointAt ?
    function (input, position) {
        return input.codePointAt(position);
    } :
    function (input, position) {
        return (input.charCodeAt(position) - 0xD800) * 0x400
            + input.charCodeAt(position + 1) - 0xDC00 + 0x10000;
    };
exports.highSurrogateFrom = 0xD800;
exports.highSurrogateTo = 0xDBFF;


/***/ }),

/***/ "./node_modules/html-entities/lib/xml-entities.js":
/*!********************************************************!*\
  !*** ./node_modules/html-entities/lib/xml-entities.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var surrogate_pairs_1 = __webpack_require__(/*! ./surrogate-pairs */ "./node_modules/html-entities/lib/surrogate-pairs.js");
var ALPHA_INDEX = {
    '&lt': '<',
    '&gt': '>',
    '&quot': '"',
    '&apos': '\'',
    '&amp': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&apos;': '\'',
    '&amp;': '&'
};
var CHAR_INDEX = {
    60: 'lt',
    62: 'gt',
    34: 'quot',
    39: 'apos',
    38: 'amp'
};
var CHAR_S_INDEX = {
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&apos;',
    '&': '&amp;'
};
var XmlEntities = /** @class */ (function () {
    function XmlEntities() {
    }
    XmlEntities.prototype.encode = function (str) {
        if (!str || !str.length) {
            return '';
        }
        return str.replace(/[<>"'&]/g, function (s) {
            return CHAR_S_INDEX[s];
        });
    };
    XmlEntities.encode = function (str) {
        return new XmlEntities().encode(str);
    };
    XmlEntities.prototype.decode = function (str) {
        if (!str || !str.length) {
            return '';
        }
        return str.replace(/&#?[0-9a-zA-Z]+;?/g, function (s) {
            if (s.charAt(1) === '#') {
                var code = s.charAt(2).toLowerCase() === 'x' ?
                    parseInt(s.substr(3), 16) :
                    parseInt(s.substr(2));
                if (!isNaN(code) || code >= -32768) {
                    if (code <= 65535) {
                        return String.fromCharCode(code);
                    }
                    else {
                        return surrogate_pairs_1.fromCodePoint(code);
                    }
                }
                return '';
            }
            return ALPHA_INDEX[s] || s;
        });
    };
    XmlEntities.decode = function (str) {
        return new XmlEntities().decode(str);
    };
    XmlEntities.prototype.encodeNonUTF = function (str) {
        if (!str || !str.length) {
            return '';
        }
        var strLength = str.length;
        var result = '';
        var i = 0;
        while (i < strLength) {
            var c = str.charCodeAt(i);
            var alpha = CHAR_INDEX[c];
            if (alpha) {
                result += "&" + alpha + ";";
                i++;
                continue;
            }
            if (c < 32 || c > 126) {
                if (c >= surrogate_pairs_1.highSurrogateFrom && c <= surrogate_pairs_1.highSurrogateTo) {
                    result += '&#' + surrogate_pairs_1.getCodePoint(str, i) + ';';
                    i++;
                }
                else {
                    result += '&#' + c + ';';
                }
            }
            else {
                result += str.charAt(i);
            }
            i++;
        }
        return result;
    };
    XmlEntities.encodeNonUTF = function (str) {
        return new XmlEntities().encodeNonUTF(str);
    };
    XmlEntities.prototype.encodeNonASCII = function (str) {
        if (!str || !str.length) {
            return '';
        }
        var strLength = str.length;
        var result = '';
        var i = 0;
        while (i < strLength) {
            var c = str.charCodeAt(i);
            if (c <= 255) {
                result += str[i++];
                continue;
            }
            if (c >= surrogate_pairs_1.highSurrogateFrom && c <= surrogate_pairs_1.highSurrogateTo) {
                result += '&#' + surrogate_pairs_1.getCodePoint(str, i) + ';';
                i++;
            }
            else {
                result += '&#' + c + ';';
            }
            i++;
        }
        return result;
    };
    XmlEntities.encodeNonASCII = function (str) {
        return new XmlEntities().encodeNonASCII(str);
    };
    return XmlEntities;
}());
exports.XmlEntities = XmlEntities;


/***/ }),

/***/ "./node_modules/loglevel/lib/loglevel.js":
/*!***********************************************!*\
  !*** ./node_modules/loglevel/lib/loglevel.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
* loglevel - https://github.com/pimterry/loglevel
*
* Copyright (c) 2013 Tim Perry
* Licensed under the MIT license.
*/
(function (root, definition) {
    "use strict";
    if (true) {
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(this, function () {
    "use strict";

    // Slightly dubious tricks to cut down minimized file size
    var noop = function() {};
    var undefinedType = "undefined";
    var isIE = (typeof window !== undefinedType) && (typeof window.navigator !== undefinedType) && (
        /Trident\/|MSIE /.test(window.navigator.userAgent)
    );

    var logMethods = [
        "trace",
        "debug",
        "info",
        "warn",
        "error"
    ];

    // Cross-browser bind equivalent that works at least back to IE6
    function bindMethod(obj, methodName) {
        var method = obj[methodName];
        if (typeof method.bind === 'function') {
            return method.bind(obj);
        } else {
            try {
                return Function.prototype.bind.call(method, obj);
            } catch (e) {
                // Missing bind shim or IE8 + Modernizr, fallback to wrapping
                return function() {
                    return Function.prototype.apply.apply(method, [obj, arguments]);
                };
            }
        }
    }

    // Trace() doesn't print the message in IE, so for that case we need to wrap it
    function traceForIE() {
        if (console.log) {
            if (console.log.apply) {
                console.log.apply(console, arguments);
            } else {
                // In old IE, native console methods themselves don't have apply().
                Function.prototype.apply.apply(console.log, [console, arguments]);
            }
        }
        if (console.trace) console.trace();
    }

    // Build the best logging method possible for this env
    // Wherever possible we want to bind, not wrap, to preserve stack traces
    function realMethod(methodName) {
        if (methodName === 'debug') {
            methodName = 'log';
        }

        if (typeof console === undefinedType) {
            return false; // No method possible, for now - fixed later by enableLoggingWhenConsoleArrives
        } else if (methodName === 'trace' && isIE) {
            return traceForIE;
        } else if (console[methodName] !== undefined) {
            return bindMethod(console, methodName);
        } else if (console.log !== undefined) {
            return bindMethod(console, 'log');
        } else {
            return noop;
        }
    }

    // These private functions always need `this` to be set properly

    function replaceLoggingMethods(level, loggerName) {
        /*jshint validthis:true */
        for (var i = 0; i < logMethods.length; i++) {
            var methodName = logMethods[i];
            this[methodName] = (i < level) ?
                noop :
                this.methodFactory(methodName, level, loggerName);
        }

        // Define log.log as an alias for log.debug
        this.log = this.debug;
    }

    // In old IE versions, the console isn't present until you first open it.
    // We build realMethod() replacements here that regenerate logging methods
    function enableLoggingWhenConsoleArrives(methodName, level, loggerName) {
        return function () {
            if (typeof console !== undefinedType) {
                replaceLoggingMethods.call(this, level, loggerName);
                this[methodName].apply(this, arguments);
            }
        };
    }

    // By default, we use closely bound real methods wherever possible, and
    // otherwise we wait for a console to appear, and then try again.
    function defaultMethodFactory(methodName, level, loggerName) {
        /*jshint validthis:true */
        return realMethod(methodName) ||
               enableLoggingWhenConsoleArrives.apply(this, arguments);
    }

    function Logger(name, defaultLevel, factory) {
      var self = this;
      var currentLevel;

      var storageKey = "loglevel";
      if (typeof name === "string") {
        storageKey += ":" + name;
      } else if (typeof name === "symbol") {
        storageKey = undefined;
      }

      function persistLevelIfPossible(levelNum) {
          var levelName = (logMethods[levelNum] || 'silent').toUpperCase();

          if (typeof window === undefinedType || !storageKey) return;

          // Use localStorage if available
          try {
              window.localStorage[storageKey] = levelName;
              return;
          } catch (ignore) {}

          // Use session cookie as fallback
          try {
              window.document.cookie =
                encodeURIComponent(storageKey) + "=" + levelName + ";";
          } catch (ignore) {}
      }

      function getPersistedLevel() {
          var storedLevel;

          if (typeof window === undefinedType || !storageKey) return;

          try {
              storedLevel = window.localStorage[storageKey];
          } catch (ignore) {}

          // Fallback to cookies if local storage gives us nothing
          if (typeof storedLevel === undefinedType) {
              try {
                  var cookie = window.document.cookie;
                  var location = cookie.indexOf(
                      encodeURIComponent(storageKey) + "=");
                  if (location !== -1) {
                      storedLevel = /^([^;]+)/.exec(cookie.slice(location))[1];
                  }
              } catch (ignore) {}
          }

          // If the stored level is not valid, treat it as if nothing was stored.
          if (self.levels[storedLevel] === undefined) {
              storedLevel = undefined;
          }

          return storedLevel;
      }

      /*
       *
       * Public logger API - see https://github.com/pimterry/loglevel for details
       *
       */

      self.name = name;

      self.levels = { "TRACE": 0, "DEBUG": 1, "INFO": 2, "WARN": 3,
          "ERROR": 4, "SILENT": 5};

      self.methodFactory = factory || defaultMethodFactory;

      self.getLevel = function () {
          return currentLevel;
      };

      self.setLevel = function (level, persist) {
          if (typeof level === "string" && self.levels[level.toUpperCase()] !== undefined) {
              level = self.levels[level.toUpperCase()];
          }
          if (typeof level === "number" && level >= 0 && level <= self.levels.SILENT) {
              currentLevel = level;
              if (persist !== false) {  // defaults to true
                  persistLevelIfPossible(level);
              }
              replaceLoggingMethods.call(self, level, name);
              if (typeof console === undefinedType && level < self.levels.SILENT) {
                  return "No console available for logging";
              }
          } else {
              throw "log.setLevel() called with invalid level: " + level;
          }
      };

      self.setDefaultLevel = function (level) {
          if (!getPersistedLevel()) {
              self.setLevel(level, false);
          }
      };

      self.enableAll = function(persist) {
          self.setLevel(self.levels.TRACE, persist);
      };

      self.disableAll = function(persist) {
          self.setLevel(self.levels.SILENT, persist);
      };

      // Initialize with the right level
      var initialLevel = getPersistedLevel();
      if (initialLevel == null) {
          initialLevel = defaultLevel == null ? "WARN" : defaultLevel;
      }
      self.setLevel(initialLevel, false);
    }

    /*
     *
     * Top-level API
     *
     */

    var defaultLogger = new Logger();

    var _loggersByName = {};
    defaultLogger.getLogger = function getLogger(name) {
        if ((typeof name !== "symbol" && typeof name !== "string") || name === "") {
          throw new TypeError("You must supply a name when creating a logger.");
        }

        var logger = _loggersByName[name];
        if (!logger) {
          logger = _loggersByName[name] = new Logger(
            name, defaultLogger.getLevel(), defaultLogger.methodFactory);
        }
        return logger;
    };

    // Grab the current global log variable in case of overwrite
    var _log = (typeof window !== undefinedType) ? window.log : undefined;
    defaultLogger.noConflict = function() {
        if (typeof window !== undefinedType &&
               window.log === defaultLogger) {
            window.log = _log;
        }

        return defaultLogger;
    };

    defaultLogger.getLoggers = function getLoggers() {
        return _loggersByName;
    };

    // ES6 default export, for compatibility
    defaultLogger['default'] = defaultLogger;

    return defaultLogger;
}));


/***/ }),

/***/ "./node_modules/punycode/punycode.js":
/*!*******************************************!*\
  !*** ./node_modules/punycode/punycode.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.3.2 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports =  true && exports &&
		!exports.nodeType && exports;
	var freeModule =  true && module &&
		!module.nodeType && module;
	var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * http://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.3.2',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return punycode;
		}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}(this));


/***/ }),

/***/ "./node_modules/querystring/decode.js":
/*!********************************************!*\
  !*** ./node_modules/querystring/decode.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (Array.isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};


/***/ }),

/***/ "./node_modules/querystring/encode.js":
/*!********************************************!*\
  !*** ./node_modules/querystring/encode.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return Object.keys(obj).map(function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (Array.isArray(obj[k])) {
        return obj[k].map(function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};


/***/ }),

/***/ "./node_modules/querystring/index.js":
/*!*******************************************!*\
  !*** ./node_modules/querystring/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring/encode.js");


/***/ }),

/***/ "./node_modules/sockjs-client/dist/sockjs.js":
/*!***************************************************!*\
  !*** ./node_modules/sockjs-client/dist/sockjs.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* sockjs-client v1.5.1 | http://sockjs.org | MIT license */
(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c=undefined;if(!f&&c)return require(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u=undefined,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
'use strict';

var transportList = require('./transport-list');

module.exports = require('./main')(transportList);

// TODO can't get rid of this until all servers do
if ('_sockjs_onload' in global) {
  setTimeout(global._sockjs_onload, 1);
}

}).call(this,typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./main":14,"./transport-list":16}],2:[function(require,module,exports){
'use strict';

var inherits = require('inherits')
  , Event = require('./event')
  ;

function CloseEvent() {
  Event.call(this);
  this.initEvent('close', false, false);
  this.wasClean = false;
  this.code = 0;
  this.reason = '';
}

inherits(CloseEvent, Event);

module.exports = CloseEvent;

},{"./event":4,"inherits":57}],3:[function(require,module,exports){
'use strict';

var inherits = require('inherits')
  , EventTarget = require('./eventtarget')
  ;

function EventEmitter() {
  EventTarget.call(this);
}

inherits(EventEmitter, EventTarget);

EventEmitter.prototype.removeAllListeners = function(type) {
  if (type) {
    delete this._listeners[type];
  } else {
    this._listeners = {};
  }
};

EventEmitter.prototype.once = function(type, listener) {
  var self = this
    , fired = false;

  function g() {
    self.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  this.on(type, g);
};

EventEmitter.prototype.emit = function() {
  var type = arguments[0];
  var listeners = this._listeners[type];
  if (!listeners) {
    return;
  }
  // equivalent of Array.prototype.slice.call(arguments, 1);
  var l = arguments.length;
  var args = new Array(l - 1);
  for (var ai = 1; ai < l; ai++) {
    args[ai - 1] = arguments[ai];
  }
  for (var i = 0; i < listeners.length; i++) {
    listeners[i].apply(this, args);
  }
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener = EventTarget.prototype.addEventListener;
EventEmitter.prototype.removeListener = EventTarget.prototype.removeEventListener;

module.exports.EventEmitter = EventEmitter;

},{"./eventtarget":5,"inherits":57}],4:[function(require,module,exports){
'use strict';

function Event(eventType) {
  this.type = eventType;
}

Event.prototype.initEvent = function(eventType, canBubble, cancelable) {
  this.type = eventType;
  this.bubbles = canBubble;
  this.cancelable = cancelable;
  this.timeStamp = +new Date();
  return this;
};

Event.prototype.stopPropagation = function() {};
Event.prototype.preventDefault = function() {};

Event.CAPTURING_PHASE = 1;
Event.AT_TARGET = 2;
Event.BUBBLING_PHASE = 3;

module.exports = Event;

},{}],5:[function(require,module,exports){
'use strict';

/* Simplified implementation of DOM2 EventTarget.
 *   http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventTarget
 */

function EventTarget() {
  this._listeners = {};
}

EventTarget.prototype.addEventListener = function(eventType, listener) {
  if (!(eventType in this._listeners)) {
    this._listeners[eventType] = [];
  }
  var arr = this._listeners[eventType];
  // #4
  if (arr.indexOf(listener) === -1) {
    // Make a copy so as not to interfere with a current dispatchEvent.
    arr = arr.concat([listener]);
  }
  this._listeners[eventType] = arr;
};

EventTarget.prototype.removeEventListener = function(eventType, listener) {
  var arr = this._listeners[eventType];
  if (!arr) {
    return;
  }
  var idx = arr.indexOf(listener);
  if (idx !== -1) {
    if (arr.length > 1) {
      // Make a copy so as not to interfere with a current dispatchEvent.
      this._listeners[eventType] = arr.slice(0, idx).concat(arr.slice(idx + 1));
    } else {
      delete this._listeners[eventType];
    }
    return;
  }
};

EventTarget.prototype.dispatchEvent = function() {
  var event = arguments[0];
  var t = event.type;
  // equivalent of Array.prototype.slice.call(arguments, 0);
  var args = arguments.length === 1 ? [event] : Array.apply(null, arguments);
  // TODO: This doesn't match the real behavior; per spec, onfoo get
  // their place in line from the /first/ time they're set from
  // non-null. Although WebKit bumps it to the end every time it's
  // set.
  if (this['on' + t]) {
    this['on' + t].apply(this, args);
  }
  if (t in this._listeners) {
    // Grab a reference to the listeners list. removeEventListener may alter the list.
    var listeners = this._listeners[t];
    for (var i = 0; i < listeners.length; i++) {
      listeners[i].apply(this, args);
    }
  }
};

module.exports = EventTarget;

},{}],6:[function(require,module,exports){
'use strict';

var inherits = require('inherits')
  , Event = require('./event')
  ;

function TransportMessageEvent(data) {
  Event.call(this);
  this.initEvent('message', false, false);
  this.data = data;
}

inherits(TransportMessageEvent, Event);

module.exports = TransportMessageEvent;

},{"./event":4,"inherits":57}],7:[function(require,module,exports){
'use strict';

var JSON3 = require('json3')
  , iframeUtils = require('./utils/iframe')
  ;

function FacadeJS(transport) {
  this._transport = transport;
  transport.on('message', this._transportMessage.bind(this));
  transport.on('close', this._transportClose.bind(this));
}

FacadeJS.prototype._transportClose = function(code, reason) {
  iframeUtils.postMessage('c', JSON3.stringify([code, reason]));
};
FacadeJS.prototype._transportMessage = function(frame) {
  iframeUtils.postMessage('t', frame);
};
FacadeJS.prototype._send = function(data) {
  this._transport.send(data);
};
FacadeJS.prototype._close = function() {
  this._transport.close();
  this._transport.removeAllListeners();
};

module.exports = FacadeJS;

},{"./utils/iframe":47,"json3":58}],8:[function(require,module,exports){
(function (process){
'use strict';

var urlUtils = require('./utils/url')
  , eventUtils = require('./utils/event')
  , JSON3 = require('json3')
  , FacadeJS = require('./facade')
  , InfoIframeReceiver = require('./info-iframe-receiver')
  , iframeUtils = require('./utils/iframe')
  , loc = require('./location')
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:iframe-bootstrap');
}

module.exports = function(SockJS, availableTransports) {
  var transportMap = {};
  availableTransports.forEach(function(at) {
    if (at.facadeTransport) {
      transportMap[at.facadeTransport.transportName] = at.facadeTransport;
    }
  });

  // hard-coded for the info iframe
  // TODO see if we can make this more dynamic
  transportMap[InfoIframeReceiver.transportName] = InfoIframeReceiver;
  var parentOrigin;

  /* eslint-disable camelcase */
  SockJS.bootstrap_iframe = function() {
    /* eslint-enable camelcase */
    var facade;
    iframeUtils.currentWindowId = loc.hash.slice(1);
    var onMessage = function(e) {
      if (e.source !== parent) {
        return;
      }
      if (typeof parentOrigin === 'undefined') {
        parentOrigin = e.origin;
      }
      if (e.origin !== parentOrigin) {
        return;
      }

      var iframeMessage;
      try {
        iframeMessage = JSON3.parse(e.data);
      } catch (ignored) {
        debug('bad json', e.data);
        return;
      }

      if (iframeMessage.windowId !== iframeUtils.currentWindowId) {
        return;
      }
      switch (iframeMessage.type) {
      case 's':
        var p;
        try {
          p = JSON3.parse(iframeMessage.data);
        } catch (ignored) {
          debug('bad json', iframeMessage.data);
          break;
        }
        var version = p[0];
        var transport = p[1];
        var transUrl = p[2];
        var baseUrl = p[3];
        debug(version, transport, transUrl, baseUrl);
        // change this to semver logic
        if (version !== SockJS.version) {
          throw new Error('Incompatible SockJS! Main site uses:' +
                    ' "' + version + '", the iframe:' +
                    ' "' + SockJS.version + '".');
        }

        if (!urlUtils.isOriginEqual(transUrl, loc.href) ||
            !urlUtils.isOriginEqual(baseUrl, loc.href)) {
          throw new Error('Can\'t connect to different domain from within an ' +
                    'iframe. (' + loc.href + ', ' + transUrl + ', ' + baseUrl + ')');
        }
        facade = new FacadeJS(new transportMap[transport](transUrl, baseUrl));
        break;
      case 'm':
        facade._send(iframeMessage.data);
        break;
      case 'c':
        if (facade) {
          facade._close();
        }
        facade = null;
        break;
      }
    };

    eventUtils.attachEvent('message', onMessage);

    // Start
    iframeUtils.postMessage('s');
  };
};

}).call(this,{ env: {} })

},{"./facade":7,"./info-iframe-receiver":10,"./location":13,"./utils/event":46,"./utils/iframe":47,"./utils/url":52,"debug":55,"json3":58}],9:[function(require,module,exports){
(function (process){
'use strict';

var EventEmitter = require('events').EventEmitter
  , inherits = require('inherits')
  , JSON3 = require('json3')
  , objectUtils = require('./utils/object')
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:info-ajax');
}

function InfoAjax(url, AjaxObject) {
  EventEmitter.call(this);

  var self = this;
  var t0 = +new Date();
  this.xo = new AjaxObject('GET', url);

  this.xo.once('finish', function(status, text) {
    var info, rtt;
    if (status === 200) {
      rtt = (+new Date()) - t0;
      if (text) {
        try {
          info = JSON3.parse(text);
        } catch (e) {
          debug('bad json', text);
        }
      }

      if (!objectUtils.isObject(info)) {
        info = {};
      }
    }
    self.emit('finish', info, rtt);
    self.removeAllListeners();
  });
}

inherits(InfoAjax, EventEmitter);

InfoAjax.prototype.close = function() {
  this.removeAllListeners();
  this.xo.close();
};

module.exports = InfoAjax;

}).call(this,{ env: {} })

},{"./utils/object":49,"debug":55,"events":3,"inherits":57,"json3":58}],10:[function(require,module,exports){
'use strict';

var inherits = require('inherits')
  , EventEmitter = require('events').EventEmitter
  , JSON3 = require('json3')
  , XHRLocalObject = require('./transport/sender/xhr-local')
  , InfoAjax = require('./info-ajax')
  ;

function InfoReceiverIframe(transUrl) {
  var self = this;
  EventEmitter.call(this);

  this.ir = new InfoAjax(transUrl, XHRLocalObject);
  this.ir.once('finish', function(info, rtt) {
    self.ir = null;
    self.emit('message', JSON3.stringify([info, rtt]));
  });
}

inherits(InfoReceiverIframe, EventEmitter);

InfoReceiverIframe.transportName = 'iframe-info-receiver';

InfoReceiverIframe.prototype.close = function() {
  if (this.ir) {
    this.ir.close();
    this.ir = null;
  }
  this.removeAllListeners();
};

module.exports = InfoReceiverIframe;

},{"./info-ajax":9,"./transport/sender/xhr-local":37,"events":3,"inherits":57,"json3":58}],11:[function(require,module,exports){
(function (process,global){
'use strict';

var EventEmitter = require('events').EventEmitter
  , inherits = require('inherits')
  , JSON3 = require('json3')
  , utils = require('./utils/event')
  , IframeTransport = require('./transport/iframe')
  , InfoReceiverIframe = require('./info-iframe-receiver')
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:info-iframe');
}

function InfoIframe(baseUrl, url) {
  var self = this;
  EventEmitter.call(this);

  var go = function() {
    var ifr = self.ifr = new IframeTransport(InfoReceiverIframe.transportName, url, baseUrl);

    ifr.once('message', function(msg) {
      if (msg) {
        var d;
        try {
          d = JSON3.parse(msg);
        } catch (e) {
          debug('bad json', msg);
          self.emit('finish');
          self.close();
          return;
        }

        var info = d[0], rtt = d[1];
        self.emit('finish', info, rtt);
      }
      self.close();
    });

    ifr.once('close', function() {
      self.emit('finish');
      self.close();
    });
  };

  // TODO this seems the same as the 'needBody' from transports
  if (!global.document.body) {
    utils.attachEvent('load', go);
  } else {
    go();
  }
}

inherits(InfoIframe, EventEmitter);

InfoIframe.enabled = function() {
  return IframeTransport.enabled();
};

InfoIframe.prototype.close = function() {
  if (this.ifr) {
    this.ifr.close();
  }
  this.removeAllListeners();
  this.ifr = null;
};

module.exports = InfoIframe;

}).call(this,{ env: {} },typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./info-iframe-receiver":10,"./transport/iframe":22,"./utils/event":46,"debug":55,"events":3,"inherits":57,"json3":58}],12:[function(require,module,exports){
(function (process){
'use strict';

var EventEmitter = require('events').EventEmitter
  , inherits = require('inherits')
  , urlUtils = require('./utils/url')
  , XDR = require('./transport/sender/xdr')
  , XHRCors = require('./transport/sender/xhr-cors')
  , XHRLocal = require('./transport/sender/xhr-local')
  , XHRFake = require('./transport/sender/xhr-fake')
  , InfoIframe = require('./info-iframe')
  , InfoAjax = require('./info-ajax')
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:info-receiver');
}

function InfoReceiver(baseUrl, urlInfo) {
  debug(baseUrl);
  var self = this;
  EventEmitter.call(this);

  setTimeout(function() {
    self.doXhr(baseUrl, urlInfo);
  }, 0);
}

inherits(InfoReceiver, EventEmitter);

// TODO this is currently ignoring the list of available transports and the whitelist

InfoReceiver._getReceiver = function(baseUrl, url, urlInfo) {
  // determine method of CORS support (if needed)
  if (urlInfo.sameOrigin) {
    return new InfoAjax(url, XHRLocal);
  }
  if (XHRCors.enabled) {
    return new InfoAjax(url, XHRCors);
  }
  if (XDR.enabled && urlInfo.sameScheme) {
    return new InfoAjax(url, XDR);
  }
  if (InfoIframe.enabled()) {
    return new InfoIframe(baseUrl, url);
  }
  return new InfoAjax(url, XHRFake);
};

InfoReceiver.prototype.doXhr = function(baseUrl, urlInfo) {
  var self = this
    , url = urlUtils.addPath(baseUrl, '/info')
    ;
  debug('doXhr', url);

  this.xo = InfoReceiver._getReceiver(baseUrl, url, urlInfo);

  this.timeoutRef = setTimeout(function() {
    debug('timeout');
    self._cleanup(false);
    self.emit('finish');
  }, InfoReceiver.timeout);

  this.xo.once('finish', function(info, rtt) {
    debug('finish', info, rtt);
    self._cleanup(true);
    self.emit('finish', info, rtt);
  });
};

InfoReceiver.prototype._cleanup = function(wasClean) {
  debug('_cleanup');
  clearTimeout(this.timeoutRef);
  this.timeoutRef = null;
  if (!wasClean && this.xo) {
    this.xo.close();
  }
  this.xo = null;
};

InfoReceiver.prototype.close = function() {
  debug('close');
  this.removeAllListeners();
  this._cleanup(false);
};

InfoReceiver.timeout = 8000;

module.exports = InfoReceiver;

}).call(this,{ env: {} })

},{"./info-ajax":9,"./info-iframe":11,"./transport/sender/xdr":34,"./transport/sender/xhr-cors":35,"./transport/sender/xhr-fake":36,"./transport/sender/xhr-local":37,"./utils/url":52,"debug":55,"events":3,"inherits":57}],13:[function(require,module,exports){
(function (global){
'use strict';

module.exports = global.location || {
  origin: 'http://localhost:80'
, protocol: 'http:'
, host: 'localhost'
, port: 80
, href: 'http://localhost/'
, hash: ''
};

}).call(this,typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],14:[function(require,module,exports){
(function (process,global){
'use strict';

require('./shims');

var URL = require('url-parse')
  , inherits = require('inherits')
  , JSON3 = require('json3')
  , random = require('./utils/random')
  , escape = require('./utils/escape')
  , urlUtils = require('./utils/url')
  , eventUtils = require('./utils/event')
  , transport = require('./utils/transport')
  , objectUtils = require('./utils/object')
  , browser = require('./utils/browser')
  , log = require('./utils/log')
  , Event = require('./event/event')
  , EventTarget = require('./event/eventtarget')
  , loc = require('./location')
  , CloseEvent = require('./event/close')
  , TransportMessageEvent = require('./event/trans-message')
  , InfoReceiver = require('./info-receiver')
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:main');
}

var transports;

// follow constructor steps defined at http://dev.w3.org/html5/websockets/#the-websocket-interface
function SockJS(url, protocols, options) {
  if (!(this instanceof SockJS)) {
    return new SockJS(url, protocols, options);
  }
  if (arguments.length < 1) {
    throw new TypeError("Failed to construct 'SockJS: 1 argument required, but only 0 present");
  }
  EventTarget.call(this);

  this.readyState = SockJS.CONNECTING;
  this.extensions = '';
  this.protocol = '';

  // non-standard extension
  options = options || {};
  if (options.protocols_whitelist) {
    log.warn("'protocols_whitelist' is DEPRECATED. Use 'transports' instead.");
  }
  this._transportsWhitelist = options.transports;
  this._transportOptions = options.transportOptions || {};
  this._timeout = options.timeout || 0;

  var sessionId = options.sessionId || 8;
  if (typeof sessionId === 'function') {
    this._generateSessionId = sessionId;
  } else if (typeof sessionId === 'number') {
    this._generateSessionId = function() {
      return random.string(sessionId);
    };
  } else {
    throw new TypeError('If sessionId is used in the options, it needs to be a number or a function.');
  }

  this._server = options.server || random.numberString(1000);

  // Step 1 of WS spec - parse and validate the url. Issue #8
  var parsedUrl = new URL(url);
  if (!parsedUrl.host || !parsedUrl.protocol) {
    throw new SyntaxError("The URL '" + url + "' is invalid");
  } else if (parsedUrl.hash) {
    throw new SyntaxError('The URL must not contain a fragment');
  } else if (parsedUrl.protocol !== 'http:' && parsedUrl.protocol !== 'https:') {
    throw new SyntaxError("The URL's scheme must be either 'http:' or 'https:'. '" + parsedUrl.protocol + "' is not allowed.");
  }

  var secure = parsedUrl.protocol === 'https:';
  // Step 2 - don't allow secure origin with an insecure protocol
  if (loc.protocol === 'https:' && !secure) {
    // exception is 127.0.0.0/8 and ::1 urls
    if (!urlUtils.isLoopbackAddr(parsedUrl.hostname)) {
      throw new Error('SecurityError: An insecure SockJS connection may not be initiated from a page loaded over HTTPS');
    }
  }

  // Step 3 - check port access - no need here
  // Step 4 - parse protocols argument
  if (!protocols) {
    protocols = [];
  } else if (!Array.isArray(protocols)) {
    protocols = [protocols];
  }

  // Step 5 - check protocols argument
  var sortedProtocols = protocols.sort();
  sortedProtocols.forEach(function(proto, i) {
    if (!proto) {
      throw new SyntaxError("The protocols entry '" + proto + "' is invalid.");
    }
    if (i < (sortedProtocols.length - 1) && proto === sortedProtocols[i + 1]) {
      throw new SyntaxError("The protocols entry '" + proto + "' is duplicated.");
    }
  });

  // Step 6 - convert origin
  var o = urlUtils.getOrigin(loc.href);
  this._origin = o ? o.toLowerCase() : null;

  // remove the trailing slash
  parsedUrl.set('pathname', parsedUrl.pathname.replace(/\/+$/, ''));

  // store the sanitized url
  this.url = parsedUrl.href;
  debug('using url', this.url);

  // Step 7 - start connection in background
  // obtain server info
  // http://sockjs.github.io/sockjs-protocol/sockjs-protocol-0.3.3.html#section-26
  this._urlInfo = {
    nullOrigin: !browser.hasDomain()
  , sameOrigin: urlUtils.isOriginEqual(this.url, loc.href)
  , sameScheme: urlUtils.isSchemeEqual(this.url, loc.href)
  };

  this._ir = new InfoReceiver(this.url, this._urlInfo);
  this._ir.once('finish', this._receiveInfo.bind(this));
}

inherits(SockJS, EventTarget);

function userSetCode(code) {
  return code === 1000 || (code >= 3000 && code <= 4999);
}

SockJS.prototype.close = function(code, reason) {
  // Step 1
  if (code && !userSetCode(code)) {
    throw new Error('InvalidAccessError: Invalid code');
  }
  // Step 2.4 states the max is 123 bytes, but we are just checking length
  if (reason && reason.length > 123) {
    throw new SyntaxError('reason argument has an invalid length');
  }

  // Step 3.1
  if (this.readyState === SockJS.CLOSING || this.readyState === SockJS.CLOSED) {
    return;
  }

  // TODO look at docs to determine how to set this
  var wasClean = true;
  this._close(code || 1000, reason || 'Normal closure', wasClean);
};

SockJS.prototype.send = function(data) {
  // #13 - convert anything non-string to string
  // TODO this currently turns objects into [object Object]
  if (typeof data !== 'string') {
    data = '' + data;
  }
  if (this.readyState === SockJS.CONNECTING) {
    throw new Error('InvalidStateError: The connection has not been established yet');
  }
  if (this.readyState !== SockJS.OPEN) {
    return;
  }
  this._transport.send(escape.quote(data));
};

SockJS.version = require('./version');

SockJS.CONNECTING = 0;
SockJS.OPEN = 1;
SockJS.CLOSING = 2;
SockJS.CLOSED = 3;

SockJS.prototype._receiveInfo = function(info, rtt) {
  debug('_receiveInfo', rtt);
  this._ir = null;
  if (!info) {
    this._close(1002, 'Cannot connect to server');
    return;
  }

  // establish a round-trip timeout (RTO) based on the
  // round-trip time (RTT)
  this._rto = this.countRTO(rtt);
  // allow server to override url used for the actual transport
  this._transUrl = info.base_url ? info.base_url : this.url;
  info = objectUtils.extend(info, this._urlInfo);
  debug('info', info);
  // determine list of desired and supported transports
  var enabledTransports = transports.filterToEnabled(this._transportsWhitelist, info);
  this._transports = enabledTransports.main;
  debug(this._transports.length + ' enabled transports');

  this._connect();
};

SockJS.prototype._connect = function() {
  for (var Transport = this._transports.shift(); Transport; Transport = this._transports.shift()) {
    debug('attempt', Transport.transportName);
    if (Transport.needBody) {
      if (!global.document.body ||
          (typeof global.document.readyState !== 'undefined' &&
            global.document.readyState !== 'complete' &&
            global.document.readyState !== 'interactive')) {
        debug('waiting for body');
        this._transports.unshift(Transport);
        eventUtils.attachEvent('load', this._connect.bind(this));
        return;
      }
    }

    // calculate timeout based on RTO and round trips. Default to 5s
    var timeoutMs = Math.max(this._timeout, (this._rto * Transport.roundTrips) || 5000);
    this._transportTimeoutId = setTimeout(this._transportTimeout.bind(this), timeoutMs);
    debug('using timeout', timeoutMs);

    var transportUrl = urlUtils.addPath(this._transUrl, '/' + this._server + '/' + this._generateSessionId());
    var options = this._transportOptions[Transport.transportName];
    debug('transport url', transportUrl);
    var transportObj = new Transport(transportUrl, this._transUrl, options);
    transportObj.on('message', this._transportMessage.bind(this));
    transportObj.once('close', this._transportClose.bind(this));
    transportObj.transportName = Transport.transportName;
    this._transport = transportObj;

    return;
  }
  this._close(2000, 'All transports failed', false);
};

SockJS.prototype._transportTimeout = function() {
  debug('_transportTimeout');
  if (this.readyState === SockJS.CONNECTING) {
    if (this._transport) {
      this._transport.close();
    }

    this._transportClose(2007, 'Transport timed out');
  }
};

SockJS.prototype._transportMessage = function(msg) {
  debug('_transportMessage', msg);
  var self = this
    , type = msg.slice(0, 1)
    , content = msg.slice(1)
    , payload
    ;

  // first check for messages that don't need a payload
  switch (type) {
    case 'o':
      this._open();
      return;
    case 'h':
      this.dispatchEvent(new Event('heartbeat'));
      debug('heartbeat', this.transport);
      return;
  }

  if (content) {
    try {
      payload = JSON3.parse(content);
    } catch (e) {
      debug('bad json', content);
    }
  }

  if (typeof payload === 'undefined') {
    debug('empty payload', content);
    return;
  }

  switch (type) {
    case 'a':
      if (Array.isArray(payload)) {
        payload.forEach(function(p) {
          debug('message', self.transport, p);
          self.dispatchEvent(new TransportMessageEvent(p));
        });
      }
      break;
    case 'm':
      debug('message', this.transport, payload);
      this.dispatchEvent(new TransportMessageEvent(payload));
      break;
    case 'c':
      if (Array.isArray(payload) && payload.length === 2) {
        this._close(payload[0], payload[1], true);
      }
      break;
  }
};

SockJS.prototype._transportClose = function(code, reason) {
  debug('_transportClose', this.transport, code, reason);
  if (this._transport) {
    this._transport.removeAllListeners();
    this._transport = null;
    this.transport = null;
  }

  if (!userSetCode(code) && code !== 2000 && this.readyState === SockJS.CONNECTING) {
    this._connect();
    return;
  }

  this._close(code, reason);
};

SockJS.prototype._open = function() {
  debug('_open', this._transport && this._transport.transportName, this.readyState);
  if (this.readyState === SockJS.CONNECTING) {
    if (this._transportTimeoutId) {
      clearTimeout(this._transportTimeoutId);
      this._transportTimeoutId = null;
    }
    this.readyState = SockJS.OPEN;
    this.transport = this._transport.transportName;
    this.dispatchEvent(new Event('open'));
    debug('connected', this.transport);
  } else {
    // The server might have been restarted, and lost track of our
    // connection.
    this._close(1006, 'Server lost session');
  }
};

SockJS.prototype._close = function(code, reason, wasClean) {
  debug('_close', this.transport, code, reason, wasClean, this.readyState);
  var forceFail = false;

  if (this._ir) {
    forceFail = true;
    this._ir.close();
    this._ir = null;
  }
  if (this._transport) {
    this._transport.close();
    this._transport = null;
    this.transport = null;
  }

  if (this.readyState === SockJS.CLOSED) {
    throw new Error('InvalidStateError: SockJS has already been closed');
  }

  this.readyState = SockJS.CLOSING;
  setTimeout(function() {
    this.readyState = SockJS.CLOSED;

    if (forceFail) {
      this.dispatchEvent(new Event('error'));
    }

    var e = new CloseEvent('close');
    e.wasClean = wasClean || false;
    e.code = code || 1000;
    e.reason = reason;

    this.dispatchEvent(e);
    this.onmessage = this.onclose = this.onerror = null;
    debug('disconnected');
  }.bind(this), 0);
};

// See: http://www.erg.abdn.ac.uk/~gerrit/dccp/notes/ccid2/rto_estimator/
// and RFC 2988.
SockJS.prototype.countRTO = function(rtt) {
  // In a local environment, when using IE8/9 and the `jsonp-polling`
  // transport the time needed to establish a connection (the time that pass
  // from the opening of the transport to the call of `_dispatchOpen`) is
  // around 200msec (the lower bound used in the article above) and this
  // causes spurious timeouts. For this reason we calculate a value slightly
  // larger than that used in the article.
  if (rtt > 100) {
    return 4 * rtt; // rto > 400msec
  }
  return 300 + rtt; // 300msec < rto <= 400msec
};

module.exports = function(availableTransports) {
  transports = transport(availableTransports);
  require('./iframe-bootstrap')(SockJS, availableTransports);
  return SockJS;
};

}).call(this,{ env: {} },typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./event/close":2,"./event/event":4,"./event/eventtarget":5,"./event/trans-message":6,"./iframe-bootstrap":8,"./info-receiver":12,"./location":13,"./shims":15,"./utils/browser":44,"./utils/escape":45,"./utils/event":46,"./utils/log":48,"./utils/object":49,"./utils/random":50,"./utils/transport":51,"./utils/url":52,"./version":53,"debug":55,"inherits":57,"json3":58,"url-parse":61}],15:[function(require,module,exports){
/* eslint-disable */
/* jscs: disable */
'use strict';

// pulled specific shims from https://github.com/es-shims/es5-shim

var ArrayPrototype = Array.prototype;
var ObjectPrototype = Object.prototype;
var FunctionPrototype = Function.prototype;
var StringPrototype = String.prototype;
var array_slice = ArrayPrototype.slice;

var _toString = ObjectPrototype.toString;
var isFunction = function (val) {
    return ObjectPrototype.toString.call(val) === '[object Function]';
};
var isArray = function isArray(obj) {
    return _toString.call(obj) === '[object Array]';
};
var isString = function isString(obj) {
    return _toString.call(obj) === '[object String]';
};

var supportsDescriptors = Object.defineProperty && (function () {
    try {
        Object.defineProperty({}, 'x', {});
        return true;
    } catch (e) { /* this is ES3 */
        return false;
    }
}());

// Define configurable, writable and non-enumerable props
// if they don't exist.
var defineProperty;
if (supportsDescriptors) {
    defineProperty = function (object, name, method, forceAssign) {
        if (!forceAssign && (name in object)) { return; }
        Object.defineProperty(object, name, {
            configurable: true,
            enumerable: false,
            writable: true,
            value: method
        });
    };
} else {
    defineProperty = function (object, name, method, forceAssign) {
        if (!forceAssign && (name in object)) { return; }
        object[name] = method;
    };
}
var defineProperties = function (object, map, forceAssign) {
    for (var name in map) {
        if (ObjectPrototype.hasOwnProperty.call(map, name)) {
          defineProperty(object, name, map[name], forceAssign);
        }
    }
};

var toObject = function (o) {
    if (o == null) { // this matches both null and undefined
        throw new TypeError("can't convert " + o + ' to object');
    }
    return Object(o);
};

//
// Util
// ======
//

// ES5 9.4
// http://es5.github.com/#x9.4
// http://jsperf.com/to-integer

function toInteger(num) {
    var n = +num;
    if (n !== n) { // isNaN
        n = 0;
    } else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0)) {
        n = (n > 0 || -1) * Math.floor(Math.abs(n));
    }
    return n;
}

function ToUint32(x) {
    return x >>> 0;
}

//
// Function
// ========
//

// ES-5 15.3.4.5
// http://es5.github.com/#x15.3.4.5

function Empty() {}

defineProperties(FunctionPrototype, {
    bind: function bind(that) { // .length is 1
        // 1. Let Target be the this value.
        var target = this;
        // 2. If IsCallable(Target) is false, throw a TypeError exception.
        if (!isFunction(target)) {
            throw new TypeError('Function.prototype.bind called on incompatible ' + target);
        }
        // 3. Let A be a new (possibly empty) internal list of all of the
        //   argument values provided after thisArg (arg1, arg2 etc), in order.
        // XXX slicedArgs will stand in for "A" if used
        var args = array_slice.call(arguments, 1); // for normal call
        // 4. Let F be a new native ECMAScript object.
        // 11. Set the [[Prototype]] internal property of F to the standard
        //   built-in Function prototype object as specified in 15.3.3.1.
        // 12. Set the [[Call]] internal property of F as described in
        //   15.3.4.5.1.
        // 13. Set the [[Construct]] internal property of F as described in
        //   15.3.4.5.2.
        // 14. Set the [[HasInstance]] internal property of F as described in
        //   15.3.4.5.3.
        var binder = function () {

            if (this instanceof bound) {
                // 15.3.4.5.2 [[Construct]]
                // When the [[Construct]] internal method of a function object,
                // F that was created using the bind function is called with a
                // list of arguments ExtraArgs, the following steps are taken:
                // 1. Let target be the value of F's [[TargetFunction]]
                //   internal property.
                // 2. If target has no [[Construct]] internal method, a
                //   TypeError exception is thrown.
                // 3. Let boundArgs be the value of F's [[BoundArgs]] internal
                //   property.
                // 4. Let args be a new list containing the same values as the
                //   list boundArgs in the same order followed by the same
                //   values as the list ExtraArgs in the same order.
                // 5. Return the result of calling the [[Construct]] internal
                //   method of target providing args as the arguments.

                var result = target.apply(
                    this,
                    args.concat(array_slice.call(arguments))
                );
                if (Object(result) === result) {
                    return result;
                }
                return this;

            } else {
                // 15.3.4.5.1 [[Call]]
                // When the [[Call]] internal method of a function object, F,
                // which was created using the bind function is called with a
                // this value and a list of arguments ExtraArgs, the following
                // steps are taken:
                // 1. Let boundArgs be the value of F's [[BoundArgs]] internal
                //   property.
                // 2. Let boundThis be the value of F's [[BoundThis]] internal
                //   property.
                // 3. Let target be the value of F's [[TargetFunction]] internal
                //   property.
                // 4. Let args be a new list containing the same values as the
                //   list boundArgs in the same order followed by the same
                //   values as the list ExtraArgs in the same order.
                // 5. Return the result of calling the [[Call]] internal method
                //   of target providing boundThis as the this value and
                //   providing args as the arguments.

                // equiv: target.call(this, ...boundArgs, ...args)
                return target.apply(
                    that,
                    args.concat(array_slice.call(arguments))
                );

            }

        };

        // 15. If the [[Class]] internal property of Target is "Function", then
        //     a. Let L be the length property of Target minus the length of A.
        //     b. Set the length own property of F to either 0 or L, whichever is
        //       larger.
        // 16. Else set the length own property of F to 0.

        var boundLength = Math.max(0, target.length - args.length);

        // 17. Set the attributes of the length own property of F to the values
        //   specified in 15.3.5.1.
        var boundArgs = [];
        for (var i = 0; i < boundLength; i++) {
            boundArgs.push('$' + i);
        }

        // XXX Build a dynamic function with desired amount of arguments is the only
        // way to set the length property of a function.
        // In environments where Content Security Policies enabled (Chrome extensions,
        // for ex.) all use of eval or Function costructor throws an exception.
        // However in all of these environments Function.prototype.bind exists
        // and so this code will never be executed.
        var bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this, arguments); }')(binder);

        if (target.prototype) {
            Empty.prototype = target.prototype;
            bound.prototype = new Empty();
            // Clean up dangling references.
            Empty.prototype = null;
        }

        // TODO
        // 18. Set the [[Extensible]] internal property of F to true.

        // TODO
        // 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).
        // 20. Call the [[DefineOwnProperty]] internal method of F with
        //   arguments "caller", PropertyDescriptor {[[Get]]: thrower, [[Set]]:
        //   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and
        //   false.
        // 21. Call the [[DefineOwnProperty]] internal method of F with
        //   arguments "arguments", PropertyDescriptor {[[Get]]: thrower,
        //   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},
        //   and false.

        // TODO
        // NOTE Function objects created using Function.prototype.bind do not
        // have a prototype property or the [[Code]], [[FormalParameters]], and
        // [[Scope]] internal properties.
        // XXX can't delete prototype in pure-js.

        // 22. Return F.
        return bound;
    }
});

//
// Array
// =====
//

// ES5 15.4.3.2
// http://es5.github.com/#x15.4.3.2
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray
defineProperties(Array, { isArray: isArray });


var boxedString = Object('a');
var splitString = boxedString[0] !== 'a' || !(0 in boxedString);

var properlyBoxesContext = function properlyBoxed(method) {
    // Check node 0.6.21 bug where third parameter is not boxed
    var properlyBoxesNonStrict = true;
    var properlyBoxesStrict = true;
    if (method) {
        method.call('foo', function (_, __, context) {
            if (typeof context !== 'object') { properlyBoxesNonStrict = false; }
        });

        method.call([1], function () {
            'use strict';
            properlyBoxesStrict = typeof this === 'string';
        }, 'x');
    }
    return !!method && properlyBoxesNonStrict && properlyBoxesStrict;
};

defineProperties(ArrayPrototype, {
    forEach: function forEach(fun /*, thisp*/) {
        var object = toObject(this),
            self = splitString && isString(this) ? this.split('') : object,
            thisp = arguments[1],
            i = -1,
            length = self.length >>> 0;

        // If no callback function or if callback is not a callable function
        if (!isFunction(fun)) {
            throw new TypeError(); // TODO message
        }

        while (++i < length) {
            if (i in self) {
                // Invoke the callback function with call, passing arguments:
                // context, property value, property key, thisArg object
                // context
                fun.call(thisp, self[i], i, object);
            }
        }
    }
}, !properlyBoxesContext(ArrayPrototype.forEach));

// ES5 15.4.4.14
// http://es5.github.com/#x15.4.4.14
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf
var hasFirefox2IndexOfBug = Array.prototype.indexOf && [0, 1].indexOf(1, 2) !== -1;
defineProperties(ArrayPrototype, {
    indexOf: function indexOf(sought /*, fromIndex */ ) {
        var self = splitString && isString(this) ? this.split('') : toObject(this),
            length = self.length >>> 0;

        if (!length) {
            return -1;
        }

        var i = 0;
        if (arguments.length > 1) {
            i = toInteger(arguments[1]);
        }

        // handle negative indices
        i = i >= 0 ? i : Math.max(0, length + i);
        for (; i < length; i++) {
            if (i in self && self[i] === sought) {
                return i;
            }
        }
        return -1;
    }
}, hasFirefox2IndexOfBug);

//
// String
// ======
//

// ES5 15.5.4.14
// http://es5.github.com/#x15.5.4.14

// [bugfix, IE lt 9, firefox 4, Konqueror, Opera, obscure browsers]
// Many browsers do not split properly with regular expressions or they
// do not perform the split correctly under obscure conditions.
// See http://blog.stevenlevithan.com/archives/cross-browser-split
// I've tested in many browsers and this seems to cover the deviant ones:
//    'ab'.split(/(?:ab)*/) should be ["", ""], not [""]
//    '.'.split(/(.?)(.?)/) should be ["", ".", "", ""], not ["", ""]
//    'tesst'.split(/(s)*/) should be ["t", undefined, "e", "s", "t"], not
//       [undefined, "t", undefined, "e", ...]
//    ''.split(/.?/) should be [], not [""]
//    '.'.split(/()()/) should be ["."], not ["", "", "."]

var string_split = StringPrototype.split;
if (
    'ab'.split(/(?:ab)*/).length !== 2 ||
    '.'.split(/(.?)(.?)/).length !== 4 ||
    'tesst'.split(/(s)*/)[1] === 't' ||
    'test'.split(/(?:)/, -1).length !== 4 ||
    ''.split(/.?/).length ||
    '.'.split(/()()/).length > 1
) {
    (function () {
        var compliantExecNpcg = /()??/.exec('')[1] === void 0; // NPCG: nonparticipating capturing group

        StringPrototype.split = function (separator, limit) {
            var string = this;
            if (separator === void 0 && limit === 0) {
                return [];
            }

            // If `separator` is not a regex, use native split
            if (_toString.call(separator) !== '[object RegExp]') {
                return string_split.call(this, separator, limit);
            }

            var output = [],
                flags = (separator.ignoreCase ? 'i' : '') +
                        (separator.multiline  ? 'm' : '') +
                        (separator.extended   ? 'x' : '') + // Proposed for ES6
                        (separator.sticky     ? 'y' : ''), // Firefox 3+
                lastLastIndex = 0,
                // Make `global` and avoid `lastIndex` issues by working with a copy
                separator2, match, lastIndex, lastLength;
            separator = new RegExp(separator.source, flags + 'g');
            string += ''; // Type-convert
            if (!compliantExecNpcg) {
                // Doesn't need flags gy, but they don't hurt
                separator2 = new RegExp('^' + separator.source + '$(?!\\s)', flags);
            }
            /* Values for `limit`, per the spec:
             * If undefined: 4294967295 // Math.pow(2, 32) - 1
             * If 0, Infinity, or NaN: 0
             * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
             * If negative number: 4294967296 - Math.floor(Math.abs(limit))
             * If other: Type-convert, then use the above rules
             */
            limit = limit === void 0 ?
                -1 >>> 0 : // Math.pow(2, 32) - 1
                ToUint32(limit);
            while (match = separator.exec(string)) {
                // `separator.lastIndex` is not reliable cross-browser
                lastIndex = match.index + match[0].length;
                if (lastIndex > lastLastIndex) {
                    output.push(string.slice(lastLastIndex, match.index));
                    // Fix browsers whose `exec` methods don't consistently return `undefined` for
                    // nonparticipating capturing groups
                    if (!compliantExecNpcg && match.length > 1) {
                        match[0].replace(separator2, function () {
                            for (var i = 1; i < arguments.length - 2; i++) {
                                if (arguments[i] === void 0) {
                                    match[i] = void 0;
                                }
                            }
                        });
                    }
                    if (match.length > 1 && match.index < string.length) {
                        ArrayPrototype.push.apply(output, match.slice(1));
                    }
                    lastLength = match[0].length;
                    lastLastIndex = lastIndex;
                    if (output.length >= limit) {
                        break;
                    }
                }
                if (separator.lastIndex === match.index) {
                    separator.lastIndex++; // Avoid an infinite loop
                }
            }
            if (lastLastIndex === string.length) {
                if (lastLength || !separator.test('')) {
                    output.push('');
                }
            } else {
                output.push(string.slice(lastLastIndex));
            }
            return output.length > limit ? output.slice(0, limit) : output;
        };
    }());

// [bugfix, chrome]
// If separator is undefined, then the result array contains just one String,
// which is the this value (converted to a String). If limit is not undefined,
// then the output array is truncated so that it contains no more than limit
// elements.
// "0".split(undefined, 0) -> []
} else if ('0'.split(void 0, 0).length) {
    StringPrototype.split = function split(separator, limit) {
        if (separator === void 0 && limit === 0) { return []; }
        return string_split.call(this, separator, limit);
    };
}

// ECMA-262, 3rd B.2.3
// Not an ECMAScript standard, although ECMAScript 3rd Edition has a
// non-normative section suggesting uniform semantics and it should be
// normalized across all browsers
// [bugfix, IE lt 9] IE < 9 substr() with negative value not working in IE
var string_substr = StringPrototype.substr;
var hasNegativeSubstrBug = ''.substr && '0b'.substr(-1) !== 'b';
defineProperties(StringPrototype, {
    substr: function substr(start, length) {
        return string_substr.call(
            this,
            start < 0 ? ((start = this.length + start) < 0 ? 0 : start) : start,
            length
        );
    }
}, hasNegativeSubstrBug);

},{}],16:[function(require,module,exports){
'use strict';

module.exports = [
  // streaming transports
  require('./transport/websocket')
, require('./transport/xhr-streaming')
, require('./transport/xdr-streaming')
, require('./transport/eventsource')
, require('./transport/lib/iframe-wrap')(require('./transport/eventsource'))

  // polling transports
, require('./transport/htmlfile')
, require('./transport/lib/iframe-wrap')(require('./transport/htmlfile'))
, require('./transport/xhr-polling')
, require('./transport/xdr-polling')
, require('./transport/lib/iframe-wrap')(require('./transport/xhr-polling'))
, require('./transport/jsonp-polling')
];

},{"./transport/eventsource":20,"./transport/htmlfile":21,"./transport/jsonp-polling":23,"./transport/lib/iframe-wrap":26,"./transport/websocket":38,"./transport/xdr-polling":39,"./transport/xdr-streaming":40,"./transport/xhr-polling":41,"./transport/xhr-streaming":42}],17:[function(require,module,exports){
(function (process,global){
'use strict';

var EventEmitter = require('events').EventEmitter
  , inherits = require('inherits')
  , utils = require('../../utils/event')
  , urlUtils = require('../../utils/url')
  , XHR = global.XMLHttpRequest
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:browser:xhr');
}

function AbstractXHRObject(method, url, payload, opts) {
  debug(method, url);
  var self = this;
  EventEmitter.call(this);

  setTimeout(function () {
    self._start(method, url, payload, opts);
  }, 0);
}

inherits(AbstractXHRObject, EventEmitter);

AbstractXHRObject.prototype._start = function(method, url, payload, opts) {
  var self = this;

  try {
    this.xhr = new XHR();
  } catch (x) {
    // intentionally empty
  }

  if (!this.xhr) {
    debug('no xhr');
    this.emit('finish', 0, 'no xhr support');
    this._cleanup();
    return;
  }

  // several browsers cache POSTs
  url = urlUtils.addQuery(url, 't=' + (+new Date()));

  // Explorer tends to keep connection open, even after the
  // tab gets closed: http://bugs.jquery.com/ticket/5280
  this.unloadRef = utils.unloadAdd(function() {
    debug('unload cleanup');
    self._cleanup(true);
  });
  try {
    this.xhr.open(method, url, true);
    if (this.timeout && 'timeout' in this.xhr) {
      this.xhr.timeout = this.timeout;
      this.xhr.ontimeout = function() {
        debug('xhr timeout');
        self.emit('finish', 0, '');
        self._cleanup(false);
      };
    }
  } catch (e) {
    debug('exception', e);
    // IE raises an exception on wrong port.
    this.emit('finish', 0, '');
    this._cleanup(false);
    return;
  }

  if ((!opts || !opts.noCredentials) && AbstractXHRObject.supportsCORS) {
    debug('withCredentials');
    // Mozilla docs says https://developer.mozilla.org/en/XMLHttpRequest :
    // "This never affects same-site requests."

    this.xhr.withCredentials = true;
  }
  if (opts && opts.headers) {
    for (var key in opts.headers) {
      this.xhr.setRequestHeader(key, opts.headers[key]);
    }
  }

  this.xhr.onreadystatechange = function() {
    if (self.xhr) {
      var x = self.xhr;
      var text, status;
      debug('readyState', x.readyState);
      switch (x.readyState) {
      case 3:
        // IE doesn't like peeking into responseText or status
        // on Microsoft.XMLHTTP and readystate=3
        try {
          status = x.status;
          text = x.responseText;
        } catch (e) {
          // intentionally empty
        }
        debug('status', status);
        // IE returns 1223 for 204: http://bugs.jquery.com/ticket/1450
        if (status === 1223) {
          status = 204;
        }

        // IE does return readystate == 3 for 404 answers.
        if (status === 200 && text && text.length > 0) {
          debug('chunk');
          self.emit('chunk', status, text);
        }
        break;
      case 4:
        status = x.status;
        debug('status', status);
        // IE returns 1223 for 204: http://bugs.jquery.com/ticket/1450
        if (status === 1223) {
          status = 204;
        }
        // IE returns this for a bad port
        // http://msdn.microsoft.com/en-us/library/windows/desktop/aa383770(v=vs.85).aspx
        if (status === 12005 || status === 12029) {
          status = 0;
        }

        debug('finish', status, x.responseText);
        self.emit('finish', status, x.responseText);
        self._cleanup(false);
        break;
      }
    }
  };

  try {
    self.xhr.send(payload);
  } catch (e) {
    self.emit('finish', 0, '');
    self._cleanup(false);
  }
};

AbstractXHRObject.prototype._cleanup = function(abort) {
  debug('cleanup');
  if (!this.xhr) {
    return;
  }
  this.removeAllListeners();
  utils.unloadDel(this.unloadRef);

  // IE needs this field to be a function
  this.xhr.onreadystatechange = function() {};
  if (this.xhr.ontimeout) {
    this.xhr.ontimeout = null;
  }

  if (abort) {
    try {
      this.xhr.abort();
    } catch (x) {
      // intentionally empty
    }
  }
  this.unloadRef = this.xhr = null;
};

AbstractXHRObject.prototype.close = function() {
  debug('close');
  this._cleanup(true);
};

AbstractXHRObject.enabled = !!XHR;
// override XMLHttpRequest for IE6/7
// obfuscate to avoid firewalls
var axo = ['Active'].concat('Object').join('X');
if (!AbstractXHRObject.enabled && (axo in global)) {
  debug('overriding xmlhttprequest');
  XHR = function() {
    try {
      return new global[axo]('Microsoft.XMLHTTP');
    } catch (e) {
      return null;
    }
  };
  AbstractXHRObject.enabled = !!new XHR();
}

var cors = false;
try {
  cors = 'withCredentials' in new XHR();
} catch (ignored) {
  // intentionally empty
}

AbstractXHRObject.supportsCORS = cors;

module.exports = AbstractXHRObject;

}).call(this,{ env: {} },typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../utils/event":46,"../../utils/url":52,"debug":55,"events":3,"inherits":57}],18:[function(require,module,exports){
(function (global){
module.exports = global.EventSource;

}).call(this,typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],19:[function(require,module,exports){
(function (global){
'use strict';

var Driver = global.WebSocket || global.MozWebSocket;
if (Driver) {
	module.exports = function WebSocketBrowserDriver(url) {
		return new Driver(url);
	};
} else {
	module.exports = undefined;
}

}).call(this,typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],20:[function(require,module,exports){
'use strict';

var inherits = require('inherits')
  , AjaxBasedTransport = require('./lib/ajax-based')
  , EventSourceReceiver = require('./receiver/eventsource')
  , XHRCorsObject = require('./sender/xhr-cors')
  , EventSourceDriver = require('eventsource')
  ;

function EventSourceTransport(transUrl) {
  if (!EventSourceTransport.enabled()) {
    throw new Error('Transport created when disabled');
  }

  AjaxBasedTransport.call(this, transUrl, '/eventsource', EventSourceReceiver, XHRCorsObject);
}

inherits(EventSourceTransport, AjaxBasedTransport);

EventSourceTransport.enabled = function() {
  return !!EventSourceDriver;
};

EventSourceTransport.transportName = 'eventsource';
EventSourceTransport.roundTrips = 2;

module.exports = EventSourceTransport;

},{"./lib/ajax-based":24,"./receiver/eventsource":29,"./sender/xhr-cors":35,"eventsource":18,"inherits":57}],21:[function(require,module,exports){
'use strict';

var inherits = require('inherits')
  , HtmlfileReceiver = require('./receiver/htmlfile')
  , XHRLocalObject = require('./sender/xhr-local')
  , AjaxBasedTransport = require('./lib/ajax-based')
  ;

function HtmlFileTransport(transUrl) {
  if (!HtmlfileReceiver.enabled) {
    throw new Error('Transport created when disabled');
  }
  AjaxBasedTransport.call(this, transUrl, '/htmlfile', HtmlfileReceiver, XHRLocalObject);
}

inherits(HtmlFileTransport, AjaxBasedTransport);

HtmlFileTransport.enabled = function(info) {
  return HtmlfileReceiver.enabled && info.sameOrigin;
};

HtmlFileTransport.transportName = 'htmlfile';
HtmlFileTransport.roundTrips = 2;

module.exports = HtmlFileTransport;

},{"./lib/ajax-based":24,"./receiver/htmlfile":30,"./sender/xhr-local":37,"inherits":57}],22:[function(require,module,exports){
(function (process){
'use strict';

// Few cool transports do work only for same-origin. In order to make
// them work cross-domain we shall use iframe, served from the
// remote domain. New browsers have capabilities to communicate with
// cross domain iframe using postMessage(). In IE it was implemented
// from IE 8+, but of course, IE got some details wrong:
//    http://msdn.microsoft.com/en-us/library/cc197015(v=VS.85).aspx
//    http://stevesouders.com/misc/test-postmessage.php

var inherits = require('inherits')
  , JSON3 = require('json3')
  , EventEmitter = require('events').EventEmitter
  , version = require('../version')
  , urlUtils = require('../utils/url')
  , iframeUtils = require('../utils/iframe')
  , eventUtils = require('../utils/event')
  , random = require('../utils/random')
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:transport:iframe');
}

function IframeTransport(transport, transUrl, baseUrl) {
  if (!IframeTransport.enabled()) {
    throw new Error('Transport created when disabled');
  }
  EventEmitter.call(this);

  var self = this;
  this.origin = urlUtils.getOrigin(baseUrl);
  this.baseUrl = baseUrl;
  this.transUrl = transUrl;
  this.transport = transport;
  this.windowId = random.string(8);

  var iframeUrl = urlUtils.addPath(baseUrl, '/iframe.html') + '#' + this.windowId;
  debug(transport, transUrl, iframeUrl);

  this.iframeObj = iframeUtils.createIframe(iframeUrl, function(r) {
    debug('err callback');
    self.emit('close', 1006, 'Unable to load an iframe (' + r + ')');
    self.close();
  });

  this.onmessageCallback = this._message.bind(this);
  eventUtils.attachEvent('message', this.onmessageCallback);
}

inherits(IframeTransport, EventEmitter);

IframeTransport.prototype.close = function() {
  debug('close');
  this.removeAllListeners();
  if (this.iframeObj) {
    eventUtils.detachEvent('message', this.onmessageCallback);
    try {
      // When the iframe is not loaded, IE raises an exception
      // on 'contentWindow'.
      this.postMessage('c');
    } catch (x) {
      // intentionally empty
    }
    this.iframeObj.cleanup();
    this.iframeObj = null;
    this.onmessageCallback = this.iframeObj = null;
  }
};

IframeTransport.prototype._message = function(e) {
  debug('message', e.data);
  if (!urlUtils.isOriginEqual(e.origin, this.origin)) {
    debug('not same origin', e.origin, this.origin);
    return;
  }

  var iframeMessage;
  try {
    iframeMessage = JSON3.parse(e.data);
  } catch (ignored) {
    debug('bad json', e.data);
    return;
  }

  if (iframeMessage.windowId !== this.windowId) {
    debug('mismatched window id', iframeMessage.windowId, this.windowId);
    return;
  }

  switch (iframeMessage.type) {
  case 's':
    this.iframeObj.loaded();
    // window global dependency
    this.postMessage('s', JSON3.stringify([
      version
    , this.transport
    , this.transUrl
    , this.baseUrl
    ]));
    break;
  case 't':
    this.emit('message', iframeMessage.data);
    break;
  case 'c':
    var cdata;
    try {
      cdata = JSON3.parse(iframeMessage.data);
    } catch (ignored) {
      debug('bad json', iframeMessage.data);
      return;
    }
    this.emit('close', cdata[0], cdata[1]);
    this.close();
    break;
  }
};

IframeTransport.prototype.postMessage = function(type, data) {
  debug('postMessage', type, data);
  this.iframeObj.post(JSON3.stringify({
    windowId: this.windowId
  , type: type
  , data: data || ''
  }), this.origin);
};

IframeTransport.prototype.send = function(message) {
  debug('send', message);
  this.postMessage('m', message);
};

IframeTransport.enabled = function() {
  return iframeUtils.iframeEnabled;
};

IframeTransport.transportName = 'iframe';
IframeTransport.roundTrips = 2;

module.exports = IframeTransport;

}).call(this,{ env: {} })

},{"../utils/event":46,"../utils/iframe":47,"../utils/random":50,"../utils/url":52,"../version":53,"debug":55,"events":3,"inherits":57,"json3":58}],23:[function(require,module,exports){
(function (global){
'use strict';

// The simplest and most robust transport, using the well-know cross
// domain hack - JSONP. This transport is quite inefficient - one
// message could use up to one http request. But at least it works almost
// everywhere.
// Known limitations:
//   o you will get a spinning cursor
//   o for Konqueror a dumb timer is needed to detect errors

var inherits = require('inherits')
  , SenderReceiver = require('./lib/sender-receiver')
  , JsonpReceiver = require('./receiver/jsonp')
  , jsonpSender = require('./sender/jsonp')
  ;

function JsonPTransport(transUrl) {
  if (!JsonPTransport.enabled()) {
    throw new Error('Transport created when disabled');
  }
  SenderReceiver.call(this, transUrl, '/jsonp', jsonpSender, JsonpReceiver);
}

inherits(JsonPTransport, SenderReceiver);

JsonPTransport.enabled = function() {
  return !!global.document;
};

JsonPTransport.transportName = 'jsonp-polling';
JsonPTransport.roundTrips = 1;
JsonPTransport.needBody = true;

module.exports = JsonPTransport;

}).call(this,typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./lib/sender-receiver":28,"./receiver/jsonp":31,"./sender/jsonp":33,"inherits":57}],24:[function(require,module,exports){
(function (process){
'use strict';

var inherits = require('inherits')
  , urlUtils = require('../../utils/url')
  , SenderReceiver = require('./sender-receiver')
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:ajax-based');
}

function createAjaxSender(AjaxObject) {
  return function(url, payload, callback) {
    debug('create ajax sender', url, payload);
    var opt = {};
    if (typeof payload === 'string') {
      opt.headers = {'Content-type': 'text/plain'};
    }
    var ajaxUrl = urlUtils.addPath(url, '/xhr_send');
    var xo = new AjaxObject('POST', ajaxUrl, payload, opt);
    xo.once('finish', function(status) {
      debug('finish', status);
      xo = null;

      if (status !== 200 && status !== 204) {
        return callback(new Error('http status ' + status));
      }
      callback();
    });
    return function() {
      debug('abort');
      xo.close();
      xo = null;

      var err = new Error('Aborted');
      err.code = 1000;
      callback(err);
    };
  };
}

function AjaxBasedTransport(transUrl, urlSuffix, Receiver, AjaxObject) {
  SenderReceiver.call(this, transUrl, urlSuffix, createAjaxSender(AjaxObject), Receiver, AjaxObject);
}

inherits(AjaxBasedTransport, SenderReceiver);

module.exports = AjaxBasedTransport;

}).call(this,{ env: {} })

},{"../../utils/url":52,"./sender-receiver":28,"debug":55,"inherits":57}],25:[function(require,module,exports){
(function (process){
'use strict';

var inherits = require('inherits')
  , EventEmitter = require('events').EventEmitter
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:buffered-sender');
}

function BufferedSender(url, sender) {
  debug(url);
  EventEmitter.call(this);
  this.sendBuffer = [];
  this.sender = sender;
  this.url = url;
}

inherits(BufferedSender, EventEmitter);

BufferedSender.prototype.send = function(message) {
  debug('send', message);
  this.sendBuffer.push(message);
  if (!this.sendStop) {
    this.sendSchedule();
  }
};

// For polling transports in a situation when in the message callback,
// new message is being send. If the sending connection was started
// before receiving one, it is possible to saturate the network and
// timeout due to the lack of receiving socket. To avoid that we delay
// sending messages by some small time, in order to let receiving
// connection be started beforehand. This is only a halfmeasure and
// does not fix the big problem, but it does make the tests go more
// stable on slow networks.
BufferedSender.prototype.sendScheduleWait = function() {
  debug('sendScheduleWait');
  var self = this;
  var tref;
  this.sendStop = function() {
    debug('sendStop');
    self.sendStop = null;
    clearTimeout(tref);
  };
  tref = setTimeout(function() {
    debug('timeout');
    self.sendStop = null;
    self.sendSchedule();
  }, 25);
};

BufferedSender.prototype.sendSchedule = function() {
  debug('sendSchedule', this.sendBuffer.length);
  var self = this;
  if (this.sendBuffer.length > 0) {
    var payload = '[' + this.sendBuffer.join(',') + ']';
    this.sendStop = this.sender(this.url, payload, function(err) {
      self.sendStop = null;
      if (err) {
        debug('error', err);
        self.emit('close', err.code || 1006, 'Sending error: ' + err);
        self.close();
      } else {
        self.sendScheduleWait();
      }
    });
    this.sendBuffer = [];
  }
};

BufferedSender.prototype._cleanup = function() {
  debug('_cleanup');
  this.removeAllListeners();
};

BufferedSender.prototype.close = function() {
  debug('close');
  this._cleanup();
  if (this.sendStop) {
    this.sendStop();
    this.sendStop = null;
  }
};

module.exports = BufferedSender;

}).call(this,{ env: {} })

},{"debug":55,"events":3,"inherits":57}],26:[function(require,module,exports){
(function (global){
'use strict';

var inherits = require('inherits')
  , IframeTransport = require('../iframe')
  , objectUtils = require('../../utils/object')
  ;

module.exports = function(transport) {

  function IframeWrapTransport(transUrl, baseUrl) {
    IframeTransport.call(this, transport.transportName, transUrl, baseUrl);
  }

  inherits(IframeWrapTransport, IframeTransport);

  IframeWrapTransport.enabled = function(url, info) {
    if (!global.document) {
      return false;
    }

    var iframeInfo = objectUtils.extend({}, info);
    iframeInfo.sameOrigin = true;
    return transport.enabled(iframeInfo) && IframeTransport.enabled();
  };

  IframeWrapTransport.transportName = 'iframe-' + transport.transportName;
  IframeWrapTransport.needBody = true;
  IframeWrapTransport.roundTrips = IframeTransport.roundTrips + transport.roundTrips - 1; // html, javascript (2) + transport - no CORS (1)

  IframeWrapTransport.facadeTransport = transport;

  return IframeWrapTransport;
};

}).call(this,typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../utils/object":49,"../iframe":22,"inherits":57}],27:[function(require,module,exports){
(function (process){
'use strict';

var inherits = require('inherits')
  , EventEmitter = require('events').EventEmitter
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:polling');
}

function Polling(Receiver, receiveUrl, AjaxObject) {
  debug(receiveUrl);
  EventEmitter.call(this);
  this.Receiver = Receiver;
  this.receiveUrl = receiveUrl;
  this.AjaxObject = AjaxObject;
  this._scheduleReceiver();
}

inherits(Polling, EventEmitter);

Polling.prototype._scheduleReceiver = function() {
  debug('_scheduleReceiver');
  var self = this;
  var poll = this.poll = new this.Receiver(this.receiveUrl, this.AjaxObject);

  poll.on('message', function(msg) {
    debug('message', msg);
    self.emit('message', msg);
  });

  poll.once('close', function(code, reason) {
    debug('close', code, reason, self.pollIsClosing);
    self.poll = poll = null;

    if (!self.pollIsClosing) {
      if (reason === 'network') {
        self._scheduleReceiver();
      } else {
        self.emit('close', code || 1006, reason);
        self.removeAllListeners();
      }
    }
  });
};

Polling.prototype.abort = function() {
  debug('abort');
  this.removeAllListeners();
  this.pollIsClosing = true;
  if (this.poll) {
    this.poll.abort();
  }
};

module.exports = Polling;

}).call(this,{ env: {} })

},{"debug":55,"events":3,"inherits":57}],28:[function(require,module,exports){
(function (process){
'use strict';

var inherits = require('inherits')
  , urlUtils = require('../../utils/url')
  , BufferedSender = require('./buffered-sender')
  , Polling = require('./polling')
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:sender-receiver');
}

function SenderReceiver(transUrl, urlSuffix, senderFunc, Receiver, AjaxObject) {
  var pollUrl = urlUtils.addPath(transUrl, urlSuffix);
  debug(pollUrl);
  var self = this;
  BufferedSender.call(this, transUrl, senderFunc);

  this.poll = new Polling(Receiver, pollUrl, AjaxObject);
  this.poll.on('message', function(msg) {
    debug('poll message', msg);
    self.emit('message', msg);
  });
  this.poll.once('close', function(code, reason) {
    debug('poll close', code, reason);
    self.poll = null;
    self.emit('close', code, reason);
    self.close();
  });
}

inherits(SenderReceiver, BufferedSender);

SenderReceiver.prototype.close = function() {
  BufferedSender.prototype.close.call(this);
  debug('close');
  this.removeAllListeners();
  if (this.poll) {
    this.poll.abort();
    this.poll = null;
  }
};

module.exports = SenderReceiver;

}).call(this,{ env: {} })

},{"../../utils/url":52,"./buffered-sender":25,"./polling":27,"debug":55,"inherits":57}],29:[function(require,module,exports){
(function (process){
'use strict';

var inherits = require('inherits')
  , EventEmitter = require('events').EventEmitter
  , EventSourceDriver = require('eventsource')
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:receiver:eventsource');
}

function EventSourceReceiver(url) {
  debug(url);
  EventEmitter.call(this);

  var self = this;
  var es = this.es = new EventSourceDriver(url);
  es.onmessage = function(e) {
    debug('message', e.data);
    self.emit('message', decodeURI(e.data));
  };
  es.onerror = function(e) {
    debug('error', es.readyState, e);
    // ES on reconnection has readyState = 0 or 1.
    // on network error it's CLOSED = 2
    var reason = (es.readyState !== 2 ? 'network' : 'permanent');
    self._cleanup();
    self._close(reason);
  };
}

inherits(EventSourceReceiver, EventEmitter);

EventSourceReceiver.prototype.abort = function() {
  debug('abort');
  this._cleanup();
  this._close('user');
};

EventSourceReceiver.prototype._cleanup = function() {
  debug('cleanup');
  var es = this.es;
  if (es) {
    es.onmessage = es.onerror = null;
    es.close();
    this.es = null;
  }
};

EventSourceReceiver.prototype._close = function(reason) {
  debug('close', reason);
  var self = this;
  // Safari and chrome < 15 crash if we close window before
  // waiting for ES cleanup. See:
  // https://code.google.com/p/chromium/issues/detail?id=89155
  setTimeout(function() {
    self.emit('close', null, reason);
    self.removeAllListeners();
  }, 200);
};

module.exports = EventSourceReceiver;

}).call(this,{ env: {} })

},{"debug":55,"events":3,"eventsource":18,"inherits":57}],30:[function(require,module,exports){
(function (process,global){
'use strict';

var inherits = require('inherits')
  , iframeUtils = require('../../utils/iframe')
  , urlUtils = require('../../utils/url')
  , EventEmitter = require('events').EventEmitter
  , random = require('../../utils/random')
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:receiver:htmlfile');
}

function HtmlfileReceiver(url) {
  debug(url);
  EventEmitter.call(this);
  var self = this;
  iframeUtils.polluteGlobalNamespace();

  this.id = 'a' + random.string(6);
  url = urlUtils.addQuery(url, 'c=' + decodeURIComponent(iframeUtils.WPrefix + '.' + this.id));

  debug('using htmlfile', HtmlfileReceiver.htmlfileEnabled);
  var constructFunc = HtmlfileReceiver.htmlfileEnabled ?
      iframeUtils.createHtmlfile : iframeUtils.createIframe;

  global[iframeUtils.WPrefix][this.id] = {
    start: function() {
      debug('start');
      self.iframeObj.loaded();
    }
  , message: function(data) {
      debug('message', data);
      self.emit('message', data);
    }
  , stop: function() {
      debug('stop');
      self._cleanup();
      self._close('network');
    }
  };
  this.iframeObj = constructFunc(url, function() {
    debug('callback');
    self._cleanup();
    self._close('permanent');
  });
}

inherits(HtmlfileReceiver, EventEmitter);

HtmlfileReceiver.prototype.abort = function() {
  debug('abort');
  this._cleanup();
  this._close('user');
};

HtmlfileReceiver.prototype._cleanup = function() {
  debug('_cleanup');
  if (this.iframeObj) {
    this.iframeObj.cleanup();
    this.iframeObj = null;
  }
  delete global[iframeUtils.WPrefix][this.id];
};

HtmlfileReceiver.prototype._close = function(reason) {
  debug('_close', reason);
  this.emit('close', null, reason);
  this.removeAllListeners();
};

HtmlfileReceiver.htmlfileEnabled = false;

// obfuscate to avoid firewalls
var axo = ['Active'].concat('Object').join('X');
if (axo in global) {
  try {
    HtmlfileReceiver.htmlfileEnabled = !!new global[axo]('htmlfile');
  } catch (x) {
    // intentionally empty
  }
}

HtmlfileReceiver.enabled = HtmlfileReceiver.htmlfileEnabled || iframeUtils.iframeEnabled;

module.exports = HtmlfileReceiver;

}).call(this,{ env: {} },typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../utils/iframe":47,"../../utils/random":50,"../../utils/url":52,"debug":55,"events":3,"inherits":57}],31:[function(require,module,exports){
(function (process,global){
'use strict';

var utils = require('../../utils/iframe')
  , random = require('../../utils/random')
  , browser = require('../../utils/browser')
  , urlUtils = require('../../utils/url')
  , inherits = require('inherits')
  , EventEmitter = require('events').EventEmitter
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:receiver:jsonp');
}

function JsonpReceiver(url) {
  debug(url);
  var self = this;
  EventEmitter.call(this);

  utils.polluteGlobalNamespace();

  this.id = 'a' + random.string(6);
  var urlWithId = urlUtils.addQuery(url, 'c=' + encodeURIComponent(utils.WPrefix + '.' + this.id));

  global[utils.WPrefix][this.id] = this._callback.bind(this);
  this._createScript(urlWithId);

  // Fallback mostly for Konqueror - stupid timer, 35 seconds shall be plenty.
  this.timeoutId = setTimeout(function() {
    debug('timeout');
    self._abort(new Error('JSONP script loaded abnormally (timeout)'));
  }, JsonpReceiver.timeout);
}

inherits(JsonpReceiver, EventEmitter);

JsonpReceiver.prototype.abort = function() {
  debug('abort');
  if (global[utils.WPrefix][this.id]) {
    var err = new Error('JSONP user aborted read');
    err.code = 1000;
    this._abort(err);
  }
};

JsonpReceiver.timeout = 35000;
JsonpReceiver.scriptErrorTimeout = 1000;

JsonpReceiver.prototype._callback = function(data) {
  debug('_callback', data);
  this._cleanup();

  if (this.aborting) {
    return;
  }

  if (data) {
    debug('message', data);
    this.emit('message', data);
  }
  this.emit('close', null, 'network');
  this.removeAllListeners();
};

JsonpReceiver.prototype._abort = function(err) {
  debug('_abort', err);
  this._cleanup();
  this.aborting = true;
  this.emit('close', err.code, err.message);
  this.removeAllListeners();
};

JsonpReceiver.prototype._cleanup = function() {
  debug('_cleanup');
  clearTimeout(this.timeoutId);
  if (this.script2) {
    this.script2.parentNode.removeChild(this.script2);
    this.script2 = null;
  }
  if (this.script) {
    var script = this.script;
    // Unfortunately, you can't really abort script loading of
    // the script.
    script.parentNode.removeChild(script);
    script.onreadystatechange = script.onerror =
        script.onload = script.onclick = null;
    this.script = null;
  }
  delete global[utils.WPrefix][this.id];
};

JsonpReceiver.prototype._scriptError = function() {
  debug('_scriptError');
  var self = this;
  if (this.errorTimer) {
    return;
  }

  this.errorTimer = setTimeout(function() {
    if (!self.loadedOkay) {
      self._abort(new Error('JSONP script loaded abnormally (onerror)'));
    }
  }, JsonpReceiver.scriptErrorTimeout);
};

JsonpReceiver.prototype._createScript = function(url) {
  debug('_createScript', url);
  var self = this;
  var script = this.script = global.document.createElement('script');
  var script2;  // Opera synchronous load trick.

  script.id = 'a' + random.string(8);
  script.src = url;
  script.type = 'text/javascript';
  script.charset = 'UTF-8';
  script.onerror = this._scriptError.bind(this);
  script.onload = function() {
    debug('onload');
    self._abort(new Error('JSONP script loaded abnormally (onload)'));
  };

  // IE9 fires 'error' event after onreadystatechange or before, in random order.
  // Use loadedOkay to determine if actually errored
  script.onreadystatechange = function() {
    debug('onreadystatechange', script.readyState);
    if (/loaded|closed/.test(script.readyState)) {
      if (script && script.htmlFor && script.onclick) {
        self.loadedOkay = true;
        try {
          // In IE, actually execute the script.
          script.onclick();
        } catch (x) {
          // intentionally empty
        }
      }
      if (script) {
        self._abort(new Error('JSONP script loaded abnormally (onreadystatechange)'));
      }
    }
  };
  // IE: event/htmlFor/onclick trick.
  // One can't rely on proper order for onreadystatechange. In order to
  // make sure, set a 'htmlFor' and 'event' properties, so that
  // script code will be installed as 'onclick' handler for the
  // script object. Later, onreadystatechange, manually execute this
  // code. FF and Chrome doesn't work with 'event' and 'htmlFor'
  // set. For reference see:
  //   http://jaubourg.net/2010/07/loading-script-as-onclick-handler-of.html
  // Also, read on that about script ordering:
  //   http://wiki.whatwg.org/wiki/Dynamic_Script_Execution_Order
  if (typeof script.async === 'undefined' && global.document.attachEvent) {
    // According to mozilla docs, in recent browsers script.async defaults
    // to 'true', so we may use it to detect a good browser:
    // https://developer.mozilla.org/en/HTML/Element/script
    if (!browser.isOpera()) {
      // Naively assume we're in IE
      try {
        script.htmlFor = script.id;
        script.event = 'onclick';
      } catch (x) {
        // intentionally empty
      }
      script.async = true;
    } else {
      // Opera, second sync script hack
      script2 = this.script2 = global.document.createElement('script');
      script2.text = "try{var a = document.getElementById('" + script.id + "'); if(a)a.onerror();}catch(x){};";
      script.async = script2.async = false;
    }
  }
  if (typeof script.async !== 'undefined') {
    script.async = true;
  }

  var head = global.document.getElementsByTagName('head')[0];
  head.insertBefore(script, head.firstChild);
  if (script2) {
    head.insertBefore(script2, head.firstChild);
  }
};

module.exports = JsonpReceiver;

}).call(this,{ env: {} },typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../utils/browser":44,"../../utils/iframe":47,"../../utils/random":50,"../../utils/url":52,"debug":55,"events":3,"inherits":57}],32:[function(require,module,exports){
(function (process){
'use strict';

var inherits = require('inherits')
  , EventEmitter = require('events').EventEmitter
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:receiver:xhr');
}

function XhrReceiver(url, AjaxObject) {
  debug(url);
  EventEmitter.call(this);
  var self = this;

  this.bufferPosition = 0;

  this.xo = new AjaxObject('POST', url, null);
  this.xo.on('chunk', this._chunkHandler.bind(this));
  this.xo.once('finish', function(status, text) {
    debug('finish', status, text);
    self._chunkHandler(status, text);
    self.xo = null;
    var reason = status === 200 ? 'network' : 'permanent';
    debug('close', reason);
    self.emit('close', null, reason);
    self._cleanup();
  });
}

inherits(XhrReceiver, EventEmitter);

XhrReceiver.prototype._chunkHandler = function(status, text) {
  debug('_chunkHandler', status);
  if (status !== 200 || !text) {
    return;
  }

  for (var idx = -1; ; this.bufferPosition += idx + 1) {
    var buf = text.slice(this.bufferPosition);
    idx = buf.indexOf('\n');
    if (idx === -1) {
      break;
    }
    var msg = buf.slice(0, idx);
    if (msg) {
      debug('message', msg);
      this.emit('message', msg);
    }
  }
};

XhrReceiver.prototype._cleanup = function() {
  debug('_cleanup');
  this.removeAllListeners();
};

XhrReceiver.prototype.abort = function() {
  debug('abort');
  if (this.xo) {
    this.xo.close();
    debug('close');
    this.emit('close', null, 'user');
    this.xo = null;
  }
  this._cleanup();
};

module.exports = XhrReceiver;

}).call(this,{ env: {} })

},{"debug":55,"events":3,"inherits":57}],33:[function(require,module,exports){
(function (process,global){
'use strict';

var random = require('../../utils/random')
  , urlUtils = require('../../utils/url')
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:sender:jsonp');
}

var form, area;

function createIframe(id) {
  debug('createIframe', id);
  try {
    // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
    return global.document.createElement('<iframe name="' + id + '">');
  } catch (x) {
    var iframe = global.document.createElement('iframe');
    iframe.name = id;
    return iframe;
  }
}

function createForm() {
  debug('createForm');
  form = global.document.createElement('form');
  form.style.display = 'none';
  form.style.position = 'absolute';
  form.method = 'POST';
  form.enctype = 'application/x-www-form-urlencoded';
  form.acceptCharset = 'UTF-8';

  area = global.document.createElement('textarea');
  area.name = 'd';
  form.appendChild(area);

  global.document.body.appendChild(form);
}

module.exports = function(url, payload, callback) {
  debug(url, payload);
  if (!form) {
    createForm();
  }
  var id = 'a' + random.string(8);
  form.target = id;
  form.action = urlUtils.addQuery(urlUtils.addPath(url, '/jsonp_send'), 'i=' + id);

  var iframe = createIframe(id);
  iframe.id = id;
  iframe.style.display = 'none';
  form.appendChild(iframe);

  try {
    area.value = payload;
  } catch (e) {
    // seriously broken browsers get here
  }
  form.submit();

  var completed = function(err) {
    debug('completed', id, err);
    if (!iframe.onerror) {
      return;
    }
    iframe.onreadystatechange = iframe.onerror = iframe.onload = null;
    // Opera mini doesn't like if we GC iframe
    // immediately, thus this timeout.
    setTimeout(function() {
      debug('cleaning up', id);
      iframe.parentNode.removeChild(iframe);
      iframe = null;
    }, 500);
    area.value = '';
    // It is not possible to detect if the iframe succeeded or
    // failed to submit our form.
    callback(err);
  };
  iframe.onerror = function() {
    debug('onerror', id);
    completed();
  };
  iframe.onload = function() {
    debug('onload', id);
    completed();
  };
  iframe.onreadystatechange = function(e) {
    debug('onreadystatechange', id, iframe.readyState, e);
    if (iframe.readyState === 'complete') {
      completed();
    }
  };
  return function() {
    debug('aborted', id);
    completed(new Error('Aborted'));
  };
};

}).call(this,{ env: {} },typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../utils/random":50,"../../utils/url":52,"debug":55}],34:[function(require,module,exports){
(function (process,global){
'use strict';

var EventEmitter = require('events').EventEmitter
  , inherits = require('inherits')
  , eventUtils = require('../../utils/event')
  , browser = require('../../utils/browser')
  , urlUtils = require('../../utils/url')
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:sender:xdr');
}

// References:
//   http://ajaxian.com/archives/100-line-ajax-wrapper
//   http://msdn.microsoft.com/en-us/library/cc288060(v=VS.85).aspx

function XDRObject(method, url, payload) {
  debug(method, url);
  var self = this;
  EventEmitter.call(this);

  setTimeout(function() {
    self._start(method, url, payload);
  }, 0);
}

inherits(XDRObject, EventEmitter);

XDRObject.prototype._start = function(method, url, payload) {
  debug('_start');
  var self = this;
  var xdr = new global.XDomainRequest();
  // IE caches even POSTs
  url = urlUtils.addQuery(url, 't=' + (+new Date()));

  xdr.onerror = function() {
    debug('onerror');
    self._error();
  };
  xdr.ontimeout = function() {
    debug('ontimeout');
    self._error();
  };
  xdr.onprogress = function() {
    debug('progress', xdr.responseText);
    self.emit('chunk', 200, xdr.responseText);
  };
  xdr.onload = function() {
    debug('load');
    self.emit('finish', 200, xdr.responseText);
    self._cleanup(false);
  };
  this.xdr = xdr;
  this.unloadRef = eventUtils.unloadAdd(function() {
    self._cleanup(true);
  });
  try {
    // Fails with AccessDenied if port number is bogus
    this.xdr.open(method, url);
    if (this.timeout) {
      this.xdr.timeout = this.timeout;
    }
    this.xdr.send(payload);
  } catch (x) {
    this._error();
  }
};

XDRObject.prototype._error = function() {
  this.emit('finish', 0, '');
  this._cleanup(false);
};

XDRObject.prototype._cleanup = function(abort) {
  debug('cleanup', abort);
  if (!this.xdr) {
    return;
  }
  this.removeAllListeners();
  eventUtils.unloadDel(this.unloadRef);

  this.xdr.ontimeout = this.xdr.onerror = this.xdr.onprogress = this.xdr.onload = null;
  if (abort) {
    try {
      this.xdr.abort();
    } catch (x) {
      // intentionally empty
    }
  }
  this.unloadRef = this.xdr = null;
};

XDRObject.prototype.close = function() {
  debug('close');
  this._cleanup(true);
};

// IE 8/9 if the request target uses the same scheme - #79
XDRObject.enabled = !!(global.XDomainRequest && browser.hasDomain());

module.exports = XDRObject;

}).call(this,{ env: {} },typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../utils/browser":44,"../../utils/event":46,"../../utils/url":52,"debug":55,"events":3,"inherits":57}],35:[function(require,module,exports){
'use strict';

var inherits = require('inherits')
  , XhrDriver = require('../driver/xhr')
  ;

function XHRCorsObject(method, url, payload, opts) {
  XhrDriver.call(this, method, url, payload, opts);
}

inherits(XHRCorsObject, XhrDriver);

XHRCorsObject.enabled = XhrDriver.enabled && XhrDriver.supportsCORS;

module.exports = XHRCorsObject;

},{"../driver/xhr":17,"inherits":57}],36:[function(require,module,exports){
'use strict';

var EventEmitter = require('events').EventEmitter
  , inherits = require('inherits')
  ;

function XHRFake(/* method, url, payload, opts */) {
  var self = this;
  EventEmitter.call(this);

  this.to = setTimeout(function() {
    self.emit('finish', 200, '{}');
  }, XHRFake.timeout);
}

inherits(XHRFake, EventEmitter);

XHRFake.prototype.close = function() {
  clearTimeout(this.to);
};

XHRFake.timeout = 2000;

module.exports = XHRFake;

},{"events":3,"inherits":57}],37:[function(require,module,exports){
'use strict';

var inherits = require('inherits')
  , XhrDriver = require('../driver/xhr')
  ;

function XHRLocalObject(method, url, payload /*, opts */) {
  XhrDriver.call(this, method, url, payload, {
    noCredentials: true
  });
}

inherits(XHRLocalObject, XhrDriver);

XHRLocalObject.enabled = XhrDriver.enabled;

module.exports = XHRLocalObject;

},{"../driver/xhr":17,"inherits":57}],38:[function(require,module,exports){
(function (process){
'use strict';

var utils = require('../utils/event')
  , urlUtils = require('../utils/url')
  , inherits = require('inherits')
  , EventEmitter = require('events').EventEmitter
  , WebsocketDriver = require('./driver/websocket')
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:websocket');
}

function WebSocketTransport(transUrl, ignore, options) {
  if (!WebSocketTransport.enabled()) {
    throw new Error('Transport created when disabled');
  }

  EventEmitter.call(this);
  debug('constructor', transUrl);

  var self = this;
  var url = urlUtils.addPath(transUrl, '/websocket');
  if (url.slice(0, 5) === 'https') {
    url = 'wss' + url.slice(5);
  } else {
    url = 'ws' + url.slice(4);
  }
  this.url = url;

  this.ws = new WebsocketDriver(this.url, [], options);
  this.ws.onmessage = function(e) {
    debug('message event', e.data);
    self.emit('message', e.data);
  };
  // Firefox has an interesting bug. If a websocket connection is
  // created after onunload, it stays alive even when user
  // navigates away from the page. In such situation let's lie -
  // let's not open the ws connection at all. See:
  // https://github.com/sockjs/sockjs-client/issues/28
  // https://bugzilla.mozilla.org/show_bug.cgi?id=696085
  this.unloadRef = utils.unloadAdd(function() {
    debug('unload');
    self.ws.close();
  });
  this.ws.onclose = function(e) {
    debug('close event', e.code, e.reason);
    self.emit('close', e.code, e.reason);
    self._cleanup();
  };
  this.ws.onerror = function(e) {
    debug('error event', e);
    self.emit('close', 1006, 'WebSocket connection broken');
    self._cleanup();
  };
}

inherits(WebSocketTransport, EventEmitter);

WebSocketTransport.prototype.send = function(data) {
  var msg = '[' + data + ']';
  debug('send', msg);
  this.ws.send(msg);
};

WebSocketTransport.prototype.close = function() {
  debug('close');
  var ws = this.ws;
  this._cleanup();
  if (ws) {
    ws.close();
  }
};

WebSocketTransport.prototype._cleanup = function() {
  debug('_cleanup');
  var ws = this.ws;
  if (ws) {
    ws.onmessage = ws.onclose = ws.onerror = null;
  }
  utils.unloadDel(this.unloadRef);
  this.unloadRef = this.ws = null;
  this.removeAllListeners();
};

WebSocketTransport.enabled = function() {
  debug('enabled');
  return !!WebsocketDriver;
};
WebSocketTransport.transportName = 'websocket';

// In theory, ws should require 1 round trip. But in chrome, this is
// not very stable over SSL. Most likely a ws connection requires a
// separate SSL connection, in which case 2 round trips are an
// absolute minumum.
WebSocketTransport.roundTrips = 2;

module.exports = WebSocketTransport;

}).call(this,{ env: {} })

},{"../utils/event":46,"../utils/url":52,"./driver/websocket":19,"debug":55,"events":3,"inherits":57}],39:[function(require,module,exports){
'use strict';

var inherits = require('inherits')
  , AjaxBasedTransport = require('./lib/ajax-based')
  , XdrStreamingTransport = require('./xdr-streaming')
  , XhrReceiver = require('./receiver/xhr')
  , XDRObject = require('./sender/xdr')
  ;

function XdrPollingTransport(transUrl) {
  if (!XDRObject.enabled) {
    throw new Error('Transport created when disabled');
  }
  AjaxBasedTransport.call(this, transUrl, '/xhr', XhrReceiver, XDRObject);
}

inherits(XdrPollingTransport, AjaxBasedTransport);

XdrPollingTransport.enabled = XdrStreamingTransport.enabled;
XdrPollingTransport.transportName = 'xdr-polling';
XdrPollingTransport.roundTrips = 2; // preflight, ajax

module.exports = XdrPollingTransport;

},{"./lib/ajax-based":24,"./receiver/xhr":32,"./sender/xdr":34,"./xdr-streaming":40,"inherits":57}],40:[function(require,module,exports){
'use strict';

var inherits = require('inherits')
  , AjaxBasedTransport = require('./lib/ajax-based')
  , XhrReceiver = require('./receiver/xhr')
  , XDRObject = require('./sender/xdr')
  ;

// According to:
//   http://stackoverflow.com/questions/1641507/detect-browser-support-for-cross-domain-xmlhttprequests
//   http://hacks.mozilla.org/2009/07/cross-site-xmlhttprequest-with-cors/

function XdrStreamingTransport(transUrl) {
  if (!XDRObject.enabled) {
    throw new Error('Transport created when disabled');
  }
  AjaxBasedTransport.call(this, transUrl, '/xhr_streaming', XhrReceiver, XDRObject);
}

inherits(XdrStreamingTransport, AjaxBasedTransport);

XdrStreamingTransport.enabled = function(info) {
  if (info.cookie_needed || info.nullOrigin) {
    return false;
  }
  return XDRObject.enabled && info.sameScheme;
};

XdrStreamingTransport.transportName = 'xdr-streaming';
XdrStreamingTransport.roundTrips = 2; // preflight, ajax

module.exports = XdrStreamingTransport;

},{"./lib/ajax-based":24,"./receiver/xhr":32,"./sender/xdr":34,"inherits":57}],41:[function(require,module,exports){
'use strict';

var inherits = require('inherits')
  , AjaxBasedTransport = require('./lib/ajax-based')
  , XhrReceiver = require('./receiver/xhr')
  , XHRCorsObject = require('./sender/xhr-cors')
  , XHRLocalObject = require('./sender/xhr-local')
  ;

function XhrPollingTransport(transUrl) {
  if (!XHRLocalObject.enabled && !XHRCorsObject.enabled) {
    throw new Error('Transport created when disabled');
  }
  AjaxBasedTransport.call(this, transUrl, '/xhr', XhrReceiver, XHRCorsObject);
}

inherits(XhrPollingTransport, AjaxBasedTransport);

XhrPollingTransport.enabled = function(info) {
  if (info.nullOrigin) {
    return false;
  }

  if (XHRLocalObject.enabled && info.sameOrigin) {
    return true;
  }
  return XHRCorsObject.enabled;
};

XhrPollingTransport.transportName = 'xhr-polling';
XhrPollingTransport.roundTrips = 2; // preflight, ajax

module.exports = XhrPollingTransport;

},{"./lib/ajax-based":24,"./receiver/xhr":32,"./sender/xhr-cors":35,"./sender/xhr-local":37,"inherits":57}],42:[function(require,module,exports){
(function (global){
'use strict';

var inherits = require('inherits')
  , AjaxBasedTransport = require('./lib/ajax-based')
  , XhrReceiver = require('./receiver/xhr')
  , XHRCorsObject = require('./sender/xhr-cors')
  , XHRLocalObject = require('./sender/xhr-local')
  , browser = require('../utils/browser')
  ;

function XhrStreamingTransport(transUrl) {
  if (!XHRLocalObject.enabled && !XHRCorsObject.enabled) {
    throw new Error('Transport created when disabled');
  }
  AjaxBasedTransport.call(this, transUrl, '/xhr_streaming', XhrReceiver, XHRCorsObject);
}

inherits(XhrStreamingTransport, AjaxBasedTransport);

XhrStreamingTransport.enabled = function(info) {
  if (info.nullOrigin) {
    return false;
  }
  // Opera doesn't support xhr-streaming #60
  // But it might be able to #92
  if (browser.isOpera()) {
    return false;
  }

  return XHRCorsObject.enabled;
};

XhrStreamingTransport.transportName = 'xhr-streaming';
XhrStreamingTransport.roundTrips = 2; // preflight, ajax

// Safari gets confused when a streaming ajax request is started
// before onload. This causes the load indicator to spin indefinetely.
// Only require body when used in a browser
XhrStreamingTransport.needBody = !!global.document;

module.exports = XhrStreamingTransport;

}).call(this,typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../utils/browser":44,"./lib/ajax-based":24,"./receiver/xhr":32,"./sender/xhr-cors":35,"./sender/xhr-local":37,"inherits":57}],43:[function(require,module,exports){
(function (global){
'use strict';

if (global.crypto && global.crypto.getRandomValues) {
  module.exports.randomBytes = function(length) {
    var bytes = new Uint8Array(length);
    global.crypto.getRandomValues(bytes);
    return bytes;
  };
} else {
  module.exports.randomBytes = function(length) {
    var bytes = new Array(length);
    for (var i = 0; i < length; i++) {
      bytes[i] = Math.floor(Math.random() * 256);
    }
    return bytes;
  };
}

}).call(this,typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],44:[function(require,module,exports){
(function (global){
'use strict';

module.exports = {
  isOpera: function() {
    return global.navigator &&
      /opera/i.test(global.navigator.userAgent);
  }

, isKonqueror: function() {
    return global.navigator &&
      /konqueror/i.test(global.navigator.userAgent);
  }

  // #187 wrap document.domain in try/catch because of WP8 from file:///
, hasDomain: function () {
    // non-browser client always has a domain
    if (!global.document) {
      return true;
    }

    try {
      return !!global.document.domain;
    } catch (e) {
      return false;
    }
  }
};

}).call(this,typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],45:[function(require,module,exports){
'use strict';

var JSON3 = require('json3');

// Some extra characters that Chrome gets wrong, and substitutes with
// something else on the wire.
// eslint-disable-next-line no-control-regex, no-misleading-character-class
var extraEscapable = /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g
  , extraLookup;

// This may be quite slow, so let's delay until user actually uses bad
// characters.
var unrollLookup = function(escapable) {
  var i;
  var unrolled = {};
  var c = [];
  for (i = 0; i < 65536; i++) {
    c.push( String.fromCharCode(i) );
  }
  escapable.lastIndex = 0;
  c.join('').replace(escapable, function(a) {
    unrolled[ a ] = '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
    return '';
  });
  escapable.lastIndex = 0;
  return unrolled;
};

// Quote string, also taking care of unicode characters that browsers
// often break. Especially, take care of unicode surrogates:
// http://en.wikipedia.org/wiki/Mapping_of_Unicode_characters#Surrogates
module.exports = {
  quote: function(string) {
    var quoted = JSON3.stringify(string);

    // In most cases this should be very fast and good enough.
    extraEscapable.lastIndex = 0;
    if (!extraEscapable.test(quoted)) {
      return quoted;
    }

    if (!extraLookup) {
      extraLookup = unrollLookup(extraEscapable);
    }

    return quoted.replace(extraEscapable, function(a) {
      return extraLookup[a];
    });
  }
};

},{"json3":58}],46:[function(require,module,exports){
(function (global){
'use strict';

var random = require('./random');

var onUnload = {}
  , afterUnload = false
    // detect google chrome packaged apps because they don't allow the 'unload' event
  , isChromePackagedApp = global.chrome && global.chrome.app && global.chrome.app.runtime
  ;

module.exports = {
  attachEvent: function(event, listener) {
    if (typeof global.addEventListener !== 'undefined') {
      global.addEventListener(event, listener, false);
    } else if (global.document && global.attachEvent) {
      // IE quirks.
      // According to: http://stevesouders.com/misc/test-postmessage.php
      // the message gets delivered only to 'document', not 'window'.
      global.document.attachEvent('on' + event, listener);
      // I get 'window' for ie8.
      global.attachEvent('on' + event, listener);
    }
  }

, detachEvent: function(event, listener) {
    if (typeof global.addEventListener !== 'undefined') {
      global.removeEventListener(event, listener, false);
    } else if (global.document && global.detachEvent) {
      global.document.detachEvent('on' + event, listener);
      global.detachEvent('on' + event, listener);
    }
  }

, unloadAdd: function(listener) {
    if (isChromePackagedApp) {
      return null;
    }

    var ref = random.string(8);
    onUnload[ref] = listener;
    if (afterUnload) {
      setTimeout(this.triggerUnloadCallbacks, 0);
    }
    return ref;
  }

, unloadDel: function(ref) {
    if (ref in onUnload) {
      delete onUnload[ref];
    }
  }

, triggerUnloadCallbacks: function() {
    for (var ref in onUnload) {
      onUnload[ref]();
      delete onUnload[ref];
    }
  }
};

var unloadTriggered = function() {
  if (afterUnload) {
    return;
  }
  afterUnload = true;
  module.exports.triggerUnloadCallbacks();
};

// 'unload' alone is not reliable in opera within an iframe, but we
// can't use `beforeunload` as IE fires it on javascript: links.
if (!isChromePackagedApp) {
  module.exports.attachEvent('unload', unloadTriggered);
}

}).call(this,typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./random":50}],47:[function(require,module,exports){
(function (process,global){
'use strict';

var eventUtils = require('./event')
  , JSON3 = require('json3')
  , browser = require('./browser')
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:utils:iframe');
}

module.exports = {
  WPrefix: '_jp'
, currentWindowId: null

, polluteGlobalNamespace: function() {
    if (!(module.exports.WPrefix in global)) {
      global[module.exports.WPrefix] = {};
    }
  }

, postMessage: function(type, data) {
    if (global.parent !== global) {
      global.parent.postMessage(JSON3.stringify({
        windowId: module.exports.currentWindowId
      , type: type
      , data: data || ''
      }), '*');
    } else {
      debug('Cannot postMessage, no parent window.', type, data);
    }
  }

, createIframe: function(iframeUrl, errorCallback) {
    var iframe = global.document.createElement('iframe');
    var tref, unloadRef;
    var unattach = function() {
      debug('unattach');
      clearTimeout(tref);
      // Explorer had problems with that.
      try {
        iframe.onload = null;
      } catch (x) {
        // intentionally empty
      }
      iframe.onerror = null;
    };
    var cleanup = function() {
      debug('cleanup');
      if (iframe) {
        unattach();
        // This timeout makes chrome fire onbeforeunload event
        // within iframe. Without the timeout it goes straight to
        // onunload.
        setTimeout(function() {
          if (iframe) {
            iframe.parentNode.removeChild(iframe);
          }
          iframe = null;
        }, 0);
        eventUtils.unloadDel(unloadRef);
      }
    };
    var onerror = function(err) {
      debug('onerror', err);
      if (iframe) {
        cleanup();
        errorCallback(err);
      }
    };
    var post = function(msg, origin) {
      debug('post', msg, origin);
      setTimeout(function() {
        try {
          // When the iframe is not loaded, IE raises an exception
          // on 'contentWindow'.
          if (iframe && iframe.contentWindow) {
            iframe.contentWindow.postMessage(msg, origin);
          }
        } catch (x) {
          // intentionally empty
        }
      }, 0);
    };

    iframe.src = iframeUrl;
    iframe.style.display = 'none';
    iframe.style.position = 'absolute';
    iframe.onerror = function() {
      onerror('onerror');
    };
    iframe.onload = function() {
      debug('onload');
      // `onload` is triggered before scripts on the iframe are
      // executed. Give it few seconds to actually load stuff.
      clearTimeout(tref);
      tref = setTimeout(function() {
        onerror('onload timeout');
      }, 2000);
    };
    global.document.body.appendChild(iframe);
    tref = setTimeout(function() {
      onerror('timeout');
    }, 15000);
    unloadRef = eventUtils.unloadAdd(cleanup);
    return {
      post: post
    , cleanup: cleanup
    , loaded: unattach
    };
  }

/* eslint no-undef: "off", new-cap: "off" */
, createHtmlfile: function(iframeUrl, errorCallback) {
    var axo = ['Active'].concat('Object').join('X');
    var doc = new global[axo]('htmlfile');
    var tref, unloadRef;
    var iframe;
    var unattach = function() {
      clearTimeout(tref);
      iframe.onerror = null;
    };
    var cleanup = function() {
      if (doc) {
        unattach();
        eventUtils.unloadDel(unloadRef);
        iframe.parentNode.removeChild(iframe);
        iframe = doc = null;
        CollectGarbage();
      }
    };
    var onerror = function(r) {
      debug('onerror', r);
      if (doc) {
        cleanup();
        errorCallback(r);
      }
    };
    var post = function(msg, origin) {
      try {
        // When the iframe is not loaded, IE raises an exception
        // on 'contentWindow'.
        setTimeout(function() {
          if (iframe && iframe.contentWindow) {
              iframe.contentWindow.postMessage(msg, origin);
          }
        }, 0);
      } catch (x) {
        // intentionally empty
      }
    };

    doc.open();
    doc.write('<html><s' + 'cript>' +
              'document.domain="' + global.document.domain + '";' +
              '</s' + 'cript></html>');
    doc.close();
    doc.parentWindow[module.exports.WPrefix] = global[module.exports.WPrefix];
    var c = doc.createElement('div');
    doc.body.appendChild(c);
    iframe = doc.createElement('iframe');
    c.appendChild(iframe);
    iframe.src = iframeUrl;
    iframe.onerror = function() {
      onerror('onerror');
    };
    tref = setTimeout(function() {
      onerror('timeout');
    }, 15000);
    unloadRef = eventUtils.unloadAdd(cleanup);
    return {
      post: post
    , cleanup: cleanup
    , loaded: unattach
    };
  }
};

module.exports.iframeEnabled = false;
if (global.document) {
  // postMessage misbehaves in konqueror 4.6.5 - the messages are delivered with
  // huge delay, or not at all.
  module.exports.iframeEnabled = (typeof global.postMessage === 'function' ||
    typeof global.postMessage === 'object') && (!browser.isKonqueror());
}

}).call(this,{ env: {} },typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./browser":44,"./event":46,"debug":55,"json3":58}],48:[function(require,module,exports){
(function (global){
'use strict';

var logObject = {};
['log', 'debug', 'warn'].forEach(function (level) {
  var levelExists;

  try {
    levelExists = global.console && global.console[level] && global.console[level].apply;
  } catch(e) {
    // do nothing
  }

  logObject[level] = levelExists ? function () {
    return global.console[level].apply(global.console, arguments);
  } : (level === 'log' ? function () {} : logObject.log);
});

module.exports = logObject;

}).call(this,typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],49:[function(require,module,exports){
'use strict';

module.exports = {
  isObject: function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }

, extend: function(obj) {
    if (!this.isObject(obj)) {
      return obj;
    }
    var source, prop;
    for (var i = 1, length = arguments.length; i < length; i++) {
      source = arguments[i];
      for (prop in source) {
        if (Object.prototype.hasOwnProperty.call(source, prop)) {
          obj[prop] = source[prop];
        }
      }
    }
    return obj;
  }
};

},{}],50:[function(require,module,exports){
'use strict';

var crypto = require('crypto');

// This string has length 32, a power of 2, so the modulus doesn't introduce a
// bias.
var _randomStringChars = 'abcdefghijklmnopqrstuvwxyz012345';
module.exports = {
  string: function(length) {
    var max = _randomStringChars.length;
    var bytes = crypto.randomBytes(length);
    var ret = [];
    for (var i = 0; i < length; i++) {
      ret.push(_randomStringChars.substr(bytes[i] % max, 1));
    }
    return ret.join('');
  }

, number: function(max) {
    return Math.floor(Math.random() * max);
  }

, numberString: function(max) {
    var t = ('' + (max - 1)).length;
    var p = new Array(t + 1).join('0');
    return (p + this.number(max)).slice(-t);
  }
};

},{"crypto":43}],51:[function(require,module,exports){
(function (process){
'use strict';

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:utils:transport');
}

module.exports = function(availableTransports) {
  return {
    filterToEnabled: function(transportsWhitelist, info) {
      var transports = {
        main: []
      , facade: []
      };
      if (!transportsWhitelist) {
        transportsWhitelist = [];
      } else if (typeof transportsWhitelist === 'string') {
        transportsWhitelist = [transportsWhitelist];
      }

      availableTransports.forEach(function(trans) {
        if (!trans) {
          return;
        }

        if (trans.transportName === 'websocket' && info.websocket === false) {
          debug('disabled from server', 'websocket');
          return;
        }

        if (transportsWhitelist.length &&
            transportsWhitelist.indexOf(trans.transportName) === -1) {
          debug('not in whitelist', trans.transportName);
          return;
        }

        if (trans.enabled(info)) {
          debug('enabled', trans.transportName);
          transports.main.push(trans);
          if (trans.facadeTransport) {
            transports.facade.push(trans.facadeTransport);
          }
        } else {
          debug('disabled', trans.transportName);
        }
      });
      return transports;
    }
  };
};

}).call(this,{ env: {} })

},{"debug":55}],52:[function(require,module,exports){
(function (process){
'use strict';

var URL = require('url-parse');

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:utils:url');
}

module.exports = {
  getOrigin: function(url) {
    if (!url) {
      return null;
    }

    var p = new URL(url);
    if (p.protocol === 'file:') {
      return null;
    }

    var port = p.port;
    if (!port) {
      port = (p.protocol === 'https:') ? '443' : '80';
    }

    return p.protocol + '//' + p.hostname + ':' + port;
  }

, isOriginEqual: function(a, b) {
    var res = this.getOrigin(a) === this.getOrigin(b);
    debug('same', a, b, res);
    return res;
  }

, isSchemeEqual: function(a, b) {
    return (a.split(':')[0] === b.split(':')[0]);
  }

, addPath: function (url, path) {
    var qs = url.split('?');
    return qs[0] + path + (qs[1] ? '?' + qs[1] : '');
  }

, addQuery: function (url, q) {
    return url + (url.indexOf('?') === -1 ? ('?' + q) : ('&' + q));
  }

, isLoopbackAddr: function (addr) {
    return /^127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(addr) || /^\[::1\]$/.test(addr);
  }
};

}).call(this,{ env: {} })

},{"debug":55,"url-parse":61}],53:[function(require,module,exports){
module.exports = '1.5.1';

},{}],54:[function(require,module,exports){
/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}

},{}],55:[function(require,module,exports){
(function (process){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
/**
 * Colors.
 */

exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */
// eslint-disable-next-line complexity

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
    return true;
  } // Internet Explorer and Edge do not support colors.


  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  } // Is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */


function formatArgs(args) {
  args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);

  if (!this.useColors) {
    return;
  }

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit'); // The final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into

  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if (match === '%%') {
      return;
    }

    index++;

    if (match === '%c') {
      // We only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });
  args.splice(lastC, 0, c);
}
/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */


function log() {
  var _console;

  // This hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return (typeof console === "undefined" ? "undefined" : _typeof(console)) === 'object' && console.log && (_console = console).log.apply(_console, arguments);
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */


function save(namespaces) {
  try {
    if (namespaces) {
      exports.storage.setItem('debug', namespaces);
    } else {
      exports.storage.removeItem('debug');
    }
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */


function load() {
  var r;

  try {
    r = exports.storage.getItem('debug');
  } catch (error) {} // Swallow
  // XXX (@Qix-) should we be logging these?
  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */


function localstorage() {
  try {
    // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
    // The Browser also has localStorage in the global context.
    return localStorage;
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  }
}

module.exports = require('./common')(exports);
var formatters = module.exports.formatters;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (error) {
    return '[UnexpectedJSONParseError]: ' + error.message;
  }
};


}).call(this,{ env: {} })

},{"./common":56}],56:[function(require,module,exports){
"use strict";

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */
function setup(env) {
  createDebug.debug = createDebug;
  createDebug.default = createDebug;
  createDebug.coerce = coerce;
  createDebug.disable = disable;
  createDebug.enable = enable;
  createDebug.enabled = enabled;
  createDebug.humanize = require('ms');
  Object.keys(env).forEach(function (key) {
    createDebug[key] = env[key];
  });
  /**
  * Active `debug` instances.
  */

  createDebug.instances = [];
  /**
  * The currently active debug mode names, and names to skip.
  */

  createDebug.names = [];
  createDebug.skips = [];
  /**
  * Map of special "%n" handling functions, for the debug "format" argument.
  *
  * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
  */

  createDebug.formatters = {};
  /**
  * Selects a color for a debug namespace
  * @param {String} namespace The namespace string for the for the debug instance to be colored
  * @return {Number|String} An ANSI color code for the given namespace
  * @api private
  */

  function selectColor(namespace) {
    var hash = 0;

    for (var i = 0; i < namespace.length; i++) {
      hash = (hash << 5) - hash + namespace.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }

    return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
  }

  createDebug.selectColor = selectColor;
  /**
  * Create a debugger with the given `namespace`.
  *
  * @param {String} namespace
  * @return {Function}
  * @api public
  */

  function createDebug(namespace) {
    var prevTime;

    function debug() {
      // Disabled?
      if (!debug.enabled) {
        return;
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var self = debug; // Set `diff` timestamp

      var curr = Number(new Date());
      var ms = curr - (prevTime || curr);
      self.diff = ms;
      self.prev = prevTime;
      self.curr = curr;
      prevTime = curr;
      args[0] = createDebug.coerce(args[0]);

      if (typeof args[0] !== 'string') {
        // Anything else let's inspect with %O
        args.unshift('%O');
      } // Apply any `formatters` transformations


      var index = 0;
      args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
        // If we encounter an escaped % then don't increase the array index
        if (match === '%%') {
          return match;
        }

        index++;
        var formatter = createDebug.formatters[format];

        if (typeof formatter === 'function') {
          var val = args[index];
          match = formatter.call(self, val); // Now we need to remove `args[index]` since it's inlined in the `format`

          args.splice(index, 1);
          index--;
        }

        return match;
      }); // Apply env-specific formatting (colors, etc.)

      createDebug.formatArgs.call(self, args);
      var logFn = self.log || createDebug.log;
      logFn.apply(self, args);
    }

    debug.namespace = namespace;
    debug.enabled = createDebug.enabled(namespace);
    debug.useColors = createDebug.useColors();
    debug.color = selectColor(namespace);
    debug.destroy = destroy;
    debug.extend = extend; // Debug.formatArgs = formatArgs;
    // debug.rawLog = rawLog;
    // env-specific initialization logic for debug instances

    if (typeof createDebug.init === 'function') {
      createDebug.init(debug);
    }

    createDebug.instances.push(debug);
    return debug;
  }

  function destroy() {
    var index = createDebug.instances.indexOf(this);

    if (index !== -1) {
      createDebug.instances.splice(index, 1);
      return true;
    }

    return false;
  }

  function extend(namespace, delimiter) {
    return createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
  }
  /**
  * Enables a debug mode by namespaces. This can include modes
  * separated by a colon and wildcards.
  *
  * @param {String} namespaces
  * @api public
  */


  function enable(namespaces) {
    createDebug.save(namespaces);
    createDebug.names = [];
    createDebug.skips = [];
    var i;
    var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
    var len = split.length;

    for (i = 0; i < len; i++) {
      if (!split[i]) {
        // ignore empty strings
        continue;
      }

      namespaces = split[i].replace(/\*/g, '.*?');

      if (namespaces[0] === '-') {
        createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
      } else {
        createDebug.names.push(new RegExp('^' + namespaces + '$'));
      }
    }

    for (i = 0; i < createDebug.instances.length; i++) {
      var instance = createDebug.instances[i];
      instance.enabled = createDebug.enabled(instance.namespace);
    }
  }
  /**
  * Disable debug output.
  *
  * @api public
  */


  function disable() {
    createDebug.enable('');
  }
  /**
  * Returns true if the given mode name is enabled, false otherwise.
  *
  * @param {String} name
  * @return {Boolean}
  * @api public
  */


  function enabled(name) {
    if (name[name.length - 1] === '*') {
      return true;
    }

    var i;
    var len;

    for (i = 0, len = createDebug.skips.length; i < len; i++) {
      if (createDebug.skips[i].test(name)) {
        return false;
      }
    }

    for (i = 0, len = createDebug.names.length; i < len; i++) {
      if (createDebug.names[i].test(name)) {
        return true;
      }
    }

    return false;
  }
  /**
  * Coerce `val`.
  *
  * @param {Mixed} val
  * @return {Mixed}
  * @api private
  */


  function coerce(val) {
    if (val instanceof Error) {
      return val.stack || val.message;
    }

    return val;
  }

  createDebug.enable(createDebug.load());
  return createDebug;
}

module.exports = setup;


},{"ms":54}],57:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      })
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      var TempCtor = function () {}
      TempCtor.prototype = superCtor.prototype
      ctor.prototype = new TempCtor()
      ctor.prototype.constructor = ctor
    }
  }
}

},{}],58:[function(require,module,exports){
(function (global){
/*! JSON v3.3.2 | https://bestiejs.github.io/json3 | Copyright 2012-2015, Kit Cambridge, Benjamin Tan | http://kit.mit-license.org */
;(function () {
  // Detect the `define` function exposed by asynchronous module loaders. The
  // strict `define` check is necessary for compatibility with `r.js`.
  var isLoader = typeof define === "function" && define.amd;

  // A set of types used to distinguish objects from primitives.
  var objectTypes = {
    "function": true,
    "object": true
  };

  // Detect the `exports` object exposed by CommonJS implementations.
  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;

  // Use the `global` object exposed by Node (including Browserify via
  // `insert-module-globals`), Narwhal, and Ringo as the default context,
  // and the `window` object in browsers. Rhino exports a `global` function
  // instead.
  var root = objectTypes[typeof window] && window || this,
      freeGlobal = freeExports && objectTypes[typeof module] && module && !module.nodeType && typeof global == "object" && global;

  if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal)) {
    root = freeGlobal;
  }

  // Public: Initializes JSON 3 using the given `context` object, attaching the
  // `stringify` and `parse` functions to the specified `exports` object.
  function runInContext(context, exports) {
    context || (context = root.Object());
    exports || (exports = root.Object());

    // Native constructor aliases.
    var Number = context.Number || root.Number,
        String = context.String || root.String,
        Object = context.Object || root.Object,
        Date = context.Date || root.Date,
        SyntaxError = context.SyntaxError || root.SyntaxError,
        TypeError = context.TypeError || root.TypeError,
        Math = context.Math || root.Math,
        nativeJSON = context.JSON || root.JSON;

    // Delegate to the native `stringify` and `parse` implementations.
    if (typeof nativeJSON == "object" && nativeJSON) {
      exports.stringify = nativeJSON.stringify;
      exports.parse = nativeJSON.parse;
    }

    // Convenience aliases.
    var objectProto = Object.prototype,
        getClass = objectProto.toString,
        isProperty = objectProto.hasOwnProperty,
        undefined;

    // Internal: Contains `try...catch` logic used by other functions.
    // This prevents other functions from being deoptimized.
    function attempt(func, errorFunc) {
      try {
        func();
      } catch (exception) {
        if (errorFunc) {
          errorFunc();
        }
      }
    }

    // Test the `Date#getUTC*` methods. Based on work by @Yaffle.
    var isExtended = new Date(-3509827334573292);
    attempt(function () {
      // The `getUTCFullYear`, `Month`, and `Date` methods return nonsensical
      // results for certain dates in Opera >= 10.53.
      isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 &&
        isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
    });

    // Internal: Determines whether the native `JSON.stringify` and `parse`
    // implementations are spec-compliant. Based on work by Ken Snyder.
    function has(name) {
      if (has[name] != null) {
        // Return cached feature test result.
        return has[name];
      }
      var isSupported;
      if (name == "bug-string-char-index") {
        // IE <= 7 doesn't support accessing string characters using square
        // bracket notation. IE 8 only supports this for primitives.
        isSupported = "a"[0] != "a";
      } else if (name == "json") {
        // Indicates whether both `JSON.stringify` and `JSON.parse` are
        // supported.
        isSupported = has("json-stringify") && has("date-serialization") && has("json-parse");
      } else if (name == "date-serialization") {
        // Indicates whether `Date`s can be serialized accurately by `JSON.stringify`.
        isSupported = has("json-stringify") && isExtended;
        if (isSupported) {
          var stringify = exports.stringify;
          attempt(function () {
            isSupported =
              // JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
              // serialize extended years.
              stringify(new Date(-8.64e15)) == '"-271821-04-20T00:00:00.000Z"' &&
              // The milliseconds are optional in ES 5, but required in 5.1.
              stringify(new Date(8.64e15)) == '"+275760-09-13T00:00:00.000Z"' &&
              // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
              // four-digit years instead of six-digit years. Credits: @Yaffle.
              stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' &&
              // Safari <= 5.1.5 and Opera >= 10.53 incorrectly serialize millisecond
              // values less than 1000. Credits: @Yaffle.
              stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
          });
        }
      } else {
        var value, serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
        // Test `JSON.stringify`.
        if (name == "json-stringify") {
          var stringify = exports.stringify, stringifySupported = typeof stringify == "function";
          if (stringifySupported) {
            // A test function object with a custom `toJSON` method.
            (value = function () {
              return 1;
            }).toJSON = value;
            attempt(function () {
              stringifySupported =
                // Firefox 3.1b1 and b2 serialize string, number, and boolean
                // primitives as object literals.
                stringify(0) === "0" &&
                // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
                // literals.
                stringify(new Number()) === "0" &&
                stringify(new String()) == '""' &&
                // FF 3.1b1, 2 throw an error if the value is `null`, `undefined`, or
                // does not define a canonical JSON representation (this applies to
                // objects with `toJSON` properties as well, *unless* they are nested
                // within an object or array).
                stringify(getClass) === undefined &&
                // IE 8 serializes `undefined` as `"undefined"`. Safari <= 5.1.7 and
                // FF 3.1b3 pass this test.
                stringify(undefined) === undefined &&
                // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
                // respectively, if the value is omitted entirely.
                stringify() === undefined &&
                // FF 3.1b1, 2 throw an error if the given value is not a number,
                // string, array, object, Boolean, or `null` literal. This applies to
                // objects with custom `toJSON` methods as well, unless they are nested
                // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
                // methods entirely.
                stringify(value) === "1" &&
                stringify([value]) == "[1]" &&
                // Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
                // `"[null]"`.
                stringify([undefined]) == "[null]" &&
                // YUI 3.0.0b1 fails to serialize `null` literals.
                stringify(null) == "null" &&
                // FF 3.1b1, 2 halts serialization if an array contains a function:
                // `[1, true, getClass, 1]` serializes as "[1,true,],". FF 3.1b3
                // elides non-JSON values from objects and arrays, unless they
                // define custom `toJSON` methods.
                stringify([undefined, getClass, null]) == "[null,null,null]" &&
                // Simple serialization test. FF 3.1b1 uses Unicode escape sequences
                // where character escape codes are expected (e.g., `\b` => `\u0008`).
                stringify({ "a": [value, true, false, null, "\x00\b\n\f\r\t"] }) == serialized &&
                // FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
                stringify(null, value) === "1" &&
                stringify([1, 2], null, 1) == "[\n 1,\n 2\n]";
            }, function () {
              stringifySupported = false;
            });
          }
          isSupported = stringifySupported;
        }
        // Test `JSON.parse`.
        if (name == "json-parse") {
          var parse = exports.parse, parseSupported;
          if (typeof parse == "function") {
            attempt(function () {
              // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
              // Conforming implementations should also coerce the initial argument to
              // a string prior to parsing.
              if (parse("0") === 0 && !parse(false)) {
                // Simple parsing test.
                value = parse(serialized);
                parseSupported = value["a"].length == 5 && value["a"][0] === 1;
                if (parseSupported) {
                  attempt(function () {
                    // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.
                    parseSupported = !parse('"\t"');
                  });
                  if (parseSupported) {
                    attempt(function () {
                      // FF 4.0 and 4.0.1 allow leading `+` signs and leading
                      // decimal points. FF 4.0, 4.0.1, and IE 9-10 also allow
                      // certain octal literals.
                      parseSupported = parse("01") !== 1;
                    });
                  }
                  if (parseSupported) {
                    attempt(function () {
                      // FF 4.0, 4.0.1, and Rhino 1.7R3-R4 allow trailing decimal
                      // points. These environments, along with FF 3.1b1 and 2,
                      // also allow trailing commas in JSON objects and arrays.
                      parseSupported = parse("1.") !== 1;
                    });
                  }
                }
              }
            }, function () {
              parseSupported = false;
            });
          }
          isSupported = parseSupported;
        }
      }
      return has[name] = !!isSupported;
    }
    has["bug-string-char-index"] = has["date-serialization"] = has["json"] = has["json-stringify"] = has["json-parse"] = null;

    if (!has("json")) {
      // Common `[[Class]]` name aliases.
      var functionClass = "[object Function]",
          dateClass = "[object Date]",
          numberClass = "[object Number]",
          stringClass = "[object String]",
          arrayClass = "[object Array]",
          booleanClass = "[object Boolean]";

      // Detect incomplete support for accessing string characters by index.
      var charIndexBuggy = has("bug-string-char-index");

      // Internal: Normalizes the `for...in` iteration algorithm across
      // environments. Each enumerated key is yielded to a `callback` function.
      var forOwn = function (object, callback) {
        var size = 0, Properties, dontEnums, property;

        // Tests for bugs in the current environment's `for...in` algorithm. The
        // `valueOf` property inherits the non-enumerable flag from
        // `Object.prototype` in older versions of IE, Netscape, and Mozilla.
        (Properties = function () {
          this.valueOf = 0;
        }).prototype.valueOf = 0;

        // Iterate over a new instance of the `Properties` class.
        dontEnums = new Properties();
        for (property in dontEnums) {
          // Ignore all properties inherited from `Object.prototype`.
          if (isProperty.call(dontEnums, property)) {
            size++;
          }
        }
        Properties = dontEnums = null;

        // Normalize the iteration algorithm.
        if (!size) {
          // A list of non-enumerable properties inherited from `Object.prototype`.
          dontEnums = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
          // IE <= 8, Mozilla 1.0, and Netscape 6.2 ignore shadowed non-enumerable
          // properties.
          forOwn = function (object, callback) {
            var isFunction = getClass.call(object) == functionClass, property, length;
            var hasProperty = !isFunction && typeof object.constructor != "function" && objectTypes[typeof object.hasOwnProperty] && object.hasOwnProperty || isProperty;
            for (property in object) {
              // Gecko <= 1.0 enumerates the `prototype` property of functions under
              // certain conditions; IE does not.
              if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
                callback(property);
              }
            }
            // Manually invoke the callback for each non-enumerable property.
            for (length = dontEnums.length; property = dontEnums[--length];) {
              if (hasProperty.call(object, property)) {
                callback(property);
              }
            }
          };
        } else {
          // No bugs detected; use the standard `for...in` algorithm.
          forOwn = function (object, callback) {
            var isFunction = getClass.call(object) == functionClass, property, isConstructor;
            for (property in object) {
              if (!(isFunction && property == "prototype") && isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
                callback(property);
              }
            }
            // Manually invoke the callback for the `constructor` property due to
            // cross-environment inconsistencies.
            if (isConstructor || isProperty.call(object, (property = "constructor"))) {
              callback(property);
            }
          };
        }
        return forOwn(object, callback);
      };

      // Public: Serializes a JavaScript `value` as a JSON string. The optional
      // `filter` argument may specify either a function that alters how object and
      // array members are serialized, or an array of strings and numbers that
      // indicates which properties should be serialized. The optional `width`
      // argument may be either a string or number that specifies the indentation
      // level of the output.
      if (!has("json-stringify") && !has("date-serialization")) {
        // Internal: A map of control characters and their escaped equivalents.
        var Escapes = {
          92: "\\\\",
          34: '\\"',
          8: "\\b",
          12: "\\f",
          10: "\\n",
          13: "\\r",
          9: "\\t"
        };

        // Internal: Converts `value` into a zero-padded string such that its
        // length is at least equal to `width`. The `width` must be <= 6.
        var leadingZeroes = "000000";
        var toPaddedString = function (width, value) {
          // The `|| 0` expression is necessary to work around a bug in
          // Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
          return (leadingZeroes + (value || 0)).slice(-width);
        };

        // Internal: Serializes a date object.
        var serializeDate = function (value) {
          var getData, year, month, date, time, hours, minutes, seconds, milliseconds;
          // Define additional utility methods if the `Date` methods are buggy.
          if (!isExtended) {
            var floor = Math.floor;
            // A mapping between the months of the year and the number of days between
            // January 1st and the first of the respective month.
            var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
            // Internal: Calculates the number of days between the Unix epoch and the
            // first day of the given month.
            var getDay = function (year, month) {
              return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
            };
            getData = function (value) {
              // Manually compute the year, month, date, hours, minutes,
              // seconds, and milliseconds if the `getUTC*` methods are
              // buggy. Adapted from @Yaffle's `date-shim` project.
              date = floor(value / 864e5);
              for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++);
              for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++);
              date = 1 + date - getDay(year, month);
              // The `time` value specifies the time within the day (see ES
              // 5.1 section 15.9.1.2). The formula `(A % B + B) % B` is used
              // to compute `A modulo B`, as the `%` operator does not
              // correspond to the `modulo` operation for negative numbers.
              time = (value % 864e5 + 864e5) % 864e5;
              // The hours, minutes, seconds, and milliseconds are obtained by
              // decomposing the time within the day. See section 15.9.1.10.
              hours = floor(time / 36e5) % 24;
              minutes = floor(time / 6e4) % 60;
              seconds = floor(time / 1e3) % 60;
              milliseconds = time % 1e3;
            };
          } else {
            getData = function (value) {
              year = value.getUTCFullYear();
              month = value.getUTCMonth();
              date = value.getUTCDate();
              hours = value.getUTCHours();
              minutes = value.getUTCMinutes();
              seconds = value.getUTCSeconds();
              milliseconds = value.getUTCMilliseconds();
            };
          }
          serializeDate = function (value) {
            if (value > -1 / 0 && value < 1 / 0) {
              // Dates are serialized according to the `Date#toJSON` method
              // specified in ES 5.1 section 15.9.5.44. See section 15.9.1.15
              // for the ISO 8601 date time string format.
              getData(value);
              // Serialize extended years correctly.
              value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) +
              "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) +
              // Months, dates, hours, minutes, and seconds should have two
              // digits; milliseconds should have three.
              "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) +
              // Milliseconds are optional in ES 5.0, but required in 5.1.
              "." + toPaddedString(3, milliseconds) + "Z";
              year = month = date = hours = minutes = seconds = milliseconds = null;
            } else {
              value = null;
            }
            return value;
          };
          return serializeDate(value);
        };

        // For environments with `JSON.stringify` but buggy date serialization,
        // we override the native `Date#toJSON` implementation with a
        // spec-compliant one.
        if (has("json-stringify") && !has("date-serialization")) {
          // Internal: the `Date#toJSON` implementation used to override the native one.
          function dateToJSON (key) {
            return serializeDate(this);
          }

          // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
          var nativeStringify = exports.stringify;
          exports.stringify = function (source, filter, width) {
            var nativeToJSON = Date.prototype.toJSON;
            Date.prototype.toJSON = dateToJSON;
            var result = nativeStringify(source, filter, width);
            Date.prototype.toJSON = nativeToJSON;
            return result;
          }
        } else {
          // Internal: Double-quotes a string `value`, replacing all ASCII control
          // characters (characters with code unit values between 0 and 31) with
          // their escaped equivalents. This is an implementation of the
          // `Quote(value)` operation defined in ES 5.1 section 15.12.3.
          var unicodePrefix = "\\u00";
          var escapeChar = function (character) {
            var charCode = character.charCodeAt(0), escaped = Escapes[charCode];
            if (escaped) {
              return escaped;
            }
            return unicodePrefix + toPaddedString(2, charCode.toString(16));
          };
          var reEscape = /[\x00-\x1f\x22\x5c]/g;
          var quote = function (value) {
            reEscape.lastIndex = 0;
            return '"' +
              (
                reEscape.test(value)
                  ? value.replace(reEscape, escapeChar)
                  : value
              ) +
              '"';
          };

          // Internal: Recursively serializes an object. Implements the
          // `Str(key, holder)`, `JO(value)`, and `JA(value)` operations.
          var serialize = function (property, object, callback, properties, whitespace, indentation, stack) {
            var value, type, className, results, element, index, length, prefix, result;
            attempt(function () {
              // Necessary for host object support.
              value = object[property];
            });
            if (typeof value == "object" && value) {
              if (value.getUTCFullYear && getClass.call(value) == dateClass && value.toJSON === Date.prototype.toJSON) {
                value = serializeDate(value);
              } else if (typeof value.toJSON == "function") {
                value = value.toJSON(property);
              }
            }
            if (callback) {
              // If a replacement function was provided, call it to obtain the value
              // for serialization.
              value = callback.call(object, property, value);
            }
            // Exit early if value is `undefined` or `null`.
            if (value == undefined) {
              return value === undefined ? value : "null";
            }
            type = typeof value;
            // Only call `getClass` if the value is an object.
            if (type == "object") {
              className = getClass.call(value);
            }
            switch (className || type) {
              case "boolean":
              case booleanClass:
                // Booleans are represented literally.
                return "" + value;
              case "number":
              case numberClass:
                // JSON numbers must be finite. `Infinity` and `NaN` are serialized as
                // `"null"`.
                return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
              case "string":
              case stringClass:
                // Strings are double-quoted and escaped.
                return quote("" + value);
            }
            // Recursively serialize objects and arrays.
            if (typeof value == "object") {
              // Check for cyclic structures. This is a linear search; performance
              // is inversely proportional to the number of unique nested objects.
              for (length = stack.length; length--;) {
                if (stack[length] === value) {
                  // Cyclic structures cannot be serialized by `JSON.stringify`.
                  throw TypeError();
                }
              }
              // Add the object to the stack of traversed objects.
              stack.push(value);
              results = [];
              // Save the current indentation level and indent one additional level.
              prefix = indentation;
              indentation += whitespace;
              if (className == arrayClass) {
                // Recursively serialize array elements.
                for (index = 0, length = value.length; index < length; index++) {
                  element = serialize(index, value, callback, properties, whitespace, indentation, stack);
                  results.push(element === undefined ? "null" : element);
                }
                result = results.length ? (whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : ("[" + results.join(",") + "]")) : "[]";
              } else {
                // Recursively serialize object members. Members are selected from
                // either a user-specified list of property names, or the object
                // itself.
                forOwn(properties || value, function (property) {
                  var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
                  if (element !== undefined) {
                    // According to ES 5.1 section 15.12.3: "If `gap` {whitespace}
                    // is not the empty string, let `member` {quote(property) + ":"}
                    // be the concatenation of `member` and the `space` character."
                    // The "`space` character" refers to the literal space
                    // character, not the `space` {width} argument provided to
                    // `JSON.stringify`.
                    results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
                  }
                });
                result = results.length ? (whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : ("{" + results.join(",") + "}")) : "{}";
              }
              // Remove the object from the traversed object stack.
              stack.pop();
              return result;
            }
          };

          // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
          exports.stringify = function (source, filter, width) {
            var whitespace, callback, properties, className;
            if (objectTypes[typeof filter] && filter) {
              className = getClass.call(filter);
              if (className == functionClass) {
                callback = filter;
              } else if (className == arrayClass) {
                // Convert the property names array into a makeshift set.
                properties = {};
                for (var index = 0, length = filter.length, value; index < length;) {
                  value = filter[index++];
                  className = getClass.call(value);
                  if (className == "[object String]" || className == "[object Number]") {
                    properties[value] = 1;
                  }
                }
              }
            }
            if (width) {
              className = getClass.call(width);
              if (className == numberClass) {
                // Convert the `width` to an integer and create a string containing
                // `width` number of space characters.
                if ((width -= width % 1) > 0) {
                  if (width > 10) {
                    width = 10;
                  }
                  for (whitespace = ""; whitespace.length < width;) {
                    whitespace += " ";
                  }
                }
              } else if (className == stringClass) {
                whitespace = width.length <= 10 ? width : width.slice(0, 10);
              }
            }
            // Opera <= 7.54u2 discards the values associated with empty string keys
            // (`""`) only if they are used directly within an object member list
            // (e.g., `!("" in { "": 1})`).
            return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", []);
          };
        }
      }

      // Public: Parses a JSON source string.
      if (!has("json-parse")) {
        var fromCharCode = String.fromCharCode;

        // Internal: A map of escaped control characters and their unescaped
        // equivalents.
        var Unescapes = {
          92: "\\",
          34: '"',
          47: "/",
          98: "\b",
          116: "\t",
          110: "\n",
          102: "\f",
          114: "\r"
        };

        // Internal: Stores the parser state.
        var Index, Source;

        // Internal: Resets the parser state and throws a `SyntaxError`.
        var abort = function () {
          Index = Source = null;
          throw SyntaxError();
        };

        // Internal: Returns the next token, or `"$"` if the parser has reached
        // the end of the source string. A token may be a string, number, `null`
        // literal, or Boolean literal.
        var lex = function () {
          var source = Source, length = source.length, value, begin, position, isSigned, charCode;
          while (Index < length) {
            charCode = source.charCodeAt(Index);
            switch (charCode) {
              case 9: case 10: case 13: case 32:
                // Skip whitespace tokens, including tabs, carriage returns, line
                // feeds, and space characters.
                Index++;
                break;
              case 123: case 125: case 91: case 93: case 58: case 44:
                // Parse a punctuator token (`{`, `}`, `[`, `]`, `:`, or `,`) at
                // the current position.
                value = charIndexBuggy ? source.charAt(Index) : source[Index];
                Index++;
                return value;
              case 34:
                // `"` delimits a JSON string; advance to the next character and
                // begin parsing the string. String tokens are prefixed with the
                // sentinel `@` character to distinguish them from punctuators and
                // end-of-string tokens.
                for (value = "@", Index++; Index < length;) {
                  charCode = source.charCodeAt(Index);
                  if (charCode < 32) {
                    // Unescaped ASCII control characters (those with a code unit
                    // less than the space character) are not permitted.
                    abort();
                  } else if (charCode == 92) {
                    // A reverse solidus (`\`) marks the beginning of an escaped
                    // control character (including `"`, `\`, and `/`) or Unicode
                    // escape sequence.
                    charCode = source.charCodeAt(++Index);
                    switch (charCode) {
                      case 92: case 34: case 47: case 98: case 116: case 110: case 102: case 114:
                        // Revive escaped control characters.
                        value += Unescapes[charCode];
                        Index++;
                        break;
                      case 117:
                        // `\u` marks the beginning of a Unicode escape sequence.
                        // Advance to the first character and validate the
                        // four-digit code point.
                        begin = ++Index;
                        for (position = Index + 4; Index < position; Index++) {
                          charCode = source.charCodeAt(Index);
                          // A valid sequence comprises four hexdigits (case-
                          // insensitive) that form a single hexadecimal value.
                          if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
                            // Invalid Unicode escape sequence.
                            abort();
                          }
                        }
                        // Revive the escaped character.
                        value += fromCharCode("0x" + source.slice(begin, Index));
                        break;
                      default:
                        // Invalid escape sequence.
                        abort();
                    }
                  } else {
                    if (charCode == 34) {
                      // An unescaped double-quote character marks the end of the
                      // string.
                      break;
                    }
                    charCode = source.charCodeAt(Index);
                    begin = Index;
                    // Optimize for the common case where a string is valid.
                    while (charCode >= 32 && charCode != 92 && charCode != 34) {
                      charCode = source.charCodeAt(++Index);
                    }
                    // Append the string as-is.
                    value += source.slice(begin, Index);
                  }
                }
                if (source.charCodeAt(Index) == 34) {
                  // Advance to the next character and return the revived string.
                  Index++;
                  return value;
                }
                // Unterminated string.
                abort();
              default:
                // Parse numbers and literals.
                begin = Index;
                // Advance past the negative sign, if one is specified.
                if (charCode == 45) {
                  isSigned = true;
                  charCode = source.charCodeAt(++Index);
                }
                // Parse an integer or floating-point value.
                if (charCode >= 48 && charCode <= 57) {
                  // Leading zeroes are interpreted as octal literals.
                  if (charCode == 48 && ((charCode = source.charCodeAt(Index + 1)), charCode >= 48 && charCode <= 57)) {
                    // Illegal octal literal.
                    abort();
                  }
                  isSigned = false;
                  // Parse the integer component.
                  for (; Index < length && ((charCode = source.charCodeAt(Index)), charCode >= 48 && charCode <= 57); Index++);
                  // Floats cannot contain a leading decimal point; however, this
                  // case is already accounted for by the parser.
                  if (source.charCodeAt(Index) == 46) {
                    position = ++Index;
                    // Parse the decimal component.
                    for (; position < length; position++) {
                      charCode = source.charCodeAt(position);
                      if (charCode < 48 || charCode > 57) {
                        break;
                      }
                    }
                    if (position == Index) {
                      // Illegal trailing decimal.
                      abort();
                    }
                    Index = position;
                  }
                  // Parse exponents. The `e` denoting the exponent is
                  // case-insensitive.
                  charCode = source.charCodeAt(Index);
                  if (charCode == 101 || charCode == 69) {
                    charCode = source.charCodeAt(++Index);
                    // Skip past the sign following the exponent, if one is
                    // specified.
                    if (charCode == 43 || charCode == 45) {
                      Index++;
                    }
                    // Parse the exponential component.
                    for (position = Index; position < length; position++) {
                      charCode = source.charCodeAt(position);
                      if (charCode < 48 || charCode > 57) {
                        break;
                      }
                    }
                    if (position == Index) {
                      // Illegal empty exponent.
                      abort();
                    }
                    Index = position;
                  }
                  // Coerce the parsed value to a JavaScript number.
                  return +source.slice(begin, Index);
                }
                // A negative sign may only precede numbers.
                if (isSigned) {
                  abort();
                }
                // `true`, `false`, and `null` literals.
                var temp = source.slice(Index, Index + 4);
                if (temp == "true") {
                  Index += 4;
                  return true;
                } else if (temp == "fals" && source.charCodeAt(Index + 4 ) == 101) {
                  Index += 5;
                  return false;
                } else if (temp == "null") {
                  Index += 4;
                  return null;
                }
                // Unrecognized token.
                abort();
            }
          }
          // Return the sentinel `$` character if the parser has reached the end
          // of the source string.
          return "$";
        };

        // Internal: Parses a JSON `value` token.
        var get = function (value) {
          var results, hasMembers;
          if (value == "$") {
            // Unexpected end of input.
            abort();
          }
          if (typeof value == "string") {
            if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
              // Remove the sentinel `@` character.
              return value.slice(1);
            }
            // Parse object and array literals.
            if (value == "[") {
              // Parses a JSON array, returning a new JavaScript array.
              results = [];
              for (;;) {
                value = lex();
                // A closing square bracket marks the end of the array literal.
                if (value == "]") {
                  break;
                }
                // If the array literal contains elements, the current token
                // should be a comma separating the previous element from the
                // next.
                if (hasMembers) {
                  if (value == ",") {
                    value = lex();
                    if (value == "]") {
                      // Unexpected trailing `,` in array literal.
                      abort();
                    }
                  } else {
                    // A `,` must separate each array element.
                    abort();
                  }
                } else {
                  hasMembers = true;
                }
                // Elisions and leading commas are not permitted.
                if (value == ",") {
                  abort();
                }
                results.push(get(value));
              }
              return results;
            } else if (value == "{") {
              // Parses a JSON object, returning a new JavaScript object.
              results = {};
              for (;;) {
                value = lex();
                // A closing curly brace marks the end of the object literal.
                if (value == "}") {
                  break;
                }
                // If the object literal contains members, the current token
                // should be a comma separator.
                if (hasMembers) {
                  if (value == ",") {
                    value = lex();
                    if (value == "}") {
                      // Unexpected trailing `,` in object literal.
                      abort();
                    }
                  } else {
                    // A `,` must separate each object member.
                    abort();
                  }
                } else {
                  hasMembers = true;
                }
                // Leading commas are not permitted, object property names must be
                // double-quoted strings, and a `:` must separate each property
                // name and value.
                if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
                  abort();
                }
                results[value.slice(1)] = get(lex());
              }
              return results;
            }
            // Unexpected token encountered.
            abort();
          }
          return value;
        };

        // Internal: Updates a traversed object member.
        var update = function (source, property, callback) {
          var element = walk(source, property, callback);
          if (element === undefined) {
            delete source[property];
          } else {
            source[property] = element;
          }
        };

        // Internal: Recursively traverses a parsed JSON object, invoking the
        // `callback` function for each value. This is an implementation of the
        // `Walk(holder, name)` operation defined in ES 5.1 section 15.12.2.
        var walk = function (source, property, callback) {
          var value = source[property], length;
          if (typeof value == "object" && value) {
            // `forOwn` can't be used to traverse an array in Opera <= 8.54
            // because its `Object#hasOwnProperty` implementation returns `false`
            // for array indices (e.g., `![1, 2, 3].hasOwnProperty("0")`).
            if (getClass.call(value) == arrayClass) {
              for (length = value.length; length--;) {
                update(getClass, forOwn, value, length, callback);
              }
            } else {
              forOwn(value, function (property) {
                update(value, property, callback);
              });
            }
          }
          return callback.call(source, property, value);
        };

        // Public: `JSON.parse`. See ES 5.1 section 15.12.2.
        exports.parse = function (source, callback) {
          var result, value;
          Index = 0;
          Source = "" + source;
          result = get(lex());
          // If a JSON string contains multiple tokens, it is invalid.
          if (lex() != "$") {
            abort();
          }
          // Reset the parser state.
          Index = Source = null;
          return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[""] = result, value), "", callback) : result;
        };
      }
    }

    exports.runInContext = runInContext;
    return exports;
  }

  if (freeExports && !isLoader) {
    // Export for CommonJS environments.
    runInContext(root, freeExports);
  } else {
    // Export for web browsers and JavaScript engines.
    var nativeJSON = root.JSON,
        previousJSON = root.JSON3,
        isRestored = false;

    var JSON3 = runInContext(root, (root.JSON3 = {
      // Public: Restores the original value of the global `JSON` object and
      // returns a reference to the `JSON3` object.
      "noConflict": function () {
        if (!isRestored) {
          isRestored = true;
          root.JSON = nativeJSON;
          root.JSON3 = previousJSON;
          nativeJSON = previousJSON = null;
        }
        return JSON3;
      }
    }));

    root.JSON = {
      "parse": JSON3.parse,
      "stringify": JSON3.stringify
    };
  }

  // Export for asynchronous module loaders.
  if (isLoader) {
    define(function () {
      return JSON3;
    });
  }
}).call(this);

}).call(this,typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],59:[function(require,module,exports){
'use strict';

var has = Object.prototype.hasOwnProperty
  , undef;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String|Null} The decoded string.
 * @api private
 */
function decode(input) {
  try {
    return decodeURIComponent(input.replace(/\+/g, ' '));
  } catch (e) {
    return null;
  }
}

/**
 * Attempts to encode a given input.
 *
 * @param {String} input The string that needs to be encoded.
 * @returns {String|Null} The encoded string.
 * @api private
 */
function encode(input) {
  try {
    return encodeURIComponent(input);
  } catch (e) {
    return null;
  }
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?&]+)=?([^&]*)/g
    , result = {}
    , part;

  while (part = parser.exec(query)) {
    var key = decode(part[1])
      , value = decode(part[2]);

    //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    // In the case if failed decoding, we want to omit the key/value pairs
    // from the result.
    //
    if (key === null || value === null || key in result) continue;
    result[key] = value;
  }

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = []
    , value
    , key;

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (key in obj) {
    if (has.call(obj, key)) {
      value = obj[key];

      //
      // Edge cases where we actually want to encode the value to an empty
      // string instead of the stringified value.
      //
      if (!value && (value === null || value === undef || isNaN(value))) {
        value = '';
      }

      key = encodeURIComponent(key);
      value = encodeURIComponent(value);

      //
      // If we failed to encode the strings, we should bail out as we don't
      // want to add invalid strings to the query.
      //
      if (key === null || value === null) continue;
      pairs.push(key +'='+ value);
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;

},{}],60:[function(require,module,exports){
'use strict';

/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */
module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
    return port !== 80;

    case 'https':
    case 'wss':
    return port !== 443;

    case 'ftp':
    return port !== 21;

    case 'gopher':
    return port !== 70;

    case 'file':
    return false;
  }

  return port !== 0;
};

},{}],61:[function(require,module,exports){
(function (global){
'use strict';

var required = require('requires-port')
  , qs = require('querystringify')
  , slashes = /^[A-Za-z][A-Za-z0-9+-.]*:[\\/]+/
  , protocolre = /^([a-z][a-z0-9.+-]*:)?([\\/]{1,})?([\S\s]*)/i
  , whitespace = '[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]'
  , left = new RegExp('^'+ whitespace +'+');

/**
 * Trim a given string.
 *
 * @param {String} str String to trim.
 * @public
 */
function trimLeft(str) {
  return (str ? str : '').toString().replace(left, '');
}

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules = [
  ['#', 'hash'],                        // Extract from the back.
  ['?', 'query'],                       // Extract from the back.
  function sanitize(address) {          // Sanitize what is left of the address
    return address.replace('\\', '/');
  },
  ['/', 'pathname'],                    // Extract from the back.
  ['@', 'auth', 1],                     // Extract from the front.
  [NaN, 'host', undefined, 1, 1],       // Set left over value.
  [/:(\d+)$/, 'port', undefined, 1],    // RegExp the back.
  [NaN, 'hostname', undefined, 1, 1]    // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 };

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @public
 */
function lolcation(loc) {
  var globalVar;

  if (typeof window !== 'undefined') globalVar = window;
  else if (typeof global !== 'undefined') globalVar = global;
  else if (typeof self !== 'undefined') globalVar = self;
  else globalVar = {};

  var location = globalVar.location || {};
  loc = loc || location;

  var finaldestination = {}
    , type = typeof loc
    , key;

  if ('blob:' === loc.protocol) {
    finaldestination = new Url(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new Url(loc, {});
    for (key in ignore) delete finaldestination[key];
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @private
 */
function extractProtocol(address) {
  address = trimLeft(address);

  var match = protocolre.exec(address)
    , protocol = match[1] ? match[1].toLowerCase() : ''
    , slashes = !!(match[2] && match[2].length >= 2)
    , rest =  match[2] && match[2].length === 1 ? '/' + match[3] : match[3];

  return {
    protocol: protocol,
    slashes: slashes,
    rest: rest
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @private
 */
function resolve(relative, base) {
  if (relative === '') return base;

  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
    , i = path.length
    , last = path[i - 1]
    , unshift = false
    , up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * It is worth noting that we should not use `URL` as class name to prevent
 * clashes with the global URL instance that got introduced in browsers.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} [location] Location defaults for relative paths.
 * @param {Boolean|Function} [parser] Parser for the query string.
 * @private
 */
function Url(address, location, parser) {
  address = trimLeft(address);

  if (!(this instanceof Url)) {
    return new Url(address, location, parser);
  }

  var relative, extracted, parse, instruction, index, key
    , instructions = rules.slice()
    , type = typeof location
    , url = this
    , i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (!extracted.slashes) instructions[3] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];

    if (typeof instruction === 'function') {
      address = instruction(address);
      continue;
    }

    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if ((index = parse.exec(address))) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (
      relative && instruction[3] ? location[key] || '' : ''
    );

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (
      relative
    && location.slashes
    && url.pathname.charAt(0) !== '/'
    && (url.pathname !== '' || location.pathname !== '')
  ) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // Default to a / for pathname if none exists. This normalizes the URL
  // to always have a /
  //
  if (url.pathname.charAt(0) !== '/' && url.hostname) {
    url.pathname = '/' + url.pathname;
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL} URL instance for chaining.
 * @public
 */
function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname +':'+ value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':'+ url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  url.href = url.toString();

  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String} Compiled version of the URL.
 * @public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query
    , url = this
    , protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':'+ url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;

  if (url.hash) result += url.hash;

  return result;
}

Url.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
Url.extractProtocol = extractProtocol;
Url.location = lolcation;
Url.trimLeft = trimLeft;
Url.qs = qs;

module.exports = Url;

}).call(this,typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"querystringify":59,"requires-port":60}]},{},[1])(1)
});


//# sourceMappingURL=sockjs.js.map


/***/ }),

/***/ "./src/chatreactions.ts":
/*!******************************!*\
  !*** ./src/chatreactions.ts ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_helper_TemplatePreloader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/helper/TemplatePreloader */ "./src/module/helper/TemplatePreloader.ts");
/* harmony import */ var _joeattardi_emoji_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @joeattardi/emoji-button */ "./node_modules/@joeattardi/emoji-button/dist/index.js");
/* harmony import */ var _lib_DirectoryPicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/DirectoryPicker */ "./src/lib/DirectoryPicker.js");



let socket;
let picker;
let currentMessage;
const emojiDirectories = [];
const customEmojis = [];
Hooks.once("socketlib.ready", () => {
    // Setup Socket Lib for GM ability to add Chat Reactions
    // @ts-ignore
    socket = socketlib.registerModule("chatreactions");
    // @ts-ignore
    socket.register("handleReaction", handleReaction);
});
Hooks.once("init", async () => {
    var _a;
    console.log("===========================♥ ChatReactions ♥==========================");
    const modules = await game.modules;
    modules.forEach((module) => {
        var _a, _b;
        // Go through all modules to find Emoji Packs to add
        if ((_a = module.data["flags"]) === null || _a === void 0 ? void 0 : _a["emojiPacker"]) {
            console.log(`\nChat Reactions found ${module.data["title"]}\n`);
            emojiDirectories.push(`modules/${module.data["name"]}${(_b = module.data["flags"]) === null || _b === void 0 ? void 0 : _b["emojiPacker"]}`);
        }
    });
    emojiDirectories.forEach(async (directory) => {
        const dir = _lib_DirectoryPicker__WEBPACK_IMPORTED_MODULE_2__.default.parse(directory);
        const fileList = await _lib_DirectoryPicker__WEBPACK_IMPORTED_MODULE_2__.default.browse(dir.activeSource, dir.current, {
            bucket: dir.bucket,
        });
        // Load all the custom emojis from emoji packs
        addToCustomEmojiList(fileList, customEmojis);
    });
    // Store the custom emoji directory for loading up all them delciious emojis
    game.settings.register("chatreactions", "chat-reactions-directory", {
        name: "Custom Emojis",
        hint: "You can add more custom emojis for your players to interact with!",
        scope: "world",
        config: true,
        //@ts-ignore
        type: _lib_DirectoryPicker__WEBPACK_IMPORTED_MODULE_2__.default.Directory,
        onChange: () => {
            window.location.reload();
        },
    });
    // Warn User/GM if the directory isnt defined
    if (game.settings.get("chatreactions", "chat-reactions-directory") === "") {
        (_a = ui.notifications) === null || _a === void 0 ? void 0 : _a.warn("The Emoji Reactions module supports custom emojis, Please setup a custom directory to add them!");
    }
    else {
        const dir = _lib_DirectoryPicker__WEBPACK_IMPORTED_MODULE_2__.default.parse(game.settings.get("chatreactions", "chat-reactions-directory"));
        const fileList = await _lib_DirectoryPicker__WEBPACK_IMPORTED_MODULE_2__.default.browse(dir.activeSource, dir.current, { bucket: dir.bucket });
        // Load Up Custom Emojis from folder
        addToCustomEmojiList(fileList, customEmojis);
    }
    picker = new _joeattardi_emoji_button__WEBPACK_IMPORTED_MODULE_1__.EmojiButton({
        style: "twemoji",
        custom: customEmojis,
    });
    picker.on("emoji", (selection) => {
        // `selection` object has an `emoji` property
        // containing the selected emoji
        //@ts-ignore
        if (selection.custom) {
            socket.executeAsGM("handleReaction", selection.url, currentMessage, game.user);
        }
        else {
            socket.executeAsGM("handleReaction", selection.emoji, currentMessage, game.user);
        }
    });
});
function handleReaction(emoji, sentMessage, user) {
    var _a;
    let currentEmojiState = {};
    // Get Current State of Emojis if it exists
    sentMessage = (_a = game.messages) === null || _a === void 0 ? void 0 : _a.get(sentMessage._id);
    if (sentMessage.getFlag("world", "emoji")) {
        currentEmojiState = JSON.parse(sentMessage.getFlag("world", "emoji"));
    }
    const translatedEmoji = emojiUnicode(emoji);
    // Reaction Logic
    if (currentEmojiState[translatedEmoji]) {
        if (currentEmojiState[translatedEmoji].includes(user._id)) {
            currentEmojiState[translatedEmoji] = currentEmojiState[translatedEmoji].filter(function (value) {
                return value != user._id;
            });
            if (currentEmojiState[translatedEmoji].length === 0) {
                delete currentEmojiState[translatedEmoji];
            }
        }
        else {
            currentEmojiState[translatedEmoji].push(user._id);
        }
    }
    else {
        currentEmojiState[translatedEmoji] = [user._id];
    }
    sentMessage.setFlag("world", "emoji", JSON.stringify(currentEmojiState));
}
// Get all emoji image files from the directory and add them to the picker
function addToCustomEmojiList(fileList, customEmojis) {
    fileList["files"].forEach(function (value) {
        customEmojis.push({
            name: `${value.split("/").pop(-1).split(".").slice(0, -1).join(".")}`,
            emoji: value,
        });
    });
}
// Logic for Button Styling and Rendering
Hooks.on("renderChatMessage", async (message, element) => {
    let currentEmojiState = {};
    // Get current state of emojis
    if (message.getFlag("world", "emoji")) {
        currentEmojiState = JSON.parse(message.getFlag("world", "emoji"));
    }
    // Add All the reactions and render them accordingly as if the current user reacted or not
    const emojiRack = document.createElement("div");
    emojiRack.id = "chatReactionRack";
    for (const [key, value] of Object.entries(currentEmojiState)) {
        let isvoted = false;
        const button = document.createElement("button");
        const voters = value;
        voters.forEach((voter) => {
            var _a;
            if (((_a = game.user) === null || _a === void 0 ? void 0 : _a._id) == voter) {
                isvoted = true;
            }
        });
        const ButtonContent = document.createElement("div");
        const EmojiImage = document.createElement("img");
        const EmojiReactions = document.createElement("p");
        EmojiReactions.textContent = `${voters.length}`;
        if (key.includes("/")) {
            EmojiImage.src = window.location.origin + "/" + key;
        }
        else {
            EmojiImage.src = `https://twemoji.maxcdn.com/v/latest/svg/${key}.svg`;
        }
        EmojiImage.className = "emoji-image";
        ButtonContent.className = "emoji-button-content";
        ButtonContent.appendChild(EmojiImage);
        ButtonContent.appendChild(EmojiReactions);
        button.appendChild(ButtonContent);
        if (isvoted) {
            button.className = "emoji-button emoji-active ";
        }
        else {
            button.className = "emoji-button reaction";
        }
        ButtonContent.addEventListener("click", function () {
            console.log("executing function");
            //@ts-ignore
            socket.executeAsGM("handleReaction", key.includes("/") ? key : String.fromCodePoint(parseInt(key, 16)), message, game.user);
        });
        emojiRack.appendChild(button);
    }
    // Create Picker Button and add it to the Emoji Rack
    const messageElement = element[0];
    if (Object.entries(currentEmojiState).length < 4) {
        const p = document.createElement("button");
        const EmojiImage = document.createElement("img");
        EmojiImage.src = `https://twemoji.maxcdn.com/v/latest/svg/2795.svg`;
        EmojiImage.className = "emoji-image";
        p.appendChild(EmojiImage);
        p.className += "emoji-button trigger";
        // tslint:disable-next-line
        p === null || p === void 0 ? void 0 : p.addEventListener("click", function () {
            picker.togglePicker(p);
            currentMessage = message;
        });
        emojiRack.appendChild(p);
    }
    messageElement === null || messageElement === void 0 ? void 0 : messageElement.appendChild(emojiRack);
});
function isEmoji(emoji) {
    // Check if the parameter passed is an emoji or not 
    const re = new RegExp("(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])");
    return re.exec(emoji);
}
function emojiUnicode(emoji) {
    // Return unicode or actual emojis or just return img urls
    if (isEmoji(emoji)) {
        let comp;
        if (emoji.length === 1) {
            comp = emoji.charCodeAt(0);
        }
        comp =
            (emoji.charCodeAt(0) - 0xd800) * 0x400 +
                (emoji.charCodeAt(1) - 0xdc00) +
                0x10000;
        if (comp < 0) {
            comp = emoji.charCodeAt(0);
        }
        return comp.toString("16");
    }
    return emoji;
}
if (true) {
    if (true) {
        module.hot.accept();
        if (module.hot.status() === "apply") {
            for (const template in _templateCache) {
                if (Object.prototype.hasOwnProperty.call(_templateCache, template)) {
                    delete _templateCache[template];
                }
            }
            _module_helper_TemplatePreloader__WEBPACK_IMPORTED_MODULE_0__.TemplatePreloader.preloadHandlebarsTemplates().then(() => {
                for (const application in ui.windows) {
                    if (Object.prototype.hasOwnProperty.call(ui.windows, application)) {
                        ui.windows[application].render(true);
                    }
                }
            });
        }
    }
}


/***/ }),

/***/ "./src/module/helper/TemplatePreloader.ts":
/*!************************************************!*\
  !*** ./src/module/helper/TemplatePreloader.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplatePreloader": () => (/* binding */ TemplatePreloader)
/* harmony export */ });
;
class TemplatePreloader {
    /**
     * Preload a set of templates to compile and cache them for fast access during rendering
     */
    static async preloadHandlebarsTemplates() {
        const templatePaths = [];
        return loadTemplates(templatePaths);
    }
}


/***/ }),

/***/ "./node_modules/url/url.js":
/*!*********************************!*\
  !*** ./node_modules/url/url.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var punycode = __webpack_require__(/*! punycode */ "./node_modules/punycode/punycode.js");
var util = __webpack_require__(/*! ./util */ "./node_modules/url/util.js");

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = __webpack_require__(/*! querystring */ "./node_modules/querystring/index.js");

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};


/***/ }),

/***/ "./node_modules/url/util.js":
/*!**********************************!*\
  !*** ./node_modules/url/util.js ***!
  \**********************************/
/***/ ((module) => {

"use strict";


module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};


/***/ }),

/***/ "./node_modules/webpack-dev-server/client/clients/BaseClient.js":
/*!**********************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/clients/BaseClient.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";

/* eslint-disable
  no-unused-vars
*/

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

module.exports = /*#__PURE__*/function () {
  function BaseClient() {
    _classCallCheck(this, BaseClient);
  }

  _createClass(BaseClient, null, [{
    key: "getClientPath",
    value: function getClientPath(options) {
      throw new Error('Client needs implementation');
    }
  }]);

  return BaseClient;
}();

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/clients/SockJSClient.js":
/*!************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/clients/SockJSClient.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable
  no-unused-vars
*/

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var SockJS = __webpack_require__(/*! sockjs-client/dist/sockjs */ "./node_modules/sockjs-client/dist/sockjs.js");

var BaseClient = __webpack_require__(/*! ./BaseClient */ "./node_modules/webpack-dev-server/client/clients/BaseClient.js");

module.exports = /*#__PURE__*/function (_BaseClient) {
  _inherits(SockJSClient, _BaseClient);

  var _super = _createSuper(SockJSClient);

  function SockJSClient(url) {
    var _this;

    _classCallCheck(this, SockJSClient);

    _this = _super.call(this);
    _this.sock = new SockJS(url);

    _this.sock.onerror = function (err) {// TODO: use logger to log the error event once client and client-src
      // are reorganized to have the same directory structure
    };

    return _this;
  }

  _createClass(SockJSClient, [{
    key: "onOpen",
    value: function onOpen(f) {
      this.sock.onopen = f;
    }
  }, {
    key: "onClose",
    value: function onClose(f) {
      this.sock.onclose = f;
    } // call f with the message string as the first argument

  }, {
    key: "onMessage",
    value: function onMessage(f) {
      this.sock.onmessage = function (e) {
        f(e.data);
      };
    }
  }], [{
    key: "getClientPath",
    value: function getClientPath(options) {
      return /*require.resolve*/(/*! ./SockJSClient */ "./node_modules/webpack-dev-server/client/clients/SockJSClient.js");
    }
  }]);

  return SockJSClient;
}(BaseClient);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/index.js?http://localhost:8080":
/*!*******************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/index.js?http://localhost:8080 ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
var __resourceQuery = "?http://localhost:8080";

/* global __resourceQuery WorkerGlobalScope self */

/* eslint prefer-destructuring: off */

var stripAnsi = __webpack_require__(/*! strip-ansi */ "./node_modules/webpack-dev-server/node_modules/strip-ansi/index.js");

var socket = __webpack_require__(/*! ./socket */ "./node_modules/webpack-dev-server/client/socket.js");

var overlay = __webpack_require__(/*! ./overlay */ "./node_modules/webpack-dev-server/client/overlay.js");

var _require = __webpack_require__(/*! ./utils/log */ "./node_modules/webpack-dev-server/client/utils/log.js"),
    log = _require.log,
    setLogLevel = _require.setLogLevel;

var sendMessage = __webpack_require__(/*! ./utils/sendMessage */ "./node_modules/webpack-dev-server/client/utils/sendMessage.js");

var reloadApp = __webpack_require__(/*! ./utils/reloadApp */ "./node_modules/webpack-dev-server/client/utils/reloadApp.js");

var createSocketUrl = __webpack_require__(/*! ./utils/createSocketUrl */ "./node_modules/webpack-dev-server/client/utils/createSocketUrl.js");

var status = {
  isUnloading: false,
  currentHash: ''
};
var options = {
  hot: false,
  hotReload: true,
  liveReload: false,
  initial: true,
  useWarningOverlay: false,
  useErrorOverlay: false,
  useProgress: false
};
var socketUrl = createSocketUrl(__resourceQuery);
self.addEventListener('beforeunload', function () {
  status.isUnloading = true;
});

if (typeof window !== 'undefined') {
  var qs = window.location.search.toLowerCase();
  options.hotReload = qs.indexOf('hotreload=false') === -1;
}

var onSocketMessage = {
  hot: function hot() {
    options.hot = true;
    log.info('[WDS] Hot Module Replacement enabled.');
  },
  liveReload: function liveReload() {
    options.liveReload = true;
    log.info('[WDS] Live Reloading enabled.');
  },
  invalid: function invalid() {
    log.info('[WDS] App updated. Recompiling...'); // fixes #1042. overlay doesn't clear if errors are fixed but warnings remain.

    if (options.useWarningOverlay || options.useErrorOverlay) {
      overlay.clear();
    }

    sendMessage('Invalid');
  },
  hash: function hash(_hash) {
    status.currentHash = _hash;
  },
  'still-ok': function stillOk() {
    log.info('[WDS] Nothing changed.');

    if (options.useWarningOverlay || options.useErrorOverlay) {
      overlay.clear();
    }

    sendMessage('StillOk');
  },
  'log-level': function logLevel(level) {
    var hotCtx = __webpack_require__("./node_modules/webpack/hot sync ^\\.\\/log$");

    if (hotCtx.keys().indexOf('./log') !== -1) {
      hotCtx('./log').setLogLevel(level);
    }

    setLogLevel(level);
  },
  overlay: function overlay(value) {
    if (typeof document !== 'undefined') {
      if (typeof value === 'boolean') {
        options.useWarningOverlay = false;
        options.useErrorOverlay = value;
      } else if (value) {
        options.useWarningOverlay = value.warnings;
        options.useErrorOverlay = value.errors;
      }
    }
  },
  progress: function progress(_progress) {
    if (typeof document !== 'undefined') {
      options.useProgress = _progress;
    }
  },
  'progress-update': function progressUpdate(data) {
    if (options.useProgress) {
      log.info("[WDS] ".concat(data.percent, "% - ").concat(data.msg, "."));
    }

    sendMessage('Progress', data);
  },
  ok: function ok() {
    sendMessage('Ok');

    if (options.useWarningOverlay || options.useErrorOverlay) {
      overlay.clear();
    }

    if (options.initial) {
      return options.initial = false;
    } // eslint-disable-line no-return-assign


    reloadApp(options, status);
  },
  'content-changed': function contentChanged() {
    log.info('[WDS] Content base changed. Reloading...');
    self.location.reload();
  },
  warnings: function warnings(_warnings) {
    log.warn('[WDS] Warnings while compiling.');

    var strippedWarnings = _warnings.map(function (warning) {
      return stripAnsi(warning);
    });

    sendMessage('Warnings', strippedWarnings);

    for (var i = 0; i < strippedWarnings.length; i++) {
      log.warn(strippedWarnings[i]);
    }

    if (options.useWarningOverlay) {
      overlay.showMessage(_warnings);
    }

    if (options.initial) {
      return options.initial = false;
    } // eslint-disable-line no-return-assign


    reloadApp(options, status);
  },
  errors: function errors(_errors) {
    log.error('[WDS] Errors while compiling. Reload prevented.');

    var strippedErrors = _errors.map(function (error) {
      return stripAnsi(error);
    });

    sendMessage('Errors', strippedErrors);

    for (var i = 0; i < strippedErrors.length; i++) {
      log.error(strippedErrors[i]);
    }

    if (options.useErrorOverlay) {
      overlay.showMessage(_errors);
    }

    options.initial = false;
  },
  error: function error(_error) {
    log.error(_error);
  },
  close: function close() {
    log.error('[WDS] Disconnected!');
    sendMessage('Close');
  }
};
socket(socketUrl, onSocketMessage);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/overlay.js":
/*!***********************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/overlay.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
 // The error overlay is inspired (and mostly copied) from Create React App (https://github.com/facebookincubator/create-react-app)
// They, in turn, got inspired by webpack-hot-middleware (https://github.com/glenjamin/webpack-hot-middleware).

var ansiHTML = __webpack_require__(/*! ansi-html */ "./node_modules/ansi-html/index.js");

var _require = __webpack_require__(/*! html-entities */ "./node_modules/html-entities/lib/index.js"),
    AllHtmlEntities = _require.AllHtmlEntities;

var entities = new AllHtmlEntities();
var colors = {
  reset: ['transparent', 'transparent'],
  black: '181818',
  red: 'E36049',
  green: 'B3CB74',
  yellow: 'FFD080',
  blue: '7CAFC2',
  magenta: '7FACCA',
  cyan: 'C3C2EF',
  lightgrey: 'EBE7E3',
  darkgrey: '6D7891'
};
var overlayIframe = null;
var overlayDiv = null;
var lastOnOverlayDivReady = null;
ansiHTML.setColors(colors);

function createOverlayIframe(onIframeLoad) {
  var iframe = document.createElement('iframe');
  iframe.id = 'webpack-dev-server-client-overlay';
  iframe.src = 'about:blank';
  iframe.style.position = 'fixed';
  iframe.style.left = 0;
  iframe.style.top = 0;
  iframe.style.right = 0;
  iframe.style.bottom = 0;
  iframe.style.width = '100vw';
  iframe.style.height = '100vh';
  iframe.style.border = 'none';
  iframe.style.zIndex = 9999999999;
  iframe.onload = onIframeLoad;
  return iframe;
}

function addOverlayDivTo(iframe) {
  var div = iframe.contentDocument.createElement('div');
  div.id = 'webpack-dev-server-client-overlay-div';
  div.style.position = 'fixed';
  div.style.boxSizing = 'border-box';
  div.style.left = 0;
  div.style.top = 0;
  div.style.right = 0;
  div.style.bottom = 0;
  div.style.width = '100vw';
  div.style.height = '100vh';
  div.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
  div.style.color = '#E8E8E8';
  div.style.fontFamily = 'Menlo, Consolas, monospace';
  div.style.fontSize = 'large';
  div.style.padding = '2rem';
  div.style.lineHeight = '1.2';
  div.style.whiteSpace = 'pre-wrap';
  div.style.overflow = 'auto';
  iframe.contentDocument.body.appendChild(div);
  return div;
}

function ensureOverlayDivExists(onOverlayDivReady) {
  if (overlayDiv) {
    // Everything is ready, call the callback right away.
    onOverlayDivReady(overlayDiv);
    return;
  } // Creating an iframe may be asynchronous so we'll schedule the callback.
  // In case of multiple calls, last callback wins.


  lastOnOverlayDivReady = onOverlayDivReady;

  if (overlayIframe) {
    // We've already created it.
    return;
  } // Create iframe and, when it is ready, a div inside it.


  overlayIframe = createOverlayIframe(function () {
    overlayDiv = addOverlayDivTo(overlayIframe); // Now we can talk!

    lastOnOverlayDivReady(overlayDiv);
  }); // Zalgo alert: onIframeLoad() will be called either synchronously
  // or asynchronously depending on the browser.
  // We delay adding it so `overlayIframe` is set when `onIframeLoad` fires.

  document.body.appendChild(overlayIframe);
} // Successful compilation.


function clear() {
  if (!overlayDiv) {
    // It is not there in the first place.
    return;
  } // Clean up and reset internal state.


  document.body.removeChild(overlayIframe);
  overlayDiv = null;
  overlayIframe = null;
  lastOnOverlayDivReady = null;
} // Compilation with errors (e.g. syntax error or missing modules).


function showMessage(messages) {
  ensureOverlayDivExists(function (div) {
    // Make it look similar to our terminal.
    div.innerHTML = "<span style=\"color: #".concat(colors.red, "\">Failed to compile.</span><br><br>").concat(ansiHTML(entities.encode(messages[0])));
  });
}

module.exports = {
  clear: clear,
  showMessage: showMessage
};

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/socket.js":
/*!**********************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/socket.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __webpack_dev_server_client__ = __webpack_require__(/*! ./node_modules/webpack-dev-server/client/clients/SockJSClient.js */ "./node_modules/webpack-dev-server/client/clients/SockJSClient.js");

/* global __webpack_dev_server_client__ */

/* eslint-disable
  camelcase
*/
// this SockJSClient is here as a default fallback, in case inline mode
// is off or the client is not injected. This will be switched to
// WebsocketClient when it becomes the default
// important: the path to SockJSClient here is made to work in the 'client'
// directory, but is updated via the webpack compilation when compiled from
// the 'client-src' directory

var Client = typeof __webpack_dev_server_client__ !== 'undefined' ? __webpack_dev_server_client__ : // eslint-disable-next-line import/no-unresolved
__webpack_require__(/*! ./clients/SockJSClient */ "./node_modules/webpack-dev-server/client/clients/SockJSClient.js");
var retries = 0;
var client = null;

var socket = function initSocket(url, handlers) {
  client = new Client(url);
  client.onOpen(function () {
    retries = 0;
  });
  client.onClose(function () {
    if (retries === 0) {
      handlers.close();
    } // Try to reconnect.


    client = null; // After 10 retries stop trying, to prevent logspam.

    if (retries <= 10) {
      // Exponentially increase timeout to reconnect.
      // Respectfully copied from the package `got`.
      // eslint-disable-next-line no-mixed-operators, no-restricted-properties
      var retryInMs = 1000 * Math.pow(2, retries) + Math.random() * 100;
      retries += 1;
      setTimeout(function () {
        socket(url, handlers);
      }, retryInMs);
    }
  });
  client.onMessage(function (data) {
    var msg = JSON.parse(data);

    if (handlers[msg.type]) {
      handlers[msg.type](msg.data);
    }
  });
};

module.exports = socket;

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/createSocketUrl.js":
/*!*************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/createSocketUrl.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* global self */

var url = __webpack_require__(/*! url */ "./node_modules/url/url.js");

var getCurrentScriptSource = __webpack_require__(/*! ./getCurrentScriptSource */ "./node_modules/webpack-dev-server/client/utils/getCurrentScriptSource.js");

function createSocketUrl(resourceQuery, currentLocation) {
  var urlParts;

  if (typeof resourceQuery === 'string' && resourceQuery !== '') {
    // If this bundle is inlined, use the resource query to get the correct url.
    // format is like `?http://0.0.0.0:8096&sockPort=8097&sockHost=localhost`
    urlParts = url.parse(resourceQuery // strip leading `?` from query string to get a valid URL
    .substr(1) // replace first `&` with `?` to have a valid query string
    .replace('&', '?'), true);
  } else {
    // Else, get the url from the <script> this file was called with.
    var scriptHost = getCurrentScriptSource();
    urlParts = url.parse(scriptHost || '/', true, true);
  } // Use parameter to allow passing location in unit tests


  if (typeof currentLocation === 'string' && currentLocation !== '') {
    currentLocation = url.parse(currentLocation);
  } else {
    currentLocation = self.location;
  }

  return getSocketUrl(urlParts, currentLocation);
}
/*
 * Gets socket URL based on Script Source/Location
 * (scriptSrc: URL, location: URL) -> URL
 */


function getSocketUrl(urlParts, loc) {
  var auth = urlParts.auth,
      query = urlParts.query;
  var hostname = urlParts.hostname,
      protocol = urlParts.protocol,
      port = urlParts.port;

  if (!port || port === '0') {
    port = loc.port;
  } // check ipv4 and ipv6 `all hostname`
  // why do we need this check?
  // hostname n/a for file protocol (example, when using electron, ionic)
  // see: https://github.com/webpack/webpack-dev-server/pull/384


  if ((hostname === '0.0.0.0' || hostname === '::') && loc.hostname && loc.protocol.indexOf('http') === 0) {
    hostname = loc.hostname;
  } // `hostname` can be empty when the script path is relative. In that case, specifying
  // a protocol would result in an invalid URL.
  // When https is used in the app, secure websockets are always necessary
  // because the browser doesn't accept non-secure websockets.


  if (hostname && hostname !== '127.0.0.1' && (loc.protocol === 'https:' || urlParts.hostname === '0.0.0.0')) {
    protocol = loc.protocol;
  } // all of these sock url params are optionally passed in through
  // resourceQuery, so we need to fall back to the default if
  // they are not provided


  var sockHost = query.sockHost || hostname;
  var sockPath = query.sockPath || '/sockjs-node';
  var sockPort = query.sockPort || port;

  if (sockPort === 'location') {
    sockPort = loc.port;
  }

  return url.format({
    protocol: protocol,
    auth: auth,
    hostname: sockHost,
    port: sockPort,
    // If sockPath is provided it'll be passed in via the resourceQuery as a
    // query param so it has to be parsed out of the querystring in order for the
    // client to open the socket to the correct location.
    pathname: sockPath
  });
}

module.exports = createSocketUrl;

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/getCurrentScriptSource.js":
/*!********************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/getCurrentScriptSource.js ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";


function getCurrentScriptSource() {
  // `document.currentScript` is the most accurate way to find the current script,
  // but is not supported in all browsers.
  if (document.currentScript) {
    return document.currentScript.getAttribute('src');
  } // Fall back to getting all scripts in the document.


  var scriptElements = document.scripts || [];
  var currentScript = scriptElements[scriptElements.length - 1];

  if (currentScript) {
    return currentScript.getAttribute('src');
  } // Fail as there was no script to use.


  throw new Error('[WDS] Failed to get current script source.');
}

module.exports = getCurrentScriptSource;

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/log.js":
/*!*************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/log.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var log = __webpack_require__(/*! loglevel */ "./node_modules/loglevel/lib/loglevel.js").getLogger('webpack-dev-server');

var INFO = 'info';
var WARN = 'warn';
var ERROR = 'error';
var DEBUG = 'debug';
var TRACE = 'trace';
var SILENT = 'silent'; // deprecated
// TODO: remove these at major released
// https://github.com/webpack/webpack-dev-server/pull/1825

var WARNING = 'warning';
var NONE = 'none'; // Set the default log level

log.setDefaultLevel(INFO);

function setLogLevel(level) {
  switch (level) {
    case INFO:
    case WARN:
    case ERROR:
    case DEBUG:
    case TRACE:
      log.setLevel(level);
      break;
    // deprecated

    case WARNING:
      // loglevel's warning name is different from webpack's
      log.setLevel('warn');
      break;
    // deprecated

    case NONE:
    case SILENT:
      log.disableAll();
      break;

    default:
      log.error("[WDS] Unknown clientLogLevel '".concat(level, "'"));
  }
}

module.exports = {
  log: log,
  setLogLevel: setLogLevel
};

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/reloadApp.js":
/*!*******************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/reloadApp.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* global WorkerGlobalScope self */

var _require = __webpack_require__(/*! ./log */ "./node_modules/webpack-dev-server/client/utils/log.js"),
    log = _require.log;

function reloadApp(_ref, _ref2) {
  var hotReload = _ref.hotReload,
      hot = _ref.hot,
      liveReload = _ref.liveReload;
  var isUnloading = _ref2.isUnloading,
      currentHash = _ref2.currentHash;

  if (isUnloading || !hotReload) {
    return;
  }

  if (hot) {
    log.info('[WDS] App hot update...');

    var hotEmitter = __webpack_require__(/*! webpack/hot/emitter */ "./node_modules/webpack/hot/emitter.js");

    hotEmitter.emit('webpackHotUpdate', currentHash);

    if (typeof self !== 'undefined' && self.window) {
      // broadcast update to window
      self.postMessage("webpackHotUpdate".concat(currentHash), '*');
    }
  } // allow refreshing the page only if liveReload isn't disabled
  else if (liveReload) {
      var rootWindow = self; // use parent window for reload (in case we're in an iframe with no valid src)

      var intervalId = self.setInterval(function () {
        if (rootWindow.location.protocol !== 'about:') {
          // reload immediately if protocol is valid
          applyReload(rootWindow, intervalId);
        } else {
          rootWindow = rootWindow.parent;

          if (rootWindow.parent === rootWindow) {
            // if parent equals current window we've reached the root which would continue forever, so trigger a reload anyways
            applyReload(rootWindow, intervalId);
          }
        }
      });
    }

  function applyReload(rootWindow, intervalId) {
    clearInterval(intervalId);
    log.info('[WDS] App updated. Reloading...');
    rootWindow.location.reload();
  }
}

module.exports = reloadApp;

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/sendMessage.js":
/*!*********************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/sendMessage.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";

/* global __resourceQuery WorkerGlobalScope self */
// Send messages to the outside, so plugins can consume it.

function sendMsg(type, data) {
  if (typeof self !== 'undefined' && (typeof WorkerGlobalScope === 'undefined' || !(self instanceof WorkerGlobalScope))) {
    self.postMessage({
      type: "webpack".concat(type),
      data: data
    }, '*');
  }
}

module.exports = sendMsg;

/***/ }),

/***/ "./node_modules/webpack-dev-server/node_modules/ansi-regex/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/node_modules/ansi-regex/index.js ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";

module.exports = function () {
	return /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g;
};


/***/ }),

/***/ "./node_modules/webpack-dev-server/node_modules/strip-ansi/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/node_modules/strip-ansi/index.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var ansiRegex = __webpack_require__(/*! ansi-regex */ "./node_modules/webpack-dev-server/node_modules/ansi-regex/index.js")();

module.exports = function (str) {
	return typeof str === 'string' ? str.replace(ansiRegex, '') : str;
};


/***/ }),

/***/ "./node_modules/webpack/hot/dev-server.js":
/*!************************************************!*\
  !*** ./node_modules/webpack/hot/dev-server.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
/* globals __webpack_hash__ */
if (true) {
	var lastHash;
	var upToDate = function upToDate() {
		return lastHash.indexOf(__webpack_require__.h()) >= 0;
	};
	var log = __webpack_require__(/*! ./log */ "./node_modules/webpack/hot/log.js");
	var check = function check() {
		module.hot
			.check(true)
			.then(function (updatedModules) {
				if (!updatedModules) {
					log("warning", "[HMR] Cannot find update. Need to do a full reload!");
					log(
						"warning",
						"[HMR] (Probably because of restarting the webpack-dev-server)"
					);
					window.location.reload();
					return;
				}

				if (!upToDate()) {
					check();
				}

				__webpack_require__(/*! ./log-apply-result */ "./node_modules/webpack/hot/log-apply-result.js")(updatedModules, updatedModules);

				if (upToDate()) {
					log("info", "[HMR] App is up to date.");
				}
			})
			.catch(function (err) {
				var status = module.hot.status();
				if (["abort", "fail"].indexOf(status) >= 0) {
					log(
						"warning",
						"[HMR] Cannot apply update. Need to do a full reload!"
					);
					log("warning", "[HMR] " + log.formatError(err));
					window.location.reload();
				} else {
					log("warning", "[HMR] Update failed: " + log.formatError(err));
				}
			});
	};
	var hotEmitter = __webpack_require__(/*! ./emitter */ "./node_modules/webpack/hot/emitter.js");
	hotEmitter.on("webpackHotUpdate", function (currentHash) {
		lastHash = currentHash;
		if (!upToDate() && module.hot.status() === "idle") {
			log("info", "[HMR] Checking for updates on the server...");
			check();
		}
	});
	log("info", "[HMR] Waiting for update signal from WDS...");
} else {}


/***/ }),

/***/ "./node_modules/webpack/hot/emitter.js":
/*!*********************************************!*\
  !*** ./node_modules/webpack/hot/emitter.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js");
module.exports = new EventEmitter();


/***/ }),

/***/ "./node_modules/webpack/hot/log-apply-result.js":
/*!******************************************************!*\
  !*** ./node_modules/webpack/hot/log-apply-result.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function (updatedModules, renewedModules) {
	var unacceptedModules = updatedModules.filter(function (moduleId) {
		return renewedModules && renewedModules.indexOf(moduleId) < 0;
	});
	var log = __webpack_require__(/*! ./log */ "./node_modules/webpack/hot/log.js");

	if (unacceptedModules.length > 0) {
		log(
			"warning",
			"[HMR] The following modules couldn't be hot updated: (They would need a full reload!)"
		);
		unacceptedModules.forEach(function (moduleId) {
			log("warning", "[HMR]  - " + moduleId);
		});
	}

	if (!renewedModules || renewedModules.length === 0) {
		log("info", "[HMR] Nothing hot updated.");
	} else {
		log("info", "[HMR] Updated modules:");
		renewedModules.forEach(function (moduleId) {
			if (typeof moduleId === "string" && moduleId.indexOf("!") !== -1) {
				var parts = moduleId.split("!");
				log.groupCollapsed("info", "[HMR]  - " + parts.pop());
				log("info", "[HMR]  - " + moduleId);
				log.groupEnd("info");
			} else {
				log("info", "[HMR]  - " + moduleId);
			}
		});
		var numberIds = renewedModules.every(function (moduleId) {
			return typeof moduleId === "number";
		});
		if (numberIds)
			log(
				"info",
				'[HMR] Consider using the optimization.moduleIds: "named" for module names.'
			);
	}
};


/***/ }),

/***/ "./node_modules/webpack/hot/log.js":
/*!*****************************************!*\
  !*** ./node_modules/webpack/hot/log.js ***!
  \*****************************************/
/***/ ((module) => {

var logLevel = "info";

function dummy() {}

function shouldLog(level) {
	var shouldLog =
		(logLevel === "info" && level === "info") ||
		(["info", "warning"].indexOf(logLevel) >= 0 && level === "warning") ||
		(["info", "warning", "error"].indexOf(logLevel) >= 0 && level === "error");
	return shouldLog;
}

function logGroup(logFn) {
	return function (level, msg) {
		if (shouldLog(level)) {
			logFn(msg);
		}
	};
}

module.exports = function (level, msg) {
	if (shouldLog(level)) {
		if (level === "info") {
			console.log(msg);
		} else if (level === "warning") {
			console.warn(msg);
		} else if (level === "error") {
			console.error(msg);
		}
	}
};

/* eslint-disable node/no-unsupported-features/node-builtins */
var group = console.group || dummy;
var groupCollapsed = console.groupCollapsed || dummy;
var groupEnd = console.groupEnd || dummy;
/* eslint-enable node/no-unsupported-features/node-builtins */

module.exports.group = logGroup(group);

module.exports.groupCollapsed = logGroup(groupCollapsed);

module.exports.groupEnd = logGroup(groupEnd);

module.exports.setLogLevel = function (level) {
	logLevel = level;
};

module.exports.formatError = function (err) {
	var message = err.message;
	var stack = err.stack;
	if (!stack) {
		return message;
	} else if (stack.indexOf(message) < 0) {
		return message + "\n" + stack;
	} else {
		return stack;
	}
};


/***/ }),

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!***************************************************************!*\
  !*** ./node_modules/webpack/hot/ sync nonrecursive ^\.\/log$ ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/lib/DirectoryPicker.js":
/*!************************************!*\
  !*** ./src/lib/DirectoryPicker.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/**
 * Game Settings: Directory
 */


 class DirectoryPicker extends FilePicker {
    constructor(options = {}) {
      super(options);
    }
  
    _onSubmit(event) {
      event.preventDefault();
      const path = event.target.target.value;
      const activeSource = this.activeSource;
      const bucket = event.target.bucket ? event.target.bucket.value : null;
      this.field.value = DirectoryPicker.format({
        activeSource,
        bucket,
        path,
      });
      this.close();
    }
  
    static async uploadToPath(path, file) {
      const options = DirectoryPicker.parse(path);
      return FilePicker.upload(options.activeSource, options.current, file, { bucket: options.bucket });
    }
  
    // returns the type "Directory" for rendering the SettingsConfig
    static Directory(val) {
      return val == null ? '' : String(val);
    }
  
    // formats the data into a string for saving it as a GameSetting
    static format(value) {
      return value.bucket !== null
        ? `[${value.activeSource}:${value.bucket}] ${value.path}`
        : `[${value.activeSource}] ${value.path}`;
    }
  
    // parses the string back to something the FilePicker can understand as an option
    static parse(inStr) {
      const str = inStr ?? ''
      let matches = str.match(/\[(.+)\]\s*(.+)?/u);
  
      if (matches) {
        let [,source, current = ''] = matches;
        current = current.trim();
        const [s3, bucket] = source.split(":");
        if (bucket !== undefined) {
          return {
            activeSource: s3,
            bucket: bucket,
            current: current,
          };
        } else {
          return {
            activeSource: s3,
            bucket: null,
            current: current,
          };
        }
      }
      // failsave, try it at least
      return {
        activeSource: "data",
        bucket: null,
        current: str,
      };
    }
  
    static extractUrl(str) {
      let options = DirectoryPicker.parse(str);
      if (options.activeSource === "data" || options.activeSource === "public") {
        return;
      } else {
        return options.current;
      }
    }
  
    // Adds a FilePicker-Simulator-Button next to the input fields
    static processHtml(html) {
      $(html)
        .find(`input[data-dtype="Directory"]`)
        .each(function () {
          if (!$(this).next().length) {
            console.log("Adding Picker Button");
            let picker = new DirectoryPicker({
              field: $(this)[0],
              ...DirectoryPicker.parse(this.value),
            });
            let pickerButton = $(
              '<button type="button" class="file-picker" data-type="imagevideo" data-target="img" title="Pick directory"><i class="fas fa-file-import fa-fw"></i></button>'
            );
            pickerButton.on("click", function () {
              picker.render(true);
            });
            $(this).parent().append(pickerButton);
          }
        });
    }
  
    /** @override */
    activateListeners(html) {
      super.activateListeners(html);
  
      // remove unnecessary elements
      $(html).find("ol.files-list").remove();
      $(html).find("footer div").remove();
      $(html).find("footer button").text("Select Directory");
    }
  }
  
  Hooks.on("renderSettingsConfig", (app, html, user) => {
    DirectoryPicker.processHtml(html);
  });
  
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DirectoryPicker);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("6e3bdbf06c3121ac6693")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "placeholder:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				registeredStatusHandlers[i].call(null, newStatus);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			setStatus("check");
/******/ 			return __webpack_require__.hmrM().then(function (update) {
/******/ 				if (!update) {
/******/ 					setStatus(applyInvalidatedModules() ? "ready" : "idle");
/******/ 					return null;
/******/ 				}
/******/ 		
/******/ 				setStatus("prepare");
/******/ 		
/******/ 				var updatedModules = [];
/******/ 				blockingPromises = [];
/******/ 				currentUpdateApplyHandlers = [];
/******/ 		
/******/ 				return Promise.all(
/******/ 					Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 						promises,
/******/ 						key
/******/ 					) {
/******/ 						__webpack_require__.hmrC[key](
/******/ 							update.c,
/******/ 							update.r,
/******/ 							update.m,
/******/ 							promises,
/******/ 							currentUpdateApplyHandlers,
/******/ 							updatedModules
/******/ 						);
/******/ 						return promises;
/******/ 					},
/******/ 					[])
/******/ 				).then(function () {
/******/ 					return waitForBlockingPromises(function () {
/******/ 						if (applyOnUpdate) {
/******/ 							return internalApply(applyOnUpdate);
/******/ 						} else {
/******/ 							setStatus("ready");
/******/ 		
/******/ 							return updatedModules;
/******/ 						}
/******/ 					});
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				setStatus("abort");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			// handle errors in accept handlers and self accepted module load
/******/ 			if (error) {
/******/ 				setStatus("fail");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw error;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			if (queuedInvalidatedModules) {
/******/ 				return internalApply(options).then(function (list) {
/******/ 					outdatedModules.forEach(function (moduleId) {
/******/ 						if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 					});
/******/ 					return list;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			setStatus("idle");
/******/ 			return Promise.resolve(outdatedModules);
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdateplaceholder"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./src/chatreactions.ts");
/******/ 	__webpack_require__("./node_modules/webpack-dev-server/client/index.js?http://localhost:8080");
/******/ 	var __webpack_exports__ = __webpack_require__("./node_modules/webpack/hot/dev-server.js");
/******/ 	
/******/ })()
;