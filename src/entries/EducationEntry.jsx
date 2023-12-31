/* eslint-disable react/prop-types */
function EducationEntry({ gradYear, school, major, location, gpa, honors }) {
  return (
    <li className="cv__education-entry">
      <h1 className="cv__education-date-value main__date">
        {gradYear} <br />
      </h1>
      <div className="cv_education__info">
        {school && (
          <h1 className="cv__education-position main__position">
            {school}
            {major && <span>, {major}</span>}
          </h1>
        )}
        <p className="cv__education-location main__location">{location}</p>
        {gpa && (
          <p className="cv__education-description main__description">
            GPA: {gpa}/10
          </p>
        )}
        {honors && (
          <p className="cv__education-description main__description">
            {honors}
          </p>
        )}
      </div>
    </li>
  );
}

export default EducationEntry;
