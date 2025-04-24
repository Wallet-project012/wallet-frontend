import Link from "next/link";
import { NavbarRoutes } from "./routes";
import { NavbarRoute } from "./types";

export const Navbar = () => {
  return (
    <header className="px-5 py-5 shadow-sm font-work-sans border-b border-orange-700 fixed top-0 w-full z-1000">
      <nav className="flex items-center gap-2">
        {NavbarRoutes.map((item: NavbarRoute) => {
          return (
            <Link href={item.path} key={item.name}>
              {item.icon}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};
