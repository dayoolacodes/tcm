import React, { useState } from "react";
import { TableFooterDiv } from "./TableFooter";
import {
  Container,
  ActionHeader,
  TableWrapper,
  FilterWrapper,
  VerticalDivider,
  Text,
  ActionButton,
  InputWapper,
  Input,
  StatusDot,
  QuickAction
} from "./styles";
import { FiFilter } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { RiArrowUpDownFill } from "react-icons/ri";
import TableData from "dummy/TableData";
// import CsvDownload from "react-json-to-csv";
import { DataTableHelpers } from "utils/DataTableHelpers";
import CustomCheckBox from "components/CustomCheckBox";

const dummyTableData = TableData; //API Data that's immutable

export function ExampleDataTable(props) {
  const [onInputFocus, setOnInputFocus] = useState(false);
  const [currentData, setCurrentData] = useState(dummyTableData);
  const [pageIndex, setPageIndex] = useState(0);
  const [noOfItemsPerPage, setNoOfItemsPerPage] = useState(8); //Total no of rows

  const onSearchKeyup = event => {
    setPageIndex(0); //reset page index to 0
    // input text
    let searchText = event.target.value.trim().toLowerCase();
    //Sort Data based on the imput
    let newObjArr = DataTableHelpers.searchInput(dummyTableData, searchText);
    setCurrentData(newObjArr);
  };

  /**
   *
   * @param {string} key => JSON key to sort the Array wrt
   * @param {bool} sortByString => sort by chars or digits(numbers)
   */
  let sortColumn = (key, sortByString = true) => {
    setPageIndex(0); //Reset the page index
    //Sort By column
    let newObjArr = DataTableHelpers.sortObjArrByColumn(currentData, key, sortByString);
    setCurrentData(newObjArr);
  };

  const noOfPages = Math.ceil(currentData.length / noOfItemsPerPage);

  return (
    <Container>
      <ActionHeader>
        <FilterWrapper>
          <FiFilter className="filterIcon" />
          <span>Filter By</span>
          <VerticalDivider />
          <Text>All Payment Links</Text>
          {/* <Spacer /> */}
        </FilterWrapper>
        <InputWapper onChangeFocus={onInputFocus}>
          <BiSearchAlt2 className="icon" />
          <Input
            placeholder="Search payment links and products"
            onKeyUp={onSearchKeyup}
            onFocus={() => setOnInputFocus(true)}
            onBlur={() => setOnInputFocus(false)}
            id="searchInput"
          />
        </InputWapper>
        {/* <CsvDownload data={currentData} /> */}
        {/* <ActionButton>
          <AiOutlinePlusCircle className="buttonIcon" />
          <span>Add Product</span>
        </ActionButton> */}
        <ActionButton>
          <AiOutlinePlus className="buttonIcon big" />
          <span>New Payment Link</span>
        </ActionButton>
      </ActionHeader>
      <TableWrapper>
        <table id="dataTable">
          <thead>
            <tr className="header">
              <th> </th>
              <th>Page Name</th>
              <th>Link Type</th>
              <th>Date Created</th>
              <th className="sortColumn" onClick={() => sortColumn("amount", false)}>
                Amount <RiArrowUpDownFill className="sortIcon" />
              </th>
              <th>Payment Link</th>
              <th>Amount</th>
              <th className="sortColumn" onClick={() => sortColumn("linkStatus")}>
                Link Status <RiArrowUpDownFill className="sortIcon" />
              </th>
            </tr>
          </thead>
          {/* TABLE ROWS FROM JSON  */}
          <tbody>
            {currentData
              .slice(pageIndex * noOfItemsPerPage, pageIndex * noOfItemsPerPage + noOfItemsPerPage)
              .map((data, index) => (
                <tr key={index}>
                  <td className="checkbox">
                    <CustomCheckBox
                      check={false}
                      title="Hello"
                      onClick={() => console.log("----")}
                    />
                  </td>
                  <td>{data.pageName}</td>
                  <td>
                    <span className="wrap">{data.linkType}</span>
                  </td>
                  <td>{data.dateCreated}</td>
                  <td>{data.amount}</td>
                  <td>
                    {data.paymentLink}
                    <QuickAction
                      className="hideBtn"
                      onClick={e => DataTableHelpers.copyLink(e, data.paymentLink)}
                    >
                      &nbsp;copy&nbsp;&nbsp;
                    </QuickAction>
                    <QuickAction
                      className="hideBtn"
                      onClick={e => DataTableHelpers.previewlink(data.paymentLink)}
                    >
                      preview
                    </QuickAction>
                  </td>
                  <td>
                    <img src={`${data.imagePath}`} alt="payment-link img" />
                  </td>
                  <td>
                    <StatusDot status={data.linkStatus} />
                    {data.linkStatus}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </TableWrapper>

      <TableFooterDiv
        noOfPages={noOfPages}
        pageIndex={pageIndex}
        onBtnClick={idx => setPageIndex(idx)}
        itemsPerPage={noOfItemsPerPage}
        itemsPerPageChange={no => {
          setPageIndex(0); //reset index
          setNoOfItemsPerPage(no);
        }}
      />
    </Container>
  );
}
