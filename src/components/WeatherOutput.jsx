import sunrise from "../assets/img/sunrise.png";

export default function WeatherOutput() {
  return (
    <div className="flex flex-col  bg-gray-400 bg-opacity-60 rounded-md items-center">
      <div className="w-80 flex flex-col justify-center gap-4 mb-10">
        <div>
          <h1 className="text-2xl font-bold text-center mt-4">
            Casablanca, MA{" "}
          </h1>
          <h5>Saturday, 15:00 AM</h5>
        </div>
        <div className="flex justify-center mt-4 items-center">
          <img
            src="https://www.weatherbit.io/static/img/icons/r01d.png"
            alt="weather icon"
          />
        </div>
        <div>
          <h1 className="text-6xl font-bold text-center">35 C</h1>
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
