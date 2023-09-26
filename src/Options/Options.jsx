/* eslint-disable react/prop-types */
import "./Options.css";
import Button from "../components/Button";

function Options({ handleOptionsClick }) {
  return (
    <div className="options">
      <Button
        title="Clear"
        color="#4f46e5"
        handleOptionsClick={handleOptionsClick}
      />
      <Button
        title="Save as PDF"
        color="#e11d48"
        handleOptionsClick={handleOptionsClick}
      />
    </div>
  );
}

export default Options;
