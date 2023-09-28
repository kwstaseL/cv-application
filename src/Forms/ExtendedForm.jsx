/* eslint-disable react/prop-types */
import "./ExtendedForm.css";
import Button from "../components/Button";

function ExtendedForm({ handleAddSectionEvent }) {
  return (
    <section className="extended__section">
      <Button
        title="Add section"
        color="red"
        handleOptionsClick={handleAddSectionEvent}
      />
    </section>
  );
}

export default ExtendedForm;
