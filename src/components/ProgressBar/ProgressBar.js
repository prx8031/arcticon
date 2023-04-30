import React from 'react';
import PropTypes from 'prop-types';

export const ProgressBar = ({ percent, color, height, style }) => {
  const containerStyle = {
    height: height,
    backgroundColor: '#f5f5f5',
    borderRadius: '0.25rem',
    ...style,
  };

  const progressStyle = {
    width: `${percent}%`,
    height: height,
    backgroundColor: color,
    borderRadius: '0.25rem',
  };

  return (
    <div className="progress" style={containerStyle}>
      <div className="progress-bar" role="progressbar" style={progressStyle}>
        <span className="sr-only">{`${percent}% Complete`}</span>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  percent: PropTypes.number.isRequired,
  color: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.object,
};

ProgressBar.defaultProps = {
  color: '#007bff',
  height: '1rem',
  style: {},
};

// export default ProgressBar;
