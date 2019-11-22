import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductGallery = () => {
  return (
    <React.Fragment>
      <h3 className="gallery-heading"> Sua seleção especial </h3>
      <div className="product-gallery">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </React.Fragment>
  );
}

export default ProductGallery;