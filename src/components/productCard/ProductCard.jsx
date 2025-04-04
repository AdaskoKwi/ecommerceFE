import React from 'react'
import '/src/components/productCard/ProductCard.css'

const ProductCard = ({product : {name, price}, imagePath}) => {
    return (
        <div className={"product"}>
            <img src={imagePath} alt={name}/>
            <p>{name}</p>
            <p>{price} zł</p>
        </div>
    )
}
export default ProductCard

