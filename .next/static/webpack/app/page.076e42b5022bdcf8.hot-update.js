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

/***/ "(app-client)/./src/components/navbar.tsx":
/*!***********************************!*\
  !*** ./src/components/navbar.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Navbar = ()=>{\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)();\n    const todosFilter = searchParams.get(\"todos\");\n    console.log(\"navbar \" + todosFilter);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                className: todosFilter === null ? \"active\" : \"\",\n                children: \" All  \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\world\\\\OneDrive\\\\Desktop\\\\wealth - todo -task\\\\todo_task_2\\\\src\\\\components\\\\navbar.tsx\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/?todos=active\",\n                className: todosFilter === \"active\" ? \"active\" : \"\",\n                children: \" Active  \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\world\\\\OneDrive\\\\Desktop\\\\wealth - todo -task\\\\todo_task_2\\\\src\\\\components\\\\navbar.tsx\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/?todos=completed\",\n                className: todosFilter === \"completed\" ? \"active\" : \"\",\n                children: \" Completed \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\world\\\\OneDrive\\\\Desktop\\\\wealth - todo -task\\\\todo_task_2\\\\src\\\\components\\\\navbar.tsx\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\world\\\\OneDrive\\\\Desktop\\\\wealth - todo -task\\\\todo_task_2\\\\src\\\\components\\\\navbar.tsx\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Navbar, \"a+DZx9DY26Zf8FVy1bxe3vp9l1w=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUM2QjtBQUNxQjtBQUNsRCxNQUFNRSxTQUFTOztJQUVYLE1BQU1DLGVBQWVGLGdFQUFlQTtJQUNwQyxNQUFNRyxjQUFjRCxhQUFhRSxJQUFJO0lBQ3JDQyxRQUFRQyxJQUFJLFlBQVlIO0lBRXhCLHFCQUNJLDhEQUFDSTs7MEJBQ0csOERBQUNSLGtEQUFJQTtnQkFBQ1MsTUFBSztnQkFBSUMsV0FBVyxnQkFBaUIsT0FBUSxXQUFXOzBCQUFJOzs7Ozs7MEJBQ2xFLDhEQUFDVixrREFBSUE7Z0JBQUNTLE1BQUs7Z0JBQWlCQyxXQUFXTixnQkFBZ0IsV0FBVyxXQUFXOzBCQUFJOzs7Ozs7MEJBQ2pGLDhEQUFDSixrREFBSUE7Z0JBQUNTLE1BQUs7Z0JBQW9CQyxXQUFXTixnQkFBZ0IsY0FBYyxXQUFXOzBCQUFJOzs7Ozs7Ozs7Ozs7QUFHbkc7R0FiTUY7O1FBRW1CRCw0REFBZUE7OztLQUZsQ0M7QUFlTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9uYXZiYXIudHN4PzVmN2YiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKCk7XHJcbiAgICBjb25zdCB0b2Rvc0ZpbHRlciA9IHNlYXJjaFBhcmFtcy5nZXQoXCJ0b2Rvc1wiKVxyXG4gICAgY29uc29sZS5sb2coJ25hdmJhciAnICsgdG9kb3NGaWx0ZXIpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2ID5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9eyh0b2Rvc0ZpbHRlciA9PT0gbnVsbCkgPyBcImFjdGl2ZVwiIDogXCJcIn0+IEFsbCAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiLz90b2Rvcz1hY3RpdmVcIiBjbGFzc05hbWU9e3RvZG9zRmlsdGVyID09PSAnYWN0aXZlJyA/IFwiYWN0aXZlXCIgOiBcIlwifT4gQWN0aXZlICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvP3RvZG9zPWNvbXBsZXRlZFwiIGNsYXNzTmFtZT17dG9kb3NGaWx0ZXIgPT09ICdjb21wbGV0ZWQnID8gXCJhY3RpdmVcIiA6IFwiXCJ9PiBDb21wbGV0ZWQgPC9MaW5rPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjsiXSwibmFtZXMiOlsiTGluayIsInVzZVNlYXJjaFBhcmFtcyIsIk5hdmJhciIsInNlYXJjaFBhcmFtcyIsInRvZG9zRmlsdGVyIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsIm5hdiIsImhyZWYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/components/navbar.tsx\n"));

/***/ })

});