import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ label, onClick, disabled }) => (
  <button
    className="btn btn-primary"
    onClick={onClick}
    disabled={disabled}
  >
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
};

// export default Button;
