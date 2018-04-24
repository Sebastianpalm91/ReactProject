import React from 'react';
import "./Flag.css";

const Flag = props => (
  <div className="flag">
  {props.country &&<img src={`http://www.countryflags.io/${props.country}/flat/32.png`} alt={props.country}/>}
  </div>
);

export default Flag;
