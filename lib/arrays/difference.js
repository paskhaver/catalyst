const difference = (array, exclusions) => {
  return array.filter(element => {
    return !exclusions.includes(element);
  });
};

export default difference;
