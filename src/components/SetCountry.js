import React, { useState, useEffect } from 'react';
import { Country, State, City } from 'country-state-city';

const SetCountry = () =>{
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    useEffect(() => {
        setCountries(Country.getAllCountries());
    }, []);

    useEffect(() => {
        if (selectedCountry) {
            setStates(State.getStatesOfCountry(selectedCountry));
            setCities([]);  // Reset cities when changing countries
        }
    }, [selectedCountry]);

    useEffect(() => {
        if (selectedCountry && selectedState) {
            setCities(City.getCitiesOfState(selectedCountry, selectedState));
        }
    }, [selectedState, selectedCountry]);

    return (
        <div className='flex flex-col gap-5 justify-center items-center h-fit w-[100%] p-2'>
            <div className='flex gap-2'>
                <label htmlFor="country" className='label'>Country:</label>
                <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className='text-black border text-[.7em] w-[10em]'
                id='country'
                required
            >
                <option value="" disabled>Select Country</option>
                {countries.map(country => (
                    <option key={country.isoCode} value={country.isoCode}>
                        {country.name}
                    </option>
                ))}
            </select>
            </div>
           
            <div className='flex gap-9'>
                <label htmlFor="state" className='label'>State:</label>
                <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className='text-black border text-[.7em] w-[10em]'
                id='state'
                required
                >
                    <option value="" disabled>Select State</option>
                    {states.map(state => (
                        <option key={state.isoCode} value={state.isoCode}>
                            {state.name}
                        </option>
                ))}
                </select>
            </div>
            
            <div className='flex gap-12'>
                <label htmlFor="city" className='label'>City:</label>
                <select 
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className='text-black border text-[.7em] w-[10em]'
                id='city'
                required
            >
                <option value="" disabled>Select City</option>
                {cities.map(city => (
                    <option key={city.name} value={city.name}>
                        {city.name}
                    </option>
                ))}
            </select>
            </div>
           
        </div>
    );
}


export default SetCountry