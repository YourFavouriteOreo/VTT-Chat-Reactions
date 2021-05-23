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
Hooks.on("renderChatMessage", async (message) => {
    console.log(message.popOut);
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
/******/ 	__webpack_require__.h = () => ("e1a381fdf1a791487182")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbGFjZWhvbGRlci8uL3NyYy9jaGF0cmVhY3Rpb25zLnRzIiwid2VicGFjazovL3BsYWNlaG9sZGVyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFzRTtBQUV0RSxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLElBQUksRUFBRTtJQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLDhEQUE4RCxDQUFDO0FBQy9FLENBQUMsQ0FBQyxDQUFDO0FBRUgsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUU7SUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQztBQUN4QyxDQUFDLENBQUMsQ0FBQztBQUVILEtBQUssQ0FBQyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFO0lBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztBQUMvQixDQUFDLENBQUMsQ0FBQztBQUdILElBQUksSUFBc0MsRUFBRTtJQUN4QyxJQUFJLElBQVUsRUFBRTtRQUNaLGlCQUFpQixFQUFFLENBQUM7UUFFcEIsSUFBSSxVQUFVLENBQUMsTUFBTSxFQUFFLEtBQUssT0FBTyxFQUFFO1lBQ2pDLEtBQUssTUFBTSxRQUFRLElBQUksY0FBYyxFQUFFO2dCQUNuQyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsUUFBUSxDQUFDLEVBQUU7b0JBQ2hFLE9BQU8sY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUNuQzthQUNKO1lBRUQsMEdBQTRDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNyRCxLQUFLLE1BQU0sV0FBVyxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUU7b0JBQ2xDLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLEVBQUU7d0JBQy9ELEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUN4QztpQkFDSjtZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ047S0FDSjtDQUNKOzs7Ozs7Ozs7OztVQ25DRCxzRCIsImZpbGUiOiJtYWluLjJkMTQwNDQ5ZmY3NTAxOGY0NTNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZW1wbGF0ZVByZWxvYWRlciB9IGZyb20gXCIuL21vZHVsZS9oZWxwZXIvVGVtcGxhdGVQcmVsb2FkZXJcIjtcclxuXHJcbkhvb2tzLm9uY2UoXCJpbml0XCIsIGFzeW5jICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1ITVI9PT09PT09PT09PT09PT09PT09PT09PT09PT09XCIpXHJcbn0pO1xyXG5cclxuSG9va3Mub25jZShcInJlYWR5XCIsIGFzeW5jICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwibG9hZGVkZCBjaGF0cmVhY3Rpb25zXCIpXHJcbn0pO1xyXG5cclxuSG9va3Mub24oXCJyZW5kZXJDaGF0TWVzc2FnZVwiLCBhc3luYyAobWVzc2FnZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cobWVzc2FnZS5wb3BPdXQpXHJcbn0pO1xyXG5cclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XHJcbiAgICBpZiAobW9kdWxlLmhvdCkge1xyXG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XHJcblxyXG4gICAgICAgIGlmIChtb2R1bGUuaG90LnN0YXR1cygpID09PSBcImFwcGx5XCIpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCB0ZW1wbGF0ZSBpbiBfdGVtcGxhdGVDYWNoZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfdGVtcGxhdGVDYWNoZSwgdGVtcGxhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIF90ZW1wbGF0ZUNhY2hlW3RlbXBsYXRlXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgVGVtcGxhdGVQcmVsb2FkZXIucHJlbG9hZEhhbmRsZWJhcnNUZW1wbGF0ZXMoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYXBwbGljYXRpb24gaW4gdWkud2luZG93cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodWkud2luZG93cywgYXBwbGljYXRpb24pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVpLndpbmRvd3NbYXBwbGljYXRpb25dLnJlbmRlcih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImUxYTM4MWZkZjFhNzkxNDg3MTgyXCIpIl0sInNvdXJjZVJvb3QiOiIifQ==