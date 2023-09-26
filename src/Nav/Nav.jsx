/* eslint-disable react/prop-types */
import "./Nav.css";
import Options from "../Options/Options";

function Nav({ handleOptionsClick }) {
  return (
    <nav className="nav container">
      <Options handleOptionsClick={handleOptionsClick} />
    </nav>
  );
}

export default Nav;
