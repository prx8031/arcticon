import React from 'react';
import PropTypes from 'prop-types';

export const Modal = ({ title, children, isOpen, onClose, className, style }) => {
  return (
    <div className={`modal ${isOpen ? 'show d-block' : ''}`} tabIndex="-1" role="dialog" style={{ display: isOpen ? 'block' : 'none', ...style }}>
      <div className={`modal-dialog ${className}`} role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
      <div className={`modal ${isOpen ? 'show' : ''}`} onClick={onClose}></div>
    </div>
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

Modal.defaultProps = {
  className: '',
  style: {},
};

// export default Modal;
