import { Input, InputWithIcon, TextInput } from "components/inputs";
import { Form, Formik } from "formik";
import React from "react";
import { Container } from "./styles";
import { ReactComponent as Attention } from "assets/attention-icon.svg";
import { ReactComponent as PhoneIcon } from "assets/phone-icon.svg";

const VerifySection = ({
  title,
  subtitle,
  codeFormName,
  codeFormLabel,
  inputWithIcon,
  verifyHeader,
  verifyDesc
}) => {
  const [verifyValue, setVerifyValue] = React.useState("");
  const defaultValues = {
    [codeFormName]: ""
  };
  const handleSubmit = e => {
    console.log(e);
  };

  return (
    <Container>
      <div className="wrapper">
        <div className="header">
          <h1 className="title">{title}</h1>
          <span className="subtitle">{subtitle}</span>
        </div>
        <Formik
          initialValues={defaultValues}
          // validate={patientValidation}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, values }) => (
            <Form>
              {inputWithIcon ? (
                <InputWithIcon
                  name={codeFormName}
                  label={codeFormLabel}
                  type="number"
                  icon={<PhoneIcon />}
                />
              ) : (
                <TextInput name={codeFormName} label={codeFormLabel} type="text" placeholder="" />
              )}
              <div className="spacer" />
              <button type="submit">Send Code</button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="verify-otp">
        <Attention />
        <div className="verify-otp-inner">
          <h1 className="header">{verifyHeader}</h1>
          <p className="desc">{verifyDesc}</p>
          <div className="input-code-row">
            <Input
              placeholder="Enter code"
              value={verifyValue}
              type="email"
              onChange={e => setVerifyValue(e.target.value)}
            />
            <div className="spacer" />
            <button>Submit</button>
          </div>
        </div>
      </div>
      <div className="section-divider"></div>
    </Container>
  );
};

function Index() {
  const verifySection = [
    {
      title: "Link your phone number",
      subtitle: "Enter your phone number for verification",
      codeFormName: "phoneNumber",
      codeFormLabel: "Phone Number",
      inputWithIcon: true,
      verifyHeader: "Verify your phone number",
      verifyDesc:
        "A verification code has been sent to the phone number provided above, kindly type it in the field below to verify the phone number."
    },
    {
      title: "Link your email address",
      subtitle: "Enter your email address for verification",
      codeFormName: "email",
      codeFormLabel: "Email Address",
      inputWithIcon: false,
      verifyHeader: "Verify your email address",
      verifyDesc:
        "A verification code has been sent to the email address provided above, kindly type it in the field below to verify email address."
    }
  ];

  return (
    <>
      {verifySection.map((props, i) => {
        return <VerifySection key={props.title + i} {...props} />;
      })}
    </>
  );
}

export default Index;
