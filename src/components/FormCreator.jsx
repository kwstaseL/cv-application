/* eslint-disable react/prop-types */
import Button from "./Button";

// Form Creator is the factory that creates and returns the form
function FormCreator({ data, handleInputEvent, parent }) {
  function handleInput(e, field) {
    handleInputEvent(field, e.target.value, parent);
  }
  const generateForm = () => {
    return data.map((section, sectionIndex) => (
      <div key={sectionIndex}>
        {section.fields.map((field, fieldIndex) => (
          <div key={fieldIndex} className="form__container">
            <label className="form__label" htmlFor={field.label}>
              {field.label}
            </label>
            {field.recommended && (
              <span className="optional-field" style={{ color: "red" }}>
                *
              </span>
            )}
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
                onInput={(e) => handleInput(e, field)}
              ></textarea>
            ) : (
              <input
                type={field.input}
                id={field.label}
                name={field.label}
                placeholder={field.placeholder}
                valueKey={field.valueKey}
                onInput={(e) => handleInput(e, field)}
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
      <Button title="Submit" color="red" />
      <Button title="Cancel" color="grey" />
    </form>
  );
}

export default FormCreator;
