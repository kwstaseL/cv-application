import "../styles/App.css";
import Canvas from "./Canvas/Canvas";
import Forms from "./Forms/Forms";
import Options from "./Options/Options";
import Button from "./components/Button";

function App() {
  return (
    <>
      <main className="main">
        <section className="upper container">
          <Options />
          <Canvas />
        </section>
        <section className="down container">
          <div className="demo">
            {" "}
            <Button title="Login With LinkedIn" color="#0072b1" />
          </div>
          <Forms />
        </section>
      </main>
    </>
  );
}

export default App;
