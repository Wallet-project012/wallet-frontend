import { TbHome2 } from "react-icons/tb";
import { LuLayoutDashboard } from "react-icons/lu";
import { SidebarRoute } from "./types";

export const SidebarRoutes: SidebarRoute[] = [
  {
    path: "/",
    name: "Home",
    icon: <TbHome2 color="orange" size="2rem" />,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <LuLayoutDashboard color="orange" size="2rem" />,
  },
];
