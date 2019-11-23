import React from 'react';

const ProductCard = ({ name, image, description, oldPrice, price, installments }) => {

  const { count, value } = installments;

  //refactors the value
  const installmentsRefactoring = (value) => {
    let stringValue = value.toString();
    if (stringValue.includes('.')) {
      //if there is a period, replace it with a colon and add a '0' at the end
      let refactored = stringValue.replace('.', ',');
      refactored += '0';
      return refactored;
    } else {
      //if there is no period, add ',00'
      stringValue += ",00";
      return stringValue;
    };
  };

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
        <p className="installments">ou {count}x de R${installmentsRefactoring(value)}</p>
        <button className="buy-button">Comprar</button>
      </div>
    </div>
  );
}

export default ProductCard;