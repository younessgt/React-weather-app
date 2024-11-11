import { FaLocationDot, FaClock } from "react-icons/fa6";
import { FaThermometerHalf } from "react-icons/fa";

import sunrise from "../assets/img/sunrise.png";

export default function WeatherOutput() {
  return (
    <div className="flex flex-col  bg-gray-400 bg-opacity-60 rounded-md items-center">
      <div className="w-80 flex flex-col justify-center gap-4 mb-10">
        <div>
          <div className="flex  justify-center items-center mt-4 ">
            <h1 className="text-2xl font-bold text-center pr-3">
              Casablanca, MA
            </h1>
            <FaLocationDot className="w-4 h-4" />
          </div>
          <div className="flex  justify-center items-center">
            <h5>Saturday, 15:00 AM</h5>
            <FaClock className="w-4 h-4 ml-2" />
          </div>
        </div>
        <div className="flex justify-center mt-4 items-center">
          <img
            src="https://www.weatherbit.io/static/img/icons/r01d.png"
            alt="weather icon"
          />
        </div>
        <div>
          <div className="flex  justify-center items-center">
            <h1 className="text-6xl font-bold text-center">35°C</h1>
            <FaThermometerHalf className="w-10 h-11 mt-2" />
          </div>
          <h5>Good Morning Casablanca</h5>
        </div>
        <div className="h-1 bg-white"></div>
        <div className="flex justify-between rounded-md bg-gray-200 bg-opacity-50 px-4">
          <div className="flex flex-col  justify-center items-center">
            <img src={sunrise} alt="" className="w-10" />
            <h1>Sunrise</h1>
            <h1>08:00</h1>
          </div>
          <div className="w-[1px] bg-white my-2"></div>
          <div className="flex flex-col ">
            <img src={sunrise} alt="" className="w-10" />
            <h1>Sunrise</h1>
            <h1>08:00</h1>
          </div>
          <div className="w-[1px] bg-white my-2"></div>
          <div className="flex flex-col">
            <img src={sunrise} alt="" className="w-10" />
            <h1>Sunrise</h1>
            <h1>08:00</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
