import React from 'react'
import { MdOutlineArrowDownward } from "react-icons/md";

const TitlePage = () => {
    return (
        <div className="w-full   relative h-[100dvh] md:h-screen flex items-center justify-center overflow-hidden">
            <div className="hero relative bg-black aspect-video w-full overflow-hidden">
                <img
                    src="/test1.webp"
                    className="absolute inset-0 w-full h-full object-cover opacity-80 brightness-60"
                />
                <div className="hero-text absolute inset-0 flex items-center justify-center flex-col text-white">
                    <span className="flex flex-col justify-center text-center md:gap-2 md:flex-row line line-1 [text-shadow:.5px_.5px_.5px_black] [-webkit-text-stroke:0.2px_black] text-2xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-sans font-semibold leading-none">
                        <span>MARCI METZGER</span> <span className='hidden md:block'>-</span> <span>THE RIDGE REALTY GROUP</span>
                    </span>

                    <span className="line line-2 uppercase [text-shadow:.5px_.5px_.5px_black] [-webkit-text-stroke:0.2px_black] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-sans font-semibold leading-none">
                        Pahrump Realtor
                    </span>
                    <div className="mt-3 flex items-center gap-2">
                        <a href="tel:(206) 919-6886" className="line line-3 px-10 py-4 border border-white text-white font-bold tracking-[0.15em] text-sm hover:bg-white hover:text-black active:bg-white active:text-black transition-all duration-300 uppercase">
                            CALL NOW
                        </a>

                    </div>

                </div>
            </div>

            <div className='w-[95%] p-1 absolute bottom-5 flex px-3 items-center justify-center md:justify-between'>
                <span className='flex flex-col justify-center md:flex-row items-center gap-2 uppercase text-white/50 text-sm lg:text-lg 2xl:text-xl'>
                    scroll down
                    <MdOutlineArrowDownward className='text-2xl animate-up-down' />
                </span>
                <span className='hidden md:block uppercase text-white/50 text-sm lg:text-lg 2xl:text-xl'>
                    Nevada, United States
                </span>
            </div>
        </div>
    )
}

export default TitlePage