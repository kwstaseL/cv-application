import "./CV.css";
import EducationEntry from "../entries/EducationEntry";
import ExperienceEntry from "../entries/ExperienceEntry";
import { availableNames } from "../misc/NamingRegistry";

// Factory that creates and returns the CV Component based on the cvData the user typed
function CV({ cvData, sectionsAdded }) {
  return (
    <section className="cv">
      <header className="cv__header">
        <h1 className="cv__name">{cvData.name}</h1>
        <h1 className="cv__role">{cvData.role}</h1>
      </header>
      <main className="cv__main">
        <section className="main__content">
          <p className="cv__professional-summary">
            {cvData.professionalSummary}
          </p>
          {/* Render Experience and Education sections using map */}
          {sectionsAdded[availableNames.EXPERIENCE] && (
            <section className="cv__section">
              <h1 className="section__title">Experience</h1>
              <ul className="cv__experience-list">
                {cvData.experience.map((exp, index) => (
                  <ExperienceEntry
                    key={index}
                    startDate={exp.startDate}
                    endDate={exp.endDate}
                    company={exp.company}
                    position={exp.position}
                    location={exp.location}
                    description={exp.description}
                  />
                ))}
              </ul>
            </section>
          )}
          {sectionsAdded[availableNames.EDUCATION] && (
            <section className="cv__section">
              <h1 className="section__title">Education</h1>
              <ul className="cv__education-list">
                {cvData.education.map((edu, index) => (
                  <EducationEntry
                    key={index}
                    gradYear={edu.gradYear}
                    school={edu.school}
                    major={edu.major}
                    location={edu.location}
                    gpa={edu.gpa}
                    honors={edu.honors}
                  />
                ))}
              </ul>
            </section>
          )}
        </section>
        <aside className="cv__aside">
          <h1 className="cv__aside-title">Personal Info</h1>
        </aside>
      </main>
    </section>
  );
}

export default CV;
