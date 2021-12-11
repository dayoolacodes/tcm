import React from "react";
import Step1 from "./steps/Patient_Information";
import Step2 from "./steps/Family_Info";
import Step3 from "./steps/Family_Doctor";
import Step4 from "./steps/Emergency_Contact";
import HeaderTabs from "./Header";
import Ellipse6 from "assets/Ellipse5.png";
import styled from "@emotion/styled";

export const PatientInformationContext = React.createContext();
PatientInformationContext.displayName = "PatientInformationContext";

const Index = () => {
  const { Provider } = PatientInformationContext;

  const [values, setValues] = React.useState({});
  const [state, dispatch] = React.useReducer(PatientInfoReducer, {
    view: "patientInformation"
    // values: initialvalues,
  });

  function renderView() {
    const { view } = state;
    switch (view) {
      case "patientInformation":
      default:
        return <Step1 />;
      case "familyInformation":
        return <Step2 />;
      case "familyDoctor":
        return <Step3 />;
      case "emergencyContact":
        return <Step4 />;
    }
  }

  return (
    <Provider value={{ state, dispatch, values, setValues }}>
      <Container>
        <HeaderTabs />
        {renderView()}
        <img src={Ellipse6} alt="ellipse" />
      </Container>
    </Provider>
  );
};

export default Index;

function PatientInfoReducer(state, action) {
  switch (action.type) {
    case "PATIENT_INFORMATION":
      return { view: "patientInformation" };
    case "FAMILY_DOCTOR":
      return { view: "familyDoctor" };
    case "FAMILY_INFORMATION":
      return { view: "familyInformation" };
    case "EMERGENCY_CONTACT":
      return { view: "emergencyContact" };

    default:
      return state;
  }
}

const Container = styled.div`
  overflow: auto;
  position: relative;
  img {
    position: fixed;
    left: 150px;
    bottom: -40px;
    z-index: -1;
    filter: blur(5px);
    opacity: 0.3;
    @media all and (max-width: 768px) {
      display: none;
    }
  }
`;
