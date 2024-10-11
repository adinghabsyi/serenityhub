import React from "react";
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#232222] text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo Section */}
        <div>
          <h2 className="text-2xl font-bold">SerenityHub</h2>
          <p className="border-2 border-brown-200 w-[200px] mt-3 text-center rounded-3xl">
            Mental Health AT 30'S
          </p>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a href="#" className="hover:text-blue-500">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-pink-600">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-blue-700">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Subscribe Section */}
        <div>
          <h3 className="text-xl font-semibold">Subscribe</h3>
          <p className="mt-2">Stay updated with our latest articles.</p>
          <div className="flex justify-center md:justify-start mt-4">
            <input
              type="email"
              placeholder="Your email address"
              className="p-2 rounded-l-lg focus:outline-none text-black"
            />
            <button className="bg-[#2B2D21] text-white p-2 rounded-r-lg hover:bg-blue-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-center text-gray-400">
        <p>© 2024 SerenityHub. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
