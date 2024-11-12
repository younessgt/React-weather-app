import { FaLocationDot, FaClock } from "react-icons/fa6";
import { FaThermometerHalf } from "react-icons/fa";
import { useSelector } from "react-redux";

import sunrise from "../assets/img/sunrise.png";
import windy from "../assets/img/windy.png";
import thermometer from "../assets/img/thermometer.png";
import sunset from "../assets/img/sunset.png";

export default function WeatherOutput() {
  const weather = useSelector((state) => state.weather);

  // function to display current time in the format "Day, HH:MM AM"
  const displayCurrentTime = () => {
    const date = new Date();
    const day = date.toLocaleDateString("en-US", { weekday: "long" });
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");

    const amOrPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    return `${day}, ${hours}:${minutes} ${amOrPm}`;
  };

  const covertTimestampToTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const time = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return time;
  };

  return (
    <>
      {JSON.stringify(weather.icon)}
      {weather?.isLoaded ? (
        <div className="flex flex-col  bg-gray-400 bg-opacity-60 rounded-md items-center">
          <div className="w-90 flex flex-col justify-center gap-4 mb-10">
            <div>
              <div className="flex  justify-center items-center mt-4 ">
                <h1 className="text-2xl font-bold text-center pr-3">
                  {weather.name}, {weather.sys.country}
                </h1>
                <FaLocationDot className="w-4 h-4" />
              </div>
              <div className="flex  justify-center items-center">
                <h5>{displayCurrentTime()}</h5>
                <FaClock className="w-4 h-4 ml-2" />
              </div>
            </div>
            <div className="flex justify-center mt-4 items-center">
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather.icon}@2x.png`}
                alt="weather icon"
              />
            </div>
            <div>
              <div className="flex  justify-center items-center">
                <h1 className="text-6xl font-bold text-center">
                  {Math.round(weather.main.feels_like)}°C
                </h1>
                <FaThermometerHalf className="w-10 h-11 mt-2" />
              </div>
              <h5>Good Morning {weather.name}</h5>
            </div>
            <div className="h-1 bg-white"></div>
            <div className="flex justify-between rounded-md bg-gray-200 bg-opacity-50 px-4">
              <div className="flex flex-col  justify-center items-center mx-4">
                <img src={sunrise} alt="" className="w-10" />
                <h1>Sunrise</h1>
                <h1>{covertTimestampToTime(weather.sys.sunrise)}</h1>
              </div>
              <div className="w-[1px] bg-white my-2"></div>
              <div className="flex flex-col items-center mx-4">
                <img src={windy} alt="" className="w-10" />
                <h1>Wind</h1>
                <h1>{Math.round(weather.wind.speed)}m/s</h1>
              </div>
              <div className="w-[1px] bg-white my-2"></div>
              <div className="flex flex-col items-center mx-4">
                <img src={thermometer} alt="" className="w-10" />
                <h1>Max Temp</h1>
                <h1>{Math.round(weather.main.temp_max)}°C</h1>
              </div>
              <div className="w-[1px] bg-white my-2"></div>
              <div className="flex flex-col items-center mx-4">
                <img src={sunset} alt="" className="w-10" />
                <h1>Sunset</h1>
                <h1>{covertTimestampToTime(weather.sys.sunset)}</h1>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col  bg-gray-400 bg-opacity-60 rounded-md items-center">
          <h1> Please enter a City</h1>
        </div>
      )}
    </>
  );
}
