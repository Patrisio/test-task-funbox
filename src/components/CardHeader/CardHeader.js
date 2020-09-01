import React from 'react';
import PropTypes from 'prop-types';
import ProductTitle from '../ProductTitle';
import ProductDescription from '../ProductDescription';

const CardHeader = ({ foodType, flavor, productDescription, disabled }) => (
  <header className={`product__header ${disabled ? 'product__header--disabled' : ''}`}>
    <ProductTitle
      foodType={foodType}
      flavor={flavor}
    />
    <ProductDescription
      productDescription={productDescription}
      disabled={disabled}
    />
  </header>
);

export default CardHeader;

CardHeader.propTypes = {
  foodType: PropTypes.string,
  flavor: PropTypes.string,
  productDescription: PropTypes.array,
  disabled: PropTypes.bool,
}