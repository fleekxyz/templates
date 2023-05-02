"use strict";
exports.id = 504;
exports.ids = [504];
exports.modules = {

/***/ 504:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "zx": () => (/* reexport */ Button),
  "CI": () => (/* reexport */ Placeholders),
  "Mj": () => (/* reexport */ SearchInput)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@emotion/css"
var css_ = __webpack_require__(2842);
// EXTERNAL MODULE: ./theme.js
var theme = __webpack_require__(9306);
;// CONCATENATED MODULE: ./components/Button.js



function Button({ buttonText , onClick  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: buttonStyle,
        onClick: onClick,
        children: buttonText
    });
}
const buttonStyle = css_.css`
border: none;
outline: none;
margin-left: 15px;
color: #340036;
padding: 17px;
border-radius: 25px;
cursor: pointer;
font-size: 14px;
font-weight: 500;
background-color: rgb(${theme/* PINK */.h});
transition: all .35s;
width: 240px;
letter-spacing: .75px;
&:hover {
  background-color: rgba(${theme/* PINK */.h}, .75);
}
`;

;// CONCATENATED MODULE: ./components/SearchInput.js


function SearchInput({ placeholder , onChange , value , onKeyDown =null  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("input", {
        placeholder: placeholder,
        onChange: onChange,
        value: value,
        className: inputStyle,
        onKeyDown: onKeyDown
    });
}
const inputStyle = css_.css`
  outline: none;
  border: none;
  padding: 15px 20px;
  font-size: 16px;
  border-radius: 25px;
  border: 2px solid rgba(0, 0, 0, .04);
  transition: all .4s;
  width: 300px;
  background-color: #fafafa;
  &:focus {
    background-color: white;
    border: 2px solid rgba(0, 0, 0, .1);
  }
`;

;// CONCATENATED MODULE: ./components/Placeholders.js


function Placeholders({ number  }) {
    const rows = [];
    for(let i = 0; i < number; i++){
        rows.push(/*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: grayLoadingStyle
        }, i));
    }
    return rows;
}
const shimmer = css_.keyframes`
  from {
    opacity: .2;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: .2;
  }
`;
const grayLoadingStyle = css_.css`
  background-color: rgba(0, 0, 0, .1);
  height: 115px;
  width: 100%;
  margin-top: 13px;
  border-radius: 7px;
  animation: ${shimmer} 2s infinite linear;
`;

;// CONCATENATED MODULE: ./components/index.js





/***/ }),

/***/ 9306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ PINK)
/* harmony export */ });
const PINK = "249, 92, 255";


/***/ })

};
;