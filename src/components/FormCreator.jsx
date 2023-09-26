/* eslint-disable react/prop-types */

function FormCreator({ data }) {
  const generateForm = () => {
    return data.map((section, sectionIndex) => (
      <div key={sectionIndex}>
        {section.fields.map((field, fieldIndex) => (
          <div key={fieldIndex}>
            <label htmlFor={field.label}>{field.label}</label>
            {field.input === "textarea" ? (
              <textarea
                id={field.label}
                name={field.label}
                placeholder={field.placeholder}
              ></textarea>
            ) : (
              <input
                type={field.input}
                id={field.label}
                name={field.label}
                placeholder={field.placeholder}
              />
            )}
            {field.optional && (
              <span className="optional-field">(Optional)</span>
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
