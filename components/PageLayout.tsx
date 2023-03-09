import { Box, Container } from "@chakra-ui/react";
import React from "react";
import Header from "./Header";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box as="main">
      <Header />
      <Container maxW="container.lg">{children}</Container>
    </Box>
  );
};

export default PageLayout;
