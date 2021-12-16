import React, { useState } from "react";
import { Container } from "./styles";
import { ReactComponent as CalendarIcon } from "assets/calendar.svg";
import { ReactComponent as MapMarker } from "assets/map-marker.svg";
import DataTable from "components/DataTable";
import { validTableKeys, dummyTableData } from "../../utils";
import { AppointmentContext } from "pages/Appointments";

const Index = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [noOfItemsPerPage, setNoOfItemsPerPage] = useState(10); //Total no of rows
  const { dispatch, setValues } = React.useContext(AppointmentContext);

  const onRowClick = rowData => {
    //pass row data to the parent context api
    setValues(val => ({
      ...val,
      appointementDetails: rowData
    }));

    switch (rowData.status.toLowerCase()) {
      case "booked":
        return dispatch({ type: "BOOKED" });
      case "completed":
        return dispatch({ type: "COMPLETED" });
      case "cancelled":
        return dispatch({ type: "CANCELLED" });
      default:
        return;
    }
  };

  return (
    <Container>
      <div className="top-row">
        <div className="name-date">
          <div className="initials">JD</div>
          <div>
            <p className="name">John Doe</p>
            <div className="date">
              <span>Joined 15th March, 2021 </span>
            </div>
          </div>
        </div>
        <div className="right">
          <p>Book Appointment by:</p>
          <div className="btn-wrap">
            <button onClick={() => dispatch({ type: "CALENDAR" })}>
              Calendar <CalendarIcon />
            </button>
            <button onClick={() => dispatch({ type: "MAP" })}>
              Map <MapMarker />
            </button>
          </div>
        </div>
      </div>
      <div className="sec-row">
        <DataTable
          tableData={dummyTableData}
          totalItemCount={dummyTableData?.length}
          validTableKeys={validTableKeys}
          onRowClick={onRowClick}
          noOfItemsPerPage={noOfItemsPerPage}
          onItemsPerPageChange={newPage => setNoOfItemsPerPage(newPage)}
          pageIndex={pageIndex}
          onPageIndexChange={idx => setPageIndex(idx)}
        />
      </div>
    </Container>
  );
};

export default Index;
