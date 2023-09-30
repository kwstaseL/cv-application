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
  handleCancelForm,
  handleDeleteForm,
  handleEditEvent,
  handleSubmitEvent,
  data,
}) {
  const [isExtended, setExtended] = useState(false);
  const [isFormVisible, setFormVisibility] = useState(false);

  // Receives a label ("Experience" title section or "Education" title section)
  // and maps it to a constant enum variable for comparisson reasons.
  function findSection(string) {
    return getKey(string);
  }

  function handleArrowEvent() {
    if (!showExtendedForm) {
      setFormVisibility(!isFormVisible);
      return;
    }
    isFormVisible
      ? setFormVisibility(!isFormVisible)
      : setExtended(!isExtended);
  }

  function manageSubmitClick(e) {
    e.preventDefault();
    setFormVisibility(!isFormVisible);
    handleSubmitEvent();
  }

  function manageAddSectionEvent() {
    setFormVisibility(!isFormVisible);
    setExtended(!isExtended);

    if (findSection(title) == undefined) {
      addMapping(title);
    }
    const index = findSection(title);
    handleSectionAddition(index);
  }

  function manageInputEvent(form, text, sectionName) {
    const { valueKey } = form;
    const sectionLabel = findSection(sectionName);
    handleInputEvent(valueKey, sectionLabel, text);
  }

  function manageCancelForm(sectionLabel) {
    handleArrowEvent();
    const index = findSection(sectionLabel);
    handleCancelForm(index);
  }

  function manageDeleteForm(id) {
    const sectionLabel = findSection(title);
    handleDeleteForm(id, sectionLabel);
  }

  function manageEditEvent(id) {
    const sectionLabel = findSection(title);
    handleEditEvent(id, sectionLabel);
    setFormVisibility(!isFormVisible);
    setExtended(!isExtended);
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
        <ExtendedForm
          manageAddSectionEvent={manageAddSectionEvent}
          manageDeleteForm={manageDeleteForm}
          manageEditEvent={manageEditEvent}
          data={data}
        />
      )}
      {isFormVisible && (
        <FormCreator
          data={formData}
          manageInputEvent={manageInputEvent}
          manageCancelForm={manageCancelForm}
          manageSubmitClick={manageSubmitClick}
          sectionName={title}
          cvData={data}
        />
      )}
    </section>
  );
}

export default Form;
