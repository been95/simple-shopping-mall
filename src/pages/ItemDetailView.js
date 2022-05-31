import React from 'react'
import { Box,Image, Text, Flex, Button,  Accordion, AccordionItem, AccordionButton, AccordionPanel,AccordionIcon, Grid} from "@chakra-ui/react";
import mockData from "../entities/items/mock";
const ItemDetailView = () => {
  
  return (
    <Box >
      <Flex ml="20px" mt="48px" mr="20px">
        <Box >
          <Image src="img/migo_details.png" alt="Dan Abramov" />
        </Box>
        <Box>
          <Text fontSize="14px">
            유모차
          </Text>
          <Text fontSize="24px">
            [미고]미니플러스5 유모차
          </Text>
          <Flex align="baseline" mt ={2}>
          <Text
            ml={2}
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
            color="pink.800"
          >
            배송정보
          </Text>
          <Text
            ml={2}
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
            color="pink.800"
          >
            무료배송
          </Text>
        </Flex>
        <Flex align="baseline" mt ={2}>
          <Text
            ml={2}
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
            color="pink.800"
          >
            사용연령
          </Text>
          <Text
            ml={2}
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
            color="pink.800"
          >
            0~3세까지
          </Text>
        </Flex>
        <Flex align="baseline" mt ={2}>
          <Text
            ml={2}
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
            color="pink.800"
          >
            중량
          </Text>
          <Text
            ml={2}
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
            color="pink.800"
          >
            5.8kg
          </Text>
        </Flex>
        <Button>베이비데이 바로가기</Button>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left'>
                  컬러선택
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              멜란지 그레이
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Flex align="baseline" mt ={2}>
          <Button>장바구니</Button>
          <Button>구매하기</Button>
        </Flex>
        </Box>
      </Flex>
      <Box width="full" marginTop="212px">
        <Image src="img/mini_banner.png" alt="Dan Abramov" w="100%" />
      </Box>
      <Text>
        인기상품
      </Text>
    </Box>

  )
}

export default ItemDetailView
