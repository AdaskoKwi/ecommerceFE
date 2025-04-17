import React, {useEffect, useState} from 'react'
import ProductCard from "./components/productCard/ProductCard.jsx";
import './App.css'
import NewestProductCard from "./components/newestProductCard/NewestProductCard.jsx";
import AppHeader from "./components/appHeader/AppHeader.jsx";
import getMockImagePath from "./functions/MockImages.jsx";

const App = () => {
    const [productList, setProductList] = useState([]);
    const [topEightList, setTopEightList] = useState([]);
    const [newestProduct, setNewestProduct] = useState(null);

    const BASE_PRODUCT_API_URL = 'http://localhost:8080/api/v1/products'

    const getProducts = async () => {
        try {
            const response = await fetch(BASE_PRODUCT_API_URL, {
                method: 'GET'
            });

            if (!response.ok) {
                console.error("Couldn't fetch products.")
            }
            const data = await response.json();

            setProductList(data);
            setTopEightList(data.slice(0, 8));
            setNewestProduct(data[0]);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className={"app-container"}>
            <AppHeader
                productList={productList}
            />

            <main>
                {productList.length > 0 ? (
                    <NewestProductCard
                        product={newestProduct}
                        imagePath={getMockImagePath(newestProduct.category)}
                    />
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
                                <ProductCard
                                    product={product}
                                    imagePath={getMockImagePath(product.category)}
                                />
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
