import React from "react";
import { useParams } from "react-router-dom";
import { Box, Image, Text, Flex, Button, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Divider, Center, Link, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { addItem } from "../store/cart/slice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import DetailsItem from "../components/items/details-item";
import mockData from "../entities/items/mock";

const ItemDetailView = () => {
  const { id } = useParams();
  const item = mockData.find((item) => item.id == id);
  let dispatch = useDispatch();

  useEffect(() => {
    let pull = localStorage.getItem("watched");
    pull = JSON.parse(pull);
    pull.push(item.id);
    pull = new Set(pull);
    pull = Array.from(pull);
    localStorage.setItem("watched", JSON.stringify(pull));
  }, []);

  return (
    <>
      {item ? (
        <Box>
          <Flex ml="20px" mt="48px" mr="20px">
            <Box>
              <Image src={`/${item.image}`} alt="Dan Abramov" />
            </Box>
            <Box ml="70px">
              <Text fontSize="24px" fontWeight="bold">
                {item.title}
              </Text>
              <Text fontSize="14px">{item.desc}</Text>
              <Flex align="baseline" mt="20px" mb="30px">
                <Text fontSize="28px" fontWeight="bold">
                  {item.sale}
                </Text>
                <Text fontSize="15px" ml="10px" as="del">
                  {item.cost}
                </Text>
              </Flex>
              <Divider />

              <Box maxW="500px" p="20px" border="1px solid #EDEDED">
                <Flex align="baseline" mt={2}>
                  <Text textTransform="uppercase" fontSize="sm" fontWeight="bold" color="#767676">
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
                  <Text ml="20px" textTransform="uppercase" fontSize="sm" fontWeight="bold">
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
              <Button m="15px 0 15px 0" size="md" height="48px" width="400px">
                {" "}
                <Link color="teal.500" href="http://daybabies.firstmall.kr/intro/member_only?return_url=%2Fgoods%2Fview%3Fno%3D3501">
                  베이비데이 바로가기
                </Link>
              </Button>
              {item.options && (
                <Accordion allowToggle border="1px solid #EDEDED">
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
                <Button
                  border="1px solid #EDEDED"
                  w="110px"
                  h="56px"
                  mr="20px"
                  onClick={() => {
                    dispatch(addItem({ id: id, title: "[순성] 데일리모노 ISOFIX_카시트", sale: "298,000원", count: 1 }));
                  }}
                >
                  장바구니
                </Button>
                <Button colorScheme="facebook" w="264px" h="56px">
                  구매하기
                </Button>
              </Flex>
            </Box>
          </Flex>
          <Box width="full" marginTop="212px">
            <Image src="../img/supporters.jpg" alt="Dan Abramov" />
          </Box>
          <Text fontSize="28px" fontWeight="bold" mt="248px" ml="20px">
            인기상품
          </Text>

          <DetailsItem />
          <Tabs mt="50px">
            <TabList>
              <Tab>상세페이지</Tab>
              <Tab>교환/반품/배송</Tab>
              <Tab>상품후기</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Image src={`/${item.details}`} alt="Dan Abramov" ml="20px" mt="50px" />
              </TabPanel>
              <TabPanel>
                <p>상품결제정보</p>
                <p>
                  고액결제의 경우 안전을 위해 카드사에서 확인잔화를 드릴 수도 있습니다.
                  <br />
                  확인과정에서 도난 카드의 사용이나 타인 명의의 주문등 정상적인 주문이 아니라고 판단될 경우 임의로 주문을 보류 또는 취소할 수 있습니다.
                  <br />
                  <br />
                  무통장 입금은 상품 구매 대금의 pc뱅킹, 인터넷뱅킹, 텔레뱅킹 혹은 가까운 은행에서 직접 입금하시면 됩니다.
                  <br />
                  주문시 입력한 입금자명과 실제 입금자의 성명이 반드시 일치하여야 하며, 7일 이내로 입금을 하셔야 하며 입금 되지 않은 주문은 자동취소됩니다.
                  <br />
                  배송정보
                  <br />
                  - 배송 방법: 택배
                  <br />
                  - 배송지역: 전국지역
                  <br />
                </p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      ) : (
        <Box>존재하지않는상품입니다</Box>
      )}
    </>
  );
};

export default ItemDetailView;
