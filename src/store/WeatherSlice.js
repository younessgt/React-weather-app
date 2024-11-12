import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: undefined,
  main: {
    temp: undefined,
    feels_like: undefined,
    temp_max: undefined,
  },
  sys: {
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
  },
  weather: {
    icon: undefined,
  },
  wind: {
    speed: undefined,
  },
  isLoaded: false,
};

const WeatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeatherData: (state, action) => {
      const { name, main, sys, weather, wind } = action.payload;
      state.name = name;
      state.main = main;
      state.sys = sys;
      state.weather = weather[0];
      state.wind = wind;
      state.isLoaded = true;
    },

    resetWeatherData: (state) => {
      state.name = undefined;
      state.main = {
        temp: undefined,
        feels_like: undefined,
        temp_max: undefined,
      };
      state.sys = {
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
      };
      state.weather = {
        icon: undefined,
      };
      state.wind = {
        speed: undefined,
      };
      state.isLoaded = false;
    },
  },
});

export const { setWeatherData, resetWeatherData } = WeatherSlice.actions;
export default WeatherSlice.reducer;
