(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var chunk = function chunk(array) {
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

exports.default = chunk;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var compact = function compact(input) {
  return input.filter(function (element) {
    return element;
  });
};

exports.default = compact;

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
var concat = function concat(array) {
  for (var _len = arguments.length, extraElements = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    extraElements[_key - 1] = arguments[_key];
  }

  var dupeArray = array.slice();
  extraElements.forEach(function (element) {
    dupeArray.push(element);
  });

  return dupeArray;
};

exports.default = concat;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var difference = function difference(array, exclusions) {
  return array.filter(function (element) {
    return !exclusions.includes(element);
  });
};

exports.default = difference;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var drop = function drop(array) {
  var number = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  return array.slice(number);
};

exports.default = drop;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var dropRight = function dropRight(array) {
  var number = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (number >= array.length) {
    return [];
  }
  return array.slice(0, array.length - number);
};

exports.default = dropRight;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var filter = function filter(array, callback) {
  return array.filter(function (element) {
    return callback(element);
  });
};

exports.default = filter;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var first = function first(input) {
  if (input.constructor === Array || typeof input === "string") {
    return input[0];
  }
};

exports.default = first;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var fromPairs = function fromPairs(pairs) {
  var obj = {};

  pairs.forEach(function (pair) {
    var property = pair[0];
    var value = pair[1];
    obj[property] = value;
  });

  return obj;
};

exports.default = fromPairs;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var intersection = function intersection() {
  for (var _len = arguments.length, arrays = Array(_len), _key = 0; _key < _len; _key++) {
    arrays[_key] = arguments[_key];
  }

  var commonValues = [];
  var firstArray = arrays[0];

  firstArray.forEach(function (element) {
    if (arrays.every(function (array) {
      return array.indexOf(element) > -1;
    })) {
      commonValues.push(element);
    }
  });

  return commonValues;
};

exports.default = intersection;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var nth = function nth(array) {
  var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (index >= 0) {
    return array[index];
  } else {
    var positiveIndex = array.length + index;
    return array[positiveIndex];
  }
};

exports.default = nth;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var uniq = function uniq(array) {

  var results = [];
  array.forEach(function (element) {
    if (results.indexOf(element) === -1) {
      results.push(element);
    }
  });
  return results;
};

exports.default = uniq;

/***/ }),
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var count = function count(el) {
  return el;
};

var countBy = function countBy(input) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : count;

  if (input.constructor === Array) {
    var results = {};
    input.forEach(function (element) {
      var evaluation = callback(element);
      results[evaluation] = results[evaluation] ? results[evaluation] + 1 : 1;
    });
    return results;
  } else if (input.constructor === Object) {
    //
  }
};

exports.default = countBy;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var explain = function explain(method) {

  var docs = {
    first: "Returns the first item in an array",
    uniq: "Returns a new array with no duplicates",

    // Objects
    assign: "\nDESCRIPTION:\n1) Accepts a single object as the first argument\n2) Accepts any number of objects as secondary arguments\n3) Iterates over the secondary objects and assigns their own properties\nto the first object\n4) Only \"source properties\" will be added. Properties inherited from\nthe prototype will be excluded).\n\nThe original object WILL be mutated.\n\nEXAMPLE:\n  catalyst.assign({ a: 5 }, { b: 3, c: 1}, { a: 7, b: 8})\n  => { a: 7, b: 8, c: 1}\n",

    assignIn: "\nDESCRIPTION:\n  1) Accepts a single object as the first argument\n  2) Accepts any number of objects as secondary arguments\n  3) Iterates over the secondary objects and assigns their own properties\n  to the first object\n  4) All properties will be added. Properties inherited from\n  the prototype will be included).\n\nEXAMPLE:\n  function Star() {\n    this.a = 1;\n  }\n\n  function Wars() {\n    this.b = 2;\n  }\n\n  Star.prototype.c = 3;\n  Wars.prototype.d = 4\n\n  catalyst.assignIn({ a: 0 }, new Star, new Wars)\n  => { a: 1, b: 2, c: 3, d: 4 }\n",

    defaults: "\nDESCRIPTION:\n  1) Accepts a JavaScript object as the first argument.\n  2) Accepts any number of objects as secondary arguments.\n  3) Iterates over the secondary objects and assigns their properties\n  (source and inherited) to the first object IF the first object\n  does not have the property.\n\nEXAMPLE:\n  catalyst.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 }, { 'b': 5});\n  { a: 1, b: 2 }\n",

    clamp: "Returns the lower / upper bound if number falls outside of bounds. Returns number if it fits between"
  };

  console.log(docs[method]);
};

exports.default = explain;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var clamp = function clamp(number, lowerBound, upperBound) {
  if (number <= lowerBound) {
    return lowerBound;
  } else if (number >= lowerBound) {
    return upperBound;
  } else {
    return number;
  }
};

exports.default = clamp;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var inRange = function inRange(number) {
  var lowerBound = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var upperBound = arguments[2];

  if (!upperBound) {
    upperBound = lowerBound;
    lowerBound = 0;
  }

  if (lowerBound > upperBound) {
    var placeholder = upperBound;
    upperBound = lowerBound;
    lowerBound = placeholder;
  }

  return number >= lowerBound && number < upperBound;
};

exports.default = inRange;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var assign = function assign(object) {
  for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  sources.forEach(function (extraObject) {
    for (var property in extraObject) {
      if (extraObject.hasOwnProperty(property)) {
        object[property] = extraObject[property];
      }
    }
  });

  return object;
};

