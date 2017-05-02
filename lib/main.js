import chunk from "./arrays/chunk.js";
import compact from "./arrays/compact.js";
import zip from "./arrays/zip.js";

window.Boris = {

  // Array methods

  chunk: chunk,
  compact: compact,

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

  filter: (array, callback) => {
    return array.filter(element => {
      return callback(element);
    });
  },

  first: (input) => {
    if (input.constructor === Array || typeof input === "string") {
      return input[0];
    }
  },

  zip: zip

};
