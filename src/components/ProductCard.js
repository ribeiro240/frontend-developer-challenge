import React from 'react';

const ProductCard = ({ id, name, image, oldPrice, price, installments }) => {
  return (
    <div className="card-container">
      <div className="product-image">
        <img src="{image} " />
      </div>
      <div className="product-info">
        <p className="product-name">oahsd</p>
        <p className="product-description">IAHd</p>
        <p className="from-price">De:IAdoi</p>
        <p className="price">Por: iASdoi</p>
        <p className="installments">HAOdihAS</p>
        <button className="buy-button">Comprar</button>
      </div>
    </div>
  );
}

export default ProductCard;