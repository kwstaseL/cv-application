import { useState } from "react";
import "../styles/App.css";
import Canvas from "./Canvas/Canvas";
import Forms from "./Forms/Forms";
import { availableNames, getKey } from "../src/misc/NamingRegistry";
import { findBestMatch } from "./utils/findBestMatch";

function App() {
  // Create a sample cvData object
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

  function handleInputEvent(form, text, parent) {
    const { valueKey } = form;
    const updatedCVData = { ...cvData };
    const data = updateRelatedSection(parent, text, updatedCVData, valueKey);
    setCVData(data);
  }

  function handleSectionAddition(text) {
    const index = getKey(text);
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

  function updateRelatedSection(parent, text, cvData, valueKey) {
    const index = findBestMatch(parent, availableNames);

    if (index === availableNames.EDUCATION) {
      // Update education section
      console.log(cvData.education[0]);
      console.log(valueKey);
      console.log(cvData.education[0][valueKey]);
      cvData.education[0][valueKey] = text;
    } else if (index === availableNames.EXPERIENCE) {
      // Update experience section
      cvData.experience[0][valueKey] = text;
    } else {
      // Update personal info
      cvData[valueKey] = text;
    }
    // Return the modified cvData
    return cvData;
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
          />
        </section>
      </main>
    </>
  );
}

export default App;
