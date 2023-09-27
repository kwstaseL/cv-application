import "./CV.css";
import EducationEntry from "../entries/EducationEntry";
import ExperienceEntry from "../entries/ExperienceEntry";

function CV() {
  return (
    <section className="cv">
      <header className="cv__header">
        <h1 className="cv__name">John Doe</h1>
        <h1 className="cv__role">Office Manager</h1>
      </header>
      <main className="cv__main">
        <section className="main__content">
          <p className="cv__professional-summary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
            voluptate, velit dolorum aliquam officiis eos ad aspernatur ratione
            praesentium fuga quasi consequatur dolorem laborum quis!
          </p>
          <section className="cv__section">
            <h1 className="section__title">Experience</h1>
            <ul className="cv__experience-list">
              <ExperienceEntry
                date="current-current"
                position="Office Manager"
                location="Revo Foods, Austria"
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita consectetur quisquam fuga architecto. Accusantium, repellat?"
              />
            </ul>
          </section>
          <section className="cv__section">
            <h1 className="section__title">Education</h1>
            <ul className="cv__education-list">
              <EducationEntry
                date={{ startDate: "2016-02-2", endDate: "2017-02-3" }}
                schoolName="School Name"
                major="Computer Science"
                location="Austria, Vienna"
                gpa="7.9/10"
              />
              <EducationEntry
                date={{ startDate: "2016-02-2", endDate: "2017-02-3" }}
                schoolName="School Name"
                major="Computer Science"
                location="Austria, Vienna"
                gpa="7.9/10"
              />
            </ul>
          </section>
        </section>
        <aside className="cv__aside">
          <h1 className="cv__aside-title">Personal Info</h1>
        </aside>
      </main>
    </section>
  );
}

export default CV;
