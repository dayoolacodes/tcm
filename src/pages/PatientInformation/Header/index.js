/* eslint-disable indent */
import useWindowSize from "customHooks/useWindowSize";
import React from "react";
import { PatientInformationContext } from "..";
import { Container } from "./styles";

function Index() {
  const { dispatch, state } = React.useContext(PatientInformationContext);
  const { width } = useWindowSize();

  const tabs = [
    {
      key: "patientInformation",
      value: "Patient Information"
    },
    {
      key: "familyDoctor",
      value: "Family Doctor"
    },
    {
      key: "familyInformation",
      value: "Family Information",
      showOnlyMobile: true
    },
    {
      key: "emergencyContact",
      value: "Emergency Contact",
      showOnlyMobile: true
    }
  ];

  const handleDispatch = e => {
    const dispatchType = e?.target?.name?.toUpperCase().replace(" ", "_");
    dispatch({ type: dispatchType });
  };

  return (
    <Container>
      {width >= 700
        ? tabs
            .filter(e => !e?.showOnlyMobile)
            .map((e, i) => {
              return (
                <button
                  name={e?.value}
                  className={state.view === e?.key ? "active" : ""}
                  onClick={handleDispatch}
                  key={e.key + i}
                >
                  {e?.value}
                </button>
              );
            })
        : tabs.map((e, i) => {
            return (
              <button
                name={e?.value}
                className={state.view === e?.key ? "active" : ""}
                onClick={handleDispatch}
                key={e.key + i}
              >
                {e?.value}
              </button>
            );
          })}
    </Container>
  );
}

export default Index;
