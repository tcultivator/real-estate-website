import React from 'react'
import { MdOutlineArrowDownward } from "react-icons/md";

const TitlePage = () => {
    return (
        <div className="w-full   relative h-screen flex items-center justify-center overflow-hidden">
            <div className="hero relative bg-black aspect-video w-full overflow-hidden">
                <img
                    src="/test1.webp"
                    className="absolute inset-0 w-full h-full object-cover opacity-80 brightness-60"
                />
                <div className="hero-text absolute inset-0 flex items-center justify-center flex-col text-white">
                    <span className="line line-1 [text-shadow:.5px_.5px_.5px_black] [-webkit-text-stroke:0.2px_black] sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-sans font-semibold leading-none">
                        MARCI METZGER - THE RIDGE REALTY GROUP
                    </span>

                    <span className="line line-2 uppercase [text-shadow:.5px_.5px_.5px_black] [-webkit-text-stroke:0.2px_black] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-sans font-semibold leading-none">
                        Pahrump Realtor
                    </span>
                    <div className="mt-3 flex items-center gap-2">
                        <a href="tel:(206) 919-6886" className="transition-all duration-500 line line-3 text-white bg-black/20 backdrop-blur-sm hover:bg-white/30 hover:border-white/40 hover:text-white/80 border border-white/30 px-10 py-4 cursor-pointer flex items-center justify-center rounded-[25px] ">
                            CALL NOW
                        </a>

                    </div>

                </div>
            </div>

            <div className='w-[95%] p-1 absolute bottom-5 flex px-3 items-center justify-between'>
                <span className='flex items-center gap-2 uppercase text-white/50 text-xl'>
                    scroll down
                    <MdOutlineArrowDownward className='text-2xl'/>
                </span>
                <span className='uppercase text-white/50 text-xl'>
                     Nevada, United States
                </span>
            </div>
        </div>
    )
}

export default TitlePage