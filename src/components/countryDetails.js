import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const CountryDetails = () => {
  const { id } = useParams();
  console.log(id);

  const countries = useSelector((state) => state.countries.countryList);
  console.log(countries);

  // const country = countries.find((c) => c.country.id === parseInt(id));
  const country = countries.filter((c) => c.country.id === parseInt(id));

  // newState.books = state.books.filter((book) => book.id !== id);

  console.log(country);


  return (
    <Container style={{ display: 'block', margin: 'auto', width: '50%' }}>
        <h1>Hello World</h1>
      <Card bg="light" style={{ width: '100%', height: '100%' }}>
        <Card.Img variant="top" src={country.flag} alt="flag" style={{ width: 'auto', height: '250px' }} />
        <Card.Body>
          <Card.Title style={{ fontSize: '24px', fontWeight: 'bold' }}>{country.country}</Card.Title>
          <Card.Text style={{ fontSize: '18px' }}>
            <strong>Total Cases:</strong>
            {' '}
            {country.cases}
          </Card.Text>
          <Card.Text style={{ fontSize: '18px' }}>
            <strong>Recovered:</strong>
            {' '}
            {country.recovered}
          </Card.Text>
          <Card.Text style={{ fontSize: '18px' }}>
            <strong>Deaths:</strong>
            {' '}
            {country.deaths}
          </Card.Text>
          <Card.Text style={{ fontSize: '18px' }}>
            <strong>Active Cases:</strong>
            {' '}
            {country.active}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>

  );
};

export default CountryDetails;
