"use client"
import { useMenuStore } from '@/store/Menu-Store'
import React from 'react'
import { useState, useEffect } from "react"

// social icons
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaYelp } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";


const Menu = () => {

    const [open, setOpen] = useState(false)
    const DisplayMenuButton = useMenuStore((state) => state.DisplayMenuButton)

   

    return (
        <div className="">
            <div>
                <div className={`${DisplayMenuButton ? 'opacity-100' : 'opacity-0'} logo-wrapper`}>
                    <svg href='/'
                        width={200}
                        viewBox="0 0 400 150"
                        className="logo cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M20 120 L100 40 L180 120" />
                        <path d="M120 120 L200 40 L280 120" />
                        <path d="M220 120 L300 40 L380 120" />
                    </svg>

                </div>
            </div>

            <button
                onClick={() => setOpen(!open)}
                className={`${DisplayMenuButton ? 'opacity-100' : 'opacity-0'} fixed top-7  xl:top-7 2xl:top-10 right-10 flex items-center gap-2 text-xl cursor-pointer z-50`}
                aria-label="Toggle menu"
            >
                <span className='font-semibold hidden lg:block'>MENU</span>
                <span className="relative w-8 h-3">
                    <span className={`absolute left-0 top-0 h-[1px] w-full bg-white transition-all duration-300 ${open ? "top-1/2 rotate-45" : ""}`} />
                    <span className={`absolute left-0 bottom-0 h-[1px] w-full bg-white transition-all duration-300 ${open ? "bottom-1/2 -rotate-45" : ""}`} />
                </span>
            </button>

            <div
                className={`fixed w-full h-full bg-[#202020] z-40 top-0 right-0 transition-transform duration-1000 ease-in-out
    ${open ? "translate-y-0" : "translate-y-full"}`}
            >
                <div className="flex flex-col gap-6 items-center justify-center h-full">
                    {["HOME", "LISTINGS", "LET'S MOVE", "ABOUT US"].map((item, index) => (
                        <span
                            key={index}
                            onClick={() => setOpen(!open)}
                            className={` text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-semibold transform transition-all duration-250
          ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
                            style={{

                                transitionDelay: open ? `${500 + index * 150}ms` : "0ms",
                            }}
                        >
                            <span className={`${index == 0 ? 'text-[#ffffff]' : 'text-[#828181]'} hover:text-[#ffffff] cursor-pointer`}>{item}</span>
                        </span>
                    ))}
                    <div className='absolute  p-2 w-full bottom-10 z-50 flex items-center justify-center text-2xl lg:text-4xl gap-10 lg:gap-20'>
                        <a href="https://www.facebook.com/MarciHomes/" target='_blank'>
                            <FaFacebook />
                        </a>
                        <a href="https://www.instagram.com/marciandlauren_nvrealtors/" target='_blank'>
                            <IoLogoInstagram />
                        </a>

                        <a href="https://www.linkedin.com/in/marci-metzger-30642496/" target='_blank'>
                            <BsLinkedin />
                        </a>
                        <a href="https://www.yelp.com/biz/marci-metzger-the-ridge-realty-pahrump" target='_blank'>
                            <FaYelp />
                        </a>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Menu