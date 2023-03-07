import Head from "next/head";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Fragment } from "react";
import { fetchGetProduct, Product } from "../services/product";
import { GetServerSideProps } from "next";

export default function main({ products }: { products: Product[] }) {
  return (
    <>
      <Head>
        <title>List and Cart</title>
        <meta name="description" content="list and cart" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {products.map(({ idx, name, mainImage, spaceCategory, price }) => {
          return (
            <Fragment key={idx}>
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
              >
                <Image
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "200px" }}
                  src={mainImage}
                  alt={name}
                />

                <Stack>
                  <CardBody>
                    <Heading size="md">{name}</Heading>

                    <Text py="2">{spaceCategory}</Text>
                    <Text py="2">{price}</Text>
                  </CardBody>

                  <CardFooter>
                    <Button variant="solid" colorScheme="blue">
                      예약
                    </Button>
                  </CardFooter>
                </Stack>
              </Card>
              ;
            </Fragment>
          );
        })}
      </main>
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data: products } = await fetchGetProduct();

  return {
    props: {
      products,
    },
  };
};
