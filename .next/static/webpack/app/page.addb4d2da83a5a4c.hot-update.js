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

/***/ "(app-pages-browser)/./components/Feed.jsx":
/*!*****************************!*\
  !*** ./components/Feed.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PromptCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PromptCard */ \"(app-pages-browser)/./components/PromptCard.jsx\");\n/* harmony import */ var _PromptCard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_PromptCard__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ \"(app-pages-browser)/./node_modules/mongoose/dist/browser.umd.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst PromptCardList = (param)=>{\n    let { data, handleTagClick } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-16 prompt_layout\",\n        children: data.map((post)=>{\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_PromptCard__WEBPACK_IMPORTED_MODULE_2___default()), {\n                post: post,\n                handleTagClick: handleTagClick\n            }, post._id, false, {\n                fileName: \"D:\\\\NextJS\\\\promptopia\\\\components\\\\Feed.jsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"D:\\\\NextJS\\\\promptopia\\\\components\\\\Feed.jsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n_c = PromptCardList;\nconst Feed = ()=>{\n    _s();\n    const [allPosts, setAllPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [searchText, setSearchText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [searchTimeOut, setSearchTimeOut] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [searchedResults, setSearchResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const fetchPosts = async ()=>{\n        const response = await fetch(\"/api/prompt\");\n        const data = await response.json();\n        setAllPosts(data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchPosts();\n    }, []);\n    const filterPrompts = (searchText)=>{\n        const regex = new RegExp(searchText, \"i\");\n        return allPosts.filter((item)=>regex.test(item.creator.username) || regex.test(item.tag) || regex.test(item.prompt));\n    };\n    const handleSearchChange = (e)=>{\n        clearTimeout(searchTimeOut);\n        setSearchTimeOut;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"feed\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \"relative w-full flex-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Search for a tag or a username\",\n                value: searchText,\n                onChange: handleSearchChange,\n                required: true,\n                className: \"search_input peer\"\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJS\\\\promptopia\\\\components\\\\Feed.jsx\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\NextJS\\\\promptopia\\\\components\\\\Feed.jsx\",\n            lineNumber: 52,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\NextJS\\\\promptopia\\\\components\\\\Feed.jsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Feed, \"ZAb6avqA3ZTjYcbrnu4YK4YRKIU=\");\n_c1 = Feed;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Feed);\nvar _c, _c1;\n$RefreshReg$(_c, \"PromptCardList\");\n$RefreshReg$(_c1, \"Feed\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRmVlZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUN5QztBQUNKO0FBQ047QUFFL0IsTUFBTUksaUJBQWlCO1FBQUMsRUFBQ0MsSUFBSSxFQUFFQyxjQUFjLEVBQUU7SUFDN0MscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1pILEtBQUtJLEdBQUcsQ0FBQyxDQUFDQzswQkFDVCw4REFBQ1Isb0RBQVVBO2dCQUVUUSxNQUFNQTtnQkFDTkosZ0JBQWdCQTtlQUZYSSxLQUFLQyxHQUFHOzs7OztRQUlqQjs7Ozs7O0FBR047S0FaTVA7QUFhTixNQUFNUSxPQUFPOztJQUNYLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHZCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRTNDLE1BQU0sQ0FBQ2UsWUFBWUMsY0FBYyxHQUFHaEIsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDaUIsZUFBZUMsaUJBQWlCLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLENBQUNtQixpQkFBaUJDLGlCQUFpQixHQUFHcEIsK0NBQVFBLENBQUMsRUFBRTtJQUV2RCxNQUFNcUIsYUFBYTtRQUNqQixNQUFNQyxXQUFXLE1BQU1DLE1BQU07UUFDN0IsTUFBTWxCLE9BQU8sTUFBTWlCLFNBQVNFLElBQUk7UUFFaENWLFlBQVlUO0lBQ2Q7SUFDQUosZ0RBQVNBLENBQUM7UUFDUm9CO0lBRUYsR0FBRSxFQUFFO0lBRUosTUFBTUksZ0JBQWdCLENBQUNWO1FBQ3JCLE1BQU1XLFFBQVEsSUFBSUMsT0FBT1osWUFBWTtRQUNyQyxPQUFPRixTQUFTZSxNQUFNLENBQ2xCLENBQUNDLE9BQ0NILE1BQU1JLElBQUksQ0FBQ0QsS0FBS0UsT0FBTyxDQUFDQyxRQUFRLEtBQ2hDTixNQUFNSSxJQUFJLENBQUNELEtBQUtJLEdBQUcsS0FDbkJQLE1BQU1JLElBQUksQ0FBQ0QsS0FBS0ssTUFBTTtJQUU5QjtJQUNBLE1BQU1DLHFCQUFxQixDQUFDQztRQUMxQkMsYUFBYXBCO1FBQ2JDO0lBQ0Y7SUFDQSxxQkFDRSw4REFBQ29CO1FBQVE5QixXQUFVO2tCQUNqQiw0RUFBQytCO1lBQUsvQixXQUFVO3NCQUNkLDRFQUFDZ0M7Z0JBQ0NDLE1BQUs7Z0JBQ0xDLGFBQVk7Z0JBQ1pDLE9BQU81QjtnQkFDUDZCLFVBQVVUO2dCQUNWVSxRQUFRO2dCQUNSckMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7OztBQUtwQjtHQTdDTUk7TUFBQUE7QUErQ04sK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GZWVkLmpzeD84OTEwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvbXB0Q2FyZCBmcm9tICcuL1Byb21wdENhcmQnXHJcbmltcG9ydCB7IHNldCB9IGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IFByb21wdENhcmRMaXN0ID0gKHtkYXRhLCBoYW5kbGVUYWdDbGljayB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdtdC0xNiBwcm9tcHRfbGF5b3V0Jz5cclxuICAgICAge2RhdGEubWFwKChwb3N0KSA9PiB7XHJcbiAgICAgICAgPFByb21wdENhcmRcclxuICAgICAgICAgIGtleT17cG9zdC5faWR9XHJcbiAgICAgICAgICBwb3N0PXtwb3N0fVxyXG4gICAgICAgICAgaGFuZGxlVGFnQ2xpY2s9e2hhbmRsZVRhZ0NsaWNrfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIH0pfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbmNvbnN0IEZlZWQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2FsbFBvc3RzLCBzZXRBbGxQb3N0c10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgY29uc3QgW3NlYXJjaFRleHQsIHNldFNlYXJjaFRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3NlYXJjaFRpbWVPdXQsIHNldFNlYXJjaFRpbWVPdXRdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbc2VhcmNoZWRSZXN1bHRzLCBzZXRTZWFyY2hSZXN1bHRzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hQb3N0cyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL3Byb21wdFwiKVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG5cclxuICAgIHNldEFsbFBvc3RzKGRhdGEpXHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaFBvc3RzKClcclxuICBcclxuICB9LFtdKTtcclxuXHJcbiAgY29uc3QgZmlsdGVyUHJvbXB0cyA9IChzZWFyY2hUZXh0KSA9PiB7XHJcbiAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoc2VhcmNoVGV4dCwgXCJpXCIpO1xyXG4gICAgcmV0dXJuIGFsbFBvc3RzLmZpbHRlcihcclxuICAgICAgICAoaXRlbSkgPT4gXHJcbiAgICAgICAgICByZWdleC50ZXN0KGl0ZW0uY3JlYXRvci51c2VybmFtZSkgfHxcclxuICAgICAgICAgIHJlZ2V4LnRlc3QoaXRlbS50YWcpIHx8XHJcbiAgICAgICAgICByZWdleC50ZXN0KGl0ZW0ucHJvbXB0KVxyXG4gICAgKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjbGVhclRpbWVvdXQoc2VhcmNoVGltZU91dCk7XHJcbiAgICBzZXRTZWFyY2hUaW1lT3V0XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2ZlZWQnPlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgZmxleC1jZW50ZXJcIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdTZWFyY2ggZm9yIGEgdGFnIG9yIGEgdXNlcm5hbWUnXHJcbiAgICAgICAgICB2YWx1ZT17c2VhcmNoVGV4dH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2hDaGFuZ2V9XHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdzZWFyY2hfaW5wdXQgcGVlcidcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGZWVkXHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlByb21wdENhcmQiLCJzZXQiLCJQcm9tcHRDYXJkTGlzdCIsImRhdGEiLCJoYW5kbGVUYWdDbGljayIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInBvc3QiLCJfaWQiLCJGZWVkIiwiYWxsUG9zdHMiLCJzZXRBbGxQb3N0cyIsInNlYXJjaFRleHQiLCJzZXRTZWFyY2hUZXh0Iiwic2VhcmNoVGltZU91dCIsInNldFNlYXJjaFRpbWVPdXQiLCJzZWFyY2hlZFJlc3VsdHMiLCJzZXRTZWFyY2hSZXN1bHRzIiwiZmV0Y2hQb3N0cyIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiZmlsdGVyUHJvbXB0cyIsInJlZ2V4IiwiUmVnRXhwIiwiZmlsdGVyIiwiaXRlbSIsInRlc3QiLCJjcmVhdG9yIiwidXNlcm5hbWUiLCJ0YWciLCJwcm9tcHQiLCJoYW5kbGVTZWFyY2hDaGFuZ2UiLCJlIiwiY2xlYXJUaW1lb3V0Iiwic2VjdGlvbiIsImZvcm0iLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJyZXF1aXJlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Feed.jsx\n"));

/***/ })

});