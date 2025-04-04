import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import AppHeader from "../../components/appHeader/AppHeader.jsx";
import './ProductPage.css';
import getMockImagePath from "../../functions/MockImages.jsx";

const ProductPage = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams();

    const BASE_API_URL = 'http://localhost:8080/api/v1/products'

    const getProductById = async () => {
        try {
            const response = await fetch(BASE_API_URL + `/${id}`, {
                method: 'GET'
            });

            if (!response.ok) {
                console.error("Couldn't fetch products.")
            }
            const data = await response.json();
            setProduct(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getProductById();
    }, [id]);

    return (
        <div>
            <AppHeader/>

            <main className={"product-page-main"}>
                <div className="product-page-wrapper">
                    <div className="product-page-container">
                        <div className="product-image">
                            <img src={getMockImagePath(product.category)} alt="test"/>
                        </div>
                        <div className="product-info">
                            <h1>{product.name}</h1>
                            <p>{product.description}</p>
                            {product.quantity > 0 ? (
                                <div className="in-stock">
                                    <p>✅ Przedmiot jest dostępny, pozostało {product.quantity} sztuk</p>
                                </div>
                            ) : (
                                <div className="out-of-stock">
                                    <p>❌ Przedmiot nie jest dostępny</p>
                                </div>
                            )}
                            <div className={"add-to-cart"}>
                                <button>🛒 Dodaj do koszyka</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default ProductPage