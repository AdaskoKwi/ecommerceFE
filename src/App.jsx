import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import ProductCard from "./components/productCard/ProductCard.jsx";
import './App.css'
import NewestProductCard from "./components/newestProductCard/NewestProductCard.jsx";
import AppHeader from "./components/appHeader/AppHeader.jsx";


const App = () => {
    const [productList, setProductList] = useState([]);
    const [topEightList, setTopEightList] = useState([]);
    const [newestProduct, setNewestProduct] = useState(null);

    const BASE_API_URL = 'http://localhost:8080/api/v1/products'

    const getProducts = async () => {
        try {
            const response = await fetch(BASE_API_URL, {
                method: 'GET'
            });

            if (!response.ok) {
                console.error("Couldn't fetch products.")
            }
            const data = await response.json();

            setProductList(data);
            setTopEightList(data.slice(0, 8));
            setNewestProduct(data.pop());
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className={"app-container"}>
            <AppHeader/>

            <main>
                {productList.length > 0 ? (
                    <Link to={`/product/${newestProduct.id}`}>
                        <NewestProductCard
                            product={newestProduct}
                        />
                    </Link>
                ) : (
                    ''
                )}
                <div className="top-8-container-wrapper">
                    <div className="container-label">
                        <h2>Hity tygodnia</h2>
                    </div>
                    <div className="top-8-product-container">
                        {topEightList.length > 0 ? (
                            topEightList.map((product) => (
                                <Link to={`/product/${product.id}`}>
                                    <ProductCard product={product}/>
                                </Link>
                            ))
                        ) : (
                            <h3>Brak produktów do wyświetlenia</h3>
                        )}
                    </div>
                </div>
            </main>
        </div>
    )
}
export default App
