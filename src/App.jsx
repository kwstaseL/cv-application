import "../styles/App.css";
import Nav from "./Nav/Nav";
import Canvas from "./Canvas/Canvas";
import Forms from "./Forms/Forms";
import { useState } from "react";

function App() {
  const [currentState, setState] = useState("content");
  function handleOptionsClick(e) {
    const targetElement = e.target;
    const elementValue = targetElement.value;
    setState(elementValue.toLowerCase());
  }

  return (
    <>
      <Nav handleOptionsClick={handleOptionsClick} state={currentState} />
      <main className="main container">
        <Canvas />
        <Forms />
      </main>
    </>
  );
}

export default App;
