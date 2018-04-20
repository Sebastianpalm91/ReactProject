import React from "react";
import "./Form.css";

const Form = props => (
<<<<<<< HEAD
    <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="city" />
        <input type="text" name="country" placeholder="country" />

        <button className="search-button" type="submit">
            Search Weather
        </button>
    </form>
=======
  <form onSubmit={props.getWeather}>

  <input type="text" name="city" placeholder="city"/>
  <input type="text" name="country" placeholder="country"/>

  <button type="submit">Search Weather</button>

  </form>
>>>>>>> 2c04a9e80b84ed9e00cf5544331987ce05a6454d
);

export default Form;
