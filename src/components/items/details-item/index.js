import React from 'react'
import { Box,Image, Text, Link,Grid,GridItem ,Button} from "@chakra-ui/react";
import mockData from "../../../entities/detailed/mock";

const DetailsItem = () => {
    return (
    <Box pt={{ base: "30px", md: "125px" }}>
        <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)'}} ml={{ base: "10px", md: "20px"}} mr={{ base: "10px", md: "20px"}}>
        {mockData.map(({ id, title, desc, image }) => (
        <Box key={id}>
            <Box>
            <img src={image} className="img-fluid" />
            </Box>

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
    </Box>
    )
}

export default DetailsItem
