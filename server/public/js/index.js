/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

{
	// 解构赋值
	var a = void 0,
	    b = void 0,
	    rest = void 0;
	a = 1;
	b = 2;

	console.log(a, b);
	//1 2
}
{
	var _a = void 0,
	    _b = void 0,
	    _rest = void 0;
	_a = 1;
	_b = 2;
	_rest = [3, 4, 5, 6];

	console.log(_a, _b, _rest);
	//1 2 [3,4,5,6]
}
{
	var _a2 = void 0,
	    _b2 = void 0;
	var _a$b = { a: 1, b: 2 };
	_a2 = _a$b.a;
	_b2 = _a$b.b;

	console.log(_a2, _b2);
	//1 2
}
{
	// 默认值
	var _a3 = void 0,
	    _b3 = void 0,
	    c = void 0,
	    _rest2 = void 0;
	var _ref = [1, 2];
	_a3 = _ref[0];
	_b3 = _ref[1];
	var _ref$ = _ref[2];
	c = _ref$ === undefined ? 3 : _ref$;

	console.log(_a3, _b3, c);
	//1 2 3
	var _ref2 = [1, 2];
	_a3 = _ref2[0];
	_b3 = _ref2[1];
	c = _ref2[2];

	console.log(_a3, _b3, c);
	//1 2 undefined
}

// 解构赋值的用处
{
	//轻松实现变量的交换，不需要中间值
	var _a4 = 1;
	var _b4 = 2;
	var _ref3 = [_b4, _a4];
	_a4 = _ref3[0];
	_b4 = _ref3[1];

	console.log(_a4, _b4);
	//2 1
}
{
	//取出函数中的返回值,若没有解构赋值，需要用对象存储然后用1,2选出
	var f = function f() {
		return [1, 2];
	};

	var _a5 = void 0,
	    _b5 = void 0;

	var _f = f();

	var _f2 = _slicedToArray(_f, 2);

	_a5 = _f2[0];
	_b5 = _f2[1];

	console.log(_a5, _b5);
	// 1 2
}
{
	//当返回很多值时，可以选择性的接收某几个变量
	var _f3 = function _f3() {
		return [1, 2, 3, 4, 5];
	};

	var _a6 = void 0,
	    _b6 = void 0,
	    _c = void 0;

	var _f4 = _f3();

	var _f5 = _slicedToArray(_f4, 4);

	_a6 = _f5[0];
	_b6 = _f5[3];

	console.log(_a6, _b6);
	//1 4
}
{
	//不确定函数返回的长度是多少，我们只需要第一个，则取出第一个，其他存在数组中
	var _f6 = function _f6() {
		return [1, 2, 3, 4, 5];
	};

	var _a7 = void 0,
	    _b7 = void 0,
	    _c2 = void 0;

	var _f7 = _f6();

	var _f8 = _toArray(_f7);

	_a7 = _f8[0];
	_b7 = _f8.slice(1);

	console.log(_a7, _b7);
	//1 [2,3,4,5]

	var _f9 = _f6();

	var _f10 = _toArray(_f9);

	_a7 = _f10[0];
	_b7 = _f10.slice(2);

	console.log(_a7, _b7);
	//1 [3,4,5]
}
{
	//对象解构赋值
	var o = { p: 42, q: true };
	var p = o.p,
	    q = o.q;

	console.log(p, q);
	//42 true
}
{
	//对象解构赋值的默认值
	var _a9 = { a: 3 },
	    _a9$a = _a9.a,
	    _a8 = _a9$a === undefined ? 10 : _a9$a,
	    _a9$b = _a9.b,
	    _b8 = _a9$b === undefined ? 5 : _a9$b;

	console.log(_a8, _b8);
	//3 5
}
{
	//应用场景：json的获取
	var metaData = {
		title: 'abc',
		test: [{
			title: 'test',
			desc: 'descript'
		}]
	};

	var esTitle = metaData.title,
	    _metaData$test = _slicedToArray(metaData.test, 1),
	    cnTitle = _metaData$test[0].title;

	console.log(esTitle, cnTitle);
	//abc test
}

/***/ })
/******/ ]);