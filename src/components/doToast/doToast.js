import styled from "@emotion/styled";
import { toast } from "react-toastify";
import colors from "styles/colors";

const doToast = (message, type, subtext) => {
  let bgColor;
  let bLeft;
  let iconBg;

  if (type === "success") {
    bgColor = colors.lightGreen;
    bLeft = `4px solid ${colors.green}`;
    iconBg = colors.green;
  } else if (type === "error") {
    bgColor = colors.lightYellow;
    bLeft = `4px solid ${colors.yellow}`;
    iconBg = colors.yellow;
  } else if (type === "warn") {
    bgColor = "#F9F7E7";
  }

  const IconCircle = styled.div`
    width: 20px;
    height: 20px;
    background: ${iconBg};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2px;
    div {
      width: 3px;
      height: 10px;
      background: #fff;
      border-radius: 2px;
    }
  `;

  const MsgContainer = styled.div`
    h2 {
      font-weight: bold;
    }
    p {
      font-size: 1.2rem;
      font-weight: normal;
    }
  `;

  const Icon = () => {
    return (
      <IconCircle>
        <div />
      </IconCircle>
    );
  };

  const Msg = () => (
    <MsgContainer>
      <h2> {message} </h2>
      <p> {subtext ?? type} </p>
    </MsgContainer>
  );

  const options = {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    icon: Icon,
    style: {
      backgroundColor: bgColor,
      color: `${colors.darkBlue}`,
      borderLeft: bLeft,
      boxShadow: "0 8px 24px rgba(155, 155, 155, 0.15)"
    }
  };
  if (type === "error") {
    toast.error(<Msg /> ?? "", options);
  } else {
    toast.success(<Msg /> ?? "", options);
  }
};

export default doToast;
