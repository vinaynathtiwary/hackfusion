"use client"
import React from 'react';
import { showcaseData } from '@/constant/dummyData';
import { HiArrowLongRight } from "react-icons/hi2";
import Image from 'next/image';
import Link from 'next/link';

const Showcase = () => {
    return (
        <section className="px-6 lg:px-16 py-16 bg-gray-50">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h6 className="text-blue-500 uppercase text-sm font-medium tracking-wide mb-2">Our Work</h6>
                <h2 className="text-4xl font-extrabold text-gray-800 leading-tight">Showcase of Our Projects</h2>
                <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto">
                    We specialize in delivering high-quality, innovative solutions tailored to meet diverse client needs.
                </p>
            </div>

            {/* Showcase Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {showcaseData.map((data, index) => (
                    <div
                        key={index}
                        className="rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow transform hover:scale-105"
                    >
                        {/* Image Section */}
                        <div className="relative">
                            <Image 
                                src={data.image} 
                                alt={data.imageAlt} 
                                className="w-full h-64 object-cover rounded-t-lg" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black bg-opacity-40 flex items-end p-6">
                                <span className="text-white text-sm uppercase font-medium tracking-wide">{data.category}</span>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-6">
                            <h4 className="text-2xl font-semibold text-gray-800 mb-2">{data.title}</h4>
                            <p className="text-gray-600 leading-relaxed line-clamp-3">
                                {data.description}
                            </p>
                            <div className="mt-6 flex items-center">
                                <Link 
                                    href={data.link} 
                                    className="flex items-center gap-2 text-blue-500 hover:text-blue-600 font-medium transition-all"
                                >
                                    {data.linkText}
                                    <HiArrowLongRight className="text-lg" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Showcase;
