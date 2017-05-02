export default (array, number = 1) => {
  if (number >= array.length) {
    return [];
  }
  return array.slice(0, array.length - number);
};
