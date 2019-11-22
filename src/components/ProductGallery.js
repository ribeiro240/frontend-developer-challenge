import React from 'react';
import ProductCard from './ProductCard';


const ProductGallery = ({ data }) => {

  const renderProducts = data.map((product) => {
    const { name, image, description, oldPrice, price, installments } = product;
    return <ProductCard name={name} image={image} description={description} oldPrice={oldPrice} price={price} installments={installments} />
  });

  return (
    <React.Fragment>

      <div className="product-gallery">
        {renderProducts}
      </div>
    </React.Fragment>
  )
}

export default ProductGallery;