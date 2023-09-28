/* eslint-disable react/prop-types */
// Common component for Buttons
function Button({ title, color, handleOptionsClick }) {
  const buttonStyle = {
    backgroundColor: color,
  };
  return (
    <button
      className="btn"
      style={buttonStyle}
      value={title}
      onClick={handleOptionsClick}
    >
      {title}
    </button>
  );
}

export default Button;
