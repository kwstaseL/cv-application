/* eslint-disable react/prop-types */
import { useState } from "react";
import ExtendedForm from "../Forms/ExtendedForm";
import FormCreator from "../components/FormCreator";
import {
  personalDetailsFields,
  experienceDetails,
  educationDetailsFields,
} from "../data/formData";

const formDataMap = {
  "General Information": personalDetailsFields,
  Education: educationDetailsFields,
  "Work Experience": experienceDetails,
};

function Form({ title, showExtendedForm }) {
  const [isExtended, setExtended] = useState(false);
  const [isFormVisible, setFormVisibility] = useState(false);

  function handleArrowEvent() {
    if (showExtendedForm) {
      setExtended(!isExtended);
      if (isFormVisible) {
        setFormVisibility(!isFormVisible);
      }
    } else {
      setFormVisibility(!isFormVisible);
    }
  }

  function handleAddSectionEvent() {
    setFormVisibility(!isFormVisible);
    setExtended(!isExtended);
  }
  const formData = formDataMap[title] || [];

  return (
    <section className="form">
      <div className="form__header">
        <h1>{title}</h1>
        <button onClick={handleArrowEvent}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="form__extend-arrow"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div>
      {isExtended && showExtendedForm && (
        <ExtendedForm handleAddSectionEvent={handleAddSectionEvent} />
      )}
      {isFormVisible && <FormCreator data={formData} />}
    </section>
  );
}

export default Form;