import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",{
    id:"parent",
  },
    React.createElement("div",{id:"child"},[
    React.createElement("h1",{id:"heading1"},"I am h1 tag inside child div"),
    React.createElement("h2",{id:"heading2"},"I am h2 tag inside child div")
  ])
);
const jsxheading = <h1>this is jsx</h1>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(jsxheading)
