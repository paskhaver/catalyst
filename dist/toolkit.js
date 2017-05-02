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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

window.boris = {

  // Array methods

  chunk: (array, size = 1) => {
    const results = [];
    let count = 0,
        nestedArray = [],
        currentElement;

    for (let i = 0; i < array.length; i++) {
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

  },

  compact: (input) => {
    return input.filter(element => {
      return element;
    });
  },

  // If extra element is single-item array (i.e [4] ),
  // the element is extracted and pushed to the end.
  // Thus, 4 is the same as [4]. If extra element is
  // a nested array, (i.e. [[4]] or [[4, 5]]), then
  // the full array is concatenated to the end.
  concat: (array, ...extraElements) => {
    const dupeArray = array.slice();
    extraElements.forEach(element => {
      dupeArray.push(element);
    });

    return dupeArray;
  },

  difference: (array, exclusions) => {
    return array.filter(element => {
      return !exclusions.includes(element);
    });
  },

  drop: (array, number = 1) => {
    return array.slice(number);
  },

  dropRight: (array, number = 1) => {
    if (number >= array.length) {
      return [];
    }
    return array.slice(0, array.length - number);
  },

  first: (input) => {
    if (input.constructor === Array || typeof input === "string") {
      return input[0];
    }
  },


  zip: (...arrays) => {
    let results = [];
    let firstArray = arrays[0];

    firstArray.forEach((element, idx) => {
      const nestedArray = arrays.map(array => {
        return array[idx];
      });
      results.push(nestedArray);
    });

    return results;
  }


  // Collection methods






};


/***/ })
/******/ ]);