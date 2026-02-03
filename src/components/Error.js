import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div style={{margin: "0 auto", marginTop: "100px", padding: "50px", maxWidth: "600px", textAlign: "center", backgroundColor: "#fbe6f7"}}>
      <h1>Error 404: Page Not Found!</h1>
      <p>{error.status}</p>
      <p>{error.statusText}</p>
    </div>
  );
};

export default Error; 
