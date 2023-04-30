import React from 'react';
import PropTypes from 'prop-types';

export const Card = ({ title, body, image }) => (
  <div className="card">
    {image && <img src={image} className="card-img-top" alt={title} />}
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{body}</p>
    </div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  image: PropTypes.string,
};