exports.default = assign;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var assignIn = function assignIn(object) {
  for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  sources.forEach(function (extraObject) {
    for (var property in extraObject) {
      object[property] = extraObject[property];
    }
  });

  return object;
};

exports.default = assignIn;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaults = function defaults(object) {
  for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  sources.forEach(function (extraObject) {
    for (var property in extraObject) {
      if (!object[property]) {
        // if not defined
        object[property] = extraObject[property];
      }
    }
  });

  return object;
};

exports.default = defaults;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var entries = function entries(object) {
  var results = [];
  for (var property in object) {
    if (object.hasOwnProperty(property)) {
      results.push([property, object[property]]);
    }
  }
  return results;
};

exports.default = entries;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var entriesIn = function entriesIn(object) {
  var results = [];
  for (var property in object) {
    results.push([property, object[property]]);
  }
  return results;
};

exports.default = entriesIn;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var invert = function invert(oldObject) {

  var newObject = {};
  var value = void 0;

  for (var property in oldObject) {
    if (oldObject.hasOwnProperty(property)) {
      value = oldObject[property];
      newObject[value] = property;
    }
  }

  return newObject;
};

exports.default = invert;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var keys = function keys(object) {
  var results = [];

  for (var property in object) {
    if (object.hasOwnProperty(property)) {
      results.push(property);
    }
  }

  return results;
};

exports.default = keys;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var keysIn = function keysIn(object) {
  var results = [];

  for (var property in object) {
    results.push(property);
  }

  return results;
};

exports.default = keysIn;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var values = function values(object) {
  var results = [];

  for (var property in object) {
    if (object.hasOwnProperty(property)) {
      results.push(object[property]);
    }
  }

  return results;
};

exports.default = values;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var valuesIn = function valuesIn(object) {
  var results = [];

  for (var property in object) {
    results.push(object[property]);
  }

  return results;
};

exports.default = valuesIn;

/***/ }),
/* 27 */
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

var _fromPairs = __webpack_require__(8);

var _fromPairs2 = _interopRequireDefault(_fromPairs);

var _intersection = __webpack_require__(9);

var _intersection2 = _interopRequireDefault(_intersection);

var _nth = __webpack_require__(10);

var _nth2 = _interopRequireDefault(_nth);

var _uniq = __webpack_require__(11);

var _uniq2 = _interopRequireDefault(_uniq);

var _zip = __webpack_require__(12);

var _zip2 = _interopRequireDefault(_zip);

var _countBy = __webpack_require__(13);

var _countBy2 = _interopRequireDefault(_countBy);

var _assign = __webpack_require__(17);

var _assign2 = _interopRequireDefault(_assign);

var _assignIn = __webpack_require__(18);

var _assignIn2 = _interopRequireDefault(_assignIn);

var _defaults = __webpack_require__(19);

var _defaults2 = _interopRequireDefault(_defaults);

var _entries = __webpack_require__(20);

var _entries2 = _interopRequireDefault(_entries);

var _entriesIn = __webpack_require__(21);

var _entriesIn2 = _interopRequireDefault(_entriesIn);

var _invert = __webpack_require__(22);

var _invert2 = _interopRequireDefault(_invert);

var _keys = __webpack_require__(23);

var _keys2 = _interopRequireDefault(_keys);

var _keysIn = __webpack_require__(24);

var _keysIn2 = _interopRequireDefault(_keysIn);

var _values = __webpack_require__(25);

var _values2 = _interopRequireDefault(_values);

var _valuesIn = __webpack_require__(26);

var _valuesIn2 = _interopRequireDefault(_valuesIn);

var _clamp = __webpack_require__(15);

var _clamp2 = _interopRequireDefault(_clamp);

var _inRange = __webpack_require__(16);

var _inRange2 = _interopRequireDefault(_inRange);

var _explain = __webpack_require__(14);

var _explain2 = _interopRequireDefault(_explain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Collections
var catalyst = {

  // Documentation
  explain: _explain2.default,

  // Array methods
  chunk: _chunk2.default,
  compact: _compact2.default,
  concat: _concat2.default,
  difference: _difference2.default,
  drop: _drop2.default,
  dropRight: _dropRight2.default,
  filter: _filter2.default,
  first: _first2.default,
  fromPairs: _fromPairs2.default,
  head: _first2.default,
  intersection: _intersection2.default,
  nth: _nth2.default,
  uniq: _uniq2.default,
  zip: _zip2.default,

  // Collections
  countBy: _countBy2.default,

  // Object methods
  assign: _assign2.default,
  assignIn: _assignIn2.default,
  defaults: _defaults2.default,
  entries: _entries2.default,
  entriesIn: _entriesIn2.default,
  extend: _assignIn2.default,
  invert: _invert2.default,
  keys: _keys2.default,
  keysIn: _keysIn2.default,
  toPairs: _entries2.default,
  toPairsIn: _entriesIn2.default,
  values: _values2.default,
  valuesIn: _valuesIn2.default,

  // Number methods
  clamp: _clamp2.default,
  inRange: _inRange2.default,

  // Library information
  author: "Boris Paskhaver",
  version: 1.0

};

// Documentation


// Number


// Object
// Arrays

module.exports = catalyst;

/***/ })
/******/ ])));
//# sourceMappingURL=catalyst.js.map