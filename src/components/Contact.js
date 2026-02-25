const Contact =() =>{
  return(
    <div  className="mx-auto mt-52 p-12 max-w-xl text-center rounded-md shadow-lg border  border-pink-200" style={{ backgroundColor: "#fbece6"}}>
      <h1>Contact Us</h1>

      <form>
        <input type = "text" placeholder="enter name" className="border border-black m-2 p-2 rounded-md"/>
        <input type = "text" placeholder="enter message" className="border border-black m-2 p-2 rounded-md"/>
        <input type = "submit" className=" m-2 p-2 rounded-lg bg-pink-600 text-white"/>

      </form>
    </div>
  );
}

export default Contact;
