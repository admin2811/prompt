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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PromptCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PromptCard */ \"(app-pages-browser)/./components/PromptCard.jsx\");\n/* harmony import */ var _PromptCard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_PromptCard__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ \"(app-pages-browser)/./node_modules/mongoose/dist/browser.umd.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst PromptCardList = (param)=>{\n    let { data, handleTagClick } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-16 prompt_layout\",\n        children: data.map((post)=>{\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_PromptCard__WEBPACK_IMPORTED_MODULE_2___default()), {\n                post: post,\n                handleTagClick: handleTagClick\n            }, post._id, false, {\n                fileName: \"D:\\\\NextJS\\\\promptopia\\\\components\\\\Feed.jsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"D:\\\\NextJS\\\\promptopia\\\\components\\\\Feed.jsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n_c = PromptCardList;\nconst Feed = ()=>{\n    _s();\n    const [allPosts, setAllPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [searchText, setSearchText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [searchTimeOut, setSearchTimeOut] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [searchedResults, setSearchResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const fetchPosts = async ()=>{\n        const response = await fetch(\"/api/prompt\");\n        const data = await response.json();\n        setAllPosts(data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchPosts();\n    }, []);\n    const filterPrompts = (searchText)=>{\n        const regex = new RegExp(searchText, \"i\");\n        return allPosts.filter((item)=>regex.test(item.creator.username) || regex.test(item.tag) || regex.test(item.prompt));\n    };\n    const handleSearchChange = (e)=>{\n        clearTimeout(searchTimeOut);\n        setSearchText(e.target.value);\n        setSearchTimeOut(setTimeout);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"feed\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \"relative w-full flex-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Search for a tag or a username\",\n                value: searchText,\n                onChange: handleSearchChange,\n                required: true,\n                className: \"search_input peer\"\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJS\\\\promptopia\\\\components\\\\Feed.jsx\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\NextJS\\\\promptopia\\\\components\\\\Feed.jsx\",\n            lineNumber: 56,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\NextJS\\\\promptopia\\\\components\\\\Feed.jsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Feed, \"ZAb6avqA3ZTjYcbrnu4YK4YRKIU=\");\n_c1 = Feed;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Feed);\nvar _c, _c1;\n$RefreshReg$(_c, \"PromptCardList\");\n$RefreshReg$(_c1, \"Feed\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRmVlZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUN5QztBQUNKO0FBQ047QUFFL0IsTUFBTUksaUJBQWlCO1FBQUMsRUFBQ0MsSUFBSSxFQUFFQyxjQUFjLEVBQUU7SUFDN0MscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1pILEtBQUtJLEdBQUcsQ0FBQyxDQUFDQzswQkFDVCw4REFBQ1Isb0RBQVVBO2dCQUVUUSxNQUFNQTtnQkFDTkosZ0JBQWdCQTtlQUZYSSxLQUFLQyxHQUFHOzs7OztRQUlqQjs7Ozs7O0FBR047S0FaTVA7QUFhTixNQUFNUSxPQUFPOztJQUNYLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHZCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRTNDLE1BQU0sQ0FBQ2UsWUFBWUMsY0FBYyxHQUFHaEIsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDaUIsZUFBZUMsaUJBQWlCLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLENBQUNtQixpQkFBaUJDLGlCQUFpQixHQUFHcEIsK0NBQVFBLENBQUMsRUFBRTtJQUV2RCxNQUFNcUIsYUFBYTtRQUNqQixNQUFNQyxXQUFXLE1BQU1DLE1BQU07UUFDN0IsTUFBTWxCLE9BQU8sTUFBTWlCLFNBQVNFLElBQUk7UUFFaENWLFlBQVlUO0lBQ2Q7SUFDQUosZ0RBQVNBLENBQUM7UUFDUm9CO0lBRUYsR0FBRSxFQUFFO0lBRUosTUFBTUksZ0JBQWdCLENBQUNWO1FBQ3JCLE1BQU1XLFFBQVEsSUFBSUMsT0FBT1osWUFBWTtRQUNyQyxPQUFPRixTQUFTZSxNQUFNLENBQ2xCLENBQUNDLE9BQ0NILE1BQU1JLElBQUksQ0FBQ0QsS0FBS0UsT0FBTyxDQUFDQyxRQUFRLEtBQ2hDTixNQUFNSSxJQUFJLENBQUNELEtBQUtJLEdBQUcsS0FDbkJQLE1BQU1JLElBQUksQ0FBQ0QsS0FBS0ssTUFBTTtJQUU5QjtJQUNBLE1BQU1DLHFCQUFxQixDQUFDQztRQUMxQkMsYUFBYXBCO1FBQ2JELGNBQWNvQixFQUFFRSxNQUFNLENBQUNDLEtBQUs7UUFFNUJyQixpQkFDRXNCO0lBRUo7SUFDQSxxQkFDRSw4REFBQ0M7UUFBUWpDLFdBQVU7a0JBQ2pCLDRFQUFDa0M7WUFBS2xDLFdBQVU7c0JBQ2QsNEVBQUNtQztnQkFDQ0MsTUFBSztnQkFDTEMsYUFBWTtnQkFDWk4sT0FBT3hCO2dCQUNQK0IsVUFBVVg7Z0JBQ1ZZLFFBQVE7Z0JBQ1J2QyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7O0FBS3BCO0dBakRNSTtNQUFBQTtBQW1ETiwrREFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0ZlZWQuanN4Pzg5MTAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9tcHRDYXJkIGZyb20gJy4vUHJvbXB0Q2FyZCdcclxuaW1wb3J0IHsgc2V0IH0gZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgUHJvbXB0Q2FyZExpc3QgPSAoe2RhdGEsIGhhbmRsZVRhZ0NsaWNrIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J210LTE2IHByb21wdF9sYXlvdXQnPlxyXG4gICAgICB7ZGF0YS5tYXAoKHBvc3QpID0+IHtcclxuICAgICAgICA8UHJvbXB0Q2FyZFxyXG4gICAgICAgICAga2V5PXtwb3N0Ll9pZH1cclxuICAgICAgICAgIHBvc3Q9e3Bvc3R9XHJcbiAgICAgICAgICBoYW5kbGVUYWdDbGljaz17aGFuZGxlVGFnQ2xpY2t9XHJcbiAgICAgICAgLz5cclxuICAgICAgfSl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuY29uc3QgRmVlZCA9ICgpID0+IHtcclxuICBjb25zdCBbYWxsUG9zdHMsIHNldEFsbFBvc3RzXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICBjb25zdCBbc2VhcmNoVGV4dCwgc2V0U2VhcmNoVGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc2VhcmNoVGltZU91dCwgc2V0U2VhcmNoVGltZU91dF0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtzZWFyY2hlZFJlc3VsdHMsIHNldFNlYXJjaFJlc3VsdHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBmZXRjaFBvc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvcHJvbXB0XCIpXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcblxyXG4gICAgc2V0QWxsUG9zdHMoZGF0YSlcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoUG9zdHMoKVxyXG4gIFxyXG4gIH0sW10pO1xyXG5cclxuICBjb25zdCBmaWx0ZXJQcm9tcHRzID0gKHNlYXJjaFRleHQpID0+IHtcclxuICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChzZWFyY2hUZXh0LCBcImlcIik7XHJcbiAgICByZXR1cm4gYWxsUG9zdHMuZmlsdGVyKFxyXG4gICAgICAgIChpdGVtKSA9PiBcclxuICAgICAgICAgIHJlZ2V4LnRlc3QoaXRlbS5jcmVhdG9yLnVzZXJuYW1lKSB8fFxyXG4gICAgICAgICAgcmVnZXgudGVzdChpdGVtLnRhZykgfHxcclxuICAgICAgICAgIHJlZ2V4LnRlc3QoaXRlbS5wcm9tcHQpXHJcbiAgICApO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNsZWFyVGltZW91dChzZWFyY2hUaW1lT3V0KTtcclxuICAgIHNldFNlYXJjaFRleHQoZS50YXJnZXQudmFsdWUpXHJcblxyXG4gICAgc2V0U2VhcmNoVGltZU91dChcclxuICAgICAgc2V0VGltZW91dFxyXG4gICAgKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdmZWVkJz5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIGZsZXgtY2VudGVyXCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nU2VhcmNoIGZvciBhIHRhZyBvciBhIHVzZXJuYW1lJ1xyXG4gICAgICAgICAgdmFsdWU9e3NlYXJjaFRleHR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VhcmNoQ2hhbmdlfVxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIGNsYXNzTmFtZT0nc2VhcmNoX2lucHV0IHBlZXInXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmVlZFxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJQcm9tcHRDYXJkIiwic2V0IiwiUHJvbXB0Q2FyZExpc3QiLCJkYXRhIiwiaGFuZGxlVGFnQ2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJwb3N0IiwiX2lkIiwiRmVlZCIsImFsbFBvc3RzIiwic2V0QWxsUG9zdHMiLCJzZWFyY2hUZXh0Iiwic2V0U2VhcmNoVGV4dCIsInNlYXJjaFRpbWVPdXQiLCJzZXRTZWFyY2hUaW1lT3V0Iiwic2VhcmNoZWRSZXN1bHRzIiwic2V0U2VhcmNoUmVzdWx0cyIsImZldGNoUG9zdHMiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsImZpbHRlclByb21wdHMiLCJyZWdleCIsIlJlZ0V4cCIsImZpbHRlciIsIml0ZW0iLCJ0ZXN0IiwiY3JlYXRvciIsInVzZXJuYW1lIiwidGFnIiwicHJvbXB0IiwiaGFuZGxlU2VhcmNoQ2hhbmdlIiwiZSIsImNsZWFyVGltZW91dCIsInRhcmdldCIsInZhbHVlIiwic2V0VGltZW91dCIsInNlY3Rpb24iLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInJlcXVpcmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Feed.jsx\n"));

/***/ })

});