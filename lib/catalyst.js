// Arrays
import chunk from "./arrays/chunk";
import compact from "./arrays/compact";
import concat from "./arrays/concat";
import difference from "./arrays/difference";
import drop from "./arrays/drop";
import dropRight from "./arrays/dropRight";
import filter from "./arrays/filter";
import first from "./arrays/first";
import fromPairs from "./arrays/fromPairs";
import intersection from "./arrays/intersection";
import nth from "./arrays/nth";
import uniq from "./arrays/uniq";
import zip from "./arrays/zip";

// Collections
import countBy from "./collections/countBy";

// Object
import assign from "./objects/assign";
import assignIn from "./objects/assignIn";
import defaults from "./objects/defaults";
import entries from "./objects/entries";
import entriesIn from "./objects/entriesIn";
import invert from "./objects/invert";
import keys from "./objects/keys";
import keysIn from "./objects/keysIn";
import values from "./objects/values";
import valuesIn from "./objects/valuesIn";

// Number
import clamp from "./number/clamp.js";

// Documentation
import explain from "./documentation/explain";

const catalyst = {

  // Documentation
  explain,

  // Array methods

  chunk,
  compact,
  concat,
  difference,
  drop,
  dropRight,
  filter,
  first,
  fromPairs,
  head: first,
  intersection,
  nth,
  uniq,
  zip,

  // Collections
  countBy,


  // Object methods
  assign,
  assignIn,
  defaults,
  entries,
  entriesIn,
  extend: assignIn,
  invert,
  keys,
  keysIn,
  toPairs: entries,
  toPairsIn: entriesIn,
  values,
  valuesIn,

  // Library information
  author: "Boris Paskhaver",
  version: 1.0

};

export default catalyst;
