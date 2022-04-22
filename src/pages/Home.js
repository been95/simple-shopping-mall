import React from "react";
import { VStack, Box, useColorModeValue, Image, Button, Text, Flex,} from "@chakra-ui/react";

const mockData = [
  { id: 1, title: "[순성] 데일리모노 ISOFIX_카시트", desc: "신생아~7세까지 사용가능"},
  { id: 2, title: "[다이치] 듀얼 오가닉 Larch-Fix 카시트", desc: "신생아~5세까지 사용가능" },
  { id: 3, title: "[루미] 스펙트 I_ 360회전카시트", desc: "신생아~7세까지 사용가능" },
  { id: 4, title: "[순성] 듀클핀 Isofix_카시트", desc: "신생아~7세까지 사용가능" },
  { id: 5, title: "[다이치] 원픽스 360 Isofix 카시트", desc: "신생아~4세까지 사용가능" },
  { id: 6, title: "[미고] 미고미니플러스5유모차", desc: "신생아~3세까지 사용가능" },
];

const Home = () => {
  const bg = useColorModeValue("white", "gray.700");

  return (
    <div>
      <Box>
        상품
        <span>
          누릴 수 없는 특별한 혜택
        </span>
      </Box>
      <Flex as="home" justifyContent="space-between" justify="center"> 
        {mockData.map(({ id, title, desc,} ) => (
          <Box key={id}  textAlign="center" color="gray.300" >
            <Box>
              <Image src="https://via.placeholder.com/400" alt="Segun Adebayo" />
            </Box>
            <Box>
              <span>
              </span>
            </Box>
            <Box fontSize="primary" fontWeight="bold" color="#111111"  mt="16px"> 
              {title}
            </Box>
            {desc}
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
      </Flex>
      
    </div>
  );
};

export default Home;
