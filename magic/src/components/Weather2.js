import React from 'react';
import ReactCSSTransitionGroup from 'react-transition-group';

import "./Weather.css";


class Weather {
    render() {
        const transitionOptions = {
            transitionName: "slideIn",
            transitionEnterTimeout: 500,
            transitionLeaveTimeout: 500
        };

        <ReactCSSTransitionGroup {...transitionOptions}>
        </ReactCSSTransitionGroup>



        function ImageCarousel(props) {
          return (
            <div>
              <ReactCSSTransitionGroup
                  transitionName="slideIn"
                  transitionEnterTimeout={500}
                  transitionLeaveTimeout={500}>
                <img src={props.imageSrc} key={props.imageSrc} />
              </ReactCSSTransitionGroup>
            </div>
          );
        }
