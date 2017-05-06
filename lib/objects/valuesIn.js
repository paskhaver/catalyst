const valuesIn = (object) => {
  const results = [];

  for (let property in object) {
    results.push(object[property]);
  }

  return results;
};

export default valuesIn;
