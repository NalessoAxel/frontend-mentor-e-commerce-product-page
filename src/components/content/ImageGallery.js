import Container from '../Grid/Container';
import Col from '../Grid/Col';
import { Box, Flex, Image } from '@chakra-ui/react';

import { useState } from 'react';

const ImageGallery = () => {
    const [toggle, setToggle] = useState('1');

    const ImageFull = [
        {
            src: '/images/image-product-1.jpg',
            thumbnail: '/images/image-product-1-thumbnail.jpg',
            alt: 'image-product-1',
            key: 1,
        },
        {
            src: '/images/image-product-2.jpg',
            thumbnail: '/images/image-product-2-thumbnail.jpg',
            alt: 'image-product-2',
            key: 2,
        },
        {
            src: '/images/image-product-3.jpg',
            thumbnail: '/images/image-product-3-thumbnail.jpg',
            alt: 'image-product-3',
            key: 3,
        },
        {
            src: '/images/image-product-4.jpg',
            thumbnail: '/images/image-product-4-thumbnail.jpg',
            alt: 'image-product-4',
            key: 4,
        },
    ];

    return (
        <>
            <Flex flexDirection="column">
                <Flex h="100%" w="100%">
                    <Image
                        src="/images/image-product-1.jpg"
                        alt="image-product-1"
                        width="100%"
                        height="100%"
                        objectFit="contain"
                        borderRadius={['0', null, '15px']}
                    />
                </Flex>
                {/* {toggle === key ? <></> : null}

                <Flex h="92px" w="92px" onClick={() => setToggle(key)} mt="24px">
                    <Image
                        src={thumbnail}
                        alt={alt}
                        width="100%"
                        height="100%"
                        objectFit="contain"
                        borderRadius="15px"
                    />
                </Flex> */}
            </Flex>
        </>
    );
};

export default ImageGallery;
