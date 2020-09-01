import React from 'react';
import PropTypes from 'prop-types';

const ProductTitle = ({ foodType, flavor }) => (
  <hgroup>
    <h2 className="product__brand-name">{foodType}</h2>
    <h3 className="product__flavor">{flavor}</h3>
  </hgroup>
);

export default ProductTitle;

ProductTitle.propTypes = {
  foodType: PropTypes.string,
  flavor: PropTypes.string,
}