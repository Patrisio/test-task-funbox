import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard';

const ProductCards = ({ data }) => (
  <section className="products">
    {data.map((product, index) => <ProductCard key={index} content={product} />)}
  </section>
);

export default ProductCards;

ProductCards.propTypes = {
  data: PropTypes.array.isRequired,
}