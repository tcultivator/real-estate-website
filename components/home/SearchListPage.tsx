import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import Image from 'next/image';

const SearchListPage = () => {
    return (
        <section className="relative w-full min-h-[600px] flex items-center justify-center px-4 py-20 overflow-hidden">

            
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?q=80&w=1632&auto=format&fit=crop"
                    alt="Luxury Ocean View"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/20 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
            </div>

            
            <div className={`relative z-10 w-full max-w-6xl mx-auto `}>

                <div className="text-center mb-12">
                    <h1 className={` text-3xl md:text-5xl text-white uppercase leading-tight drop-shadow-lg`}>
                        Find Your Dream Home
                    </h1>
                </div>

               
                <div className="  p-6 md:p-8">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <CustomSelect label="Location" placeholder="Select Location" />
                        <CustomSelect label="Type" placeholder="Property Type" />
                        <CustomSelect label="Sort By" placeholder="Newest Listings" />
                    </div>

                   
                    <div className="grid grid-cols-2 md:grid-cols-12 gap-6 items-end">

                        
                        <div className="col-span-1 md:col-span-2">
                            <CustomSelect label="Bedrooms" placeholder="Any" />
                        </div>

                        
                        <div className="col-span-1 md:col-span-2">
                            <CustomSelect label="Baths" placeholder="Any" />
                        </div>

                       
                        <div className="col-span-1 md:col-span-3">
                            <CustomInput label="Min Price" placeholder="$ Min" />
                        </div>

                        
                        <div className="col-span-1 md:col-span-3">
                            <CustomInput label="Max Price" placeholder="$ Max" />
                        </div>

                       
                        <div className="col-span-2 md:col-span-2">
                            <button className="w-full h-[50px] cursor-pointer bg-white/50 hover:bg-white text-gray-800 font-bold text-sm tracking-widest uppercase rounded shadow-lg transition-all duration-300">
                                Search Now
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

const CustomSelect = ({ label, placeholder }: { label: string, placeholder: string }) => (
    <div className="flex flex-col gap-2">
        <label className="text-white text-sm font-medium tracking-wide shadow-black drop-shadow-md">
            {label}
        </label>
        <div className="relative group">
            <select
                className="w-full h-[50px] pl-4 pr-10 bg-black/10 backdrop-blur-md border border-white/20 text-white text-sm rounded border-none outline-none focus:ring-2 focus:ring-white appearance-none cursor-pointer transition-colors"
                defaultValue=""
            >
                <option value="" disabled>{placeholder}</option>
                <option className='text-black' value="1">Option 1</option>
                <option className='text-black' value="2">Option 2</option>
                <option className='text-black' value="3">Option 3</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white">
                <MdKeyboardArrowDown />
            </div>
        </div>
    </div>
);

const CustomInput = ({ label, placeholder }: { label: string, placeholder: string }) => (
    <div className="flex flex-col gap-2">
        <label className="text-white text-sm font-medium tracking-wide shadow-black drop-shadow-md">
            {label}
        </label>
        <input
            type="number"
            placeholder={placeholder}
            className="w-full h-[50px] px-4 bg-black/10 backdrop-blur-md border border-white/20 text-white text-sm rounded border-none outline-none focus:ring-2 focus:ring-white transition-colors placeholder:text-gray-400"
        />
    </div>
);

export default SearchListPage