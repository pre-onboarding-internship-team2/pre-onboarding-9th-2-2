import { ReservationItem } from "@/contexts/Reservations.context";
import formatter from "@/lib/valueFormatter";
import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
  Image,
  Tag,
} from "@chakra-ui/react";
import { DeleteButton } from "./DeleteButton";
import { CountButton } from "./CountButton";

export function ReservationListItem({
  itemData,
}: {
  itemData: ReservationItem;
}) {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      alignItems="center"
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={itemData.mainImage}
        alt={itemData.name}
      />

      <CardBody>
        <Stack>
          <Stack direction="row">
            <Text>{itemData.idx}</Text>
            <Tag>{itemData.spaceCategory}</Tag>
          </Stack>

          <Heading size="md">{itemData.name}</Heading>

          <Text py="2">{itemData.description}</Text>
          <Stack direction="row">
            <Text as="dt">구매개수 제한 :</Text>
            <Text as="dt">{itemData.maximumPurchases} 개</Text>
          </Stack>
        </Stack>
      </CardBody>

      <CardFooter>
        <Stack>
          <Text fontSize="lg">{formatter.price(itemData.price)}</Text>

          <Stack direction="row" alignItems="center">
            <CountButton type="decrease" idx={itemData.idx} />
            <Text>{itemData.count}</Text>
            <CountButton type="increase" idx={itemData.idx} />
          </Stack>
        </Stack>
      </CardFooter>

      <DeleteButton idx={itemData.idx} />
    </Card>
  );
}
