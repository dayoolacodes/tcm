import dayjs from "dayjs";

export function dateToApiFormat(date) {
  if (date == null) {
    return dayjs().format("YYYY-MM-DD HH:mm:ss");
  }
  return dayjs(date).format("YYYY-MM-DD HH:mm:ss");
}
/**
 *
 * @param {Date Range} date
 * @returns {String datestring} in format: "YYYY-MM-DD HH:mm:ss"
 */
export function formatDateToMidnight(range) {
  let dateRes;
  switch (range) {
    case "1d":
      dateRes = dayjs();
      break;
    case "7d":
      dateRes = dayjs().subtract(7, "day");
      break;
    case "1m":
      dateRes = dayjs().subtract(1, "month");
      break;
    case "1y":
      dateRes = dayjs().subtract(1, "year");
      break;

    default:
      dateRes = dayjs().subtract(7, "day");
      break;
  }

  let midNightDate = new Date(dateRes);
  midNightDate.setHours(0, 0, 0, 0); //   stripe down to midnight ...
  return dateToApiFormat(midNightDate);
}
/**
 *
 * @param {String} dateRange
 * @returns correct format
 */
export const dateRangeFormat = dateRange => {
  let res;
  switch (dateRange) {
    case "1d":
      res = "Today";
      break;
    case "7d":
      res = "Last 7 days";
      break;
    case "1m":
      res = "Last 30 days";
      break;
    case "1y":
      res = "Last one year";
      break;

    default:
      res = "Last 7 days";
      break;
  }

  return res;
};
