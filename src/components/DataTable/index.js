/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { TableFooterDiv } from "./TableFooter";
import { Container, TableWrapper, StatusDot, QuickAction } from "./styles";
import { AiOutlineLink } from "react-icons/ai";
import { RiArrowUpDownFill } from "react-icons/ri";
import { DataTableHelpers } from "utils/DataTableHelpers";
import CustomCheckBox from "components/CustomCheckBox";
import { ReactComponent as DownloadIcon } from "assets/download-icon.svg";

export default function DataTable(props) {
  const {
    tableData,
    validTableKeys,
    onRowClick,
    totalItemCount,
    noOfItemsPerPage,
    onItemsPerPageChange,
    pageIndex,
    onPageIndexChange,
    onCheckClick,
    onPaymentLinkBtnClick,
    showIndex
  } = props;

  const [showMobileView, setShowMobileView] = useState(false);
  const [currentData, setCurrentData] = useState(tableData);

  /**
   *
   * @param {string} key => JSON key to sort the Array wrt
   * @param {bool} sortByString => sort by chars or digits(numbers)
   */
  let sortColumn = (key, sortByString = true) => {
    onPageIndexChange(0); //Reset the page index
    //Sort By column
    let newObjArr = DataTableHelpers.sortObjArrByColumn(currentData, key, sortByString);
    setCurrentData(newObjArr);
  };

  React.useLayoutEffect(() => {
    function updateSize() {
      const width = window.innerWidth;
      //   const height = window.innerHeight;
      if (width <= 700 && !showMobileView) {
        setShowMobileView(true);
      } else if (width > 700 && showMobileView) {
        setShowMobileView(false);
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, [showMobileView]);

  const noOfPages = Math.ceil(totalItemCount / noOfItemsPerPage);
  return (
    <Container>
      <TableWrapper>
        <table id="dataTable">
          <thead>
            <tr className="header">
              {currentData && showIndex && <th>#</th>}
              {Object.entries(validTableKeys).map(([key, value]) => {
                // console.log(JSON.stringify(key), JSON.stringify(head));

                if (value?.isSortable) {
                  return (
                    <th
                      key={key + value}
                      className="sortColumn"
                      onClick={() => sortColumn(key, value.sortByString)}
                    >
                      {value.title} <RiArrowUpDownFill className="sortIcon" />
                    </th>
                  );
                }
                if (showMobileView && value?.showOnMobile === false) {
                  return;
                }
                return <th key={key + value}>{value.title}</th>;
              })}
            </tr>
          </thead>
          {/* TABLE ROWS FROM JSON  */}
          <tbody>
            {currentData
              // .slice(pageIndex * noOfItemsPerPage, pageIndex * noOfItemsPerPage + noOfItemsPerPage)
              .map((data, index) => {
                return (
                  <tr key={index}>
                    {showIndex && <td key={index}>{index + 1}</td>}
                    {Object.entries(validTableKeys).map(([key, value]) => {
                      if (value?.showOnOnlyMobile) {
                        return <td key={key + value} />;
                      }
                      if (value?.isCheckBox) {
                        return (
                          <td key={key + value}>
                            <CustomCheckBox
                              check={data?.[key]}
                              onClick={e => {
                                e.stopPropagation();
                                onCheckClick(data);
                              }}
                            />
                          </td>
                        );
                      }
                      if (value?.isPaymentLinkBtn) {
                        return (
                          <td key={key + value}>
                            <div
                              className="pLink"
                              onClick={e => {
                                e.stopPropagation();
                                onPaymentLinkBtnClick(data);
                              }}
                            >
                              <AiOutlineLink />
                              <span>Payment link</span>
                            </div>
                          </td>
                        );
                      }
                      if (value?.isImage) {
                        return (
                          <td key={key + value}>
                            <img src={`${data?.[key]}`} alt="squad img" />
                          </td>
                        );
                      }
                      if (value?.showDot) {
                        return (
                          <td key={key + value}>
                            <StatusDot status={data?.[key]?.toLowerCase()} />
                            {data?.[key]}
                          </td>
                        );
                      }
                      if (value?.addBadge) {
                        return (
                          <td key={key + value}>
                            <span className="wrap">{data?.[key]}</span>
                          </td>
                        );
                      }
                      if (value?.addCopyPreview) {
                        return (
                          <td key={key + value}>
                            {data?.[key]}
                            <QuickAction
                              className="hideBtn"
                              onClick={e => {
                                e.stopPropagation();
                                DataTableHelpers.copyLink(e, data[key]);
                              }}
                            >
                              &nbsp;copy&nbsp;&nbsp;
                            </QuickAction>
                            <QuickAction
                              className="hideBtn"
                              onClick={e => {
                                e.stopPropagation();
                                DataTableHelpers.previewlink(data[key]);
                              }}
                            >
                              preview
                            </QuickAction>
                          </td>
                        );
                      }
                      if (value?.addCopy) {
                        //**************if data is in form of HTML tag, extract string*************//
                        const extractValueFromTag =
                          data[key]?.props?.children?.find(data => typeof data === "string") &&
                          data[key]?.props?.children[0];
                        return (
                          <td key={key + value}>
                            {data?.[key]}
                            <QuickAction
                              className="hideBtn"
                              onClick={e => {
                                e.stopPropagation();
                                DataTableHelpers.copyLink(e, extractValueFromTag ?? data[key]);
                              }}
                            >
                              &nbsp;copy&nbsp;&nbsp;
                            </QuickAction>
                          </td>
                        );
                      }
                      if (showMobileView && value?.showOnMobile === false) {
                        return;
                      }
                      if (value?.textUnderline) {
                        return (
                          <td key={key + value} onClick={() => onRowClick(data)}>
                            <span className="underline"> {data?.[key]} </span>
                          </td>
                        );
                      }
                      if (value?.isButton) {
                        return (
                          <td key={key + value} onClick={() => onRowClick(data)}>
                            <button className="btn">
                              {" "}
                              {data?.[key]} <DownloadIcon />{" "}
                            </button>
                          </td>
                        );
                      }
                      return <td key={key + value}>{data?.[key]}</td>;
                    })}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </TableWrapper>

      <TableFooterDiv
        noOfPages={noOfPages}
        pageIndex={pageIndex}
        onBtnClick={idx => onPageIndexChange(idx)}
        itemsPerPage={noOfItemsPerPage}
        itemsPerPageChange={no => {
          onPageIndexChange(0); //reset index
          onItemsPerPageChange(no);
        }}
      />
    </Container>
  );
}
