import React from 'react'
import './CartSummaryCard.css'
import {Link} from "react-router-dom";

const CartSummaryCard = ({cartItems, cartSum, setCartSum}) => {
    const BASE_PRODUCT_API_URL = 'http://localhost:8080/api/v1/products'

    const removeCartItemsFromStock = async () => {
        try {
            console.log('Sending payload:', JSON.stringify(cartItems));

            const response = await fetch(BASE_PRODUCT_API_URL + '/update/collection', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cartItems)
            });

            if (!response.ok) {
                console.error("Couldn't remove cart items from stock");
            }

            alert("Bought items!")
        } catch (error) {
            console.error(error);
        }
    }

    const calculateCartPrice = () => {
        let sum = 0;

        for (const cartItem of cartItems) {
            sum += cartItem.product.price * cartItem.amountInCart;
        }

        setCartSum(sum);
    }

    calculateCartPrice();

    return (
        <div className={'cart-summary-card'}>
            <div className={'price-wrapper'}>
                <p>Do zapłaty: </p>
                <p className={"price"}>{cartSum.toFixed(2)} zł</p>
            </div>

            <Link to={'/'}>
                <button onClick={removeCartItemsFromStock}>Kup ▸</button>
            </Link>
        </div>
    )
}
export default CartSummaryCard
