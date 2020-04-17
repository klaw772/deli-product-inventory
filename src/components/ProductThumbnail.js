import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProductThumbnail.css";

const ProductThumbnail = ({
  key,
  id,
  brandName,
  productName,
  imageUrl,
}) => {
  return (
    <div className="thumbnail">
      <Link to={`/products/${id}`}>
        <img src={imageUrl} alt={`${brandName} ${productName}`} />
      </Link>
    </div>
  );
};
export default ProductThumbnail;
