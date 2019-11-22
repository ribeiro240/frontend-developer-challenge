import React, { useState, useEffect } from 'react';
import './App.scss';
import useFetch from './hooks/useFetch';
import Header from './components/Header';
import ProductGallery from './components/ProductGallery';
import ProductCard from './components/ProductCard';
import Form from './components/Form';
import Footer from './components/Footer';



function App() {

	const [clicked, setClicked] = useState(false);
	let [page, setPage] = useState(0)
	const { data, error, setError, isLoading, setUrl } = useFetch();


	const renderGallery = () => {
		return <ProductGallery data={data} />
	}

	useEffect(() => {
		if (data) {
			page += 1;
			setPage(page);
			console.log(page)
		}
	}, [data]);

	return (
		<React.Fragment>
			<Header />
			<main className="main">
				<section className="special-selection" >
					<h3 className="gallery-heading"> Sua seleção especial </h3>
					{data && renderGallery()}
					<button className="more-products" onClick={() => setUrl(`https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${page}`)}>Ainda mais produtos aqui!</button>
				</section>
				<Form />
			</main>
			<Footer />
		</React.Fragment>
	);
}

export default App;
