import { useReservations } from "@/contexts/Reservations.context";
import { Box, Container, IconButton, Link, Stack, Tag } from "@chakra-ui/react";
import NextLink from "next/link";
import Filter from "./filter/Filter";
import { BsCartCheckFill } from "react-icons/bs";

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
            <Link as={NextLink} href="/reservations" position="relative">
              <IconButton
                aria-label="장바구니"
                icon={<BsCartCheckFill />}
                variant="unstyled"
                fontSize="2xl"
                size="lg"
              />
              {!!reservations.length && (
                <Tag
                  borderRadius="full"
                  position="absolute"
                  top={0}
                  right={0}
                  size="sm"
                  colorScheme="red"
                >
                  {reservations.length}
                </Tag>
              )}
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
