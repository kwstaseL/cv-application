/* eslint-disable react/prop-types */
function EducationEntry({ date, schoolName, major, location, gpa }) {
  return (
    <li className="profile__education-entry">
      <h1 className="profile__education-date-value main__date">
        {date.startDate} - <br />
        {date.endDate}
      </h1>
      <div className="profile_education__info">
        <h1 className="profile__education-position main__position">
          {schoolName}, {major}
        </h1>
        <p className="profile__education-location main__location">{location}</p>
        <p className="profile__education-description main__description">
          GPA: {gpa}
        </p>
      </div>
    </li>
  );
}

export default EducationEntry;
