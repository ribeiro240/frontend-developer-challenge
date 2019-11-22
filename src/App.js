import React from 'react';
import './App.scss';
import Header from './components/Header';
import ProductGallery from './components/ProductGallery';
import Form from './components/Form';
import Footer from './components/Footer';


function App() {
	return (
		<React.Fragment>
			<Header />
			<main className="main">
				<section className="special-selection" >
					<ProductGallery />
					<button className="more-products">Ainda mais produtos aqui!</button>
				</section>
				<Form />
			</main>
			<Footer />
		</React.Fragment>
	);
}

export default App;
