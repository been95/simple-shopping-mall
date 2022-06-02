import React from 'react'
import { Box,Image, Text,Grid,Divider, List, ListItem, ListIcon, OrderedList,UnorderedList,Link,Input,Button,FindID } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { emailCheck } from "../shared/common";

const Login = () => {
    const dispatch = useDispatch ();

    const [id, setId] = React.useState("");
    const [pwd, setPwd] = React.useState("");

    const login = () => {
        if (id === "" || pwd === "") {
            window.alert("아이디와 비밀번호를 입력해주세요.");
            return;
        }
        if (!emailCheck(id)) {
            window.alert("이메일 형식이 맞지 않습니다.");
        }
        dispatch(userActions.loginDB(id, pwd));
        };
    return (
    <Box>
        <Grid>
            <Image m="16px" src="img/supporters.jpg">
            </Image>
            <Divider />
        </Grid>
        <Grid width="380px" margin="50px auto">
        <Text size="21px" login_font bold>
            로그인
        </Text>
        <UnorderedList>
            <ListItem><Link>통합ID 로그인</Link></ListItem>
            <ListItem><Link>기존ID 로그인</Link></ListItem>
        </UnorderedList>
        <Grid margin="18px 0">
            <Input
            _onChange={(e) => {
                setId(e.target.value);
            }}
            width="380px"
            height="45px"
            placeholder="아이디"
            />
            <Input
            _onChange={(e) => {
                setPwd(e.target.value);
            }}
            width="380px"
            height="45px"
            placeholder="비밀번호"
            type="password"
            />
        </Grid>
        <Grid right margin="-10px 0 15px">
            <FindID>아이디/비밀번호 찾기 </FindID>
        </Grid>
        <Button
            _onClick={login}
            margin="0 0 10px"
            width="100%"
            height="45px"
            bg="#fbfbfb"
            color="#ff6f61"
            border="1px solid #e7e7e7"
        >
            로그인
        </Button>
        <Button
            width="100%"
            height="45px"
            bold="false"
            _onClick={(e) => {
            history.push("/signup");
            }}
        >
            회원가입
        </Button>
        </Grid>
    </Box>
)
}

export default Login
