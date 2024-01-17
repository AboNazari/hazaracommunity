"use client"
import React, { useState, useEffect } from 'react';
import CitiesCard from './CitiesCard';
import styles from "./cities.module.css"

function Cities() {
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('/api/cities')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setCities(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error("Fetch error:", error);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className={`${styles.spinner}`}></div>  {/* Spinner */}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-10 p-4 w-[80%] m-auto">
            {cities.map((city) => (
                <CitiesCard key={city._id} {...city} />
            ))}
        </div>
    );
}

export default Cities;

