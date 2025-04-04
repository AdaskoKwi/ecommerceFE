import React, {useState} from 'react'
import {Link} from "react-router-dom";
import Dropdown from "../dropdown/Dropdown.jsx";
import './AppHeader.css';

const AppHeader = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [currentCategory, setCurrentCategory] = useState('Wszystko');
    const [searchTerm, setSearchTerm] = useState('');

    const categoryList = ['Wszystko', 'Laptopy i komputery', 'Smartfony i smartwatche', 'Podzespoły komputerowe'];

    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value)
    }

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
                    <Link to={`/search/search=${searchTerm}&category=${currentCategory}`} state={{
                        searchTerm: searchTerm,
                        category: currentCategory
                    }}>
                        <button className={"search-button"}>🔍</button>
                    </Link>
                </div>

                <div className="header-buttons">
                    <button>🤍</button>
                    <button>🛒</button>
                </div>
            </header>
        </div>
    )
}
export default AppHeader
