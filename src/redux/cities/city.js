import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const LOADAPI = './weatherapp/cities/LOADAPI';
const GETCOUNTRIES = './weatherapp/cities/GETCOUNTRIES';

const initialState = {
  cityDetails: [],
  cityNames: [],
};

const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${LOADAPI}/fulfilled`:
      return { ...state, cityDetails: action.payload };
    case `${GETCOUNTRIES}/fulfilled`:
      return { ...state, cityNames: action.payload };
    default:
      return state;
  }
};

const API_KEY = '6bde419484d453df852f9362ccdc4f99';
const baseURL = 'https://api.openweathermap.org/data/2.5';

export const fetchAsyncCountries = createAsyncThunk(GETCOUNTRIES, async () => {
  const res = await axios.get('https://countriesnow.space/api/v0.1/countries');
  const data = res.data.data[154].cities;
  return (data);
});

export const getWeatherData = (info, searchParams) => {
  const url = new URL(`${baseURL}/${info}`);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  return fetch(url)
    .then((res) => res.json());
};

const formatedCurrentData = async (data) => {
  const {
    coord: { lat, lon },
    id,
    name,
    wind: { speed, deg },
    main: { temp, humidity },
    sys: { country, sunrise, sunset },
  } = data;
  return {
    lat, lon, id, name, speed, deg, temp, country, sunrise, sunset, humidity,
  };
};

const arrangedWeatherData = async (searchParams) => {
  const arrangeWeatherData = await getWeatherData('weather', searchParams).then(formatedCurrentData);
  return arrangeWeatherData;
};

export const LoadCitiesApi = createAsyncThunk(LOADAPI, async (searchParams) => {
  const data = await arrangedWeatherData(searchParams);
  return (data);
});

export default citiesReducer;
