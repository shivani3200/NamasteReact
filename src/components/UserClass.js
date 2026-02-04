import React from "react";

class UserClass extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      count:0,
      count2:2
    }
  };


  render() {
    const {name, email, phone} = this.props;
    const {count, count2} = this.state;
    return <>
      <div className="user-profile">
        <h2>User Profile</h2>
        <p>Name: {name}</p>
        <p>Ph-No: {phone}</p>
        <p>Email: {email}</p>
        <h3>Count: {count}</h3>
        <h3>Count2: {count2}</h3>
      </div>
    </>
  }
}
export default UserClass;