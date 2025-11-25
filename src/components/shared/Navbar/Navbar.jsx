"use client";

import NavLink from "@/components/NavLink/NavLink";
import MyContainer from "@/components/MyContainer/MyContainer";
import Link from "next/link";
import MyButton from "@/components/MyButton/MyButton";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const navTexts = [
    {
      link: "Home",
      slug: "/",
    },
    {
      link: "Articles",
      slug: "articles",
    },
    {
      link: "About Us",
      slug: "about-us",
    },
    {
      link: "Contact Us",
      slug: "contact-us",
    },
  ];
  const navLinks = navTexts.map((item) => (
    <li key={item.slug}>
      <NavLink href={item.slug}>{item.link}</NavLink>
    </li>
  ));

  return (
    <nav className="bg-base-100 shadow-sm">
      <MyContainer>
        <div className="navbar p-0">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {navLinks}
              </ul>
            </div>
            <Link href="/" className="text-xl">
              CHRONOS
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-base">{navLinks}</ul>
          </div>
          <div className="navbar-end gap-1.5">
            <MyButton onClick={() => router.push("/login")}>Login</MyButton>

            <MyButton onClick={() => router.push("/register")}>
              Register
            </MyButton>
          </div>
        </div>
      </MyContainer>
    </nav>
  );
};

export default Navbar;
