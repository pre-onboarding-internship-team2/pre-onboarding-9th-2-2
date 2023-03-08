import formatter from "@/lib/valueFormatter";
import { TravelItem } from "@/types/travelItem.type";
import {
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
import ReserveButton from "./ReserveButton";

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
              <Stack as="dl" color="grey">
                <Stack direction="row">
                  <Text as="dt">구매개수 제한 :</Text>
                  <Text as="dt">{travelItem.maximumPurchases} 개</Text>
                </Stack>
                <Stack direction="row">
                  <Text as="dt">등록일자 : </Text>
                  <Text as="dt">
                    {formatter.date(travelItem.registrationDate)}
                  </Text>
                </Stack>
              </Stack>
            </>
          )}
        </Stack>
      </CardBody>
      <CardFooter
        flexDirection={detail ? "row" : { base: "column", md: "row" }}
        pt={detail ? 4 : 0}
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontSize="lg">{formatter.price(travelItem.price)} 원</Text>
        <ReserveButton travelItem={travelItem} />
      </CardFooter>
    </Card>
  );
}
