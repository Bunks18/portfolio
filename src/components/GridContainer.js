import React, { Component } from 'react';
import '../Grid.css';

class GridContainer extends Component {
  render() {
    return (
      <div className="main">
        <div className="wrapper">
          <div className="header" />
          <div className="section-1-1 section">
            <img
              src={require('../yelp.PNG')}
              alt="img23"
              className="port-left img"
            />
            <div className="center">
            <a className="" target="_blank" href="https://bunks18.github.io/Restaurant-Recommendation-Application/index.html" rel="noopener noreferrer">
              <button className="button">Demo</button>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Bunks18/Restaurant-Recommendation-Application">

            <button className="button">Code</button>
          </a>
          </div>

          </div>
          <div className="section-1-2 section text">
          <h2 className="project-header">Yelp Clone</h2>
          <h4 className="code">HTML · CSS · jQuery · Foursquare API</h4>
            <h5 className="desc">
              My first date with state, what a ride. Built with jQuery and some
              love from Foursquare's API to give users the ability to quickly
              search for restaurants in their area.
            </h5>
          </div>
          <div className="section-2-1 section text-left">
          <h2 className="project-header">Yelp Clone</h2>
          <h4 className="code">HTML · CSS · jQuery · Foursquare API</h4>
          <h5 className="desc">
          My first date with state, what a ride. Built with jQuery and some
          love from Foursquare's API to give users the ability to quickly
          search for restaurants in their area.
        </h5>
          </div>
          <div className="section-2-2 section">
            {' '}
            <img
              src={require('../tt.PNG')}
              alt="img23"
              className="img"
            />
            <div className="center">
            <a className="" target="_blank" href="https://bunks18.github.io/Restaurant-Recommendation-Application/index.html" rel="noopener noreferrer">
              <button className="button">Demo</button>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Bunks18/Restaurant-Recommendation-Application">

            <button className="button">Code</button>
          </a>
          </div>
          </div>
          <div className="section-3-1 section" />
          <div className="section-3-2 section" />
        </div>
      </div>
    );
  }
}

export default GridContainer;
