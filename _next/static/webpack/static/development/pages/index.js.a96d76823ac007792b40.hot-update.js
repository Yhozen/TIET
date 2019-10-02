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
    return window.scrollTo(0, 110);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["584739776", [color]]]) + " " + (divClassName || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("svg", {
    viewBox: "0 0 24 24",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["584739776", [color]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("polygon", {
    points: "15.5,5 11,5 16,12 11,19 15.5,19 20.5,12 \t\t",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["584739776", [color]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx("polygon", {
    points: "8.5,5 4,5 9,12 4,19 8.5,19 13.5,12 \t\t",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["584739776", [color]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "584739776",
    dynamic: [color],
    __self: this
  }, "div.__jsx-style-dynamic-selector{position:fixed;width:60px;height:60px;bottom:20px;right:20px;z-index:1000;}.none.__jsx-style-dynamic-selector{display:none;}svg.__jsx-style-dynamic-selector{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);-webkit-filter:drop-shadow(1px 2px 0 #666);filter:drop-shadow(1px 2px 0 #666);}polygon.__jsx-style-dynamic-selector{fill:".concat(color, ";-webkit-animation:pulse 1s ease infinite;-webkit-animation:pulse-__jsx-style-dynamic-selector 1s ease infinite;animation:pulse-__jsx-style-dynamic-selector 1s ease infinite;}@-webkit-keyframes pulse-__jsx-style-dynamic-selector{0%{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;-webkit-transform:scale(0.95);}70%{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;-webkit-transform:scale(1.05);}100%{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;-webkit-transform:scale(0.95);}}@keyframes pulse-__jsx-style-dynamic-selector{0%{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;-webkit-transform:scale(0.95);}70%{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;-webkit-transform:scale(1.05);}100%{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;-webkit-transform:scale(0.95);}}@-webkit-keyframes pulse{0%.__jsx-style-dynamic-selector{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);-webkit-transform:scale(0.95);}70%.__jsx-style-dynamic-selector{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);-webkit-transform:scale(1.05);}100%.__jsx-style-dynamic-selector{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);-webkit-transform:scale(0.95);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYXJveC9Eb2N1bWVudHMvbGVzc29uL2NvbXBvbmVudHMvZmxvYXRpbmdJY29uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Ca0IsQUFHMEIsQUFRRixBQUdXLEFBSVUsQUFRVixBQU1BLEFBTUEsQUFPQSxBQUtBLEFBS0EsYUEzQzFCLEVBUmEsV0FDQyxRQWU2QixJQWQ3QixZQUNELFdBQ0UsYUFDZixDQVltQyxHQU1BLEFBTUEsQUFNQSxBQU9ELEFBS0EsQUFLQSxNQXpDRyx3QkFnQ25DLEFBS0EsQUFLQSxzREF6Q0YscUJBWWtDLEFBTUEsQUFNQSx3QkFsQmxDLE1BT0UsQUFNQSxBQU1BIiwiZmlsZSI6Ii9Vc2Vycy9nYXJveC9Eb2N1bWVudHMvbGVzc29uL2NvbXBvbmVudHMvZmxvYXRpbmdJY29uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IHVzZVNjcm9sbFBvc2l0aW9uIH0gZnJvbSBcIkBuOHRiMXQvdXNlLXNjcm9sbC1wb3NpdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBjb2xvciA9IFwid2hpdGVcIiB9KSA9PiB7XG4gIGNvbnN0IFtkaXZDbGFzc05hbWUsIHNldERpdkNsYXNzTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgdXNlU2Nyb2xsUG9zaXRpb24oKHsgcHJldlBvcywgY3VyclBvcyB9KSA9PiB7XG4gICAgY29uc3QgaXNTaG93ID0gY3VyclBvcy55IDwgLTEwMDtcbiAgICBzZXREaXZDbGFzc05hbWUoXCJub25lXCIpO1xuICB9KTtcbiAgY29uc3Qgb25QcmVzcyA9ICgpID0+IHdpbmRvdy5zY3JvbGxUbygwLCAxMTApO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17ZGl2Q2xhc3NOYW1lfT5cbiAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgPHBvbHlnb24gcG9pbnRzPVwiMTUuNSw1IDExLDUgMTYsMTIgMTEsMTkgMTUuNSwxOSAyMC41LDEyIFx0XHRcIiAvPlxuICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz1cIjguNSw1IDQsNSA5LDEyIDQsMTkgOC41LDE5IDEzLjUsMTIgXHRcdFwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICBib3R0b206IDIwcHg7XG4gICAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgICAgfVxuICAgICAgICAubm9uZSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBzdmcge1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDFweCAycHggMCAjNjY2KTtcbiAgICAgICAgfVxuICAgICAgICBwb2x5Z29uIHtcbiAgICAgICAgICBmaWxsOiAke2NvbG9yfTtcblxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBwdWxzZSAxcyBlYXNlIGluZmluaXRlO1xuICAgICAgICAgIGFuaW1hdGlvbjogcHVsc2UgMXMgZWFzZSBpbmZpbml0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBrZXlmcmFtZXMgcHVsc2Uge1xuICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIDcwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgcHVsc2Uge1xuICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgNzAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApO1xufTtcbiJdfQ== */\n/*@ sourceURL=/Users/garox/Documents/lesson/components/floatingIcon.js */")));
});

/***/ })

})
//# sourceMappingURL=index.js.a96d76823ac007792b40.hot-update.js.map