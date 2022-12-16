import { Layout } from '../components/Layout';
import { ChakraProvider } from '@chakra-ui/react';
import Theme from '../components/Theme';
function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={Theme}>
            <Layout />
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
