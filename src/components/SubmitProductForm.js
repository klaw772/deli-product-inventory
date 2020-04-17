import React, {useState} from "react";
import "../styles/SubmitProductForm.css";

const SubmitProductForm = ({addProduct}) => {
  const [brandName, setBrandName] = useState("");
  const [productName, setProductName] = useState("");
  const [dollarsPerPound, setDollarsPerPound] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (event) => {
      event.preventDefault();
      let newProduct = {
          brandName: brandName,
          productName: productName,
          dollarsPerPound: dollarsPerPound,
          image: image
      };
      addProduct(newProduct);
      setBrandName("")
      setProductName("")
      setDollarsPerPound("")
      setImage("")
    }
  const handleBrandNameChange = (e) => {
    setBrandName(e.target.value);
  };
  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };
  const handleDollarsPerPoundChange = (e) => {
    setDollarsPerPound(e.target.value);
  };
  const handleImageChange = (e) => {
    setImage(e.target.value);
  };
  return (
    <>
      <h1>Submit to Deli Inventory</h1>
      <form onSubmit={handleSubmit}>
        <div id="formDiv">
          <div>
            <input
              id="brandName"
              type="text"
              placeholder="Brand Name"
              value={brandName}
              onChange={handleBrandNameChange}
            />
          </div>
          <div>
            <input
              id="productName"
              type="text"
              placeholder="Product Name"
              value={productName}
              onChange={handleProductNameChange}
            />
          </div>
          <div>
            $
            <input
              id="dollarsPerPound"
              type="text"
              placeholder="Dollars Per Pound"
              value={dollarsPerPound}
              onChange={handleDollarsPerPoundChange}
            />
          </div>
          <div>
            <input
              id="image"
              type="text"
              placeholder="Link to Image"
              value={image}
              onChange={handleImageChange}
            />
          </div>
          <input type="submit" value="Submit" onSubmit={handleSubmit}/>
        </div>
      </form>
    </>
  );
};
export default SubmitProductForm;
