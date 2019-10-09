webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_scrollmagic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scrollmagic */ "./node_modules/react-scrollmagic/dist/index.es.js");
/* harmony import */ var react_gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-gsap */ "./node_modules/react-gsap/dist/index.es.js");
/* harmony import */ var _components_skewedTextMagic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/skewedTextMagic */ "./components/skewedTextMagic.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/button */ "./components/button.js");
/* harmony import */ var _components_logo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/logo */ "./components/logo.js");
/* harmony import */ var _components_floatingIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/floatingIcon */ "./components/floatingIcon.js");
/* harmony import */ var _components_emailInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/emailInput */ "./components/emailInput.js");
/* harmony import */ var _util_particles_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../util/particles.json */ "./util/particles.json");
var _util_particles_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../util/particles.json */ "./util/particles.json", 1);

var _jsxFileName = "/Users/garox/Documents/lesson/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;










/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = useState("green"),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      buttonColor = _useState2[0],
      setButtonColor = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! particles.js */ "./node_modules/particles.js/particles.js", 7)).then(function (module) {
      var particlesJS = window.particlesJS;
      particlesJS("particles-js", _util_particles_json__WEBPACK_IMPORTED_MODULE_11__);
    });
    setTimeout(function () {
      setButtonColor("red");
    }, 1000 * 10);
    setTimeout(function () {
      setButtonColor("blue");
    }, 1000 * 15);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
  }), __jsx(react_scrollmagic__WEBPACK_IMPORTED_MODULE_4__["Controller"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(react_scrollmagic__WEBPACK_IMPORTED_MODULE_4__["Scene"], {
    duration: 600,
    pin: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(_components_skewedTextMagic__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "50% de los pl\xE1sticos tienen un solo uso")), __jsx(react_scrollmagic__WEBPACK_IMPORTED_MODULE_4__["Scene"], {
    duration: 600,
    pin: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(_components_skewedTextMagic__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "91% de los pl\xE1sticos no se reciclan")), __jsx(react_scrollmagic__WEBPACK_IMPORTED_MODULE_4__["Scene"], {
    duration: 600,
    pin: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(_components_skewedTextMagic__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "T\xFA puedes frenar esto")), __jsx(react_scrollmagic__WEBPACK_IMPORTED_MODULE_4__["Scene"], {
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
  }, __jsx(_components_logo__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
  }, "NOMBREDELAWEA"))), __jsx(react_scrollmagic__WEBPACK_IMPORTED_MODULE_4__["Scene"], {
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
  }, __jsx(_components_emailInput__WEBPACK_IMPORTED_MODULE_10__["default"], {
    label: "hola",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), __jsx(_components_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: function onClick() {},
    backgroundColor: buttonColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "hello")))), __jsx(_components_floatingIcon__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "588182638",
    __self: this
  }, "body{margin:0;font-family:Avenir Next,-apple-system,BlinkMacSystemFont,Avenir, Helvetica,sans-serif;background-color:#2980b9;-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}h1.jsx-588182638{font:2em/1 Impact,\"Raleway\",sans-serif;text-align:center;color:white;-webkit-letter-spacing:3px;-moz-letter-spacing:3px;-ms-letter-spacing:3px;letter-spacing:3px;text-shadow:1px 2px 0 #666,2px 3px 0 #888;}#svg-container.jsx-588182638{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}#particles-js.jsx-588182638{position:fixed;display:block;top:0;bottom:0;left:0;right:0;z-index:0;}.panel.jsx-588182638{height:100vh;width:100vw;position:absolute;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-transform:translate(-100%,0%) matrix(1,0,0,1,0,0);-ms-transform:translate(-100%,0%) matrix(1,0,0,1,0,0);transform:translate(-100%,0%) matrix(1,0,0,1,0,0);-webkit-transition:-webkit-transform 0.3s;-webkit-transition:transform 0.3s;transition:transform 0.3s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;}.panel.blue.jsx-588182638{background-color:#3883d8;}.showPanel.jsx-588182638{-webkit-transform:translate(0%,0%) matrix(1,0,0,1,0,0);-ms-transform:translate(0%,0%) matrix(1,0,0,1,0,0);transform:translate(0%,0%) matrix(1,0,0,1,0,0);}.panel.turqoise.jsx-588182638{background-color:#f5f6fa;}.panel.green.jsx-588182638{background-color:#22d659;margin-bottom:800px;}.panel.bordeaux.jsx-588182638{background-color:#953543;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYXJveC9Eb2N1bWVudHMvbGVzc29uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNFa0IsQUFHb0IsQUFPZ0MsQUFPNUIsQUFLRSxBQVVGLEFBY1ksQUFHNEIsQUFJNUIsQUFJQSxBQUtBLFNBekRGLElBNEJYLEVBVkUsVUFXSSxBQWFwQixBQU9BLEFBSXNCLEFBS3RCLElBdkNRLE1BQ0csSUFkUyxJQXdCQSxDQVRYLENBaUNULE1BaENVLE1BZkksRUFnQkYsRUFRRyxRQXZCTSxBQWdCckIsS0FYd0IscUJBWkcseUJBQ0YsZUE4QkQsaUJBbEJDLENBK0J6QixTQXBDNkMsMENBQzdDLFNBdUJxQixnQkE5QnJCLHNCQVlBLHVEQW1CeUIsbUdBQ2lDLGtLQUM5QixzR0FDVSxnRkFDdEMiLCJmaWxlIjoiL1VzZXJzL2dhcm94L0RvY3VtZW50cy9sZXNzb24vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBDb250cm9sbGVyLCBTY2VuZSB9IGZyb20gXCJyZWFjdC1zY3JvbGxtYWdpY1wiO1xuaW1wb3J0IHsgVHdlZW4sIFRpbWVsaW5lIH0gZnJvbSBcInJlYWN0LWdzYXBcIjtcblxuaW1wb3J0IFNrZXdlZFRleHQgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2tld2VkVGV4dE1hZ2ljXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL2J1dHRvblwiO1xuaW1wb3J0IExvZ28gZnJvbSBcIi4uL2NvbXBvbmVudHMvbG9nb1wiO1xuaW1wb3J0IEZsb2F0aW5nSWNvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9mbG9hdGluZ0ljb25cIjtcbmltcG9ydCBFbWFpbElucHV0IGZyb20gXCIuLi9jb21wb25lbnRzL2VtYWlsSW5wdXRcIjtcblxuaW1wb3J0IHBhcnRpY2xlc0pzb24gZnJvbSBcIi4uL3V0aWwvcGFydGljbGVzLmpzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBbYnV0dG9uQ29sb3IsIHNldEJ1dHRvbkNvbG9yXSA9IHVzZVN0YXRlKFwiZ3JlZW5cIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpbXBvcnQoXCJwYXJ0aWNsZXMuanNcIikudGhlbihtb2R1bGUgPT4ge1xuICAgICAgY29uc3QgcGFydGljbGVzSlMgPSB3aW5kb3cucGFydGljbGVzSlM7XG4gICAgICBwYXJ0aWNsZXNKUyhcInBhcnRpY2xlcy1qc1wiLCBwYXJ0aWNsZXNKc29uKTtcbiAgICB9KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldEJ1dHRvbkNvbG9yKFwicmVkXCIpO1xuICAgIH0sIDEwMDAgKiAxMCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRCdXR0b25Db2xvcihcImJsdWVcIik7XG4gICAgfSwgMTAwMCAqIDE1KTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkhvbWU8L3RpdGxlPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UmFsZXdheTo5MDAmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgPjwvbGluaz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgaWQ9XCJwYXJ0aWNsZXMtanNcIj48L2Rpdj5cblxuICAgICAgPENvbnRyb2xsZXI+XG4gICAgICAgIDxTY2VuZSBkdXJhdGlvbj17NjAwfSBwaW49e3RydWV9PlxuICAgICAgICAgIDxTa2V3ZWRUZXh0PjUwJSBkZSBsb3MgcGzDoXN0aWNvcyB0aWVuZW4gdW4gc29sbyB1c288L1NrZXdlZFRleHQ+XG4gICAgICAgIDwvU2NlbmU+XG4gICAgICAgIDxTY2VuZSBkdXJhdGlvbj17NjAwfSBwaW49e3RydWV9PlxuICAgICAgICAgIDxTa2V3ZWRUZXh0PjkxJSBkZSBsb3MgcGzDoXN0aWNvcyBubyBzZSByZWNpY2xhbjwvU2tld2VkVGV4dD5cbiAgICAgICAgPC9TY2VuZT5cbiAgICAgICAgPFNjZW5lIGR1cmF0aW9uPXs2MDB9IHBpbj17dHJ1ZX0+XG4gICAgICAgICAgPFNrZXdlZFRleHQ+VMO6IHB1ZWRlcyBmcmVuYXIgZXN0bzwvU2tld2VkVGV4dD5cbiAgICAgICAgPC9TY2VuZT5cbiAgICAgICAgPFNjZW5lIGR1cmF0aW9uPXs2MDB9IG9mZnNldD17MzAwfSBwaW49e3RydWV9PlxuICAgICAgICAgIDxkaXYgaWQ9XCJzdmctY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8TG9nbyAvPlxuICAgICAgICAgICAgPGgxPk5PTUJSRURFTEFXRUE8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1NjZW5lPlxuICAgICAgICA8U2NlbmVcbiAgICAgICAgICBkdXJhdGlvbj1cIjIwMCVcIlxuICAgICAgICAgIHRyaWdnZXJIb29rPVwib25MZWF2ZVwiXG4gICAgICAgICAgY2xhc3NUb2dnbGU9XCJzaG93UGFuZWxcIlxuICAgICAgICAgIHBpbj17dHJ1ZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInBhbmVsIHR1cnFvaXNlXCI+XG4gICAgICAgICAgICA8RW1haWxJbnB1dCBsYWJlbD1cImhvbGFcIiAvPlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7fX0gYmFja2dyb3VuZENvbG9yPXtidXR0b25Db2xvcn0+XG4gICAgICAgICAgICAgIGhlbGxvXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvU2NlbmU+XG4gICAgICA8L0NvbnRyb2xsZXI+XG4gICAgICA8RmxvYXRpbmdJY29uIC8+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIDpnbG9iYWwoYm9keSkge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogQXZlbmlyIE5leHQsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgQXZlbmlyLFxuICAgICAgICAgICAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTgwYjk7XG4gICAgICAgICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gICAgICAgIH1cbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQ6IDJlbS8xIEltcGFjdCwgXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAgICAgICAgIHRleHQtc2hhZG93OiAxcHggMnB4IDAgIzY2NiwgMnB4IDNweCAwICM4ODg7XG4gICAgICAgIH1cbiAgICAgICAgI3N2Zy1jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAjcGFydGljbGVzLWpzIHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAucGFuZWwge1xuICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDAlKSBtYXRyaXgoMSwgMCwgMCwgMSwgMCwgMCk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XG4gICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgICAgICB9XG5cbiAgICAgICAgLnBhbmVsLmJsdWUge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzODgzZDg7XG4gICAgICAgIH1cbiAgICAgICAgLnNob3dQYW5lbCB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKSBtYXRyaXgoMSwgMCwgMCwgMSwgMCwgMCk7XG4gICAgICAgIH1cblxuICAgICAgICAucGFuZWwudHVycW9pc2Uge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY2ZmE7XG4gICAgICAgIH1cblxuICAgICAgICAucGFuZWwuZ3JlZW4ge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMmQ2NTk7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogODAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAucGFuZWwuYm9yZGVhdXgge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5NTM1NDM7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG4iXX0= */\n/*@ sourceURL=/Users/garox/Documents/lesson/pages/index.js */"));
});

/***/ })

})
//# sourceMappingURL=index.js.a087cab912f001da3f23.hot-update.js.map