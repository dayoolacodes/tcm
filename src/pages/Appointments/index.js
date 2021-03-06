import React from "react";
import Step1 from "./steps/step1";
import AppointementDetails from "./steps/AppointementDetails";
import CalendarView from "./steps/CalendarView";
import Subheader from "./Subheader";
import MapView from "./steps/MapView";

export const AppointmentContext = React.createContext();
AppointmentContext.displayName = "AppointmentContext";

const Index = () => {
  const { Provider } = AppointmentContext;

  const [values, setValues] = React.useState({});
  const [state, dispatch] = React.useReducer(AppointmentReducer, {
    view: "step1"
    // values: initialvalues,
  });

  function renderView() {
    const { view } = state;
    switch (view) {
      case "step1":
      default:
        return <Step1 />;
      case "booked":
      case "cancelled":
      case "completed":
        return <AppointementDetails Details={values?.appointementDetails} />;
      case "calendar":
        return <CalendarView />;
      case "map":
        return <MapView />;
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

function AppointmentReducer(state, action) {
  switch (action.type) {
    case "STEP1":
      return { view: "step1" };
    case "BOOKED":
      return { view: "booked" };
    case "CANCELLED":
      return { view: "cancelled" };
    case "COMPLETED":
      return { view: "completed" };
    case "CALENDAR":
      return { view: "calendar" };
    case "MAP":
      return { view: "map" };

    default:
      return state;
  }
}
