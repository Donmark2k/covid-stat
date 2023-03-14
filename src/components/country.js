import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { PropTypes } from 'prop-types';
import { fetchCountries } from '../redux/countries/countrySlice';

const Countries = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.countries.status);
  const countries = useSelector((state) => state.countries.countryList);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCountries());
    }
  }, [status, dispatch]);

  return (
    <h1> Hello World</h1>
  )
}
  

export default Countries;
