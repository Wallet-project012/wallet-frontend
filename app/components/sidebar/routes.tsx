import { TbHome2 } from "react-icons/tb";
import { LuLayoutDashboard } from "react-icons/lu";
import { SidebarRoute } from "./types";

export const SidebarRoutes: SidebarRoute[] = [
  {
    path: "/",
    name: "Home",
    icon: (
      <TbHome2
        className="text-dark-main dark:text-primary-main"
        size="1.5rem"
      />
    ),
  },
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
];
