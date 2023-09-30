/* eslint-disable react/prop-types */
import "./ExtendedForm.css";
import Button from "../components/Button";
import ItemForm from "./ItemForm";

function ExtendedForm({
  manageAddSectionEvent,
  manageDeleteForm,
  manageEditEvent,
  data,
}) {
  return (
    <section className="extended__section">
      <ul className="extended__section-list">
        {data.map((item, index) =>
          item.hasOwnProperty("school") ? (
            <ItemForm
              key={index}
              id={item.id}
              title={item.school}
              onDelete={manageDeleteForm}
              onEdit={manageEditEvent}
            />
          ) : item.hasOwnProperty("position") ? (
            <ItemForm
              key={index}
              id={item.id}
              title={item.position}
              onDelete={manageDeleteForm}
              onEdit={manageEditEvent}
            />
          ) : null
        )}
      </ul>
      <Button title="Add section" color="red" onClick={manageAddSectionEvent} />
    </section>
  );
}

export default ExtendedForm;
