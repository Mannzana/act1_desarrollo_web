import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import ProductDetail from './components/ProductDetail';
import SearchResults from './components/SearchResults';
import Footer from './components/Footer';
import OrderHistory from './components/OrderHistory';
import useShoppingCart from './components/useShoppingCart';
import './App.css';

function App() {
  const [products] = useState([
    { id: 1, name: 'Limpiador 1', price: 29.99, category: 'Limpiadores' },
    { id: 2, name: 'Limpiador 2', price: 19.99, category: 'Limpiadores' },
    { id: 3, name: 'Tónico 1', price: 24.99, category: 'Tónicos' },
    { id: 4, name: 'Esencia 1', price: 34.99, category: 'Esencias' },
    { id: 5, name: 'Serum 1', price: 44.99, category: 'Serums' },
    { id: 6, name: 'Mascarilla 1', price: 14.99, category: 'Mascarillas' },
    { id: 7, name: 'Crema 1', price: 39.99, category: 'Cremas' },
    { id: 8, name: 'Protector Solar 1', price: 29.99, category: 'Protectores Solares' },
    { id: 9, name: 'Exfoliante 1', price: 19.99, category: 'Exfoliantes' }
  ]);

  // Utiliza el custom hook useShoppingCart para gestionar el estado del carrito
  const { cartItems, addToCart, removeFromCart, clearCart } = useShoppingCart([]);

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      // Lógica para completar el checkout
      clearCart(); // Ejemplo de cómo limpiar el carrito después del checkout
      // Navegación a la página de checkout si es necesario
    }
  };

  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList products={products} addToCart={addToCart} />} />
          <Route path="/products/:id" element={<ProductDetail products={products} addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} onCheckout={handleCheckout} />} />
          <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
          <Route path="/search" element={<SearchResults products={products} />} />
          <Route path="/order-history" element={<OrderHistory />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
