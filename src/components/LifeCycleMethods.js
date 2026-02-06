import React from "react";

class LifeCycleMethods extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      postData: null,
      loading: true
    }
    console.log("LifeCycleMethods - constructor");
  };

  async componentDidMount(){
    console.log("LifeCycleMethods - componentDidMount");
    try {
      const jsonResponse = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const jsondata = await jsonResponse.json();
      console.log("API Data:", jsondata);
      this.setState({ 
        postData: jsondata,
        loading: false 
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      this.setState({ loading: false });
    }
  }

  componentDidUpdate(){
    console.log("LifeCycleMethods - componentDidUpdate");
  }

  componentWillUnmount(){
    console.log("LifeCycleMethods - componentWillUnmount");
  }

  render() {
    console.log("LifeCycleMethods - render");
    const { postData, loading } = this.state;
    return <>
      <div style={{border: "2px solid blue", padding: "20px", margin: "20px"}}>
        <h2>Life Cycle Methods Demo</h2>
        <p>This component demonstrates React class component lifecycle methods:</p>
        <ul>
          <li>constructor()</li>
          <li>componentDidMount()</li>
          <li>componentDidUpdate()</li>
          <li>componentWillUnmount()</li>
        </ul>

        {loading ? <p>Loading API data...</p> : (
          postData && (
            <div style={{border: "1px solid gray", padding: "10px", marginTop: "20px", backgroundColor: "#f0f0f0"}}>
              <h3>API Data (Post #1):</h3>
              <p><strong>Title:</strong> {postData.title}</p>
              <p><strong>Body:</strong> {postData.body}</p>
              <p><strong>User ID:</strong> {postData.userId}</p>
              <p><strong>Post ID:</strong> {postData.id}</p>
            </div>
          )
        )}
      </div>
    </>
  }
}

export default LifeCycleMethods;
