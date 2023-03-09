import { useReservations } from "@/contexts/Reservations.context";
import { Box, Container, IconButton, Link, Stack, Tag } from "@chakra-ui/react";
import NextLink from "next/link";
import { AiFillHome } from "react-icons/ai";
import { BsCartCheckFill } from "react-icons/bs";

export const HEADER_HEIGHT = "64px";

const Header = () => {
  const { reservations } = useReservations();
  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex="sticky"
      height={HEADER_HEIGHT}
    >
      <Box backgroundColor="red.300">
        <Container maxW="container.lg" py={2}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            color="whiteAlpha.900"
            fontWeight="bold"
          >
            <Link as={NextLink} href="/main">
              <IconButton
                aria-label="여행 상품 목록"
                icon={<AiFillHome />}
                variant="unstyled"
                fontSize="2xl"
                size="lg"
              />
            </Link>
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
    </Box>
  );
};

export default Header;
