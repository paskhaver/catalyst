// Arrays
import { chunk, compact, concat, difference, drop, dropRight, first, filter, fromPairs, intersection, last, nth, uniq, zip } from "./arrays/_arrays";

// Object
import { assign, assignIn, defaults, entries, entriesIn, invert, keys, keysIn, values, valuesIn } from "./objects/_objects";

// Math
import { add, max, sum, mean, multiply, product, subtract } from "./math/math";

// Number
import { clamp, inRange } from "./number/_number";

// Util
import { times } from "./util/_util";

// Documentation
import explain from "./documentation/explain";

const catalyst = {

  // Documentation
  explain,

  // Array methods
  chunk, compact, concat, difference, drop, dropRight, first, filter,
  fromPairs, intersection, last, nth, uniq, zip,

  // Object methods
  assign, assignIn, defaults, entries, entriesIn, invert, keys, keysIn,
  values, valuesIn,

  // Math methods
  add, max, sum, mean, multiply, product, subtract,

  // Number methods
  clamp, inRange,

  // Methods method,
  methods: ["explain", "chunk", "compact", "difference", "drop",
  "dropRight", "first", "filter", "fromPairs", "intersection", "last",
  "nth", "uniq", "zip", "assign", "assignIn", "defaults", "entries",
  "entriesIn", "invert", "keys", "keysIn", "values", "valuesIn",
  "add", "max", "sum", "mean", "multiply", "product", "subtract",
  "clamp", "inRange"],

  // Util methods
  times,

  // Library information
  author: "Boris Paskhaver",
  version: 1.0

};

module.exports = catalyst;
