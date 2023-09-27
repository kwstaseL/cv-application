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
          <Canvas />
        </section>
        <section className="down container">
          <Forms />
        </section>
      </main>
    </>
  );
}

export default App;
