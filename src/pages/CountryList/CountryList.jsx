import axios from 'axios';
import React, { useState, useMemo, useEffect, useContext } from 'react';
import { Link } from "react-router-dom"
import CountryCard from '../../components/CountryCard';
// import PageSize from '../../components/Pagination/PageSize';
import Pagination from '../../components/Pagination/Pagination';
import "./CountryList.css"
import CountriesContext from '../../Contexts/CountriesContext';

let PageSize = 9;

function CountryList() {
  const { countriesData } = useContext(CountriesContext);

  const [countrySearchValue, setCountrySearchValue] = useState("");
  
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return countriesData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const searchCountryHandler = (e) => {
    setCountrySearchValue(e.target.value)
  }

  function shortenString() {
  const str = "asdfghjklkjhjyfjfgfds"
  const MAX_LENGTH = 14;
  if (str.length > MAX_LENGTH) {
    return str.substring(0, MAX_LENGTH) + "(...)";
  console.log(str);
  }
  return str;
}

  // number of countries:
  // console.log(Object.keys(countriesData).length);

  return (
    <>
        <h1 className='title'>Country List</h1>
        <Link to="/" style={{ textDecoration: "none" }}>
        <h4 className="link-dashboard">Home</h4>
      </Link>
      {/* <PageSize /> */}
        <input className="searchBar-input" type="search" name="search" placeholder='Search here'
             onChange={searchCountryHandler} value={countrySearchValue}/>
                       <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={countriesData.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
          <div className="cardList">
        {countriesData && currentTableData?.filter((data) => data.name.toLowerCase()
        .includes(countrySearchValue))
        .map((country, index) => <CountryCard id={index} key={index} country={country}/>)}
            {/* <CountryCard data={currentCountries}/> */}
          </div>
    </>
  )
}

export default CountryList;
