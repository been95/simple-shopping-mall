import React from "react";
import { useParams } from "react-router-dom";
import { Box, Image, Text, Flex, Button, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Divider,} from "@chakra-ui/react";

import DetailsItem from "../components/items/details-item";
import mockData from "../entities/items/mock";

const ItemDetailView = () => {
  const { id } = useParams();

  const item = mockData.find((item) => item.id == id);
  

  return (
    <>
      {item ? (
        <Box >
          <Flex ml="20px" mt="48px" mr="20px"> 
            <Box>
              <Image src={`/${item.imageitem}`} alt="Dan Abramov" />
            </Box>
            <Box ml="70px">
              <Text fontSize="14px" mb="10px">{item.type}</Text>
              <Text fontSize="24px" fontWeight="bold">{item.title}</Text>
              <Text fontSize="14px">{item.desc}</Text>
              <Flex align="baseline" mt="20px" mb="30px">
                <Text fontSize="28px" fontWeight="bold">{item.sale}</Text>
                <Text fontSize="15px" ml="10px" as='del'>{item.cost}</Text>
              </Flex>
              < Divider />
              <Box maxW="500px" p="20px" border="1px solid #EDEDED">
              <Flex align="baseline" mt={2}>
                <Text textTransform="uppercase" fontSize="sm" fontWeight="bold" color="#767676" >
                  배송정보
                </Text>
                <Text ml="20px" textTransform="uppercase" fontSize="sm" fontWeight="bold">
                  무료배송
                </Text>
              </Flex>
              <Flex align="baseline" mt={2}>
                <Text textTransform="uppercase" fontSize="sm" fontWeight="bold" color="#767676">
                  사용연령
                </Text>
                <Text ml="20px" textTransform="uppercase" fontSize="sm" fontWeight="bold" >
                  {item.desc}
                </Text>
              </Flex>
              <Flex align="baseline" mt={2}>
                <Text textTransform="uppercase" fontSize="sm" fontWeight="bold" color="#767676">
                  제품중량
                </Text>
                <Text ml="20px" textTransform="uppercase" fontSize="sm" fontWeight="bold">
                  {item.weight}
                </Text>
              </Flex>
              </Box>
              <Button m="15px 0 15px 0"  size='md' height='48px' width='400px' >베이비데이 바로가기</Button>
              {item.options && (
                <Accordion allowToggle border='1px solid #EDEDED'>
                  {item.options.map((option, index) => (
                    <AccordionItem key={index}>
                      <h2>
                        <AccordionButton>
                          <Box flex="1" textAlign="left">
                            {option.optionType}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        {option.optionValues.map((txt, idx) => (
                          <p key={idx}>{txt}</p>
                        ))}
                      </AccordionPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              )}

              <Flex align="baseline" mt={2}>
                <Button>장바구니</Button>
                <Button>구매하기</Button>
              </Flex>
            </Box>
          </Flex>
          <Box width="full" marginTop="212px">
            <Image src="img/mini_banner.png" alt="Dan Abramov" w="100%" />
          </Box>
          <Text>인기상품</Text>
          <DetailsItem />
        </Box>
      ) : (
        <Box>존재하지않는상품입니다</Box>
      )}
    </>
  );
};

export default ItemDetailView;
