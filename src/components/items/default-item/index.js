import React from "react";
import { Box, Button, Grid } from "@chakra-ui/react";
import { Link } from "react-router-dom";

// TODO: api 실데이터반영
import mockData from "../../../entities/items/mock";

const Item = () => {
  return (
    <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }} gap={6} align="center" spacing="21px">
      {mockData.map(({ id, title, desc, image }) => (
        <Box key={id}>
          <Link to={`/detail/${id}`}>
            <img src={image} className="img-fluid" />
          </Link>

          <Box fontSize="15px" fontWeight="bold" mt="16px">
            {title}
          </Box>
          <Box color="#767676" fontSize="14px">
            {desc}
          </Box>
          <Box mt="15px">
            <Button bg="pink.100" color="#ffff" size="xs">
              가격비교
            </Button>
            <Button variant="outline" size="xs" ml="4px">
              무료배송
            </Button>
          </Box>
        </Box>
      ))}
    </Grid>
  );
};

export default Item;
