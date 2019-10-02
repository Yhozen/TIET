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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1358649314", [hoverBG, activeColor, color, backgroundColor]]]) + " " + ((inside ? "inside" : "") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1358649314",
    dynamic: [hoverBG, activeColor, color, backgroundColor],
    __self: this
  }, "button.__jsx-style-dynamic-selector{background-position:center;-webkit-transition:background 0.8s;transition:background 0.8s;display:inline-block;}button.__jsx-style-dynamic-selector:hover{background:".concat(hoverBG, " center/15000%;}button.__jsx-style-dynamic-selector:active{background-color:").concat(activeColor, ";background-size:100%;-webkit-transition:background 0s;transition:background 0s;}.inside.__jsx-style-dynamic-selector{margin-left:-96px;}button.__jsx-style-dynamic-selector{border:none;border-radius:2px;12px 36px;font-size:16px;text-transform:uppercase;cursor:pointer;color:").concat(color, ";background-color:").concat(backgroundColor, ";outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYXJveC9Eb2N1bWVudHMvbGVzc29uL2NvbXBvbmVudHMvYnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCa0IsQUFHc0MsQUFLMkIsQUFHUixBQUs1QixBQUtOLFlBQ00sTUFMcEIsU0FiNkIsR0FtQmxCLFVBQ00sTUFaTSxRQUh2QixDQWdCMkIsWUFaQSxhQWFWLFNBckJNLE1Bc0JjLGVBckJyQyxlQVFBLEtBY2dELDhDQUNqQyxhQUNmIiwiZmlsZSI6Ii9Vc2Vycy9nYXJveC9Eb2N1bWVudHMvbGVzc29uL2NvbXBvbmVudHMvYnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbG9yIGZyb20gXCJjb2xvclwiO1xuXG5leHBvcnQgZGVmYXVsdCAoe1xuICBiYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZjk4MDBcIixcbiAgY29sb3IgPSBcIndoaXRlXCIsXG4gIGNoaWxkcmVuLFxuICBpbnNpZGUsXG4gIG9uQ2xpY2tcbn0pID0+IHtcbiAgY29uc3QgaG92ZXJDb2xvciA9IENvbG9yKGJhY2tncm91bmRDb2xvcilcbiAgICAubGlnaHRlbigwLjE1KVxuICAgIC5oZXgoKTtcbiAgY29uc3QgaG92ZXJCRyA9IGAke2hvdmVyQ29sb3J9IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHRyYW5zcGFyZW50IDElLCAke2hvdmVyQ29sb3J9IDElKWA7XG4gIGNvbnN0IGFjdGl2ZUNvbG9yID0gQ29sb3IoYmFja2dyb3VuZENvbG9yKVxuICAgIC5saWdodGVuKDAuNClcbiAgICAuaGV4KCk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtpbnNpZGUgPyBcImluc2lkZVwiIDogXCJcIn0gb25DbGljaz17b25DbGlja30+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuOHM7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtob3ZlckJHfSBjZW50ZXIvMTUwMDAlO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjphY3RpdmUge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7YWN0aXZlQ29sb3J9O1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDBzO1xuICAgICAgICB9XG4gICAgICAgIC5pbnNpZGUge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtOTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIEJ1dHRvbiBzdHlsZSAqL1xuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgMTJweCAzNnB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBjb2xvcjogJHtjb2xvcn07XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtiYWNrZ3JvdW5kQ29sb3J9O1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG4iXX0= */\n/*@ sourceURL=/Users/garox/Documents/lesson/components/button.js */")));
});

/***/ })

})
//# sourceMappingURL=index.js.9dcde42b6e4e0dcc9ecc.hot-update.js.map