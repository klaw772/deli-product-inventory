import React from "react";
import { Switch, Route, useParams } from "react-router-dom";
import "../styles/App.css";
import NavBar from "./NavBar";
import ProductContainer from "./ProductContainer";
import ProductDisplay from "./ProductDisplay";

const App = () => {
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
          <Route exact path="/products" component={ProductContainer} />
          <Route exact path="/products/:id">
            <ProductDisplay />
          </Route>
          <Route exact path="/" component={ProductContainer} />
        </Switch>
      </section>
    </div>
  );
};

export default App;