'use client';

import React from 'react';
import Image from 'next/image';

const GallerPage = () => {
    const images = [
        { src: "/photogallery/pg1.webp", alt: "" },
        { src: "/photogallery/pg3.webp", alt: "" },
        { src: "/photogallery/pg4.webp", alt: "" },
        { src: "/photogallery/pg5.webp", alt: "" },
        { src: "/photogallery/pg2.webp", alt: "" },
        { src: "/photogallery/pg6.webp", alt: "" },
        { src: "/photogallery/pg7.webp", alt: "" },
    ];

    return (
        <div className='flex flex-col w-full py-16 gap-10'>
            <div className='w-[95%] mx-auto'>
                <span className='text-2xl lg:text-4xl'>PHOTO GALLERY</span>
            </div>
            <section className="relative w-full  py-12 overflow-hidden ">

                {/* Decorative Crosshairs */}
                <div className="absolute left-4 top-4 md:left-8 md:top-8 z-20 pointer-events-none">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 4V20M4 12H20" /></svg>
                </div>
                <div className="absolute left-4 bottom-4 md:left-8 md:bottom-8 z-20 pointer-events-none">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 4V20M4 12H20" /></svg>
                </div>

                {/* --- UPDATED CLASS NAME: gallery-wrap --- */}
                <div className="gallery-wrap w-full flex items-center relative z-10 ml-20">

                    {/* --- UPDATED CLASS NAME: gallery-track --- */}
                    <div className="gallery-track flex gap-4 md:gap-8 w-max px-4 md:px-8 hover:[animation-play-state:paused]">

                        {/* SET 1 */}
                        {images.map((img, index) => (
                            <div key={`original-${index}`} className="relative h-[200px] opacity-90 md:h-[300px] lg:h-[400px] aspect-[4/3] md:aspect-video lg:aspect-[4/3] flex-shrink-0">
                                <Image src={img.src} alt={img.alt} fill className="object-cover  transition-all duration-500 ease-in-out" />
                            </div>
                        ))}

                        {/* SET 2 */}
                        {images.map((img, index) => (
                            <div key={`duplicate-${index}`} className="relative h-[200px] opacity-90 md:h-[300px] lg:h-[400px] aspect-[4/3] md:aspect-video lg:aspect-[4/3] flex-shrink-0">
                                <Image src={img.src} alt={img.alt} fill className="object-cover  transition-all duration-500 ease-in-out" />
                            </div>
                        ))}

                    </div>
                </div>


            </section>
        </div>

    );
};

export default GallerPage;