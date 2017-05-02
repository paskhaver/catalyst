const entriesIn = (object) => {
  const results = [];
  for (let property in object) {
    results.push([property, object[property]]);
  }
  return results;
};

export default entriesIn;
