import { useState, useEffect } from 'react';
import { Heading, Flex, Text, Box, Button, Image } from '@chakra-ui/react';
import { CartIcon } from '../Icon/CartIcon';
import { MinusIcon } from '../Icon/MinusIcon';
import { PlusIcon } from '../Icon/PlusIcon';

import { useCart } from '../../Contexts/store';

const Description = () => {
    const addToCart = useCart((state) => state.addToCart);

    const mycart = useCart((state) => state.cartContent);
    console.log(mycart);

    const addProduct = (params) => {
        const product = mycart.findIndex((item) => item.id === params.id);
        addToCart(params);
    };

    const total = useCart((state) => state.total);

    const cart = useCart((state) => state.cartContent);

    const removeFromCart = useCart((state) => state.removeFromCart);

    const clearCart = useCart((state) => state.clearCart);

    const totalqty = useCart((state) => state.totalqty);

    const [myTotal, setTotal] = useState();

    const [myTotalqty, setTotalqty] = useState();

    const [myCart, setCart] = useState([]);

    console.log(myTotal, myTotalqty);

    useEffect(() => {
        setTotal(total);
        setTotalqty(totalqty);
    }, [total, totalqty]);

    return (
        <>
            <Flex flexDir="column" pt="1rem">
                <Text
                    fontSize="0.75rem"
                    textTransform="uppercase"
                    color="primary"
                    letterSpacing="0.1rem"
                    fontWeight="700"
                    fontFamily="body"
                >
                    Sneaker Company
                </Text>

                <Heading fontSize="1.65rem" fontFamily="body" pt="0.75rem" lineHeight="1.5rem">
                    Fall Limited Edition Sneakers
                </Heading>

                <Text
                    pt="1rem"
                    fontSize="0.825rem"
                    fontFamily="body"
                    color="Grey"
                    lineHeight="1.2rem"
                    letterSpacing="0.6px"
                >
                    These low-profile sneakers are your perfect casual wear companion. Featuring a
                    durable rubber outer sole, they’ll withstand everything the weather can offer.
                </Text>

                <Flex align="center" justify="space-between" pt="1rem" h="100%">
                    <Flex align="center">
                        <Text pr="20px" fontSize="2xl" fontFamily="body" fontWeight="700">
                            {' '}
                            &#36;125.00
                        </Text>

                        <Box bgColor="secondary" borderRadius="10px" py={1} px={2}>
                            <Text fontSize="md" fontFamily="body" fontWeight="700" color="primary">
                                50 &#37;
                            </Text>
                        </Box>
                    </Flex>

                    <Text
                        pr="20px"
                        fontSize="1rem"
                        fontFamily="body"
                        fontWeight="700"
                        position="relative"
                        color="hsl(219, 9%, 45%)"
                    >
                        <s> &#36;250.00</s>
                    </Text>
                </Flex>

                <Flex w="100%" flexDir={['column', null, 'row']} pt="1rem">
                    <Flex
                        align="center"
                        justify="space-between"
                        bgColor="hsl(223, 64%, 98%)"
                        borderRadius="10px"
                        py="0.5remrem"
                    >
                        <Button
                            variant="secondary"
                            color="primary"
                            onClick={() =>
                                removeFromCart({
                                    id: 0,
                                    qty: 1,
                                    originalPrice: 250,
                                    price: 125,
                                    name: 'Fall Limited Edition Sneakers',
                                    image: '/images/image-product-1-thumbnail.jpg',
                                })
                            }
                        >
                            <MinusIcon />
                        </Button>
                        {myTotalqty === 0 ? (
                            <Text fontWeight="700">0</Text>
                        ) : (
                            <Text fontWeight="700">{myTotalqty}</Text>
                        )}

                        <Button
                            variant="secondary"
                            color="primary"
                            onClick={() =>
                                addProduct({
                                    id: 0,
                                    qty: 1,
                                    originalPrice: 250,
                                    price: 125,
                                    name: 'Fall Limited Edition Sneakers',
                                    image: '/images/image-product-1-thumbnail.jpg',
                                })
                            }
                        >
                            <PlusIcon />
                        </Button>
                    </Flex>

                    <Flex align="center" width="100%" pt="1rem">
                        <Button
                            variant="secondary"
                            bgColor="primary"
                            w="100%"
                            p="1.5rem 1.5rem"
                            borderRadius="10px"
                            onClick={() =>
                                addProduct({
                                    id: 0,
                                    qty: 1,
                                    originalPrice: 250,
                                    price: 125,
                                    name: 'Fall Limited Edition Sneakers',
                                    image: '/images/image-product-1-thumbnail.jpg',
                                })
                            }
                        >
                            <CartIcon />

                            <Text fontWeight="700" color="hsl(0, 0%, 100%)" pl="12px">
                                Add To Cart
                            </Text>
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
};

export default Description;
