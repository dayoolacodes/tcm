import {
  Box,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from "@chakra-ui/react";
import React from "react";
import COLORS from "styles/colors";
import { ModalText, ModalButton, VerticalBar, MdCloseButton } from "./styles";

function Index({ onOpen, isOpen, onClose, GoBack }) {
  return (
    <>
      <Modal isOpen={isOpen} size="3xl" onClose={onClose} isCentered closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent display="flex" justifyContent="center">
          <ModalHeader
            color={`${COLORS.primaryBlue}`}
            fontSize={18}
            textAlign="center"
            mt={5}
            lineHeight={"20px"}
          >
            Book Appointment
          </ModalHeader>
          <VerticalBar />
          <MdCloseButton />
          <ModalBody mt={5}>
            <ModalText>
              <p>Are you sure you want to book Dr Hong Wang for December 15, 09:00 AM? </p>
              <p>Before cancelling, a 24-hour notice is required.</p>
            </ModalText>
          </ModalBody>
          <ModalFooter>
            <Box display="flex" justifyContent="center" width="100%" mb={30}>
              <ModalButton mr={3} onClick={GoBack}>
                Back
              </ModalButton>
              <ModalButton className="bookAppointment" mr={6} onClick={onClose}>
                Book Appointment
              </ModalButton>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Index;
