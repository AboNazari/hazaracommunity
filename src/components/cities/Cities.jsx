"use client"
import React from 'react';
import CitiesCard from './CitiesCard';
import { useState, useEffect } from 'react';

function Cities() {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        fetch('/api/cities')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();  // Directly parsing the JSON data
            })
            .then(data => {
                setCities(data);  // Updating the state with fetched data
            })
            .catch(error => {
                console.error("Fetch error:", error);
            });

    }, []);

    return (
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-10 p-4 w-[80%] m-auto">
            {cities.map((city) => (
                <CitiesCard key={city._id} {...city} />
            ))}
        </div>
    );
}

export default Cities;