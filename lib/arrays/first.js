const first = (input) => {
  if (input.constructor === Array || typeof input === "string") {
    return input[0];
  }
};

export default first;
