import {
  Portal,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

interface ModalBoxProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  buttonText: string;
}

const ModalBox = ({
  isOpen,
  onClose,
  title,
  children,
  buttonText,
}: ModalBoxProps) => {
  return (
    <Portal>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>{buttonText}</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Portal>
  );
};

export default ModalBox;
