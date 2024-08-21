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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _page_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page.css */ \"(app-pages-browser)/./src/app/page.css\");\n/* harmony import */ var _utils_APIs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/APIs */ \"(app-pages-browser)/./src/app/utils/APIs.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Page = ()=>{\n    _s();\n    const [kols, setKols] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [pageIndex, setPageIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [nextPageAvailable, setNextPageAvailable] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [previousPageAvailable, setPreviousPageAvailable] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const loadKols = async ()=>{\n        const url = \"\".concat(_utils_APIs__WEBPACK_IMPORTED_MODULE_3__.endpoints[\"kols\"], \"?pageIndex=\").concat(pageIndex);\n        try {\n            setLoading(true);\n            setKols([]); // Xóa dữ liệu hiện tại để tránh hiển thị dữ liệu cũ\n            const res = await _utils_APIs__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(url);\n            console.log(\"API Response:\", res.data); // Kiểm tra phản hồi API\n            if (res.data.result === \"Success\") {\n                // Kiểm tra xem KolInformation có tồn tại và không phải là null\n                if (res.data.KolInformation) {\n                    setKols(res.data.KolInformation);\n                    setNextPageAvailable(res.data.nextPageAvailable);\n                    setPreviousPageAvailable(res.data.previousPageAvailable);\n                    // Nếu không có dữ liệu và không có trang tiếp theo, điều chỉnh pageIndex\n                    if (res.data.KolInformation.length === 0 && !res.data.nextPageAvailable) {\n                        if (pageIndex > 1) {\n                            setPageIndex(pageIndex - 1);\n                        }\n                    }\n                } else {\n                    console.warn(\"KolInformation is null or undefined.\");\n                }\n            } else {\n                console.error(\"Error:\", res.data.errorMessage);\n            }\n        } catch (ex) {\n            console.error(\"API error:\", ex);\n        } finally{\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (pageIndex > 0) {\n            loadKols();\n        }\n    }, [\n        pageIndex\n    ]);\n    const scrollUp = ()=>{\n        console.log(\"Scroll Up clicked\");\n        if (previousPageAvailable && pageIndex > 1) {\n            setPageIndex((prevPageIndex)=>prevPageIndex - 1);\n        }\n    };\n    const scrollDown = ()=>{\n        if (nextPageAvailable) {\n            setPageIndex(pageIndex + 1);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"page-container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"header\",\n                    children: \"KOLs List\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Test_Intern\\\\test-ting\\\\FE\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 113,\n                    columnNumber: 7\n                }, undefined),\n                kols.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"kols-container\",\n                    children: kols.map((kol)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"kol-item\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"kol-code\",\n                                    children: kol.code\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Test_Intern\\\\test-ting\\\\FE\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"kol-detail\",\n                                    children: [\n                                        \"Language: \",\n                                        kol.language\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Test_Intern\\\\test-ting\\\\FE\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 119,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"kol-detail\",\n                                    children: [\n                                        \"Education: \",\n                                        kol.education\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Test_Intern\\\\test-ting\\\\FE\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 120,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"kol-detail\",\n                                    children: [\n                                        \"Expected Salary: $\",\n                                        kol.expectedSalary\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Test_Intern\\\\test-ting\\\\FE\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 121,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, kol.kolID, true, {\n                            fileName: \"D:\\\\Test_Intern\\\\test-ting\\\\FE\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 117,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"D:\\\\Test_Intern\\\\test-ting\\\\FE\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 115,\n                    columnNumber: 9\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"no-kols\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"No KOLs available.\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Test_Intern\\\\test-ting\\\\FE\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 127,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Test_Intern\\\\test-ting\\\\FE\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 126,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"scroll-buttons\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: scrollUp,\n                            disabled: !previousPageAvailable,\n                            className: \"scroll-button\",\n                            children: \"Scroll Up\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Test_Intern\\\\test-ting\\\\FE\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 131,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: scrollDown,\n                            disabled: !nextPageAvailable,\n                            className: \"scroll-button\",\n                            children: \"Scroll Down\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Test_Intern\\\\test-ting\\\\FE\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 134,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Test_Intern\\\\test-ting\\\\FE\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 130,\n                    columnNumber: 7\n                }, undefined),\n                loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"loading-text\",\n                    children: \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Test_Intern\\\\test-ting\\\\FE\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 138,\n                    columnNumber: 19\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Test_Intern\\\\test-ting\\\\FE\\\\src\\\\app\\\\page.tsx\",\n            lineNumber: 112,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false);\n};\n_s(Page, \"CifoM2XpvDzImtShOafKsxjC5rM=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFjOzs7Ozs7OzsyQkFKdkROLElBQUlPLEtBQUs7Ozs7Ozs7Ozs4Q0FTdkIsOERBQUNYO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDTTtrQ0FBRTs7Ozs7Ozs7Ozs7OEJBR1AsOERBQUNQO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ1c7NEJBQU9DLFNBQVNoQjs0QkFBVWlCLFVBQVUsQ0FBQ2pDOzRCQUF1Qm9CLFdBQVU7c0NBQWdCOzs7Ozs7c0NBR3ZGLDhEQUFDVzs0QkFBT0MsU0FBU2Q7NEJBQVllLFVBQVUsQ0FBQ25DOzRCQUFtQnNCLFdBQVU7c0NBQWdCOzs7Ozs7Ozs7Ozs7Z0JBSXRGeEIseUJBQVcsOERBQUM4QjtvQkFBRU4sV0FBVTs4QkFBZTs7Ozs7Ozs7Ozs7OztBQUk5QztHQTlGTTdCO0tBQUFBO0FBZ0dOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcIi4vcGFnZS5jc3NcIjtcclxuaW1wb3J0IEFQSXMsIHsgZW5kcG9pbnRzIH0gZnJvbSBcIi4vdXRpbHMvQVBJc1wiO1xyXG5cclxuaW50ZXJmYWNlIEtvbHMge1xyXG4gIGtvbElEOiBudW1iZXI7XHJcbiAgdXNlclByb2ZpbGVJRDogbnVtYmVyO1xyXG4gIGxhbmd1YWdlOiBzdHJpbmc7XHJcbiAgZWR1Y2F0aW9uOiBzdHJpbmc7XHJcbiAgZXhwZWN0ZWRTYWxhcnk6IG51bWJlcjtcclxuICBleHBlY3RlZFNhbGFyeUVuYWJsZTogYm9vbGVhbjtcclxuICBjaGFubmVsU2V0dGluZ1R5cGVJRDogbnVtYmVyO1xyXG4gIGlERnJvbnRVUkw6IHN0cmluZztcclxuICBpREJhY2tVUkw6IHN0cmluZztcclxuICBwb3J0cmFpdFVSTDogc3RyaW5nO1xyXG4gIHJld2FyZElEOiBudW1iZXI7XHJcbiAgcGF5bWVudE1ldGhvZElEOiBudW1iZXI7XHJcbiAgdGVzdGltb25pYWxzSUQ6IG51bWJlcjtcclxuICB2ZXJpZmljYXRpb25TdGF0dXM6IGJvb2xlYW47XHJcbiAgZW5hYmxlZDogYm9vbGVhbjtcclxuICBhY3RpdmVEYXRlOiBEYXRlO1xyXG4gIGFjdGl2ZTogYm9vbGVhbjtcclxuICBjcmVhdGVkQnk6IHN0cmluZztcclxuICBjcmVhdGVkRGF0ZTogRGF0ZTtcclxuICBtb2RpZmllZEJ5OiBzdHJpbmc7XHJcbiAgbW9kaWZpZWREYXRlOiBEYXRlO1xyXG4gIGlzUmVtb3ZlOiBib29sZWFuO1xyXG4gIGlzT25Cb2FyZGluZzogYm9vbGVhbjtcclxuICBjb2RlOiBzdHJpbmc7XHJcbiAgcG9ydHJhaXRSaWdodFVSTDogc3RyaW5nO1xyXG4gIHBvcnRyYWl0TGVmdFVSTDogc3RyaW5nO1xyXG4gIGxpdmVuZXNzU3RhdHVzOiBib29sZWFuO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQXBpUmVzcG9uc2Uge1xyXG4gIHJlc3VsdDogc3RyaW5nO1xyXG4gIGVycm9yTWVzc2FnZTogc3RyaW5nO1xyXG4gIHBhZ2VJbmRleDogbnVtYmVyO1xyXG4gIHBhZ2VTaXplOiBudW1iZXI7XHJcbiAgdG90YWxDb3VudDogbnVtYmVyO1xyXG4gIG5leHRQYWdlQXZhaWxhYmxlOiBib29sZWFuO1xyXG4gIHByZXZpb3VzUGFnZUF2YWlsYWJsZTogYm9vbGVhbjtcclxuICBLb2xJbmZvcm1hdGlvbjogS29sc1tdO1xyXG59XHJcblxyXG5jb25zdCBQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtrb2xzLCBzZXRLb2xzXSA9IHVzZVN0YXRlPEtvbHNbXT4oW10pO1xyXG4gIGNvbnN0IFtwYWdlSW5kZXgsIHNldFBhZ2VJbmRleF0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW25leHRQYWdlQXZhaWxhYmxlLCBzZXROZXh0UGFnZUF2YWlsYWJsZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbcHJldmlvdXNQYWdlQXZhaWxhYmxlLCBzZXRQcmV2aW91c1BhZ2VBdmFpbGFibGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBsb2FkS29scyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHVybCA9IGAke2VuZHBvaW50c1tcImtvbHNcIl19P3BhZ2VJbmRleD0ke3BhZ2VJbmRleH1gO1xyXG4gICAgdHJ5IHtcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgc2V0S29scyhbXSk7IC8vIFjDs2EgZOG7ryBsaeG7h3UgaGnhu4duIHThuqFpIMSR4buDIHRyw6FuaCBoaeG7g24gdGjhu4sgZOG7ryBsaeG7h3UgY8WpXHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IEFQSXMuZ2V0PEFwaVJlc3BvbnNlPih1cmwpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkFQSSBSZXNwb25zZTpcIiwgcmVzLmRhdGEpOyAvLyBLaeG7g20gdHJhIHBo4bqjbiBo4buTaSBBUElcclxuXHJcbiAgICAgIGlmIChyZXMuZGF0YS5yZXN1bHQgPT09IFwiU3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgLy8gS2nhu4NtIHRyYSB4ZW0gS29sSW5mb3JtYXRpb24gY8OzIHThu5NuIHThuqFpIHbDoCBraMO0bmcgcGjhuqNpIGzDoCBudWxsXHJcbiAgICAgICAgaWYgKHJlcy5kYXRhLktvbEluZm9ybWF0aW9uKSB7XHJcbiAgICAgICAgICBzZXRLb2xzKHJlcy5kYXRhLktvbEluZm9ybWF0aW9uKTtcclxuICAgICAgICAgIHNldE5leHRQYWdlQXZhaWxhYmxlKHJlcy5kYXRhLm5leHRQYWdlQXZhaWxhYmxlKTtcclxuICAgICAgICAgIHNldFByZXZpb3VzUGFnZUF2YWlsYWJsZShyZXMuZGF0YS5wcmV2aW91c1BhZ2VBdmFpbGFibGUpO1xyXG5cclxuICAgICAgICAgIC8vIE7hur91IGtow7RuZyBjw7MgZOG7ryBsaeG7h3UgdsOgIGtow7RuZyBjw7MgdHJhbmcgdGnhur9wIHRoZW8sIMSRaeG7gXUgY2jhu4luaCBwYWdlSW5kZXhcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgcmVzLmRhdGEuS29sSW5mb3JtYXRpb24ubGVuZ3RoID09PSAwICYmXHJcbiAgICAgICAgICAgICFyZXMuZGF0YS5uZXh0UGFnZUF2YWlsYWJsZVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmIChwYWdlSW5kZXggPiAxKSB7XHJcbiAgICAgICAgICAgICAgc2V0UGFnZUluZGV4KHBhZ2VJbmRleCAtIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUud2FybihcIktvbEluZm9ybWF0aW9uIGlzIG51bGwgb3IgdW5kZWZpbmVkLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCByZXMuZGF0YS5lcnJvck1lc3NhZ2UpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChleCkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiQVBJIGVycm9yOlwiLCBleCk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHBhZ2VJbmRleCA+IDApIHtcclxuICAgICAgbG9hZEtvbHMoKTtcclxuICAgIH1cclxuICB9LCBbcGFnZUluZGV4XSk7XHJcblxyXG4gIGNvbnN0IHNjcm9sbFVwID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJTY3JvbGwgVXAgY2xpY2tlZFwiKTtcclxuICAgIGlmIChwcmV2aW91c1BhZ2VBdmFpbGFibGUgJiYgcGFnZUluZGV4ID4gMSkge1xyXG4gICAgICBzZXRQYWdlSW5kZXgoKHByZXZQYWdlSW5kZXgpID0+IHByZXZQYWdlSW5kZXggLSAxKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBzY3JvbGxEb3duID0gKCkgPT4ge1xyXG4gICAgaWYgKG5leHRQYWdlQXZhaWxhYmxlKSB7XHJcbiAgICAgIHNldFBhZ2VJbmRleChwYWdlSW5kZXggKyAxKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRhaW5lclwiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGVyXCI+S09McyBMaXN0PC9oMT5cclxuICAgICAge2tvbHMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtvbHMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICB7a29scy5tYXAoKGtvbCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17a29sLmtvbElEfSBjbGFzc05hbWU9XCJrb2wtaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJrb2wtY29kZVwiPntrb2wuY29kZX08L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImtvbC1kZXRhaWxcIj5MYW5ndWFnZToge2tvbC5sYW5ndWFnZX08L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwia29sLWRldGFpbFwiPkVkdWNhdGlvbjoge2tvbC5lZHVjYXRpb259PC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImtvbC1kZXRhaWxcIj5FeHBlY3RlZCBTYWxhcnk6ICR7a29sLmV4cGVjdGVkU2FsYXJ5fTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vLWtvbHNcIj5cclxuICAgICAgICAgIDxwPk5vIEtPTHMgYXZhaWxhYmxlLjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JvbGwtYnV0dG9uc1wiPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17c2Nyb2xsVXB9IGRpc2FibGVkPXshcHJldmlvdXNQYWdlQXZhaWxhYmxlfSBjbGFzc05hbWU9XCJzY3JvbGwtYnV0dG9uXCI+XHJcbiAgICAgICAgICBTY3JvbGwgVXBcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Njcm9sbERvd259IGRpc2FibGVkPXshbmV4dFBhZ2VBdmFpbGFibGV9IGNsYXNzTmFtZT1cInNjcm9sbC1idXR0b25cIj5cclxuICAgICAgICAgIFNjcm9sbCBEb3duXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7bG9hZGluZyAmJiA8cCBjbGFzc05hbWU9XCJsb2FkaW5nLXRleHRcIj5Mb2FkaW5nLi4uPC9wPn1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBUElzIiwiZW5kcG9pbnRzIiwiUGFnZSIsImtvbHMiLCJzZXRLb2xzIiwicGFnZUluZGV4Iiwic2V0UGFnZUluZGV4IiwibG9hZGluZyIsInNldExvYWRpbmciLCJuZXh0UGFnZUF2YWlsYWJsZSIsInNldE5leHRQYWdlQXZhaWxhYmxlIiwicHJldmlvdXNQYWdlQXZhaWxhYmxlIiwic2V0UHJldmlvdXNQYWdlQXZhaWxhYmxlIiwibG9hZEtvbHMiLCJ1cmwiLCJyZXMiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInJlc3VsdCIsIktvbEluZm9ybWF0aW9uIiwibGVuZ3RoIiwid2FybiIsImVycm9yIiwiZXJyb3JNZXNzYWdlIiwiZXgiLCJzY3JvbGxVcCIsInByZXZQYWdlSW5kZXgiLCJzY3JvbGxEb3duIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJtYXAiLCJrb2wiLCJoMyIsImNvZGUiLCJwIiwibGFuZ3VhZ2UiLCJlZHVjYXRpb24iLCJleHBlY3RlZFNhbGFyeSIsImtvbElEIiwiYnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});