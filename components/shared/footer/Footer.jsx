'use client';
import React from 'react';
import Link from 'next/link';
import { FiGithub, FiTwitter, FiInstagram, FiLinkedin, FiFacebook } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container mx-auto px-5 lg:px-20 flex flex-col lg:flex-row justify-between items-start">

        <div className="w-full lg:w-1/3 mb-8 lg:mb-0 text-left"> {/* Both Contact Us and Quick Links left-aligned */}
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">Get in touch for inquiries or support.</p>
          <p className="mb-2 text-gray-700">Email: <a href="mailto:team@hackfusion.in" className="text-blue-500 hover:underline hover:text-blue-700 transition duration-300">team@hackfusion.in</a></p>
          <p className="text-gray-700">Phone: <a href="tel:+917296096397" className="text-blue-500 hover:underline hover:text-blue-700 transition duration-300">+91 72960 96397</a></p>
          <p className="text-gray-700">Whatsapp: <a href="https://wa.me/+917296096397" className="text-green-500 hover:underline hover:text-green-700 transition duration-300">+91 72960 96397</a></p>

          <div className="mt-6">
            <h4 className="text-lg font-medium text-gray-800 mb-2">Follow Us</h4>
            <ul className="flex justify-center lg:justify-start space-x-4">
              {[FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiGithub].map((Icon, index) => (
                <li key={index}>
                  <Link href="#" className="text-gray-500 hover:text-gray-800 transition duration-300">
                    <Icon size={20} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full lg:w-1/3 mb-8 lg:mb-0 text-left"> {/* Quick Links left-aligned */}
          <h4 className="text-xl font-semibold text-gray-800 mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item, index) => (
              <li key={index}>
                <Link href="#" className="text-gray-600 hover:text-gray-800 transition duration-300">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full lg:w-1/3 text-left"> {/* Office Address left-aligned */}
          <h4 className="text-xl font-semibold text-gray-800 mb-4">Office Address</h4>
          <address className="text-gray-600 not-italic">
            <p>Hackfusion</p> {/* Added company name */}
            <p>Katrasgarh, Dhanbad, Jharkhand 828113, India</p>
          </address>
        </div>
      </div>

      <div className="mt-12 pt-8 text-center text-sm text-gray-500 w-full">
        <hr className="border-gray-200 mb-4" />
        © {new Date().getFullYear()} Hackfusion. All rights reserved. {/* Updated company name */}
      </div>
    </footer>
  );
};

export default Footer;