"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/meals/page",{

/***/ "(app-pages-browser)/./app/meals/page.js":
/*!***************************!*\
  !*** ./app/meals/page.js ***!
  \***************************/
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Meals; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Button */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Card */ \"(app-pages-browser)/./node_modules/@mui/material/Card/Card.js\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/CardContent */ \"(app-pages-browser)/./node_modules/@mui/material/CardContent/CardContent.js\");\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Avatar */ \"(app-pages-browser)/./node_modules/@mui/material/Avatar/Avatar.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Typography */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page.module.css */ \"(app-pages-browser)/./app/page.module.css\");\n/* harmony import */ var _barrel_optimize_names_Grid2_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Grid2!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Grid2/Grid2.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n // Make sure you're importing Grid2 correctly\nconst fetchData = async ()=>{\n    const response = await fetch(\"http://127.0.0.1:3001/all-meals\");\n    const data = await response.json();\n    console.log(data);\n    return data;\n};\nfunction Meals() {\n    _s();\n    const [fetchedMeals, setMeals] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleDownload = ()=>{\n        alert(\"nothing\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getData = async ()=>{\n            try {\n                const data = await fetchData();\n                setMeals(data[0]);\n            } catch (error) {\n                console.error(\"Error fetching meals:\", error);\n            }\n        };\n        getData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: _page_module_css__WEBPACK_IMPORTED_MODULE_2__.header,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Meals\"\n                }, void 0, false, {\n                    fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/meals/page.js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/meals/page.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                sx: {\n                    flexGrow: 1,\n                    padding: 2\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid2_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    className: _page_module_css__WEBPACK_IMPORTED_MODULE_2__.grid,\n                    container: true,\n                    spacing: 6,\n                    children: fetchedMeals.length > 0 ? fetchedMeals.map((meal, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid2_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            item: true,\n                            xs: 12,\n                            sm: 6,\n                            md: 3,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                sx: {\n                                    textAlign: \"center\",\n                                    padding: 2\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        variant: \"h6\",\n                                        component: \"div\",\n                                        sx: {\n                                            textAlign: \"center\",\n                                            padding: 2,\n                                            fontWeight: \"bold\"\n                                        },\n                                        children: meal.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/meals/page.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                        alt: meal.title,\n                                        src: meal.image,\n                                        sx: {\n                                            width: 100,\n                                            height: 100,\n                                            margin: \"auto\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/meals/page.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                variant: \"body1\",\n                                                children: [\n                                                    \"Description: \",\n                                                    meal.description\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/meals/page.js\",\n                                                lineNumber: 68,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                variant: \"body1\",\n                                                children: [\n                                                    \"Reservations: \",\n                                                    meal.max_reservations\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/meals/page.js\",\n                                                lineNumber: 71,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                variant: \"h6\",\n                                                color: \"textSecondary\",\n                                                children: [\n                                                    \"Price: \",\n                                                    meal.price\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/meals/page.js\",\n                                                lineNumber: 74,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/meals/page.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/meals/page.js\",\n                                lineNumber: 54,\n                                columnNumber: 17\n                            }, this)\n                        }, index, false, {\n                            fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/meals/page.js\",\n                            lineNumber: 53,\n                            columnNumber: 15\n                        }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        variant: \"h6\",\n                        component: \"div\",\n                        sx: {\n                            textAlign: \"center\",\n                            padding: 2\n                        },\n                        children: \"No meals available.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/meals/page.js\",\n                        lineNumber: 82,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/meals/page.js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/meals/page.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/meals/page.js\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/meals/page.js\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: _page_module_css__WEBPACK_IMPORTED_MODULE_2__.courseButtonContainer,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    className: _page_module_css__WEBPACK_IMPORTED_MODULE_2__.courseButton,\n                    variant: \"contained\",\n                    color: \"primary\",\n                    onClick: handleDownload,\n                    children: \"Download Pdf file with all offers\"\n                }, void 0, false, {\n                    fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/meals/page.js\",\n                    lineNumber: 96,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/meals/page.js\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/meals/page.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_s(Meals, \"54wGcJ5cHNp/A25gZh8qLrCaqSY=\");\n_c = Meals;\nvar _c;\n$RefreshReg$(_c, \"Meals\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9tZWFscy9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFK0I7QUFDYTtBQUNGO0FBQ0o7QUFDQTtBQUNjO0FBQ1Y7QUFDUTtBQUNkO0FBQ0k7QUFDRixDQUFDLDZDQUE2QztBQUVwRixNQUFNWSxZQUFZO0lBQ2hCLE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtJQUM3QixNQUFNQyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7SUFDaENDLFFBQVFDLEdBQUcsQ0FBQ0g7SUFDWixPQUFPQTtBQUNUO0FBRWUsU0FBU0k7O0lBQ3RCLE1BQU0sQ0FBQ0MsY0FBY0MsU0FBUyxHQUFHbkIsK0NBQVFBLENBQUMsRUFBRTtJQUU1QyxNQUFNb0IsaUJBQWlCO1FBQ3JCQyxNQUFNO0lBQ1I7SUFFQXRCLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTXVCLFVBQVU7WUFDZCxJQUFJO2dCQUNGLE1BQU1ULE9BQU8sTUFBTUg7Z0JBQ25CUyxTQUFTTixJQUFJLENBQUMsRUFBRTtZQUNsQixFQUFFLE9BQU9VLE9BQU87Z0JBQ2RSLFFBQVFRLEtBQUssQ0FBQyx5QkFBeUJBO1lBQ3pDO1FBQ0Y7UUFFQUQ7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0U7OzBCQUNDLDhEQUFDQTtnQkFBSUMsV0FBV2pCLG9EQUFhOzBCQUMzQiw0RUFBQ21COzhCQUFHOzs7Ozs7Ozs7OzswQkFJTiw4REFBQ3BCLHlEQUFHQTtnQkFBQ3FCLElBQUk7b0JBQUVDLFVBQVU7b0JBQUdDLFNBQVM7Z0JBQUU7MEJBQ2pDLDRFQUFDckIsaUZBQUtBO29CQUFDZ0IsV0FBV2pCLGtEQUFXO29CQUFFd0IsU0FBUztvQkFBQ0MsU0FBUzs4QkFDL0NmLGFBQWFnQixNQUFNLEdBQUcsSUFDckJoQixhQUFhaUIsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUN0Qiw4REFBQzVCLGlGQUFLQTs0QkFBQzZCLElBQUk7NEJBQUNDLElBQUk7NEJBQUlDLElBQUk7NEJBQUdDLElBQUk7c0NBQzdCLDRFQUFDdEMsMERBQUlBO2dDQUFDeUIsSUFBSTtvQ0FBRWMsV0FBVztvQ0FBVVosU0FBUztnQ0FBRTs7a0RBQzFDLDhEQUFDeEIsZ0VBQVVBO3dDQUNUcUMsU0FBUTt3Q0FDUkMsV0FBVTt3Q0FDVmhCLElBQUk7NENBQUVjLFdBQVc7NENBQVVaLFNBQVM7NENBQUdlLFlBQVk7d0NBQU87a0RBRXpEVCxLQUFLVSxLQUFLOzs7Ozs7a0RBRWIsOERBQUN6Qyw0REFBTUE7d0NBQ0wwQyxLQUFLWCxLQUFLVSxLQUFLO3dDQUNmRSxLQUFLWixLQUFLYSxLQUFLO3dDQUNmckIsSUFBSTs0Q0FBRXNCLE9BQU87NENBQUtDLFFBQVE7NENBQUtDLFFBQVE7d0NBQU87Ozs7OztrREFFaEQsOERBQUNoRCxpRUFBV0E7OzBEQUNWLDhEQUFDRSxnRUFBVUE7Z0RBQUNxQyxTQUFROztvREFBUTtvREFDWlAsS0FBS2lCLFdBQVc7Ozs7Ozs7MERBRWhDLDhEQUFDL0MsZ0VBQVVBO2dEQUFDcUMsU0FBUTs7b0RBQVE7b0RBQ1hQLEtBQUtrQixnQkFBZ0I7Ozs7Ozs7MERBRXRDLDhEQUFDaEQsZ0VBQVVBO2dEQUFDcUMsU0FBUTtnREFBS1ksT0FBTTs7b0RBQWdCO29EQUNyQ25CLEtBQUtvQixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQXRCYW5COzs7O2tEQTZCekMsOERBQUMvQixnRUFBVUE7d0JBQ1RxQyxTQUFRO3dCQUNSQyxXQUFVO3dCQUNWaEIsSUFBSTs0QkFBRWMsV0FBVzs0QkFBVVosU0FBUzt3QkFBRTtrQ0FDdkM7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBT1AsOERBQUMyQjs7Ozs7MEJBQ0QsOERBQUNBOzs7OzswQkFDRCw4REFBQ2pDO2dCQUFJQyxXQUFXakIsbUVBQTRCOzBCQUMxQyw0RUFBQ1AsNERBQU1BO29CQUNMd0IsV0FBV2pCLDBEQUFtQjtvQkFDOUJtQyxTQUFRO29CQUNSWSxPQUFNO29CQUNOSyxTQUFTeEM7OEJBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVQ7R0FyRndCSDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvbWVhbHMvcGFnZS5qcz8wZGQwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9HcmlkXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9DYXJkXCI7XG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ2FyZENvbnRlbnRcIjtcbmltcG9ydCBBdmF0YXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQXZhdGFyXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgQm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0JveFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vcGFnZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBHcmlkMiB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7IC8vIE1ha2Ugc3VyZSB5b3UncmUgaW1wb3J0aW5nIEdyaWQyIGNvcnJlY3RseVxuXG5jb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vMTI3LjAuMC4xOjMwMDEvYWxsLW1lYWxzXCIpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZWFscygpIHtcbiAgY29uc3QgW2ZldGNoZWRNZWFscywgc2V0TWVhbHNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGhhbmRsZURvd25sb2FkID0gKCkgPT4ge1xuICAgIGFsZXJ0KFwibm90aGluZ1wiKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hEYXRhKCk7XG4gICAgICAgIHNldE1lYWxzKGRhdGFbMF0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIG1lYWxzOlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGdldERhdGEoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgPGgxPk1lYWxzPC9oMT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogR3JpZCBmb3IgdGhlIE1lYWxzICovfVxuICAgICAgPEJveCBzeD17eyBmbGV4R3JvdzogMSwgcGFkZGluZzogMiB9fT5cbiAgICAgICAgPEdyaWQyIGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9IGNvbnRhaW5lciBzcGFjaW5nPXs2fT5cbiAgICAgICAgICB7ZmV0Y2hlZE1lYWxzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICBmZXRjaGVkTWVhbHMubWFwKChtZWFsLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8R3JpZDIgaXRlbSB4cz17MTJ9IHNtPXs2fSBtZD17M30ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgPENhcmQgc3g9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBwYWRkaW5nOiAyIH19PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBwYWRkaW5nOiAyLCBmb250V2VpZ2h0OiBcImJvbGRcIiB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7bWVhbC50aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDxBdmF0YXJcbiAgICAgICAgICAgICAgICAgICAgYWx0PXttZWFsLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICBzcmM9e21lYWwuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwLCBtYXJnaW46IFwiYXV0b1wiIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICBEZXNjcmlwdGlvbjoge21lYWwuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgUmVzZXJ2YXRpb25zOiB7bWVhbC5tYXhfcmVzZXJ2YXRpb25zfVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgIFByaWNlOiB7bWVhbC5wcmljZX1cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgIDwvR3JpZDI+XG4gICAgICAgICAgICApKVxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgICBzeD17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIHBhZGRpbmc6IDIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTm8gbWVhbHMgYXZhaWxhYmxlLlxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvR3JpZDI+XG4gICAgICA8L0JveD5cblxuICAgICAgPGJyIC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY291cnNlQnV0dG9uQ29udGFpbmVyfT5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvdXJzZUJ1dHRvbn1cbiAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURvd25sb2FkfVxuICAgICAgICA+XG4gICAgICAgICAgRG93bmxvYWQgUGRmIGZpbGUgd2l0aCBhbGwgb2ZmZXJzXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkdyaWQiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJBdmF0YXIiLCJUeXBvZ3JhcGh5IiwiQm94Iiwic3R5bGVzIiwiR3JpZDIiLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiTWVhbHMiLCJmZXRjaGVkTWVhbHMiLCJzZXRNZWFscyIsImhhbmRsZURvd25sb2FkIiwiYWxlcnQiLCJnZXREYXRhIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJoMSIsInN4IiwiZmxleEdyb3ciLCJwYWRkaW5nIiwiZ3JpZCIsImNvbnRhaW5lciIsInNwYWNpbmciLCJsZW5ndGgiLCJtYXAiLCJtZWFsIiwiaW5kZXgiLCJpdGVtIiwieHMiLCJzbSIsIm1kIiwidGV4dEFsaWduIiwidmFyaWFudCIsImNvbXBvbmVudCIsImZvbnRXZWlnaHQiLCJ0aXRsZSIsImFsdCIsInNyYyIsImltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJkZXNjcmlwdGlvbiIsIm1heF9yZXNlcnZhdGlvbnMiLCJjb2xvciIsInByaWNlIiwiYnIiLCJjb3Vyc2VCdXR0b25Db250YWluZXIiLCJjb3Vyc2VCdXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/meals/page.js\n"));

/***/ })

});