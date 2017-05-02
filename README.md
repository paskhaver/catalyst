# MacGyver

A JavaScript ES6 utility library for common operations with
arrays, objects, strings and more.

# Instructions

1) Download or clone repo.
2) Execute `npm install`.
3) Execute `npm run webpack`
4) Open index.html in the browser.
5) The library's functionalities will be available in the browser console.
  - Mac: **Command + Option + I**
  - Windows: **Ctrl + Shift + J**

```javascript
macgyver.invert({
  a: 2,
  b: 3
});

//--> {2: "a", 3: "b"}
```

6) The frontend interface allows the user to enter the argument
into an input field and select the method to call.

Future features:
- Limit available button methods based on current input
- An additional dynamic box to take additional arguments such as callbacks
