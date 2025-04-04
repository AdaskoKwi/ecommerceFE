import React from 'react'
import './NewestProductCard.css';

const NewestProductCard = ({product : {name, price, quantity}, imagePath}) => {
    return (
        <div className="newest-product-wrapper">
            <div className="container-label">
                <h2>Najnowsza oferta</h2>
            </div>
            <div className="newest-product-container">
                <div className={"newest-product"}>
                    {typeof name !== 'undefined' ? (
                        <div>
                            <div>
                                <img src={imagePath} alt={name}/>
                            </div>

                            <div className={"newest-product-label"}>
                                <p>{name}</p>
                                <p>Pozostało: {quantity}</p>
                                <p>{price} zł</p>
                                <button>🛒 Dodaj do koszyka</button>
                            </div>
                        </div>
                    ) : (
                        <h3>Brak produktu do wyświetlenia</h3>
                    )}

                </div>
            </div>
        </div>
    )
}
export default NewestProductCard
