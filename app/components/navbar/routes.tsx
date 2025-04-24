import { TbHome2 } from "react-icons/tb";
import { LuLayoutDashboard } from "react-icons/lu";
import { NavbarRoute } from "./types";

export const NavbarRoutes: NavbarRoute[] = [
  {
    path: "/",
    name: "Home",
    icon: (
      <TbHome2 className="text-dark-main dark:text-primary-main" size="2rem" />
    ),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: (
      <LuLayoutDashboard
        className="text-dark-main dark:text-primary-main"
        size="2rem"
      />
    ),
  },
];
