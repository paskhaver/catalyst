const add = (num1, num2) => {
  return num1 + num2;
};

const max = (array) => {
  if(array.length === 0) {
    return undefined;
  }

  const greatestValue = array[0];
  array.forEach(value => {
    if (value > greatestValue) {
      greatestValue = value;
    }
  });

  return greatestValue;
};

const mean = (array) => {

};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const sum = (array) => {
  return array.reduce((accum, val) => {
    return accum + val;
  });
};
