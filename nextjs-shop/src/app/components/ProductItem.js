import products from "../../data/products.js";
import React from "react";

function ProductItem() {
  return (
    <div className="flex space-x-5 justify-center text-center">
      {products.map((product) => (
        <div key={product.id}>
          <img
            className="overflow-clip h-60"
            src={product.image}
            alt={product.name}
          />
          <h2 className="font-bold font-serif text-xl break-normal">
            {product.name}
          </h2>
          <h3 className="font-bold font-serif text-lg text-pink-500">
            {product.price}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default ProductItem;
