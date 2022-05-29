import React, { Component } from "react";
import Slider from "react-slick";
import { Box, Button, Flex, Image, Text, Divider, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MainBanner from "../components/banner/main-banner";
import ItemList from "../components/items/default-item";
import BestItem from "../components/items/best-item";

const Home = () => {
  var settings = {
    arrows: false,
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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      {/*main banner*/}
      <MainBanner />
      {/*인기상품*/}
      <BestItem />

      {/* {Slider} */}
      <Box mt="109px">
        <Slider {...settings}>
          <div>
            <Image src="img/slider_mogo_1.png" alt="Dan Abramov" />
            <Text style={{ marginTop: 15 }}>[미고]미고미니플러스5유모차</Text>
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
      <Box width="full" marginTop="212px">
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
