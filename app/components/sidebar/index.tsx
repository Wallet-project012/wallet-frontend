import Link from "next/link";
import { SidebarRoutes } from "./routes";
import { SidebarRoute } from "./types";

export const Sidebar = () => {
  return (
    <div className="sidebar bg-gray-800 text-dark-main dark:text-secondary-main w-64 h-screen flex flex-col fixed top-[72px] left-0 bg-primary-main dark:bg-dark-main">
      <ul className="flex flex-col space-y-2 flex-grow">
        {SidebarRoutes.map((item: SidebarRoute) => (
          <Link
            key={item.name}
            href={item.path}
            className="flex items-center space-x-2"
          >
            <li className="flex items-center w-full space-x-2 hover:bg-primary-300 dark:hover:bg-dark-700 p-2 rounded-md">
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-medium">{item.name}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
