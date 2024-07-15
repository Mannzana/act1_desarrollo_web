import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <header className="home__header">
        <h1 className="home__title">Bienvenido a K-Skin</h1>
        <p className="home__subtitle">Tu destino para el mejor cuidado de la piel coreano</p>
      </header>

      <section className="home__about">
        <h2 className="home__section-title">Sobre Nosotros</h2>
        <p className="home__about-text">
          En KSkin, nos dedicamos a ofrecer los mejores productos de cuidado de la piel coreanos. Nuestra misión es ayudarte a alcanzar una piel radiante y saludable utilizando productos de alta calidad, cuidadosamente seleccionados por nuestros expertos.
        </p>
      </section>

      <section className="home__featured-products">
        <h2 className="home__section-title">Productos Destacados</h2>
        <div className="home__products-list">
          <div className="home__product-item">
            <h3 className="home__product-name">Limpiador Facial</h3>
            <p className="home__product-price">$29.99</p>
          </div>
          <div className="home__product-item">
            <h3 className="home__product-name">Tónico Revitalizante</h3>
            <p className="home__product-price">$24.99</p>
          </div>
          <div className="home__product-item">
            <h3 className="home__product-name">Serum Antiedad</h3>
            <p className="home__product-price">$44.99</p>
          </div>
        </div>
      </section>

      <section className="home__benefits">
        <h2 className="home__section-title">Beneficios del Cuidado de la Piel Coreano</h2>
        <ul className="home__benefits-list">
          <li className="home__benefit-item">Ingredientes Naturales y Suaves</li>
          <li className="home__benefit-item">Tecnología Avanzada en Cosmética</li>
          <li className="home__benefit-item">Rituales de Cuidado Personalizados</li>
          <li className="home__benefit-item">Resultados Comprobados y Efectivos</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
