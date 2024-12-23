'use client'
import React, { useState } from 'react';
import { HiArrowLongRight } from "react-icons/hi2";
import Image from 'next/image';
import { localImages } from '@/utils/localImages';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { firstName, lastName, email, phone, message } = formData;

        const requestBody = {
            access_key: "b5e8be7a-d6b8-4b86-b7c6-9f80b689d110", // Your Web3Forms Access Key
            name: `${firstName} ${lastName}`,
            email,
            message,
        };

        if (phone) {
            requestBody.phone = phone; // Add phone number if provided
        }

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(requestBody),
        });

        const result = await response.json();
        if (result.success) {
            alert("Message sent successfully!");
            setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' }); // Reset form fields
        } else {
            alert("Failed to send the message. Please try again.");
        }
    };

    return (
        <section className="px-5 lg:px-20 py-20 w-full lg:flex items-start bg-white">
            <div className="w-full lg:w-1/3">
                <h6 className="flex items-center gap-2 text-blue-500 font-semibold">
                    About Us <HiArrowLongRight />
                </h6>
                <h2 className="text-3xl my-2 text-black font-semibold">Get in Touch</h2>
                <p className="text-slate-400 text-xl">Please feel free to contact us.</p>

                <form onSubmit={handleSubmit} className="mt-5">
                    <div className="flex gap-5">
                        <label className="form-control w-full">
                            <span className="label-text text-slate-400">First Name</span>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="text-black input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </label>
                        <label className="form-control w-full">
                            <span className="label-text text-slate-400">Last Name</span>
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="text-black input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </label>
                    </div>
                    <label className="form-control mt-4">
                        <span className="label-text text-slate-400">Email</span>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="text-black input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </label>
                    <label className="form-control mt-4">
                        <span className="label-text text-slate-400">Phone Number</span>
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number (Optional)"
                            value={formData.phone}
                            onChange={handleChange}
                            className="text-black input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </label>
                    <label className="form-control mt-4">
                        <span className="label-text text-slate-400">Message</span>
                        <textarea
                            name="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            className="text-black textarea textarea-bordered w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        ></textarea>
                    </label>
                    <button type="submit" className="btn bg-blue-500 text-white hover:bg-blue-600 w-full mt-4">
                        Send Message
                    </button>
                </form>
            </div>
            <div className="w-full mt-8 lg:mt-0 lg:w-2/3">
                <div className="flex justify-end">
                    <Image
                        src={localImages.contactUs}
                        alt="Contact Us"
                        width={600}
                        height={300}
                        className="rounded-md"
                    />
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
