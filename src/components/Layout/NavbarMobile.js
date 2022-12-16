import { useEffect, useState } from 'react';
import { Text, Drawer, DrawerOverlay, DrawerContent, Flex } from '@chakra-ui/react';
import useStore, { useCart } from '../../Contexts/store';
import { CloseIcon } from '../Icon/CloseIcon';

const NavbarMobile = () => {
    const { fullScreen, setStore } = useStore();

    const total = useCart((state) => state.total);

    const totalqty = useCart((state) => state.totalqty);

    const [mytotal, setTotal] = useState();

    const [mytotalqty, setTotalqty] = useState();

    useEffect(() => {
        setTotal(total);
        setTotalqty(totalqty);
    }, [total, totalqty]);

    const links = [
        { name: 'Collections', href: '/' },
        { name: 'Men', href: '/' },
        { name: 'Women', href: '/' },
        { name: 'About', href: '/' },
        { name: 'Contact', href: '/' },
    ];
    return (
        <Drawer
            isOpen={fullScreen}
            onClose={() => setStore(() => ({ fullScreen: false }))}
            placement="left"
        >
            <DrawerOverlay>
                <DrawerContent
                    display="flex"
                    alignItems="flex-start"
                    pt="1rem"
                    pl="1.5rem"
                    maxWidth={['70%', '40%', null]}
                    backgroundColor="white"
                >
                    <CloseIcon onClick={() => setStore(() => ({ fullScreen: false }))} />
                    <Flex flexDir="column" pt="1.5rem">
                        {links.map((link, i) => (
                            <Text
                                key={i}
                                as="a"
                                href={link.href}
                                color="black"
                                fontFamily="body"
                                fontWeight="700"
                                pt="1rem"
                            >
                                {link.name}
                            </Text>
                        ))}
                    </Flex>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    );
};

export default NavbarMobile;
