'use client'
import React, { useState, useEffect } from 'react';
import CitiesCard from '../cities/CitiesCard';

function SearchComponent() {
    const [locations, setLocations] = useState({});
    const [selectedCountry, setSelectedCountry] = useState('');
    const [cityInput, setCityInput] = useState('');
    const [foundCityData, setFoundCityData] = useState(null);
    const [countryError, setCountryError] = useState(false);
    const [cityError, setCityError] = useState(false);

    useEffect(() => {
        fetch('/api/cities')
            .then(response => response.json())
            .then(data => {
                const locationData = data.reduce((acc, item) => {
                    const { country, city } = item;
                    acc[country] = acc[country] ? [...acc[country], item] : [item];
                    return acc;
                }, {});
                setLocations(locationData);
            })
            .catch(error => console.error('Error fetching cities:', error));
    }, []);

    const countryList = Object.keys(locations);

    const handleCountryChange = (e) => {
        const input = e.target.value.trim();
        setSelectedCountry(input);
        setCityInput('');
        setCountryError(false);
        setCityError(false);
    };

    const handleCityChange = (e) => {
        setCityInput(e.target.value.trim());
        setCityError(false);
    };

    const handleSearch = () => {
        if (selectedCountry && cityInput) {
            const countryData = locations[selectedCountry];
            if (countryData) {
                const cityData = countryData.find(item => item.city === cityInput);
                if (cityData) {
                    setFoundCityData(cityData);
                } else {
                    setFoundCityData(null);
                    setCityError(true);
                }
            } else {
                setCountryError(true);
                setFoundCityData(null);
            }
        }
    };

    // const renderCountrySuggestions = () => (
    //     countryList.map((country, index) => <option key={index} value={country} />)
    // );

    // const renderCitySuggestions = () => (
    //     selectedCountry in locations ? locations[selectedCountry].map((item, index) => (
    //         <option key={index} value={item.city} />
    //     )) : []
    // );

    return (
        <>
            <div id="cities" className="flex flex-col items-center justify-center space-y-4 mt-5 mb-10 p-10">
                <div className="mb-4 w-full max-w-md ">
                    <h2 className='mb-10 font-bold font-primary tablet:text-3xl leading-8 text-xl' >Search For Your City Protest</h2>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                    <input
                        type="text"
                        id="country"
                        value={selectedCountry}
                        onChange={handleCountryChange}
                        onBlur={handleCountryChange}
                        list="countrySuggestions"
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md border-2"
                        placeholder="Type or select a country"
                    />
                    {countryError && <p className="text-red-500 text-xs italic">Country not found</p>}
                    <datalist id="countrySuggestions">
                        {countryList.map((country, index) => <option key={index} value={country} />)}
                    </datalist>
                </div>

                {/* City Input with Suggestions */}
                <div className="w-full max-w-md">
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                    <input
                        type="text"
                        id="city"
                        value={cityInput}
                        onChange={handleCityChange}
                        onBlur={handleCityChange}
                        list="citySuggestions"
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md border-2"
                        placeholder="Type or select a city"
                        disabled={!selectedCountry || countryError}
                    />
                    {cityError && <p className="text-red-500 text-xs italic">City not found</p>}
                    <datalist id="citySuggestions">
                        {selectedCountry in locations ? locations[selectedCountry].map((item, index) => (
                            <option key={index} value={item.city} />
                        )) : []}
                    </datalist>
                </div>
                {/* Search Button */}
                <button
                    onClick={handleSearch}
                    className="px-4 py-2 bg-primary text-white font-medium rounded-md hover:bg-opacity-90 focus:outline-none disabled:bg-gray-300"
                    disabled={!selectedCountry || !cityInput || countryError || cityError}
                >
                    Search
                </button>
            </div>

            {/* Search Result */}
            {foundCityData ? (<div className='flex items-center justify-center my-10'> <CitiesCard {...foundCityData} /> </div>) :
                (countryError || cityError) && <p className="text-red-500 text-xs italic text-center">City or country not found</p>}
        </>
    );
}

export default SearchComponent;
