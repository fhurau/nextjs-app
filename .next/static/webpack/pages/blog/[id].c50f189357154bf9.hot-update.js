"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog/[id]",{

/***/ "./pages/blog/[id].js":
/*!****************************!*\
  !*** ./pages/blog/[id].js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _BlogDetailPage_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BlogDetailPage.module.css */ \"./pages/blog/BlogDetailPage.module.css\");\n/* harmony import */ var _BlogDetailPage_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_BlogDetailPage_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst BlogDetailPage = (param)=>{\n    let { post, comments } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_BlogDetailPage_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_BlogDetailPage_module_css__WEBPACK_IMPORTED_MODULE_2___default().heading),\n                children: \"Blog Post Detail\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Windows\\\\Documents\\\\interview\\\\nextjs-app\\\\pages\\\\blog\\\\[id].js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_BlogDetailPage_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),\n                children: post.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Windows\\\\Documents\\\\interview\\\\nextjs-app\\\\pages\\\\blog\\\\[id].js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_BlogDetailPage_module_css__WEBPACK_IMPORTED_MODULE_2___default().body),\n                children: post.body\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Windows\\\\Documents\\\\interview\\\\nextjs-app\\\\pages\\\\blog\\\\[id].js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_BlogDetailPage_module_css__WEBPACK_IMPORTED_MODULE_2___default().commentsSection),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: (_BlogDetailPage_module_css__WEBPACK_IMPORTED_MODULE_2___default().commentsHeading),\n                        children: \"Comments:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Windows\\\\Documents\\\\interview\\\\nextjs-app\\\\pages\\\\blog\\\\[id].js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, undefined),\n                    comments.length > 0 ? comments.map((comment)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_BlogDetailPage_module_css__WEBPACK_IMPORTED_MODULE_2___default().commentItem),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: (_BlogDetailPage_module_css__WEBPACK_IMPORTED_MODULE_2___default().commentBody),\n                                    children: comment.body\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Windows\\\\Documents\\\\interview\\\\nextjs-app\\\\pages\\\\blog\\\\[id].js\",\n                                    lineNumber: 16,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_BlogDetailPage_module_css__WEBPACK_IMPORTED_MODULE_2___default().userSection),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: (_BlogDetailPage_module_css__WEBPACK_IMPORTED_MODULE_2___default().userHeading),\n                                            children: \"User:\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Windows\\\\Documents\\\\interview\\\\nextjs-app\\\\pages\\\\blog\\\\[id].js\",\n                                            lineNumber: 18,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: (_BlogDetailPage_module_css__WEBPACK_IMPORTED_MODULE_2___default().userName),\n                                            children: comment.name\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Windows\\\\Documents\\\\interview\\\\nextjs-app\\\\pages\\\\blog\\\\[id].js\",\n                                            lineNumber: 19,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: (_BlogDetailPage_module_css__WEBPACK_IMPORTED_MODULE_2___default().userEmail),\n                                            children: comment.email\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Windows\\\\Documents\\\\interview\\\\nextjs-app\\\\pages\\\\blog\\\\[id].js\",\n                                            lineNumber: 20,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Windows\\\\Documents\\\\interview\\\\nextjs-app\\\\pages\\\\blog\\\\[id].js\",\n                                    lineNumber: 17,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, comment.id, true, {\n                            fileName: \"C:\\\\Users\\\\Windows\\\\Documents\\\\interview\\\\nextjs-app\\\\pages\\\\blog\\\\[id].js\",\n                            lineNumber: 15,\n                            columnNumber: 13\n                        }, undefined)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"No comments\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Windows\\\\Documents\\\\interview\\\\nextjs-app\\\\pages\\\\blog\\\\[id].js\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Windows\\\\Documents\\\\interview\\\\nextjs-app\\\\pages\\\\blog\\\\[id].js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Windows\\\\Documents\\\\interview\\\\nextjs-app\\\\pages\\\\blog\\\\[id].js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\n_c = BlogDetailPage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogDetailPage);\nvar _c;\n$RefreshReg$(_c, \"BlogDetailPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nL1tpZF0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMEI7QUFFdUI7QUFFakQsTUFBTUUsaUJBQWlCO1FBQUMsRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUU7SUFDeEMscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVdMLDZFQUFnQk07OzBCQUM5Qiw4REFBQ0M7Z0JBQUdGLFdBQVdMLDJFQUFjUTswQkFBRTs7Ozs7OzBCQUMvQiw4REFBQ0M7Z0JBQUdKLFdBQVdMLHlFQUFZVTswQkFBR1IsS0FBS1E7Ozs7OzswQkFDbkMsOERBQUNDO2dCQUFFTixXQUFXTCx3RUFBV1k7MEJBQUdWLEtBQUtVOzs7Ozs7MEJBQ2pDLDhEQUFDUjtnQkFBSUMsV0FBV0wsbUZBQXNCYTs7a0NBQ3BDLDhEQUFDQzt3QkFBR1QsV0FBV0wsbUZBQXNCZTtrQ0FBRTs7Ozs7O29CQUN0Q1osU0FBU2EsU0FBUyxJQUNqQmIsU0FBU2MsSUFBSSxDQUFDQyx3QkFDWiw4REFBQ2Q7NEJBQXFCQyxXQUFXTCwrRUFBa0JtQjs7OENBQ2pELDhEQUFDUjtvQ0FBRU4sV0FBV0wsK0VBQWtCb0I7OENBQUdGLFFBQVFOOzs7Ozs7OENBQzNDLDhEQUFDUjtvQ0FBSUMsV0FBV0wsK0VBQWtCcUI7O3NEQUNoQyw4REFBQ1A7NENBQUdULFdBQVdMLCtFQUFrQnNCO3NEQUFFOzs7Ozs7c0RBQ25DLDhEQUFDWDs0Q0FBRU4sV0FBV0wsNEVBQWV1QjtzREFBR0wsUUFBUU07Ozs7OztzREFDeEMsOERBQUNiOzRDQUFFTixXQUFXTCw2RUFBZ0J5QjtzREFBR1AsUUFBUVE7Ozs7Ozs7Ozs7Ozs7MkJBTG5DUixRQUFRUzs7Ozt1REFVcEIsOERBQUNDO2tDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLZDtLQXpCTTNCOztBQXNETiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ibG9nL1tpZF0uanM/NWM5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQmxvZ0RldGFpbFBhZ2UubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCBCbG9nRGV0YWlsUGFnZSA9ICh7IHBvc3QsIGNvbW1lbnRzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGluZ30+QmxvZyBQb3N0IERldGFpbDwvaDE+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e3Bvc3QudGl0bGV9PC9oMj5cclxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYm9keX0+e3Bvc3QuYm9keX08L3A+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudHNTZWN0aW9ufT5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudHNIZWFkaW5nfT5Db21tZW50czo8L2gzPlxyXG4gICAgICAgIHtjb21tZW50cy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgY29tbWVudHMubWFwKChjb21tZW50KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtjb21tZW50LmlkfSBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50SXRlbX0+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudEJvZHl9Pntjb21tZW50LmJvZHl9PC9wPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlclNlY3Rpb259PlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLnVzZXJIZWFkaW5nfT5Vc2VyOjwvaDM+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy51c2VyTmFtZX0+e2NvbW1lbnQubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy51c2VyRW1haWx9Pntjb21tZW50LmVtYWlsfTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKVxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8aDQ+Tm8gY29tbWVudHM8L2g0PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHBvc3RJZCA9IGNvbnRleHQucXVlcnkuaWQ7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBbcG9zdFJlc3BvbnNlLCBjb21tZW50c1Jlc3BvbnNlXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgYXhpb3MuZ2V0KGBodHRwczovL2dvcmVzdC5jby5pbi9wdWJsaWMtYXBpL3Bvc3RzLyR7cG9zdElkfWApLFxyXG4gICAgICBheGlvcy5nZXQoYGh0dHBzOi8vZ29yZXN0LmNvLmluL3B1YmxpYy1hcGkvY29tbWVudHM/cG9zdF9pZD0ke3Bvc3RJZH1gKSxcclxuICAgIF0pO1xyXG5cclxuICAgIGNvbnN0IHBvc3QgPSBwb3N0UmVzcG9uc2UuZGF0YS5kYXRhO1xyXG4gICAgY29uc3QgY29tbWVudHMgPSBjb21tZW50c1Jlc3BvbnNlLmRhdGEuZGF0YSB8fCBbXTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgIHBvc3QsXHJcbiAgICAgICAgY29tbWVudHMsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLyBIYW5kbGUgZXJyb3IsIGUuZy4sIHNob3cgYSBjdXN0b20gZXJyb3IgcGFnZVxyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBub3RGb3VuZDogdHJ1ZSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9nRGV0YWlsUGFnZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiQmxvZ0RldGFpbFBhZ2UiLCJwb3N0IiwiY29tbWVudHMiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJoMSIsImhlYWRpbmciLCJoMiIsInRpdGxlIiwicCIsImJvZHkiLCJjb21tZW50c1NlY3Rpb24iLCJoMyIsImNvbW1lbnRzSGVhZGluZyIsImxlbmd0aCIsIm1hcCIsImNvbW1lbnQiLCJjb21tZW50SXRlbSIsImNvbW1lbnRCb2R5IiwidXNlclNlY3Rpb24iLCJ1c2VySGVhZGluZyIsInVzZXJOYW1lIiwibmFtZSIsInVzZXJFbWFpbCIsImVtYWlsIiwiaWQiLCJoNCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog/[id].js\n"));

/***/ })

});