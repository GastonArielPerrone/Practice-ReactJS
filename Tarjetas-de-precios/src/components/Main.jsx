import React from "react";
import ProductCard from "./ProductCard";
import './Main.css'

function Main(){
    const products = [
        {tittle: "1kg de Manzana", price: 4000},
        {tittle: "6 Bananas", price: 3000},
        {tittle: "1kg de Uvas", price: 4000}
    ];

    return(
        <main>
            {products.map((product, index) => (
                <ProductCard key={index} {...product} />
            ))}
        </main>
    )
}

export default Main;