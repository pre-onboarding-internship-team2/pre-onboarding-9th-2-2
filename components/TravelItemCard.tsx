import { TravelItem } from "@/types/travelItem.type";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Stat,
  StatNumber,
  Tag,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import { TravelItemDetailModal } from "./TravelItemDetailModal";

export default function TravelItemCard({
  travelItem,
}: {
  travelItem: TravelItem;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Card
        maxW="sm"
        _hover={{
          boxShadow: "2xl",
          cursor: "pointer",
          transition: "all 0.5s ease",
        }}
        onClick={onOpen}
      >
        <CardBody>
          <Image
            width={300}
            height={300}
            src={travelItem.mainImage}
            alt={travelItem.name}
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{travelItem.name}</Heading>
            <Text>{travelItem.idx}</Text>
            <Tag>{travelItem.spaceCategory}</Tag>
            <Stat textAlign="right">
              <StatNumber color="blue.600" fontSize="2xl">
                {travelItem.price} 원
              </StatNumber>
            </Stat>
          </Stack>
        </CardBody>
        <CardFooter justifyContent="center">
          <Button
            variant="solid"
            colorScheme="blue"
            onClick={(e) => {
              e.stopPropagation();
              console.log(`${travelItem.name} reservation clicked`);
            }}
          >
            예약하기
          </Button>
        </CardFooter>
      </Card>

      <TravelItemDetailModal
        isOpen={isOpen}
        onClose={onClose}
        travelItem={travelItem}
      />
    </>
  );
}
