import chunk from "./arrays/chunk";
import compact from "./arrays/compact";
import concat from "./arrays/concat";
import difference from "./arrays/difference";
import drop from "./arrays/drop";
import dropRight from "./arrays/dropRight";
import filter from "./arrays/filter";
import first from "./arrays/first";
import uniq from "./arrays/uniq";

import zip from "./arrays/zip";

import countBy from "./collections/countBy";

import entries from "./objects/entries";
import entriesIn from "./objects/entriesIn";

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
  head: first,
  uniq: uniq,
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
