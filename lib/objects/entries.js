const entries = (object) => {
  const results = [];
  for (let property in object) {
    if (object.hasOwnProperty(property)) {
      results.push([property, object[property]]);
    }
  }
  return results;
};

export default entries;
