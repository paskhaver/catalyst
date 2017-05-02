const fromPairs = (pairs) => {
  const obj = {};

  pairs.forEach(pair => {
    const property = pair[0];
    const value    = pair[1];
    obj[property] = value;
  });

  return obj;

};

export default fromPairs;
