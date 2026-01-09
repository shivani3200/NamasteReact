import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement(
//   "div", {
//   id: "parent",
// },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", { id: "heading1" }, "I am h1 tag inside child div"),
//     React.createElement("h2", { id: "heading2" }, "I am h2 tag inside child div")
//   ])  
// );
// JSX gets transpiled before it reaches the JS by Babel
// const jsxheading = <h1>this is jsx</h1>
// const HeadingComponent =()=>{
//   return <h1>Namaste React functional component</h1>
// }

// react element
// const heading = (
//   <h1>react element</h1>
// );

// react functional element
// const HeadingComponent = () => (
//   <div id="container">
//     <h1>react functional component</h1>
//   </div>
// )

// js inside jsx

let number = 10000;
const HeadingComponent =() =>{
  return (
    <div>
      <h1>js inside jsx</h1>
      {100 +2000}
      {number}
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Heading)
