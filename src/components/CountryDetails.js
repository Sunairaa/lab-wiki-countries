import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function CountryDetails({ countriesData }) {
    const { id } = useParams();

    const findCountry = countriesData.find((country) => {
        console.log(country.alpha3Code);
        return country.alpha3Code === id;
      });
    
      console.log(findCountry);

    return (
    <div className="col-7">
    {findCountry && (
        <>
        <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${findCountry.alpha2Code.toLowerCase()}.png`}
            alt="flag"
            className="m-2"
        />
        <h1>{findCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{width: '30%'}}>Capital</td>
            <td>{findCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
            {findCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
              {findCountry.borders.map((code) => {
                        return (
                          <li key={uuidv4()}>
                            <Link to={`/${code}`}> 
                            {countriesData.map((country) => {
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
      </>
    )}    
      
    </div>
  )
}

export default CountryDetails