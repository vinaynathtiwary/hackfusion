"use client"
import React from 'react';
import Image from 'next/image';
import { localImages } from '@/utils/localImages';
import { FiLinkedin, FiMail, FiPhone } from "react-icons/fi";

const teamData = [
    {
        name: "Vinay Nath Tiwary",
        position: "CEO",
        intro: "Vinay manages company operations, ensuring growth, excellence, and strategic decision-making.",
        image: localImages.ceoImg,
        imageAlt: "CEO Vinay Nath Tiwary",
        email: "vinaynathtiwary@gmail.com",
        linkedin: "https://www.linkedin.com/in/vinay-nath-tiwary-175624210/",
        phone: "+91 78701 62890"
    },
    {
        name: "Ujjwal Pandey",
        position: "CTO",
        intro: "Ujjwal leads technical operations, overseeing projects from start to finish efficiently.",
        image: localImages.ctoImg,
        imageAlt: "CTO Ujjwal Pandey",
        email: "ujjwal@example.com",
        linkedin: "https://linkedin.com/in/",
        phone: "+91 76439 81080"
    },
    
    {
        name: "Lokesh Nath Tiwari",
        position: "CFO",
        intro: "Lokesh oversees financial operations, ensuring budget compliance and sustainable company growth.",
        image: localImages.cfoImg,
        imageAlt: "CFO Lokesh Nath Tiwari",
        email: "lokeshnathtiwari123@example.com",
        linkedin: "https://www.linkedin.com/",
        phone: "+91 78701 62890"
    },
    {
        name: "Amitesh Kumar",
        position: "SME",
        intro: "Amitesh oversees operations, ensuring budget compliance and sustainable company growth.",
        image: localImages.smeImg,
        imageAlt: "SME Amitesh Kumar",
        email: "amiteshkr13@gmail.com",
        linkedin: "https://linkedin.com/in/",
        phone: "+91 92975 28392"
    }
];

const Team = () => {
    return (
        <section className="px-4 lg:px-12 py-12 bg-gray-50">
            <div className="text-center">
                <h6 className="text-blue-600 uppercase tracking-wider text-sm">About Us</h6>
                <h2 className="text-3xl font-bold text-gray-800 mt-2">Meet Our Leadership Team</h2>
                <p className="text-md text-gray-600 mt-4 max-w-xl mx-auto">
                    The talented individuals steering our company toward success.
                </p>
            </div>
            <div className="flex justify-center gap-6 mt-10 flex-wrap">
                {teamData.map((data, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition-shadow duration-300 w-60"
                    >
                        <div className="flex items-center justify-center mt-4">
                            <Image
                                src={data.image}
                                alt={data.imageAlt}
                                width={96}
                                height={96}
                                className="object-cover rounded-full border-2 border-gray-800"
                            />
                        </div>
                        <div className="p-4 text-center">
                            <h3 className="text-lg font-semibold text-gray-800">{data.name}</h3>
                            <h6 className="text-sm text-gray-600 mt-1">{data.position}</h6>
                            <p className="text-sm text-gray-600 mt-3">{data.intro}</p>
                        </div>
                        <div className="flex justify-center gap-4 mt-4 mb-4">
                            <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
                                <FiLinkedin className="text-lg text-gray-600 hover:text-gray-800 cursor-pointer" />
                            </a>
                            <a href={`mailto:${data.email}`}>
                                <FiMail className="text-lg text-gray-600 hover:text-gray-800 cursor-pointer" />
                            </a>
                            <a href={`tel:${data.phone}`}>
                                <FiPhone className="text-lg text-gray-600 hover:text-gray-800 cursor-pointer" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Team;
