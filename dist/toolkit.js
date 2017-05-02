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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (array) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var results = [];
  var count = 0,
      nestedArray = [],
      currentElement = void 0;

  for (var i = 0; i < array.length; i++) {
    currentElement = array[i];
    nestedArray.push(currentElement);
    count += 1;

    if (count === size) {
      results.push(nestedArray);
      nestedArray = [];
      count = 0;
    }
  }

  return results;
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (input) {
  return input.filter(function (element) {
    return element;
  });
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

// If extra element is single-item array (i.e [4] ),
// the element is extracted and pushed to the end.
// Thus, 4 is the same as [4]. If extra element is
// a nested array, (i.e. [[4]] or [[4, 5]]), then
// the full array is concatenated to the end.
exports.default = function (array) {
  for (var _len = arguments.length, extraElements = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    extraElements[_key - 1] = arguments[_key];
  }

  var dupeArray = array.slice();
  extraElements.forEach(function (element) {
    dupeArray.push(element);
  });

  return dupeArray;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (array, exclusions) {
  return array.filter(function (element) {
    return !exclusions.includes(element);
  });
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (array) {
  var number = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  return array.slice(number);
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (array) {
  var number = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (number >= array.length) {
    return [];
  }
  return array.slice(0, array.length - number);
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (array, callback) {
  return array.filter(function (element) {
    return callback(element);
  });
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (input) {
  if (input.constructor === Array || typeof input === "string") {
    return input[0];
  }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  for (var _len = arguments.length, arrays = Array(_len), _key = 0; _key < _len; _key++) {
    arrays[_key] = arguments[_key];
  }

  var results = [];
  var firstArray = arrays[0];

  firstArray.forEach(function (element, idx) {
    var nestedArray = arrays.map(function (array) {
      return array[idx];
    });
    results.push(nestedArray);
  });

  return results;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var entries = exports.entries = function entries(object) {
  var results = [];
  for (var property in object) {
    if (object.hasOwnProperty(property)) {
      results.push([property, object[property]]);
    }
  }
  return results;
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _chunk = __webpack_require__(0);

var _chunk2 = _interopRequireDefault(_chunk);

var _compact = __webpack_require__(1);

var _compact2 = _interopRequireDefault(_compact);

var _concat = __webpack_require__(2);

var _concat2 = _interopRequireDefault(_concat);

var _difference = __webpack_require__(3);

var _difference2 = _interopRequireDefault(_difference);

var _drop = __webpack_require__(4);

var _drop2 = _interopRequireDefault(_drop);

var _dropRight = __webpack_require__(5);

var _dropRight2 = _interopRequireDefault(_dropRight);

var _filter = __webpack_require__(6);

var _filter2 = _interopRequireDefault(_filter);

var _first = __webpack_require__(7);

var _first2 = _interopRequireDefault(_first);

var _zip = __webpack_require__(8);

var _zip2 = _interopRequireDefault(_zip);

var _entries = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Boris = {

  // Array methods

  chunk: _chunk2.default,
  compact: _compact2.default,
  concat: _concat2.default,
  difference: _difference2.default,
  drop: _drop2.default,
  dropRight: _dropRight2.default,
  filter: _filter2.default,
  first: _first2.default,
  zip: _zip2.default,

  // Object methods

  entries: _entries.entries,
  toPairs: _entries.entries

};

/***/ })
/******/ ]);
//# sourceMappingURL=toolkit.js.map