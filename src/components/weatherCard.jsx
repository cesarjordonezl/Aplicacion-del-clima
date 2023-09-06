import React, { useState } from "react";

const WeatherCard = ({ weather, temp }) => {
  const [isCelsius, setIsCelsius] = useState(true);
   console.log(weather)
  const handleChangeTemp = () => setIsCelsius(!isCelsius);

  return (

    <div className="caja">
    <article>
      <h1>Weather App</h1>
      <h2>
        {weather?.name}, {weather?.sys.country}
      </h2>
      <div className="datos">
        <div className="img">
          <img
            src={
              weather &&
              `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`
            }
            alt=""
          />
        </div>
        <section>
          <h3>"{weather?.weather[0].description} "</h3>
          <ul className="columnas">
            <li>
              <span>Wind speed </span>
              <span className="resp">{weather?.wind.speed} m/s </span>
            </li>
            <li>
              <span>Clouds</span>
              <span>{weather?.clouds.all} % </span>
            </li>
            <li>
              <span>Pressure</span>
              <span>  {weather?.main.pressure}     hPa </span>
            </li>
          </ul>
        </section>
      </div>

      <h2> {isCelsius ? `${temp?.celsius} *C` : `${temp?.farenheit} *F`} </h2>
      <button className="bto-cambio" onClick={handleChangeTemp}>
        {isCelsius ? `change to *F` : `change to *C`}{" "}
      </button>
    </article>

    </div>
  );
};

export default WeatherCard;
