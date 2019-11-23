import React from 'react';


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