import React from 'react';
import './App.scss';
import ProductCard from './components/ProductCard/ProductCard';

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
				<section className="special-selection" >
					<h3 className="gallery-heading"> Sua seleção especial </h3>
					<div className="product-gallery">
						<ProductCard />
						<ProductCard />
						<ProductCard />
					</div>
					<button className="more-products">Ainda mais produtos aqui!</button>
				</section>
				<form className="share-form">
					<h3 className="form-heading">Compartilhe a novidade</h3>
					<p>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
					<div className="user-info">
						<div className="name">
							<label htmlFor="name">
								Nome do seu amigo:
							</label>
							<input type="text" id="name"></input>
						</div>
						<div>
							<label htmlFor="email">
								E-mail:
							</label>
							<input type="email" id="email"></input>
						</div>

					</div>
					<button className="send-now">Enviar agora</button>
				</form>
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
