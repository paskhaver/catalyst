const chunk = (array, size = 1) => {
  const results = [];
  let nestedArray = [];

  array.forEach(el => {
    nestedArray.push(el);

    if (nestedArray.length === size) {
      results.push(nestedArray);
      nestedArray = [];
    }
  });

  // Take care of possible leftover array
  if (nestedArray.length > 0) {
    results.push(nestedArray);
  }

  return results;
};

export default chunk;
