import React from 'react'
import './CartSummaryCard.css'

const CartSummaryCard = ({cartItems, cartSum, setCartSum}) => {

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

            <button>Kup ▸</button>
        </div>
    )
}
export default CartSummaryCard
