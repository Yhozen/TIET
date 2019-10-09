webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
false,

/***/ "./node_modules/core-js/library/fn/get-iterator.js":
false,

/***/ "./node_modules/core-js/library/modules/core.get-iterator.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_scrollmagic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scrollmagic */ "./node_modules/react-scrollmagic/dist/index.es.js");
/* harmony import */ var react_gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-gsap */ "./node_modules/react-gsap/dist/index.es.js");
/* harmony import */ var _components_skewedTextMagic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/skewedTextMagic */ "./components/skewedTextMagic.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/button */ "./components/button.js");
/* harmony import */ var _components_logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/logo */ "./components/logo.js");
/* harmony import */ var _components_floatingIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/floatingIcon */ "./components/floatingIcon.js");
/* harmony import */ var _components_emailInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/emailInput */ "./components/emailInput.js");
/* harmony import */ var _util_particles_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/particles.json */ "./util/particles.json");
var _util_particles_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../util/particles.json */ "./util/particles.json", 1);
var _jsxFileName = "/Users/garox/Documents/lesson/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("green"),
      buttonColor = _useState[0],
      setButtonColor = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! particles.js */ "./node_modules/particles.js/particles.js", 7)).then(function (module) {
      var particlesJS = window.particlesJS;
      particlesJS("particles-js", _util_particles_json__WEBPACK_IMPORTED_MODULE_10__);
    });
    setTimeout(function () {
      setButtonColor("red");
    }, 1000 * 10);
    setTimeout(function () {
      setButtonColor("blue");
    }, 1000 * 15);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-588182638",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Home"), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Raleway:900&display=swap",
    rel: "stylesheet",
    className: "jsx-588182638",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })), __jsx("div", {
    id: "particles-js",
    className: "jsx-588182638",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx(react_scrollmagic__WEBPACK_IMPORTED_MODULE_3__["Controller"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(react_scrollmagic__WEBPACK_IMPORTED_MODULE_3__["Scene"], {
    duration: 600,
    pin: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(_components_skewedTextMagic__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "50% de los pl\xE1sticos tienen un solo uso")), __jsx(react_scrollmagic__WEBPACK_IMPORTED_MODULE_3__["Scene"], {
    duration: 600,
    pin: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(_components_skewedTextMagic__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "91% de los pl\xE1sticos no se reciclan")), __jsx(react_scrollmagic__WEBPACK_IMPORTED_MODULE_3__["Scene"], {
    duration: 600,
    pin: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(_components_skewedTextMagic__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "T\xFA puedes frenar esto")), __jsx(react_scrollmagic__WEBPACK_IMPORTED_MODULE_3__["Scene"], {
    duration: 600,
    offset: 300,
    pin: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("div", {
    id: "svg-container",
    className: "jsx-588182638",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(_components_logo__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), __jsx("h1", {
    className: "jsx-588182638",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "NOMBREDELAWEA"))), __jsx(react_scrollmagic__WEBPACK_IMPORTED_MODULE_3__["Scene"], {
    duration: "200%",
    triggerHook: "onLeave",
    classToggle: "showPanel",
    pin: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("section", {
    className: "jsx-588182638" + " " + "panel turqoise",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(_components_emailInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: "hola",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), __jsx(_components_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: function onClick() {},
    backgroundColor: buttonColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "hello")))), __jsx(_components_floatingIcon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "588182638",
    __self: this
  }, "body{margin:0;font-family:Avenir Next,-apple-system,BlinkMacSystemFont,Avenir, Helvetica,sans-serif;background-color:#2980b9;-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}h1.jsx-588182638{font:2em/1 Impact,\"Raleway\",sans-serif;text-align:center;color:white;-webkit-letter-spacing:3px;-moz-letter-spacing:3px;-ms-letter-spacing:3px;letter-spacing:3px;text-shadow:1px 2px 0 #666,2px 3px 0 #888;}#svg-container.jsx-588182638{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}#particles-js.jsx-588182638{position:fixed;display:block;top:0;bottom:0;left:0;right:0;z-index:0;}.panel.jsx-588182638{height:100vh;width:100vw;position:absolute;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-transform:translate(-100%,0%) matrix(1,0,0,1,0,0);-ms-transform:translate(-100%,0%) matrix(1,0,0,1,0,0);transform:translate(-100%,0%) matrix(1,0,0,1,0,0);-webkit-transition:-webkit-transform 0.3s;-webkit-transition:transform 0.3s;transition:transform 0.3s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;}.panel.blue.jsx-588182638{background-color:#3883d8;}.showPanel.jsx-588182638{-webkit-transform:translate(0%,0%) matrix(1,0,0,1,0,0);-ms-transform:translate(0%,0%) matrix(1,0,0,1,0,0);transform:translate(0%,0%) matrix(1,0,0,1,0,0);}.panel.turqoise.jsx-588182638{background-color:#f5f6fa;}.panel.green.jsx-588182638{background-color:#22d659;margin-bottom:800px;}.panel.bordeaux.jsx-588182638{background-color:#953543;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYXJveC9Eb2N1bWVudHMvbGVzc29uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNFa0IsQUFHb0IsQUFPZ0MsQUFPNUIsQUFLRSxBQVVGLEFBY1ksQUFHNEIsQUFJNUIsQUFJQSxBQUtBLFNBekRGLElBNEJYLEVBVkUsVUFXSSxBQWFwQixBQU9BLEFBSXNCLEFBS3RCLElBdkNRLE1BQ0csSUFkUyxJQXdCQSxDQVRYLENBaUNULE1BaENVLE1BZkksRUFnQkYsRUFRRyxRQXZCTSxBQWdCckIsS0FYd0IscUJBWkcseUJBQ0YsZUE4QkQsaUJBbEJDLENBK0J6QixTQXBDNkMsMENBQzdDLFNBdUJxQixnQkE5QnJCLHNCQVlBLHVEQW1CeUIsbUdBQ2lDLGtLQUM5QixzR0FDVSxnRkFDdEMiLCJmaWxlIjoiL1VzZXJzL2dhcm94L0RvY3VtZW50cy9sZXNzb24vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgQ29udHJvbGxlciwgU2NlbmUgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsbWFnaWNcIjtcbmltcG9ydCB7IFR3ZWVuLCBUaW1lbGluZSB9IGZyb20gXCJyZWFjdC1nc2FwXCI7XG5cbmltcG9ydCBTa2V3ZWRUZXh0IGZyb20gXCIuLi9jb21wb25lbnRzL3NrZXdlZFRleHRNYWdpY1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9idXR0b25cIjtcbmltcG9ydCBMb2dvIGZyb20gXCIuLi9jb21wb25lbnRzL2xvZ29cIjtcbmltcG9ydCBGbG9hdGluZ0ljb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvZmxvYXRpbmdJY29uXCI7XG5pbXBvcnQgRW1haWxJbnB1dCBmcm9tIFwiLi4vY29tcG9uZW50cy9lbWFpbElucHV0XCI7XG5cbmltcG9ydCBwYXJ0aWNsZXNKc29uIGZyb20gXCIuLi91dGlsL3BhcnRpY2xlcy5qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgW2J1dHRvbkNvbG9yLCBzZXRCdXR0b25Db2xvcl0gPSB1c2VTdGF0ZShcImdyZWVuXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaW1wb3J0KFwicGFydGljbGVzLmpzXCIpLnRoZW4obW9kdWxlID0+IHtcbiAgICAgIGNvbnN0IHBhcnRpY2xlc0pTID0gd2luZG93LnBhcnRpY2xlc0pTO1xuICAgICAgcGFydGljbGVzSlMoXCJwYXJ0aWNsZXMtanNcIiwgcGFydGljbGVzSnNvbik7XG4gICAgfSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRCdXR0b25Db2xvcihcInJlZFwiKTtcbiAgICB9LCAxMDAwICogMTApO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0QnV0dG9uQ29sb3IoXCJibHVlXCIpO1xuICAgIH0sIDEwMDAgKiAxNSk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Ib21lPC90aXRsZT5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJhbGV3YXk6OTAwJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgID48L2xpbms+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGlkPVwicGFydGljbGVzLWpzXCI+PC9kaXY+XG5cbiAgICAgIDxDb250cm9sbGVyPlxuICAgICAgICA8U2NlbmUgZHVyYXRpb249ezYwMH0gcGluPXt0cnVlfT5cbiAgICAgICAgICA8U2tld2VkVGV4dD41MCUgZGUgbG9zIHBsw6FzdGljb3MgdGllbmVuIHVuIHNvbG8gdXNvPC9Ta2V3ZWRUZXh0PlxuICAgICAgICA8L1NjZW5lPlxuICAgICAgICA8U2NlbmUgZHVyYXRpb249ezYwMH0gcGluPXt0cnVlfT5cbiAgICAgICAgICA8U2tld2VkVGV4dD45MSUgZGUgbG9zIHBsw6FzdGljb3Mgbm8gc2UgcmVjaWNsYW48L1NrZXdlZFRleHQ+XG4gICAgICAgIDwvU2NlbmU+XG4gICAgICAgIDxTY2VuZSBkdXJhdGlvbj17NjAwfSBwaW49e3RydWV9PlxuICAgICAgICAgIDxTa2V3ZWRUZXh0PlTDuiBwdWVkZXMgZnJlbmFyIGVzdG88L1NrZXdlZFRleHQ+XG4gICAgICAgIDwvU2NlbmU+XG4gICAgICAgIDxTY2VuZSBkdXJhdGlvbj17NjAwfSBvZmZzZXQ9ezMwMH0gcGluPXt0cnVlfT5cbiAgICAgICAgICA8ZGl2IGlkPVwic3ZnLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPExvZ28gLz5cbiAgICAgICAgICAgIDxoMT5OT01CUkVERUxBV0VBPC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9TY2VuZT5cbiAgICAgICAgPFNjZW5lXG4gICAgICAgICAgZHVyYXRpb249XCIyMDAlXCJcbiAgICAgICAgICB0cmlnZ2VySG9vaz1cIm9uTGVhdmVcIlxuICAgICAgICAgIGNsYXNzVG9nZ2xlPVwic2hvd1BhbmVsXCJcbiAgICAgICAgICBwaW49e3RydWV9XG4gICAgICAgID5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwYW5lbCB0dXJxb2lzZVwiPlxuICAgICAgICAgICAgPEVtYWlsSW5wdXQgbGFiZWw9XCJob2xhXCIgLz5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4ge319IGJhY2tncm91bmRDb2xvcj17YnV0dG9uQ29sb3J9PlxuICAgICAgICAgICAgICBoZWxsb1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L1NjZW5lPlxuICAgICAgPC9Db250cm9sbGVyPlxuICAgICAgPEZsb2F0aW5nSWNvbiAvPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICA6Z2xvYmFsKGJvZHkpIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IEF2ZW5pciBOZXh0LCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIEF2ZW5pcixcbiAgICAgICAgICAgIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk4MGI5O1xuICAgICAgICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICAgICAgICB9XG4gICAgICAgIGgxIHtcbiAgICAgICAgICBmb250OiAyZW0vMSBJbXBhY3QsIFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDJweCAwICM2NjYsIDJweCAzcHggMCAjODg4O1xuICAgICAgICB9XG4gICAgICAgICNzdmctY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgI3BhcnRpY2xlcy1qcyB7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBhbmVsIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAwJSkgbWF0cml4KDEsIDAsIDAsIDEsIDAsIDApO1xuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xuICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wYW5lbC5ibHVlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg4M2Q4O1xuICAgICAgICB9XG4gICAgICAgIC5zaG93UGFuZWwge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSkgbWF0cml4KDEsIDAsIDAsIDEsIDAsIDApO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBhbmVsLnR1cnFvaXNlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmZhO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBhbmVsLmdyZWVuIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjJkNjU5O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDgwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnBhbmVsLmJvcmRlYXV4IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTUzNTQzO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59O1xuIl19 */\n/*@ sourceURL=/Users/garox/Documents/lesson/pages/index.js */"));
});

/***/ })

})
//# sourceMappingURL=index.js.974643c964adc761f4b3.hot-update.js.map