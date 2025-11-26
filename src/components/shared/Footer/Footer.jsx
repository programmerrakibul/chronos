import MyContainer from "@/components/MyContainer/MyContainer";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className=" p-10 bg-base-200 text-base-content">
        <MyContainer>
          <div className="footer footer-center">
            <div className="grid grid-flow-col gap-4">
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Privacy Policy</a>
              <a className="link link-hover">Terms of Service</a>
            </div>

            <div>
              <div className="grid grid-flow-col gap-4">
                <a className="text-2xl">
                  <FaTwitter />
                </a>
                <a className="text-2xl">
                  <FaGithub />
                </a>
                <a className="text-2xl">
                  <FaLinkedin />
                </a>
              </div>
            </div>

            <div>
              <p>
                Copyright © {new Date().getFullYear()} - All rights reserved by
                Chronos
              </p>
            </div>
          </div>
        </MyContainer>
      </footer>
    </>
  );
};

export default Footer;
