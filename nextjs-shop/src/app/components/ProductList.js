import products from "../../data/products.js";
import React from "react";
import ProductItem from "./ProductItem.js";

function ProductList() {
  return (
    <div className="flex space-x-5 justify-center text-center">
      {products.map((product) => (
        <ProductItem
          name={product.name}
          image={product.image}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default ProductList;
