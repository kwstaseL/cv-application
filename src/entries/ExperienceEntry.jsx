/* eslint-disable react/prop-types */
function ExperienceEntry({ date, position, location, description }) {
  return (
    <li className="profile__experience-entry">
      <div className="profile__experience-date">
        <h1 className="profile__experience-date-value main__date">{date}</h1>
      </div>
      <div className="profile_experience__info">
        <h1 className="profile__experience-position main__position">
          {position}
        </h1>
        <p className="profile__experience-location main__location">
          {location}
        </p>
        <p className="profile__experience-description main__description">
          {description}
        </p>
      </div>
    </li>
  );
}

export default ExperienceEntry;
