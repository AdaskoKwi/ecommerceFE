import React, {useEffect, useState} from 'react'
import './CheckoutPage.css'
import AppHeader from "../../components/appHeader/AppHeader.jsx";
import getMockImagePath from "../../functions/MockImages.jsx";
import CartSummaryCard from "../../components/cartSummaryCard/CartSummaryCard.jsx";
import CartCheckoutProductCard from "../../components/cartCheckoutProductCard/CartCheckoutProductCard.jsx";

const CheckoutPage = () => {
    const [dataChanged, setDataChanged] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartSum, setCartSum] = useState(0);

    const BASE_CART_API_URL = 'http://localhost:8080/api/v1/cart'

    const getCartItems = async () => {
        try {
            const response = await fetch(BASE_CART_API_URL);

            if (!response.ok) {
                console.error("Couldn't fetch cart items.")
            }

            const data = await response.json();
            setCartItems(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getCartItems();
    }, [dataChanged]);

    console.log(cartItems)

    return (
        <div>
            <AppHeader
                dataChanged={dataChanged}
                setDataChanged={setDataChanged}
            />

            <main>
                <div className={'checkout-page-wrapper'}>
                    <div className={'cart-product-list'}>
                        <h2>Koszyk</h2>
                        {cartItems.length > 0 ? (
                            cartItems.map((cartItem) =>
                                <CartCheckoutProductCard
                                    product={cartItem.product}
                                    imagePath={getMockImagePath(cartItem.product.category)}
                                    amountInCart={cartItem.amountInCart}
                                    dataChanged={dataChanged}
                                    setDataChanged={setDataChanged}
                                    cartItemId={cartItem.id}
                                />
                            )) : (
                            <h1>Brak przedmiotów w koszyku</h1>
                        )}
                    </div>
                    <CartSummaryCard
                        cartItems={cartItems}
                        dataChanged={dataChanged}
                        setDataChanged={setDataChanged}
                        cartSum={cartSum}
                        setCartSum={setCartSum}
                    />
                </div>
            </main>
        </div>
    )
}
export default CheckoutPage
