const clamp = (number, lowerBound, upperBound) => {
  if (number <= lowerBound) {
    return lowerBound;
  } else if (number >= lowerBound) {
    return upperBound;
  } else {
    return number;
  }
};

export default clamp;
