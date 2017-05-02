import chunk from "./arrays/chunk.js";
import compact from "./arrays/compact.js";
import concat from "./arrays/concat.js";
import difference from "./arrays/difference.js";
import drop from "./arrays/drop.js";
import dropRight from "./arrays/dropRight.js";
import filter from "./arrays/filter.js";
import first from "./arrays/first.js";
import zip from "./arrays/zip.js";

import countBy from "./collections/countBy.js";

import entries from "./objects/entries.js";
import entriesIn from "./objects/entriesIn.js";

const toolbelt = {

  // Array methods

  chunk: chunk,
  compact: compact,
  concat: concat,
  difference: difference,
  drop: drop,
  dropRight: dropRight,
  filter: filter,
  first: first,
  zip: zip,

  // Collections
  countBy: countBy,


  // Object methods

  entries: entries,
  toPairs: entries,
  entriesIn: entriesIn,
  toPairsIn: entriesIn

};

export default toolbelt;
