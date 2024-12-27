"use client"
import React from 'react';
import { HiArrowLongRight } from "react-icons/hi2";
import Image from 'next/image';
import { FaQuoteLeft } from "react-icons/fa";
import { localImages } from '@/utils/localImages';

// Feedback data
const testimonialsData = [
    {
        quote: "HackFusion has delivered excellent work. Collaborating with them was a great experience. Their dedication and results are truly commendable.",
        avatar: localImages.clientone, // Replace with the actual image path
        avatarAlt: "R.K. Tiwary",
        name: "R.K. Tiwary",
        position: "National General Secretary (AIDEOA)"
    },
    {
        quote: "Working with HackFusion was fantastic. They provided exceptional solutions and demonstrated professionalism. Truly a reliable and efficient team.",
        avatar: localImages.clienttwo, // Replace with the actual image path
        avatarAlt: "Pranav Dhingra",
        name: "Pranav Dhingra",
        position: "CEO (HedgeMyFunds)"
    }
];

const ClientFeedback = () => {
    return (
        <section className="px-5 lg:px-20 pt-20 bg-white">
            <div className="flex items-center flex-col">
                <h6 className="flex items-center gap-2 text-blue-500 font-semibold">
                    Testimonials <HiArrowLongRight />
                </h6>
                <h2 className="text-3xl my-2 text-black font-semibold">
                    Hear from Our Clients
                </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-5 py-8 lg:py-6">
                {testimonialsData.map((item, index) => (
                    <div key={index}>
                        <div className="border rounded-md p-4 card-hover">
                            <span className="text-4xl text-blue-400">
                                <FaQuoteLeft />
                            </span>
                            <p className="text-justify mt-3 text-black">{item.quote}</p>
                        </div>
                        <div className="flex items-center gap-2 mt-3">
                            <div className="p-1 rounded-full border-2 border-blue-400 card-hover">
                                <Image 
                                    src={item.avatar} 
                                    alt={item.avatarAlt} 
                                    className="w-10 h-10 rounded-full" 
                                    width={40} 
                                    height={40} 
                                />
                            </div>
                            <div>
                                <h6 className="text-md text-black">{item.name}</h6>
                                <p className="text-sm text-slate-400">{item.position}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ClientFeedback;
