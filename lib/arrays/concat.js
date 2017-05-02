// If extra element is single-item array (i.e [4] ),
// the element is extracted and pushed to the end.
// Thus, 4 is the same as [4]. If extra element is
// a nested array, (i.e. [[4]] or [[4, 5]]), then
// the full array is concatenated to the end.
export default (array, ...extraElements) => {
  const dupeArray = array.slice();
  extraElements.forEach(element => {
    dupeArray.push(element);
  });

  return dupeArray;
};
