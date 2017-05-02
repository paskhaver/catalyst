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

  // concat: (array) => {
  //   const args = Array.prototype.slice.call(arguments);
  //   const valueArgs = args.slice(1);
  //
  //   debugger
  //   valueArgs.forEach(element => {
  //     array.push(element);
  //   });
  //
  //   return array;
  // },

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


  


  // Collection methods






};
