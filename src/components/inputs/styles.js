import styled from "@emotion/styled";
import colors from "styles/colors";
import { Input, Select, Textarea } from "@chakra-ui/react";
import COLORS from "styles/colors";

//SEARCH INPUT
export const SearchInputWrapper = styled.div`
  margin-left: 4rem;
  width: 100%;
  padding-right: 4rem;
`;

export const SearchInputBox = styled.input`
  outline: none;
  margin: .8rem 2rem .8rem 0;
  width: 100%;
  font-size: 14px;
  height: 30px;
  border-radius: 4px;
  padding: 0.625rem 1.25rem;
  background: ${colors.white};
  color: ${colors.primary} !important;
  transition: border-color 0.5s ease;

  ::-webkit-input-placeholder {
    /* Edge */
    color: ${colors.grey};
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${colors.grey};
  }

 ::placeholder {
    color: ${colors.borderblue};
  }

  :focus {
    /* border: 1px solid ${colors.lightOrange}; */
    border: none;
    background: ${colors.white};
  }


  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

//TEXT INPUT
export const TextInputWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-top: 16px;
  position: relative;
  .spinner {
    position: absolute;
    top: 32%;
    right: 10px;
  }

  .phone-wrap {
    display: flex;
    align-items: center;
    height: 40px;
    input {
      text-indent: 50px;
    }
    input[type="date"] {
      text-indent: 35px;
      z-index: 1;
    }
    input[type="date"]::-webkit-calendar-picker-indicator {
      position: absolute;
      left: -15px;
    }
    input::-webkit-datetime-edit {
      position: relative;
      left: -15px;
    }
    input::-webkit-datetime-edit-fields-wrapper {
      position: relative;
      left: -15px;
    }
    input[type="date"]::-webkit-inner-spin-button,
    input[type="date"]::-webkit-calendar-picker-indicator {
      /* display: none;
             -webkit-appearance: none; */
      opacity: 0;
      width: 100%;
      background: none;
    }
    .icon {
      z-index: 2;
      margin-top: 8px;
      position: absolute;
      /* background: rgba(243, 243, 243, 0.6); */
      border-right: 1px solid #e0e0e0;
      padding: 5px 15px;
      display: flex;
    }
  }

  label {
    /* font-family: Inter; */
    font-style: normal;
    /* font-weight: 500; */
    font-size: 14px;
    line-height: 20px;
    color: ${colors.darkBlue};
    margin-top: 16px;
  }

  input {
    text-indent: 4px;
  }

  .error_p {
    color: ${colors.red};
    align-self: flex-start;
    font-size: 12px;
    margin-top: 3px;
  }
  .required-text {
    color: red;
  }
`;

export const CheckboxWrapper = styled.div`
  font-size: 12px;
  line-height: 18px;
  text-align: left;
  width: 100%;
  display: inline-flex;
  margin: 16px 0;
  margin-bottom: 0;
  color: ${COLORS.darkBlue};
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  span {
    margin-right: 5px;
  }

  a {
    color: ${COLORS.primaryOrange};
    margin: 0 2px;
  }

  .css-1r69mki,
  .css-xxkadm {
    background: #dfebfb;
    width: 20px;
    height: 20px;
    padding: 3px;
    border-radius: 2px;
    border: none;
  }
  .css-xxkadm[aria-checked="true"],
  .css-xxkadm[data-checked] {
    color: ${COLORS.primary};
    border-radius: 50%;
  }
  .css-xxkadm:focus,
  .css-xxkadm[data-focus] {
    box-shadow: none;
  }
`;

export const TextInputBox = styled(Input)`
  border: none;
  outline: none;
  width: 100%;
  font-size: 14px;
  height: 40px;
  border-radius: 4px;
  margin-top: 0.8rem;
  background: rgba(243, 243, 243, 0.6);
  text-indent: 1.3rem;
  color: ${colors.darkBlue} !important;
  transition: border-color 0.5s ease;

  ::-webkit-input-placeholder {
    /* Edge */
    color: ${colors.borderblue};
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${colors.borderblue};
  }

  ::placeholder {
    color: ${colors.borderblue};
    /* padding-left: 2rem; */
  }

  :focus {
    border: 1px solid ${colors.primary};
    outline: 0 !important;
    box-shadow: none !important;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    -webkit-text-fill-color: ${colors.darkBlue};
    font-size: 14px;
    box-shadow: transparent;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

//SELECT INPUT
export const SelectInputWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-top: 16px;

  .spinner {
    position: absolute;
    top: 32%;
    right: 10px;
  }

  label {
    /* font-family: Inter; */
    font-style: normal;
    /* font-weight: 500; */
    font-size: 14px;
    line-height: 20px;
    color: ${colors.darkBlue};
    margin-top: 16px;
  }

  input {
    text-indent: 4px;
  }

  .error_p {
    color: ${colors.red};
    align-self: flex-start;
    font-size: 12px;
    margin-top: 3px;
  }
  .required-text {
    color: red;
  }
`;

export const SelectInputBox = styled(Select)`
  border: none;
  outline: none;
  width: 100%;
  font-size: 14px;
  height: 40px;
  border-radius: 4px;
  margin-top: 0.8rem;
  background: rgba(243, 243, 243, 0.6);
  text-indent: 1.3rem;
  color: ${colors.darkBlue} !important;
  transition: border-color 0.5s ease;
  display: flex;

  option {
    background: tomato;
  }

  ::-webkit-input-placeholder {
    /* Edge */
    color: ${colors.grey};
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${colors.grey};
  }

  ::placeholder {
    color: ${colors.grey};
    /* padding-left: 2rem; */
  }

  :focus {
    border: 1px solid ${colors.primary};
    outline: 0 !important;
    box-shadow: none !important;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    -webkit-text-fill-color: ${colors.darkBlue};
    font-size: 14px;
    box-shadow: transparent;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

//TEXTAREA INPUT
export const TextAreaWrapper = styled.div`
  width: 100%;
  margin-top: 16px;
  label,
  span {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #2d4875;
  }

  .label_wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    span {
      font-size: 12px;
    }
  }

  .required-text {
    color: red;
  }
`;

export const TextAreaBox = styled(Textarea)`
  /* border: 1px solid ${colors.borderblue}; */
  display: flex;
  border: none;
  outline: none;
  width: 100%;
  font-size: 14px;
  /* height: 5rem; */
  border-radius: 4px;
  color: ${colors.primary} !important;
  margin-top: 0.8rem;
  background: rgba(243, 243, 243, 0.6);
  transition: border-color 0.5s ease;

  ::-webkit-input-placeholder {
    /* Edge */
    color: ${colors.borderblue};
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${colors.borderblue};
  }

  ::placeholder {
    color: ${colors.borderblue};
    /* padding-left: 2rem; */
  }

  :focus {
    border: 1px solid ${colors.primary};
    outline: 0 !important;
    box-shadow: none !important;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    -webkit-text-fill-color: ${colors.primary};
    font-size: 14px;
    box-shadow: 0 0 0px 1000px ${colors.textinputbackground} inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export const ErrorSpan = styled.p`
  font-size: 12px !important;
  color: red !important;
  margin: 5px 0 0;
`;

export const InlineFields = styled.div`
  display: flex;

  &:nth-child(1) {
    border: 1px solid red;
  }
`;
