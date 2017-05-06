const inRange = (number, lowerBound = 0, upperBound) => {
  if (!upperBound) {
    upperBound = lowerBound;
    lowerBound = 0;
  }

  if (lowerBound > upperBound) {
    const placeholder = upperBound;
    upperBound = lowerBound;
    lowerBound = placeholder;
  }

  return (number >= lowerBound && number < upperBound);
};

export default inRange;
