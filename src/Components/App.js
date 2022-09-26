import React, { useState } from "react";

export default function App() {
  const [heading, setHeading] = useState("");
  const [fname, setFname] = useState("");
  const [lname,setLname]=useState("")
  const [isMousedOver, setMouseOver] = useState(false);

  function handleClick(event) {
    setHeading(heading);
    event.preventDefault();
  }

  function UpdateFname(event) {
    setFname(event.target.value);
  }
  function UpdateLname(event) {
    setLname(event.target.value);
  }

  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>Hello {fname} {lname}</h1>
      <form className="form" onSubmit={handleClick}>
        <input
          onChange={UpdateFname}
          type="text"
          placeholder="First Name"
          value={fname}
          
        />
           <input
          onChange={UpdateLname}
          type="text"
          placeholder="Last Name"
          value={lname}
          
        />
        <input type="password" placeholder="Password" />
        <button
          type="submit"
          style={{ backgroundColor: isMousedOver ? "black" : "white" }}
          
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
