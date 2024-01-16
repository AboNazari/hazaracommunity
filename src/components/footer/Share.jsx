'use client'
import React, { useState } from 'react';
import { FaShareAlt } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Share() {
    const [showShareMenu, setShowShareMenu] = useState(false);

    const openShareMenu = () => setShowShareMenu(true);
    const closeShareMenu = () => setShowShareMenu(false);

    const shareOnPlatform = (platform) => {
        const shareUrl = window.location.href;
        const shareText = `Check out ${title} on the Hazara Community!`;
        let url;

        switch (platform) {
            case 'Twitter':
                url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
                window.open(url, '_blank');
                break;
            case 'Facebook':
                url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
                window.open(url, '_blank');
                break;
            case 'LinkedIn':
                url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
                window.open(url, '_blank');
                break;
            case 'Instagram':
                navigator.clipboard.writeText(shareUrl);
                alert('Link copied to clipboard. Share it on Instagram!');
                break;
            default:
                return;
        }

        closeShareMenu();
    };
    const renderShareMenu = () => (
        <div className="fixed inset-0  bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow dark:bg-gray-700 p-6 text-center relative ">
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400 mr-4">Share on Social Media</h3>
                <div className="flex flex-col justify-center gap-4 mb-5">
                    <button className="flex items-center px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600" onClick={() => shareOnPlatform('Twitter')}>
                        <FontAwesomeIcon icon={faTwitter} className="mr-2" /> Twitter
                    </button>
                    <button className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700" onClick={() => shareOnPlatform('Facebook')}>
                        <FontAwesomeIcon icon={faFacebookF} className="mr-2" /> Facebook
                    </button>
                    <button className="flex items-center px-4 py-2 text-white bg-blue-700 rounded-lg hover:bg-blue-800" onClick={() => shareOnPlatform('LinkedIn')}>
                        <FontAwesomeIcon icon={faLinkedinIn} className="mr-2" /> LinkedIn
                    </button>
                    <button className="flex items-center px-4 py-2 text-white bg-pink-600 rounded-lg hover:bg-pink-700" onClick={() => shareOnPlatform('Instagram')}>
                        <FontAwesomeIcon icon={faInstagram} className="mr-2" /> Instagram
                    </button>
                </div>
                <button onClick={closeShareMenu} className="absolute top-0 right-0 mt-4 mr-4 text-gray-400 hover:text-gray-500">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </button>
            </div>
        </div>
    );

    const openExternalLink = (url) => {
        // Ensure the URL starts with http:// or https://
        if (url.startsWith('http://') || url.startsWith('https://')) {
            window.open(url, '_blank', 'noopener,noreferrer');
        } else {
            console.error('Invalid URL');
        }
    };
    return (
        <>
            <button onClick={openShareMenu} className=" text-white px-4 py-2 bg-primary hover:bg-secondary duration-150 ease-linear flex items-center justify-center mt-5">
                <FaShareAlt className="mr-2" />
                Share Hazara Community
            </button>
            {showShareMenu && renderShareMenu()}
        </>
    )
}

export default Share