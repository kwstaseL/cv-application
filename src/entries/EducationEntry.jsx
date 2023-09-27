/* eslint-disable react/prop-types */
function EducationEntry({ date, schoolName, major, location, gpa }) {
  return (
    <li className="cv__education-entry">
      <h1 className="cv__education-date-value main__date">
        {date.startDate} - <br />
        {date.endDate}
      </h1>
      <div className="cv_education__info">
        <h1 className="cv__education-position main__position">
          {schoolName}, {major}
        </h1>
        <p className="cv__education-location main__location">{location}</p>
        <p className="cv__education-description main__description">
          GPA: {gpa}
        </p>
      </div>
    </li>
  );
}

export default EducationEntry;
