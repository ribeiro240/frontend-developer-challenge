import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';


const ProductGallery = ({ products }) => {

  return (
    <React.Fragment>

      <div className="product-gallery">
        {products}
      </div>
    </React.Fragment>
  )
}

export default ProductGallery;