import React from 'react';

const Flag = props => (
  <div className="flag">
  {props.country &&<img src={`http://www.countryflags.io/${props.country}/flat/64.png`} alt={props.country}/>}
  </div>
);

export default Flag;
