const keys = (object) => {
  const results = [];

  for (let property in object) {
    if (object.hasOwnProperty(property)) {
      results.push(property);
    }
  }

  return results;
};

export default keys;
