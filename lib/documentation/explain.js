const explain = (method) => {

  const docs = {
    first: "Returns the first item in an array",
    uniq: "Returns a new array with no duplicates",


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


    clamp: "Returns the lower / upper bound if number falls outside of bounds. Returns number if it fits between"
  }

  console.log(docs[method]);

};

// const explain = ;

export default explain;
