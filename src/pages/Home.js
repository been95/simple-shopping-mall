import React from "react";
import { Box, useColorModeValue, Button, Flex, Image, Text, Divider, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";
import ItemList from "../components/items";
import { motion, useViewportScroll } from "framer-motion";

const Home = () => {
  const bg = useColorModeValue("white", "gray.700");
  const { scrollYProgress } = useViewportScroll();

  return (
    <div>
      {JSON.stringify(scrollYProgress)}
      <motion.div style={{ width: "100%", height: "100px", backgroundColor: "red", scaleX: scrollYProgress }}>motion div</motion.div>
      {/*배너*/}
      <Box position="relative">
        <Image src="img/slide-welcome-01.png" alt="Dan Abramov" w="100%" />
        <Box position="absolute" top="370px" mr="295px" ml="300px">
          <Text fontSize="6xl" fontWeight="bold" color="#FFFFFF">
            어디서도 누릴 수 <br />
            없는 특별 혜택
          </Text>
          <Text fontSize="xl" color="#FFFFFF" mt="50px">
            누릴 수 없는 특급혜택들!! 만나봐요
          </Text>
          <Button colorScheme="teal" variant="link" mt="47px" color="#FFFFFF">
            View more
          </Button>
        </Box>
      </Box>
      {/*인기상품*/}
      <Box background="#F8F8FA" pt="100px" px="100px">
        <Flex justifyContent="space-between" alignItems="start">
          <Flex alignItems="center">
            <Box w="400px">
              <Text fontSize="4xl" fontWeight="bold">
                인기상품
              </Text>
              <Text color="#767676" mt="40px">
                어디서도 볼 수 없는 <br />
                특별한 혜택
              </Text>
            </Box>
            <Box>
              <Image src="img/best_banner.png" alt="Dan Abramov" />
              <Divider borderColor="#FEE49F" position="absolute" w="453px" top="70px" right="200px" />
            </Box>
          </Flex>

          <Accordion defaultIndex={[0]}>
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
        </Flex>
      </Box>
      {/*미니배너 */}
      <Box mt="140px">
        <Image src="img/mini_banner.png" alt="Dan Abramov" w="100%" />
      </Box>
      {/*상품 */}
      <Box align="center" mt="196px" mb="105px">
        <Text fontSize="1.75rem" fontWeight="bold">
          상품
        </Text>
        <Text color="#767676">누릴 수 없는 특별한 혜택</Text>
      </Box>
      <ItemList />
    </div>
  );
};

export default Home;
