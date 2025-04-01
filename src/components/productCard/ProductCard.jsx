import React from 'react'
import '/src/components/productCard/ProductCard.css'

const ProductCard = ({product : {name, price}}) => {
    return (
        <div className={"product"}>
            <img src="/src/assets/test.webp" alt="test"/>
            <p>{name}</p>

            <p>{price} zł</p>
        </div>
    )
}
export default ProductCard

