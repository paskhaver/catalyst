const flatten = array => {
  const results = [];
  array.forEach(el => {
    if (Array.isArray(el)) {
      el.forEach(nestedEl => {
        results.push(nestedEl);
      });
    } else {
      results.push(el);
    }
  });

  return results;
};

export default flatten;
