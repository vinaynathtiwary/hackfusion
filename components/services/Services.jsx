"use client"
import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { FaBusinessTime, FaSearch, FaCode, FaChartBar, FaPalette, FaTools } from "react-icons/fa";

// Updated services data with React Icons
const servicesData = [
  {
    id: 1,
    icon: <FaBusinessTime className="text-blue-500 text-5xl" />,
    title: "Strategic Planning",
    description:
      "Develop long-term strategies to help your business grow and achieve its goals efficiently.",
  },
  {
    id: 2,
    icon: <FaSearch className="text-blue-500 text-5xl" />,
    title: "SEO Optimization",
    description:
      "Boost your online presence and drive organic traffic with our cutting-edge SEO techniques.",
  },
  {
    id: 3,
    icon: <FaCode className="text-blue-500 text-5xl" />,
    title: "Custom Development",
    description:
      "Get tailor-made software solutions crafted specifically to meet your unique business needs.",
  },
  {
    id: 4,
    icon: <FaChartBar className="text-blue-500 text-5xl" />,
    title: "Competitor Analysis",
    description:
      "Gain insights into your competitors and make data-driven decisions to stay ahead in the market.",
  },
  {
    id: 5,
    icon: <FaPalette className="text-blue-500 text-5xl" />,
    title: "UI/UX Design",
    description:
      "Create stunning, user-friendly designs that elevate user experiences and enhance engagement.",
  },
  {
    id: 6,
    icon: <FaTools className="text-blue-500 text-5xl" />,
    title: "Website Audit",
    description:
      "Comprehensive website audits to identify issues and optimize performance for maximum efficiency.",
  },
];

const Services = () => {
  return (
    <section className="px-6 lg:px-16 py-16 bg-gray-50">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h6 className="flex items-center justify-center gap-2 text-blue-500 uppercase text-sm font-semibold tracking-wide">
          Services <HiArrowLongRight className="text-lg" />
        </h6>
        <h2 className="text-4xl font-extrabold text-gray-800 mt-3">
          What We Offer
        </h2>
        <p className="text-gray-600 text-base mt-4 max-w-3xl mx-auto">
          Explore our range of services tailored to help your business grow,
          innovate, and succeed.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
          >
            <div className="p-6 flex flex-col h-full">
              {/* Icon */}
              <div className="mb-4">{item.icon}</div>
              {/* Title */}
              <h4 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-500 transition-colors duration-200">
                {item.title}
              </h4>
              {/* Description */}
              <p className="text-gray-600 text-sm flex-grow leading-relaxed">
                {item.description.length > 150
                  ? `${item.description.substring(0, 150)}...`
                  : item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
