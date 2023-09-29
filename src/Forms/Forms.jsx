import Form from "./Form";
import "./Forms.css";
function Forms({ handleInputEvent, handleSectionAddition, handleCancelForm }) {
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
        handleCancelForm={handleCancelForm}
      />
      <Form
        title="Work Experience"
        showExtendedForm={true}
        handleInputEvent={handleInputEvent}
        handleSectionAddition={handleSectionAddition}
        handleCancelForm={handleCancelForm}
      />
    </section>
  );
}

export default Forms;
