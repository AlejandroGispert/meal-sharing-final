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

/***/ "(app-pages-browser)/./app/become-host/page.js":
/*!*********************************!*\
  !*** ./app/become-host/page.js ***!
  \*********************************/
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BecomeHost; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"(app-pages-browser)/./node_modules/next/dist/client/components/noop-head.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Container */ \"(app-pages-browser)/./node_modules/@mui/material/Container/Container.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Box */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Typography */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/TextField */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Button */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Map */ \"(app-pages-browser)/./app/components/Map.js\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../page.module.css */ \"(app-pages-browser)/./app/page.module.css\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/script */ \"(app-pages-browser)/./node_modules/next/dist/api/script.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n // Assuming you have a Map component\n\n\nfunction BecomeHost() {\n    _s();\n    const [city, setCity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"K\\xf8benhavn\");\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        phone: \"\",\n        address: \"\",\n        password: \"\",\n        details: \"\"\n    });\n    async function handleSubmit() {\n        alert(\"Form submitted successfully!\");\n        alert(\"You can login now\");\n        try {\n            const response = await fetch(\"/hosts\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(formData)\n            });\n            if (response.ok) {\n                alert(\"Form submitted successfully! You can now login.\");\n            } else {\n                const errorData = await response.json();\n                alert(\"Error: \" + errorData.error || 0);\n            }\n        } catch (error) {\n            console.error(\"Error during submission:\", error);\n            alert(\"Failed to submit the form. Please try again.\");\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: _page_module_css__WEBPACK_IMPORTED_MODULE_5__.container,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_head__WEBPACK_IMPORTED_MODULE_2__, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Become a Host\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/become-host/page.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"How to become a host\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/become-host/page.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        charSet: \"UTF-8\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/become-host/page.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/become-host/page.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    maxWidth: \"lg\",\n                    className: _page_module_css__WEBPACK_IMPORTED_MODULE_5__.becomeHostSection,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Map__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            city: city\n                        }, void 0, false, {\n                            fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/become-host/page.js\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            sx: {\n                                width: \"500px\",\n                                padding: 3,\n                                backgroundColor: \"#f5f5f5\",\n                                borderRadius: \"8px\",\n                                boxShadow: 3,\n                                position: \"absolute\",\n                                top: \"40px\",\n                                right: \"2px\",\n                                margin: \"2px\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                    variant: \"h4\",\n                                    gutterBottom: true,\n                                    children: \"Become a Host\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/become-host/page.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                            label: \"Full Name*\",\n                                            variant: \"outlined\",\n                                            fullWidth: true,\n                                            margin: \"normal\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/become-host/page.js\",\n                                            lineNumber: 86,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                            label: \"Email*\",\n                                            variant: \"outlined\",\n                                            fullWidth: true,\n                                            margin: \"normal\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/become-host/page.js\",\n                                            lineNumber: 92,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                            label: \"Password*\",\n                                            variant: \"outlined\",\n                                            fullWidth: true,\n                                            margin: \"normal\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/become-host/page.js\",\n                                            lineNumber: 98,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                            label: \"Phone Number\",\n                                            variant: \"outlined\",\n                                            fullWidth: true,\n                                            margin: \"normal\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/become-host/page.js\",\n                                            lineNumber: 104,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                            label: \"City\",\n                                            variant: \"outlined\",\n                                            fullWidth: true,\n                                            margin: \"normal\",\n                                            onChange: ()=>setCity(target.value)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/become-host/page.js\",\n                                            lineNumber: 110,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                            label: \"Meal Details\",\n                                            variant: \"outlined\",\n                                            multiline: true,\n                                            rows: 4,\n                                            fullWidth: true,\n                                            margin: \"normal\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/become-host/page.js\",\n                                            lineNumber: 117,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                            type: \"submit\",\n                                            variant: \"contained\",\n                                            color: \"primary\",\n                                            fullWidth: true,\n                                            sx: {\n                                                mt: 2\n                                            },\n                                            onClick: handleSubmit,\n                                            children: \"Submit\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/become-host/page.js\",\n                                            lineNumber: 125,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/become-host/page.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/become-host/page.js\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/become-host/page.js\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/become-host/page.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/become-host/page.js\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n}\n_s(BecomeHost, \"e1je2NJ26GAaVA04rx0t/BMAknU=\");\n_c = BecomeHost;\nvar _c;\n$RefreshReg$(_c, \"BecomeHost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9iZWNvbWUtaG9zdC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUMrQjtBQUNGO0FBQ0k7QUFDRjtBQUNpQjtBQUNaO0FBQ2M7QUFDWjtBQUNVO0FBQ047QUFDTixDQUFDLG9DQUFvQztBQUNqQztBQUNhO0FBRXRDLFNBQVNhOztJQUN0QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR2IsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDYyxVQUFVQyxZQUFZLEdBQUdmLCtDQUFRQSxDQUFDO1FBQ3ZDZ0IsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsU0FBUztRQUNUQyxVQUFVO1FBQ1ZDLFNBQVM7SUFDWDtJQUVBLGVBQWVDO1FBQ2JDLE1BQU07UUFDTkEsTUFBTTtRQUVOLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU0sVUFBVTtnQkFDckNDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDaEI7WUFDdkI7WUFFQSxJQUFJVSxTQUFTTyxFQUFFLEVBQUU7Z0JBQ2ZSLE1BQU07WUFDUixPQUFPO2dCQUNMLE1BQU1TLFlBQVksTUFBTVIsU0FBU1MsSUFBSTtnQkFDckNWLE1BQU0sWUFBWVMsVUFBVUUsS0FBSyxJQUFJLENBQTRCO1lBQ25FO1FBQ0YsRUFBRSxPQUFPQSxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyw0QkFBNEJBO1lBQzFDWCxNQUFNO1FBQ1I7SUFDRjtJQUVBLHFCQUNFLDhEQUFDYTtRQUFJQyxXQUFXNUIsdURBQWdCOzswQkFDOUIsOERBQUNWLHNDQUFJQTs7a0NBQ0gsOERBQUN3QztrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS3hCLE1BQUs7d0JBQWN5QixTQUFROzs7Ozs7a0NBQ2pDLDhEQUFDRDt3QkFBS0UsU0FBUTs7Ozs7Ozs7Ozs7OzBCQUdoQiw4REFBQ0M7MEJBQ0MsNEVBQUN6QywrREFBU0E7b0JBQUMwQyxVQUFTO29CQUFLUCxXQUFXNUIsK0RBQXdCOztzQ0FHMUQsOERBQUNELHVEQUFHQTs0QkFBQ0ksTUFBTUE7Ozs7OztzQ0FJWCw4REFBQ1QseURBQUdBOzRCQUNGMkMsSUFBSTtnQ0FDRkMsT0FBTztnQ0FDUEMsU0FBUztnQ0FDVEMsaUJBQWlCO2dDQUNqQkMsY0FBYztnQ0FDZEMsV0FBVztnQ0FDWEMsVUFBVTtnQ0FDVkMsS0FBSztnQ0FDTEMsT0FBTztnQ0FDUEMsUUFBUTs0QkFDVjs7OENBRUEsOERBQUNuRCxnRUFBVUE7b0NBQUNvRCxTQUFRO29DQUFLQyxZQUFZOzhDQUFDOzs7Ozs7OENBSXRDLDhEQUFDQzs7c0RBQ0MsOERBQUNwRCxnRUFBU0E7NENBQ1JxRCxPQUFNOzRDQUNOSCxTQUFROzRDQUNSSSxTQUFTOzRDQUNUTCxRQUFPOzs7Ozs7c0RBRVQsOERBQUNqRCxnRUFBU0E7NENBQ1JxRCxPQUFNOzRDQUNOSCxTQUFROzRDQUNSSSxTQUFTOzRDQUNUTCxRQUFPOzs7Ozs7c0RBRVQsOERBQUNqRCxnRUFBU0E7NENBQ1JxRCxPQUFNOzRDQUNOSCxTQUFROzRDQUNSSSxTQUFTOzRDQUNUTCxRQUFPOzs7Ozs7c0RBRVQsOERBQUNqRCxnRUFBU0E7NENBQ1JxRCxPQUFNOzRDQUNOSCxTQUFROzRDQUNSSSxTQUFTOzRDQUNUTCxRQUFPOzs7Ozs7c0RBRVQsOERBQUNqRCxnRUFBU0E7NENBQ1JxRCxPQUFNOzRDQUNOSCxTQUFROzRDQUNSSSxTQUFTOzRDQUNUTCxRQUFPOzRDQUNQTSxVQUFVLElBQU1oRCxRQUFRaUQsT0FBT0MsS0FBSzs7Ozs7O3NEQUV0Qyw4REFBQ3pELGdFQUFTQTs0Q0FDUnFELE9BQU07NENBQ05ILFNBQVE7NENBQ1JRLFNBQVM7NENBQ1RDLE1BQU07NENBQ05MLFNBQVM7NENBQ1RMLFFBQU87Ozs7OztzREFFVCw4REFBQ2hELDZEQUFNQTs0Q0FDTDJELE1BQUs7NENBQ0xWLFNBQVE7NENBQ1JXLE9BQU07NENBQ05QLFNBQVM7NENBQ1RkLElBQUk7Z0RBQUVzQixJQUFJOzRDQUFFOzRDQUNaQyxTQUFTL0M7c0RBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2Y7R0E3SHdCWDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvYmVjb21lLWhvc3QvcGFnZS5qcz84OTk4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAbXVpL21hdGVyaWFsL0NvbnRhaW5lclwiO1xuaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcbmltcG9ydCB7IEdyaWQyIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuaW1wb3J0IE1hcCBmcm9tIFwiLi4vY29tcG9uZW50cy9NYXBcIjsgLy8gQXNzdW1pbmcgeW91IGhhdmUgYSBNYXAgY29tcG9uZW50XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9wYWdlLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IGhhbmRsZUNsaWVudFNjcmlwdExvYWQgfSBmcm9tIFwibmV4dC9zY3JpcHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmVjb21lSG9zdCgpIHtcbiAgY29uc3QgW2NpdHksIHNldENpdHldID0gdXNlU3RhdGUoXCJLw7hiZW5oYXZuXCIpO1xuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIGVtYWlsOiBcIlwiLFxuICAgIHBob25lOiBcIlwiLFxuICAgIGFkZHJlc3M6IFwiXCIsXG4gICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgZGV0YWlsczogXCJcIixcbiAgfSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KCkge1xuICAgIGFsZXJ0KFwiRm9ybSBzdWJtaXR0ZWQgc3VjY2Vzc2Z1bGx5IVwiKTtcbiAgICBhbGVydChcIllvdSBjYW4gbG9naW4gbm93XCIpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvaG9zdHNcIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKSxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgYWxlcnQoXCJGb3JtIHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHkhIFlvdSBjYW4gbm93IGxvZ2luLlwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGVycm9yRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgYWxlcnQoXCJFcnJvcjogXCIgKyBlcnJvckRhdGEuZXJyb3IgfHwgXCJGYWlsZWQgdG8gc3VibWl0IHRoZSBmb3JtLlwiKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGR1cmluZyBzdWJtaXNzaW9uOlwiLCBlcnJvcik7XG4gICAgICBhbGVydChcIkZhaWxlZCB0byBzdWJtaXQgdGhlIGZvcm0uIFBsZWFzZSB0cnkgYWdhaW4uXCIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5CZWNvbWUgYSBIb3N0PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkhvdyB0byBiZWNvbWUgYSBob3N0XCIgLz5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4+XG4gICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiIGNsYXNzTmFtZT17c3R5bGVzLmJlY29tZUhvc3RTZWN0aW9ufT5cbiAgICAgICAgICB7LyogTWFwIFNlY3Rpb24gKi99XG5cbiAgICAgICAgICA8TWFwIGNpdHk9e2NpdHl9IC8+XG5cbiAgICAgICAgICB7LyogQmVjb21lIGEgSG9zdCBGb3JtIFNlY3Rpb24gKi99XG5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICB3aWR0aDogXCI1MDBweFwiLFxuICAgICAgICAgICAgICBwYWRkaW5nOiAzLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y1ZjVmNVwiLFxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiOHB4XCIsXG4gICAgICAgICAgICAgIGJveFNoYWRvdzogMyxcbiAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgdG9wOiBcIjQwcHhcIixcbiAgICAgICAgICAgICAgcmlnaHQ6IFwiMnB4XCIsXG4gICAgICAgICAgICAgIG1hcmdpbjogXCIycHhcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgICAgICBCZWNvbWUgYSBIb3N0XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJGdWxsIE5hbWUqXCJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsKlwiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZCpcIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiUGhvbmUgTnVtYmVyXCJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkNpdHlcIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0Q2l0eSh0YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJNZWFsIERldGFpbHNcIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgbXVsdGlsaW5lXG4gICAgICAgICAgICAgICAgcm93cz17NH1cbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICBzeD17eyBtdDogMiB9fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlUmVmIiwiSGVhZCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJDb250YWluZXIiLCJCb3giLCJUeXBvZ3JhcGh5IiwiR3JpZDIiLCJUZXh0RmllbGQiLCJCdXR0b24iLCJNYXAiLCJzdHlsZXMiLCJoYW5kbGVDbGllbnRTY3JpcHRMb2FkIiwiQmVjb21lSG9zdCIsImNpdHkiLCJzZXRDaXR5IiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsIm5hbWUiLCJlbWFpbCIsInBob25lIiwiYWRkcmVzcyIsInBhc3N3b3JkIiwiZGV0YWlscyIsImhhbmRsZVN1Ym1pdCIsImFsZXJ0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwiZXJyb3JEYXRhIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInRpdGxlIiwibWV0YSIsImNvbnRlbnQiLCJjaGFyU2V0IiwibWFpbiIsIm1heFdpZHRoIiwiYmVjb21lSG9zdFNlY3Rpb24iLCJzeCIsIndpZHRoIiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJtYXJnaW4iLCJ2YXJpYW50IiwiZ3V0dGVyQm90dG9tIiwiZm9ybSIsImxhYmVsIiwiZnVsbFdpZHRoIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm11bHRpbGluZSIsInJvd3MiLCJ0eXBlIiwiY29sb3IiLCJtdCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/become-host/page.js\n"));

/***/ })

});