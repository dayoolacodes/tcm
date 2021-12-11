import React from "react";
// import { Container } from "./styles";
import Subheader from "./Subheader";
import Step1 from "./steps/Step1";
import Verify from "./steps/Verify";
import Passwords from "./steps/Passwords";
import SecurityQuestions from "./steps/SecurityQuestions";

export const SettingsContext = React.createContext();
SettingsContext.displayName = "SettingsContext";

const Index = () => {
  const { Provider } = SettingsContext;

  const [values, setValues] = React.useState({});
  const [state, dispatch] = React.useReducer(SettingsReducer, {
    view: "step1"
    // values: initialvalues,
  });

  function renderView() {
    const { view } = state;
    switch (view) {
      case "step1":
      default:
        return <Step1 />;
      case "verification":
        return <Verify />;
      case "passwords":
        return <Passwords />;
      case "security-questions":
        return <SecurityQuestions />;
    }
  }

  return (
    <Provider value={{ state, dispatch, values, setValues }}>
      <Subheader />
      {renderView()}
    </Provider>
  );
};

export default Index;

function SettingsReducer(state, action) {
  switch (action.type) {
    case "STEP1":
      return { view: "step1" };
    case "VERIFY":
      return { view: "verification" };
    case "PASSWORDS":
      return { view: "passwords" };
    case "SECURITYQUESTIONS":
      return { view: "security-questions" };
    default:
      return state;
  }
}
