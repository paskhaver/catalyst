const concat = (array, ...extraElements) => {
  const dupeArray = array.slice();
  extraElements.forEach(element => {
    dupeArray.push(element);
  });

  return dupeArray;
};

export default concat;
