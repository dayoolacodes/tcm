import React, { useState } from "react";
import { Container } from "./styles";
import DataTable from "components/DataTable";
import { validTableKeys, dummyTableData } from "./utils";
import Subheader from "./Subheader";

const Index = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [noOfItemsPerPage, setNoOfItemsPerPage] = useState(10); //Total no of rows
  // const { dispatch, setValues } = React.useContext(AppointmentContext);

  const onRowClick = rowData => {
    // console.log(rowData);
  };

  return (
    <>
      <Subheader />
      <Container>
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
    </>
  );
};

export default Index;
