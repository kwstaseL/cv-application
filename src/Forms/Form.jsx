/* eslint-disable react/prop-types */
import { useState } from "react";
import ExtendedForm from "../Forms/ExtendedForm";
import FormCreator from "../components/FormCreator";
import {
  personalDetailsFields,
  experienceDetails,
  educationDetailsFields,
} from "../data/formData";
import { addMapping, getKey } from "../misc/NamingRegistry";

const formDataMap = {
  "General Information": personalDetailsFields,
  Education: educationDetailsFields,
  "Work Experience": experienceDetails,
};

function Form({
  title,
  showExtendedForm,
  handleInputEvent,
  handleSectionAddition,
}) {
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

    if (getKey(title) == undefined) {
      addMapping(title);
    }
    handleSectionAddition(title);
  }
  const formData = formDataMap[title] || [];

  return (
    <section className="form">
      <div className="form__header">
        <h1 className="form__header-title">{title}</h1>
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
      {isFormVisible && (
        <FormCreator
          data={formData}
          handleInputEvent={handleInputEvent}
          parent={title}
        />
      )}
    </section>
  );
}

export default Form;
