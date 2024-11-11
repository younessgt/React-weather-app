import { Autocomplete, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";

export default function SearchInput() {
  const GEO_API_KEY = process.env.REACT_APP_GEO_APIFY_KEY;
  const WEATHER_API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  const handleSearchInput = async (e) => {
    const currentValue = e.currentTarget.value;
    let response;
    let result = [];

    if (currentValue) {
      response = await axios.get(
        `https://api.geoapify.com/v1/geocode/autocomplete?text=${currentValue}&format=json&apiKey=${GEO_API_KEY}`
      );
      if (response.status !== 200) {
        // throw new Error("Failed to fetch data");
        console.log("Failed to fetch data");
      }

      result = response.data.results.map((val) => {
        const { city, country, lat, lon, formatted } = val;
        return { city, country, lat, lon, formatted };
      });

      // console.log(result);
      setCities(result);
    }
  };

  const handleSelectedCity = (e, value) => {
    // console.log("selectedCity", value);
    setSelectedCity(value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (!selectedCity) {
      return;
    }
    const { lat, lon } = selectedCity;
    console.log(lat, lon);
    console.log(WEATHER_API_KEY);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex gap-1 justify-center">
      <Autocomplete
        className="w-full bg-white rounded-lg"
        renderInput={(params) => (
          <TextField
            {...params}
            label="Enter Your City"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "0.5rem",
              },
              "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#007bff",
              },
              "& .MuiInputBase-input": {
                color: "black",
              },
            }}
            onChange={handleSearchInput}
          />
        )}
        options={cities}
        clearOnBlur={false}
        getOptionLabel={(option) => option.formatted}
        onChange={handleSelectedCity}
      />
      <button
        className="bg-blue-500 text-white p-2 rounded-md"
        onClick={handleClick}
      >
        Search
      </button>
    </div>
  );
}
