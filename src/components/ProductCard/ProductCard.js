import React from 'react';
import './ProductCard.scss';
import maca from './maca.jpeg';

const ProductCard = (props) => {
  return (
    <div className="card-container">
      <div className="product-image">
        <img src={maca} />
      </div>
      <div className="product-info">
        <p className="product-name">Nome do produto</p>
        <p className="product-description">Descrição do produto um pouco maior, com duas linhas ou três que explica melhor do que se trata</p>
        <p className="from-price">De: preço</p>
        <p className="price">Por: preço</p>
        <p className="installments">parcelamento</p>
        <button className="buy-button">Comprar</button>
      </div>
    </div>
  );
}

export default ProductCard;