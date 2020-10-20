import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import getWeatherAction from "../actions/getWeather";
import AppTitle from "./AppTitle";
import WeatherForm from "./WeatherForm";
import WeatherInfo from "./WeatherInfo";

const App = () => {
  const [weather, setWeather] = useState({
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  });
  const getWeather = async ev => {
    ev.preventDefault();
    const elements = ev.target.elements;
    const weather = await getWeatherAction(elements);
    setWeather({ ...weather });
  };

  return (
    <div>
      <div className="wrapper">
        <div className="main">
          <div className="container-fluid">
            <div className="row">
              <div className="col-5 title-container">
                <div>
                  <AppTitle />
                </div>
              </div>
              <div className="col-7 form-container">
                <WeatherForm onSubmit={getWeather} />
                <WeatherInfo info={weather} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
