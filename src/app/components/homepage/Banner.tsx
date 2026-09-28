import React from 'react';
import Image from 'next/image';
import banner from '@/app/asset/banner.png';

const Banner = () => {
    return (
        <section className="bg-gray-900 py-16 px-6 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
                
               
                <div className="flex-1 space-y-6">
                    <p className="text-[#C2F800] font-bold tracking-wider text-sm uppercase">
                        WORKOUT LIBRARY
                    </p>
                    
                    <h1 className="font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight uppercase leading-tight font-sans">
                        TRAIN WITH INTENT. <br className="hidden sm:inline" />
                        LOG EVERY SET.
                    </h1>
                    
                    <p className="text-gray-400 text-lg max-w-xl">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.
                    </p>

                   
                    <a 
                        href="#library" 
                        className="inline-flex items-center gap-3 bg-[#C2F800] text-black font-bold px-8 py-4 rounded-xl hover:bg-[#a6d400] transition-colors duration-200 shadow-lg text-sm tracking-wider uppercase"
                    >
                        BROWSE WORKOUTS
                        {/* Down Arrow / Scroll Icon */}
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor" 
                            strokeWidth={2.5}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </a>
                </div>

                {/* Banner Image */}
                <div className="flex-1 flex justify-center lg:justify-end w-full max-w-lg lg:max-w-none">
                    <Image 
                        src={banner} 
                        alt="FitLog Gym Banner" 
                        priority 
                        className="w-full h-auto object-contain rounded-2xl"
                    />
                </div>

            </div>
        </section>
    );
};

export default Banner;