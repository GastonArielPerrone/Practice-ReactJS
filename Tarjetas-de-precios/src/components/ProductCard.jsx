import React from "react";
import './ProductCard.css'

function ProductCard(props){
    const {tittle, price} = props;
    return(
        <div className="product-card">
            <h2>{tittle}</h2>
            <p>${price}</p>
        </div>
    )
}

export default ProductCard;