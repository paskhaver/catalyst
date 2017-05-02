const intersection = (...arrays) => {
  const commonValues = [];
  const firstArray = arrays[0];

  firstArray.forEach(element => {
    if (arrays.every(array => array.indexOf(element) > -1)) {
      commonValues.push(element);
    }
  });

  return commonValues;
};

export default intersection;
