import React, { useState, useEffect } from 'react';
import './App.scss';
import useFetch from './hooks/useFetch';
import Header from './components/Header';
import ProductGallery from './components/ProductGallery';
import ProductCard from './components/ProductCard';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
	let [page, setPage] = useState(1);
	const [products, setProducts] = useState([])
	const { data, error, isLoading, setUrl } = useFetch();

	const loader = () => {
		return <div className="loader"></div>
	}

	const errorHandling = () => {
		if (error) {
			return <h2 className="error-message">Produtos da página {page} indisponíveis no momento</h2>
		}
	}

	//updates the url for every new click from the user 
	const request = () => {
		page += 1;
		setPage(page);
		setUrl(`https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${page}`);
	}


	useEffect(() => {
		//if there is no data yet, set url to the first page
		if (!data && page === 1) {
			setUrl('https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1');

		} else {
			//for every element of the data array, destructure the necessary props and return a product card to the renderProducts array
			const renderProducts = data.map((product) => {
				const { id, name, image, description, oldPrice, price, installments } = product;
				return <ProductCard key={id} name={name} image={image} description={description} oldPrice={oldPrice} price={price} installments={installments} />
			});
			//adds the new fetched products to the previous products array
			setProducts(products.concat(renderProducts));
		}
	}, [data]);

	return (
		<React.Fragment>
			<Header />

			<main className="main">
				<section className="special-selection" id="gallery" >
					<h3 className="gallery-heading"> Sua seleção especial </h3>

					{/* if there is fetched data, render product gallery component  */}
					{data && <ProductGallery products={products} />}
					{/* if it's loading, render the loader */}
					{isLoading && loader()}
					{errorHandling()}

					<button className="more-products" onClick={() => request()}>Ainda mais produtos aqui!</button>
				</section>

				<Form />

			</main>
			<Footer />
		</React.Fragment>
	);
}

export default App;
