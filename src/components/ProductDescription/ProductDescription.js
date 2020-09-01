import React from 'react';
import PropTypes from 'prop-types';

const INDEX_NUMBER = 0;

const ProductDescription = ({ productDescription, disabled }) => {
  const formattedDescriptionItem = descriptionItem => {
    const stringArray = descriptionItem.split(' ');
    const extractedEstimatedNumber = stringArray[INDEX_NUMBER];

    stringArray.splice(0, 1);
    const string = stringArray.join(' ');

    if (isNaN(extractedEstimatedNumber)) {
      return {__html: `${extractedEstimatedNumber} ${string}`}
    }

    return {__html: `<strong className="highlight">${extractedEstimatedNumber}</strong> ${string}`};
  };

  return (
    <ul className={`${disabled ? 'product__description--disabled' : 'product__description'}`}>
      {productDescription.map((item, index) => <li key={index} dangerouslySetInnerHTML={formattedDescriptionItem(item)} />)}
    </ul>
  );
};

export default ProductDescription;

ProductDescription.propTypes = {
  productDescription: PropTypes.array,
  disabled: PropTypes.bool,
}