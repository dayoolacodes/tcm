import {
  Box,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  useDisclosure
} from "@chakra-ui/react";
import { TextAreaInput } from "components/inputs";
import React from "react";
import COLORS from "styles/colors";
import { Container, ModalButton, VerticalBar, MdCloseButton } from "./styles";
import ConfirmAppointment from "./ConfirmAppointment";

import moment from "moment";

function Index({ isOpen, onClose, eventDetails, onOpen }) {
  const {
    onOpen: Openconfirmation,
    isOpen: isOpenConfirm,
    onClose: onCloseConfirm
  } = useDisclosure();

  const [radioValue, setRadioValue] = React.useState("");

  const rowItems = [
    {
      key: "Doctor",
      value: eventDetails?.title
    },
    {
      key: "Appointment Date",
      value: moment(eventDetails?.start).format("dddd, MMMM Do YYYY")
    },
    {
      key: "Available Times",
      value: (
        <RadioGroup name="form-name" className="radio-group">
          {eventDetails?.availableTimes?.map(e => {
            return (
              <Box
                className={`radio-wrapper ${
                  radioValue === moment(e).format("h:mm A") ? "active" : ""
                }`}
                onChange={e => setRadioValue(e.target.value)}
              >
                <Radio value={moment(e).format("h:mm A")}>{moment(e).format("h:mm A")}</Radio>
              </Box>
            );
          })}
        </RadioGroup>
      )
    },
    {
      key: "Clinic Name",
      value: "Landsowne Medical Centre"
    },
    {
      key: "Address",
      value: eventDetails?.address
    },
    {
      key: "Note",
      value: <TextAreaInput placeholder="Enter additional notes here..." maxW="56rem" />
    }
  ];

  const handleConnfirm = () => {
    Openconfirmation();
    onClose();
  };

  const handleGoBack = () => {
    onCloseConfirm();
    onOpen();
  };

  return (
    <>
      <ConfirmAppointment
        onOpen={Openconfirmation}
        onClose={onCloseConfirm}
        isOpen={isOpenConfirm}
        GoBack={handleGoBack}
      />
      <Modal isOpen={isOpen} size="4xl" onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent maxW="64rem" display="flex" justifyContent="center">
          <ModalHeader color={`${COLORS.primaryBlue}`} fontSize={18} lineHeight={"20px"}>
            Book Appointment
          </ModalHeader>
          <VerticalBar />
          <MdCloseButton />
          <ModalBody>
            <Container>
              <div className="wrapper">
                {rowItems.map((e, index) => {
                  return (
                    <div className="row" key={e?.key + index}>
                      <span className="key">{e?.key}</span>
                      <span className="value">{e?.value}</span>
                    </div>
                  );
                })}
              </div>
            </Container>
          </ModalBody>
          <ModalFooter>
            <ModalButton mr={3} onClick={onClose}>
              Cancel
            </ModalButton>
            <ModalButton mr={6} onClick={handleConnfirm}>
              Confirm Booking
            </ModalButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Index;
