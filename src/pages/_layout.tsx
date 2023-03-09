/** @jsxImportSource @emotion/react */
import Link from "next/link";
import { ReactNode } from "react";
import { Box, Divider, Flex } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { useRouter } from "next/router";

export default function LayoutRoot({ children }: { children: ReactNode }) {
  const router = useRouter();

  return (
    <>
      <Flex
        as="main"
        direction="column"
        alignItems="center"
        backgroundColor="gray.100"
        minHeight="100vh"
      >
        <Flex
          justifyContent="space-around"
          w="100%"
          maxWidth="1028px"
          position="fixed"
          backgroundColor="white"
          borderBottom="solid 1px #e8e8e8"
          zIndex={10}
        >
          <Link
            href={"/main"}
            css={css`
              width: 100%;
              font-size: 16px;
              font-weight: 700;
              padding: 8px;
              text-align: center;
              ${router.pathname === "/main"
                ? css`
                    background-color: #3182ce;
                    color: white;
                  `
                : null};
            `}
          >
            메인
          </Link>
          <Link
            href={"/reservations"}
            css={css`
              width: 100%;
              font-size: 16px;
              font-weight: 700;
              padding: 8px;
              text-align: center;
              ${router.pathname === "/reservations"
                ? css`
                    background-color: #3182ce;
                    color: white;
                  `
                : null};
            `}
          >
            장바구니
          </Link>
        </Flex>
        <Box
          backgroundColor="white"
          mt="41px"
          w="100%"
          maxWidth="1028px"
          css={css`
            & > * {
              padding: 0 15px;
            }
          `}
        >
          {children}
        </Box>
      </Flex>
    </>
  );
}
