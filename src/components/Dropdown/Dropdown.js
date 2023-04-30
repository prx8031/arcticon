import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const Dropdown = ({ label, options, onSelect, selectedOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption ? selectedOption.label : label}
      </button>
      <div className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
        {options.map((option) => (
          <button
            key={option.value}
            className={`dropdown-item ${selectedOption === option ? 'active' : ''}`}
            type="button"
            onClick={() => handleSelect(option)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
  selectedOption: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
  }),
};

Dropdown.defaultProps = {
  selectedOption: null,
};

// export default Dropdown;
