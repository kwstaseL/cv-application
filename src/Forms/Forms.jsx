import Form from "./Form";
import "./Forms.css";
function Forms({
  handleInputEvent,
  handleSectionAddition,
  handleCancelForm,
  handleDeleteForm,
  handleSubmitEvent,
  handleEditEvent,
  data,
}) {
  return (
    <section className="forms content-container section">
      <Form
        title="General Information"
        showExtendedForm={false}
        handleInputEvent={handleInputEvent}
        handleSectionAddition={handleSectionAddition}
        data={data}
      />
      <Form
        title="Work Experience"
        showExtendedForm={true}
        handleInputEvent={handleInputEvent}
        handleSectionAddition={handleSectionAddition}
        handleCancelForm={handleCancelForm}
        handleDeleteForm={handleDeleteForm}
        handleEditEvent={handleEditEvent}
        handleSubmitEvent={handleSubmitEvent}
        data={data.experience}
      />
      <Form
        title="Education"
        showExtendedForm={true}
        handleInputEvent={handleInputEvent}
        handleSectionAddition={handleSectionAddition}
        handleCancelForm={handleCancelForm}
        handleDeleteForm={handleDeleteForm}
        handleEditEvent={handleEditEvent}
        handleSubmitEvent={handleSubmitEvent}
        data={data.education}
      />
    </section>
  );
}

export default Forms;
