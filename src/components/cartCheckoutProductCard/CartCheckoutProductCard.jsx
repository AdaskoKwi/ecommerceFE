import React, {useEffect} from 'react'
import './CartCheckoutProductCard.css'
import {Link} from "react-router-dom";

const CartCheckoutProductCard = ({product, imagePath, amountInCart, dataChanged, setDataChanged, cartItemId}) => {
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

    const increaseAmountInCart = async () => {
        if (amountInCart < product.quantity) {
            try {
                const response = await fetch(BASE_CART_API_URL + `/${cartItemId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        amountInCart: amountInCart+1,
                        id: cartItemId,
                        product: product
                    })
                })

                if (!response.ok) {
                    console.error("Couldn't increase amount in cart.")
                }

                setDataChanged(!dataChanged);
            } catch (error) {
                console.error(error);
            }
        } else {
            alert("Wybrano maksymalną ilość produku na stanie");
        }
    }

    console.log(JSON.stringify({
        amountInCart: amountInCart+1,
        id: cartItemId,
        product: product
    }))

    const decreaseAmountInCart = async () => {
        try {
            if (amountInCart-1 === 0) {
                await removeProductFromCart();
            }

            const response = await fetch(BASE_CART_API_URL + `/${cartItemId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    amountInCart: amountInCart-1,
                    id: cartItemId,
                    product: product
                })
            })

            if (!response.ok) {
                console.error("Couldn't decrease amount in cart.")
            }

            setDataChanged(!dataChanged);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {

    }, [dataChanged]);

    return (
        <div className={"cart-checkout-product"}>
            <Link to={`/product/${product.id}`}>
                <img src={imagePath} alt={product.name}/>
            </Link>

            <p>{product.name}</p>

            <div className={"cart-checkout-product-buttons"}>
                <p>{product.price} zł</p>
                <div className={"buttons"}>
                    <button className={"amount-dropdown-button"}>{amountInCart}</button>
                    <button className={"plus-minus-button"} onClick={decreaseAmountInCart}>-</button>
                    <button className={"plus-minus-button"} onClick={increaseAmountInCart}>+</button>
                </div>
                <button onClick={removeProductFromCart} className={"delete-button"}>❌</button>
            </div>
        </div>
    )
}
export default CartCheckoutProductCard