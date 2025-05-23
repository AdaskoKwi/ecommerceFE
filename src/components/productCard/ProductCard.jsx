import React, {useState} from 'react'
import '/src/components/productCard/ProductCard.css'
import {Link} from "react-router-dom";

const ProductCard = ({product, imagePath, dataChanged, setDataChanged}) => {
    const [showAddToCartButton, setShowAddToCartButton] = useState(false);

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
        <div className={"product"} onMouseOver={() => setShowAddToCartButton(true)} onMouseLeave={() => setShowAddToCartButton(false)}>
            <Link to={`/product/${product.id}`}>
                <img src={imagePath} alt={product.name}/>
                <p>{product.name}</p>
                <p>{product.price} zł</p>
            </Link>

            {showAddToCartButton ? (
                <button onClick={addProductToCart}>🛒</button>
            ) : ''}
        </div>
    )
}
export default ProductCard

