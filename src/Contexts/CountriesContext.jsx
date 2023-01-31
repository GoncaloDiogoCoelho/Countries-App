import React, { useEffect, useState } from 'react'
import { createContext } from 'react';
import axios from 'axios';

const CountriesContext = createContext();

export default CountriesContext;

export function CountriesContextProvider({children}) {

    const [countriesData, setCountriesData] = useState([]);

    const fetchCountries = () => {
        axios
        .get('https://restcountries.com/v2/all')
        .then((res) => {
          setCountriesData(res.data);
          setLoading(false);
        })
        .catch(()=> {
          alert("Something went wrong while retrieving the data...")
        })
      }

      useEffect(() => {
        fetchCountries()
      }, []);

  return (
    <CountriesContext.Provider
    value={{
        countriesData
    }}>
        {children}
    </CountriesContext.Provider>
  )
}
