import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

function CountryDetailsWithApi({ allCountriesData }) {
    const { id } = useParams();
    console.log(id)
    const [countryData, setCountryData] = useState({});
    const [fetching, setFetching] = useState(true);

    
    useEffect(() => {
        axios
        .get(`https://ih-countries-api.herokuapp.com/countries/${id}`)
        .then(resposne => {
            console.log(resposne.data);
            console.log(countryData);
            setCountryData(resposne.data)
            setFetching(false);
            console.log(countryData);
        })
    }, [id])
    if(fetching)
    {
      return(<p>Loading...</p>)
    }
  return (
    
    <div className="col-7">
        <div>CountryDetailsWithApi</div>
    
       
        <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${countryData.alpha2Code.toLowerCase()}.png`}
            alt="flag"
            className="m-2"
        />
       <h1>{countryData.name.common}</h1> 
        <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{width: '30%'}}>Capital</td>
            <td>{countryData.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
            {countryData.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
              {countryData.borders.map((code) => {
                        return (
                          <li key={uuidv4()}>
                            <Link to={`/${code}`}> 
                              {allCountriesData.map((country) => {
                                  if (country.alpha3Code === code) {
                                    return country.name.common;
                                  }
                              })}
                            </Link>
                          </li>
                        );
                      })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
  

    )
}

export default CountryDetailsWithApi