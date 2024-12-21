import React from 'react';
import Image from 'next/image';
import { FiGithub, FiInstagram, FiMail, FiPhone } from "react-icons/fi";

const teamData = [
    {
        name: "Vinay Nath Tiwary",
        position: "CEO",
        intro: "John leads our company with over 1 years of industry experience.",
        image: "", // Add appropriate image URL
        imageAlt: "CEO John Doe"
    },
    {
        name: "Ujjwal Pandey",
        position: "CTO",
        intro: "Jane drives our technical vision and oversees all product development.",
        image: "", // Add appropriate image URL
        imageAlt: "CTO Jane Smith"
    }
];

const Team = () => {
    return (
        <section className="px-6 lg:px-16 py-16 bg-gray-50">
            <div className="text-center">
                <h6 className="text-blue-600 uppercase tracking-wider text-sm">About Us</h6>
                <h2 className="text-4xl font-bold text-gray-800 mt-2">Meet Our Leadership Team</h2>
                <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                    The talented individuals steering our company toward success.
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                {teamData.map((data, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 w-full md:w-72 mx-auto">
                        <div className="flex items-center justify-center">
                            <Image 
                                src={data.image} 
                                alt={data.imageAlt} 
                                className="w-32 h-32 object-cover rounded-full border-4 border-gray-800 mt-6"
                            />
                        </div>
                        <div className="p-8 text-center">
                            <h3 className="text-xl font-semibold text-gray-800">{data.name}</h3>
                            <h6 className="text-gray-600 mt-2">{data.position}</h6>
                            <p className="text-gray-600 mt-4">{data.intro}</p>
                        </div>
                        <div className="flex justify-center gap-6 mt-6 space-x-4">
                            <FiGithub className="text-2xl text-gray-600 hover:text-gray-800 cursor-pointer mb-2" />
                            <FiInstagram className="text-2xl text-gray-600 hover:text-gray-800 cursor-pointer mb-2" />
                            <FiMail className="text-2xl text-gray-600 hover:text-gray-800 cursor-pointer mb-2" />
                            <FiPhone className="text-2xl text-gray-600 hover:text-gray-800 cursor-pointer mb-2" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Team;
