import React from "react";
import { Box, Button, Image, Text } from "@chakra-ui/react";

const MainBanner = () => {
  return (
    <Box position="relative">
      <Image src="img/slide-welcome-01.png" alt="Dan Abramov" w="100%" />
      <Box position="absolute" top={{ base: "50px", md: "316px" }} left={{ base: "20px", md: "200px" }}>
        <Text fontSize={{ base: "2xl", md: "6xl" }} fontWeight="bold" color="#FFFFFF">
          어디서도 누릴 수 <br />
          없는 특별 혜택
        </Text>
        <Text fontSize={{ base: "s", md:"xl" }}color="#FFFFFF" mt={{ base: "20px", md: "50px" }}>
          누릴 수 없는 특급혜택들!
        </Text>
        <Button colorScheme="teal" variant="link" mt={{ base: "10px", md: "47px" }} color="#FFFFFF">
          View more
        </Button>
      </Box>
    </Box>
  );
};

export default MainBanner;
