import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { IoArrowUpOutline } from "react-icons/io5";

const Footer = () => {

  return (
    <div className="flex flex-col gap-4 lg:flex-row justify-between items-start md:items-center bg-gray-900 text-white text-sm px-12 py-4">
      <div className="">
        <div className="flex flex-col-reverse gap-4 md:flex-row justify-between items-start md:items-center">
          <div className="flex gap-4">
            <FaInstagram className="cursor-pointer" size={18} />
            <FaFacebookF className="cursor-pointer" size={18} />
            <FaTwitter className="cursor-pointer" size={18} />
            <FaYoutube className="cursor-pointer" size={18} />
            <FiMail className="cursor-pointer" size={18} />
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <IoArrowUpOutline />
            Back to Top
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          <p className="cursor-pointer">All categories</p>
          <p className="cursor-pointer">Site Maps</p>
          <p className="cursor-pointer">About Us</p>
          <p className="cursor-pointer">Help</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="">
          <p>Discovery of family networks</p>
          <p className="text-sm text-gray-500 font-extralight">
            © 2025 Warner Bros. Discovery, Inc. or its subsidiaries and
            affiliates. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <p>Advertise</p>
          <p>Ad Choices</p>
          <p>Privacy Policy</p>
          <p>Visitor Agreement</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
