import getWeather from "../actions/getWeather";

test("Bad API key", async done => {
  function callback(data) {
    try {
      expect(data.error).toBe("An error has occured: 401");
      done();
    } catch (error) {
      done(error);
    }
  }

  const response = await getWeather(
    { city: { value: "Barcelona", country: "es" } },
    { apiKey: "bad-api-key" }
  );
  callback(response);
});

test("Barcelona, es", async done => {
  function callback(data) {
    try {
      expect(data.city).toBe("Barcelona");
      done();
    } catch (error) {
      done(error);
    }
  }

  const response = await getWeather({
    city: { value: "Barcelona", country: "es" }
  });
  callback(response);
});

test("Non-existent place", async done => {
  function callback(data) {
    try {
      expect(data.error).toBe("An error has occured: 404");
      done();
    } catch (error) {
      done(error);
    }
  }

  const response = await getWeather({
    city: { value: "I-do-not-exist", country: "nowhere" }
  });
  console.log("response", response);
  callback(response);
});
