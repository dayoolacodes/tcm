import styled from "@emotion/styled";
import { device } from "styles";
import colors from "styles/colors";

const CloseButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  flex: 0 0 auto;
  position: absolute;
  top: 12px;
  right: 2rem;
  z-index: 4;
  border-radius: 4px;

  &:hover {
    background-color: rgba(18, 39, 140, 0.1);
  }

  &:focus {
    outline: none;
  }
`;

const ModalTitle = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 24px;
  color: ${colors.primary};
  padding: 1.6rem 4rem;
  border-bottom: 1px solid #eaedf3;
  display: flex;
  align-items: center;

  span {
    margin-left: auto;
    margin-right: 20px;
    padding: 1px 7px;
    background: #ffc526;
    border-radius: 4px;
    font-size: 12px;
    line-height: 20px;
    vertical-align: middle;
  }

  @media ${device.tablet} {
    text-align: left;
  }
`;

export { CloseButton, ModalTitle };
