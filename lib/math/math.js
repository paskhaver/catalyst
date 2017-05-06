const add = (num1, num2) => {
  return num1 + num2;
};

const max = (array) => {
  if(array.length === 0) {
    return undefined;
  }

  let greatestValue = array[0];
  array.forEach(value => {
    if (value > greatestValue) {
      greatestValue = value;
    }
  });

  return greatestValue;
};

const sum = (array) => {
  return array.reduce((accum, val) => {
    return accum + val;
  });
};

const product = (array) => {
  return array.reduce((accum = 1, val) => {
    return accum * val;
  });
};

const mean = (array) => {
  return sum(array) / array.length;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

module.exports = {
  add, max, sum, mean, multiply, product, subtract
};
