import React from "react";
import ProductItem from "./ProductItem";

function ProductList() {
    const products = ["🍎 Manzana", "🍌 Banana", "🍊 Naranja", "🍐 Pera"];
    return (<ul>
            {products.map((product, index) => (
                <ProductItem key={index} productName={product} />
            ))}
        </ul>
    );
}

export default ProductList;