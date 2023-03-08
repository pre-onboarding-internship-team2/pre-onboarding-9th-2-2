import React from "react";
import NextLink from "next/link";
import { Box, Container, Link } from "@chakra-ui/react";

const routes = [
  {
    href: "/main",
    text: "상품페이지",
  },
  {
    href: "/reservations",
    text: "예약페이지",
  },
];

const NavigationBar = () => {
  return (
    <Box
      h="3rem"
      pos="fixed"
      top="0"
      left="0"
      right="0"
      zIndex={2}
      bg="cadetblue"
    >
      <Container
        float="right"
        transform="translateY(50%)"
        display="flex"
        justifyContent="end"
      >
        {routes.map((route, index) => (
          <Link
            key={index}
            as={NextLink}
            href={route.href}
            color="white"
            _hover={{ decoration: "none" }}
            _first={{ marginRight: "20px" }}
          >
            {route.text}
          </Link>
        ))}
      </Container>
    </Box>
  );
};

export default NavigationBar;
