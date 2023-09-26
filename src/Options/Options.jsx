/* eslint-disable react/prop-types */
import "./Options.css";
import Button from "../components/Button";

function Options({ handleOptionsClick }) {
  return (
    <div className="options">
      <Button
        title="Content"
        color="white"
        handleOptionsClick={handleOptionsClick}
      />
      <Button
        title="Personalize"
        color="white"
        handleOptionsClick={handleOptionsClick}
      />
      <Button
        title="Settings"
        color="white"
        handleOptionsClick={handleOptionsClick}
      />
    </div>
  );
}

export default Options;
