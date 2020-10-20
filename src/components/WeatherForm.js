import React from "react";

const WeatherForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="city" placeholder="Madrid" />
      <input type="text" name="country" placeholder="es" />
      <button>Get Weather</button>
    </form>
  );
};

export default WeatherForm;
