import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import getWeather from "../actions/getWeather";
import AppTitle from "./AppTitle";
import WeatherForm from "./WeatherForm";
import WeatherInfo from "./WeatherInfo";

export default class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };
  getWeather = async ev => {
    ev.preventDefault();
    const weather = await getWeather(ev);
    this.setState({ ...weather });
  };
  render() {
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
                  <WeatherForm onSubmit={this.getWeather} />
                  <WeatherInfo info={this.state} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
