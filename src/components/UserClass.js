import React from "react";

class UserClass extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 2
    }
    console.log("child - constructor");
  };

  async componentDidMount(){
    console.log("child - componentDidMount");
  }

  componentDidUpdate(){
    console.log("child - componentDidUpdate");
  }

  componentWillUnmount(){
    console.log("child - componentWillUnmount");
  }


  render() {
    console.log("child - render");
    const { name, email, phone } = this.props;
    const { count, count2 } = this.state;
    return <>
      <div className="user-profile">
        <h2>User Profile</h2>
        <p>Name: {name}</p>
        <p>Ph-No: {phone}</p>
        <p>Email: {email}</p>

        <div style={{display:"flex", flexDirection:"row"}}>
          <button onClick={() => {
            this.setState({
              count: this.state.count - 1
            })
          }}>-</button>

          <div>Count: {count}</div>

          <button onClick={() => {
            // never update state variable directly -> this.state.count = this.state.count +1

            this.setState({
              count: this.state.count + 1
            })
          }}>+</button>

        </div>

        <h3>Count2: {count2}</h3>

      </div>
    </>
  }
}
export default UserClass;