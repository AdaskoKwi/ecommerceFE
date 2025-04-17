import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import CategoryDropdown from "../categoryDropdown/CategoryDropdown.jsx";
import './AppHeader.css';
import CartDropdown from "../cartDropdown/CartDropdown.jsx";

const AppHeader = () => {
    const [showCartDropdown, setShowCartDropdown] = useState(false);
    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
    const [currentCategory, setCurrentCategory] = useState('Wszystko');
    const [searchTerm, setSearchTerm] = useState('');
    const [dataChanged, setDataChanged] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const categoryList = ['Wszystko', 'Laptopy i komputery', 'Smartfony i smartwatche', 'Podzespoły komputerowe'];

    const BASE_CART_API_URL = 'http://localhost:8080/api/v1/cart'

    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value)
    }

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
    }, [showCartDropdown, dataChanged, cartItems]);

    return (
        <div className={"header-div"}>
            <header>
                <Link to={'/'}>
                    <h1>E-Commerce</h1>
                </Link>

                <div className="header-input">
                    <input
                        type="text"
                        placeholder={"Czego szukasz?"}
                        onChange={handleSearchTermChange}
                    />
                    <button className={"category-button"}
                            onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                    >
                        {currentCategory} &#9662;
                    </button>
                    <CategoryDropdown
                        categoryList={categoryList}
                        setCategory={setCurrentCategory}
                        setDropdownVisibility={setShowCategoryDropdown}
                        dropdownVisibility={showCategoryDropdown}
                    />
                    <Link to={`/search/search=${searchTerm}&category=${currentCategory}`} state={{
                        searchTerm: searchTerm,
                        category: currentCategory
                    }}>
                        <button className={"search-button"}>🔍</button>
                    </Link>
                </div>

                <div className="header-buttons">
                    <button className={"favourites-button"}>🤍</button>
                    <button className={"cart-button"}
                            onMouseOver={() => setShowCartDropdown(true)}
                            onMouseLeave={() => setShowCartDropdown(false)}>🛒</button>

                    {cartItems.length > 0 ? (
                        <p className={"cart-items-amount"}
                           onMouseOver={() => setShowCartDropdown(true)}
                           onMouseLeave={() => setShowCartDropdown(false)}>{cartItems.length}</p>
                    ) : ''}

                    <CartDropdown
                        cartItems={cartItems}
                        dropdownVisibility={showCartDropdown}
                        setDropdownVisibility={setShowCartDropdown}
                        dataChanged={dataChanged}
                        setDataChanged={setDataChanged}
                    />
                </div>
            </header>
        </div>
    )
}
export default AppHeader
