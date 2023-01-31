import React from 'react'
import "./CountryCard.css";

function CountryCard({country}, index) {
  const {name, capital, region, flag} = country
  return (
    <>
    <div className="countryCard">
            {/* {data.map((country, index) => ( */}
          <div className="country">
            <div className='country-name'>{name}</div>
            <div className='country-capital'>{capital}</div>
            <div className='country-continent'>{region}</div>
            <img src={flag} className='country-flag'  alt={name} />
          </div>
            {/* ))} */}
        </div>
    </>
  )
}

export default CountryCard