'use client'
import React, { useState } from 'react';

const locationData = {
    USA: ['New York', 'Los Angeles', 'Chicago'],
    Canada: ['Toronto', 'Vancouver', 'Montreal'],
    // ... other countries and cities
};

function SearchComponent() {
    const [selectedCountry, setSelectedCountry] = useState('');
    const [cityInput, setCityInput] = useState('');
    const [countryError, setCountryError] = useState(false);
    const [cityError, setCityError] = useState(false);
    const [searchResult, setSearchResult] = useState('');

    const countryList = Object.keys(locationData);
    const citySuggestions = selectedCountry in locationData ? locationData[selectedCountry] : [];

    const handleCountryChange = (e) => {
        const input = e.target.value.trim();
        setSelectedCountry(input);
        setCityInput('');
        setCountryError(!countryList.map(c => c.toLowerCase()).includes(input.toLowerCase()));
    };

    const handleCityChange = (e) => {
        const input = e.target.value.trim();
        setCityInput(input);
        setCityError(!citySuggestions.map(c => c.toLowerCase()).includes(input.toLowerCase()));
    };

    const handleSearch = () => {
        if (!countryError && !cityError && selectedCountry && cityInput) {
            setSearchResult(`Searching for events in ${cityInput}, ${selectedCountry}`);
            // Here, you can add logic to navigate to a specific URL or display search results
        }
    };

    return (
        <>
            <div id="cities" className="flex flex-col items-center justify-center  space-y-4 mt-5 mb-10 p-10">
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
                        {countryList.map((country, index) => (
                            <option key={index} value={country} />
                        ))}
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
                        {citySuggestions.map((city, index) => (
                            <option key={index} value={city} />
                        ))}
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
            {
                searchResult && (
                    <div className="p-4 bg-green-100 border border-green-300 rounded-md">
                        {searchResult}
                    </div>
                )
            }
        </>
    );
}

export default SearchComponent;
