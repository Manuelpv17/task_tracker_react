import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ tittle }) => {
  const onClick = (e) => {
    console.log("click");
  };

  return (
    <header className='header'>
      <h1>{tittle}</h1>
      <Button color='green' text='Add' onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  tittle: "Task Tracker",
};

Header.propTypes = {
  tittle: PropTypes.string,
};

export default Header;
