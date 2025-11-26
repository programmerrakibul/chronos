"use client";

import NavLink from "@/components/NavLink/NavLink";
import MyContainer from "@/components/MyContainer/MyContainer";
import Link from "next/link";
import MyButton from "@/components/MyButton/MyButton";
import { useRouter } from "next/navigation";
import useAuthInfo from "@/hooks/useAuthInfo";

const Navbar = () => {
  const { currentUser, logoutUser } = useAuthInfo();
  const router = useRouter();
  const navTexts = [
    {
      link: "Home",
      slug: "/",
    },
    {
      link: "Blogs",
      slug: "blogs",
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

  const handleLogout = async () => {
    try {
      await logoutUser();
    } catch (err) {
      console.log(err);
    }
  };

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
          <div className="navbar-end gap-2.5">
            {currentUser ? (
              <>
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="avatar m-1">
                    <div className="ring-primary ring-offset-base-100 size-10 rounded-full ring-2 ring-offset-2 btn btn-square">
                      <img
                        src={currentUser.photoURL}
                        alt={currentUser.displayName}
                      />
                    </div>
                  </div>

                  <ul
                    tabIndex="-1"
                    className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                  >
                    <div className="py-1.5 px-3 mb-2.5">
                      <strong className="text-nowrap">
                        {currentUser.displayName}
                      </strong>
                    </div>

                    <li>
                      <NavLink href="post-blog">Post Blog</NavLink>
                    </li>

                    <li>
                      <NavLink href="manage-blogs">Manage Blogs</NavLink>
                    </li>
                  </ul>
                </div>

                <MyButton onClick={handleLogout}>Logout</MyButton>
              </>
            ) : (
              <>
                <MyButton onClick={() => router.push("/login")}>Login</MyButton>

                <MyButton onClick={() => router.push("/register")}>
                  Register
                </MyButton>
              </>
            )}
          </div>
        </div>
      </MyContainer>
    </nav>
  );
};

export default Navbar;
