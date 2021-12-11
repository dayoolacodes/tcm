import React, { useState } from "react";
import TableData from "dummy/TableData";
// import CsvDownload from "react-json-to-csv";
import DataTable from ".";

const dummyTableData = TableData; //API Data that's immutable

export function DemoTable(props) {
  const [pageIndex, setPageIndex] = useState(0);
  const [noOfItemsPerPage, setNoOfItemsPerPage] = useState(8); //Total no of rows

  const validTableKeys = {
    checkbox: {
      title: "",
      isCheckBox: true,
      addBadge: false,
      isSortable: false,
      isImage: false,
      addCopyPreview: false
    },
    pageName: {
      title: "Page Name",
      addBadge: false,
      isSortable: false,
      isImage: false,
      addCopyPreview: false,
      showOnMobile: true
    },
    linkType: {
      title: "Link Type",
      addBadge: true,
      isSortable: false,
      isImage: false,
      addCopyPreview: false
    },
    amount: {
      title: "Amount",
      addBadge: false,
      isSortable: true,
      isImage: false,
      addCopyPreview: false,
      sortByString: false
    },
    paymentLink: {
      title: "Payment Link",
      addBadge: false,
      isSortable: false,
      isImage: false,
      addCopyPreview: true
    },
    imagePath: {
      title: "Photo",
      addBadge: false,
      isSortable: false,
      isImage: true,
      addCopyPreview: false
    },
    linkStatus: {
      title: "Link Status",
      addBadge: false,
      isSortable: true,
      isImage: false,
      addCopyPreview: false,
      showDot: true,
      dotValue: "online",
      showOnMobile: true
    },
    dateCreated: {
      title: "Date Created",
      addBadge: false,
      isSortable: false,
      isImage: false,
      addCopyPreview: false,
      showOnMobile: true
    }
  };

  const onRowClick = rowData => {
    console.log(rowData);
  };
  const onCheckClick = rowData => {
    console.log(rowData);
  };

  return (
    <DataTable
      tableData={dummyTableData}
      totalItemCount={dummyTableData?.length}
      validTableKeys={validTableKeys}
      onRowClick={onRowClick}
      noOfItemsPerPage={noOfItemsPerPage}
      onCheckClick={onCheckClick}
      onItemsPerPageChange={newPage => setNoOfItemsPerPage(newPage)}
      pageIndex={pageIndex}
      onPageIndexChange={idx => setPageIndex(idx)}
    />
  );
}
