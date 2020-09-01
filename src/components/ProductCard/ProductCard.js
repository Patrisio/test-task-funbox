import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import CardHeader from '../CardHeader';
import CardMain from '../CardMain';
import CardFooter from '../CardFooter';
import CroppedCorner from '../CroppedCorner';

const ProductCard = ({ content }) => {
  const {
    id,
    brand,
    foodType,
    flavor,
    productDescription,
    weight,
    unit,
    notice,
    stockOutMessage,
    imageUrl,
    stock
  } = content;

  const [isChecked, toggleChecked] = useState(false);
  const [isHovered, toggleHovered] = useState(false);
  const [croppedCornerText, changeCroppedCornerText] = useState(brand);

  const isStockIn = stock > 0;
  const trigger = useRef(null);

  const handleInputChange = (e) => {
    toggleChecked(e.target.checked);
    toggleHovered(false);
  }

  const handleMouseEnter = () => {
    if (trigger.current.disabled) {
      return;
    }

    if (isChecked) {
      changeCroppedCornerText('Котэ не одобряет?');
    }

    toggleHovered(true);
  };

  const handleMouseLeave = () => {
    if (trigger.current.disabled) {
      return;
    }

    changeCroppedCornerText(brand);
    toggleHovered(false);
  };

  return (
    <article className="product">
      <input
        className="product__trigger"
        type="checkbox"
        id={id}
        disabled={!isStockIn}
        onChange={handleInputChange}
        ref={trigger}
      />
      <label
        className="product__toggle"
        htmlFor={id}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CroppedCorner
          text={croppedCornerText}
          isChecked={isChecked}
          isHovered={isHovered}
          disabled={!isStockIn}
        />
        <div className={`product__content ${isHovered
          ? isChecked 
            ? 'product__content--hovered-raspberry' 
            : 'product__content--hovered-blue' 
          : ''}`}
        >
          <CardHeader
            foodType={foodType}
            flavor={flavor}
            productDescription={productDescription}
            disabled={!isStockIn}
          />
          <CardMain
            weight={weight}
            unit={unit}
            imageUrl={imageUrl}
            isHovered={isHovered}
            isChecked={isChecked}
            foodType={foodType}
            flavor={flavor}
          />
        </div>
      </label>
      <CardFooter
        id={id}
        notice={notice}
        stockOutMessage={stockOutMessage}
        stock={stock}
        isChecked={isChecked}
      />
    </article>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  content: PropTypes.object.isRequired,
}