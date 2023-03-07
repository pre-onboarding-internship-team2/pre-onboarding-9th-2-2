import React from "react";
import { RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Router from "./Router";

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={Router} />
    </ChakraProvider>
  );
}

export default App;
