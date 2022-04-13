import React from "react";
import { Link } from "react-router-dom";
import { HStack } from "@chakra-ui/react";

const Nav = () => {
  return (
    <HStack as="nav" spacing="10px">
      <Link to="/">Logo</Link>
      <Link to="/cart">cart</Link>
    </HStack>
  );
};

export default Nav;
