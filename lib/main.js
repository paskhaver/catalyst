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
