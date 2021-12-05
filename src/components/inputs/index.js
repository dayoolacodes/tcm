import React from "react";
import { useField } from "formik";
// import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import {
  SearchInputWrapper,
  SearchInputBox,
  TextInputWrapper,
  TextInputBox,
  SelectInputWrapper,
  SelectInputBox,
  TextAreaWrapper,
  TextAreaBox,
  ErrorSpan,
  CheckboxWrapper
} from "./styles";
import { Spinner } from "components/loaders";
import { ReactComponent as CIunsortedIcon } from "assets/unsorted-icon.svg";
import { Checkbox } from "@chakra-ui/react";

export const SearchBar = props => {
  return (
    <SearchInputWrapper>
      <SearchInputBox type="text" id="search" {...props} autoComplete="off" />
    </SearchInputWrapper>
  );
};

export const Input = props => {
  return (
    <TextInputWrapper width={props.width}>
      <label htmlFor={props.field}>{props.label}</label>
      <TextInputBox {...props} placeholder={props.placeholder} id={props.id} icon={props.icon} />
    </TextInputWrapper>
  );
};

export const TextInput = props => {
  const [field, meta] = useField(props);

  return (
    <TextInputWrapper>
      <label htmlFor={props.name}>
        {props.label}
        {props.required ? <span className="required-text">*</span> : null}
      </label>

      <TextInputBox type={props.type} {...field} {...props} autoComplete="off" />

      {props.displayErrMessage === false ? null : meta.touched && meta.error ? (
        <ErrorSpan>{meta.error}</ErrorSpan>
      ) : null}
      {props.loading ? <Spinner className="spinner" color="habari.primaryorange" /> : null}
    </TextInputWrapper>
  );
};
export const CheckboxInput = props => {
  const [field, meta] = useField(props);
  return (
    <>
      <CheckboxWrapper>
        <Checkbox type={props.type} {...field} {...props} />
        <label htmlFor={props.name}>
          {props.label}
          {props.required ? <span className="required-text">*</span> : null}
        </label>
      </CheckboxWrapper>
      {props.displayErrMessage === false ? null : meta.touched && meta.error ? (
        <ErrorSpan>{meta.error}</ErrorSpan>
      ) : null}
    </>
  );
};
export const PasswordInput = props => {
  const [field, meta] = useField(props);

  return (
    <TextInputWrapper>
      <label htmlFor={props.name}>{props.label}</label>
      <TextInputBox type="password" {...field} {...props} autoComplete="off" />
      {props.displayErrMessage === false ? null : meta.touched && meta.error ? (
        <ErrorSpan>{meta.error}</ErrorSpan>
      ) : null}
    </TextInputWrapper>
  );
};

export const TextAreaInput = props => {
  const [field, meta] = useField(props);

  return (
    <TextAreaWrapper>
      <div className="label_wrapper">
        <label htmlFor={props.field}>
          {props.label} {props.required ? <span className="required-text">*</span> : null}
        </label>

        {props.count && props.total ? (
          <span style={{ color: props.count < 10 ? "red" : "green" }}>
            {props.count}/{props.total}
          </span>
        ) : null}
      </div>

      <TextAreaBox type="text" {...field} {...props} autoComplete="off" />
      {meta.touched && meta.error ? <ErrorSpan>{meta.error}</ErrorSpan> : null}
    </TextAreaWrapper>
  );
};

export const SelectInput = props => {
  return (
    <SelectInputWrapper width={props.width}>
      <label htmlFor={props.field}>{props.label}</label>
      <SelectInputBox
        {...props}
        placeholder={props.placeholder}
        id={props.id}
        icon={props.icon || <CIunsortedIcon />}
      >
        {props.children}
      </SelectInputBox>
    </SelectInputWrapper>
  );
};

export const SelectInput3 = props => {
  const [field, meta] = useField(props);
  return (
    <SelectInputWrapper width={props.width}>
      <label htmlFor={props.field}>{props.label}</label>
      <SelectInputBox
        {...props}
        placeholder={props.placeholder}
        id={props.id}
        icon={props.icon || <CIunsortedIcon />}
        {...field}
        {...props}
      >
        {props.children}
      </SelectInputBox>
      {meta.touched && meta.error ? <ErrorSpan>{meta.error}</ErrorSpan> : null}
    </SelectInputWrapper>
  );
};

// export const InputWithAddon = ({ label, type = "text", leftAddon = "", ...props }) => {
//   const [field, meta] = useField(props);

//   return (
//     <TextInputWrapper>
//       <label htmlFor={props.name}>{label}</label>
//       <InputGroup color="habari.primary" marginTop="0.8rem">
//         <InputLeftAddon height="4rem" fontSize="1.4rem" children={leftAddon} />
//         <Input
//           type={type}
//           width="100%"
//           height="4rem"
//           fontSize="14px"
//           _focus={{ outline: "none" }}
//           transition="border-color 0.5s ease"
//           background="habari.textinputbackground"
//           {...field}
//           {...props}
//         />
//       </InputGroup>
//       {meta.touched && meta.error ? <ErrorSpan>{meta.error}</ErrorSpan> : null}
//     </TextInputWrapper>
//   );
// };
