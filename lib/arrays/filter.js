export default (array, callback) => {
  return array.filter(element => {
    return callback(element);
  });
};
