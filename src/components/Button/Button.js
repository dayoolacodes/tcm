/* eslint-disable indent */
import styled from "@emotion/styled";
import { Button } from "@chakra-ui/react";

import colors from "styles/colors";

export const OrangeButton = styled(Button)`
  width: 100%;
  height: 100%;
  background: ${colors.primaryorange};
  border-radius: 4px;
  color: ${colors.white};
  outline: 0;
  box-shadow: 0;

  &:hover {
    cursor: pointer;
    background: ${colors.hoverorange};
  }

  &:focus {
    outline: 0;
    box-shadow: 0;
  }
`;

export const GreenButton = styled.button`
  width: ${({ fillParent }) =>
    fillParent && "100%"}; // Option to fill parent width, else take original width
  height: ${({ height }) => height && height + "rem"};
  padding: 1.2rem 2.4rem;
  background: ${({ invert }) => (invert ? colors.white : colors.green)};
  border-radius: 4px;
  color: ${({ invert }) => (invert ? colors.green : colors.white)};
  border: ${({ invert }) => (invert ? "2px solid " + colors.green : "none")};
  font-size: 1.4rem;

  &.small {
    padding: 0.5rem 1rem;
  }

  &:hover {
    cursor: pointer;
    background: ${colors.hovergreen};
    background-color: ${({ invert }) =>
      invert ? "rgba(18, 179, 108, 0.2)" : "rgba(18, 179, 108, 0.7)"};
  }

  &:focus {
    box-shadow: none;
    outline: none;
  }

  &:disabled,
  [disabled] {
    background-color: rgba(18, 179, 108, 0.3);
    cursor: not-allowed;
  }
`;

export const DetailsNavButton = styled(Button)`
  background-color: ${props => (props._selected ? "#fceee8" : "rgba(0,0,0,0)")};
  color: ${colors.primary};
  border-radius: 0.5rem;
  font-size: 1.4rem;
  font-weight: 400;
  padding: 1.5rem 1.6rem;
  outline: none;
  box-shadow: none;

  &:hover {
    cursor: pointer;
    background: ${props => (props._selected ? "#fceee8" : "#eee")};
  }

  &:focus {
    box-shadow: none;
  }
`;

export const DarkGreyButton = styled.button`
  width: ${({ fillParent }) =>
    fillParent && "100%"}; // Option to fill parent width, else take original width
  height: ${({ height }) => height && height + "rem"};
  background-color: #495867;
  border-radius: 0.3rem;
  font-size: 1.4rem;
  font-weight: 400;
  padding: 1.2rem 2.4rem;
  outline: none;
  box-shadow: none;
  color: white;
  top: -0.7rem;

  &:hover {
    cursor: pointer;
    background: #091827;
  }

  &:focus {
    box-shadow: none;
  }
`;

export const AddNewButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  vertical-align: middle;
  color: ${colors.primaryorange};
  transition: background 0.5s ease;
  padding: 4px;
  border-radius: 4px;

  &:hover,
  &:focus {
    background: rgba(255, 87, 3, 0.1);
  }

  svg {
    display: inline;
    margin: 0 7.3px;
  }

  &:focus {
    outline: none;
  }
`;

export const SolidButton = styled(Button)`
  width: ${props => (props?.width ? props.width : "100%")};
  height: ${props => (props?.height ? props.height : "4.8rem")};
  background: ${props => (props?.bg ? props.bg : colors.turquoiseGreen)};
  /* border: ${({ borderColor }) =>
    borderColor ? `1px solid ${borderColor}` : "1px solid #db3c02"}; */
  border: ${props => (props?.bg ? `1px solid ${props.bg}` : `1px solid ${colors.turquoiseGreen}`)};
  border-radius: 4px;
  color: ${colors.white};
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  transition: background 0.5s ease;

  &:hover,
  &:focus {
    background: ${props => (props?.hoverbg ? props.hoverbg : colors.turquoiseGreen)};
    border: ${props =>
      props?.hoverbg ? `1px solid ${props.hoverbg}` : `1px solid ${colors.turquoiseGreen}`};
  }

  &:focus {
    box-shadow: none;
  }

  &:disabled {
    background: ${props => (props?.bg ? props.bg : colors.turquoiseGreen)};
    border-color: ${props => (props?.bg ? props.bg : colors.turquoiseGreen)};
    /* cursor: not-allowed; */
    pointer-events: none;
  }

  svg {
    margin: 0 6px;
  }

  .loader{
    animation: rotate 1.2s linear infinite;
    margin: 0 auto;
    font-size: 17px;
      @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  }
`;

export const OutlinedButton = styled(SolidButton)`
  background: ${colors.white};
  border: 1px solid ${colors.borderblue};
  color: ${colors.primary};

  &:hover,
  &:focus {
    background: ${colors.greyLight};
    border: 1px solid ${colors.borderblue};
    box-shadow: none;
  }
`;

export const LinkButton = styled.button`
  color: ${props => (props.color ? props.color : colors.primary)};

  &:hover,
  &:focus {
    text-decoration: underline;
  }

  &:focus {
    outline: none;
  }
`;

export const BenButton = styled.button`
  width: ${({ fillParent }) =>
    fillParent && "100%"}; // Option to fill parent width, else take original width
  height: ${({ height }) => height && height + "rem"};
  /* padding: 1.2rem 2.4rem; //${({ invert }) => (invert ? ".8rem 1rem" : "1.2rem 2.4rem")};; */
  background: ${({ invert, color }) => (invert ? colors.white : color)};
  border-radius: 4px;
  color: ${({ invert, color }) => (invert ? color : colors.white)};
  border: ${({ color }) => "0.2rem solid " + color};
  font-size: 1.4rem;
  box-sizing: content-box;

  &.small {
    padding: 0.5rem 1rem;
  }

  &.noborder {
    border: none;
    padding: 0;

    svg {
      font-size: 2rem;
      padding: 0;
    margin: 0;
    margin-left: 1rem;
    display: unset;
    }
  }

  &:hover {
    cursor: pointer;
    /* background: ${colors.hovergreen}; */
    background-color: ${({ invert, color }) => (invert ? color + "44" : color + "88")};
    border-color: ${({ invert, color }) => (invert ? color : color + "00")};
  }

  &:focus {
    box-shadow: none;
    outline: none;
  }

  &:disabled,
  [disabled] {
    background-color: rgba(0, 0, 0, 0.1);
    border-color: rgba(0,0,0, .2);
    color: white;
    cursor: not-allowed;
  }
`;
