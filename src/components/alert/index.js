import { Alert } from "@chakra-ui/react";
import { ReactComponent as TickIcon } from "assets/tick.svg";
import { RiErrorWarningFill } from "react-icons/ri";
import { AlertWrapper } from "./style";
import colors from "styles/colors";

export const CustomAlert = ({ message, status, className }) => {
  return (
    <AlertWrapper>
      <Alert
        className={className}
        status={status}
        variant="subtle"
        style={{
          background:
            status === "success" ? colors.success : status === "error" ? colors.error : null
        }}
      >
        {status === "success" ? (
          <TickIcon />
        ) : status === "error" ? (
          <RiErrorWarningFill fill="red" size={24} />
        ) : null}

        <span>{message}</span>
      </Alert>
    </AlertWrapper>
  );
};
