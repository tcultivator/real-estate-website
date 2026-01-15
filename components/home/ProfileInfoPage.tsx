"use client"
import React from 'react'
import Image from 'next/image'
import { useOnInView } from "react-intersection-observer";
import { useState } from 'react';
const ProfileInfoPage = () => {
    const [inView, setInView] = useState(false)
    const trackingRef = useOnInView(
        (inView, entry) => {
            if (inView) {

                setInView(true)
            } else {
                setInView(false)
            }
        },
        {
            /* Optional options */
            threshold: 0.5,
            triggerOnce: false,
        },
    );
    return (
        <div ref={trackingRef} className="w-full bg-black  text-white py-16">
            <div className="w-[90%] md:w-[85%] mx-auto flex flex-col lg:flex-row items-start justify-between gap-10">

                {/* LEFT */}
                <div className="flex items-start gap-4 w-full lg:w-1/2">
                    <div className={`${inView ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 rounded-full w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] overflow-hidden shrink-0`}>
                        <Image
                            src="/ppp.webp"
                            width={500}
                            height={500}
                            alt=""
                            className="rounded-full object-cover"
                        />
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className={`${inView ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 delay-100 flex flex-col`}>
                            <span className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
                                MARCI METZGER
                            </span>
                            <span className="text-sm sm:text-base md:text-lg font-light text-white/70">
                                REALTOR FOR NEARLY 3 DECADES!
                            </span>
                        </div>
                        <div className={`${inView ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 delay-200`}>
                            <span>
                                Marci was a REALTOR, then licensed Broker, in Washington State. Now, she is
                                enjoying the sunshine, and helping clients in Southern Nevada. Having helped
                                buyers and sellers in many markets since 1995, she is a wealth of knowledge.
                            </span>
                        </div>
                    </div>


                </div>

                {/* RIGHT */}
                <div className="flex flex-col gap-6 w-full lg:w-1/2 leading-relaxed text-sm sm:text-base">


                    <div className={`${inView ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 delay-300 flex flex-col gap-2 border-l-2 border-white/20 pl-4 sm:pl-6`}>
                        <span className="font-semibold text-base sm:text-lg">
                            In Her Words
                        </span>
                        <span>
                            "I love that small-town feeling that our community offers. Spectacular golf
                            courses, parks, pool, and easy access to Las Vegas make Pahrump a great place
                            to call home. Working or retired, fast-paced or looking to relax... there's a
                            place for you here! I enjoy living in the Mountain Falls community and will
                            strive to find you a home that will suit you just as this community does me."
                        </span>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default ProfileInfoPage