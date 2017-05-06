const assignIn = (object, ...sources) => {

  sources.forEach(extraObject => {
    for (let property in extraObject) {
      object[property] = extraObject[property];
    }
  });

  return object;

};

export default assignIn;
