
import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl,Grid } from '@material-ui/core';
import { fetchCountries } from '../../api';


const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  return (
    <Grid container spacing={1} justify="center" >  
    <FormControl className={FormControl}>
      <h1 >Select Country</h1>
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
    </Grid>
  );
};

export default Countries;
