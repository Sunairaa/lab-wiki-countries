import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function CountriesList({ countriesData }) {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {countriesData.map((country) => {
          return (
            <Link
              key={uuidv4()}
              className="list-group-item list-group-item-action"
              to={`/${country.alpha3Code}`}
            >
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt="flag"
                width={16}
                height={12}
                className="m-2"
              />
              {country.name.common}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;