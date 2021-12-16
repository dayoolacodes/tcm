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
import { ReactComponent as DropDIcon } from "assets/select-dropdown-icon.svg";
import { ReactComponent as DropDIconDark } from "assets/select-dropdown-icon-dark.svg";
import { Checkbox } from "@chakra-ui/react";
import { components } from "react-select";
import COLORS from "styles/colors";

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
      {props.loading ? <Spinner className="spinner" /> : null}
    </TextInputWrapper>
  );
};
export const InputWithIcon = props => {
  const [field, meta] = useField(props);

  return (
    <TextInputWrapper>
      <label htmlFor={props.name}>
        {props.label}
        {props.required ? <span className="required-text">*</span> : null}
      </label>
      <div className="icon-wrap">
        <div className="icon">{props.icon}</div>
        <TextInputBox type={props.type} {...field} {...props} autoComplete="off" />
      </div>

      {props.displayErrMessage === false ? null : meta.touched && meta.error ? (
        <ErrorSpan>{meta.error}</ErrorSpan>
      ) : null}
      {props.loading ? <Spinner className="spinner" /> : null}
    </TextInputWrapper>
  );
};
export const DateInput = props => {
  const [field, meta] = useField(props);

  return (
    <TextInputWrapper style={{ ...props.style }}>
      <label htmlFor={props.name} style={{ color: "#F7981D", fontSize: "1.4rem" }}>
        {props.label}
        {props.required ? <span className="required-text">*</span> : null}
      </label>
      <div className="icon-wrap" style={{ marginTop: "15px" }}>
        <div className="icon">{props.icon}</div>
        <TextInputBox type={props.type} {...field} {...props} autoComplete="off" />
      </div>

      {props.displayErrMessage === false ? null : meta.touched && meta.error ? (
        <ErrorSpan>{meta.error}</ErrorSpan>
      ) : null}
      {props.loading ? <Spinner className="spinner" /> : null}
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
  // const [field, meta] = useField(props);

  return (
    <TextAreaWrapper style={{ marginTop: "0" }}>
      <TextAreaBox type="text" {...props} autoComplete="off" style={{ marginTop: "0" }} />
    </TextAreaWrapper>
  );
};
export const TextAreaInput3 = props => {
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

      <TextAreaBox type="text" {...props} {...field} autoComplete="off" />
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
  const [meta] = useField(props);

  const Placeholder = props => {
    return <components.Placeholder {...props} />;
  };

  // const CaretDownIcon = () => {
  //   return <DropDIcon />;
  // };

  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        <DropDIcon />
      </components.DropdownIndicator>
    );
  };

  const style = {
    control: (provided, state) => ({
      ...provided,
      "*": {
        boxShadow: "none !important"
      },
      width: "100%",
      background: "rgba(243, 243, 243, 0.6)",
      boxShadow: "none",
      borderColor: state.isFocused ? COLORS.primary : "rgba(243, 243, 243, 0.6)",

      "&:hover": {
        borderColor: state.isFocused ? COLORS.primary : "rgba(243, 243, 243, 0.6)"
      }
    }),
    singleValue: provided => ({
      ...provided,
      color: COLORS.darkBlue
    }),
    menuPortal: base => ({ ...base, zIndex: 9999 }),
    placeholder: base => ({
      ...base,
      color: COLORS.grey,
      whiteSpace: "nowrap"
    })
  };

  return (
    <SelectInputWrapper width={props.width}>
      <label htmlFor={props.field}>{props.label}</label>
      <SelectInputBox
        placeholder={props.placeholder}
        components={{ Placeholder, DropdownIndicator, IndicatorSeparator: () => null }}
        id={props.id}
        options={props.options}
        styles={style}
        isSearchable={false}
        onChange={option => props?.setFieldValue(props?.name, option?.value)}
        menuPortalTarget={document.body}
      />
      {meta.touched && meta.error ? <ErrorSpan>{meta.error}</ErrorSpan> : null}
    </SelectInputWrapper>
  );
};

export const SelectInputNoFomik = props => {
  // const [meta] = useField(props);

  const Placeholder = props => {
    return <components.Placeholder {...props} />;
  };

  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        <DropDIconDark />
      </components.DropdownIndicator>
    );
  };

  const style = {
    control: (provided, state) => ({
      ...provided,
      "*": {
        boxShadow: "none !important"
      },
      width: "100%",
      background: "rgba(243, 243, 243, 0.6)",
      boxShadow: "none",
      borderColor: state.isFocused ? COLORS.primary : "rgba(243, 243, 243, 0.6)",

      "&:hover": {
        borderColor: state.isFocused ? COLORS.primary : "rgba(243, 243, 243, 0.6)"
      }
    }),
    singleValue: provided => ({
      ...provided,
      color: COLORS.darkBlue
    }),
    menuPortal: base => ({ ...base, zIndex: 9999 }),
    placeholder: base => ({
      ...base,
      color: COLORS.grey,
      whiteSpace: "nowrap"
    })
  };

  return (
    <SelectInputWrapper width={props.width}>
      <label htmlFor={props.field}>{props.label}</label>
      <SelectInputBox
        {...props}
        // defaultValue={props.defaultValue}
        placeholder={props.placeholder}
        components={{ Placeholder, DropdownIndicator, IndicatorSeparator: () => null }}
        id={props.id}
        options={props.options}
        styles={style}
        isSearchable={false}
        onChange={props.onChange}
        // onChange={option => props?.setFieldValue(props?.name, option?.value)}
        menuPortalTarget={document.body}
      />
      {/* {meta.touched && meta.error ? <ErrorSpan>{meta.error}</ErrorSpan> : null} */}
    </SelectInputWrapper>
  );
};
