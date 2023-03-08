import { TravelItem } from "@/types/travelItem.type";
import {
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  Stack,
  Stat,
  StatNumber,
  Tag,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

export function TravelItemDetailModal({
  isOpen,
  onClose,
  travelItem,
}: { travelItem: TravelItem } & Pick<ModalProps, "isOpen" | "onClose">) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} preserveScrollBarGap>
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
