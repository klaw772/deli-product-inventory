import React from "react";
import {Link} from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <div className="NavBarDiv">
        <Link className="NavBarLink" to="/products">All Products</Link>
        <Link className="NavBarLink" to="/products/add">Submit a Product</Link>
    </div>
  );
};

export default NavBar;
