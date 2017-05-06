const keysIn = (object) => {
  const results = [];

  for (let property in object) {
    results.push(property);
  }

  return results;
};

export default keysIn;
