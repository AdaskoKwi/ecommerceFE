import React, {useEffect, useState} from 'react';
import './SearchPage.css';
import {useLocation, useParams} from "react-router-dom";
import AppHeader from "../../components/appHeader/AppHeader.jsx";
import ProductCard from "../../components/productCard/ProductCard.jsx";
import getMockImagePath from "../../functions/MockImages.jsx";

const SearchPage = () => {
    const [dataChanged, setDataChanged] = useState(false);
    const [queriedProductList, setQueriedProductList] = useState([]);
    const { url } = useParams()
    const location = useLocation();

    const BASE_PRODUCT_API_URL = 'http://localhost:8080/api/v1/products'

    const fetchSearchByTermAndCategory = async () => {
        try {
            const response = await fetch(BASE_PRODUCT_API_URL + `/search`, {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: location.state.searchTerm,
                    category: location.state.category
                })
            });

            if (!response.ok) {
                console.error("Couldn't fetch search query.");
            }

            const data = await response.json();
            setQueriedProductList(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchSearchByTermAndCategory();
    }, [url, location]);

    return (
        <div>
            <AppHeader
                dataChanged={dataChanged}
                setDataChanged={setDataChanged}
            />

            <main>
                <div className="search-list-wrapper">
                    <div className="search-list-label">
                        {queriedProductList.length > 0 ? (
                            <h2>Wyniki wyszukiwania</h2>
                        ) : (
                            <h1>Brak wyników wyszukiwania
                                dla: "{location.state.searchTerm}" w
                                kategorii: {location.state.category}
                            </h1>
                        )}
                    </div>
                    <div className="search-list-container">
                        {queriedProductList.length > 0 ? (
                            queriedProductList.map((product) => (
                                <ProductCard
                                    product={product}
                                    imagePath={getMockImagePath(product.category)}
                                    dataChanged={dataChanged}
                                    setDataChanged={setDataChanged}
                                />
                            ))
                        ) : (
                            ''
                        )}
                    </div>
                </div>
            </main>
        </div>
    )
}
export default SearchPage
