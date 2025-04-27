"use client";
import Link from "next/link";
import { SidebarRoutes } from "./routes";
import { SidebarRoute } from "./types";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RiMenuFold2Line, RiMenuUnfold2Line } from "react-icons/ri";

export const Sidebar = () => {
  const pathname = usePathname();
  const [toggleSidebar, setToggleSidebar] = useState(false);

  function handleToggleSidebar() {
    setToggleSidebar((prev) => !prev);
  }
  return (
    <div
      className={`sidebar p-2 bg-gray-800 text-dark-main dark:text-secondary-main ${
        toggleSidebar ? "w-64" : "w-18"
      } h-screen flex flex-col fixed top-[72px] left-0 bg-light-main dark:bg-dark-main transition-all duration-300 ease-in-out`}
    >
      <button
        className="absolute -right-3 top-0 cursor-pointer"
        onClick={handleToggleSidebar}
      >
        {" "}
        {toggleSidebar ? (
          <RiMenuFold2Line className="text-dark-main dark:text-primary-main w-[25px] h-[25px]" />
        ) : (
          <RiMenuUnfold2Line className="text-dark-main dark:text-primary-main w-[25px] h-[25px]" />
        )}
      </button>
      <ul className="flex flex-col space-y-2 flex-grow gap-5 mt-8">
        {SidebarRoutes.map((item: SidebarRoute) => {
          const isActive = pathname === item.path;

          const activeClassName = isActive
            ? "bg-primary-300 dark:bg-dark-700"
            : "hover:bg-primary-300 dark:hover:bg-dark-700";
          return (
            <Link
              key={item.name}
              href={item.path}
              className={`flex items-center space-x-2 p-2 rounded-md ${activeClassName}`}
            >
              <li className="flex items-center w-full space-x-2 hover:bg-primary-300 dark:hover:bg-dark-700 p-2 rounded-md ">
                <span className="text-lg">{item.icon}</span>
                {toggleSidebar && (
                  <span className="text-sm font-medium">{item.name}</span>
                )}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
