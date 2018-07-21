import first from './first';

const concat = (array, ...extraElements) => {
  const dupeArray = [...array];
  extraElements.forEach(element => {
    dupeArray.push(Array.isArray(element) ? first(element) : element);
  });
  return dupeArray;
};

export default concat;
