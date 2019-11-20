import React from 'react';
import './App.scss';

function App() {
  return (
    <React.Fragment>
      <header className="header">
        <div className="header-content">
          <div className="header-text">
            <p className="header-text-top">uma seleção de produtos</p>
            <p className="header-text-middle">especial para você</p>
            <p className="header-text-bottom">Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</p>
          </div>
          <nav className="navbar">
            <button className="nav-item">Conheça a Linx</button>
            <button className="nav-item">Ajude o algoritmo</button>
            <button className="nav-item">Seus produtos</button>
            <button className="nav-item">Compartilhe</button>
          </nav>
        </div>

      </header>
      <main className="main">
        <section className="product-gallery">

        </section>
      </main>
      <footer className="footer">
        <div className="footer-text">
          <p>Testando suas habilidades em HTML, CSS e JS.</p>
          <p>Linx Impulse</p>
          <p>2019</p>
        </div>

      </footer>
    </React.Fragment>
  );
}

export default App;
