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
import entries from "./objects/entries";
import entriesIn from "./objects/entriesIn";
import invert from "./objects/invert";

const catalyst = {

  // Array methods

  chunk: chunk,
  compact: compact,
  concat: concat,
  difference: difference,
  drop: drop,
  dropRight: dropRight,
  filter: filter,
  first: first,
  fromPairs: fromPairs,
  head: first,
  intersection: intersection,
  nth: nth,
  uniq: uniq,
  zip: zip,

  // Collections
  countBy: countBy,


  // Object methods

  entries: entries,
  toPairs: entries,
  entriesIn: entriesIn,
  toPairsIn: entriesIn,
  invert: invert

};

export default catalyst;
