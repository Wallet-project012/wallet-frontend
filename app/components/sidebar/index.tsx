"use client";
import Link from "next/link";
import { SidebarRoutes } from "./routes";
import { SidebarRoute } from "./types";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RiMenuFold2Line, RiMenuUnfold2Line } from "react-icons/ri";

export const Sidebar = () => {
  const pathname = usePathname();
  const [toggleSidebar, setToggleSidebar] = useState(true);

  function handleToggleSidebar() {
    setToggleSidebar((prev) => !prev);
  }

  return (
    <div
      className={`sidebar p-2 bg-gray-800 text-dark-main dark:text-secondary-main ${
        toggleSidebar ? "w-64" : "w-18"
      }  flex flex-col h-screen mt-10 relative max-md:w-18  bg-light-main dark:bg-dark-main transition-all duration-300 ease-in-out`}
    >
      <button
        className="absolute -right-3 top-10 cursor-pointer max-md:hidden bg-primary-300 rounded-md p-1 dark:bg-dark-600 "
        onClick={handleToggleSidebar}
      >
        {" "}
        {toggleSidebar ? (
          <RiMenuFold2Line className="text-dark-700 dark:text-primary-main w-[25px] h-[25px]" />
        ) : (
          <RiMenuUnfold2Line className="text-dark-700 dark:text-primary-main w-[25px] h-[25px]" />
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
                  <span className="text-sm font-medium max-md:hidden">
                    {item.name}
                  </span>
                )}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
