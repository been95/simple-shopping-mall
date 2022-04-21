import React from "react";
import { Link } from "react-router-dom";
import { HStack } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/core";

const Nav = () => {
  return (
    <HStack as="nav" color="#3b3b3b" fontSize="16px" bg="#f6f5ef" w="100%" h="67px">
      <Link to="/">Logo</Link>
      <Link to="/cart"> <Icon name="check-circle" size="24px" /></Link>
    </HStack>
  );
};

export default Nav;
