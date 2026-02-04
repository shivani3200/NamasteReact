import { useState } from "react";

const User = (props) =>{
  const [count] = useState(0);
  const [count2] = useState(2);
  return <>

  <div className="user-profile">

    <h2>User Profile</h2>
    <p>Name: {props.name}</p>
    <p>Ph-No: 123-456-7890</p>
    <p>Email: john.doe@example.com</p>
    <h3>Count: {count}</h3>
    <h3>Count2: {count2}</h3>
  </div>
  </>
}
export default User;