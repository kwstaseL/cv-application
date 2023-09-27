/* eslint-disable react/prop-types */

function FormCreator({ data }) {
  const generateForm = () => {
    return data.map((section, sectionIndex) => (
      <div key={sectionIndex}>
        {section.fields.map((field, fieldIndex) => (
          <div key={fieldIndex}>
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
              ></textarea>
            ) : (
              <input
                type={field.input}
                id={field.label}
                name={field.label}
                placeholder={field.placeholder}
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
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormCreator;
