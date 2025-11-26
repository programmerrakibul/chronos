"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ children, href, className = "" }) => {
  const pathname = usePathname();

  return (
    <>
      <Link
        href={href}
        className={`${className} ${pathname === href ? "active" : ""}`}
      >
        {children}
      </Link>
    </>
  );
};

export default NavLink;
