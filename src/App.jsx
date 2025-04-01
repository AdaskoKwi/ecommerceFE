import React, {useState} from 'react'
import ProductCard from "./components/productCard/ProductCard.jsx";
import Dropdown from "./components/dropdown/Dropdown.jsx";
import './App.css'


const App = () => {
    const [productList, setProductList] = useState([]);
    const [topEightList, setTopEightList] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [currentCategory, setCurrentCategory] = useState('Wszystko');

    const categoryList = ['Wszystko', 'Laptopy i komputery', 'Smartfony i smartwatche', 'Podzespoły komputerowe'];
    const BASE_API_URL = 'http://localhost:8080/api/v1/products'

    const getProducts = async () => {
        try {
            const response = await fetch(BASE_API_URL, {
                method: 'GET'
            });

            if (!response.ok) {
                console.error("Couldn't fetch products.")
            }
            const data = await response.json();

            setProductList(data);
            setTopEightList(data.slice(0, 8));
        } catch (error) {
            console.error(error);
        }
    }

    getProducts();

    // useEffect(() => {
    //     getProducts();
    // }, []);

    return (
        <div className={"app-container"}>
            <header>
                <h1>E-Commerce</h1>

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
            <main>
                <div className="newest-product-wrapper">
                    <div className="container-label">
                        <h2>Najnowsza oferta</h2>
                    </div>
                    <div className="newest-product-container">
                        {productList.length > 0 ? (
                            <ProductCard product={productList.pop()}/>
                        ) : (
                            ''
                        )}
                    </div>
                </div>
                <div className="top-8-container-wrapper">
                    <div className="container-label">
                        <h2>Hity tygodnia</h2>
                    </div>
                    <div className="top-8-product-container">
                        {topEightList.length > 0 ? (
                            topEightList.map((product, index) => (

                                <ProductCard product={product}/>
                            ))
                        ) : (
                            <h3>Brak produktów do wyświetlenie</h3>
                        )}
                    </div>
                </div>
            </main>
        </div>
    )
}
export default App
