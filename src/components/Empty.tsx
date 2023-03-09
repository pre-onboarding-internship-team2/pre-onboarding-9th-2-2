import { Center, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Empty({ text }: { text: string }) {
  return (
    <>
      <Center height="50vh" fontSize="20px" flexDirection="column">
        <Image src="/empty.jpg" alt="empty" width={100} height={100} />
        <Text mt="10px" fontSize="16px">
          {text}
        </Text>
      </Center>
    </>
  );
}
