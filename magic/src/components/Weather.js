import React from 'react';

const Weather = props => (
  <div>
    {props.city && props.country && <p>Area: {props.city}, {props.country}</p>}
    {props.temperature && <p>Temperature: {props.temperature}</p>}
    {props.description && <p>Conditions: {props.description}</p>}
    {props.humidity && <p>Humidity: {props.humidity}</p>}
    {props.wind && <p>Wind: {props.wind}</p>}
    {props.error && <p>{props.error}</p>}
  </div>
);

export default Weather;
