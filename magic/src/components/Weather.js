import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import Flag from './Flag';
import './WeatherAnimation.css';

class Weather extends Component {

    render () {
        // const transitionOptions = {
        //     transitionName: "slideIn",
        //     transitionEnterTimeout: 500,
        //     transitionLeaveTimeout: 500
        // };

        return (

            <div className="weather__info">
                {
                    <CSSTransition
                        transitionName="slideIn"
                        className="weather__key"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}
                        >
                    this.props.city && this.props.country && <p className="weather__key"> Area:
                    <span> {this.props.city}, {this.props.country}
                        <Flag country={this.props.country}/>
                    </span>
                    </p>
                    </CSSTransition>
                }

                {
                    this.props.temperature && <p className="weather__key"> Temperature:
                    <span className="weather__value"> {this.props.temperature} </span>
                    </p>
                }
                {
                    this.props.description && <p className="weather__key"> Conditions:
                    <span className="weather__value"> {this.props.description} </span>
                    </p>
                }
                {
                    this.props.humidity && <p className="weather__key"> Humidity:
                    <span className="weather__value"> {this.props.humidity} </span>
                    </p>
                }
                {
                    this.props.wind && <p className="weather__key"> Wind:
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
