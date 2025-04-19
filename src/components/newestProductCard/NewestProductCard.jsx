import React from 'react'
import './NewestProductCard.css';
import {Link} from "react-router-dom";

const NewestProductCard = ({product, imagePath, dataChanged, setDataChanged}) => {
    const BASE_CART_API_URL = 'http://localhost:8080/api/v1/cart'

    const addProductToCart = async () => {
        try {
            const response = await fetch(BASE_CART_API_URL + '/add', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    product: product
                })
            })

            if (!response.ok) {
                console.error("Couldn't upload a product to cart.")
            }

            console.log("Added product to cart.")
            setDataChanged(!dataChanged);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="newest-product-wrapper">
            <div className="container-label">
                <h2>Najnowsza oferta</h2>
            </div>
            <div className="newest-product-container">
                <div className={"newest-product"}>
                    {typeof name !== 'undefined' ? (
                        <div>
                            <Link to={`/product/${product.id}`}>
                                <div>
                                    <img src={imagePath} alt={product.name}/>
                                </div>
                            </Link>


                            <div className={"newest-product-label"}>
                                <Link to={`/product/${product.id}`}>
                                    <p>{product.name}</p>
                                    <p>Pozostało: {product.quantity}</p>
                                    <p>{product.price} zł</p>
                                </Link>

                                <button onClick={addProductToCart}>🛒 Dodaj do koszyka</button>
                            </div>
                        </div>
                    ) : (
                        <h3>Brak produktu do wyświetlenia</h3>
                    )}

                </div>
            </div>
        </div>
    )
}
export default NewestProductCard
