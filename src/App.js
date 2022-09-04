import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import countryData from './countries.json';
// import CountryDetails from './components/CountryDetails';
import CountryDetailsWithApi from './components/CountryDetailsWithApi';
import axios from 'axios';
const apiURL = 'https://ih-countries-api.herokuapp.com/countries';

function App() {
  console.log(countryData);
  // initialize json to state
  // const [countriesData, setData] = useState(countryData);

  // initialize state with empty array then later assign with api data
  const [countriesData, setData] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setData(response.data);
      setFetching(false);
    })
  }, [])

  return (
    <div className="App">
    {fetching && <p>LOADIND....</p>}
    <Navbar />

    <div className="container">
      <div className="row">
        <CountriesList countriesData={countriesData} />
        {/* <Routes>
          <Route
            path=":id"
            element={<CountryDetails countriesData={countriesData} />}
          />
        </Routes> */}
        <Routes>
          <Route
            path=":id"
            element={<CountryDetailsWithApi allCountriesData={countriesData}/>}
          />
        </Routes>
      </div>
    </div>
    </div>
);}

export default App;
