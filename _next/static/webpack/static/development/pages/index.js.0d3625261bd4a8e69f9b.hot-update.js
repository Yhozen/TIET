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
    className: "jsx-2727584878" + " " + "Input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    placeholder: placeholder,
    className: "jsx-2727584878" + " " + "Input-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx("label", {
    "for": "input",
    className: "jsx-2727584878" + " " + "Input-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, label)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2727584878",
    __self: this
  }, "@import url(\"https://fonts.googleapis.com/css?family=Dosis\");input.jsx-2727584878{--gutterSm:0.4rem;--gutterMd:0.8rem;--gutterLg:1.6rem;--gutterXl:2.4rem;--gutterXx:7.2rem;--colorPrimary400:#7e57c2;--colorPrimary600:#5e35b1;--colorPrimary800:#4527a0;--fontFamily:\"Dosis\",sans-serif;--fontSizeSm:1.2rem;--fontSizeMd:1.6rem;--fontSizeLg:2.1rem;--fontSizeXl:2.8rem;--fontSizeXx:3.6rem;--lineHeightSm:1.1;--lineHeightMd:1.8;--transitionDuration:300ms;--transitionTF:cubic-bezier(0.645,0.045,0.355,1);--inputPaddingV:var(--gutterMd);--inputPaddingH:var(--gutterLg);--inputFontSize:var(--fontSizeLg);--inputLineHeight:var(--lineHeightMd);--labelScaleFactor:0.8;--labelDefaultPosY:50%;--labelTransformedPosY:calc( (var(--labelDefaultPosY)) - (var(--inputPaddingV) * var(--labelScaleFactor)) - (var(--inputFontSize) * var(--inputLineHeight)) );--inputTransitionDuration:var(--transitionDuration);--inputTransitionTF:var(--transitionTF);}*.jsx-2727584878,*.jsx-2727584878::before,*.jsx-2727584878::after{box-sizing:border-box;}html.jsx-2727584878{font-size:10px;}body.jsx-2727584878{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;overflow:hidden;width:100vw;height:100vh;color:#455a64;background-color:#7e57c2;font-family:var(--fontFamily);font-size:var(--fontSizeMd);line-height:var(--lineHeightMd);}.Wrapper.jsx-2727584878{-webkit-flex:0 0 80%;-ms-flex:0 0 80%;flex:0 0 80%;max-width:80%;}.Title.jsx-2727584878{margin:0 0 var(--gutterXx) 0;padding:0;color:#fff;font-size:var(--fontSizeXx);font-weight:400;line-height:var(--lineHeightSm);text-align:center;text-shadow:-0.1rem 0.1rem 0.2rem var(--colorPrimary800);}.Input.jsx-2727584878{position:relative;}.Input-text.jsx-2727584878{display:block;margin:0;padding:var(--inputPaddingV) var(--inputPaddingH);color:inherit;width:100%;font-family:inherit;font-size:var(--inputFontSize);font-weight:inherit;line-height:var(--inputLineHeight);border:none;border-radius:0.4rem;-webkit-transition:box-shadow var(--transitionDuration);transition:box-shadow var(--transitionDuration);}.Input-text.jsx-2727584878::-webkit-input-placeholder{color:#b0bec5;}.Input-text.jsx-2727584878::-moz-placeholder{color:#b0bec5;}.Input-text.jsx-2727584878:-ms-input-placeholder{color:#b0bec5;}.Input-text.jsx-2727584878::placeholder{color:#b0bec5;}.Input-text.jsx-2727584878:focus{outline:none;box-shadow:0.2rem 0.8rem 1.6rem var(--colorPrimary600);}.Input-label.jsx-2727584878{display:block;position:absolute;bottom:50%;left:1rem;color:#fff;font-family:inherit;font-size:var(--inputFontSize);font-weight:inherit;line-height:var(--inputLineHeight);opacity:0;-webkit-transform:translate3d(0,var(--labelDefaultPosY),0) scale(1);-ms-transform:translate3d(0,var(--labelDefaultPosY),0) scale(1);transform:translate3d(0,var(--labelDefaultPosY),0) scale(1);-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;-webkit-transition:opacity var(--inputTransitionDuration) var(--inputTransitionTF), -webkit-transform var(--inputTransitionDuration) var(--inputTransitionTF), visibility 0ms var(--inputTransitionDuration) var(--inputTransitionTF), z-index 0ms var(--inputTransitionDuration) var(--inputTransitionTF);-webkit-transition:opacity var(--inputTransitionDuration) var(--inputTransitionTF), transform var(--inputTransitionDuration) var(--inputTransitionTF), visibility 0ms var(--inputTransitionDuration) var(--inputTransitionTF), z-index 0ms var(--inputTransitionDuration) var(--inputTransitionTF);transition:opacity var(--inputTransitionDuration) var(--inputTransitionTF), transform var(--inputTransitionDuration) var(--inputTransitionTF), visibility 0ms var(--inputTransitionDuration) var(--inputTransitionTF), z-index 0ms var(--inputTransitionDuration) var(--inputTransitionTF);}.Input-text.jsx-2727584878:placeholder-shown+.Input-label.jsx-2727584878{visibility:hidden;z-index:-1;}.Input-text.jsx-2727584878:not(:placeholder-shown)+.Input-label.jsx-2727584878,.Input-text.jsx-2727584878:focus.jsx-2727584878:not(:placeholder-shown)+.Input-label.jsx-2727584878{visibility:visible;z-index:1;opacity:1;-webkit-transform:translate3d(0,var(--labelTransformedPosY),0) scale(var(--labelScaleFactor));-ms-transform:translate3d(0,var(--labelTransformedPosY),0) scale(var(--labelScaleFactor));transform:translate3d(0,var(--labelTransformedPosY),0) scale(var(--labelScaleFactor));-webkit-transition:-webkit-transform var(--inputTransitionDuration),visibility 0ms, z-index 0ms;-webkit-transition:transform var(--inputTransitionDuration),visibility 0ms, z-index 0ms;transition:transform var(--inputTransitionDuration),visibility 0ms, z-index 0ms;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYXJveC9Eb2N1bWVudHMvbGVzc29uL2NvbXBvbmVudHMvZW1haWxJbnB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQmdCLEFBRW1FLEFBSXhDLEFBc0NJLEFBSVAsQUFJRixBQWNBLEFBS2dCLEFBV1gsQUFJSixBQWVBLEFBSUQsQUFLQyxBQW9CSSxBQU1DLGFBOUJvQyxDQW5COUMsQUFlWCxBQVNvQixDQTlEcEIsR0ExQ29CLEFBNEVwQixBQWdEYSxDQU1ELEdBNUZaLENBMkNvRCxNQWhCeEMsQUE0RFosQUFNWSxHQTFCQyxJQXhHTyxHQWlFUCxBQW1FcUIsSUEzQnRCLE9BdkNrQixDQVBkLEVBK0NILENBekdPLFVBMEdFLENBL0N0QixHQXVDQSxJQWpHb0IsQ0ErRUosQ0FwQ0ssSUFzQkgsTUF5Q2UsR0ExQnBCLEdBL0VlLElBaUVNLElBZVosaUJBMEJBLENBekdNLEVBZ0ZLLFFBZmIsU0F5Q2lCLE9BekdULEVBaUUrQixLQWVyQyxrQkF2Q0csQ0F4Q1UsQ0FnRkUsQ0F5QnpCLFVBQ29ELG9CQXpHMUMsQ0FnRXRCLEdBZ0JjLFlBQ1MsSUFoRkQsaUJBaUY0QixHQWhGNUIsb0JBQ0EsTUFxQ0osY0FwQ0ksRUFxQ1IsWUFDQyxNQXJDTSxPQXNDTCxFQW9GRCxVQXpITSxFQXNDTSxpQkFyQ0UsR0E0RTdCLEtBdENnQyxtQkFyQ3NCLE9Ba0cvQixJQTVETyw0QkFDSSxVQXBDQSxzQkFxQ2xDLFVBcENrQyxDQW1HcUMsK0JBbEduQyxrQ0FDSSxzQ0FDZix1QkFDQSxBQWdIekIsdUJBM0dHLDhKQUNtRCxvREFDWix3Q0FDMUMsMGRBd0ZBIiwiZmlsZSI6Ii9Vc2Vycy9nYXJveC9Eb2N1bWVudHMvbGVzc29uL2NvbXBvbmVudHMvZW1haWxJbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb2xvciBmcm9tIFwiY29sb3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgYmFja2dyb3VuZENvbG9yID0gXCIjZmY5ODAwXCIsXG4gIGNvbG9yID0gXCJ3aGl0ZVwiLFxuICBwbGFjZWhvbGRlciA9IFwiWW91ciBmaXJzdCBuYW1lLCBlLmcuIE5pY2hvbGFzXCIsXG4gIGxhYmVsID0gXCJGaXJzdCBuYW1lXCIsXG4gIG9uQ2xpY2tcbn0pID0+IChcbiAgPD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIklucHV0XCI+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJJbnB1dC10ZXh0XCIgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSAvPlxuICAgICAgPGxhYmVsIGZvcj1cImlucHV0XCIgY2xhc3NOYW1lPVwiSW5wdXQtbGFiZWxcIj5cbiAgICAgICAge2xhYmVsfVxuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Eb3Npc1wiKTtcblxuICAgICAgaW5wdXQge1xuICAgICAgICAvKiBnZW5lcmljICovXG4gICAgICAgIC0tZ3V0dGVyU206IDAuNHJlbTtcbiAgICAgICAgLS1ndXR0ZXJNZDogMC44cmVtO1xuICAgICAgICAtLWd1dHRlckxnOiAxLjZyZW07XG4gICAgICAgIC0tZ3V0dGVyWGw6IDIuNHJlbTtcbiAgICAgICAgLS1ndXR0ZXJYeDogNy4ycmVtO1xuICAgICAgICAtLWNvbG9yUHJpbWFyeTQwMDogIzdlNTdjMjtcbiAgICAgICAgLS1jb2xvclByaW1hcnk2MDA6ICM1ZTM1YjE7XG4gICAgICAgIC0tY29sb3JQcmltYXJ5ODAwOiAjNDUyN2EwO1xuICAgICAgICAtLWZvbnRGYW1pbHk6IFwiRG9zaXNcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgLS1mb250U2l6ZVNtOiAxLjJyZW07XG4gICAgICAgIC0tZm9udFNpemVNZDogMS42cmVtO1xuICAgICAgICAtLWZvbnRTaXplTGc6IDIuMXJlbTtcbiAgICAgICAgLS1mb250U2l6ZVhsOiAyLjhyZW07XG4gICAgICAgIC0tZm9udFNpemVYeDogMy42cmVtO1xuICAgICAgICAtLWxpbmVIZWlnaHRTbTogMS4xO1xuICAgICAgICAtLWxpbmVIZWlnaHRNZDogMS44O1xuICAgICAgICAtLXRyYW5zaXRpb25EdXJhdGlvbjogMzAwbXM7XG4gICAgICAgIC0tdHJhbnNpdGlvblRGOiBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG5cbiAgICAgICAgLyogZmxvYXRlZCBsYWJlbHMgKi9cbiAgICAgICAgLS1pbnB1dFBhZGRpbmdWOiB2YXIoLS1ndXR0ZXJNZCk7XG4gICAgICAgIC0taW5wdXRQYWRkaW5nSDogdmFyKC0tZ3V0dGVyTGcpO1xuICAgICAgICAtLWlucHV0Rm9udFNpemU6IHZhcigtLWZvbnRTaXplTGcpO1xuICAgICAgICAtLWlucHV0TGluZUhlaWdodDogdmFyKC0tbGluZUhlaWdodE1kKTtcbiAgICAgICAgLS1sYWJlbFNjYWxlRmFjdG9yOiAwLjg7XG4gICAgICAgIC0tbGFiZWxEZWZhdWx0UG9zWTogNTAlO1xuICAgICAgICAtLWxhYmVsVHJhbnNmb3JtZWRQb3NZOiBjYWxjKFxuICAgICAgICAgICh2YXIoLS1sYWJlbERlZmF1bHRQb3NZKSkgLVxuICAgICAgICAgICAgKHZhcigtLWlucHV0UGFkZGluZ1YpICogdmFyKC0tbGFiZWxTY2FsZUZhY3RvcikpIC1cbiAgICAgICAgICAgICh2YXIoLS1pbnB1dEZvbnRTaXplKSAqIHZhcigtLWlucHV0TGluZUhlaWdodCkpXG4gICAgICAgICk7XG4gICAgICAgIC0taW5wdXRUcmFuc2l0aW9uRHVyYXRpb246IHZhcigtLXRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgICAgIC0taW5wdXRUcmFuc2l0aW9uVEY6IHZhcigtLXRyYW5zaXRpb25URik7XG4gICAgICB9XG5cbiAgICAgICosXG4gICAgICAqOjpiZWZvcmUsXG4gICAgICAqOjphZnRlciB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB9XG5cbiAgICAgIGh0bWwge1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICB9XG5cbiAgICAgIGJvZHkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICBjb2xvcjogIzQ1NWE2NDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzdlNTdjMjtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnRGYW1pbHkpO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnRTaXplTWQpO1xuICAgICAgICBsaW5lLWhlaWdodDogdmFyKC0tbGluZUhlaWdodE1kKTtcbiAgICAgIH1cblxuICAgICAgLldyYXBwZXIge1xuICAgICAgICBmbGV4OiAwIDAgODAlO1xuICAgICAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICAgIH1cblxuICAgICAgLlRpdGxlIHtcbiAgICAgICAgbWFyZ2luOiAwIDAgdmFyKC0tZ3V0dGVyWHgpIDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnRTaXplWHgpO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBsaW5lLWhlaWdodDogdmFyKC0tbGluZUhlaWdodFNtKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0ZXh0LXNoYWRvdzogLTAuMXJlbSAwLjFyZW0gMC4ycmVtIHZhcigtLWNvbG9yUHJpbWFyeTgwMCk7XG4gICAgICB9XG5cbiAgICAgIC5JbnB1dCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgLklucHV0LXRleHQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiB2YXIoLS1pbnB1dFBhZGRpbmdWKSB2YXIoLS1pbnB1dFBhZGRpbmdIKTtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pbnB1dEZvbnRTaXplKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1pbnB1dExpbmVIZWlnaHQpO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcbiAgICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyB2YXIoLS10cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgfVxuXG4gICAgICAuSW5wdXQtdGV4dDo6cGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogI2IwYmVjNTtcbiAgICAgIH1cblxuICAgICAgLklucHV0LXRleHQ6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBib3gtc2hhZG93OiAwLjJyZW0gMC44cmVtIDEuNnJlbSB2YXIoLS1jb2xvclByaW1hcnk2MDApO1xuICAgICAgfVxuXG4gICAgICAuSW5wdXQtbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDUwJTtcbiAgICAgICAgbGVmdDogMXJlbTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWlucHV0Rm9udFNpemUpO1xuICAgICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IHZhcigtLWlucHV0TGluZUhlaWdodCk7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgdmFyKC0tbGFiZWxEZWZhdWx0UG9zWSksIDApIHNjYWxlKDEpO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgdmFyKC0taW5wdXRUcmFuc2l0aW9uRHVyYXRpb24pXG4gICAgICAgICAgICB2YXIoLS1pbnB1dFRyYW5zaXRpb25URiksXG4gICAgICAgICAgdHJhbnNmb3JtIHZhcigtLWlucHV0VHJhbnNpdGlvbkR1cmF0aW9uKSB2YXIoLS1pbnB1dFRyYW5zaXRpb25URiksXG4gICAgICAgICAgdmlzaWJpbGl0eSAwbXMgdmFyKC0taW5wdXRUcmFuc2l0aW9uRHVyYXRpb24pIHZhcigtLWlucHV0VHJhbnNpdGlvblRGKSxcbiAgICAgICAgICB6LWluZGV4IDBtcyB2YXIoLS1pbnB1dFRyYW5zaXRpb25EdXJhdGlvbikgdmFyKC0taW5wdXRUcmFuc2l0aW9uVEYpO1xuICAgICAgfVxuXG4gICAgICAuSW5wdXQtdGV4dDpwbGFjZWhvbGRlci1zaG93biArIC5JbnB1dC1sYWJlbCB7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgICB9XG5cbiAgICAgIC5JbnB1dC10ZXh0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgLklucHV0LWxhYmVsLFxuICAgICAgLklucHV0LXRleHQ6Zm9jdXM6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyAuSW5wdXQtbGFiZWwge1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIHZhcigtLWxhYmVsVHJhbnNmb3JtZWRQb3NZKSwgMClcbiAgICAgICAgICBzY2FsZSh2YXIoLS1sYWJlbFNjYWxlRmFjdG9yKSk7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSB2YXIoLS1pbnB1dFRyYW5zaXRpb25EdXJhdGlvbiksIHZpc2liaWxpdHkgMG1zLFxuICAgICAgICAgIHotaW5kZXggMG1zO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC8+XG4pO1xuXG4vKlxuOnJvb3Qge1xuXG4gICAgLS1ndXR0ZXJTbTogMC40cmVtO1xuICAgIC0tZ3V0dGVyTWQ6IDAuOHJlbTtcbiAgICAtLWd1dHRlckxnOiA7XG4gICAgLS1ndXR0ZXJYbDogMi40cmVtO1xuICAgIC0tZ3V0dGVyWHg6IDcuMnJlbTtcbiAgICAtLWNvbG9yUHJpbWFyeTQwMDogIzdlNTdjMjtcbiAgICAtLWNvbG9yUHJpbWFyeTYwMDogIzVlMzViMTtcbiAgICAtLWNvbG9yUHJpbWFyeTgwMDogIzQ1MjdhMDtcbiAgICAtLWZvbnRGYW1pbHk6IFwiRG9zaXNcIiwgc2Fucy1zZXJpZjtcbiAgICAtLWZvbnRTaXplU206IDEuMnJlbTtcbiAgICAtLWZvbnRTaXplTWQ6IDEuNnJlbTtcbiAgICAtLWZvbnRTaXplTGc6IDIuMXJlbTtcbiAgICAtLWZvbnRTaXplWGw6IDIuOHJlbTtcbiAgICAtLWZvbnRTaXplWHg6IDMuNnJlbTtcbiAgICAtLWxpbmVIZWlnaHRTbTogMS4xO1xuICAgIC0tbGluZUhlaWdodE1kOiA7XG4gICAgLS10cmFuc2l0aW9uRHVyYXRpb246IDMwMG1zO1xuICAgIC0tdHJhbnNpdGlvblRGOiBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gICAgXG4gICAgXG4gICAgLS1pbnB1dFBhZGRpbmdWOiAwLjhyZW07XG4gICAgLS1pbnB1dFBhZGRpbmdIOiAxLjZyZW07XG4gICAgLS1pbnB1dEZvbnRTaXplOiAyLjFyZW07XG4gICAgLS1pbnB1dExpbmVIZWlnaHQ6IDEuODtcbiAgICAtLWxhYmVsU2NhbGVGYWN0b3I6IDAuODtcbiAgICAtLWxhYmVsRGVmYXVsdFBvc1k6IDtcbiAgICAtLWxhYmVsVHJhbnNmb3JtZWRQb3NZOiBjYWxjKFxuICAgICAgKDUwJSkgLSBcbiAgICAgICgwLjhyZW0gKiAwLjgpIC0gXG4gICAgICAoMi4xcmVtICogMS44KVxuICAgICk7XG4gICAgLS1pbnB1dFRyYW5zaXRpb25EdXJhdGlvbjogdmFyKC0tdHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICAtLWlucHV0VHJhbnNpdGlvblRGOiB2YXIoLS10cmFuc2l0aW9uVEYpO1xuICB9XG4gIFxuICAqLFxuICAqOjpiZWZvcmUsXG4gICo6OmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIFxuICBodG1sIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbiAgXG4gIGJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGNvbG9yOiAjNDU1QTY0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3RTU3QzI7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnRGYW1pbHkpO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udFNpemVNZCk7XG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWxpbmVIZWlnaHRNZCk7XG4gIH1cbiAgXG4gIC5XcmFwcGVyIHtcbiAgICBmbGV4OiAwIDAgODAlO1xuICAgIG1heC13aWR0aDogODAlO1xuICB9XG4gIFxuICAuVGl0bGUge1xuICAgIG1hcmdpbjogMCAwIHZhcigtLWd1dHRlclh4KSAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250U2l6ZVh4KTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lSGVpZ2h0U20pO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXNoYWRvdzogLTAuMXJlbSAwLjFyZW0gMC4ycmVtIHZhcigtLWNvbG9yUHJpbWFyeTgwMCk7XG4gIH1cbiAgXG4gIC5JbnB1dCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICAuSW5wdXQtdGV4dCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IHZhcigtLWlucHV0UGFkZGluZ1YpIHZhcigtLWlucHV0UGFkZGluZ0gpO1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogdmFyKC0taW5wdXRGb250U2l6ZSk7XG4gICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWlucHV0TGluZUhlaWdodCk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IHZhcigtLXRyYW5zaXRpb25EdXJhdGlvbik7XG4gIH1cbiAgXG4gIC5JbnB1dC10ZXh0OjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICNCMEJFQzU7XG4gIH1cbiAgXG4gIC5JbnB1dC10ZXh0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJveC1zaGFkb3c6IDAuMnJlbSAwLjhyZW0gMS42cmVtIHZhcigtLWNvbG9yUHJpbWFyeTYwMCk7XG4gIH1cbiAgXG4gIC5JbnB1dC1sYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNTAlO1xuICAgIGxlZnQ6IDFyZW07XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgZm9udC1zaXplOiB2YXIoLS1pbnB1dEZvbnRTaXplKTtcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgICBsaW5lLWhlaWdodDogdmFyKC0taW5wdXRMaW5lSGVpZ2h0KTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogXG4gICAgICB0cmFuc2xhdGUzZCgwLCB2YXIoLS1sYWJlbERlZmF1bHRQb3NZKSwgMClcbiAgICAgIHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgICB0cmFuc2l0aW9uOlxuICAgICAgb3BhY2l0eSB2YXIoLS1pbnB1dFRyYW5zaXRpb25EdXJhdGlvbikgdmFyKC0taW5wdXRUcmFuc2l0aW9uVEYpLFxuICAgICAgdHJhbnNmb3JtIHZhcigtLWlucHV0VHJhbnNpdGlvbkR1cmF0aW9uKSB2YXIoLS1pbnB1dFRyYW5zaXRpb25URiksXG4gICAgICB2aXNpYmlsaXR5IDBtcyB2YXIoLS1pbnB1dFRyYW5zaXRpb25EdXJhdGlvbikgdmFyKC0taW5wdXRUcmFuc2l0aW9uVEYpLFxuICAgICAgei1pbmRleCAwbXMgdmFyKC0taW5wdXRUcmFuc2l0aW9uRHVyYXRpb24pIHZhcigtLWlucHV0VHJhbnNpdGlvblRGKTtcbiAgfVxuICBcbiAgLklucHV0LXRleHQ6cGxhY2Vob2xkZXItc2hvd24gKyAuSW5wdXQtbGFiZWwge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB6LWluZGV4OiAtMTtcbiAgfVxuICBcbiAgLklucHV0LXRleHQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyAuSW5wdXQtbGFiZWwsXG4gIC5JbnB1dC10ZXh0OmZvY3VzOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgLklucHV0LWxhYmVsIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06XG4gICAgICB0cmFuc2xhdGUzZCgwLCB2YXIoLS1sYWJlbFRyYW5zZm9ybWVkUG9zWSksIDApXG4gICAgICBzY2FsZSh2YXIoLS1sYWJlbFNjYWxlRmFjdG9yKSk7XG4gICAgdHJhbnNpdGlvbjpcbiAgICAgIHRyYW5zZm9ybSB2YXIoLS1pbnB1dFRyYW5zaXRpb25EdXJhdGlvbiksXG4gICAgICB2aXNpYmlsaXR5IDBtcyxcbiAgICAgIHotaW5kZXggMG1zO1xuICB9Ki9cbiJdfQ== */\n/*@ sourceURL=/Users/garox/Documents/lesson/components/emailInput.js */"));
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
//# sourceMappingURL=index.js.0d3625261bd4a8e69f9b.hot-update.js.map