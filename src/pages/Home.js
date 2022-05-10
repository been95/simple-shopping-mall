import React, { Component } from "react";
import Slider from "react-slick";
import { Box, useColorModeValue, Button, Flex, Image, Text, Divider, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";
import ItemList from "../components/items";
import { motion, useViewportScroll,useTransform} from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Home = () => {
  const bg = useColorModeValue("white", "gray.700");
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
     
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
      <Box background="#F8F8FA" pt="100px" px="100px" position="relative" height="500px">
        <Flex justifyContent="space-between" alignItems="start">
          <Flex alignItems="center">
            <Box w="400px" pl="140px">
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
              <Divider borderColor="#FEE49F" position="absolute" w="453px" top="150px" right="400px" />
            </Box>
          </Flex>

          <Accordion defaultIndex={[0]} mt="95px" pr="130px">
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
      {/* {Slider} */}
      <Box mt="109px" >
        <Slider {...settings}>
          <div>
          <Image src="img/slider_mogo_1.png" alt="Dan Abramov"/>
          <Text  style={{marginTop:15}}>[미고]미고미니플러스5유모차</Text>
          </div>
          <div>
            <Image src="img/slider_speat_2.png" alt="Dan Abramov" />
            <Text>[루미]스펙트I 360회전카시트</Text>
          </div>
          <div>
            <Image src="img/slider_migo_3.png" alt="Dan Abramov" />
            <Text>[미고]올인원힙시트</Text>
          </div>
          <div>
            <Image src="img/slider_speat_migo_4.png" alt="Dan Abramov" />
            <Text>[루미]스펙트+[미고]미니플러스5</Text>
          </div>
          <div>
            <Image src="img/slider_migi_migo_5.png" alt="Dan Abramov" />
            <Text>[미고]미니플러스5+[미고]올인원 힙시트</Text>
          </div>
          <div>
            <Image src="img/slider_migo_spaet_6.png" alt="Dan Abramov" />
            <Text>[미고]올인원힙시트 +[루미]스펙트+ </Text>
          </div>
        </Slider>
      </Box>
      {/*미니배너 */}
        <motion.div style={{ width: "100%",marginTop: "212px", scrollY}}><Image src="img/mini_banner.png" alt="Dan Abramov" w="100%" /></motion.div>
      
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
