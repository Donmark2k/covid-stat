import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api = 'https://disease.sh/v3/covid-19/countries';

const initialState = {
  countryList: [],
  status: 'idle',
  error: null,
};

export const fetchCountries = createAsyncThunk('country/fetchCountries', async () => {
  try {
    const response = await axios.get(api);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    // reserveRocket: (state, payload) => ({
    //   ...state,
    //   rocketList: state.rocketList.map((rocket) => {
    //     if (rocket.id === payload.payload) {
    //       if (rocket.reserved === true) {
    //         return { ...rocket, reserved: false };
    //       }
    //       return { ...rocket, reserved: true };
    //     }
    //     return rocket;
    //   }),
    // }),
  },
  extraReducers(builder) {
    builder.addCase(fetchCountries.pending, (state) => ({
      ...state,
      status: 'loading',
    }))
      .addCase(fetchCountries.fulfilled, (state, action) => ({
        ...state,
        countryList: action.payload.map((country) => ({
          updated: country.id,
          country: country.name,
          cases: country.description,
          deaths: country.deaths,
        })),
        status: 'loaded',
      }))
      .addCase(fetchCountries.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: [...state.error, action.error.message],
      }));
  },

});

export default countrySlice.reducer;