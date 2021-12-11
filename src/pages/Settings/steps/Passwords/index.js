import { TextInput } from "components/inputs";
import { Form, Formik } from "formik";
import React from "react";
import { Container } from "./styles";

const PasswordSetting = ({ title, subtitle, inputArray }) => {
  const defaultValues = {
    confirmPassword: "",
    newPassword: "",
    currentPassword: ""
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
              {inputArray?.map((e, i) => {
                return <TextInput {...e} key={e?.name + i} />;
              })}
              <button type="submit">Save Changes</button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="section-divider"></div>
    </Container>
  );
};

function Index() {
  const setPasswordSection = [
    {
      title: "Change Password",
      subtitle: "Regularly changing passwords helps account security",
      inputArray: [
        {
          label: "Current Password",
          name: "currentPassword",
          placeholder: "Enter current password",
          type: "password"
        },
        {
          label: "New Password",
          name: "newPassword",
          placeholder: "Enter new password",
          type: "password"
        },
        {
          label: "Confirm Password",
          name: "confirmPassword",
          placeholder: "Confirm new password",
          type: "password"
        }
      ],
      codeFormName: "phoneNumber",
      codeFormLabel: "Phone Number",
      inputWithIcon: true,
      verifyHeader: "Verify your phone number",
      verifyDesc:
        "A verification code has been sent to the phone number provided above, kindly type it in the field below to verify the phone number."
    },
    {
      title: "Payment Password",
      subtitle: "Use when making balance payment or service",
      inputArray: [
        {
          label: "Current Password",
          name: "currentPassword",
          placeholder: "Enter current password",
          type: "password"
        },
        {
          label: "New Password",
          name: "newPassword",
          placeholder: "Enter new password",
          type: "password"
        },
        {
          label: "Confirm Password",
          name: "confirmPassword",
          placeholder: "Confirm new password",
          type: "password"
        }
      ],
      codeFormName: "phoneNumber",
      codeFormLabel: "Phone Number",
      inputWithIcon: true,
      verifyHeader: "Verify your phone number",
      verifyDesc:
        "A verification code has been sent to the phone number provided above, kindly type it in the field below to verify the phone number."
    }
  ];

  return (
    <>
      {setPasswordSection.map((props, i) => {
        return <PasswordSetting key={props.title + i} {...props} />;
      })}
    </>
  );
}

export default Index;
