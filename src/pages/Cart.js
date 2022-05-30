import React, { Component } from "react";
import Slider from "react-slick";
import { Box, useColorModeValue, Button, Flex, Image, Text, Divider, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, HStack , chakra  } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Cart = ({ cartItems, setCartItems }) => {

    const MIN_COUNT = 1;
    const MAX_COUNT = 2;
    const increaseCartItem = (idx) => {
        const newCartItems = [...cartItems];
        if (newCartItems[idx].count < MAX_COUNT) {
            newCartItems[idx].count += 1;
            setCartItems(newCartItems);
        } else {
            alert('장바구니에 담을 수 있는 최대 수량은 10개입니다.');
        }
    };

    const decreaseCartItem = (idx) => {
        const newCartItems = [...cartItems];
        if (newCartItems[idx].count > MIN_COUNT) {
            newCartItems[idx].count -= 1;
            setCartItems(newCartItems);
        } else {
            alert('장바구니에 담을 수 있는 최소 수량은 1개입니다.');
        }
    };

    const deleteCartItem = (idx) => {
        const newCartItem = [...cartItems];
        newCartItem.splice(idx, 1);
        setCartItems(newCartItem);
    };

    return cartItems.map(({ id, name, imgSrc, price, count }, idx) => {
        return (
            <li className="flex py-6" key={id}>
                <div className="h-24 w-24 overflow-hidden rounded-md border border-gray-200">
                    <img
                        src={imgSrc}
                        className="h-full w-full object-cover object-center"
                        alt={name}
                    />
                </div>
                <div className="ml-4 flex flex-1 flex-col">
                    <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>{name}</h3>
                            <p className="ml-4">
                                {(price * count).toLocaleString()}원
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-1 items-end justify-between">
                        <div className="flex text-gray-500">
                            <button
                                className="decrease-btn"
                                onClick={() => decreaseCartItem(idx)}
                            >
                                -
                            </button>
                            <div className="mx-2 font-bold">{count}</div>
                            <button
                                className="increase-btn"
                                onClick={() => increaseCartItem(idx)}
                            >
                                +
                            </button>
                        </div>
                        <button
                            type="button"
                            className="font-medium text-sky-400 hover:text-sky-500"
                        >
                            <p
                                className="remove-btn"
                                onClick={() => deleteCartItem(idx)}
                            >
                                삭제하기
                            </p>
                        </button>
                    </div>
                </div>
            </li>
        );
    });
};

export default Cart;


