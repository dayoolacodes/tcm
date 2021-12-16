import {
  FileIcon,
  CrossIcon,
  CalendarIcon,
  GearIcon,
  LogOutIcon
  // MobileNavCalendar
} from "assets/icons/navLinksIcons";
import { ReactComponent as MobileNavCalendar } from "assets/mobile-nav-calendar.svg";
import { ReactComponent as MobileNavCross } from "assets/mobile-nav-cross.svg";
import { ReactComponent as MobileNavLogout } from "assets/mobile-nav-logout.svg";
import { ReactComponent as MobileNavRecords } from "assets/mobile-nav-mobilerecords.svg";
import { ReactComponent as MobileNavSettings } from "assets/mobile-nav-settings.svg";

export default [
  {
    path: "/appointments",
    title: "Appointments",
    logo: CalendarIcon,
    section: "top",
    mobileLogo: <MobileNavCalendar />
  },
  {
    path: "/patient-information",
    title: "Patient Information",
    logo: CrossIcon,
    section: "top",
    mobileLogo: <MobileNavCross />
  },
  {
    path: "/medical-records",
    title: "Medical Records",
    logo: FileIcon,
    section: "top",
    mobileLogo: <MobileNavRecords />
  },
  {
    path: "/settings",
    title: "Settings",
    logo: GearIcon,
    section: "bottom",
    mobileLogo: <MobileNavSettings />
  },
  {
    path: "/log-out",
    title: "Log out",
    logo: LogOutIcon,
    section: "bottom",
    mobileLogo: <MobileNavLogout />
  }
];
