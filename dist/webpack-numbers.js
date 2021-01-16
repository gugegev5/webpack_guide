(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash", "react"], factory);
	else if(typeof exports === 'object')
		exports["webpackNumbers"] = factory(require("lodash"), require("react"));
	else
		root["webpackNumbers"] = factory(root["_"], root["react"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Time.tsx":
/*!**********************!*\
  !*** ./src/Time.tsx ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Time
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

let c = 0;
function Time({
  defaultTime,
  getTime
}) {
  const [time, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const i = setInterval(() => {
      const t = c++;
      setTime(t);
      getTime(t);
    }, 1000);
    return () => clearInterval(i);
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setTime(defaultTime);
  }, [defaultTime]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "block",
      width: "100vw",
      height: "100vh"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "input:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    onChange: e => {
      setTime(e.target.value);
      getTime(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "time:", time));
}

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "numToWord": () => /* binding */ numToWord,
/* harmony export */   "wordToNum": () => /* binding */ wordToNum,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ref_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ref.json */ "./src/ref.json");
/* harmony import */ var _Time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Time */ "./src/Time.tsx");



function numToWord(num) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default().reduce(_ref_json__WEBPACK_IMPORTED_MODULE_1__, (accum, ref) => {
    return ref.num === num ? ref.word : accum;
  }, "");
}
function wordToNum(word) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default().reduce(_ref_json__WEBPACK_IMPORTED_MODULE_1__, (accum, ref) => {
    return ref.word === word && word.toLowerCase() ? ref.num : accum;
  }, -1);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Time__WEBPACK_IMPORTED_MODULE_2__.default);

/***/ }),

/***/ "./src/ref.json":
/*!**********************!*\
  !*** ./src/ref.json ***!
  \**********************/
/***/ ((module) => {

module.exports = JSON.parse("[{\"num\":1,\"word\":\"One\"},{\"num\":2,\"word\":\"Two\"},{\"num\":3,\"word\":\"Three\"},{\"num\":4,\"word\":\"Four\"},{\"num\":5,\"word\":\"Five\"},{\"num\":0,\"word\":\"Zero\"}]");

/***/ }),

