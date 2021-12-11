import { StatusDot } from "components/DataTable/styles";
import { TextAreaInput } from "components/inputs";
import { AppointmentContext } from "pages/Appointments";
import React from "react";
import { Container } from "./styles";

function Index({ Details }) {
  const { dispatch } = React.useContext(AppointmentContext);
  const rowItems = [
    {
      key: "Appointment Date",
      value: "Monday, 20 December 2021"
    },
    {
      key: "Appointment Time",
      value: "10:00 AM"
    },
    {
      key: "Appointment Status",
      value: (
        <>
          <StatusDot status={Details?.status.toLowerCase()} />
          {Details?.status ?? ""}
        </>
      )
    },
    {
      key: "",
      value: "break"
    },
    {
      key: "Doctor",
      value: "Hong Wang"
    },
    {
      key: "Symptom Category",
      value: `${Details?.appointment_type ?? ""}`
    },
    {
      key: "Clinic Name",
      value: "Landsowne Medical Centre"
    },
    {
      key: "Address",
      value: `${Details?.address ?? ""}`
    },
    {
      key: "Note",
      value: <TextAreaInput />
    }
  ];

  return (
    <Container>
      {/* <div className="breadcrumb">
        <span>{"> "}Details</span>
      </div> */}
      <div className="wrapper">
        {rowItems.map((e, index) => {
          if (e?.value === "break") {
            return <div className="row hLine" key={e?.key + index} />;
          }
          return (
            <div className="row" key={e?.key + index}>
              <span className="key">{e?.key}</span>
              <span className="value">{e?.value}</span>
            </div>
          );
        })}
        <div className="btn-wrap">
          <button onClick={() => dispatch({ type: "STEP1" })}>Back</button>
          {Details?.status.toLowerCase() === "booked" && <button>Cancel Appointment</button>}
        </div>
      </div>
    </Container>
  );
}

export default Index;
