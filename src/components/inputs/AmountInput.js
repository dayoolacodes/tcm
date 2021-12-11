/* eslint-disable indent */
import React from "react";
import styled from "@emotion/styled";
import NumberFormat from "react-number-format";
import { useField } from "formik";
import colors from "styles/colors";
import dropdownArrow from "assets/CaretCircleDown.png";

import { Input, InputGroup, FormControl, FormLabel } from "@chakra-ui/react";
import { useMerchant } from "contexts/merchantsContext";

/**select input is independent of Formik, it just updates formk 
with its current value, receives currency value and curency updater function  **/
const AmountInput = ({ changefn, currency, setCurrency, ...props }) => {
  const [field, meta] = useField(props);
  const { currencyList: options } = useMerchant();
  const { label = "", name, disabled = false } = props;

  return (
    <FormControl>
      {label ? (
        <FormLabel fontSize="14px" htmlFor={name}>
          {label}
          {props.required ? (
            <span className="required-text" style={{ color: "red" }}>
              *
            </span>
          ) : null}
        </FormLabel>
      ) : null}
      <Container>
        <InputGroup>
          {props.nodropdown ? (
            options.length > 0 ? (
              options.map(
                option =>
                  option.value === currency && (
                    <div className={"con-currency"} key={"con-currency" + option.label}>
                      {option.label}
                    </div>
                  )
              )
            ) : null
          ) : (
            <select
              name="currency"
              value={currency}
              disabled
              onChange={e => {
                changefn("currency", e.target.value);
                setCurrency(e.target.value);
              }}
            >
              {options.length > 0
                ? options.map(option => (
                    <option value={option.value} key={`options-${option.value}`}>
                      {option.label}
                    </option>
                  ))
                : null}
            </select>
          )}

          <NumberFormat
            decimalScale={2}
            disabled={disabled}
            // isNumericString={true}
            allowNegative={false}
            thousandSeparator={true}
            customInput={Input}
            // empty string on prefix prop is iintentional to fix bug from package
            prefix=" "
            {...field}
            {...props}
          />
        </InputGroup>
      </Container>
      {meta.touched && meta.error ? <ErrorSpan>{meta.error}</ErrorSpan> : null}
    </FormControl>
  );
};

export default AmountInput;

const Container = styled.div`
  border-radius: 4px;
  border: 1px solid #acc1d1;
  transition: border-color 0.5s ease;
  background: #f2f6f8;

  &:focus-within {
    border: 1px solid ${colors.primary};
  }

  div.con-currency {
    display: flex;
    align-items: center;
    color: var(--chakra-colors-gray-400);
    padding: 0 0.3rem 0 0.7rem;
  }

  select,
  input {
    height: 40px;
    width: 100%;
    border: none;
    color: ${colors.primary};
    font-size: 14px;
    line-height: 24px;

    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  input {
    background: #fcfefe;
    margin-left: 5px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  select {
    font-size: 14px;
    line-height: 24px;
    font-weight: 300;
    width: 55px;
    padding: 0 0 0 5px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    appearance: none;
    transition: border-color 0.5s ease;
    /* background: url(${dropdownArrow}) no-repeat right, #f2f6f8; */
    background: #f2f6f8;
  }
`;

export const ErrorSpan = styled.p`
  font-size: 12px !important;
  color: red !important;
  margin: 5px 0 0;
`;
