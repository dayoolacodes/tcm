import dayjs from "dayjs";
import isEmpty from "lodash.isempty";

export function ellipsis(text = "", maxLength = 20) {
  let ret = text;
  if (ret.length > maxLength) {
    ret = ret.substr(0, maxLength - 3) + "...";
  }
  return ret;
}
// Formatting Cash value with K M B T
export const formatCashToKMBT = n => {
  if (n < 1e3) return n;
  if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
  if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
  if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
  if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
};
export const formateToMoney = num => {
  num = num ?? 0;
  return (Math.floor(Number(num) * 100) / 100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};
// necessary to remove input mask before passing value to formik
export const normalizeAmountValue = e => {
  // eslint-disable-next-line eqeqeq
  let t = e.target.value.length < 3 && e.target.value == 0 ? (e.target.value = "") : e.target.value;

  // limit to 2dp for floats
  e.target.value =
    t.indexOf(".") >= 0 ? t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3) : t;

  const updates = e.target.value;
  // remove commas
  return updates ? updates.substring(1).replace(/,/g, "") : "";
};

export const nextWorkingDay = () => {
  const today = dayjs();
  // const today = new moment();
  if (today.day() === 5) {
    //--> Friday
    return today.add(3, "days").format("MMMM D, YYYY");
  } else if (today.day() === 6) {
    //-->Saturday
    return today.add(2, "days").format("MMMM D, YYYY");
  } else {
    //--> other days, show next day
    return today.add(1, "days").format("MMMM D, YYYY");
  }
};

function thousandFormat(x) {
  let formatted;

  if (!isEmpty(x) && x[0] === "0" && x.length === 1) {
    return (formatted = x);
  } else if (!isEmpty(x) && x[0] === "0") {
    formatted = x
      .toString()
      // .replace(/^0/, "")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    formatted = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return formatted;
}

export function formatAmount(x) {
  let value;
  if (isNaN(x)) {
    value = 0;
  } else {
    value = x;
  }
  return thousandFormat(Number(value ?? 0).toFixed(2));
}
