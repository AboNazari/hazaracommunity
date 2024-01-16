import Header from '@/src/components/navigation/Header';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/src/components/footer/footer';

function Page() {
    return (
        <>
            <Header />
            <div className="relative bg-dark text-white min-h-screen flex flex-col items-center justify-center overflow-hidden mt-10">
                <Image
                    src="/images/hero-background.jpg" // Background image
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    className="pointer-events-none select-none"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60" /> {/* Enhanced overlay opacity */}

                <div className="z-10 p-5 text-center">
                    <h1 className="text-3xl tablet:text-6xl font-bold mb-6">
                        #<span className=''>Stop</span>Hazara<span className='text-red-500'>Genocide</span>
                    </h1>
                    <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10">
                        If you don't see your city in the list, submit your city's protest information so we can publish it.
                    </p>
                </div>

                <div className="w-full max-w-lg z-10">
                    <Image
                        src="/images/genocide.jpg"

                        // Replace with relevant protest image
                        alt="Protest Image"
                        width={700}
                        height={400}
                        className="rounded-lg shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
                    />
                </div>

                <div className="mt-10 z-10">
                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLScst0OsRxdBWXJziqNjsM3U8XVXXvBU2v1jEirYYpYy7X_XgQ/viewform?usp=sf_link" className="inline-block px-6 py-3 bg-secondary hover:bg-tertiary rounded-full font-bold text-dark text-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                        Submit info
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );

}

export default Page;