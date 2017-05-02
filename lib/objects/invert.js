const invert = (oldObject) => {

  const newObject = {};
  let value;

  for (let property in oldObject) {
    if (oldObject.hasOwnProperty(property)) {
      value = oldObject[property];
      newObject[value] = property;
    }
  }

  return newObject;

};

export default invert;
