import {
  LuCalendarClock,
  LuCreditCard,
  LuLayoutDashboard,
  LuSettings,
} from "react-icons/lu";
import { SidebarRoute } from "./types";
import { BiSupport } from "react-icons/bi";
import { MdOutlineAccountCircle } from "react-icons/md";

export const SidebarRoutes: SidebarRoute[] = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: (
      <LuLayoutDashboard
        className="text-dark-main dark:text-primary-main"
        size="1.5rem"
      />
    ),
  },
  {
    path: "/dashboard/card-management",
    name: "Card management",
    icon: (
      <LuCreditCard
        className="text-dark-main dark:text-primary-main"
        size="1.5rem"
      />
    ),
  },
  {
    path: "/dashboard/settings",
    name: "Settings",
    icon: (
      <LuSettings
        className="text-dark-main dark:text-primary-main"
        size="1.5rem"
      />
    ),
  },
  {
    path: "/dashboard/financial-calender",
    name: "Financial calender",
    icon: (
      <LuCalendarClock
        className="text-dark-main dark:text-primary-main"
        size="1.5rem"
      />
    ),
  },
  {
    path: "/dashboard/profile",
    name: "Profile",
    icon: (
      <MdOutlineAccountCircle
        className="text-dark-main dark:text-primary-main"
        size="1.5rem"
      />
    ),
  },
  {
    path: "/dashboard/support",
    name: "Support",
    icon: (
      <BiSupport
        className="text-dark-main dark:text-primary-main"
        size="1.5rem"
      />
    ),
  },
];
