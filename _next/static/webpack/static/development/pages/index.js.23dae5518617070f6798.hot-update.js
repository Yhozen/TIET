webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/button.js":
/*!******************************!*\
  !*** ./components/button.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! color */ "./node_modules/color/index.js");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/garox/Documents/lesson/components/button.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$backgroundColor = _ref.backgroundColor,
      backgroundColor = _ref$backgroundColor === void 0 ? "#ff9800" : _ref$backgroundColor,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "white" : _ref$color,
      children = _ref.children,
      onClick = _ref.onClick;
  var hoverColor = color__WEBPACK_IMPORTED_MODULE_2___default()(backgroundColor).lighten(0.15).hex();
  var hoverBG = "".concat(hoverColor, " radial-gradient(circle, transparent 1%, ").concat(hoverColor, " 1%)");
  var activeColor = color__WEBPACK_IMPORTED_MODULE_2___default()(backgroundColor).lighten(0.4).hex();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("button", {
    onClick: onClick,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3475702051", [hoverBG, activeColor, color, backgroundColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3475702051",
    dynamic: [hoverBG, activeColor, color, backgroundColor],
    __self: this
  }, "button.__jsx-style-dynamic-selector{background-position:center;-webkit-transition:background 0.8s;transition:background 0.8s;display:inline-block;}button.__jsx-style-dynamic-selector:hover{background:".concat(hoverBG, " center/15000%;}button.__jsx-style-dynamic-selector:active{background-color:").concat(activeColor, ";background-size:100%;-webkit-transition:background 0s;transition:background 0s;}.inside.__jsx-style-dynamic-selector{margin-left:-96px;}button.__jsx-style-dynamic-selector{border:none;border-radius:2px;padding:12px 18px;font-size:16px;text-transform:uppercase;cursor:pointer;color:").concat(color, ";background-color:").concat(backgroundColor, ";outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYXJveC9Eb2N1bWVudHMvbGVzc29uL2NvbXBvbmVudHMvYnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Ca0IsQUFHc0MsQUFLMkIsQUFHUixBQUs1QixBQUtOLFlBQ00sTUFMcEIsU0FiNkIsR0FtQlQsZ0JBWEcsRUFZTixNQWZqQixTQWdCMkIsSUFaQSxxQkFhVixDQXJCTSxjQXNCYyxPQXJCckMsZUFRQSxhQWNnRCw4Q0FDakMsYUFDZiIsImZpbGUiOiIvVXNlcnMvZ2Fyb3gvRG9jdW1lbnRzL2xlc3Nvbi9jb21wb25lbnRzL2J1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb2xvciBmcm9tIFwiY29sb3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgYmFja2dyb3VuZENvbG9yID0gXCIjZmY5ODAwXCIsXG4gIGNvbG9yID0gXCJ3aGl0ZVwiLFxuICBjaGlsZHJlbixcbiAgb25DbGlja1xufSkgPT4ge1xuICBjb25zdCBob3ZlckNvbG9yID0gQ29sb3IoYmFja2dyb3VuZENvbG9yKVxuICAgIC5saWdodGVuKDAuMTUpXG4gICAgLmhleCgpO1xuICBjb25zdCBob3ZlckJHID0gYCR7aG92ZXJDb2xvcn0gcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgdHJhbnNwYXJlbnQgMSUsICR7aG92ZXJDb2xvcn0gMSUpYDtcbiAgY29uc3QgYWN0aXZlQ29sb3IgPSBDb2xvcihiYWNrZ3JvdW5kQ29sb3IpXG4gICAgLmxpZ2h0ZW4oMC40KVxuICAgIC5oZXgoKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrfT57Y2hpbGRyZW59PC9idXR0b24+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC44cztcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2hvdmVyQkd9IGNlbnRlci8xNTAwMCU7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmFjdGl2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHthY3RpdmVDb2xvcn07XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMHM7XG4gICAgICAgIH1cbiAgICAgICAgLmluc2lkZSB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC05NnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLyogQnV0dG9uIHN0eWxlICovXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDE4cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGNvbG9yOiAke2NvbG9yfTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2JhY2tncm91bmRDb2xvcn07XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApO1xufTtcbiJdfQ== */\n/*@ sourceURL=/Users/garox/Documents/lesson/components/button.js */")));
});

/***/ })

})
//# sourceMappingURL=index.js.23dae5518617070f6798.hot-update.js.map