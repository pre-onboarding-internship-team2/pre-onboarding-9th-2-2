import Head from "next/head";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

export default function Reservations() {
  return (
    <>
      <Head>
        <title>장바구니</title>
        <meta name="description" content="장바구니 페이지" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        장바구니 <br />
        - 저장한 여행 상품의 리스트를 보여주고 삭제가 가능할 수 있도록
        구성해주세요. <br />
        - 여행 상품의 구매 수량을 변경 가능할 수 있도록 해주세요. <br />-
        장바구니에 있는 여행 상품의 총 결제액 수를 계산하여 표시해주세요
        <Link as={NextLink} href="/main" display="block">
          상품목록
        </Link>
      </main>
    </>
  );
}
