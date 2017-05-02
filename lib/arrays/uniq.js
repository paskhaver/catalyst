const uniq = (array) => {

  const results = [];
  array.forEach(element => {
    if (results.indexOf(element) === -1) {
      results.push(element);
    }
  });
  return results;

};

export default uniq;