/***/ "lodash":
/*!*************************************************************************************!*\
  !*** external {"commonjs":"lodash","commonjs2":"lodash","amd":"lodash","root":"_"} ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"react"} ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.tsx");
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrTnVtYmVycy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vd2VicGFja051bWJlcnMvLi9zcmMvVGltZS50c3giLCJ3ZWJwYWNrOi8vd2VicGFja051bWJlcnMvLi9zcmMvaW5kZXgudHN4Iiwid2VicGFjazovL3dlYnBhY2tOdW1iZXJzL2V4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJsb2Rhc2hcIixcImNvbW1vbmpzMlwiOlwibG9kYXNoXCIsXCJhbWRcIjpcImxvZGFzaFwiLFwicm9vdFwiOlwiX1wifSIsIndlYnBhY2s6Ly93ZWJwYWNrTnVtYmVycy9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwicmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImFtZFwiOlwicmVhY3RcIixcInJvb3RcIjpcInJlYWN0XCJ9Iiwid2VicGFjazovL3dlYnBhY2tOdW1iZXJzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2tOdW1iZXJzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2tOdW1iZXJzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrTnVtYmVycy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2tOdW1iZXJzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFja051bWJlcnMvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbImMiLCJUaW1lIiwiZGVmYXVsdFRpbWUiLCJnZXRUaW1lIiwidGltZSIsInNldFRpbWUiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImkiLCJzZXRJbnRlcnZhbCIsInQiLCJjbGVhckludGVydmFsIiwiZGlzcGxheSIsIndpZHRoIiwiaGVpZ2h0IiwiZSIsInRhcmdldCIsInZhbHVlIiwibnVtVG9Xb3JkIiwibnVtIiwiXyIsIm51bVJlZiIsImFjY3VtIiwicmVmIiwid29yZCIsIndvcmRUb051bSIsInRvTG93ZXJDYXNlIiwiTG9hZGVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBRUEsSUFBSUEsQ0FBQyxHQUFHLENBQVI7QUFFZSxTQUFTQyxJQUFULENBQWM7QUFBRUMsYUFBRjtBQUFlQztBQUFmLENBQWQsRUFBNkM7QUFDMUQsUUFBTSxDQUFDQyxJQUFELEVBQU9DLE9BQVAsSUFBa0JDLCtDQUFRLEVBQWhDO0FBQ0FDLGtEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU1DLENBQUMsR0FBR0MsV0FBVyxDQUFDLE1BQU07QUFDMUIsWUFBTUMsQ0FBQyxHQUFHVixDQUFDLEVBQVg7QUFDQUssYUFBTyxDQUFDSyxDQUFELENBQVA7QUFDQVAsYUFBTyxDQUFDTyxDQUFELENBQVA7QUFDRCxLQUpvQixFQUlsQixJQUprQixDQUFyQjtBQUtBLFdBQU8sTUFBTUMsYUFBYSxDQUFDSCxDQUFELENBQTFCO0FBQ0QsR0FQUSxDQUFUO0FBUUFELGtEQUFTLENBQUMsTUFBTTtBQUNkRixXQUFPLENBQUNILFdBQUQsQ0FBUDtBQUNELEdBRlEsRUFFTixDQUFDQSxXQUFELENBRk0sQ0FBVDtBQUdBLHNCQUNFO0FBQUssU0FBSyxFQUFFO0FBQUVVLGFBQU8sRUFBRSxPQUFYO0FBQW9CQyxXQUFLLEVBQUUsT0FBM0I7QUFBb0NDLFlBQU0sRUFBRTtBQUE1QztBQUFaLGtCQUNFLCtGQUVFO0FBQ0UsWUFBUSxFQUFHQyxDQUFELElBQU87QUFDZlYsYUFBTyxDQUFDVSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFQO0FBQ0FkLGFBQU8sQ0FBQ1ksQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBUDtBQUNEO0FBSkgsSUFGRixDQURGLGVBVUUsaUZBQVdiLElBQVgsQ0FWRixDQURGO0FBY0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkQ7QUFDQTtBQUNBO0FBRU8sU0FBU2MsU0FBVCxDQUFtQkMsR0FBbkIsRUFBd0M7QUFDN0MsU0FBT0Msb0RBQUEsQ0FDTEMsc0NBREssRUFFTCxDQUFDQyxLQUFELEVBQVFDLEdBQVIsS0FBZ0I7QUFDZCxXQUFPQSxHQUFHLENBQUNKLEdBQUosS0FBWUEsR0FBWixHQUFrQkksR0FBRyxDQUFDQyxJQUF0QixHQUE2QkYsS0FBcEM7QUFDRCxHQUpJLEVBS0wsRUFMSyxDQUFQO0FBT0Q7QUFFTSxTQUFTRyxTQUFULENBQW1CRCxJQUFuQixFQUF5QztBQUM5QyxTQUFPSixvREFBQSxDQUNMQyxzQ0FESyxFQUVMLENBQUNDLEtBQUQsRUFBUUMsR0FBUixLQUFnQjtBQUNkLFdBQU9BLEdBQUcsQ0FBQ0MsSUFBSixLQUFhQSxJQUFiLElBQXFCQSxJQUFJLENBQUNFLFdBQUwsRUFBckIsR0FBMENILEdBQUcsQ0FBQ0osR0FBOUMsR0FBb0RHLEtBQTNEO0FBQ0QsR0FKSSxFQUtMLENBQUMsQ0FMSSxDQUFQO0FBT0Q7QUFFRCxpRUFBZUssMENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkEsb0Q7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoid2VicGFjay1udW1iZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwibG9kYXNoXCIpLCByZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wibG9kYXNoXCIsIFwicmVhY3RcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wid2VicGFja051bWJlcnNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJsb2Rhc2hcIiksIHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wid2VicGFja051bWJlcnNcIl0gPSBmYWN0b3J5KHJvb3RbXCJfXCJdLCByb290W1wicmVhY3RcIl0pO1xufSkoc2VsZiwgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9sb2Rhc2hfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fKSB7XG5yZXR1cm4gIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmxldCBjID0gMDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRpbWUoeyBkZWZhdWx0VGltZSwgZ2V0VGltZSB9OiBhbnkpIHtcclxuICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZTxhbnk+KCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGkgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHQgPSBjKys7XHJcbiAgICAgIHNldFRpbWUodCk7XHJcbiAgICAgIGdldFRpbWUodCk7XHJcbiAgICB9LCAxMDAwKTtcclxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGkpO1xyXG4gIH0pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRUaW1lKGRlZmF1bHRUaW1lKTtcclxuICB9LCBbZGVmYXVsdFRpbWVdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImJsb2NrXCIsIHdpZHRoOiBcIjEwMHZ3XCIsIGhlaWdodDogXCIxMDB2aFwiIH19PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIGlucHV0OlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICBnZXRUaW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PnRpbWU6e3RpbWV9PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IG51bVJlZiBmcm9tIFwiLi9yZWYuanNvblwiO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuL1RpbWVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBudW1Ub1dvcmQobnVtOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gIHJldHVybiBfLnJlZHVjZShcclxuICAgIG51bVJlZixcclxuICAgIChhY2N1bSwgcmVmKSA9PiB7XHJcbiAgICAgIHJldHVybiByZWYubnVtID09PSBudW0gPyByZWYud29yZCA6IGFjY3VtO1xyXG4gICAgfSxcclxuICAgIFwiXCJcclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd29yZFRvTnVtKHdvcmQ6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgcmV0dXJuIF8ucmVkdWNlKFxyXG4gICAgbnVtUmVmLFxyXG4gICAgKGFjY3VtLCByZWYpID0+IHtcclxuICAgICAgcmV0dXJuIHJlZi53b3JkID09PSB3b3JkICYmIHdvcmQudG9Mb3dlckNhc2UoKSA/IHJlZi5udW0gOiBhY2N1bTtcclxuICAgIH0sXHJcbiAgICAtMVxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRlcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2xvZGFzaF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbW9kdWxlIGV4cG9ydHMgbXVzdCBiZSByZXR1cm5lZCBmcm9tIHJ1bnRpbWUgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xucmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c3hcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9