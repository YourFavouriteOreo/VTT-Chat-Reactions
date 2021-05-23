self["webpackHotUpdateplaceholder"]("main",{

/***/ "./src/chatreactions.ts":
/*!******************************!*\
  !*** ./src/chatreactions.ts ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_helper_TemplatePreloader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/helper/TemplatePreloader */ "./src/module/helper/TemplatePreloader.ts");

Hooks.once("init", async () => {
    console.log("=============================HMR============================");
});
Hooks.once("ready", async () => {
    console.log("loadedd chatreactions");
});
Hooks.on("renderChatMessage", async (message, element) => {
    console.log(message);
    console.log(element[0]);
    var test = element[0];
    test.appendChild(new HTMLParagraphElement());
});
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


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("abb5e75e7656ca459969")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbGFjZWhvbGRlci8uL3NyYy9jaGF0cmVhY3Rpb25zLnRzIiwid2VicGFjazovL3BsYWNlaG9sZGVyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFzRTtBQUV0RSxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLElBQUksRUFBRTtJQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLDhEQUE4RCxDQUFDO0FBQy9FLENBQUMsQ0FBQyxDQUFDO0FBRUgsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUU7SUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQztBQUN4QyxDQUFDLENBQUMsQ0FBQztBQUVILEtBQUssQ0FBQyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBQyxPQUFPLEVBQUUsRUFBRTtJQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztJQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxvQkFBb0IsRUFBRSxDQUFDO0FBQ2hELENBQUMsQ0FBQyxDQUFDO0FBR0gsSUFBSSxJQUFzQyxFQUFFO0lBQ3hDLElBQUksSUFBVSxFQUFFO1FBQ1osaUJBQWlCLEVBQUUsQ0FBQztRQUVwQixJQUFJLFVBQVUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxPQUFPLEVBQUU7WUFDakMsS0FBSyxNQUFNLFFBQVEsSUFBSSxjQUFjLEVBQUU7Z0JBQ25DLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxRQUFRLENBQUMsRUFBRTtvQkFDaEUsT0FBTyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ25DO2FBQ0o7WUFFRCwwR0FBNEMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ3JELEtBQUssTUFBTSxXQUFXLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRTtvQkFDbEMsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsRUFBRTt3QkFDL0QsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ3hDO2lCQUNKO1lBQ0wsQ0FBQyxDQUFDLENBQUM7U0FDTjtLQUNKO0NBQ0o7Ozs7Ozs7Ozs7O1VDdENELHNEIiwiZmlsZSI6Im1haW4uODk2ZDk3ZWRmOGMzOTMyYTAxYWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlbXBsYXRlUHJlbG9hZGVyIH0gZnJvbSBcIi4vbW9kdWxlL2hlbHBlci9UZW1wbGF0ZVByZWxvYWRlclwiO1xyXG5cclxuSG9va3Mub25jZShcImluaXRcIiwgYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCI9PT09PT09PT09PT09PT09PT09PT09PT09PT09PUhNUj09PT09PT09PT09PT09PT09PT09PT09PT09PT1cIilcclxufSk7XHJcblxyXG5Ib29rcy5vbmNlKFwicmVhZHlcIiwgYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJsb2FkZWRkIGNoYXRyZWFjdGlvbnNcIilcclxufSk7XHJcblxyXG5Ib29rcy5vbihcInJlbmRlckNoYXRNZXNzYWdlXCIsIGFzeW5jIChtZXNzYWdlLGVsZW1lbnQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpXHJcbiAgICBjb25zb2xlLmxvZyhlbGVtZW50WzBdKVxyXG4gICAgdmFyIHRlc3QgPSBlbGVtZW50WzBdXHJcbiAgICB0ZXN0LmFwcGVuZENoaWxkKG5ldyBIVE1MUGFyYWdyYXBoRWxlbWVudCgpKVxyXG59KTtcclxuXHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xyXG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcclxuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xyXG5cclxuICAgICAgICBpZiAobW9kdWxlLmhvdC5zdGF0dXMoKSA9PT0gXCJhcHBseVwiKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgdGVtcGxhdGUgaW4gX3RlbXBsYXRlQ2FjaGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX3RlbXBsYXRlQ2FjaGUsIHRlbXBsYXRlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBfdGVtcGxhdGVDYWNoZVt0ZW1wbGF0ZV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIFRlbXBsYXRlUHJlbG9hZGVyLnByZWxvYWRIYW5kbGViYXJzVGVtcGxhdGVzKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGFwcGxpY2F0aW9uIGluIHVpLndpbmRvd3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHVpLndpbmRvd3MsIGFwcGxpY2F0aW9uKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1aS53aW5kb3dzW2FwcGxpY2F0aW9uXS5yZW5kZXIodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhYmI1ZTc1ZTc2NTZjYTQ1OTk2OVwiKSJdLCJzb3VyY2VSb290IjoiIn0=