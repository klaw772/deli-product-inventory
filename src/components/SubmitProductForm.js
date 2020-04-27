import React, { useState } from "react";
import "../styles/SubmitProductForm.css";

const SubmitProductForm = ({ addProduct }) => {
  const [brandName, setBrandName] = useState("");
  const [productName, setProductName] = useState("");
  const [dollarsPerPound, setDollarsPerPound] = useState("");
  const [image, setImage] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let newProduct = {
      brandName: brandName,
      productName: productName,
      dollarsPerPound: dollarsPerPound,
      image: image,
    };
    if (
      brandName === "" ||
      productName === "" ||
      dollarsPerPound === "" ||
      image === ""
    ) {
      setSubmitMessage("Please fill in all of the options before submitting.");
    } else {
      addProduct(newProduct);
      setSubmitMessage(
        "Submitted! Check out the list of products to see your addition to the inventory."
      );
      setBrandName("");
      setProductName("");
      setDollarsPerPound("");
      setImage("");
    }
  };
  const handleBrandNameChange = (e) => {
    if (submitMessage !== "") {
      setSubmitMessage("");
    }
    setBrandName(e.target.value);
  };
  const handleProductNameChange = (e) => {
    if (submitMessage !== "") {
      setSubmitMessage("");
    }
    setProductName(e.target.value);
  };
  const handleDollarsPerPoundChange = (e) => {
    if (submitMessage !== "") {
      setSubmitMessage("");
    }
    setDollarsPerPound(e.target.value);
  };
  const handleImageChange = (e) => {
    if (submitMessage !== "") {
      setSubmitMessage("");
    }
    setImage(e.target.value);
  };
  return (
    <>
      <h1 className="submitHeader">Submit to Deli Inventory</h1>
      <form data-testid="submitProductForm" onSubmit={handleSubmit}>
        <div id="formDiv">
          <div className="inputDiv">
            <input
              id="brandName"
              data-testid="brandName"
              type="text"
              placeholder="Brand Name"
              value={brandName}
              onChange={handleBrandNameChange}
            />
          </div>
          <div className="inputDiv">
            <input
              id="productName"
              data-testid="productName"
              type="text"
              placeholder="Product Name"
              value={productName}
              onChange={handleProductNameChange}
            />
          </div>
          <div className="inputDiv">
            $
            <input
              id="dollarsPerPound"
              data-testid="dollarsPerPound"
              type="text"
              placeholder="Dollars Per Pound"
              value={dollarsPerPound}
              onChange={handleDollarsPerPoundChange}
            />
          </div>
          <div className="inputDiv">
            <input
              id="image"
              data-testid="image"
              type="text"
              placeholder="Link to Image"
              value={image}
              onChange={handleImageChange}
            />
          </div>
          <input
            data-testid="submitButton"
            type="submit"
            value="Submit"
            onSubmit={handleSubmit}
          />
          <p>{submitMessage}</p>
        </div>
      </form>
    </>
  );
};
export default SubmitProductForm;
