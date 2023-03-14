import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { PropTypes } from 'prop-types';
import { fetchCountries } from '../redux/countries/countrySlice';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Countries = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.countries.status);
  const countries = useSelector((state) => state.countries.countryList);
  console.log(countries)


  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCountries());
    }
  }, [status, dispatch]);

  return (
       
    <>
    {countries.map((country) => (
        <Card style={{ width: '18rem' }}>
         <Button style={{ width: '4rem' }}variant="primary">Go</Button>
          <Card.Img variant="top"  src={country.flag} alt="rocket"/>
          <Card.Body>
            <Card.Title>{country.country}</Card.Title>
            <Card.Text>
            {country.cases}
            </Card.Text>
          </Card.Body>
        </Card>
          ))}
          </>
      );
    
}
  

export default Countries;
