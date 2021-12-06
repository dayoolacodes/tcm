import {
  FileIcon,
  CrossIcon,
  CalendarIcon,
  GearIcon,
  LogOutIcon
} from "assets/icons/navLinksIcons";

export default [
  {
    path: "/appointments",
    title: "Appointments",
    logo: CalendarIcon,
    section: "top"
  },
  {
    path: "/patient-information",
    title: "Patient Information",
    logo: CrossIcon,
    section: "top"
  },
  {
    path: "/medical-records",
    title: "Medical Records",
    logo: FileIcon,
    section: "top"
  },
  {
    path: "/settings",
    title: "Settings",
    logo: GearIcon,
    section: "bottom"
  },
  {
    path: "/log-out",
    title: "Log out",
    logo: LogOutIcon,
    section: "bottom"
  }
];
