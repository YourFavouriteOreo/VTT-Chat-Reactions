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
    const test = element[0];
    const p = document.createElement("p");
    p.textContent = "Hello, World!";
    test === null || test === void 0 ? void 0 : test.appendChild(p);
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
/******/ 	__webpack_require__.h = () => ("fc522bbcaf334f31f596")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbGFjZWhvbGRlci8uL3NyYy9jaGF0cmVhY3Rpb25zLnRzIiwid2VicGFjazovL3BsYWNlaG9sZGVyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFzRTtBQUV0RSxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLElBQUksRUFBRTtJQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLDhEQUE4RCxDQUFDO0FBQy9FLENBQUMsQ0FBQyxDQUFDO0FBRUgsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUU7SUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQztBQUN4QyxDQUFDLENBQUMsQ0FBQztBQUVILEtBQUssQ0FBQyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBQyxPQUFPLEVBQUUsRUFBRTtJQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztJQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QixNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLE1BQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxlQUFlLENBQUM7SUFDaEMsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7QUFDeEIsQ0FBQyxDQUFDLENBQUM7QUFHSCxJQUFJLElBQXNDLEVBQUU7SUFDeEMsSUFBSSxJQUFVLEVBQUU7UUFDWixpQkFBaUIsRUFBRSxDQUFDO1FBRXBCLElBQUksVUFBVSxDQUFDLE1BQU0sRUFBRSxLQUFLLE9BQU8sRUFBRTtZQUNqQyxLQUFLLE1BQU0sUUFBUSxJQUFJLGNBQWMsRUFBRTtnQkFDbkMsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLFFBQVEsQ0FBQyxFQUFFO29CQUNoRSxPQUFPLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDbkM7YUFDSjtZQUVELDBHQUE0QyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDckQsS0FBSyxNQUFNLFdBQVcsSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFO29CQUNsQyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxFQUFFO3dCQUMvRCxFQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDeEM7aUJBQ0o7WUFDTCxDQUFDLENBQUMsQ0FBQztTQUNOO0tBQ0o7Q0FDSjs7Ozs7Ozs7Ozs7VUN4Q0Qsc0QiLCJmaWxlIjoibWFpbi44Y2VlZWUxZTM5NjA4MDQwNWNkYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVtcGxhdGVQcmVsb2FkZXIgfSBmcm9tIFwiLi9tb2R1bGUvaGVscGVyL1RlbXBsYXRlUHJlbG9hZGVyXCI7XHJcblxyXG5Ib29rcy5vbmNlKFwiaW5pdFwiLCBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIj09PT09PT09PT09PT09PT09PT09PT09PT09PT09SE1SPT09PT09PT09PT09PT09PT09PT09PT09PT09PVwiKVxyXG59KTtcclxuXHJcbkhvb2tzLm9uY2UoXCJyZWFkeVwiLCBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImxvYWRlZGQgY2hhdHJlYWN0aW9uc1wiKVxyXG59KTtcclxuXHJcbkhvb2tzLm9uKFwicmVuZGVyQ2hhdE1lc3NhZ2VcIiwgYXN5bmMgKG1lc3NhZ2UsZWxlbWVudCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cobWVzc2FnZSlcclxuICAgIGNvbnNvbGUubG9nKGVsZW1lbnRbMF0pXHJcbiAgICBjb25zdCB0ZXN0ID0gZWxlbWVudFswXVxyXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcC50ZXh0Q29udGVudCA9IFwiSGVsbG8sIFdvcmxkIVwiO1xyXG4gICAgdGVzdD8uYXBwZW5kQ2hpbGQocClcclxufSk7XHJcblxyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcclxuICAgIGlmIChtb2R1bGUuaG90KSB7XHJcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcclxuXHJcbiAgICAgICAgaWYgKG1vZHVsZS5ob3Quc3RhdHVzKCkgPT09IFwiYXBwbHlcIikge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRlbXBsYXRlIGluIF90ZW1wbGF0ZUNhY2hlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF90ZW1wbGF0ZUNhY2hlLCB0ZW1wbGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgX3RlbXBsYXRlQ2FjaGVbdGVtcGxhdGVdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBUZW1wbGF0ZVByZWxvYWRlci5wcmVsb2FkSGFuZGxlYmFyc1RlbXBsYXRlcygpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBhcHBsaWNhdGlvbiBpbiB1aS53aW5kb3dzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh1aS53aW5kb3dzLCBhcHBsaWNhdGlvbikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdWkud2luZG93c1thcHBsaWNhdGlvbl0ucmVuZGVyKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZmM1MjJiYmNhZjMzNGYzMWY1OTZcIikiXSwic291cmNlUm9vdCI6IiJ9