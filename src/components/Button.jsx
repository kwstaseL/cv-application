/* eslint-disable react/prop-types */
// Common component for Buttons
function Button({ title, color, onClick }) {
  const buttonStyle = {
    backgroundColor: color,
  };
  return (
    <button className="btn" style={buttonStyle} value={title} onClick={onClick}>
      {title}
    </button>
  );
}

export default Button;
