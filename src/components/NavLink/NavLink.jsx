import Link from "next/link";

const NavLink = ({ children, href, className = "" }) => {
  return (
    <>
      <Link href={href} className={`${className}`}>
        {children}
      </Link>
    </>
  );
};

export default NavLink;
