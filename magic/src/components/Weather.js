import React from 'react';
import Flag from './Flag';

const Weather = props => (
  <div className="weather__info">
    {
        props.city && props.country && <p className="weather__key row"> Area:
            <span> {props.city}, {props.country} <Flag country={props.country}/></span>

        </p>
    }
    {
        props.temperature && <p className="weather__key"> Temperature:
            <span className="weather__value"> {props.temperature} </span>
        </p>
    }
    {
        props.description && <p className="weather__key"> Conditions:
        <span className="weather__value"> {props.description} </span>
        </p>
    }
    {
        props.humidity && <p className="weather__key"> Humidity:
        <span className="weather__value"> {props.humidity} </span>
        </p>
    }
    {
        props.wind && <p className="weather__key"> Wind:
        <span className="weather__value"> {props.wind} </span>
        </p>
    }
    {
        props.error && <p>
        <span className="weather__error"> {props.error} </span>
        </p>
    }
  </div>
);

export default Weather;
