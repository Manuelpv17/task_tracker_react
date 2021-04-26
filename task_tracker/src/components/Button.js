import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      type='button'
      className='btn'
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelBlue",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;