import React from "react";
import UserClass from "./UserClass";
import LifeCycleMethods from "./LifeCycleMethods";


// const About = () => {
//   return (
//     <div className="about-container">
//       <h1>About Us</h1>
//       <p>This is the About page of our application.</p>
//       <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>

//         <User name={"Jane Smith - function"} />
//         <UserClass name={"K Doe - class"} phone={"987-654-3210"} email={"k.doe@example.com"} />
//       </div>
//     </div>
//   );
// }


class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent - constructor");
  }

  render() {
    console.log("parent - render");
    return (
      <div className="about-container">
        <h1>About Us</h1>
        <p>This is the About page of our application.</p>
        <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>

          <UserClass name={"K Doe - class"} phone={"987-654-3210"} email={"k.doe@example.com"} />
        </div>
        
        <LifeCycleMethods />
      </div>
    );
  }
}

export default About;