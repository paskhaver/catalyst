window.__ = {

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

  first: (input) => {
    if (input.constructor === Array || typeof input === "string") {
      return input[0];
    }
  },



  // concat: (array) => {
  //   const inputs = Array.prototype.slice.call(arguments);
  //   debugger
  // }



};
