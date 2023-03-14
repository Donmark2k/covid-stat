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
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, payload) => ({
      ...state,
      rocketList: state.rocketList.map((rocket) => {
        if (rocket.id === payload.payload) {
          if (rocket.reserved === true) {
            return { ...rocket, reserved: false };
          }
          return { ...rocket, reserved: true };
        }
        return rocket;
      }),
    }),
  },
  extraReducers(builder) {
    builder.addCase(fetchRockets.pending, (state) => ({
      ...state,
      status: 'loading',
    }))
      .addCase(fetchRockets.fulfilled, (state, action) => ({
        ...state,
        rocketList: action.payload.map((rocket) => ({
          id: rocket.id,
          name: rocket.name,
          description: rocket.description,
          flickr_images: rocket.flickr_images[0],
        })),
        status: 'loaded',
      }))
      .addCase(fetchRockets.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: [...state.error, action.error.message],
      }));
  },

});

export const { reserveRocket } = rocketSlice.actions;
export default rocketSlice.reducer;