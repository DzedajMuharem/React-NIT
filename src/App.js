import React from "react";
import "./App.css";
import Greeting from "./components/Greetings/Greeting";

function App() {
  // return React.createElement("p", {}, "Neki tekst");
  return (
    // <> je Fragment
    <>
      <div className="App">
        <header className="header">
          <h1 style={{ color: "red", fontFamily: "sans-serif" }}>Logo</h1>
        </header>
        <Greeting appName={"React App"} username={"Bakir Ujkanovic"} />
      </div>
    </>
  );
}

export default App;
