/* eslint-disable react/prop-types */
import Button from "./Button";

// Form Creator is the factory that creates and returns the form
function FormCreator({
  data,
  manageInputEvent,
  sectionName,
  manageCancelForm,
}) {
  function manageInput(e, field) {
    manageInputEvent(field, e.target.value, sectionName);
  }
  function submitForm() {}
  const generateForm = () => {
    return data.map((section, sectionIndex) => (
      <div key={sectionIndex}>
        {section.fields.map((field, fieldIndex) => (
          <div key={fieldIndex} className="form__container">
            <div className="form__label-header">
              <label className="form__label" htmlFor={field.label}>
                {field.label}
              </label>
              {field.recommended && (
                <span className="optional-field" style={{ color: "red" }}>
                  *
                </span>
              )}
            </div>
            {field.optional && (
              <span className="optional-field" style={{ marginLeft: "0.5rem" }}>
                (Optional)
              </span>
            )}
            {field.input === "textarea" ? (
              <textarea
                id={field.label}
                name={field.label}
                placeholder={field.placeholder}
                className="form__input"
                valueKey={field.valueKey}
                onInput={(e) => manageInput(e, field)}
              ></textarea>
            ) : (
              <input
                type={field.input}
                id={field.label}
                name={field.label}
                placeholder={field.placeholder}
                valueKey={field.valueKey}
                onInput={(e) => manageInput(e, field)}
                className="form__input"
              />
            )}

            {field.isOngoing && (
              <span className="ongoing-field">(Ongoing)</span>
            )}
          </div>
        ))}
      </div>
    ));
  };

  return (
    <form>
      {generateForm()}
      {/* TODO: Fix this condition statement*/}
      <div className="action-buttons">
        {sectionName != "General Information" && (
          <Button title="Submit" color="red" onClick={submitForm} />
        )}
        {sectionName != "General Information" && (
          <Button
            title="Cancel"
            color="grey"
            onClick={() => manageCancelForm(sectionName)}
          />
        )}
      </div>
    </form>
  );
}

export default FormCreator;
