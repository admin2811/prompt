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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PromptCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PromptCard */ \"(app-pages-browser)/./components/PromptCard.jsx\");\n/* harmony import */ var _PromptCard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_PromptCard__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ \"(app-pages-browser)/./node_modules/mongoose/dist/browser.umd.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst PromptCardList = (param)=>{\n    let { data, handleTagClick } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-16 prompt_layout\",\n        children: data.map((post)=>{\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_PromptCard__WEBPACK_IMPORTED_MODULE_2___default()), {\n                post: post,\n                handleTagClick: handleTagClick\n            }, post._id, false, {\n                fileName: \"D:\\\\NextJS\\\\promptopia\\\\components\\\\Feed.jsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"D:\\\\NextJS\\\\promptopia\\\\components\\\\Feed.jsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n_c = PromptCardList;\nconst Feed = ()=>{\n    _s();\n    const [allPosts, setAllPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [searchText, setSearchText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [searchTimeOut, setSearchTimeOut] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [searchedResults, setSearchResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const fetchPosts = async ()=>{\n        const response = await fetch(\"/api/prompt\");\n        const data = await response.json();\n        setAllPosts(data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchPosts();\n    }, []);\n    const filterPrompts = (searchText)=>{\n        const regex = new RegExp(searchText, \"i\");\n        return allPosts.filter((item)=>regex.test(item.creator.username) || regex.test(item.tag) || regex.test(item.prompt));\n    };\n    const handleSearchChange = (e)=>{\n        clearTimeout(searchTimeOut);\n        setSearchText(e.target.value);\n        setSearchTimeOut(setTimeout(()=>{\n            const searchedResults = filterPrompts(e.target.value);\n            setSearchResults(searchedResults);\n        }, 500));\n    };\n    const handleTagClick = (tagName)=>{\n        setSearchText(tagName);\n        const searchedResults = filterPrompts(tagName);\n        setSearchResults(searchedResults);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"feed\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \"relative w-full flex-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Search for a tag or a username\",\n                value: searchText,\n                onChange: handleSearchChange,\n                required: true,\n                className: \"search_input peer\"\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJS\\\\promptopia\\\\components\\\\Feed.jsx\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\NextJS\\\\promptopia\\\\components\\\\Feed.jsx\",\n            lineNumber: 65,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\NextJS\\\\promptopia\\\\components\\\\Feed.jsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Feed, \"ZAb6avqA3ZTjYcbrnu4YK4YRKIU=\");\n_c1 = Feed;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Feed);\nvar _c, _c1;\n$RefreshReg$(_c, \"PromptCardList\");\n$RefreshReg$(_c1, \"Feed\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRmVlZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUN5QztBQUNKO0FBQ047QUFFL0IsTUFBTUksaUJBQWlCO1FBQUMsRUFBQ0MsSUFBSSxFQUFFQyxjQUFjLEVBQUU7SUFDN0MscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1pILEtBQUtJLEdBQUcsQ0FBQyxDQUFDQzswQkFDVCw4REFBQ1Isb0RBQVVBO2dCQUVUUSxNQUFNQTtnQkFDTkosZ0JBQWdCQTtlQUZYSSxLQUFLQyxHQUFHOzs7OztRQUlqQjs7Ozs7O0FBR047S0FaTVA7QUFhTixNQUFNUSxPQUFPOztJQUNYLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHZCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRTNDLE1BQU0sQ0FBQ2UsWUFBWUMsY0FBYyxHQUFHaEIsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDaUIsZUFBZUMsaUJBQWlCLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLENBQUNtQixpQkFBaUJDLGlCQUFpQixHQUFHcEIsK0NBQVFBLENBQUMsRUFBRTtJQUV2RCxNQUFNcUIsYUFBYTtRQUNqQixNQUFNQyxXQUFXLE1BQU1DLE1BQU07UUFDN0IsTUFBTWxCLE9BQU8sTUFBTWlCLFNBQVNFLElBQUk7UUFFaENWLFlBQVlUO0lBQ2Q7SUFDQUosZ0RBQVNBLENBQUM7UUFDUm9CO0lBRUYsR0FBRSxFQUFFO0lBRUosTUFBTUksZ0JBQWdCLENBQUNWO1FBQ3JCLE1BQU1XLFFBQVEsSUFBSUMsT0FBT1osWUFBWTtRQUNyQyxPQUFPRixTQUFTZSxNQUFNLENBQ2xCLENBQUNDLE9BQ0NILE1BQU1JLElBQUksQ0FBQ0QsS0FBS0UsT0FBTyxDQUFDQyxRQUFRLEtBQ2hDTixNQUFNSSxJQUFJLENBQUNELEtBQUtJLEdBQUcsS0FDbkJQLE1BQU1JLElBQUksQ0FBQ0QsS0FBS0ssTUFBTTtJQUU5QjtJQUNBLE1BQU1DLHFCQUFxQixDQUFDQztRQUMxQkMsYUFBYXBCO1FBQ2JELGNBQWNvQixFQUFFRSxNQUFNLENBQUNDLEtBQUs7UUFFNUJyQixpQkFDRXNCLFdBQVc7WUFDVCxNQUFNckIsa0JBQWtCTSxjQUFjVyxFQUFFRSxNQUFNLENBQUNDLEtBQUs7WUFDcERuQixpQkFBaUJEO1FBQ25CLEdBQUU7SUFFTjtJQUVBLE1BQU1iLGlCQUFpQixDQUFDbUM7UUFDdEJ6QixjQUFjeUI7UUFDZCxNQUFNdEIsa0JBQWtCTSxjQUFjZ0I7UUFDdENyQixpQkFBaUJEO0lBQ25CO0lBQ0EscUJBQ0UsOERBQUN1QjtRQUFRbEMsV0FBVTtrQkFDakIsNEVBQUNtQztZQUFLbkMsV0FBVTtzQkFDZCw0RUFBQ29DO2dCQUNDQyxNQUFLO2dCQUNMQyxhQUFZO2dCQUNaUCxPQUFPeEI7Z0JBQ1BnQyxVQUFVWjtnQkFDVmEsUUFBUTtnQkFDUnhDLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEI7R0ExRE1JO01BQUFBO0FBNEROLCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRmVlZC5qc3g/ODkxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb21wdENhcmQgZnJvbSAnLi9Qcm9tcHRDYXJkJ1xyXG5pbXBvcnQgeyBzZXQgfSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCBQcm9tcHRDYXJkTGlzdCA9ICh7ZGF0YSwgaGFuZGxlVGFnQ2xpY2sgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtMTYgcHJvbXB0X2xheW91dCc+XHJcbiAgICAgIHtkYXRhLm1hcCgocG9zdCkgPT4ge1xyXG4gICAgICAgIDxQcm9tcHRDYXJkXHJcbiAgICAgICAgICBrZXk9e3Bvc3QuX2lkfVxyXG4gICAgICAgICAgcG9zdD17cG9zdH1cclxuICAgICAgICAgIGhhbmRsZVRhZ0NsaWNrPXtoYW5kbGVUYWdDbGlja31cclxuICAgICAgICAvPlxyXG4gICAgICB9KX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5jb25zdCBGZWVkID0gKCkgPT4ge1xyXG4gIGNvbnN0IFthbGxQb3N0cywgc2V0QWxsUG9zdHNdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gIGNvbnN0IFtzZWFyY2hUZXh0LCBzZXRTZWFyY2hUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzZWFyY2hUaW1lT3V0LCBzZXRTZWFyY2hUaW1lT3V0XSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3NlYXJjaGVkUmVzdWx0cywgc2V0U2VhcmNoUmVzdWx0c10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IGZldGNoUG9zdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9wcm9tcHRcIilcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuXHJcbiAgICBzZXRBbGxQb3N0cyhkYXRhKVxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hQb3N0cygpXHJcbiAgXHJcbiAgfSxbXSk7XHJcblxyXG4gIGNvbnN0IGZpbHRlclByb21wdHMgPSAoc2VhcmNoVGV4dCkgPT4ge1xyXG4gICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKHNlYXJjaFRleHQsIFwiaVwiKTtcclxuICAgIHJldHVybiBhbGxQb3N0cy5maWx0ZXIoXHJcbiAgICAgICAgKGl0ZW0pID0+IFxyXG4gICAgICAgICAgcmVnZXgudGVzdChpdGVtLmNyZWF0b3IudXNlcm5hbWUpIHx8XHJcbiAgICAgICAgICByZWdleC50ZXN0KGl0ZW0udGFnKSB8fFxyXG4gICAgICAgICAgcmVnZXgudGVzdChpdGVtLnByb21wdClcclxuICAgICk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVTZWFyY2hDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY2xlYXJUaW1lb3V0KHNlYXJjaFRpbWVPdXQpO1xyXG4gICAgc2V0U2VhcmNoVGV4dChlLnRhcmdldC52YWx1ZSlcclxuXHJcbiAgICBzZXRTZWFyY2hUaW1lT3V0KFxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBzZWFyY2hlZFJlc3VsdHMgPSBmaWx0ZXJQcm9tcHRzKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgIHNldFNlYXJjaFJlc3VsdHMoc2VhcmNoZWRSZXN1bHRzKVxyXG4gICAgICB9LDUwMClcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVGFnQ2xpY2sgPSAodGFnTmFtZSkgPT4ge1xyXG4gICAgc2V0U2VhcmNoVGV4dCh0YWdOYW1lKVxyXG4gICAgY29uc3Qgc2VhcmNoZWRSZXN1bHRzID0gZmlsdGVyUHJvbXB0cyh0YWdOYW1lKVxyXG4gICAgc2V0U2VhcmNoUmVzdWx0cyhzZWFyY2hlZFJlc3VsdHMpXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2ZlZWQnPlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgZmxleC1jZW50ZXJcIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdTZWFyY2ggZm9yIGEgdGFnIG9yIGEgdXNlcm5hbWUnXHJcbiAgICAgICAgICB2YWx1ZT17c2VhcmNoVGV4dH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2hDaGFuZ2V9XHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdzZWFyY2hfaW5wdXQgcGVlcidcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGZWVkXHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlByb21wdENhcmQiLCJzZXQiLCJQcm9tcHRDYXJkTGlzdCIsImRhdGEiLCJoYW5kbGVUYWdDbGljayIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInBvc3QiLCJfaWQiLCJGZWVkIiwiYWxsUG9zdHMiLCJzZXRBbGxQb3N0cyIsInNlYXJjaFRleHQiLCJzZXRTZWFyY2hUZXh0Iiwic2VhcmNoVGltZU91dCIsInNldFNlYXJjaFRpbWVPdXQiLCJzZWFyY2hlZFJlc3VsdHMiLCJzZXRTZWFyY2hSZXN1bHRzIiwiZmV0Y2hQb3N0cyIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiZmlsdGVyUHJvbXB0cyIsInJlZ2V4IiwiUmVnRXhwIiwiZmlsdGVyIiwiaXRlbSIsInRlc3QiLCJjcmVhdG9yIiwidXNlcm5hbWUiLCJ0YWciLCJwcm9tcHQiLCJoYW5kbGVTZWFyY2hDaGFuZ2UiLCJlIiwiY2xlYXJUaW1lb3V0IiwidGFyZ2V0IiwidmFsdWUiLCJzZXRUaW1lb3V0IiwidGFnTmFtZSIsInNlY3Rpb24iLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInJlcXVpcmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Feed.jsx\n"));

/***/ })

});