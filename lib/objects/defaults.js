const defaults = (object, ...sources) => {

  sources.forEach(extraObject => {
    for (let property in extraObject) {
      if (!object[property]) { // if not defined
        object[property] = extraObject[property];
      }
    }
  });

  return object;

};

export default defaults;
