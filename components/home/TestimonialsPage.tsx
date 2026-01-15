'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';



interface Review {
    id: number;
    name: string;
    date: string;
    initial: string;
    bgColor: string; 
    rating: number;
    text: string;
}

// mock data
const REVIEWS: Review[] = [
    {
        id: 1,
        name: "Brandi Gordon",
        date: "4 years ago",
        initial: "B",
        bgColor: "bg-orange-500",
        rating: 5,
        text: "What an amazing group of humans here at The Ridge. They are such a team! They know the biz inside and out. They are available anytime I need them-nights, weekends and even Sundays!! This process is stressful and they really listen and are always willing to go the extra mile!"
    },
    {
        id: 2,
        name: "Destene G.",
        date: "5 years ago",
        initial: "D",
        bgColor: "bg-purple-600",
        rating: 5,
        text: "To: Ms marci and Lauren and mrs dupree thank you for your expertise and patience it was an enjoyable experience and you have a great real estate agency thank you so much -bobby (aka Robert)"
    },
    {
        id: 3,
        name: "Tasha Douglas",
        date: "2 years ago",
        initial: "T",
        bgColor: "bg-blue-500",
        rating: 5,
        text: "Outstanding group of Realtors, with an incredible amount of knowledge throughout the whole team."
    },
    {
        id: 4,
        name: "Cheryl T.",
        date: "a year ago",
        initial: "C",
        bgColor: "bg-fuchsia-700",
        rating: 5,
        text: "Very professional and knowledgeable. Very well groomed..trying to price your home right the first time when listing..would recommend her and her company."
    },
    {
        id: 5,
        name: "Brent R.",
        date: "2 years ago",
        initial: "B",
        bgColor: "bg-orange-500",
        rating: 5,
        text: "Marci is by far the most professional realtor I have ever worked with. I have purchased about 15 homes in all and have had many different realtors involved in the transactions. Mostly good experiences but none compare to the professionalism that was given by Marci. Responsive and offered great advice."
    },
    {
        id: 6,
        name: "Briana Durham",
        date: "4 years ago",
        initial: "B",
        bgColor: "bg-indigo-700",
        rating: 5,
        text: "I love the real estate group, they are professional go above and beyond for their clients and know how to support buyers and sellers through out the process. You won’t be disappointed if you choose to work with this amazing firm."
    },
    {
        id: 7,
        name: "	Teresa L.",
        date: "4 years ago",
        initial: "T",
        bgColor: "bg-blue-500",
        rating: 5,
        text: "Professional, friendly and knows her profession well. Pahrump is lucky to have her 30+ years of experience. I highly recommend Marci and Lauren. Best of luck with your new endeavor."
    }
];

// --- Google G Icon Component ---
const GoogleIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
);

const TestimonialsPage = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // Scroll Handler
    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = 350;
            current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    // Track active slide for dots
    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, clientWidth } = scrollContainerRef.current;
            const index = Math.round(scrollLeft / 350);
            setActiveIndex(index);
        }
    };

    return (
        <section className="w-full bg-white py-20 px-4 md:px-12 relative">

            {/* Heading */}
            <div className="text-center mb-16">
                <h2 className="font-semibold text-2xl text-gray-500 uppercase">
                    Kind Words
                </h2>
            </div>

            {/* Slider Container */}
            <div className="max-w-[1400px] mx-auto relative group">

                {/* Navigation Arrows (Left) */}
                <button
                    onClick={() => scroll('left')}
                    className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors z-10 hidden md:block"
                >
                    <ChevronLeft className="w-8 h-8 md:w-12 md:h-12 font-thin" strokeWidth={1} />
                </button>

                {/* Scrollable Area */}
                <div
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scrollbar-hide px-4"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {REVIEWS.map((review) => (
                        <div
                            key={review.id}
                            className="min-w-[300px] max-w-[300px] md:min-w-[350px] md:max-w-[350px] flex-shrink-0 snap-center"
                        >
                            {/* Card Header: Avatar & Name */}
                            <div className="flex items-start justify-between mb-4  ">
                                <div className="flex gap-4">
                                    {/* Avatar */}
                                    <div className={`w-12 h-12 rounded-full ${review.bgColor} flex items-center justify-center text-white font-medium text-xl`}>
                                        {review.initial}
                                    </div>

                                    {/* Name & Date */}
                                    <div className="flex flex-col">
                                        <span className="text-[#1a3dbf] font-bold text-sm">
                                            {review.name}
                                        </span>
                                        <span className="text-gray-500 text-xs mt-0.5">
                                            {review.date}
                                        </span>
                                    </div>
                                </div>

                                {/* Google Icon */}
                                <GoogleIcon />
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]"
                                    />
                                ))}
                            </div>

                            {/* Text Body with Custom Scrollbar */}
                            <div className="relative">
                                
                                <div className="h-50 max-h-50 overflow-y-auto pr-3 text-gray-700 text-sm leading-relaxed custom-scrollbar font-sans">
                                    {review.text}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                {/* Navigation Arrows (Right) */}
                <button
                    onClick={() => scroll('right')}
                    className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors z-10 hidden md:block"
                >
                    <ChevronRight className="w-8 h-8 md:w-12 md:h-12 font-thin" strokeWidth={1} />
                </button>

            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-4">
                
                <div className={`w-2 h-2 rounded-full transition-colors ${activeIndex === 0 ? 'bg-[#1a3dbf]' : 'bg-gray-300'}`}></div>
                <div className={`w-2 h-2 rounded-full transition-colors ${activeIndex > 2 ? 'bg-[#1a3dbf]' : 'bg-gray-300'}`}></div>
            </div>

           

        </section>
    );
};

export default TestimonialsPage;