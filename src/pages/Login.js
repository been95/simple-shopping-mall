import React from 'react'
import { Box,Flex, Heading,Button,FormControl,FormLabel,Input } from "@chakra-ui/react";


const Login = () => {
 
  return (
    <Flex width="full" align="center" justifyContent="center">
    <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
      <Box textAlign="center">
        <Heading>Login</Heading>
      </Box>
      <Box my={4} textAlign="left">
        <form>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="이메일주소를입력하시오" />
          </FormControl>
          <FormControl mt={6}>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="대문자와소문자를사용해주세요" />
          </FormControl>
          <Button type="submit" variantColor="teal" variant="outline" width="full" mt={4}>
            Sign In
            </Button>
        </form>
      </Box>
    </Box>
  </Flex>
  )
}

export default Login
