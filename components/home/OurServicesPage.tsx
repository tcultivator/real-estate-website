"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MdOutlineArrowForward } from "react-icons/md";


const services = [
    {
        title: "Real Estate Done Right",
        desc: `Nervous about your property adventure? Don't be.
Whether you're getting ready to buy or sell your residence,
looking at investment properties, or just curious about the markets,
our team ensures you get the best experience possible!`,
    },
    {
        title: "Commercial & Residential",
        desc: `Large or small, condo or mansion, we can find it and get the price that's right.
Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community.`,
    },
    {
        title: "Rely on Expertise",
        desc: `If you have questions about affordability, credit, and loan options,
trust us to connect you with the right people to get the answers you need.
We make sure you feel confident and educated every step of the way.`,
    },
];

const images = [
    {
        src: 'https://images.unsplash.com/photo-1670589953903-b4e2f17a70a9?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
    ,
    {
        src: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
]

const OurServicesPage = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const [imageIndex, setImageIndex] = useState(0)

    const prevSlide = () => {
        setActiveIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setActiveIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))

        }, 5000);
        return () => clearInterval(interval);
    }, []);


    return (
        <div className="w-full bg-black min-h-screen py-16">
            <div className="flex flex-col gap-6">
                <div className='w-[95%] mx-auto'>
                    <span className='text-2xl lg:text-4xl'>OUR SERVICES</span>
                </div>

                <div className="w-full relative h-[85vh]">
                    {/* Background Image */}
                    <div className="absolute inset-0 h-[85vh] overflow-hidden">
                        <Image
                            src={images[imageIndex].src}
                            alt=""
                            fill

                            className="object-cover animate-slow-zoom"
                            priority
                        />
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden lg:flex absolute top-0 w-full h-[85vh]">
                        {services.map((item, index) => (
                            <div
                                key={index}
                                className="group flex flex-col gap-3 w-1/3 h-full p-2 justify-center items-center border-r-[4px] border-[#202020] transition-all duration-500 hover:bg-black/20 hover:backdrop-blur-sm cursor-pointer"
                            >
                                <span className="font-playfair text-center text-2xl md:text-3xl font-semibold tracking-tight transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-3 [text-shadow:.5px_.5px_.5px_black] [-webkit-text-stroke:0.2px_black]">
                                    {item.title}
                                </span>

                                <span className="w-[80%] text-center opacity-0 translate-y-6 max-h-0 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-hover:translate-y-0 group-hover:max-h-40">
                                    {item.desc}
                                </span>

                                <div className="mt-3 opacity-0 group-hover:opacity-100">
                                    <button
                                        type="button"
                                        className="px-10 py-4 border border-white text-white font-bold tracking-[0.15em] text-sm hover:bg-white hover:text-black active:bg-white active:text-black transition-all duration-300 uppercase"
                                    >
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Slider */}
                    <div className="flex flex-col lg:hidden absolute bottom-0 w-[90%] right-1/2 translate-x-1/2 h-[70vh] items-center justify-center">
                        <div className="w-full h-full flex flex-col gap-4 p-4 justify-center items-center bg-black/20 backdrop-blur-sm">
                            <span className="uppercase text-2xl font-semibold text-center">
                                {services[activeIndex].title}
                            </span>
                            <span className="text-center w-[95%] sm:w-[90%] md:w-[80%] mx-auto">{services[activeIndex].desc}</span>
                            <span className="flex items-center gap-2 text-white bg-gradient-to-r from-primary via-secondary to-primary border border-white/30 px-6 py-3 rounded-[25px] mt-4">
                                LEARN MORE <MdOutlineArrowForward className="text-2xl" />
                            </span>
                        </div>

                        {/* Slider Buttons */}
                        <div className="flex gap-4 absolute bottom-[-60px]">
                            <button
                                onClick={prevSlide}
                                className="bg-white/10 hover:bg-white/20 active:bg-white/20 backdrop-blur-md text-white p-3 rounded-full"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </button>
                            <div className="flex items-center gap-2">
                                {services.map((data, index) => (
                                    <div key={index} className={`w-[10px] h-[10px]  ${activeIndex == index ? 'bg-white w-[20px] rounded-[10px]' : 'bg-white/50 backdrop-blur-md rounded-[50%]'}  h-[2px]`}></div>
                                ))}
                            </div>
                            <button
                                onClick={nextSlide}
                                className="bg-white/10 hover:bg-white/20 active:bg-white/20 backdrop-blur-md text-white p-3 rounded-full"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServicesPage;
