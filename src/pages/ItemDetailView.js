import React from "react";
import { useParams } from "react-router-dom";
import { Box, Image, Text, Flex, Button, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Grid } from "@chakra-ui/react";
import DetailsItem from "../components/items/details-item";
import mockData from "../entities/items/mock";

const ItemDetailView = () => {
  const { id } = useParams();

  const item = mockData.find((item) => item.id == id);

  return (
    <>
      {item ? (
        <Box>
          <Flex ml="20px" mt="48px" mr="20px">
            <Box>
              <Image src={`/${item.image}`} alt="Dan Abramov" />
            </Box>
            <Box>
              <Text fontSize="14px">{item.desc}</Text>
              <Text fontSize="24px">{item.title}</Text>
              <Flex align="baseline" mt={2}>
                <Text ml={2} textTransform="uppercase" fontSize="sm" fontWeight="bold" color="pink.800">
                  배송정보
                </Text>
                <Text ml={2} textTransform="uppercase" fontSize="sm" fontWeight="bold" color="pink.800">
                  무료배송
                </Text>
              </Flex>
              <Flex align="baseline" mt={2}>
                <Text ml={2} textTransform="uppercase" fontSize="sm" fontWeight="bold" color="pink.800">
                  사용연령
                </Text>
                <Text ml={2} textTransform="uppercase" fontSize="sm" fontWeight="bold" color="pink.800">
                  0~3세까지
                </Text>
              </Flex>
              <Flex align="baseline" mt={2}>
                <Text ml={2} textTransform="uppercase" fontSize="sm" fontWeight="bold" color="pink.800">
                  중량
                </Text>
                <Text ml={2} textTransform="uppercase" fontSize="sm" fontWeight="bold" color="pink.800">
                  5.8kg
                </Text>
              </Flex>
              <Button>베이비데이 바로가기</Button>
              {item.options && (
                <Accordion allowToggle>
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
