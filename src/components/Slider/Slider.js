import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const Slider = ({ min, max, value, step, onChange, style }) => {
  const [sliderValue, setSliderValue] = useState(value);

  const handleChange = (event) => {
    const newValue = parseInt(event.target.value);
    setSliderValue(newValue);
    onChange(newValue);
  };


  return (
    <div style={{ width: '100%', ...style }}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={sliderValue}
        onChange={handleChange}
        className="form-range"
      />
      <p>{sliderValue}</p>
    </div>
  );
};

Slider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  step: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  style: PropTypes.object,
};

Slider.defaultProps = {
  step: 1,
  style: {},
};

// export default Slider;
