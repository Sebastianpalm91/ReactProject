import React, { Component } from 'react';
import Flag from './Flag';
import './WeatherAnimation.css';
//

// </CSSTransition>
class Weather extends Component {

    render () {

        return (
            <div className="weather__info">

                {
                    this.props.city && this.props.country &&
                    <p className="weather__key fading-left-weather"> Area:
                    <span> {this.props.city}, {this.props.country}
                        <Flag country={this.props.country}/>
                    </span>
                    </p>
                }
                {
                    this.props.temperature && <p className="weather__key fading-left-weather"> Temperature:
                    <span className="weather__value"> {this.props.temperature} </span>
                    </p>
                }
                {
                    this.props.description && <p className="weather__key fading-left-weather"> Conditions:
                    <span className="weather__value"> {this.props.description} </span>
                    </p>
                }
                {
                    this.props.humidity && <p className="weather__key fading-left-weather"> Humidity:
                    <span className="weather__value"> {this.props.humidity} </span>
                    </p>
                }
                {
                    this.props.wind && <p className="weather__key fading-left-weather"> Wind:
                    <span className="weather__value"> {this.props.wind} </span>
                    </p>
                }
                {
                this.props.error && <p>
                <span className="weather__error"> {this.props.error} </span>
                </p>
                }
            </div>
        );
    };
}



export default Weather;
