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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [randomPassword, setRandomPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"adsfkahdka\");\n    const [passwordLength, setPasswordLength] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(10);\n    const [numbers, setNumbers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full  py-20 px-20 items-stretch  md:w-1/2\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex w-full items-center space-x-2 \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50\",\n                            type: \"text\",\n                            placeholder: \"Random Password\",\n                            value: randomPassword\n                        }, void 0, false, {\n                            fileName: \"/Users/devd/projects/Nextjs/password-generator/src/app/page.tsx\",\n                            lineNumber: 14,\n                            columnNumber: 3\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            className: \"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black\",\n                            children: \"Copy\"\n                        }, void 0, false, {\n                            fileName: \"/Users/devd/projects/Nextjs/password-generator/src/app/page.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 3\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/devd/projects/Nextjs/password-generator/src/app/page.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex w-full h-10  my-8 items-center space-x-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"flex w-50 rounded-md border border-black/30 bg-transparent px-1 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50\",\n                            type: \"range\",\n                            name: \"passwordLength\",\n                            min: \"0\",\n                            max: \"80\",\n                            value: passwordLength\n                        }, void 0, false, {\n                            fileName: \"/Users/devd/projects/Nextjs/password-generator/src/app/page.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 3\n                        }, this),\n                        \": \",\n                        passwordLength,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"flex w-10 rounded-md border border-black/30 bg-transparent px-1 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50\",\n                            type: \"checkbox\",\n                            name: \"addNumbers\"\n                        }, void 0, false, {\n                            fileName: \"/Users/devd/projects/Nextjs/password-generator/src/app/page.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 4\n                        }, this),\n                        \" : Numbers\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"flex w-10 rounded-md border border-black/30 bg-transparent px-1 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50\",\n                            type: \"checkbox\",\n                            name: \"addSpecialCharacters\"\n                        }, void 0, false, {\n                            fileName: \"/Users/devd/projects/Nextjs/password-generator/src/app/page.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 3\n                        }, this),\n                        \": characters\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/devd/projects/Nextjs/password-generator/src/app/page.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 1\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/devd/projects/Nextjs/password-generator/src/app/page.tsx\",\n            lineNumber: 12,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/devd/projects/Nextjs/password-generator/src/app/page.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"Ic7un3O8Js3W5cE8mbhnoDyXsKY=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRThCO0FBRWYsU0FBU0M7O0lBQ3ZCLE1BQU0sQ0FBQ0MsZ0JBQWVDLGtCQUFrQixHQUFDSCwrQ0FBUUEsQ0FBQztJQUNsRCxNQUFNLENBQUNJLGdCQUFlQyxrQkFBa0IsR0FBQ0wsK0NBQVFBLENBQUM7SUFDbEQsTUFBTSxDQUFDTSxTQUFRQyxXQUFXLEdBQUNQLCtDQUFRQSxDQUFDO0lBRW5DLHFCQUNFLDhEQUFDUTtRQUFLQyxXQUFVO2tCQUNoQiw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ2YsOERBQUNDO29CQUFJRCxXQUFVOztzQ0FDakIsOERBQUNFOzRCQUNDRixXQUFVOzRCQUNWRyxNQUFLOzRCQUNMQyxhQUFZOzRCQUNaQyxPQUFPWjs7Ozs7O3NDQUVULDhEQUFDYTs0QkFDQ0gsTUFBSzs0QkFDTEgsV0FBVTtzQ0FDWDs7Ozs7Ozs7Ozs7OzhCQUlILDhEQUFDQztvQkFBSUQsV0FBVTs7c0NBRWIsOERBQUNFOzRCQUNDRixXQUFVOzRCQUNWRyxNQUFLOzRCQUNMSSxNQUFLOzRCQUNMQyxLQUFJOzRCQUNKQyxLQUFJOzRCQUNKSixPQUFPVjs7Ozs7O3dCQUNQO3dCQUFHQTtzQ0FFSiw4REFBQ087NEJBQ0FGLFdBQVU7NEJBQ1ZHLE1BQUs7NEJBQ0xJLE1BQUs7Ozs7Ozt3QkFDTDtzQ0FDRiw4REFBQ0w7NEJBQ0NGLFdBQVU7NEJBQ1ZHLE1BQUs7NEJBQ0xJLE1BQUs7Ozs7Ozt3QkFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUo7R0FoRHdCZjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiBjb25zdCBbcmFuZG9tUGFzc3dvcmQsc2V0UmFuZG9tUGFzc3dvcmRdPXVzZVN0YXRlKFwiYWRzZmthaGRrYVwiKVxuIGNvbnN0IFtwYXNzd29yZExlbmd0aCxzZXRQYXNzd29yZExlbmd0aF09dXNlU3RhdGUoMTApXG4gY29uc3QgW251bWJlcnMsc2V0TnVtYmVyc109dXNlU3RhdGUoZmFsc2UpXG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHAtMjRcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCAgcHktMjAgcHgtMjAgaXRlbXMtc3RyZXRjaCAgbWQ6dy0xLzJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGl0ZW1zLWNlbnRlciBzcGFjZS14LTIgXCI+XG4gIDxpbnB1dFxuICAgIGNsYXNzTmFtZT1cImZsZXggaC0xMCB3LWZ1bGwgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWJsYWNrLzMwIGJnLXRyYW5zcGFyZW50IHB4LTMgcHktMiB0ZXh0LXNtIHBsYWNlaG9sZGVyOnRleHQtZ3JheS02MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMSBmb2N1czpyaW5nLWJsYWNrLzMwIGZvY3VzOnJpbmctb2Zmc2V0LTEgZGlzYWJsZWQ6Y3Vyc29yLW5vdC1hbGxvd2VkIGRpc2FibGVkOm9wYWNpdHktNTBcIlxuICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICBwbGFjZWhvbGRlcj1cIlJhbmRvbSBQYXNzd29yZFwiXG4gICAgdmFsdWU9e3JhbmRvbVBhc3N3b3JkfVxuICAvPlxuICA8YnV0dG9uXG4gICAgdHlwZT1cImJ1dHRvblwiXG4gICAgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBiZy1ibGFjayBweC0zIHB5LTIgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgc2hhZG93LXNtIGhvdmVyOmJnLWJsYWNrLzgwIGZvY3VzLXZpc2libGU6b3V0bGluZSBmb2N1cy12aXNpYmxlOm91dGxpbmUtMiBmb2N1cy12aXNpYmxlOm91dGxpbmUtb2Zmc2V0LTIgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLWJsYWNrXCJcbiAgPlxuICAgIENvcHlcbiAgPC9idXR0b24+XG48L2Rpdj5cbjxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgaC0xMCAgbXktOCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yXCI+XG5cbiAgPGlucHV0XG4gICAgY2xhc3NOYW1lPVwiZmxleCB3LTUwIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1ibGFjay8zMCBiZy10cmFuc3BhcmVudCBweC0xIHB5LTIgdGV4dC1zbSBwbGFjZWhvbGRlcjp0ZXh0LWdyYXktNjAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTEgZm9jdXM6cmluZy1ibGFjay8zMCBmb2N1czpyaW5nLW9mZnNldC0xIGRpc2FibGVkOmN1cnNvci1ub3QtYWxsb3dlZCBkaXNhYmxlZDpvcGFjaXR5LTUwXCJcbiAgICB0eXBlPVwicmFuZ2VcIlxuICAgIG5hbWU9XCJwYXNzd29yZExlbmd0aFwiXG4gICAgbWluPVwiMFwiXG4gICAgbWF4PVwiODBcIlxuICAgIHZhbHVlPXtwYXNzd29yZExlbmd0aH1cbiAgLz46IHtwYXNzd29yZExlbmd0aH1cbiAgXG4gICA8aW5wdXRcbiAgICBjbGFzc05hbWU9XCJmbGV4IHctMTAgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWJsYWNrLzMwIGJnLXRyYW5zcGFyZW50IHB4LTEgcHktMiB0ZXh0LXNtIHBsYWNlaG9sZGVyOnRleHQtZ3JheS02MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMSBmb2N1czpyaW5nLWJsYWNrLzMwIGZvY3VzOnJpbmctb2Zmc2V0LTEgZGlzYWJsZWQ6Y3Vyc29yLW5vdC1hbGxvd2VkIGRpc2FibGVkOm9wYWNpdHktNTBcIlxuICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgbmFtZT1cImFkZE51bWJlcnNcIlxuICAvPiA6IE51bWJlcnNcbiAgPGlucHV0XG4gICAgY2xhc3NOYW1lPVwiZmxleCB3LTEwIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1ibGFjay8zMCBiZy10cmFuc3BhcmVudCBweC0xIHB5LTIgdGV4dC1zbSBwbGFjZWhvbGRlcjp0ZXh0LWdyYXktNjAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTEgZm9jdXM6cmluZy1ibGFjay8zMCBmb2N1czpyaW5nLW9mZnNldC0xIGRpc2FibGVkOmN1cnNvci1ub3QtYWxsb3dlZCBkaXNhYmxlZDpvcGFjaXR5LTUwXCJcbiAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgIG5hbWU9XCJhZGRTcGVjaWFsQ2hhcmFjdGVyc1wiXG4gIC8+OiBjaGFyYWN0ZXJzXG5cbjwvZGl2PlxuPC9kaXY+XG4gICAgPC9tYWluPlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJIb21lIiwicmFuZG9tUGFzc3dvcmQiLCJzZXRSYW5kb21QYXNzd29yZCIsInBhc3N3b3JkTGVuZ3RoIiwic2V0UGFzc3dvcmRMZW5ndGgiLCJudW1iZXJzIiwic2V0TnVtYmVycyIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwiYnV0dG9uIiwibmFtZSIsIm1pbiIsIm1heCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});