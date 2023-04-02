import React from "react";
import "./Greeting.css";

function Greeting(props) {
  console.log(props);
  console.log(props.appName);
  return (
    <div className="dobrodosli">
      <h1>Dobro dosli u nasu {props.appName}</h1>
      <h2>Hvala sto se nas posetili: {props.username}</h2>
    </div>
  );
}

export default Greeting;
