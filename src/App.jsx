import { useState } from "react";
import "../styles/App.css";
import Canvas from "./Canvas/Canvas";
import Forms from "./Forms/Forms";
import { availableNames } from "../src/misc/NamingRegistry";
import { v4 as uuidv4 } from "uuid";

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

  const [cvData, setCVData] = useState(initialCVData);
  const [sectionsAdded, setSectionAdded] = useState([false, false]);

  function handleInputEvent(valueKey, sectionLabel, text) {
    const updatedCVData = { ...cvData };
    if (sectionLabel === availableNames.EDUCATION) {
      // Update education section
      // Updating the last entry entered
      const lastSectionIndex = cvData.education.length - 1;
      updatedCVData.education[lastSectionIndex][valueKey] = text;
    } else if (sectionLabel === availableNames.EXPERIENCE) {
      // Update experience section
      // Updating the last entry entered
      const lastSectionIndex = cvData.experience.length - 1;
      updatedCVData.experience[lastSectionIndex][valueKey] = text;
    } else {
      // Update personal info
      updatedCVData[valueKey] = text;
    }
    setCVData(updatedCVData);
  }

  function handleCancelForm(sectionLabel) {
    const updatedCVData = { ...cvData };
    if (sectionLabel === availableNames.EDUCATION) {
      updatedCVData.education.pop();
    } else if (sectionLabel === availableNames.EXPERIENCE) {
      updatedCVData.experience.pop();
    }
    setCVData(updatedCVData);
  }

  function handleSectionAddition(index) {
    // Receiving the index based on the text ("Education","Experience");
    if (index !== undefined && index >= 0 && index < sectionsAdded.length) {
      const updatedSectionsAdded = [...sectionsAdded];
      updatedSectionsAdded[index] = true;

      if (index === availableNames.EDUCATION) {
        // Create a new education entry object
        const newEducationEntry = {
          date: {
            startDate: "",
            endDate: "",
          },
          schoolName: "",
          major: "",
          location: "",
          gpa: "",
          id: uuidv4(),
        };

        // Append the new education entry to the existing education array
        const updatedEducation = [...cvData.education, newEducationEntry];

        // Update the CV data with the new education array
        const updatedCVData = {
          ...cvData,
          education: updatedEducation,
        };

        setCVData(updatedCVData);
      } else if (index === availableNames.EXPERIENCE) {
        // Create a new experience entry object
        const newExperienceEntry = {
          date: "",
          position: "",
          location: "",
          description: "",
          id: uuidv4(),
        };

        // Append the new experience entry to the existing experience array
        const updatedExperience = [...cvData.experience, newExperienceEntry];

        // Update the CV data with the new experience array
        const updatedCVData = {
          ...cvData,
          experience: updatedExperience,
        };

        setCVData(updatedCVData);
      }

      setSectionAdded(updatedSectionsAdded);
    }
  }

  function handleDeleteForm(id, sectionLabel) {
    const updatedCVData = { ...cvData };

    if (sectionLabel === availableNames.EDUCATION) {
      // Filter out the form with the specified ID from the education array
      const updatedEducation = cvData.education.filter(
        (entry) => entry.id !== id
      );
      updatedCVData.education = updatedEducation;
    } else if (sectionLabel === availableNames.EXPERIENCE) {
      // Filter out the form with the specified ID from the experience array
      const updatedExperience = cvData.experience.filter(
        (entry) => entry.id !== id
      );
      updatedCVData.experience = updatedExperience;
    }

    setCVData(updatedCVData);
  }

  return (
    <>
      <main className="main">
        <section className="upper container">
          <Canvas cvData={cvData} sectionsAdded={sectionsAdded} />{" "}
          {/* Pass cvData to Canvas */}
        </section>
        <section className="down container">
          <Forms
            handleInputEvent={handleInputEvent}
            handleSectionAddition={handleSectionAddition}
            handleCancelForm={handleCancelForm}
            data={cvData}
            handleDeleteForm={handleDeleteForm}
          />
        </section>
      </main>
    </>
  );
}

export default App;
