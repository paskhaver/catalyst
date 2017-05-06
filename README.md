# Catalyst

**Catalyst** is a JavaScript utility library for common operations with
arrays, objects, strings, numbers and more. It is built with ES6.

<img src="./screenshots/chunk-method.png" alt="chunk method" height="100"/>

# Setup Instructions

1) Download or clone repository from GitHub.
2) Navigate into `catalyst-master` folder and execute `npm install`
The command will generate a catalyst.js file within the folder.
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

<img src="./screenshots/setup.png" alt="Setup Process" height="200"/>

# Features

- Utilize 30+ helper methods including `intersection`, `assign` and `compact`
- Discover available methods through `methods` property

<img src="./screenshots/methods-property.png" alt="methods Property" height="200"/>

- Access comprehensive documentation for any method by passing its
name as a string to the `explain` method

```
catalyst.explain("chunk");
```
![explain Method](/screenshots/explain-method.png)
