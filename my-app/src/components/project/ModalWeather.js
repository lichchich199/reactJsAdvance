//content.js
import React from "react";
import './modalThreeSixty.css'
import ThreeSixty from "react-360-view";
import { Link } from "react-router-dom";

export default function ModalWeather({ close, data }) {
    console.log('đã zô', data)
  return (
    <div className="test">
        <Link className="close" onClick={close}>
          &times;
          </Link>
        <div className="header"> Weather Location</div>
        <div className="content">
          {" "}
              <p>Name: {data.name}</p>
              <p>Clouds: {data.clouds.all}</p>
              <p>Cod: {data.cod}</p>
              <p>Coord: - lon: {data.coord.lon} - lat: {data.coord.lat}</p>
              <p>Weather: {data.weather[0].main}, {data.weather[0].description}</p>
              <p>Wind: speed-{data.wind.speed}, deg-{data.wind.deg}</p>
        </div>
      </div>
  );
}