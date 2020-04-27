import React from "react";
import { Switch, Route } from "react-router-dom";
import "../styles/App.css";
import NavBar from "./NavBar";
import ProductContainer from "./ProductContainer";
import ProductDisplay from "./ProductDisplay";
import SubmitProductForm from "./SubmitProductForm";

const App = () => {
  const addProduct = (newProduct) => {
    fetch("/products", {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          return response;
        } else throw new Error();
      })
      .catch((error) => console.log("error with posting data"));
  };
  return (
    <div>
      <header className="siteHeader">
        <h1>Deli Product Inventory</h1>
      </header>
      <section>
        <NavBar />
      </section>
      <section>
        <Switch>
          <Route exact path="/products">
            <ProductContainer />
          </Route>
          <Route exact path="/products/add">
            <SubmitProductForm addProduct={addProduct} />
          </Route>
          <Route exact path="/products/:id">
            <ProductDisplay />
          </Route>
          <Route exact path="/">
            <ProductContainer />
          </Route>
        </Switch>
      </section>
    </div>
  );
};

export default App;
