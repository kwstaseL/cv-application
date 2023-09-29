import Form from "./Form";
import "./Forms.css";
function Forms({
  handleInputEvent,
  handleSectionAddition,
  handleCancelForm,
  data,
  handleDeleteForm,
}) {
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
        handleDeleteForm={handleDeleteForm}
        data={data.education}
      />
      <Form
        title="Work Experience"
        showExtendedForm={true}
        handleInputEvent={handleInputEvent}
        handleSectionAddition={handleSectionAddition}
        handleCancelForm={handleCancelForm}
        handleDeleteForm={handleDeleteForm}
        data={data.experience}
      />
    </section>
  );
}

export default Forms;
