import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

function ProductDetail({ products, addToCart }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  const generateDescription = (productName) => {
    return `Este producto es un ${productName} coreano.`;
  };

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <p>{generateDescription(product.name)}</p>
      <p><strong>Precio:</strong> ${product.price.toFixed(2)}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductDetail;
