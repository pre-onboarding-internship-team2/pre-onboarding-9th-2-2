import { useReservations } from "@/contexts/Reservations.context";
import { Box, Container, Link, Stack } from "@chakra-ui/react";
import NextLink from "next/link";
import Filter from "./filter/Filter";

const Header = () => {
  const { reservations } = useReservations();
  return (
    <Box as="header" position="sticky" top={0} zIndex="sticky">
      <Box backgroundColor="red.300">
        <Container maxW="container.lg" py={2}>
          <Stack
            direction="row"
            justifyContent="flex-end"
            color="whiteAlpha.900"
            fontWeight="bold"
          >
            <Link as={NextLink} href="/reservations">
              장바구니 {reservations.length}
            </Link>
          </Stack>
        </Container>
      </Box>
      <Container maxW="container.lg" py={2} background="chakra-body-bg">
        <Filter />
      </Container>
    </Box>
  );
};

export default Header;
