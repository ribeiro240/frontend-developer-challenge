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
	const { data, error, setError, isLoading, setUrl } = useFetch();

	const loader = () => {
		return <div className="loader"></div>
	}


	const request = () => {
		page += 1;
		setPage(page);
		setUrl(`https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${page}`);
	}


	useEffect(() => {
		if (!data && page === 1) {
			setUrl('https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1');

		} else {
			const renderProducts = data.map((product) => {
				const { name, image, description, oldPrice, price, installments } = product;
				return <ProductCard name={name} image={image} description={description} oldPrice={oldPrice} price={price} installments={installments} />
			});
			setProducts(products.concat(renderProducts));
		}
	}, [data]);

	return (
		<React.Fragment>
			<Header />
			{console.log("rendered")}
			<main className="main">
				<section className="special-selection" >
					<h3 className="gallery-heading"> Sua seleção especial </h3>
					{isLoading && loader()}
					{data && <ProductGallery products={products} />}
					<button className="more-products" onClick={() => request()}>Ainda mais produtos aqui!</button>
					{/* <button className="last" onClick={() => {
						page -= 1;
						setPage(page);
						setUrl(`https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${page}`)

					}}>last</button>
					<button className="next" onClick={() => {
						page += 1;
						setPage(page);
						setUrl(`https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${page + 1}`)

					}}>next</button> */}
				</section>
				<Form />
			</main>
			<Footer />
		</React.Fragment>
	);
}

export default App;
