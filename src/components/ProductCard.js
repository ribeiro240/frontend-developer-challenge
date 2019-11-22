import React from 'react';

const ProductCard = ({ id, name, image, description, oldPrice, price, installments }) => {
  // const installmentsRefactoring = (count, value) {
  //   if (count.includes('.')) {

  //   }
  // }
  return (
    <div className="card-container">
      <div className="product-image">
        <img src={image} />
      </div>
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p className="product-description">{description}</p>
        <p className="from-price">De:R${oldPrice},00</p>
        <p className="price">Por: R${price},00</p>
        <p className="installments">ou {installments.count}x de R${installments.value}0</p>
        <button className="buy-button">Comprar</button>
      </div>
    </div>
  );
}

export default ProductCard;