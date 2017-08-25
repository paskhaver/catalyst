const flattenDeep = array => {
  let results = [];

  array.forEach(el => {
    if (Array.isArray(el)) {
      results = results.concat(flattenDeep(el));
    } else {
      results.push(el);
    }
  });

  return results;
};

export default flattenDeep;
