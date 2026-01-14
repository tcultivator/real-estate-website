import React from 'react'

const TitlePage = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center overflow-hidden">
            <div className="hero relative aspect-video w-full overflow-hidden">
                <img
                    src="/test1.webp"
                    className="absolute inset-0 w-full h-full object-cover opacity-80 brightness-80"
                />



                <div className="hero-text absolute inset-0 flex items-center justify-center flex-col text-white">
                    <span className="line line-1 [text-shadow:.5px_.5px_.5px_black] [-webkit-text-stroke:0.2px_black] sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-sans font-semibold leading-none">
                        MARCI METZGER - THE RIDGE REALTY GROUP
                    </span>

                    <span className="line line-2 uppercase [text-shadow:.5px_.5px_.5px_black] [-webkit-text-stroke:0.2px_black] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-sans font-semibold leading-none">
                        Pahrump Realtor
                    </span>
                    <div className="mt-3 flex items-center gap-2">
                        <a href="tel:(206) 919-6886" className="line line-3 text-white bg-white/20 backdrop-blur-sm hover:bg-white/30 hover:border-white/40 hover:text-white/80 border border-white/30 px-10 py-4 cursor-pointer flex items-center justify-center rounded-[25px] ">
                            CALL NOW
                        </a>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default TitlePage