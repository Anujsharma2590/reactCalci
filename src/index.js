import React from "react";
import ReactDOM from "react-dom";
import * as calci from "./calculator";
//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png

ReactDOM.render(
  <ul>
    <li>{calci.add(1, 2)}</li>
    <li>{calci.multiply(2, 3)}</li>
    <li>{calci.subtract(7, 2)}</li>
    <li>{calci.divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);
