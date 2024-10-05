"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/become-host/page",{

/***/ "(app-pages-browser)/./app/components/Map.js":
/*!*******************************!*\
  !*** ./app/components/Map.js ***!
  \*******************************/
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Map; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../page.module.css */ \"(app-pages-browser)/./app/page.module.css\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"(app-pages-browser)/./node_modules/next/dist/build/polyfills/process.js\");\n\n\nfunction Map(param) {\n    let { city } = param;\n    const getMapUrl = (cityName)=>{\n        return \"https://www.google.com/maps/embed/v1/place?q=\".concat(encodeURIComponent(city), \"&key=\").concat(process.env.GOOGLE_MAPS_API_KEY);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: _page_module_css__WEBPACK_IMPORTED_MODULE_1__.map,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n            src: getMapUrl(city),\n            width: \"100%\",\n            height: \"100%\",\n            style: {\n                border: 0\n            },\n            allowFullScreen: \"\",\n            loading: \"lazy\",\n            referrerPolicy: \"no-referrer-when-downgrade\"\n        }, void 0, false, {\n            fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/components/Map.js\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/components/Map.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_c = Map;\nvar _c;\n$RefreshReg$(_c, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL01hcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3QztBQUV6QixTQUFTQyxJQUFJLEtBQVE7UUFBUixFQUFFQyxJQUFJLEVBQUUsR0FBUjtJQUMxQixNQUFNQyxZQUFZLENBQUNDO1FBQ2pCLE9BQU8sZ0RBRUVDLE9BRjhDQyxtQkFDckRKLE9BQ0EsU0FBdUMsT0FBaENHLE9BQU9BLENBQUNFLEdBQUcsQ0FBQ0MsbUJBQW1CO0lBQzFDO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVdWLGlEQUFVO2tCQUN4Qiw0RUFBQ1k7WUFDQ0MsS0FBS1YsVUFBVUQ7WUFDZlksT0FBTTtZQUNOQyxRQUFPO1lBQ1BDLE9BQU87Z0JBQUVDLFFBQVE7WUFBRTtZQUNuQkMsaUJBQWdCO1lBQ2hCQyxTQUFRO1lBQ1JDLGdCQUFlOzs7Ozs7Ozs7OztBQUl2QjtLQXBCd0JuQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9NYXAuanM/MDg2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9wYWdlLm1vZHVsZS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFwKHsgY2l0eSB9KSB7XG4gIGNvbnN0IGdldE1hcFVybCA9IChjaXR5TmFtZSkgPT4ge1xuICAgIHJldHVybiBgaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkL3YxL3BsYWNlP3E9JHtlbmNvZGVVUklDb21wb25lbnQoXG4gICAgICBjaXR5XG4gICAgKX0ma2V5PSR7cHJvY2Vzcy5lbnYuR09PR0xFX01BUFNfQVBJX0tFWX1gO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYXB9PlxuICAgICAgPGlmcmFtZVxuICAgICAgICBzcmM9e2dldE1hcFVybChjaXR5KX1cbiAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgIHN0eWxlPXt7IGJvcmRlcjogMCB9fVxuICAgICAgICBhbGxvd0Z1bGxTY3JlZW49XCJcIlxuICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgIHJlZmVycmVyUG9saWN5PVwibm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGVcIlxuICAgICAgPjwvaWZyYW1lPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIk1hcCIsImNpdHkiLCJnZXRNYXBVcmwiLCJjaXR5TmFtZSIsInByb2Nlc3MiLCJlbmNvZGVVUklDb21wb25lbnQiLCJlbnYiLCJHT09HTEVfTUFQU19BUElfS0VZIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiaWZyYW1lIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJzdHlsZSIsImJvcmRlciIsImFsbG93RnVsbFNjcmVlbiIsImxvYWRpbmciLCJyZWZlcnJlclBvbGljeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Map.js\n"));

/***/ })

});