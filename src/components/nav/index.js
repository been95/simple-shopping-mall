import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">Logo</Link>
      <Link to="/cart">cart</Link>
    </nav>
  );
};

export default Nav;
