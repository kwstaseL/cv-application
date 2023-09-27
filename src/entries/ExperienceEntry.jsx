/* eslint-disable react/prop-types */
function ExperienceEntry({ date, position, location, description }) {
  return (
    <li className="cv__experience-entry">
      <div className="cv__experience-date">
        <h1 className="cv__experience-date-value main__date">{date}</h1>
      </div>
      <div className="cv_experience__info">
        <h1 className="cv_experience-position main__position">{position}</h1>
        <p className="cv__experience-location main__location">{location}</p>
        <p className="cv__experience-description main__description">
          {description}
        </p>
      </div>
    </li>
  );
}

export default ExperienceEntry;
