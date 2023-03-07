import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import router from '@utils/Router';

const theme = extendTheme({
  colors: {
    brand: {
      main: '#789BFB',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
