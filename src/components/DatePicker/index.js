import React from "react";
import "react-day-picker/lib/style.css";
import { useField } from "formik";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { Container, ErrorSpan } from "./styles";
import { formatDate, parseDate } from "react-day-picker/moment";
import "moment/locale/it";

const DatePicker = ({ changeFn, label, disabledDays, ...props }) => {
  const [field, meta] = useField(props);
  const { setfieldvalue, name } = props;

  return (
    <Container>
      {label ? (
        <label htmlFor={props.name}>
          {label}
          {props.required ? <span className="required-text">*</span> : null}
        </label>
      ) : null}
      <DayPickerInput
        onDayChange={selectedDay => {
          setfieldvalue(name, selectedDay);
          if (props.siblingField) {
            setfieldvalue(props.siblingField, selectedDay);
          }
        }}
        format="DD-MM-YYYY"
        formatDate={formatDate}
        parseDate={parseDate}
        placeholder="DD-MM-YYYY"
        dayPickerProps={{
          disabledDays: { before: disabledDays ?? new Date() },
          onDayClick: (day, { disabled, selected }) => {
            if (disabled) return;
            if (selected) return;
          }
        }}
        // scroll on modal to reveal the rest of the calendar
        onDayPickerShow={() => {
          const modal = document.querySelector(".fieldsContainer");
          modal.scrollTo({
            top: 550,
            left: 0,
            behavior: "smooth"
          });
        }}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? <ErrorSpan>{meta.error}</ErrorSpan> : null}
    </Container>
  );
};

export default DatePicker;
