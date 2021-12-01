import styled from "@emotion/styled";
import colors from "styles/colors";

export const Container = styled.div`
  label {
    font-weight: 500;
    font-size: 14px;
    line-height: 2rem;
    color: ${colors.primary};
  }

  .required-text {
    color: red;
  }

  div.DayPickerInput {
    width: 100%;

    input {
      width: 100%;
      height: 40px;
      font-size: 14px;
      text-indent: 1.3rem;
      border-radius: 4px;
      margin-top: 8px;
      color: ${colors.primary};
      transition: border-color 0.5s ease;
      border: 1px solid ${colors.borderblue};

      &:focus {
        outline: none;
        border: 1px solid ${colors.primary};
      }
    }
  }

  div.DayPicker {
    font-size: 16px;
    border-radius: 4px;
  }

  div.DayPicker-Day {
    border-radius: 10px;
  }

  div.DayPicker-Day {
    border-radius: 5px;
  }

  .DayPicker-Day--outside {
    color: #fff;
    cursor: default;
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    color: ${colors.primaryorange} !important;
  }

  div.DayPicker-Day.DayPicker-Day--selected,
  div.DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover {
    background-color: ${colors.primaryorange} !important;
  }

  div.DayPicker-Day.DayPicker-Day--selected,
  div.DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover {
    background-color: ${colors.primaryorange};
  }
`;

export const ErrorSpan = styled.p`
  font-size: 12px !important;
  color: red !important;
  margin: 5px 0 0;
`;
