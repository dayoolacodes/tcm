import { InputWithIcon, SelectInput3, TextAreaInput3, TextInput } from "components/inputs";
import { Spinner } from "components/loaders";
import { Formik } from "formik";
import React from "react";
import { Container } from "../styles";
import { ReactComponent as DropDIcon } from "assets/select-dropdown-icon.svg";
import { ReactComponent as PhoneIcon } from "assets/phone-icon.svg";

const defaultValues = {};

function Index() {
  const citiesOption = [
    {
      value: "britishColumbia",
      label: "British Columbia"
    },
    {
      value: "ontario",
      label: "Ontario"
    },
    {
      value: "novaScotia",
      label: "Nova Scotia"
    }
  ];

  return (
    <Container>
      <div className="wrapper">
        <div className="header">
          <h1 className="title">Family Doctor Information</h1>
          <span className="subtitle">Enter family doctor information</span>
        </div>
        <Formik
          initialValues={defaultValues}
          // validate={patientValidation}
          // onSubmit={values => handleSubmit(values)}
        >
          {({ isSubmitting, values, handleSubmit, setFieldValue }) => (
            <>
              <form className="patient-info-form" onSubmit={handleSubmit}>
                <div className="row">
                  <TextInput
                    name="firstName"
                    label="First Name"
                    type="text"
                    placeholder="Enter First Name"
                  />
                  <div className="spacer" />
                  <TextInput
                    name="lastName"
                    label="Last Name"
                    type="text"
                    placeholder="Enter Last Name"
                  />
                </div>
                <TextInput
                  name="address"
                  label="Address"
                  type="text"
                  placeholder="Enter your address"
                />
                <div className="row">
                  <SelectInput3
                    name="province"
                    label="Province"
                    type="text"
                    placeholder="Select..."
                    options={citiesOption}
                    setFieldValue={setFieldValue}
                  />
                  <div className="spacer" />
                  <SelectInput3
                    name="province"
                    label="Province"
                    type="text"
                    placeholder="Select..."
                    icon={<DropDIcon />}
                    options={[]}
                  />
                </div>
                <div className="row">
                  <TextInput name="postalCode" label="Postal Code" type="number" placeholder="" />
                  <div className="spacer" />
                  <InputWithIcon
                    name="phoneNumber"
                    label="Phone Number"
                    type="number"
                    placeholder="(000)-111-2222"
                    icon={<PhoneIcon />}
                  />
                </div>
                <TextInput
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="example@email.com"
                />
                <TextInput name="fax" label="Fax" type="fax" placeholder=" " />
                <TextAreaInput3
                  name="additionalNotes"
                  label="Additional Notes"
                  type="text"
                  placeholder=" "
                />
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
