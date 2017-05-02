const nth = (array, index = 0) => {
  if (index >= 0) {
    return array[index];
  } else {
    const positiveIndex = array.length + index;
    return array[positiveIndex];
  }
};

export default nth;
