import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName, increase } from "./../store/userSlice";
import { addCount } from "./../store";
import { Box, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer, Button, Image } from "@chakra-ui/react";
const Cart = () => {
  let state = useSelector((state) => {
    return state;
  });
  let dispath = useDispatch();

  return (
    <Box>
      <Box>
        {state.user.name} {state.user.age}의 장바구니
        <Button
          onClick={() => {
            dispath(increase(100));
          }}
        ></Button>
      </Box>

      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>상품정보</Th>
              <Th>할인가</Th>
              <Th>변경</Th>
              <Th>수량</Th>
              <Th isNumeric>주문금액</Th>
            </Tr>
          </Thead>
          <Tbody>
            {state.cart.map((a, i) => (
              <Tr key={i}>
                <Td>{state.cart[i].title}</Td>
                <Td>{state.cart[i].sale}</Td>
                <Td>{state.cart[i].count}</Td>
                <Td>
                  <Button
                    onClick={() => {
                      dispath(addCount(state.cart[i].id));
                    }}
                  >
                    +
                  </Button>
                </Td>
                <Td isNumeric>30.48</Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Cart;
