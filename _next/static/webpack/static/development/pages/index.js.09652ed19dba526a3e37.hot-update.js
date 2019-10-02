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
      inside = _ref.inside,
      onClick = _ref.onClick;
  var hoverColor = color__WEBPACK_IMPORTED_MODULE_2___default()(backgroundColor).lighten(0.15).hex();
  var hoverBG = "".concat(hoverColor, " radial-gradient(circle, transparent 1%, ").concat(hoverColor, " 1%)");
  var activeColor = color__WEBPACK_IMPORTED_MODULE_2___default()(backgroundColor).lighten(0.4).hex();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("button", {
    onClick: onClick,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1337995124", [hoverBG, activeColor, color, backgroundColor]]]) + " " + ((inside ? "inside" : "") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1337995124",
    dynamic: [hoverBG, activeColor, color, backgroundColor],
    __self: this
  }, "button.__jsx-style-dynamic-selector{background-position:center;-webkit-transition:background 0.8s;transition:background 0.8s;display:inline-block;}button.__jsx-style-dynamic-selector:hover{background:".concat(hoverBG, " center/15000%;}button.__jsx-style-dynamic-selector:active{background-color:").concat(activeColor, ";background-size:100%;-webkit-transition:background 0s;transition:background 0s;}.inside.__jsx-style-dynamic-selector{margin-left:-50px;}button.__jsx-style-dynamic-selector{border:none;border-radius:2px;padding:12px 24px;font-size:16px;text-transform:uppercase;cursor:pointer;color:").concat(color, ";background-color:").concat(backgroundColor, ";outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYXJveC9Eb2N1bWVudHMvbGVzc29uL2NvbXBvbmVudHMvYnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCa0IsQUFHc0MsQUFLMkIsQUFHUixBQUs1QixBQUtOLFlBQ00sTUFMcEIsU0FiNkIsR0FtQlQsZ0JBWEcsRUFZTixNQWZqQixTQWdCMkIsSUFaQSxxQkFhVixDQXJCTSxjQXNCYyxPQXJCckMsZUFRQSxhQWNnRCw4Q0FDakMsYUFDZiIsImZpbGUiOiIvVXNlcnMvZ2Fyb3gvRG9jdW1lbnRzL2xlc3Nvbi9jb21wb25lbnRzL2J1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb2xvciBmcm9tIFwiY29sb3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgYmFja2dyb3VuZENvbG9yID0gXCIjZmY5ODAwXCIsXG4gIGNvbG9yID0gXCJ3aGl0ZVwiLFxuICBjaGlsZHJlbixcbiAgaW5zaWRlLFxuICBvbkNsaWNrXG59KSA9PiB7XG4gIGNvbnN0IGhvdmVyQ29sb3IgPSBDb2xvcihiYWNrZ3JvdW5kQ29sb3IpXG4gICAgLmxpZ2h0ZW4oMC4xNSlcbiAgICAuaGV4KCk7XG4gIGNvbnN0IGhvdmVyQkcgPSBgJHtob3ZlckNvbG9yfSByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCB0cmFuc3BhcmVudCAxJSwgJHtob3ZlckNvbG9yfSAxJSlgO1xuICBjb25zdCBhY3RpdmVDb2xvciA9IENvbG9yKGJhY2tncm91bmRDb2xvcilcbiAgICAubGlnaHRlbigwLjQpXG4gICAgLmhleCgpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17aW5zaWRlID8gXCJpbnNpZGVcIiA6IFwiXCJ9IG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjhzO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuICAgICAgICBidXR0b246aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7aG92ZXJCR30gY2VudGVyLzE1MDAwJTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246YWN0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2FjdGl2ZUNvbG9yfTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwcztcbiAgICAgICAgfVxuICAgICAgICAuaW5zaWRlIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogLTUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBCdXR0b24gc3R5bGUgKi9cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgIHBhZGRpbmc6IDEycHggMjRweDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgY29sb3I6ICR7Y29sb3J9O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7YmFja2dyb3VuZENvbG9yfTtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59O1xuIl19 */\n/*@ sourceURL=/Users/garox/Documents/lesson/components/button.js */")));
});

/***/ })

})
//# sourceMappingURL=index.js.09652ed19dba526a3e37.hot-update.js.map