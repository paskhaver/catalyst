export default (input) => {
  if (input.constructor === Array || typeof input === "string") {
    return input[0];
  }
};
