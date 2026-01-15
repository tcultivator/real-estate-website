import React from 'react'
import Image from 'next/image';
const PartnersIconsPage = () => {
    const logos = [
        { src: "/imageForSnakeAnimation/p1.png", alt: "The Ridge Realty Group" },
        { src: "/imageForSnakeAnimation/p2.png", alt: "Equal Housing Opportunity" },
        { src: "/imageForSnakeAnimation/p3.png", alt: "Pahrump Valley Chamber" },
        { src: "/imageForSnakeAnimation/p4.png", alt: "Realtor" },
    ];
    return (
        <section className="w-full bg-black py-12">
            <div className="max-w-[1400px] mx-auto">
               
                <div className="ticker-wrap w-full flex">

                    <div className="ticker-track items-center">

                        
                        <div className="flex items-center gap-16 px-8">
                            {logos.map((logo, index) => (
                                <div
                                    key={`original-${index}`}
                                    className="relative h-16 w-32 md:h-20 md:w-44 grayscale hover:grayscale-0 transition-all duration-300  cursor-pointer"
                                >
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            ))}
                        </div>

                        
                        <div className="flex items-center gap-16 px-8">
                            {logos.map((logo, index) => (
                                <div
                                    key={`duplicate-${index}`}
                                    className="relative h-16 w-32 md:h-20 md:w-44 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer"
                                >
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default PartnersIconsPage