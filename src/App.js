import logo from "./logo.svg";
import "./App.css";
import Wallpaper from "./components/Wallpaper";
import WeatherApp from "./components/WeatherApp";
import { store } from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App mt-8 ">
      <Provider store={store}>
        <WeatherApp />
        <Wallpaper />
      </Provider>
    </div>
  );
}

export default App;
