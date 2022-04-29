import React from "react";
import { Box, useColorModeValue, Button, Grid, Image, Text, Icon} from "@chakra-ui/react";

const mockData = [
  { id: 1, title: "[순성] 데일리모노 ISOFIX_카시트", desc: "신생아~7세까지 사용가능", image : 'img/daily_mono.png'},
  { id: 2, title: "[다이치] 듀얼 오가닉 Larch-Fix 카시트", desc: "신생아~5세까지 사용가능", image : 'img/daichi_1.png' },
  { id: 3, title: "[루미] 스펙트 I_ 360회전카시트", desc: "신생아~7세까지 사용가능", image : 'img/spect.png'},
  { id: 4, title: "[순성] 듀클핀 Isofix_카시트", desc: "신생아~7세까지 사용가능",image : 'img/duklefin.png'},
  { id: 5, title: "[다이치] 원픽스 360 Isofix 카시트", desc: "신생아~4세까지 사용가능", image : 'img/daichi_one.png'},
  { id: 6, title: "[미고] 미고미니플러스5유모차", desc: "신생아~3세까지 사용가능",image : 'img/migo.png' },
];

const Home = () => {
  const bg = useColorModeValue("white", "gray.700");

  return (
    <div>
      <Box position="relative">
        <Image src='img/slide-welcome-01.png' alt='Dan Abramov' w='100%'/>
        <Box position='absolute' top='370px' mr='295px' ml="300px">
            <Text fontSize='6xl' fontWeight="bold" color="#FFFFFF">어디서도 누릴 수 <br />없는 특별 혜택</Text>
            <Text fontSize='xl' color="#FFFFFF" mt='50px'>누릴 수 없는 특급혜택들!! 만나봐요</Text>
            <Button variantColor="teal" variant="link" mt='47px' color="#FFFFFF">
              View more
            </Button>
        </Box>
      </Box>
      
      <Box>
          <Box background='#F8F8FA' w='100%' h='500px' position="relative"></Box>
          <Grid  templateColumns='repeat(2, 1fr)' gap={3} mt='-400px' position='absolute'>
              <Box mt='80px'>
                <Text fontSize='4xl' fontWeight="bold">
                  인기상품
                </Text>
                <Text color="#767676" mt='40px'>
                  어디서도 볼 수 없는 <br/>특별한 혜택
                </Text>
              </Box>
              
              <Image src='img/best_banner.png' alt='Dan Abramov'/>
          </Grid> 
      </Box>
      
      <Box mt='140px'>
        <Image src='img/mini_banner.png' alt='Dan Abramov' w='100%'/>
      </Box>

      <Box align='center' mt='196px' mb='105px'>
        <Text fontSize='1.75rem' fontWeight="bold">상품</Text>
        <Text color="#767676">누릴 수 없는 특별한 혜택</Text>
      </Box>
      <Grid templateColumns='repeat(3, 2fr)' gap={6} align='center' spacing='21px'>
        {mockData.map(({ id, title, desc, image} ) => (
          <Box key={id}>
                <Box>
                  <img src={ image } className="img-fluid" />
                </Box>
                
                <Box fontSize="15px" fontWeight="bold"  mt="16px">{title}</Box>
                <Box color="#767676" fontSize="14px">{desc}</Box>
            <Box mt="15px">
              <Button  bg="pink.100" color="#ffff" size="xs">
                가격비교
              </Button>
              <Button  variant="outline" size="xs" ml="4px">
                무료배송
              </Button>
            </Box>
          </Box>
    
        ))}
      </Grid>
      
    </div>
  );
};

export default Home;
