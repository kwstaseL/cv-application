import "./Canvas.css";
import CV from "../CV/CV";

function Canvas({ cvData, sectionsAdded }) {
  return (
    <section className="canvas shadow-texture section">
      {/* Cv data is the data that will be displayed that the user typed */}
      <CV cvData={cvData} sectionsAdded={sectionsAdded} />{" "}
    </section>
  );
}

export default Canvas;
