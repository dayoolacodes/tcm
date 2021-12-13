import { InputWithIcon, SelectInput3, TextInput } from "components/inputs";
import { Spinner } from "components/loaders";
import { Formik } from "formik";
import React from "react";
import { Container } from "../styles";
import { ReactComponent as DropDIcon } from "assets/select-dropdown-icon.svg";
import { ReactComponent as PhoneIcon } from "assets/phone-icon.svg";

const defaultValues = {
  firstName: "",
  lastName: "",
  relationshipToPatient: "",
  phoneNumber: "",
  mobileNumber: ""
};

function Index() {
  return (
    <Container>
      <div className="wrapper">
        <div className="header">
          <h1 className="title">Family Information</h1>
          <span className="subtitle">Enter your family information</span>
        </div>
        <Formik
          initialValues={defaultValues}
          // validate={patientValidation}
          // onSubmit={values => handleSubmit(values)}
        >
          {({ isSubmitting, values, handleSubmit }) => (
            <>
              <form className="patient-info-form" onSubmit={handleSubmit}>
                <TextInput
                  name="firstName"
                  label="First Name"
                  type="text"
                  placeholder="Enter First Name"
                />
                <TextInput
                  name="lastName"
                  label="Last Name"
                  type="text"
                  placeholder="Enter Last Name"
                />
                <SelectInput3
                  name="relationshipToPatient"
                  label="Relationship to Patient"
                  // type="text"
                  placeholder="Select..."
                  icon={<DropDIcon />}
                />
                <div className="row">
                  <InputWithIcon
                    name="phoneNumber"
                    label="Phone Number"
                    type="number"
                    placeholder="(236)-878-9909"
                    icon={<PhoneIcon />}
                  />
                  <div className="spacer" />
                  <InputWithIcon
                    name="mobileNumber"
                    label="Mobile Number"
                    type="number"
                    placeholder="(236)-878-9909"
                    icon={<PhoneIcon />}
                  />
                </div>

                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? <Spinner /> : <span>Save Changes</span>}
                </button>
              </form>
            </>
          )}
        </Formik>
      </div>
    </Container>
  );
}

export default Index;
