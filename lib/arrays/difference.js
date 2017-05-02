export default (array, exclusions) => {
  return array.filter(element => {
    return !exclusions.includes(element);
  });
};
