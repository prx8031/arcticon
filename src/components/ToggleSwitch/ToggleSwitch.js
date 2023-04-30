import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const ToggleSwitch = ({ checked, onChange, style }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onChange(newValue);
  };

  return (
    <div style={{ display: 'inline-block', ...style }}>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

ToggleSwitch.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  style: PropTypes.object,
};

ToggleSwitch.defaultProps = {
  style: {},
};

// export default ToggleSwitch;
