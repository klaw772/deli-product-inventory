import React, { useState, useEffect } from "react";
import "../styles/ProductContainer.css";
import ProductThumbnail from "./ProductThumbnail";

const ProductContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products")
      .then((response) => {
        if (response.ok) {
          return response;
        } else throw new Error();
      })
      .then((response) => response.json())
      .then((body) => {
        let productList = body.products;
        setProducts(productList);
      })
      .catch((error) => console.log("error with fetching data"));
  }, []);

  const productItems = products.map((product) => {
    return (
      <ProductThumbnail
        key={product.id}
        id={product.id}
        brandName={product.brandName}
        productName={product.productName}
        dollarsPerPound={product.dollarsPerPound}
        imageUrl={product.image}
      />
    );
  });

  return <div className="container">{productItems}</div>;
};

export default ProductContainer;
