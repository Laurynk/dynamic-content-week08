"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/carouselPage",{

/***/ "./components/carousel/index.js":
/*!**************************************!*\
  !*** ./components/carousel/index.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Carousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _carousel_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carousel.module.css */ \"./components/carousel/carousel.module.css\");\n/* harmony import */ var _carousel_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_carousel_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Carousel() {\n    _s();\n    const [img, setImg] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const changeImage = (change)=>{\n        if (change == \"backward\") {\n            setImg(img - 1);\n            if (img == 0) {\n                setImg(5);\n            }\n            console.log(img);\n        } else if (change == \"forward\") {\n            setImg(img + 1);\n            if (img == 5) {\n                setImg(0);\n            }\n            console.log(img);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_carousel_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    backgroundImage: \"url(/carousel-images/\" + img + \".jpg)\",\n                    backgroundSize: \"cover\",\n                    backgroundRepeat: \"no-repeat\",\n                    width: 500,\n                    height: 300\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        className: (_carousel_module_css__WEBPACK_IMPORTED_MODULE_3___default().left),\n                        src: \"/icons/leftArrow.png\",\n                        alt: \"/icons/leftArrow.png\",\n                        width: 100,\n                        height: 100,\n                        onClick: ()=>changeImage(\"backward\")\n                    }, void 0, false, {\n                        fileName: \"/Users/lauryn/Desktop/dynamic-content-week08/components/carousel/index.js\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        className: (_carousel_module_css__WEBPACK_IMPORTED_MODULE_3___default().right),\n                        src: \"/icons/rightArrow.png\",\n                        alt: \"/icons/rightArrow.png\",\n                        width: 100,\n                        height: 100,\n                        pa: true,\n                        onClick: ()=>changeImage(\"forward\")\n                    }, void 0, false, {\n                        fileName: \"/Users/lauryn/Desktop/dynamic-content-week08/components/carousel/index.js\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lauryn/Desktop/dynamic-content-week08/components/carousel/index.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/lauryn/Desktop/dynamic-content-week08/components/carousel/index.js\",\n            lineNumber: 26,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Carousel, \"/siAo2t6eQqXkQTZSYkwdYtZQQY=\");\n_c = Carousel;\nvar _c;\n$RefreshReg$(_c, \"Carousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Nhcm91c2VsL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ0E7QUFDWTtBQUUzQixTQUFTRyxXQUFXOztJQUMvQixNQUFNLENBQUNDLEtBQUtDLE9BQU8sR0FBR0osK0NBQVFBLENBQUM7SUFFL0IsTUFBTUssY0FBYyxDQUFDQyxTQUFXO1FBQzVCLElBQUlBLFVBQVUsWUFBWTtZQUN0QkYsT0FBT0QsTUFBTTtZQUViLElBQUlBLE9BQU8sR0FBRztnQkFDVkMsT0FBTztZQUNYLENBQUM7WUFDREcsUUFBUUMsR0FBRyxDQUFDTDtRQUNoQixPQUFPLElBQUlHLFVBQVUsV0FBVztZQUM1QkYsT0FBT0QsTUFBTTtZQUNiLElBQUdBLE9BQU8sR0FBRztnQkFDVEMsT0FBTztZQUNYLENBQUM7WUFDREcsUUFBUUMsR0FBRyxDQUFDTDtRQUNoQixDQUFDO0lBQ0w7SUFDQSxxQkFDSTtrQkFDQSw0RUFBQ007WUFBSUMsV0FBV1QsdUVBQWdCO3NCQUM1Qiw0RUFBQ1E7Z0JBQUlHLE9BQU87b0JBQ1JDLGlCQUFpQiwwQkFBMEJWLE1BQU07b0JBQ2pEVyxnQkFBZ0I7b0JBQ2hCQyxrQkFBa0I7b0JBQ2xCQyxPQUFPO29CQUNQQyxRQUFRO2dCQUNaOztrQ0FDSSw4REFBQ2xCLG1EQUFLQTt3QkFBQ1csV0FBV1Qsa0VBQVc7d0JBQ3pCa0IsS0FBSzt3QkFDTEMsS0FBSzt3QkFDTEosT0FBTzt3QkFDUEMsUUFBUTt3QkFDUkksU0FBUyxJQUFNaEIsWUFBWTs7Ozs7O2tDQUcvQiw4REFBQ04sbURBQUtBO3dCQUFDVyxXQUFXVCxtRUFBWTt3QkFDMUJrQixLQUFLO3dCQUNMQyxLQUFLO3dCQUNMSixPQUFPO3dCQUNQQyxRQUFRO3dCQUNSTSxFQUFFO3dCQUNGRixTQUFTLElBQU1oQixZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPL0MsQ0FBQztHQWxEdUJIO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2Fyb3VzZWwvaW5kZXguanM/ZjNiMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2Nhcm91c2VsLm1vZHVsZS5jc3NcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJvdXNlbCgpIHtcbiAgICBjb25zdCBbaW1nLCBzZXRJbWddID0gdXNlU3RhdGUoMCk7XG5cbiAgICBjb25zdCBjaGFuZ2VJbWFnZSA9IChjaGFuZ2UpID0+IHtcbiAgICAgICAgaWYgKGNoYW5nZSA9PSBcImJhY2t3YXJkXCIpIHtcbiAgICAgICAgICAgIHNldEltZyhpbWcgLSAxKTtcblxuICAgICAgICAgICAgaWYgKGltZyA9PSAwKSB7XG4gICAgICAgICAgICAgICAgc2V0SW1nKDUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coaW1nKTtcbiAgICAgICAgfSBlbHNlIGlmIChjaGFuZ2UgPT0gXCJmb3J3YXJkXCIpIHtcbiAgICAgICAgICAgIHNldEltZyhpbWcgKyAxKTtcbiAgICAgICAgICAgIGlmKGltZyA9PSA1KSB7XG4gICAgICAgICAgICAgICAgc2V0SW1nKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coaW1nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4oXG4gICAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC9jYXJvdXNlbC1pbWFnZXMvXCIgKyBpbWcgKyBcIi5qcGcpXCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MDAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0fVxuICAgICAgICAgICAgICAgICAgICBzcmM9e1wiL2ljb25zL2xlZnRBcnJvdy5wbmdcIn1cbiAgICAgICAgICAgICAgICAgICAgYWx0PXtcIi9pY29ucy9sZWZ0QXJyb3cucG5nXCJ9XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMDB9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17MTAwfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VJbWFnZShcImJhY2t3YXJkXCIpfVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHR9XG4gICAgICAgICAgICAgICAgICAgIHNyYz17XCIvaWNvbnMvcmlnaHRBcnJvdy5wbmdcIn1cbiAgICAgICAgICAgICAgICAgICAgYWx0PXtcIi9pY29ucy9yaWdodEFycm93LnBuZ1wifVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTAwfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwMH1cbiAgICAgICAgICAgICAgICAgICAgcGFcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlSW1hZ2UoXCJmb3J3YXJkXCIpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgPC8+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZVN0YXRlIiwic3R5bGVzIiwiQ2Fyb3VzZWwiLCJpbWciLCJzZXRJbWciLCJjaGFuZ2VJbWFnZSIsImNoYW5nZSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFJlcGVhdCIsIndpZHRoIiwiaGVpZ2h0IiwibGVmdCIsInNyYyIsImFsdCIsIm9uQ2xpY2siLCJyaWdodCIsInBhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/carousel/index.js\n"));

/***/ })

});