import React from "react";
import Slider from "react-slick";
import { Box, Image, Text } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

import MainBanner from "../components/banner/main-banner";
import ItemList from "../components/items/default-item";
import BestItem from "../components/items/best-item";
import mockData from "../entities/items/mock";

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
          {mockData.slice(0, 6).map(({ id, image, title }, index) => (
            <div key={index}>
              <Link to={`/detail/${id}`}>
                <Image src={`/${image}`} alt="Dan Abramov" />
                <Text style={{ marginTop: 15 }}>{title}</Text>
              </Link>
            </div>
          ))}
        </Slider>
      </Box>

      {/*미니배너 */}
      <Box width="full" marginTop={{ base: "112px", md: "212px" }}>
        <Image src={{ base: "img/mini_banner_m.png", md: "img/mini_banner.png" }} alt="Dan Abramov" w="100%" />
        {/*모바일때랑 pc때랑 이미지 다르게하고 싶은데 안 나와요*/}
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
