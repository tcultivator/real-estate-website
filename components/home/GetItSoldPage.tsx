'use client';

import React, { useRef } from 'react';
import Image from 'next/image';

// --- 1. Types ---
interface SlideImages {
    main: string;
    topRight: string;
    thumbs: string[];
    bottomRight: string;
}

interface Slide {
    id: number;
    category: string;
    title: string;
    description: string;
    images: SlideImages;
}

// --- 2. Data ---
const SLIDES: Slide[] = [
    {
        id: 1,
        category: "GET IT SOLD",
        title: "Top Residential Sales Last 5 Years",
        description: "We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.",
        images: {
            main: "https://images.unsplash.com/photo-1721815693498-cc28507c0ba2?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            topRight: "https://images.unsplash.com/photo-1722421492323-eaf9c401befe?q=80&w=2002&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            thumbs: [
                "https://images.unsplash.com/photo-1723110994499-df46435aa4b3?q=80&w=2079&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1626249893889-c044fd88e9f7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1686164748261-33e13eef70b6?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ],
            bottomRight: "https://images.unsplash.com/photo-1652792997653-7e5897fb309a?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    },
    {
        id: 2,
        category: "GET IT SOLD",
        title: "Don't Just List it...",
        description: "Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.",
        images: {
            main: "https://images.unsplash.com/photo-1733413788848-6f9e0c1c414c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            topRight: "https://images.unsplash.com/photo-1584752242818-b4bd7fb3fe10?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            thumbs: [
                "https://images.unsplash.com/photo-1685514823717-7e1ff6ee0563?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1759369484998-eef1942f27e7?q=80&w=1046&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1744286461758-d74f392d196c?q=80&w=925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ],
            bottomRight: "https://images.unsplash.com/photo-1716489754680-06208195b307?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    },
    {
        id: 3,
        category: "GET IT SOLD",
        title: "Guide to Buyers",
        description: "Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!",
        images: {
            main: "https://plus.unsplash.com/premium_photo-1661962952618-031d218dd040?q=80&w=896&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            topRight: "https://plus.unsplash.com/premium_photo-1661964014750-963a28aeddea?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            thumbs: [
                "https://plus.unsplash.com/premium_photo-1661962899206-de4c7391e00d?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://plus.unsplash.com/premium_photo-1661916464054-a39482dad13e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://plus.unsplash.com/premium_photo-1661964048425-ff09ffd17d1b?q=80&w=1059&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ],
            bottomRight: "https://plus.unsplash.com/premium_photo-1661964060727-8d43315efc90?q=80&w=1533&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    }
];

const GetItSoldPage: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = current.clientWidth;
            current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="relative w-full bg-[#202020] py-12 md:py-16 overflow-hidden group/section">

            {/* --- Navigation Buttons (Hidden on Mobile) --- */}
            <button
                onClick={() => scroll('left')}
                className=" block absolute left-4 top-10 lg:top-1/2 lg:-translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full transition-all "
                aria-label="Scroll left"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
            <button
                onClick={() => scroll('right')}
                className=" block absolute right-4 top-10 lg:top-1/2 lg:-translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full transition-all "
                aria-label="Scroll right"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>

            {/* --- Scroll Container --- */}
            <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide w-full"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {SLIDES.map((slide) => (
                    // Slide Wrapper
                    <div key={slide.id} className="min-w-full w-full flex-shrink-0 snap-center px-4 md:px-8 lg:px-12 flex justify-center">

                        {/* 
                           RESPONSIVE GRID:
                           - grid-cols-1: Mobile/Tablet (Everything stacks)
                           - lg:grid-cols-12: Desktop (3 columns side-by-side)
                        */}
                        <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                            {/* --- 1. Text Content --- */}
                            {/* Centered on mobile, Left aligned on Desktop */}
                            <div className="lg:col-span-4 flex flex-col relative z-10 text-center lg:text-left order-1">

                                {/* Decorative Dots (Hidden on mobile to keep it clean, visible on desktop) */}
                                <div className="hidden lg:grid absolute -top-6 -right-8 grid-cols-4 gap-2 opacity-40">
                                    {[...Array(12)].map((_, i) => (
                                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-white"></div>
                                    ))}
                                </div>

                                <span className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase mb-4">
                                    {slide.category}
                                </span>

                                <h1 className="font-playfair text-3xl md:text-5xl text-white mb-6 md:mb-8 leading-tight">
                                    {slide.title}
                                </h1>

                                <p className="text-white/80 leading-relaxed mb-6 font-light text-sm md:text-base">
                                    {slide.description}
                                </p>
                            </div>

                            {/* --- 2. Main Image --- */}
                            {/* Responsive Height: h-64 (mobile) -> h-96 (tablet) -> h-[600px] (desktop) */}
                            <div className="lg:col-span-5 order-2 h-64 md:h-96 lg:h-[600px] relative rounded-3xl overflow-hidden shadow-xl group">
                                <Image
                                    src={slide.images.main}
                                    alt={slide.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* --- 3. Right Column (Image Grid) --- */}
                            {/* On Mobile, this stacks below the main image. */}
                            <div className="lg:col-span-3 order-3 flex flex-col gap-4 h-full justify-center">

                                {/* Top Large Image */}
                                <div className="relative h-48 md:h-56 lg:h-64 w-full rounded-3xl overflow-hidden shadow-lg">
                                    <Image
                                        src={slide.images.topRight}
                                        alt=""
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Thumbnails Row */}
                                <div className="grid grid-cols-3 gap-2 h-16 md:h-20">
                                    {slide.images.thumbs.map((thumb, idx) => (
                                        <div key={idx} className="relative rounded-xl overflow-hidden">
                                            <Image src={thumb} alt="Detail" fill className="object-cover" />
                                        </div>
                                    ))}
                                </div>

                                {/* Bottom Large Image */}
                                <div className="relative h-40 md:h-48 w-full rounded-3xl overflow-hidden shadow-lg">
                                    <Image
                                        src={slide.images.bottomRight}
                                        alt=""
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

           
        </section>
    )
}

export default GetItSoldPage;