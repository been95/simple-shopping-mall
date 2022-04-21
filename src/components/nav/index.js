import React from "react";
import { Link } from "react-router-dom";
import { Flex, Box, IconButton, Icon, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { RiMoonClearLine } from "@react-icons/all-files/ri/RiMoonClearLine";
import { RiSunFill } from "@react-icons/all-files/ri/RiSunFill";

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "gray.700");

  return (
    <Flex as="nav" justifyContent="space-between" alignItems="center" bg={bg} p={5}>
      <Link to="/">Logo</Link>
      <Box>
        <Link to="/cart">cart</Link>
        <IconButton variant="unstyle" icon={<Icon as={colorMode === "light" ? RiSunFill : RiMoonClearLine} />} onClick={toggleColorMode} />
      </Box>
    </Flex>
  );
};

export default Nav;
