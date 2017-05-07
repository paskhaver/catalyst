const times = (iterations, callback) => {
  for (let i = 0; i < iterations; i++) {
    callback();
  }
};

export default times;
