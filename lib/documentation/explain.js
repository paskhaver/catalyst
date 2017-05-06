const explain = (method) => {

  const docs = {
    chunk: `
  The chunk(array, size) method accepts an array and an integer.
  The elements of the original array are distributed into
  separate arrays, each with a maximum length equal to the size.

  catalyst.chunk(["Bob", "Dave", "Sally", "Sue"], 2);
  => [["Bob", "Dave"], ["Sally", "Sue"]]

  If there are leftovers, the final array will contain as
  many elements as it can.

  catalyst.chunk(["Bob", "Dave", "Sally", "Sue"], 3);
  => [["Bob", "Dave", "Sally"], ["Sue"]]

  The size parameter has a default argument of 1. If
  the argument is omitted, an array of single-element arrays
  will be returned.

  catalyst.chunk(["Bob", "Dave", "Sally", "Sue"]);
  => [['Bob'], ['Dave'], ['Sally'], ['Sue']]
`,

    compact: `
  The compact(array) method returns an array with all falsy
  elements removed. Falsy elements include 0, false, null,
  undefined, NaN, and empty strings.

  catalyst.compact([1, false, NaN, undefined, null, "", 2]);
  => [1, 2]
  `,

    concat: `
  The concat(array, ...extraElements) method returns a new array with
  all extraElements pushed to the end.

  catalyst.concat([1, 2, 3], 4, 5, 6);
  => [1, 2, 3, 4, 5, 6]
  `,

    difference: `
  The difference(array, exclusions) method accepts two arrays as
  arguments. It returns a new array with all values from the exclusions
  array removed.

  catalyst.difference([1, 2, 3], [1, 3])
  => [2]
  `,

    drop: `
  The drop(array, number) method returns a new array with the
  specified number of elements removed from the start of the array.

  catalyst.drop(["Schwarzenegger", "Seagal", "Van Damme", "Lundgren"], 2)
  => ["Van Damme", "Lundgren"]
  `,

    dropRight: `
  The dropRight(array, number) method returns a new array with the
  specified number of elements removed from the end of the array.

  catalyst.drop(["Schwarzenegger", "Seagal", "Van Damme", "Lundgren"], 2)
  => ["Schwarzenegger", "Seagal"]
  `,

    filter: `
  The filter(array, callback) method passes each element of the
  array to the callback function. It returns a new array of
  all elements for which the callback function returns true.

  catalyst.filter([1, 2, 3, 4, 5], (el) => (el % 2 === 0));
  => [2, 4]
  `,

    first: `
  The first(array) method returns the first element of an array.

  catalyst.first(["Soup", "Bread", "Water"]);
  => "Soup"
  `,

    fromPairs: `
  The fromPairs(pairs) method accepts an array of 2-element arrays.
  It returns an object where the properties are each array's first
  elements and the values are each array's second elements.

  catalyst.fromPairs([["Sesame Chicken", 8.99], ["Chicken & Broccoli", 7.99]])
  => { 'Sesame Chicken': 8.99, 'Chicken & Broccoli': 7.99 }
  `,

    intersection: `
  The intersection(...arrays) method accepts any number of array.
  It returns an array of all elements that are present in ALL
  arrays.

  catalyst.intersection([1, 2, 3], [2, 3, 4], [3, 4, 5])
  => [5]
  `,

    last: `
  The last(array) method returns the last element of an array.

  catalyst.last(["Charmander", "Bulbasaur", "Squirtle"])
  => "Squirtle"
  `,

    nth: `
  The nth(array, index) method returns the array element at
  the specified index. If the index argument is negative,
  the method returns the element from the end of the array.

  catalyst.nth(["Bob", "Sue", "Al"], 2)
  => "Al"

  catalyst.nth(["Bob", "Sue", "Al"], -1)
  => "Al"
  `,

    uniq: `
  The uniq(array) method returns a new array with no duplicates.

  catalyst.uniq([1, 2, 3, 2, 3, 4]);
  => [1, 2, 3, 4]
  `,

    zip: `
  The zip(...arrays) method iterates over all arrays and
  captures elements at the same index position. These
  elements are packaged inside of an array. The final return
  value is an array of all nested arrays.

  catalyst.zip([1, 2, 3], [4, 5, 6], [7, 8, 9])
  => [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
  `,


    // Objects
    assign: `
DESCRIPTION:
1) Accepts a single object as the first argument
2) Accepts any number of objects as secondary arguments
3) Iterates over the secondary objects and assigns their own properties
to the first object
4) Only "source properties" will be added. Properties inherited from
the prototype will be excluded).

The original object WILL be mutated.

EXAMPLE:
  catalyst.assign({ a: 5 }, { b: 3, c: 1}, { a: 7, b: 8})
  => { a: 7, b: 8, c: 1}
`,

  assignIn: `
DESCRIPTION:
  1) Accepts a single object as the first argument
  2) Accepts any number of objects as secondary arguments
  3) Iterates over the secondary objects and assigns their own properties
  to the first object
  4) All properties will be added. Properties inherited from
  the prototype will be included).

EXAMPLE:
  function Star() {
    this.a = 1;
  }

  function Wars() {
    this.b = 2;
  }

  Star.prototype.c = 3;
  Wars.prototype.d = 4

  catalyst.assignIn({ a: 0 }, new Star, new Wars)
  => { a: 1, b: 2, c: 3, d: 4 }
`,

  defaults: `
DESCRIPTION:
  1) Accepts a JavaScript object as the first argument.
  2) Accepts any number of objects as secondary arguments.
  3) Iterates over the secondary objects and assigns their properties
  (source and inherited) to the first object IF the first object
  does not have the property.

EXAMPLE:
  catalyst.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 }, { 'b': 5});
  { a: 1, b: 2 }
`,

    clamp: "Returns the lower / upper bound if number falls outside of bounds. Returns number if it fits between"
  };

  console.log(docs[method]);

};

export default explain;
