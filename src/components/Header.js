import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Importa el archivo de estilos CSS

function Header() {
  return (
    <div className="header">
      <div className="container">
        <Link to="/" className="logo">K-Skin</Link>
        <div className="nav">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/order-history">Order History</Link></li> {/* Nuevo enlace al historial de pedidos */}
          </ul>
          <div className="search-form">
            <input type="text" placeholder="Search..." className="search-input" />
            <button className="search-button">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
