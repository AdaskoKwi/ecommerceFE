import React from 'react'
import '/src/components/cartDropdown/CartDropdown.css'
import CartProduct from "../cartProduct/CartProduct.jsx";
import getMockImagePath from "../../functions/MockImages.jsx";
import {Link} from "react-router-dom";

const CartDropdown = ({cartItems, dropdownVisibility, setDropdownVisibility, dataChanged, setDataChanged}) => {
    return (
        <div onMouseOver={() => setDropdownVisibility(true)} onMouseLeave={() => setDropdownVisibility(false)}>
            {dropdownVisibility ? (
                <div className="cart-dropdown">
                    <h2>Koszyk</h2>

                    <div className="cart-item-list">
                        {cartItems.length > 0 ? (
                            cartItems.map((cartItem) => (
                                <CartProduct
                                    cartItem={cartItem.product}
                                    imagePath={getMockImagePath(cartItem.product.category)}
                                    dataChanged={dataChanged}
                                    setDataChanged={setDataChanged}
                                    cartItemId={cartItem.id}
                                    amountInCart={cartItem.amountInCart}
                                />
                            ))

                        ) : (
                            <div className="cart-dropdown">
                                <h2>Koszyk jest pusty</h2>
                            </div>
                        )}
                    </div>

                    <Link to={'/checkout'}>
                        <button className={"go-to-cart-button"}>Przejdź do koszyka</button>
                    </Link>
                </div>
            ) : ''}
        </div>
    )
}
export default CartDropdown
