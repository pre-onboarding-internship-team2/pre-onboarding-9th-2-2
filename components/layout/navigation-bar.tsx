import React from "react";
import NextLink from "next/link";
import { Box, Flex, Link } from "@chakra-ui/react";

interface NavigationBarProps {
  inView: boolean;
}

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

const NavigationBar = ({ inView }: NavigationBarProps) => {
  return (
    <Box
      py={10}
      h="3rem"
      pos="fixed"
      top="0"
      left="0"
      right="0"
      zIndex={2}
      transition="box-shadow 0.2s ease-in-out"
      bg={!inView ? "white" : "transparent"}
      boxShadow={!inView ? "base" : "none"}
    >
      <Flex h="full" justify="center" align="center">
        {routes.map((route, index) => (
          <Link
            key={index}
            as={NextLink}
            href={route.href}
            mx="20px"
            fontWeight="bold"
            transition="color 0.2s ease-in-out"
            _hover={{
              decoration: "none",
              color: "green",
            }}
          >
            {route.text}
          </Link>
        ))}
      </Flex>
    </Box>
  );
};

export default NavigationBar;
