import Link from "next/link";
import { SidebarRoutes } from "./routes";
import { SidebarRoute } from "./types";

export const Sidebar = () => {
  return (
    <div className="sidebar bg-gray-800 text-white w-64 h-screen flex flex-col fixed top-[72px] left-0">
      <ul className="flex flex-col space-y-2 p-4 flex-grow">
        {SidebarRoutes.map((item: SidebarRoute) => (
          <li
            key={item.name}
            className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md"
          >
            <Link href={item.path} className="flex items-center space-x-2">
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
