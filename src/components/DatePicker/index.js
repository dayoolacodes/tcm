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
        {...field}
        // onDayChange={selectedDay => {
        //   setfieldvalue(name, selectedDay);
        //   if (props.siblingField) {
        //     setfieldvalue(props.siblingField, selectedDay);
        //   }
        // }}
        showPreviousYear={true}
        format="DD-MM-YYYY"
        formatDate={formatDate}
        parseDate={parseDate}
        placeholder=" "
        inputProps={{ readOnly: true }}
        dayPickerProps={{
          onDayClick: (day, { disabled, selected }) => {
            if (disabled) return;
            if (selected) return;
          }
        }}
      />
      {meta.touched && meta.error ? <ErrorSpan>{meta.error}</ErrorSpan> : null}
    </Container>
  );
};

export default DatePicker;
