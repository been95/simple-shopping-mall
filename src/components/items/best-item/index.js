import React from "react";
import { Box, Grid, Image, Text, Divider, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";

const BestItem = () => {
  return (
    <Box pt={{ base: "10px", md: "100px" }}>
        <Grid templateColumns='repeat(3, 1fr)' >
          <Box minW="200px" pt={{base: "10px", md: "80px" }} pl={{md:"270px"}}>
            <Text fontSize="4xl" fontWeight="bold">
              인기상품
            </Text>
            <Text fontSize="m" color="#767676" pt={{base: "10px", md: "40px" }} pr="170px">
              어디서도 볼 수 없는<br/> 특별한 혜택들
            </Text>
          </Box>
          <Box>
            <Image src="img/best_banner.png" alt="Dan Abramov" />
          </Box>
        <Accordion maxW="500px" defaultIndex={[0]} pl={{md:"54px"}} pt={{base: "10px", md: "95px"}}>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  01. [루미]20.스펙트i카시트 + [미고]미니플러스5유모차
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={2}>
              스펙트아이360회전형카스트
              <br />
              미고미니플러스5 유모차
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton mt="27px">
                <Box flex="1" textAlign="left" fontWeight="bold">
                  02. [미고]미니플러스5유모차 + [미고]올인원 아기띠
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={2}>
              미고 미니플러스5 유모차
              <br />
              미고 올인원 아기띠
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton mt="27px" mb="27px">
                <Box flex="1" textAlign="left" fontWeight="bold">
                  03. [미고]올인원힙시트 + [루미]스펙트i360회전카스트
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={2}>
              미고 올인원 아기띠
              <br />
              스펙트아이360회전형카스트
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
    
          
        </Grid>
    </Box>
  );
};

export default BestItem;
