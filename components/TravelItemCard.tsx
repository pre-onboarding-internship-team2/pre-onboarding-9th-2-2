import { TravelItem } from "@/types/travelItem.type";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  Stack,
  Stat,
  StatNumber,
  Tag,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";

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

// TODO : modal 오픈시 레이아웃 움직임 수정
function TravelItemDetailModal({
  isOpen,
  onClose,
  travelItem,
}: { travelItem: TravelItem } & Pick<ModalProps, "isOpen" | "onClose">) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{travelItem.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image
            width={300}
            height={300}
            src={travelItem.mainImage}
            alt={travelItem.name}
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{travelItem.name}</Heading>
            <Text>{travelItem.idx}</Text>
            <Text> {travelItem.description}</Text>
            <Text> {travelItem.maximumPurchases} 개</Text>
            <Text>{JSON.stringify(travelItem.registrationDate)}</Text>
            <Tag>{travelItem.spaceCategory}</Tag>
            <Stat textAlign="right">
              <StatNumber color="blue.600" fontSize="2xl">
                {travelItem.price} 원
              </StatNumber>
            </Stat>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
