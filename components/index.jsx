import React from "react";
import ReactDOM from "react-dom";
import macgyver from "./../lib/macgyver";
import Root from "./root";

document.addEventListener("DOMContentLoaded", () => {

  window.macgyver = macgyver;

  const rootDOMElement = document.getElementById("app");
  ReactDOM.render(<Root />, rootDOMElement);
});
