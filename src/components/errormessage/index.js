import { FormErrorMessage } from "@chakra-ui/react";
import { ErrorWrapper } from "./style";

export const ErrorMessage = ({ message }) => {
  return (
    <ErrorWrapper>
      <FormErrorMessage>
        <span>{message}</span>
      </FormErrorMessage>
    </ErrorWrapper>
  );
};
