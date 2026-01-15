'use client';

import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaYelp } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const FooterPage = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-black text-white pt-20 pb-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">

                {/* --- TOP SECTION: 4 COLUMNS --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    {/* Column 1: Brand & Bio */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-serif tracking-wide text-white">
                            MARCI METZGER <br />
                            <span className="text-sm font-sans font-bold tracking-[0.2em] text-gray-500">THE RIDGE REALTY GROUP</span>
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Your partner in finding the perfect property.
                        </p>
                        {/* Social Icons */}
                        <div className="flex items-center gap-4 pt-2">
                            <SocialIcon icon={<FaFacebookF />} href="https://www.facebook.com/MarciHomes/" />
                            <SocialIcon icon={<FaInstagram />} href="https://www.instagram.com/marciandlauren_nvrealtors/" />
                            <SocialIcon icon={<FaLinkedinIn />} href="https://www.linkedin.com/in/marci-metzger-30642496/" />
                            <SocialIcon icon={<FaYelp />} href="https://www.yelp.com/biz/marci-metzger-the-ridge-realty-pahrump" />
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-300">Explore</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><FooterLink href="#">Home</FooterLink></li>
                            <li><FooterLink href="#">Listings</FooterLink></li>
                            <li><FooterLink href="#">Let's Move</FooterLink></li>
                            <li><FooterLink href="#">About Us</FooterLink></li>
                            
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-300">Contact</h3>
                        <div className="space-y-4 text-sm text-gray-400">
                            <p>
                                <span className="block text-white mb-1">Office</span>
                                3190 HW-160, Suite F<br />
                                Pahrump, Nevada 89048
                            </p>
                            <p>
                                <span className="block text-white mb-1">Phone</span>
                                (206) 919-6886
                            </p>
                            <p>
                                <span className="block text-white mb-1">Email</span>
                                marcimetzger@gmail.com
                            </p>
                        </div>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-300">Newsletter</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Subscribe to receive the latest listing updates and market insights.
                        </p>
                        <form className="flex flex-col gap-3">
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors"
                                />
                                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors">
                                    <BsArrowRight size={18} />
                                </button>
                            </div>
                            <p className="text-[10px] text-gray-500">
                                By subscribing, you agree to our Privacy Policy.
                            </p>
                        </form>
                    </div>

                </div>

                {/* --- BOTTOM SECTION: COPYRIGHT & LEGAL --- */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

                    <div className="text-gray-500 text-xs text-center md:text-left">
                        <p>&copy; {currentYear} Marci Metzger Homes. All rights reserved.</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-500">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
                    </div>

                    {/* Real Estate Badges (Text or Icon representation) */}
                    <div className="flex items-center gap-2 text-gray-600 text-[10px] uppercase tracking-wider">
                        <span>Equal Housing Opportunity</span>
                        <span>•</span>
                        <span>Realtor</span>
                    </div>

                </div>
            </div>
        </footer>
    );
};

// --- Helper Components ---

const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <Link href={href} className="hover:text-white transition-colors duration-300 inline-flex items-center gap-2 group">
        <span className="w-0 group-hover:w-2 h-[1px] bg-white transition-all duration-300"></span>
        {children}
    </Link>
);

const SocialIcon = ({ icon, href }: { icon: React.ReactNode, href: string }) => (
    <Link
        href={href}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white hover:bg-white hover:text-black transition-all duration-300"
    >
        {icon}
    </Link>
);

export default FooterPage;