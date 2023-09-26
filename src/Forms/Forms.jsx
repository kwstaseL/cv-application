import Form from "./Form";
import "./Forms.css";
function Forms() {
  return (
    <section className="forms content-container section">
      <Form title="Education" showExtendedForm={true} />
      <Form title="General Information" showExtendedForm={false} />
      <Form title="Work Experience" showExtendedForm={true} />
    </section>
  );
}

export default Forms;
