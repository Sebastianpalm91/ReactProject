import React from "react";
import "./Form.css";

const Form = props => (
    <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="city" />
        <input type="text" name="country" placeholder="country" />

        <button className="search-button" type="submit">
            Search Weather
        </button>
    </form>
);

export default Form;
