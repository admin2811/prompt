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

/***/ "(app-pages-browser)/./components/PromptCard.jsx":
/*!***********************************!*\
  !*** ./components/PromptCard.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__  auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst PromptCard = (param)=>{\n    let { post, handleEdit, handleDelete, handleTagClick } = param;\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    const pathName = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [copied, setCopied] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleProfileClick = ()=>{\n        console.log(post);\n        if (post.creator._id === (session === null || session === void 0 ? void 0 : session.user.id)) {\n            router.push(\"/profile\");\n        }\n        router.push(\"/profile/\".concat(post.creator._id, \"?name=\").concat(post.creator.username));\n    };\n    const handleCopy = ()=>{\n        setCopied(post.prompt);\n        navigator.clipboard.writeText(post.prompt);\n        setTimeout(()=>setCopied(false), 3000);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"prompt_card\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-between items-start gap-5\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1 justify-start items-start gap-3 cursor-pointer\",\n                onClick: handleProfileClick,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                    fileName: \"D:\\\\NextJS\\\\promptopia\\\\components\\\\PromptCard.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJS\\\\promptopia\\\\components\\\\PromptCard.jsx\",\n                lineNumber: 31,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\NextJS\\\\promptopia\\\\components\\\\PromptCard.jsx\",\n            lineNumber: 30,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\NextJS\\\\promptopia\\\\components\\\\PromptCard.jsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, undefined);\n};\n_s(PromptCard, \"7xSXrfmL9XPlD1c/uOyfGJhwzuw=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession,\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname,\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = PromptCard;\nvar _c;\n$RefreshReg$(_c, \"PromptCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUHJvbXB0Q2FyZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVpQztBQUNGO0FBQ2M7QUFDWTtBQUV6RCxNQUFNSyxhQUFhO1FBQUMsRUFBQ0MsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLFlBQVksRUFBRUMsY0FBYyxFQUFDOztJQUNoRSxNQUFNLEVBQUNDLE1BQU1DLE9BQU8sRUFBRSxHQUFHVCwyREFBVUE7SUFDbkMsTUFBTVUsV0FBV1QsNERBQVdBO0lBQzVCLE1BQU1VLFNBQVNULDBEQUFTQTtJQUV4QixNQUFNLENBQUNVLFFBQVFDLFVBQVUsR0FBR2YsK0NBQVFBLENBQUM7SUFDckMsTUFBTWdCLHFCQUFxQjtRQUN0QkMsUUFBUUMsR0FBRyxDQUFDWjtRQUVaLElBQUdBLEtBQUthLE9BQU8sQ0FBQ0MsR0FBRyxNQUFLVCxvQkFBQUEsOEJBQUFBLFFBQVNVLElBQUksQ0FBQ0MsRUFBRSxHQUFFO1lBQ3RDVCxPQUFPVSxJQUFJLENBQUM7UUFDaEI7UUFDQVYsT0FBT1UsSUFBSSxDQUFDLFlBQXFDakIsT0FBekJBLEtBQUthLE9BQU8sQ0FBQ0MsR0FBRyxFQUFDLFVBQThCLE9BQXRCZCxLQUFLYSxPQUFPLENBQUNLLFFBQVE7SUFDM0U7SUFDQSxNQUFNQyxhQUFhO1FBQ2ZWLFVBQVVULEtBQUtvQixNQUFNO1FBQ3JCQyxVQUFVQyxTQUFTLENBQUNDLFNBQVMsQ0FBQ3ZCLEtBQUtvQixNQUFNO1FBQ3pDSSxXQUFXLElBQU1mLFVBQVUsUUFBUTtJQUN2QztJQUVBLHFCQUNJLDhEQUFDZ0I7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDWCw0RUFBQ0Q7Z0JBQUlDLFdBQVU7Z0JBQ2ZDLFNBQVNqQjswQkFDTCw0RUFBQ2U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3JCO0dBOUJNMUI7O1FBQ3VCSCx1REFBVUE7UUFDbEJDLHdEQUFXQTtRQUNiQyxzREFBU0E7OztLQUh0QkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9tcHRDYXJkLmpzeD8yMmI4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVBhdGhuYW1lLCB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcblxyXG5jb25zdCBQcm9tcHRDYXJkID0gKHtwb3N0LCBoYW5kbGVFZGl0LCBoYW5kbGVEZWxldGUsIGhhbmRsZVRhZ0NsaWNrfSkgPT4ge1xyXG4gICAgY29uc3Qge2RhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcclxuICAgIGNvbnN0IHBhdGhOYW1lID0gdXNlUGF0aG5hbWUoKVxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgICBjb25zdCBbY29waWVkLCBzZXRDb3BpZWRdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IGhhbmRsZVByb2ZpbGVDbGljayA9ICgpID0+IHtcclxuICAgICAgICAgY29uc29sZS5sb2cocG9zdClcclxuXHJcbiAgICAgICAgIGlmKHBvc3QuY3JlYXRvci5faWQgPT09IHNlc3Npb24/LnVzZXIuaWQpIHtcclxuICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvcHJvZmlsZScpXHJcbiAgICAgICAgIH1cclxuICAgICAgICAgcm91dGVyLnB1c2goYC9wcm9maWxlLyR7cG9zdC5jcmVhdG9yLl9pZH0/bmFtZT0ke3Bvc3QuY3JlYXRvci51c2VybmFtZX1gKVxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlQ29weSA9ICgpID0+IHtcclxuICAgICAgICBzZXRDb3BpZWQocG9zdC5wcm9tcHQpO1xyXG4gICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHBvc3QucHJvbXB0KTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldENvcGllZChmYWxzZSksIDMwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb21wdF9jYXJkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtc3RhcnQgZ2FwLTVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGp1c3RpZnktc3RhcnQgaXRlbXMtc3RhcnQgZ2FwLTMgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUHJvZmlsZUNsaWNrfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSW1hZ2UiLCJ1c2VTZXNzaW9uIiwidXNlUGF0aG5hbWUiLCJ1c2VSb3V0ZXIiLCJQcm9tcHRDYXJkIiwicG9zdCIsImhhbmRsZUVkaXQiLCJoYW5kbGVEZWxldGUiLCJoYW5kbGVUYWdDbGljayIsImRhdGEiLCJzZXNzaW9uIiwicGF0aE5hbWUiLCJyb3V0ZXIiLCJjb3BpZWQiLCJzZXRDb3BpZWQiLCJoYW5kbGVQcm9maWxlQ2xpY2siLCJjb25zb2xlIiwibG9nIiwiY3JlYXRvciIsIl9pZCIsInVzZXIiLCJpZCIsInB1c2giLCJ1c2VybmFtZSIsImhhbmRsZUNvcHkiLCJwcm9tcHQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJzZXRUaW1lb3V0IiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/PromptCard.jsx\n"));

/***/ })

});