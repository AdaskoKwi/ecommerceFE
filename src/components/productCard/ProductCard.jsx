import React from 'react'
import '/src/components/productCard/ProductCard.css'
import {Link} from "react-router-dom";

const ProductCard = ({product, imagePath}) => {
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
                    product: product,
                    amountInCart: 1 // TODO FIX AMOUNT ADDED
                })
            })

            if (!response.ok) {
                console.error("Couldn't upload a product to cart.")
            } else {
                console.log("Added product to cart.")
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className={"product"}>
            <Link to={`/product/${product.id}`}>
                <img src={imagePath} alt={product.name}/>
                <p>{product.name}</p>
                <p>{product.price} zł</p>
            </Link>
            <button onClick={addProductToCart}>🛒</button>
        </div>
    )
}
export default ProductCard

