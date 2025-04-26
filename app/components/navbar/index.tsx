import Link from "next/link";
import { NavbarRoutes } from "./routes";
import { NavbarRoute } from "./types";
import ThemeToggle from "@/theme/theme-toggle";

export const Navbar = () => {
  return (
    <header className="px-5 py-5 bg-primary-main dark:bg-dark-main border-b border-dark-500 fixed top-0 w-full z-1000">
      <nav className="flex items-center gap-4">
        {NavbarRoutes.map((item: NavbarRoute) => {
          return (
            <Link href={item.path} key={item.name}>
              {item.icon}
            </Link>
          );
        })}
        <ThemeToggle />
      </nav>
    </header>
  );
};
