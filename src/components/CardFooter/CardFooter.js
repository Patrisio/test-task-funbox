import React from 'react';
import PropTypes from 'prop-types';

const CardFooter = ({ id, notice, stockOutMessage, stock, isChecked}) => (
  <footer className="product__footer">
    { stock !== 0 
    ? isChecked
      ? notice
      : <p>Чего сидишь? Порадуй котэ, <label className="product__label" htmlFor={id}>купи</label></p>
    : <p className="product__stock-out">{stockOutMessage}</p> }
  </footer>
);

export default CardFooter;

CardFooter.propTypes = {
  id: PropTypes.number.isRequired,
  notice: PropTypes.string,
  stockOutMessage: PropTypes.string,
  stock: PropTypes.number.isRequired,
  isChecked: PropTypes.bool.isRequired,
}