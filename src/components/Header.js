import React from 'react';

const Header = () => {
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
            <button className="nav-item"><a href="#">Conheça a Linx</a></button>
            <button className="nav-item"><a href="#">Ajude o algoritmo</a></button>
            <button className="nav-item"><a href="#gallery">Seus produtos</a></button>
            <button className="nav-item"><a href="#form">Compartilhe</a></button>
          </nav>
        </div>

      </header>
    </React.Fragment>
  );
}

export default Header;