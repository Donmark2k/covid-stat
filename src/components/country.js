import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { PropTypes } from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { BsArrowRightCircle } from 'react-icons/bs';
import { fetchCountries } from '../redux/countries/countrySlice';

const Countries = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.countries.status);
  const countries = useSelector((state) => state.countries.countryList);
  console.log(countries);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCountries());
    }
  }, [status, dispatch]);

  return (
    <Container style={{ display: 'block', margin: 'auto', width: '90%' }}>
      <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
        {countries.map((country) => (
          <Card key={country.country.id} bg="light" style={{ width: '10rem', height: '12rem', margin: '4px' }}>
            <Button style={{ width: '4rem', border: 'none', background: 'none' }} className="see-more" variant="primary">
              <BsArrowRightCircle style={{
                color: '#0290FF',
                height: '20px',
                width: '20px',
                cursor: 'pointer',
                transition: 'all ease-in 300ms',
                marginLeft: '250%',
              }}
              />
            </Button>
            <Card.Img
              variant="top"
              src={country.flag}
              alt="flag"
              style={{
                width: '8.3rem', opacity: '0.5', padding: 'auto', height: '4rem',
              }}
            />
            <Card.Body>
              <Card.Title style={{
                fontSize: '14px', color: '#0290FF', fontWeight: 'bold', width: '100%', textAlign: 'center',
              }}
              >
                {country.country}
              </Card.Title>
              <Card.Text style={{
                fontSize: '12px', color: '#000000', fontWeight: 'bold', width: '100%', textAlign: 'right',
              }}
              >
                {country.cases}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
};

export default Countries;
