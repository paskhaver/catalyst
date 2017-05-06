# Catalyst

**Catalyst** is a JavaScript utility library for common operations with
arrays, objects, strings, numbers and more. It is built with ES6.

# Setup Instructions

1) Download or clone repository from GitHub.
2) Navigate into `catalyst-master` folder and execute `npm install`
   The procedure will generate a catalyst.js file within the folder.
3) Open the Node REPL by executing `node` in Terminal.
4) Require the catalyst library and assign it to a sample variable.
`const catalyst = require("./catalyst")`
5) Use `catalyst` to test the functionalities of the library.

```javascript
catalyst.invert({
  a: 2,
  b: 3
});

//--> {2: "a", 3: "b"}
```

# Features

- 30+ methods for operations
- Comprehensive documentation built in with explain("method") name
