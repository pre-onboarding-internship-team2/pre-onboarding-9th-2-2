import { TravelItem } from "@/types/travelItem.type";
import {
  Container,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import TravelItemCard from "./TravelItemCard";

export function TravelItem({ travelItem }: { travelItem: TravelItem }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <TravelItemCard
        variant="outline"
        travelItem={travelItem}
        onClick={onOpen}
        _hover={{
          boxShadow: "xl",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
      />

      <Modal isOpen={isOpen} onClose={onClose} preserveScrollBarGap>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{travelItem.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Container centerContent py={4}>
              <TravelItemCard
                detail
                travelItem={travelItem}
                variant="unstyled"
              />
            </Container>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
