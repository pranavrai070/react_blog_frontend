/* eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import facebookSvg from "../../assets/icons/facebook.svg";
import linkedInSvg from "../../assets/icons/linkedin.svg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer
      className="bg-gray-800 text-white p-8 mt-10"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Quick Links */}
          <div className="text-center col-span-1 md:col-span-1 lg:col-span-1 border-r border-white border-small">
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul>
              <li className="mb-4">
                <Link to="/" onClick={scrollToTop}>
                  Home
                </Link>
              </li>
              <li className="mt-2 mb-6">
                <Link to="/about" onClick={scrollToTop}>
                  About
                </Link>
              </li>
              <li className="mt-2 mb-6">
                <Link to="/contact" onClick={scrollToTop}>
                  Contact
                </Link>
              </li>
            </ul>

          </div>

          {/* Social Media */}
          <div className="flex flex-col justify-center text-center col-span-1 md:col-span-2 lg:col-span-1 border-r border-small border-white items-center">
            <h4 className="text-xl font-semibold mb-4">
              CMP Global Consultants
            </h4>
            <h4 className="text-lg font-semibold mb-4">Social Networks</h4>
            <div className="flex justify-center items-center gap-x-5">
              {" "}
              {/* Added items-center */}
              <div className="flex items-center mb-2 ">
                <img
                  src={facebookSvg}
                  alt="Facebook icon"
                  className="h-6 w-6 mr-2"
                  style={{ fill: "white" }}
                />
              </div>
              <div className="flex items-center mb-2">
                <img
                  src={linkedInSvg}
                  alt="linkedin icon"
                  className="h-6 w-6 mr-2"
                />
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center ml-4 col-span-1 md:col-span-1 lg:col-span-1 contactUsFooter">
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <p className="translate-y-16 emailForMobileFooter">Email: info@cmpglobalconsultants.com</p>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 mb-6">
             <Link to="/termsofuse" onClick={scrollToTop}>
                  Terms of Use
                </Link>
             <Link className="ml-6" to="/privacypolicy" onClick={scrollToTop}>
                  Privacy Policy
                </Link>

             </div>
      <hr className="border-gray-600 my-4" />
      <p className="text-center text-sm">
        {" "}
        © 2024 CMP Global Consultant. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
