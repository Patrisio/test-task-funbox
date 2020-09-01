import React, { useEffect, useState, useRef } from 'react';
import Title from '../Title';
import ProductCards from '../ProductCards';
import { getProducts } from '../../request';

const Products = () => {
  const [products, setProducts] = useState([]);
  const productsWrapper = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const products = await getProducts();
      setProducts(products);
    }

    fetchData();
  }, []);

  return (
    <div className="category-products" ref={productsWrapper}>
      <Title text="Ты сегодня покормил кота?" />
      <ProductCards data={products} />
    </div>
  );
};

export default Products;