# Weather App

A weather application built using React and Redux that allows users to search for cities and view detailed weather information, including temperature, sunrise/sunset times, wind speed, and more. The app uses data from the [OpenWeatherMap API](https://openweathermap.org/) and [Geoapify API](https://www.geoapify.com/) for city and weather information.

## Features

- **City Search**: Users can type in a city name, and the app provides autocomplete suggestions.
- **Weather Data Display**: After selecting a city, users can view real-time weather data.
- **Animations**: Weather information is displayed with smooth animations using Framer Motion.
- **Responsive Design**: The interface is designed to be accessible on different screen sizes.

## Tech Stack

- **Frontend**: React, Redux, Framer Motion, Material UI
- **API**: Geoapify , OpenWeatherMap
- **Styling**: Tailwind CSS
- **Icons**: Font Awesome

## Project Structure

- `components/`: Contains React components like `SearchInput`, `WeatherOutput`, `Wallpaper`, etc.
- `store/`: Contains Redux setup and weather data slice.
- `assets/`: Stores images like sunrise, windy, thermometer, and sunset icons.

## Prerequisites

- **Node.js**: Ensure that Node.js and npm are installed. You can download them from [here](https://nodejs.org/).

## Setup

1. Clone this repository:

   ```bash
   git clone https://github.com/younessgt/React-weather-app.git
   cd React-weather-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   - Create a `.env` file in the root directory.
   - Add your API keys as follows:
     ```env
     REACT_APP_GEO_APIFY_KEY=your_geoapify_api_key
     REACT_APP_OPEN_WEATHER_API_KEY=your_openweather_api_key
     ```

4. Start the application:
   ```bash
   npm start
   ```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Usage

1. **City Search**: Type a city name in the search bar. Autocomplete suggestions will appear based on the typed text.
2. **Select a City**: Choose a city from the suggestions, then click "Search" to fetch the weather data.
3. **Weather Display**: The weather details will appear with animated text and icons.

## Key Files

- **`SearchInput.jsx`**: Handles city search and autocompletion using Geoapify.
- **`WeatherOutput.jsx`**: Displays the weather data with animations and formatting.
- **`WeatherSlice.jsx`**: Contains Redux slice for managing weather data.
- **`store.js`**: Configures the Redux store.

## Dependencies

- **React**: Frontend library
- **Redux**: State management
- **Framer Motion**: Animation library
- **Material UI**: UI components
- **Axios**: HTTP client for API requests
- **Font Awesome**: For weather icons
