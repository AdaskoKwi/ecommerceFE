import React from 'react'
import '/src/components/cartProduct/CartProduct.css';
import {Link} from "react-router-dom";

const CartProduct = ({cartItem, imagePath, dataChanged, setDataChanged, cartItemId, amountInCart}) => {
    const BASE_CART_API_URL = 'http://localhost:8080/api/v1/cart'

    const removeProductFromCart = async () => {
        try {
            const response = await fetch(BASE_CART_API_URL + `/${cartItemId}`, {
                method: 'DELETE',
            })

            if (!response.ok) {
                console.error("Couldn't remove product from cart.")
            }

            setDataChanged(!dataChanged);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="cart-product">
            <Link to={`/product/${cartItem.id}`}>
                <img src={imagePath} alt={cartItem.name}/>
                <div className="cart-product-text">
                    <p>{cartItem.name}</p>
                    <p className={"cart-product-amount"}>Ilość: {amountInCart}</p>
                </div>
            </Link>
            <button className={"delete-cartItem-button"} onClick={removeProductFromCart}>❌</button>
        </div>
    )
}
export default CartProduct
