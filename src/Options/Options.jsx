/* eslint-disable react/prop-types */
import "./Options.css";
import Button from "../components/Button";

function Options({ onClear, onSave }) {
  return (
    <div className="options">
      <Button title="Clear" color="#4f46e5" onClick={onClear} />
      <Button title="Save as PDF" color="#e11d48" onClick={onSave} />
    </div>
  );
}

export default Options;
