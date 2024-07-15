import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';

function ProductList({ products, addToCart }) {
  const [notification, setNotification] = useState({ show: false, productName: '' });
  const [currentCategory, setCurrentCategory] = useState('All'); // Estado para la categoría actual

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setNotification({ show: true, productName: product.name });

    // Ocultar la notificación después de 2 segundos
    setTimeout(() => {
      setNotification({ show: false, productName: '' });
    }, 2000);
  };

  // Filtrar productos por categoría
  const filteredProducts = currentCategory === 'All' ? products : products.filter(product => product.category === currentCategory);

  // Obtener categorías únicas para los controles de selección
  const categories = ['All', 'Limpiadores', 'Tónicos', 'Esencias', 'Serums', 'Mascarillas', 'Cremas', 'Protectores Solares', 'Exfoliantes'];

  return (
    <div className="product-list">
      <h2 className="product-list-title">Products</h2>
      {/* Controles de selección de categoría */}
      <div className="category-controls">
        {categories.map((category) => (
          <button key={category} onClick={() => handleCategoryChange(category)} className={category === currentCategory ? 'active' : ''}>
            {category}
          </button>
        ))}
      </div>
      <div className="products-container">
        {filteredProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">${product.price.toFixed(2)}</p>
              <div className="product-actions">
                <Link to={`/products/${product.id}`} className="detail-link">View Details</Link>
                <button onClick={() => handleAddToCart(product)} className="add-to-cart-button">Add to Cart</button>
              </div>
            </div>
          ))
        )}
      </div>
      {notification.show && (
        <div className="add-to-cart-notification">
          <p>{notification.productName} has been added to cart!</p>
        </div>
      )}
    </div>
  );
}

export default ProductList;
