import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';
import Share from './Share';


const Footer = () => {
    return (
        <footer className="bg-white text-primary pt-5">
            <div className="p-5 container mx-auto laptop:w-[70vw] tablet:w-[90vw] text-center flex flex-col tablet:flex-row justify-between gap-10 px-5 ">
                <div className='w-[50vw] tablet:w-auto text-left tablet:ml-0'>
                    <Image src="/svgs/logo.png" alt="Hazara Community Logo" className=" mb-4" width={200} height={200} />
                    <p></p>
                    <Share />
                </div>
                <div className='text-end mr-10 tablet:mr-0'>
                    <h2 className="mb-4 font-bold tablet:text-3xl text-2xl">Contact Us</h2>
                    <a href="tel:+19296414581" className="block mb-2">+996 (501) 700-784</a>
                    <a href="mailto:info@kaajeducation.org" className="block mb-4 underline">abullahnazari2001@gmail.com</a>
                    <div className="flex justify-end space-x-4 mb-4 text-2xl text-black">
                        <a href="https://www.facebook.com/profile.php?id=100021635318420" aria-label="Facebook"><FaFacebook className="text-black-400 hover:text-blue-600 transition duration-300 text-xl" /></a>
                        <a href="https://twitter.com/Abdullah1Nazari" aria-label="Twitter">
                            <FaTwitter className="text-black-400 hover:text-blue-600 transition duration-300 text-xl" />
                        </a>
                    </div>
                </div>
            </div>
            <p className='text-center text-[10px] mb-4'>©2024 by HazaraCommunity.org</p>
        </footer>
    );
};

export default Footer;