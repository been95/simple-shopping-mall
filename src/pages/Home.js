import React from "react";
import { VStack, Box, useColorModeValue } from "@chakra-ui/react";

const mockData = [
  { id: 1, title: "bebe", desc: "asgasdgasgasg" },
  { id: 2, title: "bsdagsagebe", desc: "asgasdgasgasg" },
  { id: 3, title: "sagdasdgsgd", desc: "asgasdgasgasg" },
];

const Home = () => {
  const bg = useColorModeValue("white", "gray.700");

  return (
    <div>
      Home
      <VStack spacing={3}>
        {mockData.map(({ id, title, desc }) => (
          <Box key={id} bg={bg} w="full">
            {title}
            <br />
            {desc}
          </Box>
        ))}
      </VStack>
    </div>
  );
};

export default Home;
