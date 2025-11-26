import MyContainer from "@/components/MyContainer/MyContainer";
import { FaHeart, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import Logo from "../Logo/Logo";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-200 text-base-content py-10">
      <MyContainer className="footer sm:footer-horizontal">
        <aside className="max-w-sm w-full">
          <Logo />
          <p>
            This is more than a blog. It&apos;s the chronicle of your journey.
            Capture your evolving thoughts, document your passions, and build a
            legacy of words that stands the test of time.
          </p>
        </aside>

        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>

        <nav>
          <h6 className="footer-title">Company</h6>
          <Link href="/about-us" className="link link-hover">
            About Us
          </Link>
          <Link href="/contact-us" className="link link-hover">
            Contact Us
          </Link>
        </nav>
        
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </MyContainer>

      <div className="mt-10 p-5 pb-0 border-t border-neutral/20 text-center">
        <p>
          Copyright © {currentYear} - All right reserved by <em>CHRONOS</em>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
