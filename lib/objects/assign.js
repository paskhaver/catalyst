const assign = (object, ...sources) => {

  sources.forEach(extraObject => {
    for (let property in extraObject) {
      if (extraObject.hasOwnProperty(property)) {
        object[property] = extraObject[property];
      }
    }
  });

  return object;

};

export default assign;
