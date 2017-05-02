const count = (el) => {
  return el;
};

const countBy = (input, callback = count) => {
  if (input.constructor === Array) {
    const results = {};
    input.forEach(element => {
      const evaluation = callback(element);
      results[evaluation] = results[evaluation] ? results[evaluation] + 1 : 1;
    });
    return results;
  } else if (input.constructor === Object) {
    //
  }
};

export default countBy;
