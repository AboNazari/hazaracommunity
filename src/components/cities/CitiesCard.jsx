import Image from 'next/image';
import React from 'react';

function CitiesCard({ img, country, city, time, date, address, contact, desc }) {
    return (
        <div

            className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image src={img} alt={`${city}`} width={100} height={100} className="w-full h-48 object-cover object-center" />
            <div className="p-4">
                <h3 className="font-bold text-lg">{city}, {country}</h3>
                <p className="text-sm text-gray-600">Date: {date.substring(0, 10)} at {time}</p>
                <p className="text-sm mt-1 ">Address: {address}</p>
                {contact && <p className="text-sm mt-1">Contact: {contact}</p>}
                <p className="mt-2 text-gray-600">{desc}</p>
            </div>
        </div>
    );
}

export default CitiesCard;