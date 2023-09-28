import Form from "./Form";
import "./Forms.css";
function Forms({ handleInputEvent, handleSectionAddition }) {
  return (
    <section className="forms content-container section">
      <Form
        title="General Information"
        showExtendedForm={false}
        handleInputEvent={handleInputEvent}
        handleSectionAddition={handleSectionAddition}
      />
      <Form
        title="Education"
        showExtendedForm={true}
        handleInputEvent={handleInputEvent}
        handleSectionAddition={handleSectionAddition}
      />
      <Form
        title="Work Experience"
        showExtendedForm={true}
        handleInputEvent={handleInputEvent}
        handleSectionAddition={handleSectionAddition}
      />
    </section>
  );
}

export default Forms;
