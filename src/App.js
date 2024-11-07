import logo from "./logo.svg";
import "./App.css";
import Wallpaper from "./components/Wallpaper";
import WeatherApp from "./components/WeatherApp";

function App() {
  return (
    <div className="App mt-8 ">
      <WeatherApp />
      <Wallpaper />
    </div>
  );
}

export default App;
