import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const CountryDetails = () => {
  const { id } = useParams();

  const countries = useSelector((state) => state.countries.countryList);
  const country = countries.find((c) => c.id === parseInt(id, 10));

  return (
    <Container style={{ display: 'block', margin: 'auto', width: '50%' }}>
      <Card bg="light" style={{ width: '100%', height: '100%' }}>
        <Card.Img variant="top" src={country.flag} alt="flag" style={{ width: 'auto', height: '250px' }} />
        <Card.Body>
          <Card.Title style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center' }}>{country.country}</Card.Title>
          <Card.Text style={{ fontSize: '18px' }}>
            <strong>Total Population:</strong>
            {' '}
            {country.population}
          </Card.Text>
          <Card.Text style={{ fontSize: '18px' }}>
            <strong>Total Population Tested:</strong>
            {' '}
            {country.tests}
          </Card.Text>
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
          <Card.Text style={{ fontSize: '18px' }}>
            <strong>Critical Cases:</strong>
            {' '}
            {country.critical}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>

  );
};

export default CountryDetails;
