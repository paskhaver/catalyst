// Split array into two arrays: one whose elements all satisfy predicate
// and one whose elements all do not satisfy predicate.

const partition = (array, callback) => {
  const trueEvals = [];
  const falseEvals = [];

  array.forEach(el => {
    if (callback(el)) {
      trueEvals.push(el);
    } else {
      falseEvals.push(el);
    }
  });

  return [trueEvals, falseEvals];
};

export default partition;
