import React from "react";
import styled from "@emotion/styled";
import { IoIosClose } from "react-icons/io";

import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";

import { CloseButton, ModalTitle } from "./styles";

const CustomModal = ({
  isOpen,
  onClose,
  children,
  showCloseBtn = true,
  showHeader = true,
  overlayClose = false,
  width,
  title = "",
  testMode = false,
  blockScrollOnMount = true,
  isCentered = true,
  blur = false,
  ...props
}) => {
  React.useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, [isOpen]);

  const initialRef = React.useRef();

  return (
    <Modal
      isOpen={isOpen}
      size={width}
      isCentered={isCentered}
      closeOnOverlayClick={overlayClose}
      onClose={onClose}
      motionPreset="slideInBottom"
      initialFocusRef={props.initialFocusRef ?? initialRef}
      {...props}
    >
      <Container blur={blur}>
        <ModalOverlay bg="rgba(99,99,98, .8)" />
      </Container>
      <ModalContent ref={initialRef}>
        {showHeader && (
          <>
            <ModalTitle>
              <p>{title}</p>
              {testMode ? (
                <span>
                  Test mode <InfoOutlineIcon />
                </span>
              ) : null}
            </ModalTitle>
            {showCloseBtn && (
              <CloseButton type="button" onClick={onClose} aria-label="close modal">
                <IoIosClose size={30} color="#2D4875" />
              </CloseButton>
            )}
          </>
        )}
        <ModalBody padding="0px">{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;

const Container = styled.div`
  .css-1dpwgnq {
    backdrop-filter: ${props => (props.blur ? "blur(4px)" : "none")};
  }
`;
