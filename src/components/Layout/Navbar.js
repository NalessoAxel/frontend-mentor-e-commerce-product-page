import { useState, useEffect } from 'react';
import {
    Image,
    Flex,
    Box,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
} from '@chakra-ui/react';
import Col from '../Grid/Col';
import Container from '../Grid/Container';
import Link from 'next/link';
import { CloseIcon } from '../Icon/CloseIcon';
import { MenuIcon } from '../Icon/MenuICon';
import { DeleteIcon } from '../Icon/DeleteIcon';
import useStore, { useCart } from '../../Contexts/store';

const Navbar = ({ params }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { fullScreen, setStore } = useStore();

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

    useEffect(() => {
        setCart(cart);
        setTotal(total);
    }, [cart]);

    const navLinks = [
        { name: 'Collections', href: '/' },
        { name: 'Men', href: '/' },
        { name: 'Women', href: '/' },
        { name: 'About', href: '/' },
        { name: 'Contact', href: '/' },
    ];

    return (
        <>
            <Container>
                <Col
                    colStart={[3, null, 5]}
                    colEnd={[25, null, 23]}
                    borderBottom={['0', null, '1px solid  hsl(220, 14%, 75%)']}
                >
                    <Flex
                        justify="space-between"
                        align="center"
                        display={['none', null, null, 'flex']}
                    >
                        <Flex align="center">
                            <Box pr={16} h="100%">
                                <Image
                                    src="/images/logo.svg"
                                    alt="logo"
                                    width="140px"
                                    height="140px"
                                    objectFit="contain"
                                />
                            </Box>

                            {navLinks.map((link, i) => (
                                <Box key={i} as="nav">
                                    <Link href={link.href}>
                                        <Text
                                            as="a"
                                            fontFamily="body"
                                            pr={6}
                                            color=" hsl(219, 9%, 45%)"
                                            fontSize="15px"
                                        >
                                            {link.name}
                                        </Text>
                                    </Link>
                                </Box>
                            ))}
                        </Flex>

                        <Flex align="center">
                            <Box>
                                <Image
                                    src="/images/icon-cart.svg"
                                    alt="icon-cart"
                                    width="24px"
                                    height="24px"
                                />
                                {myTotalqty !== 0 ? <Text>{myTotalqty}</Text> : <Text>0</Text>}
                            </Box>

                            <Box pl="8">
                                <Image
                                    src="/images/image-avatar.png"
                                    alt="search"
                                    width="48px"
                                    height="48px"
                                />
                            </Box>
                        </Flex>
                    </Flex>

                    <Flex h="68px" align="center" py="1rem" w="100%" d={['flex', null, 'none']}>
                        {fullScreen ? null : ( // /> //     onClick={() => setStore(() => ({ fullScreen: false }))} //     d={['block', null, null, 'none']} //     boxSize="1.5rem" // <CloseIcon
                            <Flex align="center" w="100%" justify="space-between">
                                <Flex align="center">
                                    <MenuIcon
                                        d={['block', null, null, 'none']}
                                        onClick={() => setStore(() => ({ fullScreen: true }))}
                                    />

                                    <Box ml="1rem">
                                        <Image src="/images/logo.svg" alt="logo" width="120px" />
                                    </Box>
                                </Flex>

                                <Flex align="center">
                                    <Flex>
                                        <Button onClick={onOpen}>
                                            {myTotalqty !== 0 ? (
                                                <Text
                                                    bgColor="primary"
                                                    color="white"
                                                    borderRadius="15px"
                                                    fontSize="0.8rem"
                                                    position="absolute"
                                                    px="0.5rem"
                                                    top="0"
                                                    left="50%"
                                                    fontFamily="body"
                                                >
                                                    {myTotalqty}
                                                </Text>
                                            ) : (
                                                <Text
                                                    bgColor="primary"
                                                    color="white"
                                                    borderRadius="15px"
                                                    fontSize="0.8rem"
                                                    position="absolute"
                                                    px="0.5rem"
                                                    top="3"
                                                    left="75%"
                                                    fontFamily="body"
                                                >
                                                    0
                                                </Text>
                                            )}
                                            <Image
                                                src="/images/icon-cart.svg"
                                                alt="icon-cart"
                                                width="20px"
                                                height="20px"
                                            />
                                        </Button>
                                        <Modal isOpen={isOpen} onClose={onClose}>
                                            <ModalOverlay />
                                            {myCart.length === 0 ? (
                                                <ModalContent
                                                    mt="4.75rem"
                                                    mx="0.825rem"
                                                    h="33%"
                                                    boxShadow="none"
                                                >
                                                    <ModalHeader borderBottom="1px solid lightGrey">
                                                        Cart
                                                    </ModalHeader>
                                                    <ModalCloseButton />
                                                    <ModalBody>
                                                        <Text>Your Cart is Empty</Text>
                                                    </ModalBody>
                                                </ModalContent>
                                            ) : (
                                                <>
                                                    {cart.map((item, i) => (
                                                        <ModalContent
                                                            mt="4.75rem"
                                                            mx="0.825rem"
                                                            h="33%"
                                                            boxShadow="none"
                                                        >
                                                            <ModalHeader borderBottom="1px solid lightGrey">
                                                                Cart
                                                            </ModalHeader>
                                                            <ModalCloseButton />
                                                            <ModalBody>
                                                                <Flex
                                                                    pt="1rem"
                                                                    align="center"
                                                                    justify="space-between"
                                                                >
                                                                    <Image
                                                                        src={item.image}
                                                                        alt="image"
                                                                        w="48px"
                                                                        h="48px"
                                                                    />
                                                                    <Flex flexDir="column">
                                                                        <Text color="grey">
                                                                            {item.name}
                                                                        </Text>

                                                                        <Flex>
                                                                            <Text color="grey">
                                                                                &#36;{item.price}
                                                                            </Text>
                                                                            <Text color="grey">
                                                                                x
                                                                            </Text>
                                                                            <Text color="grey">
                                                                                {myTotalqty}
                                                                            </Text>
                                                                            <Text fontWeight="700">
                                                                                &#36;{myTotal}
                                                                            </Text>
                                                                        </Flex>
                                                                    </Flex>
                                                                    <DeleteIcon
                                                                        color="grey"
                                                                        onClick={() =>
                                                                            removeFromCart({
                                                                                id: item.id,
                                                                                price: item.price,
                                                                                qty: item.qty,
                                                                            })
                                                                        }
                                                                    />
                                                                    <Button
                                                                        variant="secondary"
                                                                        onClick={() => clearCart()}
                                                                    >
                                                                        Remove
                                                                    </Button>
                                                                </Flex>
                                                            </ModalBody>

                                                            <ModalFooter>
                                                                <Button
                                                                    variant="secondary"
                                                                    bgColor="primary"
                                                                    w="100%"
                                                                    p="1.5rem 1.5rem"
                                                                    borderRadius="10px"
                                                                >
                                                                    <Text
                                                                        fontWeight="700"
                                                                        color="hsl(0, 0%, 100%)"
                                                                        pl="12px"
                                                                    >
                                                                        Checkout
                                                                    </Text>
                                                                </Button>
                                                            </ModalFooter>
                                                        </ModalContent>
                                                    ))}
                                                </>
                                            )}
                                        </Modal>
                                    </Flex>

                                    <Box pl="8">
                                        <Image
                                            src="/images/image-avatar.png"
                                            alt="search"
                                            width="24px"
                                            height="24px"
                                        />
                                    </Box>
                                </Flex>
                            </Flex>
                        )}
                    </Flex>
                </Col>
            </Container>
        </>
    );
};

export default Navbar;
