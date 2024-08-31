import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MenuButton({ label, link }) {
  return (
    <Link to={link} className="MenuButton">
      {label}
    </Link>
  );
}

MenuButton.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default MenuButton;
