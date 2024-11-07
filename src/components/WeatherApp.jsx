import SearchInput from "./SearchInput";
import WeatherOutput from "./WeatherOutput";

export default function WeatherApp() {
  return (
    <div className="flex  justify-center  mt-20">
      <div className="w-full flex flex-col gap-2 mx-72">
        <SearchInput />
        <WeatherOutput />
      </div>
    </div>
  );
}
