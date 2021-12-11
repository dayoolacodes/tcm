import { InputWithIcon, SelectInput3, TextInput } from "components/inputs";
import { Spinner } from "components/loaders";
import { Formik } from "formik";
import React from "react";
import { Container } from "../styles";
import { ReactComponent as DropDIcon } from "assets/select-dropdown-icon.svg";
import { ReactComponent as CalendarIcon } from "assets/calendarInput.svg";
import { ReactComponent as PhoneIcon } from "assets/phone-icon.svg";
import FamilyInfo from "../Family_Info";
import EmergencyContact from "../Emergency_Contact";
import useWindowSize from "customHooks/useWindowSize";

const defaultValues = {};

function Index() {
  const { width } = useWindowSize();
  return (
    <Container>
      <div className="wrapper">
        <div className="header">
          <h1 className="title">Patient Information</h1>
          <span className="subtitle">Enter your patient information</span>
        </div>
        <Formik
          initialValues={defaultValues}
          // validate={patientValidation}
          // onSubmit={values => handleSubmit(values)}
        >
          {({ isSubmitting, values, handleSubmit }) => (
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
                <div className="row">
                  <TextInput
                    name="middleName"
                    label="Middle Name"
                    type="text"
                    placeholder="Enter your middle name"
                  />
                  <div className="spacer" />
                  <SelectInput3
                    name="city"
                    label="City"
                    type="text"
                    placeholder="Where do you live?"
                    icon={<DropDIcon />}
                  >
                    <option value="britishColumbia">British Columbia</option>
                    <option value="ontario">Ontario</option>
                    <option value="novaScotia">Nova Scotia</option>
                  </SelectInput3>
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
                    icon={<DropDIcon />}
                  />
                  <div className="spacer" />
                  <TextInput
                    name="postalCode"
                    label="Postal Code"
                    type="number"
                    placeholder="Enter your middle name"
                  />
                </div>
                <div className="row">
                  <InputWithIcon
                    name="phoneNumber"
                    label="Phone Number"
                    type="number"
                    placeholder="(000)-111-2222"
                    icon={<PhoneIcon />}
                  />
                  <div className="spacer" />
                  <InputWithIcon
                    name="mobileNumber"
                    label="Mobile Number"
                    type="number"
                    placeholder=" "
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
                <div className="row">
                  <InputWithIcon
                    name="dateOfBirth"
                    label="Date of Birth"
                    type="date"
                    placeholder=""
                    icon={<CalendarIcon />}
                  />
                  <div className="spacer" />
                  <SelectInput3 name="sex" label="Sex" placeholder="Select" icon={<DropDIcon />}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </SelectInput3>
                </div>
                <div className="row">
                  <TextInput
                    name="occupation"
                    label="Occupation"
                    type="text"
                    placeholder="e.g. Product Manager"
                  />
                  <div className="spacer" />
                  <SelectInput3
                    name="maritalStatus"
                    label="Marital Status"
                    placeholder="Select"
                    icon={<DropDIcon />}
                  >
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                  </SelectInput3>
                </div>
                <div className="row">
                  <SelectInput3
                    name="residencyStatus"
                    label="Residency Status"
                    placeholder="Select"
                    icon={<DropDIcon />}
                  ></SelectInput3>
                  <div className="spacer" />
                  <TextInput
                    name="careCardNumber"
                    label="Care Card Number"
                    type="text"
                    placeholder=" "
                  />
                </div>
                <div className="row">
                  <TextInput name="ICBCCaseNo." label="ICBC Case No." type="text" placeholder=" " />
                  <div className="spacer" />
                  <TextInput
                    name="workSafeBCCaseNo"
                    label="WorkSafeBC Case No."
                    type="text"
                    placeholder=" "
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
      {width >= 700 && (
        <>
          <div className="section-divider" />
          <FamilyInfo />
          <div className="section-divider" />
          <EmergencyContact />
        </>
      )}
    </Container>
  );
}

export default Index;
