import { Heading, Center } from '@chakra-ui/react';
import Container from './../components/Grid/Container';
import Col from './../components/Grid/Col';

import Link from 'next/link';

const Home = () => {
  return (
    <Container>
      <Col colStart="1" colEnd="12">
        <Heading>Hello World</Heading>
        <Center height="50px">
          <Link href="/About">
            <a>About</a>
          </Link>
        </Center>
      </Col>
    </Container>
  );
};

export default Home;
