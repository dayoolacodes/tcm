import React from "react";
import LocalStorageUtils from "utils/LocalStorageUtils";
import { FooterSelectInput, FooterText, TableFooter, TableFooterButton } from "./styles";

export const TableFooterDiv = props => {
  const {
    noOfPages,
    pageIndex,
    onBtnClick,
    itemsPerPageChange,
    itemsPerPage
    // showMobileView
  } = props;
  let lastPageIndex = noOfPages - 1;
  return (
    <TableFooter>
      <FooterText>Show</FooterText>
      <FooterSelectInput
        onChange={e => {
          const val = parseInt(e.target.value);
          LocalStorageUtils.setPerPage(val);
          itemsPerPageChange(val);
        }}
        value={itemsPerPage}
      >
        <option value={8}>8</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
        <option value={500}>500</option>
      </FooterSelectInput>
      <FooterText mr={36}>Results</FooterText>

      {/* Prev Button  */}
      <TableFooterButton
        disabled={pageIndex !== 0 ? "" : true}
        onClick={() => onBtnClick(pageIndex - 1)}
      >
        Prev
      </TableFooterButton>
      {/* Loop through all the pages  */}
      {[...Array(noOfPages).keys()].map(i => {
        let btn = (
          <TableFooterButton key={i} onClick={() => onBtnClick(i)} current={i === pageIndex}>
            {i + 1}
          </TableFooterButton>
        );

        let returnBtn = "";
        if (i === lastPageIndex) {
          returnBtn = btn;
        } else if (pageIndex === i || pageIndex + 1 === i) {
          returnBtn = btn;
        } else if (
          pageIndex + 1 >= lastPageIndex &&
          (i + 2 === lastPageIndex || i + 1 === lastPageIndex)
        ) {
          returnBtn = btn;
        } else if (pageIndex + 2 === i && i !== lastPageIndex) {
          returnBtn = <span key={i}>&nbsp;&nbsp;&nbsp;...</span>;
        }

        return returnBtn;
      })}
      {/* Next Button  */}
      <TableFooterButton
        onClick={() => onBtnClick(pageIndex + 1)}
        disabled={pageIndex !== lastPageIndex ? "" : true}
      >
        Next
      </TableFooterButton>
    </TableFooter>
  );
};
