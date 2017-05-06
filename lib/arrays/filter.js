const filter = (array, callback) => {
  return array.filter(element => {
    return callback(element);
  });
};

export default filter;
