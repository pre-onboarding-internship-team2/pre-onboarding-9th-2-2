import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { Container } from "@chakra-ui/react";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container maxW="1200px">
      <NavBar />
      {children}
    </Container>
  );
};

export default PageLayout;
