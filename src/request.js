import products from './products.json';

export const getProducts = () => new Promise((resolve) => {
  const delay = parseInt(Math.random() * 1000);

  setTimeout(() => {
    resolve(products);
  }, delay);
});
