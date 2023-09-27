import Form from "./Form";
import "./Forms.css";
function Forms({ handleInputEvent }) {
  return (
    <section className="forms content-container section">
      <Form
        title="Education"
        showExtendedForm={true}
        handleInputEvent={handleInputEvent}
      />
      <Form
        title="General Information"
        showExtendedForm={false}
        handleInputEvent={handleInputEvent}
      />
      <Form
        title="Work Experience"
        showExtendedForm={true}
        handleInputEvent={handleInputEvent}
      />
    </section>
  );
}

export default Forms;
