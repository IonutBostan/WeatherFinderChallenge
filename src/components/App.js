import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import getWeather from "../actions/getWeather";

export default class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
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
                    <h1 className="title-container__title">Weather Finder</h1>
                    <h3 className="title-container__subtitle">
                      Find out temperature, conditions and more...
                    </h3>
                  </div>
                </div>
                <div className="col-7 form-container">
                  <form onSubmit={getWeather}>
                    <input type="text" name="city" placeholder="Madrid" />
                    <input type="text" name="country" placeholder="es" />
                    <button>Get Weather</button>
                  </form>
                  <div className="weather__info">
                    {this.state.city &&
                      this.state.country && (
                        <p className="weather__key">
                          {" "}
                          Location:
                          <span className="weather__value">
                            {" "}
                            {this.state.city}, {this.state.country}
                          </span>
                        </p>
                      )}
                    {this.state.temperature && (
                      <p className="weather__key">
                        {" "}
                        Temperature:
                        <span className="weather__value">
                          {" "}
                          {this.state.temperature}{" "}
                        </span>
                      </p>
                    )}
                    {this.state.humidity && (
                      <p className="weather__key">
                        {" "}
                        Humidity:
                        <span className="weather__value">
                          {" "}
                          {this.state.humidity}{" "}
                        </span>
                      </p>
                    )}
                    {this.state.description && (
                      <p className="weather__key">
                        {" "}
                        Conditions:
                        <span className="weather__value">
                          {" "}
                          {this.state.description}{" "}
                        </span>
                      </p>
                    )}
                    {this.state.error && (
                      <p className="weather__error">{this.state.error}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
