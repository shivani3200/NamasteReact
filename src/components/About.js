import User from "./User";
import UserClass from "./UserClass";


const About = () =>{
  return (
    <div style={{margin: "0 auto", marginTop: "100px", padding: "50px", maxWidth: "600px", textAlign: "center", backgroundColor: "#e6fbe6", display: "flex", flexDirection: "column", gap: "20px", borderRadius: "10px", justifyContent: "center", alignItems: "center"}}>
      <h1>About Us</h1>
      <p>This is the About page of our application.</p>
  <div style={{display: "flex", flexDirection: "row", gap: "20px"}}>

    <User name={"Jane Smith - function"}/>
    <UserClass name={"K Doe - class"} phone={"987-654-3210"} email={"k.doe@example.com"} />
      </div>
    </div>
  );
}

export default About;