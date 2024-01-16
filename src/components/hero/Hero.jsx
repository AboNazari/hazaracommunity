import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Hero() {
    return (
        <div className="relative bg-dark text-white min-h-screen flex flex-col items-center justify-center overflow-hidden tablet:mt-10">
            <Image
                src="/images/hazara.jpg" // Background image
                alt="Background"
                layout="fill"
                objectFit="cover"
                className="pointer-events-none select-none"
            />
            <div className="absolute inset-0 bg-black bg-opacity-75" /> {/* Darker overlay */}
            <div className="z-10 p-5 text-center animate-fade-in-down">
                <h1 className="laptop:text-HomeHeading text-4xl font-primary mb-4">
                    Global Voices United for Justice
                </h1>
                <p className="laptop:text-Heading3 text-2xl font-secondary mb-8">
                    Join the International Protests Against the Hazara Genocide - 21 Jan 2024
                </p>
                <p className="text-xl font-bold my-2">
                    #<span className=''>Stop</span>Hazara<span className='text-red-500'>Genocide</span>
                </p>
            </div>

            <div className="laptop:mt-10 mt-16 z-10 animate-fade-in-up">
                <Link
                    href="#cities"
                    className="px-6 py-3 bg-secondary hover:bg-tertiary rounded-full font-bold text-dark shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
                >
                    Find Your City&apos;s Protest
                </Link>
            </div>
        </div>
    )
}

export default Hero;
