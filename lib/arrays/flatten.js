const flatten = (array) => {

  const results = [];
  array.forEach(element => {
    if Array.isArray(element) {
      
    } else {
      results.push(element);
    }
  });

};

export default flatten;
