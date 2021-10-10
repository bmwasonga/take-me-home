import '../styles/globals.css';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';

const client = new ApolloClient({
  uri: 'https://graphql-user-api.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default MyApp;
