import { useState } from "react";
import "../styles/App.css";
import Canvas from "./Canvas/Canvas";
import Forms from "./Forms/Forms";
import Options from "./Options/Options";
import Button from "./components/Button";

function handleInputEvent(e) {
  console.log(e.target.value);
}

function App() {
  const [cvData, setCVData] = useState([]);

  return (
    <>
      <main className="main">
        <section className="upper container">
          <Canvas />
        </section>
        <section className="down container">
          <Forms handleInputEvent={handleInputEvent} />
        </section>
      </main>
    </>
  );
}

export default App;
