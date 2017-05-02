import React from "react";
import ReactDOM from "react-dom";
import macgyver from "./lib/macgyver.js";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {

  window.mac = macgyver;

  const rootDOMElement = document.getElementById("app");
  ReactDOM.render(<Root />, rootDOMElement);
});
