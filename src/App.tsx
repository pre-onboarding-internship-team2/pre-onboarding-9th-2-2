import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Header from 'components/Header';
import Router from 'router/router';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Router />
    </ChakraProvider>
  );
}

export default App;
