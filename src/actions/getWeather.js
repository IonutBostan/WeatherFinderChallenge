const { REACT_APP_OPENWEATHERMAP_API_KEY } = process.env;

export default async (elements, options = {}) => {
  const city = (elements && elements.city && elements.city.value) || "Madrid";
  const country =
    (elements && elements.country && elements.country.value) || "es";
  const { apiKey } = options;
  const api_call = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey ||
      REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`
  );
  if (!api_call.ok) {
    return {
      error: `An error has occured: ${api_call.status}`
    };
  }
  const data = await api_call.json();
  if (city && country) {
    return {
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    };
  } else {
    return {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: "Please enter the values."
    };
  }
};
