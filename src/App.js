import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import countryData from './countries.json';
import CountryDetails from './components/CountryDetails';

function App() {
  console.log(countryData);

  const [countriesData, setData] = useState(countryData);

  return (
 
<div className="App">
<Navbar />

<div className="container">
  <div className="row">
    <CountriesList countriesData={countriesData} />
    <Routes>
            <Route
              path=":id"
              element={<CountryDetails countriesData={countriesData} />}
            />
          </Routes>
  </div>
</div>
</div>
  );
}

export default App;
