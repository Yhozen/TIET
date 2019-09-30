webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/floatingIcon.js":
/*!************************************!*\
  !*** ./components/floatingIcon.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _n8tb1t_use_scroll_position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @n8tb1t/use-scroll-position */ "./node_modules/@n8tb1t/use-scroll-position/lib/index.js");
/* harmony import */ var _n8tb1t_use_scroll_position__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_n8tb1t_use_scroll_position__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/garox/Documents/lesson/components/floatingIcon.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? "white" : _ref$color;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      divClassName = _useState[0],
      setDivClassName = _useState[1];

  Object(_n8tb1t_use_scroll_position__WEBPACK_IMPORTED_MODULE_2__["useScrollPosition"])(function (_ref2) {
    var prevPos = _ref2.prevPos,
        currPos = _ref2.currPos;
    var isShow = currPos.y < -100;
    setDivClassName("none");
  });

  var onPress = function onPress() {
    return window.scrollTo(0, 500);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    onClick: onPress,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1155136897", [color]]]) + " " + (divClassName || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("svg", {
    viewBox: "0 0 24 24",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1155136897", [color]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("polygon", {
    points: "15.5,5 11,5 16,12 11,19 15.5,19 20.5,12 \t\t",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1155136897", [color]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx("polygon", {
    points: "8.5,5 4,5 9,12 4,19 8.5,19 13.5,12 \t\t",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1155136897", [color]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1155136897",
    dynamic: [color],
    __self: this
  }, "div.__jsx-style-dynamic-selector{position:fixed;width:60px;height:60px;bottom:20px;right:20px;z-index:1000;}.none.__jsx-style-dynamic-selector{display:none;}svg.__jsx-style-dynamic-selector{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);}polygon.__jsx-style-dynamic-selector{fill:".concat(color, ";box-shadow:0 0 0 0 rgba(0,0,0,1);-webkit-animation:pulse 1s ease infinite;-webkit-animation:pulse-__jsx-style-dynamic-selector 1s ease infinite;animation:pulse-__jsx-style-dynamic-selector 1s ease infinite;}@-webkit-keyframes pulse-__jsx-style-dynamic-selector{0%{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;-webkit-transform:scale(0.95);}70%{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;-webkit-transform:scale(1.05);}100%{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;-webkit-transform:scale(0.95);}}@keyframes pulse-__jsx-style-dynamic-selector{0%{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;-webkit-transform:scale(0.95);}70%{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;-webkit-transform:scale(1.05);}100%{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;-webkit-transform:scale(0.95);}}@-webkit-keyframes pulse{0%.__jsx-style-dynamic-selector{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);-webkit-transform:scale(0.95);}70%.__jsx-style-dynamic-selector{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);-webkit-transform:scale(1.05);}100%.__jsx-style-dynamic-selector{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);-webkit-transform:scale(0.95);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYXJveC9Eb2N1bWVudHMvbGVzc29uL2NvbXBvbmVudHMvZmxvYXRpbmdJY29uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Ca0IsQUFHMEIsQUFRRixBQUdXLEFBR1UsQUFTVixBQU1BLEFBTUEsQUFPQSxBQUtBLEFBS0EsYUEzQzFCLEVBUmEsV0FDQyxRQWF3QixJQVp4QixZQUNELFdBQ0UsTUFZNEIsT0FYM0MsSUFrQm1DLEFBTUEsQUFNQSxBQU9ELEFBS0EsQUFLQSxNQXpDbEMsd0JBTW1DLEFBMEJqQyxBQUtBLEFBS0EsMkVBN0JnQyxBQU1BLEFBTUEsOEJBWGhDLEFBTUEsQUFNQSwyQkFuQkYiLCJmaWxlIjoiL1VzZXJzL2dhcm94L0RvY3VtZW50cy9sZXNzb24vY29tcG9uZW50cy9mbG9hdGluZ0ljb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgdXNlU2Nyb2xsUG9zaXRpb24gfSBmcm9tIFwiQG44dGIxdC91c2Utc2Nyb2xsLXBvc2l0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGNvbG9yID0gXCJ3aGl0ZVwiIH0pID0+IHtcbiAgY29uc3QgW2RpdkNsYXNzTmFtZSwgc2V0RGl2Q2xhc3NOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICB1c2VTY3JvbGxQb3NpdGlvbigoeyBwcmV2UG9zLCBjdXJyUG9zIH0pID0+IHtcbiAgICBjb25zdCBpc1Nob3cgPSBjdXJyUG9zLnkgPCAtMTAwO1xuICAgIHNldERpdkNsYXNzTmFtZShcIm5vbmVcIik7XG4gIH0pO1xuICBjb25zdCBvblByZXNzID0gKCkgPT4gd2luZG93LnNjcm9sbFRvKDAsIDUwMCk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtkaXZDbGFzc05hbWV9IG9uQ2xpY2s9e29uUHJlc3N9PlxuICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICA8cG9seWdvbiBwb2ludHM9XCIxNS41LDUgMTEsNSAxNiwxMiAxMSwxOSAxNS41LDE5IDIwLjUsMTIgXHRcdFwiIC8+XG4gICAgICAgICAgPHBvbHlnb24gcG9pbnRzPVwiOC41LDUgNCw1IDksMTIgNCwxOSA4LjUsMTkgMTMuNSwxMiBcdFx0XCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgIGJvdHRvbTogMjBweDtcbiAgICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgICB9XG4gICAgICAgIC5ub25lIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgICB9XG4gICAgICAgIHBvbHlnb24ge1xuICAgICAgICAgIGZpbGw6ICR7Y29sb3J9O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLCAwLCAwLCAxKTtcblxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBwdWxzZSAxcyBlYXNlIGluZmluaXRlO1xuICAgICAgICAgIGFuaW1hdGlvbjogcHVsc2UgMXMgZWFzZSBpbmZpbml0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBrZXlmcmFtZXMgcHVsc2Uge1xuICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIDcwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgcHVsc2Uge1xuICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgNzAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApO1xufTtcbiJdfQ== */\n/*@ sourceURL=/Users/garox/Documents/lesson/components/floatingIcon.js */")));
});

/***/ })

})
//# sourceMappingURL=index.js.9c5d50bff3f232bd8342.hot-update.js.map