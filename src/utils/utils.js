// import dayjs from "dayjs";

// export function dateToApiFormat(date) {
//   if (date == null) {
//     return dayjs().format("YYYY-MM-DD HH:mm:ss");
//   }
//   return dayjs(date).format("YYYY-MM-DD HH:mm:ss");
// }
// /**
//  *
//  * @param {Date Range} date
//  * @returns {String datestring} in format: "YYYY-MM-DD HH:mm:ss"
//  */
// export function formatDateToMidnight(range) {
//   let dateRes;
//   switch (range) {
//     case "1d":
//       dateRes = dayjs();
//       break;
//     case "7d":
//       dateRes = dayjs().subtract(7, "day");
//       break;
//     case "1m":
//       dateRes = dayjs().subtract(1, "month");
//       break;
//     case "1y":
//       dateRes = dayjs().subtract(1, "year");
//       break;

//     default:
//       dateRes = dayjs().subtract(7, "day");
//       break;
//   }

//   let midNightDate = new Date(dateRes);
//   midNightDate.setHours(0, 0, 0, 0); //   stripe down to midnight ...
//   return dateToApiFormat(midNightDate);
// }
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

export const loginValidation = values => {
  let errors = {};
  let { userName, password, email } = values;
  // if (!userName) {
  //   errors.userName = "Username is required";
  // }
  if (!email) {
    errors.userName = "Username is required";
  }
  if (!password) {
    errors.password = "Password is required";
  }

  return errors;
};

export const signUpValidation = values => {
  let errors = {};
  const specChar = /(?=.*[-+_!@#$%^&*.,?])/i;
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  let { email, password, confirmPassword, termsAgree } = values;
  email.trim();
  if (!email) {
    errors.email = "Email is required";
  } else if (!emailRegex.test(email)) {
    errors.email = "Enter valid email";
  }
  if (!password) {
    errors.password = "Password is required";
  } else if (password?.length < 8) {
    errors.password = "Minimum of 8 characters";
  } else if (!specChar.test(password)) {
    errors.password = "Special character -+_!@#$%^&*.,?";
  }
  if (!confirmPassword) {
    errors.confirmPassword = "Enter password again";
  } else if (confirmPassword !== password) {
    errors.confirmPassword = "Password does not match";
  }
  if (!termsAgree) {
    errors.termsAgree = "Check box to agree to the terms and policy";
  }

  return errors;
};
