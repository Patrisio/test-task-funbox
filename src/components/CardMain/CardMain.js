import React from 'react';
import PropTypes from 'prop-types';
import { detect } from 'detect-browser';

const CardMain = ({ weight, unit, foodType, flavor, imageUrl, isHovered, isChecked }) => {
  const getWeightInKilos = (weight) => {
    const weightInKilos = weight / 1000;

    if (weight % 1000 !== 0) {
      const weightInKilosString = weightInKilos.toString().split('.').join(',');
      
      return weightInKilosString;
    }

    return weightInKilos;
  };

  const getImgUrl = () => {
    const ua = detect();

    if (ua.name === 'ie' || ua.name === 'safari') {
      const pathToOldFormatImageFile = imageUrl.replace(/\.[0-9a-z]+$/i, '.png');
      return pathToOldFormatImageFile;
    } else {
      return imageUrl;
    }
  };

  return (
    <div className="product__main">
      <figure>
        <img className="product__cover" src={getImgUrl()} alt={`${foodType} ${flavor}`}/>
      </figure>
      <div
        className={`product__weight
        ${isHovered
          ? isChecked 
            ? 'product__weight--hovered-raspberry' 
            : 'product__weight--hovered-blue'
          : ''}`}
      >
        <span className="product__weight-number">{getWeightInKilos(weight)}</span>
        <span className="product__weight-unit">{unit}</span>
      </div>
    </div>
  );
};

export default CardMain;

CardMain.propTypes = {
  weight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  unit: PropTypes.string,
  foodType: PropTypes.string,
  flavor: PropTypes.string,
  imageUrl: PropTypes.string,
  isHovered: PropTypes.bool,
  isChecked: PropTypes.bool,
}