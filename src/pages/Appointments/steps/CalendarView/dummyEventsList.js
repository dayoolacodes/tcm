//generate random dates to represent available dates
function randomDate(start, end, step = 8) {
  let dateArray = [];
  start = Date.parse(start);
  end = Date.parse(end);

  while (step > 0) {
    dateArray.push(new Date(Math.floor(Math.random() * (end - start + 1) + start)));
    --step;
  }
  return dateArray;
}

export default [
  {
    title: "Hong Wang",
    start: new Date(2021, 10, 30),
    end: new Date(2021, 10, 30),
    clinicName: "Landsowne Medical Centre",
    address: "8240 Lansdowne Rd Unit 110, Richmond, British Columbia",
    availableTimes: randomDate("2021-09-27", "2021-10-28")
  },

  {
    title: "Musa Adam",
    start: new Date(2022, 0, 13, 0, 0, 0),
    end: new Date(2022, 0, 13, 0, 0, 0),
    clinicName: "Landsowne Medical Centre",
    address: "8240 Lansdowne Rd Unit 110, Richmond, British Columbia",
    availableTimes: randomDate("2021-09-27", "2021-10-28")
  },

  {
    title: "Hong Wang",
    start: new Date(2021, 11, 6, 0, 0, 0),
    end: new Date(2021, 11, 6, 0, 0, 0),
    clinicName: "Landsowne Medical Centre",
    address: "8240 Lansdowne Rd Unit 110, Richmond, British Columbia",
    availableTimes: randomDate("2021-09-27", "2021-10-28")
  },

  {
    title: "James Buchanan",
    start: new Date(2021, 11, 9, 0, 0, 0),
    end: new Date(2021, 11, 9, 0, 0, 0),
    clinicName: "Landsowne Medical Centre",
    address: "8240 Lansdowne Rd Unit 110, Richmond, British Columbia",
    availableTimes: randomDate("2021-09-27", "2021-10-28")
  },
  {
    title: "Simu Liu",
    start: new Date(2021, 11, 11),
    end: new Date(2021, 11, 13),
    clinicName: "Landsowne Medical Centre",
    desc: "hey",
    address: "8240 Lansdowne Rd Unit 110, Richmond, British Columbia",
    availableTimes: randomDate("2021-09-27", "2021-10-28")
  },
  {
    title: "James Cook",
    start: new Date(2021, 11, 11, 10, 30, 0, 0),
    end: new Date(2021, 11, 11, 12, 30, 0, 0),
    clinicName: "Landsowne Medical Centre",
    desc: "hey",
    address: "8240 Lansdowne Rd Unit 110, Richmond, British Columbia",
    availableTimes: randomDate("2021-09-27", "2021-10-28")
  },
  {
    title: "Jet Wang",
    start: new Date(2021, 11, 14, 12, 0, 0, 0),
    end: new Date(2021, 11, 14, 13, 0, 0, 0),
    clinicName: "Landsowne Medical Centre",
    desc: "hey",
    address: "8240 Lansdowne Rd Unit 110, Richmond, British Columbia",
    availableTimes: randomDate("2021-09-27", "2021-10-28")
  },
  {
    title: "Fass Bender",
    start: new Date(2021, 11, 16, 14, 0, 0, 0),
    end: new Date(2021, 11, 16, 15, 0, 0, 0),
    clinicName: "Landsowne Medical Centre",
    address: "8240 Lansdowne Rd Unit 110, Richmond, British Columbia",
    availableTimes: randomDate("2021-09-27", "2021-10-28")
  },
  {
    title: "Alice Lu",
    start: new Date(2021, 11, 2, 17, 0, 0, 0),
    end: new Date(2021, 11, 2, 17, 30, 0, 0),
    clinicName: "Landsowne Medical Centre",
    desc: "hey",
    address: "8240 Lansdowne Rd Unit 110, Richmond, British Columbia",
    availableTimes: randomDate("2021-09-27", "2021-10-28")
  },
  {
    title: "Luke Cage",
    start: new Date(2021, 11, 11, 20, 0, 0, 0),
    end: new Date(2021, 11, 11, 21, 0, 0, 0),
    clinicName: "Landsowne Medical Centre",
    address: "8240 Lansdowne Rd Unit 110, Richmond, British Columbia",
    availableTimes: randomDate("2021-09-27", "2021-10-28")
  },
  {
    title: "Hong Wang",
    start: new Date(2021, 11, 30, 7, 0, 0),
    end: new Date(2021, 11, 30, 10, 30, 0),
    clinicName: "Landsowne Medical Centre",
    address: "8240 Lansdowne Rd Unit 110, Richmond, British Columbia",
    availableTimes: randomDate("2021-09-27", "2021-10-28")
  },
  {
    title: "Hong Luca",
    start: new Date(2021, 11, 13, 7, 0, 0),
    end: new Date(2021, 11, 13, 10, 30, 0),
    clinicName: "Landsowne Medical Centre",
    address: "8240 Lansdowne Rd Unit 110, Richmond, British Columbia",
    availableTimes: randomDate("2021-09-27", "2021-10-28")
  },
  {
    title: "Hong Wang",
    start: new Date(2021, 11, 13, 7, 0, 0),
    end: new Date(2021, 11, 13, 10, 30, 0),
    clinicName: "Landsowne Medical Centre",
    address: "8240 Lansdowne Rd Unit 110, Richmond, British Columbia",
    availableTimes: randomDate("2021-09-27", "2021-10-28")
  },
  {
    title: "James Cook",
    start: new Date(2021, 11, 17, 19, 30, 0),
    end: new Date(2021, 11, 17, 2, 0, 0),
    clinicName: "Landsowne Medical Centre",
    address: "8240 Lansdowne Rd Unit 110, Richmond, British Columbia",
    availableTimes: randomDate("2021-09-27", "2021-10-28")
  },
  {
    title: "Simu Liu",
    start: new Date(2021, 11, 20, 19, 30, 0),
    end: new Date(2021, 11, 20, 2, 0, 0),
    clinicName: "Landsowne Medical Centre",
    address: "8240 Lansdowne Rd Unit 110, Richmond, British Columbia",
    availableTimes: randomDate("2021-09-27", "2021-10-28")
  }
];
