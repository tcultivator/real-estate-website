'use client';

import React from 'react';
import Image from 'next/image';
import { LuMapPin } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";
import { CiClock1 } from "react-icons/ci";
import { TbMessageCircle } from "react-icons/tb";
import { VscSend } from "react-icons/vsc";

const ContactPage = () => {
    return (
        <section className="relative w-full py-24 px-4 md:px-8 lg:px-12 overflow-hidden min-h-[800px] flex items-center">

            {/* --- BACKGROUND IMAGE & OVERLAY --- */}
            <div className="absolute inset-0 z-0">
                {/* Background Image - Modern House */}
                <Image
                    src="https://images.unsplash.com/photo-1616137148650-4aa14651e02b?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Luxury Real Estate Background"
                    fill
                    className="object-cover"
                />
                {/* Dark Blue/Charcoal Overlay (Matches the reference image color) */}
                <div className="absolute inset-0 bg-[#202020]/95 z-10" />
            </div>

            <div className="relative z-20 max-w-7xl mx-auto w-full">

                {/* --- MAIN HEADER (Centered like image) --- */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
                        Get In Touch
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                        Looking to buy or sell a property? Our property specialists can help.<br className="hidden md:block" />
                        Contact us via this form or visit our office.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* --- LEFT COLUMN: Contact Info (Styled for Dark Mode) --- */}
                    <div className="flex flex-col space-y-12">

                        <div className="space-y-2">
                            <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">
                                Contact Details
                            </span>
                            <h3 className="text-3xl text-white font-serif">
                                Call or Visit
                            </h3>
                        </div>

                        {/* Info Cards */}
                        <div className="space-y-10">

                            {/* Address */}
                            <div className="flex items-start gap-5 group">
                                <div className="p-3 bg-white/10 rounded-full text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                                    <LuMapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-white mb-1">The Ridge Realty Group</h3>
                                    <p className="text-gray-400 font-light">Marci Metzger</p>
                                    <p className="text-gray-400 text-sm mt-2 leading-relaxed font-light">
                                        3190 HW-160, Suite F<br />
                                        Pahrump, Nevada 89048<br />
                                        United States
                                    </p>
                                </div>
                            </div>

                            {/* Phone & WhatsApp */}
                            <div className="flex items-start gap-5 group">
                                <div className="p-3 bg-white/10 rounded-full text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                                    <FiPhone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-white mb-1">Phone Support</h3>
                                    <p className="text-gray-300 font-light tracking-wide">(206) 919-6886</p>

                                    {/* WhatsApp Button */}
                                    <button className="mt-5 flex items-center gap-3 px-6 py-3 bg-[#25D366] hover:bg-[#1ebc57] text-white rounded-lg transition-all shadow-lg hover:shadow-green-900/20 group/btn">
                                        <TbMessageCircle className="w-5 h-5" />
                                        <span className="text-sm font-semibold tracking-wide">Message on WhatsApp</span>
                                    </button>
                                </div>
                            </div>

                            {/* Office Hours */}
                            <div className="flex items-start gap-5 group">
                                <div className="p-3 bg-white/10 rounded-full text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                                    <CiClock1 className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-white mb-1">Office Hours</h3>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                                        <span className="text-green-400 font-medium text-xs uppercase tracking-wider">Open Today</span>
                                    </div>
                                    <p className="text-gray-400 text-sm font-light">08:00 am – 07:00 pm</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* --- RIGHT COLUMN: The Form (Styled like Reference Image) --- */}
                    <div className="w-full pt-4">
                        <form className="space-y-10">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {/* Name Input */}
                                <div className="relative group">
                                    <input
                                        id="name"
                                        type="text"
                                        className="peer w-full bg-transparent border-b border-gray-600 py-3 text-white placeholder-transparent focus:border-white focus:outline-none transition-colors duration-300"
                                        placeholder="Name"
                                    />
                                    <label
                                        htmlFor="name"
                                        className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm"
                                    >
                                        Name
                                    </label>
                                </div>

                                {/* Email Input */}
                                <div className="relative group">
                                    <input
                                        id="email"
                                        type="email"
                                        className="peer w-full bg-transparent border-b border-gray-600 py-3 text-white placeholder-transparent focus:border-white focus:outline-none transition-colors duration-300"
                                        placeholder="Email Address"
                                    />
                                    <label
                                        htmlFor="email"
                                        className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm"
                                    >
                                        Email Address
                                    </label>
                                </div>
                            </div>

                            {/* Message Input */}
                            <div className="relative group">
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="peer w-full bg-transparent border-b border-gray-600 py-3 text-white placeholder-transparent focus:border-white focus:outline-none transition-colors duration-300 resize-none"
                                    placeholder="Message"
                                ></textarea>
                                <label
                                    htmlFor="message"
                                    className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm"
                                >
                                    Message
                                </label>
                            </div>

                            {/* Submit Button (Styled like Reference Image) */}
                            <div className="pt-4">
                                <button
                                    type="button"
                                    className="w-full md:w-max px-10 py-3 border border-white cursor-pointer text-white font-bold tracking-[0.15em] text-sm hover:bg-white hover:text-black active:bg-white active:text-black transition-all duration-300 uppercase"
                                >
                                    Submit
                                </button>
                            </div>

                            {/* Privacy Text */}
                            <p className="text-[10px] text-gray-500 pt-4">
                                This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                            </p>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactPage;