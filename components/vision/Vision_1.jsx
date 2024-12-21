import React from "react";
import { visionData } from "@/constant/dummyData";
import { FaChartLine, FaRegLightbulb } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Vision = () => {
  return (
    <section className="relative px-6 lg:px-16 pt-16 lg:pt-24 pb-16 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h6 className="text-blue-600 uppercase font-semibold tracking-wide">
            Our Vision
          </h6>
          <h2 className="text-5xl font-extrabold text-gray-900 mt-4 leading-tight">
            Shaping the Future Through Innovation
          </h2>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Discover how our visionary approach and transformative solutions are empowering industries to achieve extraordinary growth.
          </p>
        </div>

        {/* Vision Items */}
        {visionData.map((item, index) => (
          <div
            key={index}
            className={`w-full flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24 mb-16 ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            {/* Left Content Section */}
            <div
              className="w-full lg:w-1/2"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <h3 className="text-4xl font-bold text-gray-800 mb-6">
                {item.title}
              </h3>
              <p className="text-lg text-gray-600 leading-7 mb-8">
                {item.description}
              </p>
              <Link
                href="#"
                className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 px-10 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300"
              >
                <span className="text-base font-medium">Explore More</span>
                <FaChartLine className="ml-3 text-lg" />
              </Link>
            </div>

            {/* Image Section */}
            <div
              className="w-full lg:w-1/2 relative"
              data-aos="zoom-in"
              data-aos-delay={`${index * 150}`}
            >
              <Image
                src={item.image}
                alt={item.imageAlt || "Vision Image"}
                className="w-full h-80 rounded-lg shadow-lg object-cover transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-12 left-6 right-6 bg-white shadow-xl py-6 px-8 rounded-lg transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <FaRegLightbulb className="text-4xl text-yellow-400" />
                    <div>
                      <h4 className="text-3xl font-bold text-gray-800">
                        {item.stats?.ideaCount ?? "10+"}
                      </h4>
                      <p className="text-sm text-gray-500">Ideas Generated</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2">
                      <FaChartLine className="text-xl text-green-500" />
                      <p className="text-lg font-medium text-gray-600">
                        {item.stats?.growthRate ?? "90%"}
                      </p>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Blob */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-blue-400 rounded-full opacity-30 blur-xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-400 rounded-full opacity-20 blur-2xl -z-10"></div>
    </section>
  );
};

export default Vision;
