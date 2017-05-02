export default (...arrays) => {
  let results = [];
  let firstArray = arrays[0];

  firstArray.forEach((element, idx) => {
    const nestedArray = arrays.map(array => {
      return array[idx];
    });
    results.push(nestedArray);
  });

  return results;
};
