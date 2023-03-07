import Head from "next/head";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

export default function Main() {
  return (
    <>
      <Head>
        <title>여행 상품 목록</title>
        <meta name="description" content="여행 상품 목록 페이지" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        여행 상품 목록
        <Link as={NextLink} href="/reservations">
          장바구니
        </Link>
      </main>
    </>
  );
}
