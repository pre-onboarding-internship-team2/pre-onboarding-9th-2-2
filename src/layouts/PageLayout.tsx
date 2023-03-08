import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { Container } from "@chakra-ui/react";

const PageLayout = () => {
  return (
    <Container maxW="1200px">
      <NavBar />
      <Outlet />
    </Container>
  );
};

export default PageLayout;
