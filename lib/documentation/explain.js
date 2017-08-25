const explain = method => {
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

    flatten: `
  Flattens the array argument a single level.

  catalyst.flatten([1, 2, [3, 4, [5]]]);
  => [1, 2, 3, 4, [5]]
  `,

    flattenDeep: `
  Flattens the array argument. The final result is
  a 1-dimensional array with no nested arrays.

  catalyst.flattenDeep([1, 2, [3, 4, [5]]]);
  => [1, 2, 3, 4, 5]
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

    // Math

    add: `
  The add(num1, num2) method returns the sum of the thw two numbers.

  catalyst.sum(5, 3);
  => 8
  `,

    max: `
  The max(array) method returns the largest element in
  the array.

  catalyst.max([3, 8, 5]);
  => 8
  `,

    sum: `
  The sum(array) method returns the sum of all array elements.

  catalyst.sum([1, 3, 5]);
  => 9
  `,

    product: `
  The product(array) method returns the product of all array elements.

  catalyst.product([2, 3, 5]);
  => 30
  `,

    mean: `
  The mean(array) method returns the average of all array elements.

  catalyst.mean([2, 3, 5])
  => 3.33
  `,

    subtract: `
  The subtract(num1, num2) method returns the difference between the
  first and second arguments.

  catalyst.subtract(8, 5)
  => 3
  `,

    // Number

    clamp: `
  The clamp(number, lowerBound, upperBound) method returns the number
  if it falls betwee the lower and upper bounds. Both bounds are
  inclusive.

  If the number falls outside of either bound, that bound is returned.

  catalyst.clamp(5, 3, 8)
  => 5

  catalyst.clamp(1, 3, 6)
  => 3

  catalyst.clamp(10, 3, 6)
  => 6
  `,

    inRange: `
  The inRange(number, lowerBound, upperBound) method returns true
  if the number falls in between the lowerBound and the upperBound.
  Both bounds are inclusive.

  catalyst.inRange(7, 5, 9)
  => true

  catalyst.inRange(7, 5, 6)
  => false

  If only one bound is provided, the range is set from 0 to that
  number.

  catalyst.inRange(3, 8)
  => true

  catalyst.inRange(3, 2)
  => false
  `,

    // Objects
    assign: `
  The assign(object, ...sources) method iterates over the source objects
  and assigns their properties / values to the object. Only
  properties directly on the source objects will be included;
  inherited properties are excluded.

  The original object WILL be mutated.

  catalyst.assign({ a: 5 }, { b: 3, c: 1}, { a: 7, b: 8})
  => { a: 7, b: 8, c: 1}
  `,

    assignIn: `
  The assignIn(object, ...sources) method iterates over the source objects
  and assigns their properties / values to the object. All properties
  on the source objects will be added, including inherited ones.

  To exclude inherited properties, see assign() method

  function Star() {
    this.a = 1;
  }

  Star.prototype.b = 2;

  catalyst.assignIn({ a: 0 }, new Star)
  => { a: 1, b: 2 }
`,

    defaults: `
  The defaults(object, ...sources) method iterates over the source
  objects and assigns their properties / values to the object.
  The assignment only occurs IF the object does not already
  have the property.

  catalyst.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 }, { 'b': 5});
  => { a: 1, b: 2 }
`,

    entries: `
  The entries(object) method returns an array of all the properties
  and values of an object. Each pair is collected inside a 2-element
  array. Inherited properties are EXCLUDED.

  catalyst.entries({name: "Boris", age: 26, city: "New York"})
  => [['name', 'Boris'], ['age', 26], ['city', 'New York']]
`,

    entriesIn: `
  The entries(object) method returns an array of all the properties
  and values of an object. Each pair is collected inside a 2-element
  array. Inherited properties are EXCLUDED.

  function Child() {
    this.a = 1;
  }

  Child.prototype.b = 5;

  catalyst.entriesIn(new Child);
  => [['a', 1], ['b', 5]]
`,

    invert: `
  The invert(oldObject) method returns a new object where the properties
  and values have been swapped.

  catalyst.invert({ "NJ": "New Jersey", "CA": "California"})
  => { 'New Jersey': 'NJ', California: 'CA' }
`,

    keys: `
  The keys(object) method returns an array with all of the object's
  properties (known as keys). The object's inherited properties are
  EXCLUDED. To include them, use the keysIn() method.

  catalyst.keys({ a: 1, b: 2});
  => ['a', 'b']
`,

    keysIn: `
  The keys(object) method returns an array with all of the object's
  properties (known as keys). The object's inherited properties are
  INCLUDED. To exclude them, use the keys() method.

  function Child() {
    this.a = 1;
  }

  Child.prototype.b = 2;

  catalyst.keysIn(new Child);
  => ['a', 'b']
`,

    values: `
  The values(object) method returns an array with all of the object's
  values. Values for the the object's inherited properties are
  EXCLUDED. To include them, use the valuesIn() method.

  catalyst.values({ a: 1, b: 2});
  => [1, 2]
`,

    valuesIn: `
  The keys(object) method returns an array with all of the object's
  properties (known as keys). The object's inherited properties are
  INCLUDED. To exclude them, use the keys() method.

  function Child() {
    this.a = 1;
  }

  Child.prototype.b = 2;

  catalyst.valuesIn(new Child);
  => [1, 2]
`,

    // Util methods
    times: `
  The times(iterations, callback) method executes the passed
  callback function the specified number of times (iterations).

  catalyst.times(3, () => { console.log("Hello") });
  => Hello
  => Hello
  => Hello
`
  };

  console.log(docs[method]);
};

export default explain;
