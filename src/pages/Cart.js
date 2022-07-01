import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCount, addMinus, addDelete } from "../store/cart/slice";
import { Box, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer, Button, Image, Flex } from "@chakra-ui/react";

import { useCart } from "../hooks/useCart";

const Cart = () => {
  let dispath = useDispatch();
  const { sum, cart } = useCart();

  return (
    <Box>
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>상품정보</Th>
              <Th>할인가</Th>
              <Th>변경</Th>
              <Th>수량</Th>
              <Th>주문금액</Th>
              <Th isNumeric>삭제</Th>
            </Tr>
          </Thead>
          <Tbody>
            {cart.map((a, i) => (
              <Tr key={i}>
                <Td>{cart[i].title}</Td>
                <Td>{cart[i].sale}</Td>
                <Td>{cart[i].count}</Td>
                <Td>
                  <Flex align="baseline">
                    <Button
                      onClick={() => {
                        dispath(addCount(cart[i].id));
                      }}
                    >
                      +
                    </Button>
                    <Button
                      onClick={() => {
                        dispath(addMinus(cart[i].id));
                      }}
                    >
                      -
                    </Button>
                  </Flex>
                </Td>
                <Td>{cart[i].sale}</Td>
                <Td isNumeric>
                  {" "}
                  <Button
                    size="sm"
                    onClick={() => {
                      dispath(addDelete(cart[i].id));
                    }}
                  >
                    삭제
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th></Th>
              <Th></Th>
              <Th></Th>
              <Th isNumeric>합계:{sum.toLocaleString()}</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Cart;
