/* eslint-disable react/prop-types */
import "./ExtendedForm.css";
import Button from "../components/Button";
function ExtendedForm({ handleAddSectionEvent }) {
  return (
    <section>
      <Button
        title="Add section"
        className="btn"
        handleOptionsClick={handleAddSectionEvent}
      />
    </section>
  );
}

export default ExtendedForm;
