import { TravelItem } from "@/types/travelItem.type";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardProps,
  Heading,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

interface TravelItemCardProps extends Partial<CardProps> {
  travelItem: TravelItem;
  /** detail : true 일 경우 상세 정보 출력 */
  detail?: boolean;
}

export default function TravelItemCard({
  travelItem,
  detail = false,
  ...rest
}: TravelItemCardProps) {
  return (
    <Card {...rest}>
      <CardBody>
        <Image
          width={300}
          height={300}
          src={travelItem.mainImage}
          alt={travelItem.name}
        />
        <Stack mt={3} spacing={4}>
          <Stack direction="row">
            <Text>{travelItem.idx}</Text>
            <Tag>{travelItem.spaceCategory}</Tag>
          </Stack>
          <Heading size="md">{travelItem.name}</Heading>
          {detail && (
            <>
              <Text>{travelItem.description}</Text>
              <Stack as="dl">
                <Stack direction="row">
                  <Text as="dt">구매개수 제한 :</Text>
                  <Text as="dt">{travelItem.maximumPurchases} 개</Text>
                </Stack>
                <Stack direction="row">
                  <Text as="dt">등록일자 : </Text>
                  <Text as="dt">
                    {new Date(travelItem.registrationDate).toDateString()}
                  </Text>
                </Stack>
              </Stack>
            </>
          )}
        </Stack>
      </CardBody>
      <CardFooter
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        pt={0}
      >
        <Text fontSize="lg">{travelItem.price.toLocaleString()} 원</Text>
        <Button
          variant="solid"
          colorScheme="red"
          onClick={(e) => {
            e.stopPropagation();
            console.log(`${travelItem.name} reservation clicked`);
          }}
        >
          예약하기
        </Button>
      </CardFooter>
    </Card>
  );
}
