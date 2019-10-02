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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2545291648", [hoverBG, activeColor, color, backgroundColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2545291648",
    dynamic: [hoverBG, activeColor, color, backgroundColor],
    __self: this
  }, "button.__jsx-style-dynamic-selector{background-position:center;-webkit-transition:background 0.8s;transition:background 0.8s;display:inline-block;}button.__jsx-style-dynamic-selector:hover{background:".concat(hoverBG, " center/15000%;}button.__jsx-style-dynamic-selector:active{background-color:").concat(activeColor, ";background-size:100%;-webkit-transition:background 0s;transition:background 0s;}button.__jsx-style-dynamic-selector{border:none;border-radius:2px;padding:12px 18px;font-size:16px;text-transform:uppercase;cursor:pointer;color:").concat(color, ";background-color:").concat(backgroundColor, ";outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYXJveC9Eb2N1bWVudHMvbGVzc29uL2NvbXBvbmVudHMvYnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Ca0IsQUFHc0MsQUFLMkIsQUFHUixBQU9sQyxZQUNNLGVBZlMsR0FnQlQsZ0JBUkcsRUFTTixNQVpqQixTQWEyQixJQVRBLHFCQVVWLENBbEJNLGNBbUJjLE9BbEJyQyxlQVFBLGFBV2dELDhDQUNqQyxhQUNmIiwiZmlsZSI6Ii9Vc2Vycy9nYXJveC9Eb2N1bWVudHMvbGVzc29uL2NvbXBvbmVudHMvYnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbG9yIGZyb20gXCJjb2xvclwiO1xuXG5leHBvcnQgZGVmYXVsdCAoe1xuICBiYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZjk4MDBcIixcbiAgY29sb3IgPSBcIndoaXRlXCIsXG4gIGNoaWxkcmVuLFxuICBvbkNsaWNrXG59KSA9PiB7XG4gIGNvbnN0IGhvdmVyQ29sb3IgPSBDb2xvcihiYWNrZ3JvdW5kQ29sb3IpXG4gICAgLmxpZ2h0ZW4oMC4xNSlcbiAgICAuaGV4KCk7XG4gIGNvbnN0IGhvdmVyQkcgPSBgJHtob3ZlckNvbG9yfSByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCB0cmFuc3BhcmVudCAxJSwgJHtob3ZlckNvbG9yfSAxJSlgO1xuICBjb25zdCBhY3RpdmVDb2xvciA9IENvbG9yKGJhY2tncm91bmRDb2xvcilcbiAgICAubGlnaHRlbigwLjQpXG4gICAgLmhleCgpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2t9PntjaGlsZHJlbn08L2J1dHRvbj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjhzO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuICAgICAgICBidXR0b246aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7aG92ZXJCR30gY2VudGVyLzE1MDAwJTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246YWN0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2FjdGl2ZUNvbG9yfTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIEJ1dHRvbiBzdHlsZSAqL1xuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgcGFkZGluZzogMTJweCAxOHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBjb2xvcjogJHtjb2xvcn07XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtiYWNrZ3JvdW5kQ29sb3J9O1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG4iXX0= */\n/*@ sourceURL=/Users/garox/Documents/lesson/components/button.js */")));
});

/***/ })

})
//# sourceMappingURL=index.js.0e0445c06062503197df.hot-update.js.map