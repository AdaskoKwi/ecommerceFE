import React, {useState} from 'react'
import {Link} from "react-router-dom";
import Dropdown from "../dropdown/Dropdown.jsx";
import './AppHeader.css';

const AppHeader = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [currentCategory, setCurrentCategory] = useState('Wszystko');

    const categoryList = ['Wszystko', 'Laptopy i komputery', 'Smartfony i smartwatche', 'Podzespoły komputerowe'];

    return (
        <div>
            <header>
                <Link to={'/'}>
                    <h1>E-Commerce</h1>
                </Link>

                <div className="header-input">
                    <input type="text" placeholder={"Czego szukasz?"}/>
                    <button className={"category-button"} onClick={() => setShowDropdown(!showDropdown)}>
                        {currentCategory} &#9662;
                    </button>
                    <Dropdown
                        showDropdown={showDropdown}
                        categoryList={categoryList}
                        setCategory={setCurrentCategory}
                        setDropdownVisibility={setShowDropdown}
                        dropdownVisibility={showDropdown}
                    />
                    <button className={"search-button"}>🔍</button>
                </div>

                <div className="header-buttons">

                </div>
            </header>
        </div>
    )
}
export default AppHeader
