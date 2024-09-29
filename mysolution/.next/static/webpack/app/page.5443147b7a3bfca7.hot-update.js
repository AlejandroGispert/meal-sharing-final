"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Box */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _components_AnimatedText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/AnimatedText */ \"(app-pages-browser)/./app/components/AnimatedText.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Button */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./app/page.module.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null); // Reference to the video element\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    //button\n    const handleClick = ()=>{\n        alert(\"Button clicked!\");\n    };\n    // useEffect to apply fade out when video ends\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const video = videoRef.current;\n        const handleVideoEnd = ()=>{\n            // Add fade-out class\n            video.classList.add(_page_module_css__WEBPACK_IMPORTED_MODULE_4__.fadeOut);\n            // After the fade-out effect, restart the video\n            setTimeout(()=>{\n                video.classList.remove(_page_module_css__WEBPACK_IMPORTED_MODULE_4__.fadeOut);\n                video.currentTime = 0; // Reset video to start\n                video.play(); // Play again\n            }, 500); // Match the fade-out duration\n        };\n        // Event listener for video end\n        video.addEventListener(\"ended\", handleVideoEnd);\n        // Cleanup the event listener on component unmount\n        return ()=>{\n            video.removeEventListener(\"ended\", handleVideoEnd);\n        };\n    }, []);\n    const handleChange = (event)=>{\n        setInputValue(event.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: _page_module_css__WEBPACK_IMPORTED_MODULE_4__.container,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: _page_module_css__WEBPACK_IMPORTED_MODULE_4__.videoWrapper,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                    ref: videoRef,\n                    className: _page_module_css__WEBPACK_IMPORTED_MODULE_4__.backgroundVideo,\n                    autoPlay: true,\n                    muted: true,\n                    playsInline: true,\n                    title: \"Promo video of Salsa Casino Dans school\",\n                    \"aria-label\": \"Promo video of Salsa Casino Dans school\",\n                    poster: \"/images/thumbnail.png\" // Optimized thumbnail image\n                    ,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                            src: \"/videos/promo-short.mp4\",\n                            type: \"video/mp4\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/page.js\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                            src: \"/videos/promo-short.webm\",\n                            type: \"video/webm\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/page.js\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, this),\n                        \" \",\n                        \"Your browser does not support the video tag.\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/page.js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/page.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                className: _page_module_css__WEBPACK_IMPORTED_MODULE_4__.content,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        style: {\n                            fontFamily: \"Salsa, sans-serif\"\n                        },\n                        children: \"Welcome to\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/page.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AnimatedText__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/page.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        variant: \"contained\",\n                        color: \"primary\",\n                        onClick: handleClick,\n                        children: \"Get Started\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/page.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/page.js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                className: _page_module_css__WEBPACK_IMPORTED_MODULE_4__.transcript,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Video Transcript\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/page.js\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"This video showcases the Salsa Casino Dans school, highlighting various dance moves, lessons, and student performances. Learn more about our classes and events at Salsa Casino Dans.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/page.js\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/page.js\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/page.js\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"RrOpIfp0Ru9xWBxMEInQiXUJ0Yk=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDK0I7QUFDcUI7QUFDVjtBQUNFO0FBQ007QUFDQTtBQUNGO0FBQ1o7QUFDTDtBQUNzQjtBQUNMO0FBQ047QUFDSDtBQUV4QixTQUFTZTs7SUFDdEIsTUFBTUMsV0FBV2QsNkNBQU1BLENBQUMsT0FBTyxpQ0FBaUM7SUFDaEUsTUFBTSxDQUFDZSxZQUFZQyxjQUFjLEdBQUdmLCtDQUFRQSxDQUFDO0lBRTdDLFFBQVE7SUFDUixNQUFNZ0IsY0FBYztRQUNsQkMsTUFBTTtJQUNSO0lBQ0EsOENBQThDO0lBQzlDbkIsZ0RBQVNBLENBQUM7UUFDUixNQUFNb0IsUUFBUUwsU0FBU00sT0FBTztRQUU5QixNQUFNQyxpQkFBaUI7WUFDckIscUJBQXFCO1lBQ3JCRixNQUFNRyxTQUFTLENBQUNDLEdBQUcsQ0FBQ1gscURBQWM7WUFFbEMsK0NBQStDO1lBQy9DYSxXQUFXO2dCQUNUTixNQUFNRyxTQUFTLENBQUNJLE1BQU0sQ0FBQ2QscURBQWM7Z0JBQ3JDTyxNQUFNUSxXQUFXLEdBQUcsR0FBRyx1QkFBdUI7Z0JBQzlDUixNQUFNUyxJQUFJLElBQUksYUFBYTtZQUM3QixHQUFHLE1BQU0sOEJBQThCO1FBQ3pDO1FBRUEsK0JBQStCO1FBQy9CVCxNQUFNVSxnQkFBZ0IsQ0FBQyxTQUFTUjtRQUVoQyxrREFBa0Q7UUFDbEQsT0FBTztZQUNMRixNQUFNVyxtQkFBbUIsQ0FBQyxTQUFTVDtRQUNyQztJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1VLGVBQWUsQ0FBQ0M7UUFDcEJoQixjQUFjZ0IsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQ2xDO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVd4Qix1REFBZ0I7OzBCQUU5Qiw4REFBQ3VCO2dCQUFJQyxXQUFXeEIsMERBQW1COzBCQUNqQyw0RUFBQ087b0JBQ0NvQixLQUFLekI7b0JBQ0xzQixXQUFXeEIsNkRBQXNCO29CQUNqQzZCLFFBQVE7b0JBQ1JDLEtBQUs7b0JBQ0xDLFdBQVc7b0JBQ1hDLE9BQU07b0JBQ05DLGNBQVc7b0JBQ1hDLFFBQU8sd0JBQXdCLDRCQUE0Qjs7O3NDQUUzRCw4REFBQ0M7NEJBQU9DLEtBQUk7NEJBQTBCQyxNQUFLOzs7Ozs7c0NBQzNDLDhEQUFDRjs0QkFBT0MsS0FBSTs0QkFBMkJDLE1BQUs7Ozs7Ozt3QkFBZ0I7d0JBQ3JDOzs7Ozs7Ozs7Ozs7MEJBTTNCLDhEQUFDMUMseURBQUdBO2dCQUFDNkIsV0FBV3hCLHFEQUFjOztrQ0FDNUIsOERBQUN1Qzt3QkFBR0MsT0FBTzs0QkFBRUMsWUFBWTt3QkFBb0I7a0NBQUc7Ozs7OztrQ0FDaEQsOERBQUM1QyxnRUFBWUE7Ozs7O2tDQVNiLDhEQUFDRSw0REFBTUE7d0JBQUMyQyxTQUFRO3dCQUFZQyxPQUFNO3dCQUFVQyxTQUFTdkM7a0NBQWE7Ozs7Ozs7Ozs7OzswQkFLcEUsOERBQUNWLHlEQUFHQTtnQkFBQzZCLFdBQVd4Qix3REFBaUI7O2tDQUMvQiw4REFBQzhDO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNDO2tDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRWDtHQXJGd0I5QztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qcz9iZTY3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBcHBCYXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQXBwQmFyXCI7XG5pbXBvcnQgVG9vbGJhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9Ub29sYmFyXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uXCI7XG5pbXBvcnQgTWVudUljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvTWVudVwiO1xuaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IEFuaW1hdGVkVGV4dCBmcm9tIFwiLi9jb21wb25lbnRzL0FuaW1hdGVkVGV4dFwiO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9UZXh0RmllbGRcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3BhZ2UubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB2aWRlb1JlZiA9IHVzZVJlZihudWxsKTsgLy8gUmVmZXJlbmNlIHRvIHRoZSB2aWRlbyBlbGVtZW50XG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIC8vYnV0dG9uXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIGFsZXJ0KFwiQnV0dG9uIGNsaWNrZWQhXCIpO1xuICB9O1xuICAvLyB1c2VFZmZlY3QgdG8gYXBwbHkgZmFkZSBvdXQgd2hlbiB2aWRlbyBlbmRzXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdmlkZW8gPSB2aWRlb1JlZi5jdXJyZW50O1xuXG4gICAgY29uc3QgaGFuZGxlVmlkZW9FbmQgPSAoKSA9PiB7XG4gICAgICAvLyBBZGQgZmFkZS1vdXQgY2xhc3NcbiAgICAgIHZpZGVvLmNsYXNzTGlzdC5hZGQoc3R5bGVzLmZhZGVPdXQpO1xuXG4gICAgICAvLyBBZnRlciB0aGUgZmFkZS1vdXQgZWZmZWN0LCByZXN0YXJ0IHRoZSB2aWRlb1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHZpZGVvLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLmZhZGVPdXQpO1xuICAgICAgICB2aWRlby5jdXJyZW50VGltZSA9IDA7IC8vIFJlc2V0IHZpZGVvIHRvIHN0YXJ0XG4gICAgICAgIHZpZGVvLnBsYXkoKTsgLy8gUGxheSBhZ2FpblxuICAgICAgfSwgNTAwKTsgLy8gTWF0Y2ggdGhlIGZhZGUtb3V0IGR1cmF0aW9uXG4gICAgfTtcblxuICAgIC8vIEV2ZW50IGxpc3RlbmVyIGZvciB2aWRlbyBlbmRcbiAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKFwiZW5kZWRcIiwgaGFuZGxlVmlkZW9FbmQpO1xuXG4gICAgLy8gQ2xlYW51cCB0aGUgZXZlbnQgbGlzdGVuZXIgb24gY29tcG9uZW50IHVubW91bnRcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgdmlkZW8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImVuZGVkXCIsIGhhbmRsZVZpZGVvRW5kKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0SW5wdXRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgey8qIEJhY2tncm91bmQgVmlkZW8gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpZGVvV3JhcHBlcn0+XG4gICAgICAgIDx2aWRlb1xuICAgICAgICAgIHJlZj17dmlkZW9SZWZ9XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYmFja2dyb3VuZFZpZGVvfVxuICAgICAgICAgIGF1dG9QbGF5XG4gICAgICAgICAgbXV0ZWRcbiAgICAgICAgICBwbGF5c0lubGluZVxuICAgICAgICAgIHRpdGxlPVwiUHJvbW8gdmlkZW8gb2YgU2Fsc2EgQ2FzaW5vIERhbnMgc2Nob29sXCJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiUHJvbW8gdmlkZW8gb2YgU2Fsc2EgQ2FzaW5vIERhbnMgc2Nob29sXCJcbiAgICAgICAgICBwb3N0ZXI9XCIvaW1hZ2VzL3RodW1ibmFpbC5wbmdcIiAvLyBPcHRpbWl6ZWQgdGh1bWJuYWlsIGltYWdlXG4gICAgICAgID5cbiAgICAgICAgICA8c291cmNlIHNyYz1cIi92aWRlb3MvcHJvbW8tc2hvcnQubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiIC8+XG4gICAgICAgICAgPHNvdXJjZSBzcmM9XCIvdmlkZW9zL3Byb21vLXNob3J0LndlYm1cIiB0eXBlPVwidmlkZW8vd2VibVwiIC8+e1wiIFwifVxuICAgICAgICAgIHsvKiBGYWxsYmFjayBmb3JtYXQgKi99XG4gICAgICAgICAgWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlIHZpZGVvIHRhZy5cbiAgICAgICAgPC92aWRlbz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogTWFpbiBDb250ZW50ICovfVxuICAgICAgPEJveCBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgPGgxIHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiU2Fsc2EsIHNhbnMtc2VyaWZcIiB9fT5XZWxjb21lIHRvPC9oMT5cbiAgICAgICAgPEFuaW1hdGVkVGV4dCAvPlxuICAgICAgICB7LyogPFRleHRGaWVsZFxuICAgICAgICAgIGxhYmVsPVwiRW50ZXIgeW91ciB0ZXh0XCJcbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgID5cbiAgICAgICAgICA8cD5Zb3VyIGlucHV0e2lucHV0VmFsdWV9PC9wPlxuICAgICAgICA8L1RleHRGaWVsZD4gKi99XG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAgICBHZXQgU3RhcnRlZFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8Qm94IGNsYXNzTmFtZT17c3R5bGVzLnRyYW5zY3JpcHR9PlxuICAgICAgICA8aDI+VmlkZW8gVHJhbnNjcmlwdDwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFRoaXMgdmlkZW8gc2hvd2Nhc2VzIHRoZSBTYWxzYSBDYXNpbm8gRGFucyBzY2hvb2wsIGhpZ2hsaWdodGluZ1xuICAgICAgICAgIHZhcmlvdXMgZGFuY2UgbW92ZXMsIGxlc3NvbnMsIGFuZCBzdHVkZW50IHBlcmZvcm1hbmNlcy4gTGVhcm4gbW9yZVxuICAgICAgICAgIGFib3V0IG91ciBjbGFzc2VzIGFuZCBldmVudHMgYXQgU2Fsc2EgQ2FzaW5vIERhbnMuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvQm94PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJBcHBCYXIiLCJUb29sYmFyIiwiVHlwb2dyYXBoeSIsIkljb25CdXR0b24iLCJNZW51SWNvbiIsIkJveCIsIkltYWdlIiwiQW5pbWF0ZWRUZXh0IiwiVGV4dEZpZWxkIiwiQnV0dG9uIiwic3R5bGVzIiwiSG9tZSIsInZpZGVvUmVmIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJoYW5kbGVDbGljayIsImFsZXJ0IiwidmlkZW8iLCJjdXJyZW50IiwiaGFuZGxlVmlkZW9FbmQiLCJjbGFzc0xpc3QiLCJhZGQiLCJmYWRlT3V0Iiwic2V0VGltZW91dCIsInJlbW92ZSIsImN1cnJlbnRUaW1lIiwicGxheSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInZpZGVvV3JhcHBlciIsInJlZiIsImJhY2tncm91bmRWaWRlbyIsImF1dG9QbGF5IiwibXV0ZWQiLCJwbGF5c0lubGluZSIsInRpdGxlIiwiYXJpYS1sYWJlbCIsInBvc3RlciIsInNvdXJjZSIsInNyYyIsInR5cGUiLCJjb250ZW50IiwiaDEiLCJzdHlsZSIsImZvbnRGYW1pbHkiLCJ2YXJpYW50IiwiY29sb3IiLCJvbkNsaWNrIiwidHJhbnNjcmlwdCIsImgyIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});