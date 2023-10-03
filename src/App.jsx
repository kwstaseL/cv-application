import { useState } from "react";
import "../styles/App.css";
import Canvas from "./Canvas/Canvas";
import Forms from "./Forms/Forms";
import { availableNames } from "../src/misc/NamingRegistry";
import { v4 as uuidv4 } from "uuid";
import Options from "./Options/Options";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function App() {
  const initialCVData = {
    name: "",
    role: "",
    professionalSummary: "",
    phoneNumber: "",
    email: "",
    location: "",
    experience: [],
    education: [],
  };
  // Original data of a section, saved to be restored when the user presses Cancel while Editing
  const [originalData, setOriginalData] = useState(null);

  const [isEditing, setIsEditing] = useState(false); // Initialize isEditing state
  const [idSelected, setIdSelected] = useState(null); // Initialize idSelected state

  const [cvData, setCVData] = useState(initialCVData);
  const [sectionsAdded, setSectionAdded] = useState([false, false]);

  function handleInputEvent(valueKey, sectionLabel, text) {
    const updatedCVData = { ...cvData };

    if (
      sectionLabel === availableNames.EDUCATION ||
      sectionLabel === availableNames.EXPERIENCE
    ) {
      const sectionArray =
        sectionLabel === availableNames.EDUCATION
          ? updatedCVData.education
          : updatedCVData.experience;
      const indexToUpdate = isEditing
        ? sectionArray.findIndex((entry) => entry.id === idSelected)
        : sectionArray.length - 1;

      if (indexToUpdate !== -1) {
        sectionArray[indexToUpdate][valueKey] = text; // Update the specific entry
      }
    } else {
      // Update personal info
      updatedCVData[valueKey] = text;
    }

    setCVData(updatedCVData);
  }

  function handleCancelForm(sectionLabel) {
    const updatedCVData = { ...cvData };

    if (
      sectionLabel === availableNames.EDUCATION ||
      sectionLabel === availableNames.EXPERIENCE
    ) {
      const sectionArray =
        sectionLabel === availableNames.EDUCATION
          ? updatedCVData.education
          : updatedCVData.experience;

      if (sectionArray.length > 0) {
        if (isEditing) {
          // If in edit mode, find the index of the entry being edited
          const indexToReset = sectionArray.findIndex(
            (entry) => entry.id === idSelected
          );

          if (indexToReset !== -1) {
            // Reset the entry to its original state
            sectionArray[indexToReset] = originalData; // Assuming you have a variable `originalData` that holds the data before editing
          }
        } else {
          // If not in edit mode, simply pop the last entry
          sectionArray.pop();
        }
      }

      if (sectionArray.length === 0) {
        removeSectionLabel(sectionLabel);
      }

      resetEditState();
    }

    setCVData(updatedCVData);
  }

  function handleSectionAddition(index) {
    if (index !== undefined && index >= 0 && index < sectionsAdded.length) {
      const updatedSectionsAdded = [...sectionsAdded];
      updatedSectionsAdded[index] = true;

      const newEntry =
        index === availableNames.EDUCATION
          ? {
              date: {
                startDate: "",
                endDate: "",
              },
              school: "",
              major: "",
              location: "",
              gpa: "",
              id: uuidv4(),
            }
          : {
              date: "",
              position: "",
              location: "",
              description: "",
              id: uuidv4(),
            };

      const updatedSection =
        index === availableNames.EDUCATION
          ? [...cvData.education, newEntry]
          : [...cvData.experience, newEntry];

      const updatedCVData = {
        ...cvData,
        [index === availableNames.EDUCATION ? "education" : "experience"]:
          updatedSection,
      };

      setCVData(updatedCVData);
      setSectionAdded(updatedSectionsAdded);
    }
  }

  function handleSubmitEvent() {
    resetEditState();
  }

  function handleDeleteForm(id, sectionLabel) {
    const updatedCVData = { ...cvData };

    if (
      sectionLabel === availableNames.EDUCATION ||
      sectionLabel === availableNames.EXPERIENCE
    ) {
      const sectionArray =
        sectionLabel === availableNames.EDUCATION
          ? updatedCVData.education
          : updatedCVData.experience;

      const updatedSection = sectionArray.filter((entry) => entry.id !== id);

      if (sectionLabel === availableNames.EDUCATION) {
        updatedCVData.education = updatedSection;
      } else if (sectionLabel === availableNames.EXPERIENCE) {
        updatedCVData.experience = updatedSection;
      }

      if (updatedSection.length === 0) {
        removeSectionLabel(sectionLabel);
      }
    }

    setCVData(updatedCVData);
  }

  function handleEditEvent(id, sectionLabel) {
    setIsEditing(true);
    setIdSelected(id);

    // Finding the entry being edited based on id
    const sectionArray =
      sectionLabel === availableNames.EDUCATION
        ? cvData.education
        : cvData.experience;
    const editedEntry = sectionArray.find((entry) => entry.id === id);

    // Set the original data to a copy of the edited entry
    setOriginalData({ ...editedEntry });
  }

  // Helper Functions
  function removeSectionLabel(label) {
    const updatedSections = [...sectionsAdded];
    updatedSections[label] = false;
    setSectionAdded(updatedSections);
  }

  function resetEditState() {
    setIsEditing(false); // Reset isEditing to false
    setIdSelected(null); // Reset idSelected to null
  }

  // Options event listeners

  function onClear() {
    setCVData(initialCVData);
    resetEditState();
  }

  function onSave() {
    const capture = document.querySelector(".cv");
    const scale = 2; // Increase the scale for higher resolution
    const options = {
      scale: scale,
      useCORS: true,
    };

    html2canvas(capture, options).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg", 1.0); // Increase the quality to 1.0 for maximum quality
      const pdf = new jsPDF("p", "mm", "a4");
      const componentWidth = pdf.internal.pageSize.getWidth();
      const componentHeight = (canvas.height * componentWidth) / canvas.width;

      pdf.addImage(imgData, "JPEG", 0, 0, componentWidth, componentHeight);
      pdf.save("cv.pdf");
    });
  }

  return (
    <>
      <main className="main">
        <section className="upper container">
          <Options onClear={onClear} onSave={onSave} />
          <Canvas cvData={cvData} sectionsAdded={sectionsAdded} />{" "}
          {/* Pass cvData to Canvas */}
        </section>
        <section className="down container">
          <Forms
            handleInputEvent={handleInputEvent}
            handleSectionAddition={handleSectionAddition}
            handleCancelForm={handleCancelForm}
            handleDeleteForm={handleDeleteForm}
            handleEditEvent={handleEditEvent}
            handleSubmitEvent={handleSubmitEvent}
            data={cvData}
          />
        </section>
      </main>
    </>
  );
}

export default App;
