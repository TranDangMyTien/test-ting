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

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _page_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page.css */ \"(app-pages-browser)/./src/app/page.css\");\n/* harmony import */ var _utils_APIs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/APIs */ \"(app-pages-browser)/./src/app/utils/APIs.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Page = ()=>{\n    _s();\n    const [kols, setKols] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [pageIndex, setPageIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [nextPageAvailable, setNextPageAvailable] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [previousPageAvailable, setPreviousPageAvailable] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const loadKols = async ()=>{\n        const url = \"\".concat(_utils_APIs__WEBPACK_IMPORTED_MODULE_3__.endpoints[\"kols\"], \"?pageIndex=\").concat(pageIndex);\n        try {\n            setLoading(true);\n            setKols([]); // Xóa dữ liệu hiện tại để tránh hiển thị dữ liệu cũ\n            const res = await _utils_APIs__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(url);\n            console.log(\"API Response:\", res.data); // Kiểm tra phản hồi API\n            if (res.data.result === \"Success\") {\n                // Kiểm tra xem KolInformation có tồn tại và không phải là null\n                if (res.data.KolInformation) {\n                    setKols(res.data.KolInformation);\n                    setNextPageAvailable(res.data.nextPageAvailable);\n                    setPreviousPageAvailable(res.data.previousPageAvailable);\n                    // Nếu không có dữ liệu và không có trang tiếp theo, điều chỉnh pageIndex\n                    if (res.data.KolInformation.length === 0 && !res.data.nextPageAvailable) {\n                        if (pageIndex > 1) {\n                            setPageIndex(pageIndex - 1);\n                        }\n                    }\n                } else {\n                    console.warn(\"KolInformation is null or undefined.\");\n                }\n            } else {\n                console.error(\"Error:\", res.data.errorMessage);\n            }\n        } catch (ex) {\n            console.error(\"API error:\", ex);\n        } finally{\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (pageIndex > 0) {\n            loadKols();\n        }\n    }, [\n        pageIndex\n    ]);\n    const scrollUp = ()=>{\n        console.log(\"Scroll Up clicked\");\n        if (previousPageAvailable && pageIndex > 1) {\n            setPageIndex((prevPageIndex)=>prevPageIndex - 1);\n        }\n    };\n    const scrollDown = ()=>{\n        if (nextPageAvailable) {\n            setPageIndex(pageIndex + 1);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"header\",\n                children: \"KOLs List\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Test_Intern\\\\test-ting\\\\FE\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, undefined),\n            kols.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"kols-container\",\n                children: kols.map((kol)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"kol-item\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"kol-code\",\n                                children: kol.code\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Test_Intern\\\\test-ting\\\\FE\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 117,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"kol-detail\",\n                                children: [\n                                    \"Language: \",\n                                    kol.language\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Test_Intern\\\\test-ting\\\\FE\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 118,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"kol-detail\",\n                                children: [\n                                    \"Education: \",\n                                    kol.education\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Test_Intern\\\\test-ting\\\\FE\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 119,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"kol-detail\",\n                                children: [\n                                    \"Expected Salary: $\",\n                                    kol.expectedSalary\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Test_Intern\\\\test-ting\\\\FE\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 120,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, kol.kolID, true, {\n                        fileName: \"D:\\\\Test_Intern\\\\test-ting\\\\FE\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 116,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\Test_Intern\\\\test-ting\\\\FE\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 114,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"no-kols\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"No KOLs available.\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Test_Intern\\\\test-ting\\\\FE\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 126,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Test_Intern\\\\test-ting\\\\FE\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 125,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"scroll-buttons\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: scrollUp,\n                        disabled: !previousPageAvailable,\n                        children: \"Scroll Up\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Test_Intern\\\\test-ting\\\\FE\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 130,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: scrollDown,\n                        disabled: !nextPageAvailable,\n                        children: \"Scroll Down\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Test_Intern\\\\test-ting\\\\FE\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 133,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Test_Intern\\\\test-ting\\\\FE\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 129,\n                columnNumber: 7\n            }, undefined),\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Test_Intern\\\\test-ting\\\\FE\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 137,\n                columnNumber: 19\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Page, \"CifoM2XpvDzImtShOafKsxjC5rM=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFbUQ7QUFDL0I7QUFDMkI7QUEyQy9DLE1BQU1LLE9BQU87O0lBQ1gsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdMLCtDQUFRQSxDQUFTLEVBQUU7SUFDM0MsTUFBTSxDQUFDTSxXQUFXQyxhQUFhLEdBQUdQLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1EsU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNVLG1CQUFtQkMscUJBQXFCLEdBQUdYLCtDQUFRQSxDQUFDO0lBQzNELE1BQU0sQ0FBQ1ksdUJBQXVCQyx5QkFBeUIsR0FBR2IsK0NBQVFBLENBQUM7SUFFbkUsTUFBTWMsV0FBVztRQUNmLE1BQU1DLE1BQU0sR0FBa0NULE9BQS9CSixrREFBUyxDQUFDLE9BQU8sRUFBQyxlQUF1QixPQUFWSTtRQUM5QyxJQUFJO1lBQ0ZHLFdBQVc7WUFDWEosUUFBUSxFQUFFLEdBQUcsb0RBQW9EO1lBQ2pFLE1BQU1XLE1BQU0sTUFBTWYsbURBQUlBLENBQUNnQixHQUFHLENBQWNGO1lBQ3hDRyxRQUFRQyxHQUFHLENBQUMsaUJBQWlCSCxJQUFJSSxJQUFJLEdBQUcsd0JBQXdCO1lBRWhFLElBQUlKLElBQUlJLElBQUksQ0FBQ0MsTUFBTSxLQUFLLFdBQVc7Z0JBQ2pDLCtEQUErRDtnQkFDL0QsSUFBSUwsSUFBSUksSUFBSSxDQUFDRSxjQUFjLEVBQUU7b0JBQzNCakIsUUFBUVcsSUFBSUksSUFBSSxDQUFDRSxjQUFjO29CQUMvQlgscUJBQXFCSyxJQUFJSSxJQUFJLENBQUNWLGlCQUFpQjtvQkFDL0NHLHlCQUF5QkcsSUFBSUksSUFBSSxDQUFDUixxQkFBcUI7b0JBRXZELHlFQUF5RTtvQkFDekUsSUFDRUksSUFBSUksSUFBSSxDQUFDRSxjQUFjLENBQUNDLE1BQU0sS0FBSyxLQUNuQyxDQUFDUCxJQUFJSSxJQUFJLENBQUNWLGlCQUFpQixFQUMzQjt3QkFDQSxJQUFJSixZQUFZLEdBQUc7NEJBQ2pCQyxhQUFhRCxZQUFZO3dCQUMzQjtvQkFDRjtnQkFDRixPQUFPO29CQUNMWSxRQUFRTSxJQUFJLENBQUM7Z0JBQ2Y7WUFDRixPQUFPO2dCQUNMTixRQUFRTyxLQUFLLENBQUMsVUFBVVQsSUFBSUksSUFBSSxDQUFDTSxZQUFZO1lBQy9DO1FBQ0YsRUFBRSxPQUFPQyxJQUFJO1lBQ1hULFFBQVFPLEtBQUssQ0FBQyxjQUFjRTtRQUM5QixTQUFVO1lBQ1JsQixXQUFXO1FBQ2I7SUFDRjtJQUVBVixnREFBU0EsQ0FBQztRQUNSLElBQUlPLFlBQVksR0FBRztZQUNqQlE7UUFDRjtJQUNGLEdBQUc7UUFBQ1I7S0FBVTtJQUVkLE1BQU1zQixXQUFXO1FBQ2ZWLFFBQVFDLEdBQUcsQ0FBQztRQUNaLElBQUlQLHlCQUF5Qk4sWUFBWSxHQUFHO1lBQzFDQyxhQUFhLENBQUNzQixnQkFBa0JBLGdCQUFnQjtRQUNsRDtJQUNGO0lBRUEsTUFBTUMsYUFBYTtRQUNqQixJQUFJcEIsbUJBQW1CO1lBQ3JCSCxhQUFhRCxZQUFZO1FBQzNCO0lBQ0Y7SUFDQSxxQkFDRTs7MEJBQ0UsOERBQUN5QjtnQkFBR0MsV0FBVTswQkFBUzs7Ozs7O1lBQ3RCNUIsS0FBS21CLE1BQU0sR0FBRyxrQkFDYiw4REFBQ1U7Z0JBQUlELFdBQVU7MEJBQ1o1QixLQUFLOEIsR0FBRyxDQUFDLENBQUNDLG9CQUNULDhEQUFDRjt3QkFBb0JELFdBQVU7OzBDQUM3Qiw4REFBQ0k7Z0NBQUdKLFdBQVU7MENBQVlHLElBQUlFLElBQUk7Ozs7OzswQ0FDbEMsOERBQUNDO2dDQUFFTixXQUFVOztvQ0FBYTtvQ0FBV0csSUFBSUksUUFBUTs7Ozs7OzswQ0FDakQsOERBQUNEO2dDQUFFTixXQUFVOztvQ0FBYTtvQ0FBWUcsSUFBSUssU0FBUzs7Ozs7OzswQ0FDbkQsOERBQUNGO2dDQUFFTixXQUFVOztvQ0FBYTtvQ0FBbUJHLElBQUlNLGNBQWM7Ozs7Ozs7O3VCQUp2RE4sSUFBSU8sS0FBSzs7Ozs7Ozs7OzBDQVN2Qiw4REFBQ1Q7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUNNOzhCQUFFOzs7Ozs7Ozs7OzswQkFHUCw4REFBQ0w7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDVzt3QkFBT0MsU0FBU2hCO3dCQUFVaUIsVUFBVSxDQUFDakM7a0NBQXVCOzs7Ozs7a0NBRzdELDhEQUFDK0I7d0JBQU9DLFNBQVNkO3dCQUFZZSxVQUFVLENBQUNuQztrQ0FBbUI7Ozs7Ozs7Ozs7OztZQUk1REYseUJBQVcsOERBQUM4QjswQkFBRTs7Ozs7Ozs7QUFHckI7R0E1Rk1uQztLQUFBQTtBQThGTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgXCIuL3BhZ2UuY3NzXCI7XHJcbmltcG9ydCBBUElzLCB7IGVuZHBvaW50cyB9IGZyb20gXCIuL3V0aWxzL0FQSXNcIjtcclxuXHJcbmludGVyZmFjZSBLb2xzIHtcclxuICBrb2xJRDogbnVtYmVyO1xyXG4gIHVzZXJQcm9maWxlSUQ6IG51bWJlcjtcclxuICBsYW5ndWFnZTogc3RyaW5nO1xyXG4gIGVkdWNhdGlvbjogc3RyaW5nO1xyXG4gIGV4cGVjdGVkU2FsYXJ5OiBudW1iZXI7XHJcbiAgZXhwZWN0ZWRTYWxhcnlFbmFibGU6IGJvb2xlYW47XHJcbiAgY2hhbm5lbFNldHRpbmdUeXBlSUQ6IG51bWJlcjtcclxuICBpREZyb250VVJMOiBzdHJpbmc7XHJcbiAgaURCYWNrVVJMOiBzdHJpbmc7XHJcbiAgcG9ydHJhaXRVUkw6IHN0cmluZztcclxuICByZXdhcmRJRDogbnVtYmVyO1xyXG4gIHBheW1lbnRNZXRob2RJRDogbnVtYmVyO1xyXG4gIHRlc3RpbW9uaWFsc0lEOiBudW1iZXI7XHJcbiAgdmVyaWZpY2F0aW9uU3RhdHVzOiBib29sZWFuO1xyXG4gIGVuYWJsZWQ6IGJvb2xlYW47XHJcbiAgYWN0aXZlRGF0ZTogRGF0ZTtcclxuICBhY3RpdmU6IGJvb2xlYW47XHJcbiAgY3JlYXRlZEJ5OiBzdHJpbmc7XHJcbiAgY3JlYXRlZERhdGU6IERhdGU7XHJcbiAgbW9kaWZpZWRCeTogc3RyaW5nO1xyXG4gIG1vZGlmaWVkRGF0ZTogRGF0ZTtcclxuICBpc1JlbW92ZTogYm9vbGVhbjtcclxuICBpc09uQm9hcmRpbmc6IGJvb2xlYW47XHJcbiAgY29kZTogc3RyaW5nO1xyXG4gIHBvcnRyYWl0UmlnaHRVUkw6IHN0cmluZztcclxuICBwb3J0cmFpdExlZnRVUkw6IHN0cmluZztcclxuICBsaXZlbmVzc1N0YXR1czogYm9vbGVhbjtcclxufVxyXG5cclxuaW50ZXJmYWNlIEFwaVJlc3BvbnNlIHtcclxuICByZXN1bHQ6IHN0cmluZztcclxuICBlcnJvck1lc3NhZ2U6IHN0cmluZztcclxuICBwYWdlSW5kZXg6IG51bWJlcjtcclxuICBwYWdlU2l6ZTogbnVtYmVyO1xyXG4gIHRvdGFsQ291bnQ6IG51bWJlcjtcclxuICBuZXh0UGFnZUF2YWlsYWJsZTogYm9vbGVhbjtcclxuICBwcmV2aW91c1BhZ2VBdmFpbGFibGU6IGJvb2xlYW47XHJcbiAgS29sSW5mb3JtYXRpb246IEtvbHNbXTtcclxufVxyXG5cclxuY29uc3QgUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBba29scywgc2V0S29sc10gPSB1c2VTdGF0ZTxLb2xzW10+KFtdKTtcclxuICBjb25zdCBbcGFnZUluZGV4LCBzZXRQYWdlSW5kZXhdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtuZXh0UGFnZUF2YWlsYWJsZSwgc2V0TmV4dFBhZ2VBdmFpbGFibGVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3ByZXZpb3VzUGFnZUF2YWlsYWJsZSwgc2V0UHJldmlvdXNQYWdlQXZhaWxhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgbG9hZEtvbHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB1cmwgPSBgJHtlbmRwb2ludHNbXCJrb2xzXCJdfT9wYWdlSW5kZXg9JHtwYWdlSW5kZXh9YDtcclxuICAgIHRyeSB7XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgIHNldEtvbHMoW10pOyAvLyBYw7NhIGThu68gbGnhu4d1IGhp4buHbiB04bqhaSDEkeG7gyB0csOhbmggaGnhu4NuIHRo4buLIGThu68gbGnhu4d1IGPFqVxyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBBUElzLmdldDxBcGlSZXNwb25zZT4odXJsKTtcclxuICAgICAgY29uc29sZS5sb2coXCJBUEkgUmVzcG9uc2U6XCIsIHJlcy5kYXRhKTsgLy8gS2nhu4NtIHRyYSBwaOG6o24gaOG7k2kgQVBJXHJcblxyXG4gICAgICBpZiAocmVzLmRhdGEucmVzdWx0ID09PSBcIlN1Y2Nlc3NcIikge1xyXG4gICAgICAgIC8vIEtp4buDbSB0cmEgeGVtIEtvbEluZm9ybWF0aW9uIGPDsyB04buTbiB04bqhaSB2w6Aga2jDtG5nIHBo4bqjaSBsw6AgbnVsbFxyXG4gICAgICAgIGlmIChyZXMuZGF0YS5Lb2xJbmZvcm1hdGlvbikge1xyXG4gICAgICAgICAgc2V0S29scyhyZXMuZGF0YS5Lb2xJbmZvcm1hdGlvbik7XHJcbiAgICAgICAgICBzZXROZXh0UGFnZUF2YWlsYWJsZShyZXMuZGF0YS5uZXh0UGFnZUF2YWlsYWJsZSk7XHJcbiAgICAgICAgICBzZXRQcmV2aW91c1BhZ2VBdmFpbGFibGUocmVzLmRhdGEucHJldmlvdXNQYWdlQXZhaWxhYmxlKTtcclxuXHJcbiAgICAgICAgICAvLyBO4bq/dSBraMO0bmcgY8OzIGThu68gbGnhu4d1IHbDoCBraMO0bmcgY8OzIHRyYW5nIHRp4bq/cCB0aGVvLCDEkWnhu4F1IGNo4buJbmggcGFnZUluZGV4XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHJlcy5kYXRhLktvbEluZm9ybWF0aW9uLmxlbmd0aCA9PT0gMCAmJlxyXG4gICAgICAgICAgICAhcmVzLmRhdGEubmV4dFBhZ2VBdmFpbGFibGVcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICBpZiAocGFnZUluZGV4ID4gMSkge1xyXG4gICAgICAgICAgICAgIHNldFBhZ2VJbmRleChwYWdlSW5kZXggLSAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJLb2xJbmZvcm1hdGlvbiBpcyBudWxsIG9yIHVuZGVmaW5lZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgcmVzLmRhdGEuZXJyb3JNZXNzYWdlKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXgpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkFQSSBlcnJvcjpcIiwgZXgpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChwYWdlSW5kZXggPiAwKSB7XHJcbiAgICAgIGxvYWRLb2xzKCk7XHJcbiAgICB9XHJcbiAgfSwgW3BhZ2VJbmRleF0pO1xyXG5cclxuICBjb25zdCBzY3JvbGxVcCA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiU2Nyb2xsIFVwIGNsaWNrZWRcIik7XHJcbiAgICBpZiAocHJldmlvdXNQYWdlQXZhaWxhYmxlICYmIHBhZ2VJbmRleCA+IDEpIHtcclxuICAgICAgc2V0UGFnZUluZGV4KChwcmV2UGFnZUluZGV4KSA9PiBwcmV2UGFnZUluZGV4IC0gMSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2Nyb2xsRG93biA9ICgpID0+IHtcclxuICAgIGlmIChuZXh0UGFnZUF2YWlsYWJsZSkge1xyXG4gICAgICBzZXRQYWdlSW5kZXgocGFnZUluZGV4ICsgMSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRlclwiPktPTHMgTGlzdDwvaDE+XHJcbiAgICAgIHtrb2xzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrb2xzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAge2tvbHMubWFwKChrb2wpID0+IChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2tvbC5rb2xJRH0gY2xhc3NOYW1lPVwia29sLWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwia29sLWNvZGVcIj57a29sLmNvZGV9PC9oMz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJrb2wtZGV0YWlsXCI+TGFuZ3VhZ2U6IHtrb2wubGFuZ3VhZ2V9PC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImtvbC1kZXRhaWxcIj5FZHVjYXRpb246IHtrb2wuZWR1Y2F0aW9ufTwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJrb2wtZGV0YWlsXCI+RXhwZWN0ZWQgU2FsYXJ5OiAke2tvbC5leHBlY3RlZFNhbGFyeX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuby1rb2xzXCI+XHJcbiAgICAgICAgICA8cD5ObyBLT0xzIGF2YWlsYWJsZS48L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Nyb2xsLWJ1dHRvbnNcIj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Njcm9sbFVwfSBkaXNhYmxlZD17IXByZXZpb3VzUGFnZUF2YWlsYWJsZX0+XHJcbiAgICAgICAgICBTY3JvbGwgVXBcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Njcm9sbERvd259IGRpc2FibGVkPXshbmV4dFBhZ2VBdmFpbGFibGV9PlxyXG4gICAgICAgICAgU2Nyb2xsIERvd25cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtsb2FkaW5nICYmIDxwPkxvYWRpbmcuLi48L3A+fVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQVBJcyIsImVuZHBvaW50cyIsIlBhZ2UiLCJrb2xzIiwic2V0S29scyIsInBhZ2VJbmRleCIsInNldFBhZ2VJbmRleCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibmV4dFBhZ2VBdmFpbGFibGUiLCJzZXROZXh0UGFnZUF2YWlsYWJsZSIsInByZXZpb3VzUGFnZUF2YWlsYWJsZSIsInNldFByZXZpb3VzUGFnZUF2YWlsYWJsZSIsImxvYWRLb2xzIiwidXJsIiwicmVzIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJyZXN1bHQiLCJLb2xJbmZvcm1hdGlvbiIsImxlbmd0aCIsIndhcm4iLCJlcnJvciIsImVycm9yTWVzc2FnZSIsImV4Iiwic2Nyb2xsVXAiLCJwcmV2UGFnZUluZGV4Iiwic2Nyb2xsRG93biIsImgxIiwiY2xhc3NOYW1lIiwiZGl2IiwibWFwIiwia29sIiwiaDMiLCJjb2RlIiwicCIsImxhbmd1YWdlIiwiZWR1Y2F0aW9uIiwiZXhwZWN0ZWRTYWxhcnkiLCJrb2xJRCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});