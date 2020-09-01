import React from 'react';
import PropTypes from 'prop-types';

const CroppedCorner = ({ text, isChecked, isHovered, disabled }) => (
  <div className="cropped-corner">
    <div className={`cropped-corner__triangle
      ${isHovered
        ? isChecked
          ? 'cropped-corner__triangle--hovered-raspberry'
          : 'cropped-corner__triangle--hovered-blue'
        : ''
    }`}></div>
    <p className={`cropped-corner__rectangle
      ${isHovered
        ? isChecked
          ? 'cropped-corner__rectangle--hovered-raspberry'
          : 'cropped-corner__rectangle--hovered-blue'
        : ''} 
      ${isChecked ? 'cropped-corner__rectangle--checked' : ''}
      ${disabled ? 'cropped-corner__rectangle--disabled' : ''}`}
    >{text}</p>
  </div>
);

export default CroppedCorner;

CroppedCorner.propTypes = {
  text: PropTypes.string,
  isHovered: PropTypes.bool,
  isChecked: PropTypes.bool,
  disabled: PropTypes.bool,
}