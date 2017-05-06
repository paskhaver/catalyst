// Arrays
import { chunk, compact, concat, difference, drop, dropRight, first, filter, fromPairs, intersection, nth, uniq, zip } from "./arrays/_arrays";

// Collections
import { countBy } from "./collections/_collections";

// Object
import { assign, assignIn, defaults, entries, entriesIn, invert, keys, keysIn, values, valuesIn } from "./objects/_objects";

// Number
import { clamp, inRange } from "./number/_number";

// Documentation
import explain from "./documentation/explain";

const catalyst = {

  // Documentation
  explain,

  // Array methods
  chunk, compact, concat, difference, drop, dropRight, first, filter,
  fromPairs, intersection, nth, uniq, zip,

  // Collections
  countBy,

  // Object methods
  assign, assignIn, defaults, entries, entriesIn, invert, keys, keysIn,
  values, valuesIn,

  // Number methods
  clamp, inRange,

  // Library information
  author: "Boris Paskhaver",
  version: 1.0

};

module.exports = catalyst;
