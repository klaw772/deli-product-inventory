import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import '../styles/ProductDisplay.css';

const ProductDisplay = () => {
    let {id} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`/products/${id}`)
          .then((response) => {
            if (response.ok) {
              return response;
            } else throw new Error();
          })
          .then((response) => response.json())
          .then((body) => {
            setProduct(body);
          })
          .catch((error) => console.log(`error with fetching product #${id}`));
    }, [])

    const {brandName, productName, dollarsPerPound, image} = product;

    debugger;
    return (
      <div className="productDisplayRow">
        <img src={image} alt={`${brandName} ${productName}`} />
        <div className="itemDescriptions">
          <h1>{brandName}</h1>
          <p>{productName}</p>
          <p>${dollarsPerPound}/lb</p>
        </div>
      </div>
    );
}

export default ProductDisplay;