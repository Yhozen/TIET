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
  Object(_n8tb1t_use_scroll_position__WEBPACK_IMPORTED_MODULE_2__["useScrollPosition"])(function (_ref2) {
    var prevPos = _ref2.prevPos,
        currPos = _ref2.currPos;
    console.log(currPos.x);
    console.log(currPos.y);
  });

  var onPress = function onPress() {
    return window.scrollTo(0, 500);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    onClick: onPress,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1976420934", [color]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("svg", {
    viewBox: "0 0 24 24",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1976420934", [color]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("polygon", {
    points: "15.5,5 11,5 16,12 11,19 15.5,19 20.5,12 \t\t",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1976420934", [color]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx("polygon", {
    points: "8.5,5 4,5 9,12 4,19 8.5,19 13.5,12 \t\t",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1976420934", [color]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1976420934",
    dynamic: [color],
    __self: this
  }, "div.__jsx-style-dynamic-selector{position:fixed;width:60px;height:60px;bottom:20px;right:20px;z-index:1000;}svg.__jsx-style-dynamic-selector{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);}polygon.__jsx-style-dynamic-selector{fill:".concat(color, ";box-shadow:0 0 0 0 rgba(0,0,0,1);-webkit-animation:pulse 2s infinite;-webkit-animation:pulse-__jsx-style-dynamic-selector 2s infinite;animation:pulse-__jsx-style-dynamic-selector 2s infinite;}@-webkit-keyframes pulse-__jsx-style-dynamic-selector{0%{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;-webkit-transform:scale(0.95);box-shadow:0 0 0 0 rgba(0,0,0,0.7);}70%{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;-webkit-transform:scale(1.05);box-shadow:0 0 0 10px rgba(0,0,0,0);}100%{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;-webkit-transform:scale(0.95);box-shadow:0 0 0 0 rgba(0,0,0,0);}}@keyframes pulse-__jsx-style-dynamic-selector{0%{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;-webkit-transform:scale(0.95);box-shadow:0 0 0 0 rgba(0,0,0,0.7);}70%{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;-webkit-transform:scale(1.05);box-shadow:0 0 0 10px rgba(0,0,0,0);}100%{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;-webkit-transform:scale(0.95);box-shadow:0 0 0 0 rgba(0,0,0,0);}}@-webkit-keyframes pulse{0%.__jsx-style-dynamic-selector{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);-webkit-transform:scale(0.95);box-shadow:0 0 0 0 rgba(0,0,0,0.7);}70%.__jsx-style-dynamic-selector{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);-webkit-transform:scale(1.05);box-shadow:0 0 0 10px rgba(0,0,0,0);}100%.__jsx-style-dynamic-selector{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);-webkit-transform:scale(0.95);box-shadow:0 0 0 0 rgba(0,0,0,0);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYXJveC9Eb2N1bWVudHMvbGVzc29uL2NvbXBvbmVudHMvZmxvYXRpbmdJY29uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCa0IsQUFHMEIsQUFRUyxBQUdVLEFBU1YsQUFPQSxBQVFBLEFBU0EsQUFNQSxBQU1BLGVBdkRiLFdBQ0MsUUFVd0IsSUFUeEIsWUFDRCxXQUNFLE1BU3VCLE9BUnRDLElBZW1DLEFBT0EsQUFRQSxBQVNELEFBTUEsQUFNQSxNQWhEbEMsbUJBTThCLEtBK0JZLEFBTUMsQUFNSCxpQ0FDdEMsRUFaQSxDQU1BLHVDQS9CZ0MsQUFRQSxBQVFBLDhCQWZRLEFBUUMsQUFRSCxZQXZCeEMscUJBd0JFLEVBaEJBLENBUUEiLCJmaWxlIjoiL1VzZXJzL2dhcm94L0RvY3VtZW50cy9sZXNzb24vY29tcG9uZW50cy9mbG9hdGluZ0ljb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IHVzZVNjcm9sbFBvc2l0aW9uIH0gZnJvbSBcIkBuOHRiMXQvdXNlLXNjcm9sbC1wb3NpdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBjb2xvciA9IFwid2hpdGVcIiB9KSA9PiB7XG4gIHVzZVNjcm9sbFBvc2l0aW9uKCh7IHByZXZQb3MsIGN1cnJQb3MgfSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGN1cnJQb3MueCk7XG4gICAgY29uc29sZS5sb2coY3VyclBvcy55KTtcbiAgfSk7XG4gIGNvbnN0IG9uUHJlc3MgPSAoKSA9PiB3aW5kb3cuc2Nyb2xsVG8oMCwgNTAwKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBvbkNsaWNrPXtvblByZXNzfT5cbiAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgPHBvbHlnb24gcG9pbnRzPVwiMTUuNSw1IDExLDUgMTYsMTIgMTEsMTkgMTUuNSwxOSAyMC41LDEyIFx0XHRcIiAvPlxuICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz1cIjguNSw1IDQsNSA5LDEyIDQsMTkgOC41LDE5IDEzLjUsMTIgXHRcdFwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICBib3R0b206IDIwcHg7XG4gICAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgICAgfVxuICAgICAgICBzdmcge1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgICAgfVxuICAgICAgICBwb2x5Z29uIHtcbiAgICAgICAgICBmaWxsOiAke2NvbG9yfTtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMCwgMCwgMCwgMSk7XG5cbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogcHVsc2UgMnMgaW5maW5pdGU7XG4gICAgICAgICAgYW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBrZXlmcmFtZXMgcHVsc2Uge1xuICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgNzAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcblxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDAsIDAsIDAsIDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgcHVsc2Uge1xuICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICA3MCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59O1xuIl19 */\n/*@ sourceURL=/Users/garox/Documents/lesson/components/floatingIcon.js */")));
});

/***/ })

})
//# sourceMappingURL=index.js.726190b76118588332c7.hot-update.js.map