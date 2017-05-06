const values = (object) => {
  const results = [];

  for (let property in object) {
    if (object.hasOwnProperty(property)) {
      results.push(object[property]);
    }
  }

  return results;
};

export default values;
