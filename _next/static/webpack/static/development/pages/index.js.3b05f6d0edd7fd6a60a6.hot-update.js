webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/emailInput.js":
/*!**********************************!*\
  !*** ./components/emailInput.js ***!
  \**********************************/
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
var _jsxFileName = "/Users/garox/Documents/lesson/components/emailInput.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$backgroundColor = _ref.backgroundColor,
      backgroundColor = _ref$backgroundColor === void 0 ? "#ff9800" : _ref$backgroundColor,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "white" : _ref$color,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? "Your first name, e.g. Nicholas" : _ref$placeholder,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? "First name" : _ref$label,
      onClick = _ref.onClick;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-2197285327" + " " + "Input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    placeholder: placeholder,
    className: "jsx-2197285327" + " " + "Input-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx("label", {
    "for": "input",
    className: "jsx-2197285327" + " " + "Input-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, label)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2197285327",
    __self: this
  }, "@import url(\"https://fonts.googleapis.com/css?family=Dosis\");.Input.jsx-2197285327{--gutterSm:0.4rem;--gutterMd:0.8rem;--gutterLg:1.6rem;--gutterXl:2.4rem;--gutterXx:7.2rem;--colorPrimary400:#7e57c2;--colorPrimary600:#5e35b1;--colorPrimary800:#4527a0;--fontFamily:\"Dosis\",sans-serif;--fontSizeSm:1.2rem;--fontSizeMd:1.6rem;--fontSizeLg:2.1rem;--fontSizeXl:2.8rem;--fontSizeXx:3.6rem;--lineHeightSm:1.1;--lineHeightMd:1.8;--transitionDuration:300ms;--transitionTF:cubic-bezier(0.645,0.045,0.355,1);--inputPaddingV:var(--gutterMd);--inputPaddingH:var(--gutterLg);--inputFontSize:var(--fontSizeLg);--inputLineHeight:var(--lineHeightMd);--labelScaleFactor:0.8;--labelDefaultPosY:50%;--labelTransformedPosY:calc( (var(--labelDefaultPosY)) - (var(--inputPaddingV) * var(--labelScaleFactor)) - (var(--inputFontSize) * var(--inputLineHeight)) );--inputTransitionDuration:var(--transitionDuration);--inputTransitionTF:var(--transitionTF);}*.jsx-2197285327,*.jsx-2197285327::before,*.jsx-2197285327::after{box-sizing:border-box;}html.jsx-2197285327{font-size:10px;}body.jsx-2197285327{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;overflow:hidden;width:100vw;height:100vh;color:#455a64;background-color:#7e57c2;font-family:var(--fontFamily);font-size:var(--fontSizeMd);line-height:var(--lineHeightMd);}.Wrapper.jsx-2197285327{-webkit-flex:0 0 80%;-ms-flex:0 0 80%;flex:0 0 80%;max-width:80%;}.Title.jsx-2197285327{margin:0 0 var(--gutterXx) 0;padding:0;color:#fff;font-size:var(--fontSizeXx);font-weight:400;line-height:var(--lineHeightSm);text-align:center;text-shadow:-0.1rem 0.1rem 0.2rem var(--colorPrimary800);}.Input.jsx-2197285327{position:relative;}.Input-text.jsx-2197285327{display:block;margin:0;padding:var(--inputPaddingV) var(--inputPaddingH);color:inherit;width:100%;font-family:inherit;font-size:var(--inputFontSize);font-weight:inherit;line-height:var(--inputLineHeight);border:none;border-radius:0.4rem;-webkit-transition:box-shadow var(--transitionDuration);transition:box-shadow var(--transitionDuration);}.Input-text.jsx-2197285327::-webkit-input-placeholder{color:#b0bec5;}.Input-text.jsx-2197285327::-moz-placeholder{color:#b0bec5;}.Input-text.jsx-2197285327:-ms-input-placeholder{color:#b0bec5;}.Input-text.jsx-2197285327::placeholder{color:#b0bec5;}.Input-text.jsx-2197285327:focus{outline:none;box-shadow:0.2rem 0.8rem 1.6rem var(--colorPrimary600);}.Input-label.jsx-2197285327{display:block;position:absolute;bottom:50%;left:1rem;color:#fff;font-family:inherit;font-size:var(--inputFontSize);font-weight:inherit;line-height:var(--inputLineHeight);opacity:0;-webkit-transform:translate3d(0,var(--labelDefaultPosY),0) scale(1);-ms-transform:translate3d(0,var(--labelDefaultPosY),0) scale(1);transform:translate3d(0,var(--labelDefaultPosY),0) scale(1);-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;-webkit-transition:opacity var(--inputTransitionDuration) var(--inputTransitionTF), -webkit-transform var(--inputTransitionDuration) var(--inputTransitionTF), visibility 0ms var(--inputTransitionDuration) var(--inputTransitionTF), z-index 0ms var(--inputTransitionDuration) var(--inputTransitionTF);-webkit-transition:opacity var(--inputTransitionDuration) var(--inputTransitionTF), transform var(--inputTransitionDuration) var(--inputTransitionTF), visibility 0ms var(--inputTransitionDuration) var(--inputTransitionTF), z-index 0ms var(--inputTransitionDuration) var(--inputTransitionTF);transition:opacity var(--inputTransitionDuration) var(--inputTransitionTF), transform var(--inputTransitionDuration) var(--inputTransitionTF), visibility 0ms var(--inputTransitionDuration) var(--inputTransitionTF), z-index 0ms var(--inputTransitionDuration) var(--inputTransitionTF);}.Input-text.jsx-2197285327:placeholder-shown+.Input-label.jsx-2197285327{visibility:hidden;z-index:-1;}.Input-text.jsx-2197285327:not(:placeholder-shown)+.Input-label.jsx-2197285327,.Input-text.jsx-2197285327:focus.jsx-2197285327:not(:placeholder-shown)+.Input-label.jsx-2197285327{visibility:visible;z-index:1;opacity:1;-webkit-transform:translate3d(0,var(--labelTransformedPosY),0) scale(var(--labelScaleFactor));-ms-transform:translate3d(0,var(--labelTransformedPosY),0) scale(var(--labelScaleFactor));transform:translate3d(0,var(--labelTransformedPosY),0) scale(var(--labelScaleFactor));-webkit-transition:-webkit-transform var(--inputTransitionDuration),visibility 0ms, z-index 0ms;-webkit-transition:transform var(--inputTransitionDuration),visibility 0ms, z-index 0ms;transition:transform var(--inputTransitionDuration),visibility 0ms, z-index 0ms;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYXJveC9Eb2N1bWVudHMvbGVzc29uL2NvbXBvbmVudHMvZW1haWxJbnB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQmdCLEFBRW1FLEFBSXhDLEFBc0NJLEFBSVAsQUFJRixBQWNBLEFBS2dCLEFBV1gsQUFJSixBQWVBLEFBSUQsQUFLQyxBQW9CSSxBQU1DLGFBOUJvQyxDQW5COUMsQUFlWCxBQVNvQixDQTlEcEIsR0ExQ29CLEFBNEVwQixBQWdEYSxDQU1ELEdBNUZaLENBMkNvRCxNQWhCeEMsQUE0RFosQUFNWSxHQTFCQyxJQXhHTyxHQWlFUCxBQW1FcUIsSUEzQnRCLE9BdkNrQixDQVBkLEVBK0NILENBekdPLFVBMEdFLENBL0N0QixHQXVDQSxJQWpHb0IsQ0ErRUosQ0FwQ0ssSUFzQkgsTUF5Q2UsR0ExQnBCLEdBL0VlLElBaUVNLElBZVosaUJBMEJBLENBekdNLEVBZ0ZLLFFBZmIsU0F5Q2lCLE9BekdULEVBaUUrQixLQWVyQyxrQkF2Q0csQ0F4Q1UsQ0FnRkUsQ0F5QnpCLFVBQ29ELG9CQXpHMUMsQ0FnRXRCLEdBZ0JjLFlBQ1MsSUFoRkQsaUJBaUY0QixHQWhGNUIsb0JBQ0EsTUFxQ0osY0FwQ0ksRUFxQ1IsWUFDQyxNQXJDTSxPQXNDTCxFQW9GRCxVQXpITSxFQXNDTSxpQkFyQ0UsR0E0RTdCLEtBdENnQyxtQkFyQ3NCLE9Ba0cvQixJQTVETyw0QkFDSSxVQXBDQSxzQkFxQ2xDLFVBcENrQyxDQW1HcUMsK0JBbEduQyxrQ0FDSSxzQ0FDZix1QkFDQSxBQWdIekIsdUJBM0dHLDhKQUNtRCxvREFDWix3Q0FDMUMsMGRBd0ZBIiwiZmlsZSI6Ii9Vc2Vycy9nYXJveC9Eb2N1bWVudHMvbGVzc29uL2NvbXBvbmVudHMvZW1haWxJbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb2xvciBmcm9tIFwiY29sb3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgYmFja2dyb3VuZENvbG9yID0gXCIjZmY5ODAwXCIsXG4gIGNvbG9yID0gXCJ3aGl0ZVwiLFxuICBwbGFjZWhvbGRlciA9IFwiWW91ciBmaXJzdCBuYW1lLCBlLmcuIE5pY2hvbGFzXCIsXG4gIGxhYmVsID0gXCJGaXJzdCBuYW1lXCIsXG4gIG9uQ2xpY2tcbn0pID0+IChcbiAgPD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIklucHV0XCI+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJJbnB1dC10ZXh0XCIgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSAvPlxuICAgICAgPGxhYmVsIGZvcj1cImlucHV0XCIgY2xhc3NOYW1lPVwiSW5wdXQtbGFiZWxcIj5cbiAgICAgICAge2xhYmVsfVxuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Eb3Npc1wiKTtcblxuICAgICAgLklucHV0IHtcbiAgICAgICAgLyogZ2VuZXJpYyAqL1xuICAgICAgICAtLWd1dHRlclNtOiAwLjRyZW07XG4gICAgICAgIC0tZ3V0dGVyTWQ6IDAuOHJlbTtcbiAgICAgICAgLS1ndXR0ZXJMZzogMS42cmVtO1xuICAgICAgICAtLWd1dHRlclhsOiAyLjRyZW07XG4gICAgICAgIC0tZ3V0dGVyWHg6IDcuMnJlbTtcbiAgICAgICAgLS1jb2xvclByaW1hcnk0MDA6ICM3ZTU3YzI7XG4gICAgICAgIC0tY29sb3JQcmltYXJ5NjAwOiAjNWUzNWIxO1xuICAgICAgICAtLWNvbG9yUHJpbWFyeTgwMDogIzQ1MjdhMDtcbiAgICAgICAgLS1mb250RmFtaWx5OiBcIkRvc2lzXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgIC0tZm9udFNpemVTbTogMS4ycmVtO1xuICAgICAgICAtLWZvbnRTaXplTWQ6IDEuNnJlbTtcbiAgICAgICAgLS1mb250U2l6ZUxnOiAyLjFyZW07XG4gICAgICAgIC0tZm9udFNpemVYbDogMi44cmVtO1xuICAgICAgICAtLWZvbnRTaXplWHg6IDMuNnJlbTtcbiAgICAgICAgLS1saW5lSGVpZ2h0U206IDEuMTtcbiAgICAgICAgLS1saW5lSGVpZ2h0TWQ6IDEuODtcbiAgICAgICAgLS10cmFuc2l0aW9uRHVyYXRpb246IDMwMG1zO1xuICAgICAgICAtLXRyYW5zaXRpb25URjogY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuXG4gICAgICAgIC8qIGZsb2F0ZWQgbGFiZWxzICovXG4gICAgICAgIC0taW5wdXRQYWRkaW5nVjogdmFyKC0tZ3V0dGVyTWQpO1xuICAgICAgICAtLWlucHV0UGFkZGluZ0g6IHZhcigtLWd1dHRlckxnKTtcbiAgICAgICAgLS1pbnB1dEZvbnRTaXplOiB2YXIoLS1mb250U2l6ZUxnKTtcbiAgICAgICAgLS1pbnB1dExpbmVIZWlnaHQ6IHZhcigtLWxpbmVIZWlnaHRNZCk7XG4gICAgICAgIC0tbGFiZWxTY2FsZUZhY3RvcjogMC44O1xuICAgICAgICAtLWxhYmVsRGVmYXVsdFBvc1k6IDUwJTtcbiAgICAgICAgLS1sYWJlbFRyYW5zZm9ybWVkUG9zWTogY2FsYyhcbiAgICAgICAgICAodmFyKC0tbGFiZWxEZWZhdWx0UG9zWSkpIC1cbiAgICAgICAgICAgICh2YXIoLS1pbnB1dFBhZGRpbmdWKSAqIHZhcigtLWxhYmVsU2NhbGVGYWN0b3IpKSAtXG4gICAgICAgICAgICAodmFyKC0taW5wdXRGb250U2l6ZSkgKiB2YXIoLS1pbnB1dExpbmVIZWlnaHQpKVxuICAgICAgICApO1xuICAgICAgICAtLWlucHV0VHJhbnNpdGlvbkR1cmF0aW9uOiB2YXIoLS10cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgICAtLWlucHV0VHJhbnNpdGlvblRGOiB2YXIoLS10cmFuc2l0aW9uVEYpO1xuICAgICAgfVxuXG4gICAgICAqLFxuICAgICAgKjo6YmVmb3JlLFxuICAgICAgKjo6YWZ0ZXIge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgfVxuXG4gICAgICBodG1sIHtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICBib2R5IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgY29sb3I6ICM0NTVhNjQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZTU3YzI7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250RmFtaWx5KTtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250U2l6ZU1kKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IHZhcigtLWxpbmVIZWlnaHRNZCk7XG4gICAgICB9XG5cbiAgICAgIC5XcmFwcGVyIHtcbiAgICAgICAgZmxleDogMCAwIDgwJTtcbiAgICAgICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgICB9XG5cbiAgICAgIC5UaXRsZSB7XG4gICAgICAgIG1hcmdpbjogMCAwIHZhcigtLWd1dHRlclh4KSAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250U2l6ZVh4KTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IHZhcigtLWxpbmVIZWlnaHRTbSk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdGV4dC1zaGFkb3c6IC0wLjFyZW0gMC4xcmVtIDAuMnJlbSB2YXIoLS1jb2xvclByaW1hcnk4MDApO1xuICAgICAgfVxuXG4gICAgICAuSW5wdXQge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIC5JbnB1dC10ZXh0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogdmFyKC0taW5wdXRQYWRkaW5nVikgdmFyKC0taW5wdXRQYWRkaW5nSCk7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW5wdXRGb250U2l6ZSk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICAgICAgICBsaW5lLWhlaWdodDogdmFyKC0taW5wdXRMaW5lSGVpZ2h0KTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XG4gICAgICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgdmFyKC0tdHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICAgIH1cblxuICAgICAgLklucHV0LXRleHQ6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6ICNiMGJlYzU7XG4gICAgICB9XG5cbiAgICAgIC5JbnB1dC10ZXh0OmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYm94LXNoYWRvdzogMC4ycmVtIDAuOHJlbSAxLjZyZW0gdmFyKC0tY29sb3JQcmltYXJ5NjAwKTtcbiAgICAgIH1cblxuICAgICAgLklucHV0LWxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiA1MCU7XG4gICAgICAgIGxlZnQ6IDFyZW07XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pbnB1dEZvbnRTaXplKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1pbnB1dExpbmVIZWlnaHQpO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIHZhcigtLWxhYmVsRGVmYXVsdFBvc1kpLCAwKSBzY2FsZSgxKTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IHZhcigtLWlucHV0VHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgICAgICAgICAgdmFyKC0taW5wdXRUcmFuc2l0aW9uVEYpLFxuICAgICAgICAgIHRyYW5zZm9ybSB2YXIoLS1pbnB1dFRyYW5zaXRpb25EdXJhdGlvbikgdmFyKC0taW5wdXRUcmFuc2l0aW9uVEYpLFxuICAgICAgICAgIHZpc2liaWxpdHkgMG1zIHZhcigtLWlucHV0VHJhbnNpdGlvbkR1cmF0aW9uKSB2YXIoLS1pbnB1dFRyYW5zaXRpb25URiksXG4gICAgICAgICAgei1pbmRleCAwbXMgdmFyKC0taW5wdXRUcmFuc2l0aW9uRHVyYXRpb24pIHZhcigtLWlucHV0VHJhbnNpdGlvblRGKTtcbiAgICAgIH1cblxuICAgICAgLklucHV0LXRleHQ6cGxhY2Vob2xkZXItc2hvd24gKyAuSW5wdXQtbGFiZWwge1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgfVxuXG4gICAgICAuSW5wdXQtdGV4dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIC5JbnB1dC1sYWJlbCxcbiAgICAgIC5JbnB1dC10ZXh0OmZvY3VzOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgLklucHV0LWxhYmVsIHtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCB2YXIoLS1sYWJlbFRyYW5zZm9ybWVkUG9zWSksIDApXG4gICAgICAgICAgc2NhbGUodmFyKC0tbGFiZWxTY2FsZUZhY3RvcikpO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gdmFyKC0taW5wdXRUcmFuc2l0aW9uRHVyYXRpb24pLCB2aXNpYmlsaXR5IDBtcyxcbiAgICAgICAgICB6LWluZGV4IDBtcztcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvPlxuKTtcblxuLypcbjpyb290IHtcblxuICAgIC0tZ3V0dGVyU206IDAuNHJlbTtcbiAgICAtLWd1dHRlck1kOiAwLjhyZW07XG4gICAgLS1ndXR0ZXJMZzogO1xuICAgIC0tZ3V0dGVyWGw6IDIuNHJlbTtcbiAgICAtLWd1dHRlclh4OiA3LjJyZW07XG4gICAgLS1jb2xvclByaW1hcnk0MDA6ICM3ZTU3YzI7XG4gICAgLS1jb2xvclByaW1hcnk2MDA6ICM1ZTM1YjE7XG4gICAgLS1jb2xvclByaW1hcnk4MDA6ICM0NTI3YTA7XG4gICAgLS1mb250RmFtaWx5OiBcIkRvc2lzXCIsIHNhbnMtc2VyaWY7XG4gICAgLS1mb250U2l6ZVNtOiAxLjJyZW07XG4gICAgLS1mb250U2l6ZU1kOiAxLjZyZW07XG4gICAgLS1mb250U2l6ZUxnOiAyLjFyZW07XG4gICAgLS1mb250U2l6ZVhsOiAyLjhyZW07XG4gICAgLS1mb250U2l6ZVh4OiAzLjZyZW07XG4gICAgLS1saW5lSGVpZ2h0U206IDEuMTtcbiAgICAtLWxpbmVIZWlnaHRNZDogO1xuICAgIC0tdHJhbnNpdGlvbkR1cmF0aW9uOiAzMDBtcztcbiAgICAtLXRyYW5zaXRpb25URjogY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICAgIFxuICAgIFxuICAgIC0taW5wdXRQYWRkaW5nVjogMC44cmVtO1xuICAgIC0taW5wdXRQYWRkaW5nSDogMS42cmVtO1xuICAgIC0taW5wdXRGb250U2l6ZTogMi4xcmVtO1xuICAgIC0taW5wdXRMaW5lSGVpZ2h0OiAxLjg7XG4gICAgLS1sYWJlbFNjYWxlRmFjdG9yOiAwLjg7XG4gICAgLS1sYWJlbERlZmF1bHRQb3NZOiA7XG4gICAgLS1sYWJlbFRyYW5zZm9ybWVkUG9zWTogY2FsYyhcbiAgICAgICg1MCUpIC0gXG4gICAgICAoMC44cmVtICogMC44KSAtIFxuICAgICAgKDIuMXJlbSAqIDEuOClcbiAgICApO1xuICAgIC0taW5wdXRUcmFuc2l0aW9uRHVyYXRpb246IHZhcigtLXRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgLS1pbnB1dFRyYW5zaXRpb25URjogdmFyKC0tdHJhbnNpdGlvblRGKTtcbiAgfVxuICBcbiAgKixcbiAgKjo6YmVmb3JlLFxuICAqOjphZnRlciB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuICBcbiAgaHRtbCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIFxuICBib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBjb2xvcjogIzQ1NUE2NDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0U1N0MyO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250RmFtaWx5KTtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnRTaXplTWQpO1xuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lSGVpZ2h0TWQpO1xuICB9XG4gIFxuICAuV3JhcHBlciB7XG4gICAgZmxleDogMCAwIDgwJTtcbiAgICBtYXgtd2lkdGg6IDgwJTtcbiAgfVxuICBcbiAgLlRpdGxlIHtcbiAgICBtYXJnaW46IDAgMCB2YXIoLS1ndXR0ZXJYeCkgMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udFNpemVYeCk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogdmFyKC0tbGluZUhlaWdodFNtKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1zaGFkb3c6IC0wLjFyZW0gMC4xcmVtIDAuMnJlbSB2YXIoLS1jb2xvclByaW1hcnk4MDApO1xuICB9XG4gIFxuICAuSW5wdXQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBcbiAgLklucHV0LXRleHQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiB2YXIoLS1pbnB1dFBhZGRpbmdWKSB2YXIoLS1pbnB1dFBhZGRpbmdIKTtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBmb250LXNpemU6IHZhcigtLWlucHV0Rm9udFNpemUpO1xuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1pbnB1dExpbmVIZWlnaHQpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyB2YXIoLS10cmFuc2l0aW9uRHVyYXRpb24pO1xuICB9XG4gIFxuICAuSW5wdXQtdGV4dDo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjQjBCRUM1O1xuICB9XG4gIFxuICAuSW5wdXQtdGV4dDpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3gtc2hhZG93OiAwLjJyZW0gMC44cmVtIDEuNnJlbSB2YXIoLS1jb2xvclByaW1hcnk2MDApO1xuICB9XG4gIFxuICAuSW5wdXQtbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDUwJTtcbiAgICBsZWZ0OiAxcmVtO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogdmFyKC0taW5wdXRGb250U2l6ZSk7XG4gICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWlucHV0TGluZUhlaWdodCk7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IFxuICAgICAgdHJhbnNsYXRlM2QoMCwgdmFyKC0tbGFiZWxEZWZhdWx0UG9zWSksIDApXG4gICAgICBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gICAgdHJhbnNpdGlvbjpcbiAgICAgIG9wYWNpdHkgdmFyKC0taW5wdXRUcmFuc2l0aW9uRHVyYXRpb24pIHZhcigtLWlucHV0VHJhbnNpdGlvblRGKSxcbiAgICAgIHRyYW5zZm9ybSB2YXIoLS1pbnB1dFRyYW5zaXRpb25EdXJhdGlvbikgdmFyKC0taW5wdXRUcmFuc2l0aW9uVEYpLFxuICAgICAgdmlzaWJpbGl0eSAwbXMgdmFyKC0taW5wdXRUcmFuc2l0aW9uRHVyYXRpb24pIHZhcigtLWlucHV0VHJhbnNpdGlvblRGKSxcbiAgICAgIHotaW5kZXggMG1zIHZhcigtLWlucHV0VHJhbnNpdGlvbkR1cmF0aW9uKSB2YXIoLS1pbnB1dFRyYW5zaXRpb25URik7XG4gIH1cbiAgXG4gIC5JbnB1dC10ZXh0OnBsYWNlaG9sZGVyLXNob3duICsgLklucHV0LWxhYmVsIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgei1pbmRleDogLTE7XG4gIH1cbiAgXG4gIC5JbnB1dC10ZXh0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgLklucHV0LWxhYmVsLFxuICAuSW5wdXQtdGV4dDpmb2N1czpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIC5JbnB1dC1sYWJlbCB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOlxuICAgICAgdHJhbnNsYXRlM2QoMCwgdmFyKC0tbGFiZWxUcmFuc2Zvcm1lZFBvc1kpLCAwKVxuICAgICAgc2NhbGUodmFyKC0tbGFiZWxTY2FsZUZhY3RvcikpO1xuICAgIHRyYW5zaXRpb246XG4gICAgICB0cmFuc2Zvcm0gdmFyKC0taW5wdXRUcmFuc2l0aW9uRHVyYXRpb24pLFxuICAgICAgdmlzaWJpbGl0eSAwbXMsXG4gICAgICB6LWluZGV4IDBtcztcbiAgfSovXG4iXX0= */\n/*@ sourceURL=/Users/garox/Documents/lesson/components/emailInput.js */"));
});
/*
:root {

    --gutterSm: 0.4rem;
    --gutterMd: 0.8rem;
    --gutterLg: ;
    --gutterXl: 2.4rem;
    --gutterXx: 7.2rem;
    --colorPrimary400: #7e57c2;
    --colorPrimary600: #5e35b1;
    --colorPrimary800: #4527a0;
    --fontFamily: "Dosis", sans-serif;
    --fontSizeSm: 1.2rem;
    --fontSizeMd: 1.6rem;
    --fontSizeLg: 2.1rem;
    --fontSizeXl: 2.8rem;
    --fontSizeXx: 3.6rem;
    --lineHeightSm: 1.1;
    --lineHeightMd: ;
    --transitionDuration: 300ms;
    --transitionTF: cubic-bezier(0.645, 0.045, 0.355, 1);
    
    
    --inputPaddingV: 0.8rem;
    --inputPaddingH: 1.6rem;
    --inputFontSize: 2.1rem;
    --inputLineHeight: 1.8;
    --labelScaleFactor: 0.8;
    --labelDefaultPosY: ;
    --labelTransformedPosY: calc(
      (50%) - 
      (0.8rem * 0.8) - 
      (2.1rem * 1.8)
    );
    --inputTransitionDuration: var(--transitionDuration);
    --inputTransitionTF: var(--transitionTF);
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  html {
    font-size: 10px;
  }
  
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    color: #455A64;
    background-color: #7E57C2;
    font-family: var(--fontFamily);
    font-size: var(--fontSizeMd);
    line-height: var(--lineHeightMd);
  }
  
  .Wrapper {
    flex: 0 0 80%;
    max-width: 80%;
  }
  
  .Title {
    margin: 0 0 var(--gutterXx) 0;
    padding: 0;
    color: #fff;
    font-size: var(--fontSizeXx);
    font-weight: 400;
    line-height: var(--lineHeightSm);
    text-align: center;
    text-shadow: -0.1rem 0.1rem 0.2rem var(--colorPrimary800);
  }
  
  .Input {
    position: relative;
  }
  
  .Input-text {
    display: block;
    margin: 0;
    padding: var(--inputPaddingV) var(--inputPaddingH);
    color: inherit;
    width: 100%;
    font-family: inherit;
    font-size: var(--inputFontSize);
    font-weight: inherit;
    line-height: var(--inputLineHeight);
    border: none;
    border-radius: 0.4rem;
    transition: box-shadow var(--transitionDuration);
  }
  
  .Input-text::placeholder {
    color: #B0BEC5;
  }
  
  .Input-text:focus {
    outline: none;
    box-shadow: 0.2rem 0.8rem 1.6rem var(--colorPrimary600);
  }
  
  .Input-label {
    display: block;
    position: absolute;
    bottom: 50%;
    left: 1rem;
    color: #fff;
    font-family: inherit;
    font-size: var(--inputFontSize);
    font-weight: inherit;
    line-height: var(--inputLineHeight);
    opacity: 0;
    transform: 
      translate3d(0, var(--labelDefaultPosY), 0)
      scale(1);
    transform-origin: 0 0;
    transition:
      opacity var(--inputTransitionDuration) var(--inputTransitionTF),
      transform var(--inputTransitionDuration) var(--inputTransitionTF),
      visibility 0ms var(--inputTransitionDuration) var(--inputTransitionTF),
      z-index 0ms var(--inputTransitionDuration) var(--inputTransitionTF);
  }
  
  .Input-text:placeholder-shown + .Input-label {
    visibility: hidden;
    z-index: -1;
  }
  
  .Input-text:not(:placeholder-shown) + .Input-label,
  .Input-text:focus:not(:placeholder-shown) + .Input-label {
    visibility: visible;
    z-index: 1;
    opacity: 1;
    transform:
      translate3d(0, var(--labelTransformedPosY), 0)
      scale(var(--labelScaleFactor));
    transition:
      transform var(--inputTransitionDuration),
      visibility 0ms,
      z-index 0ms;
  }*/

/***/ })

})
//# sourceMappingURL=index.js.3b05f6d0edd7fd6a60a6.hot-update.js.map