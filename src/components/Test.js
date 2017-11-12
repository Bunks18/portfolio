import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import '../App.css';

class Test extends Component {
  render() {
    return (
      <div className="back">
        <div className="white-bottom">
          <img src={require('../Capture.PNG')} className="App-logo" />
          <h2>Will Bunker</h2>
          <h4>Washington, DC</h4>
          <h4>Technical Consultant</h4>
          <SocialIcon
            className="icon"
            url="https://www.linkedin.com/in/will-bunker-428b9155/"
          />
          <SocialIcon className="icon" url="https://github.com/Bunks18/" />
        </div>
        <div className="proj">
        <h2>About</h2>
      </div>
        <div className="container">
          <div className="about">
            <div className="about-child section-1">
              <h3>Me</h3>
              <h4>I'm Will and I'm a technology consultant by day and</h4>
              <h4>an aspiring web developer when I'm not doing that.</h4>
              <h4>
                I love learning, building things I don't how to build, and{' '}
              </h4>
              <h4>I thrive in a team environment.</h4>
            </div>
            <div className="about-child">
              <h3>Skills</h3>
              <h4>
                <h4>Languages: Javascript · HTML · CSS · R</h4>
                <h4>Front-End: React · Redux · Plotly · jQuery</h4>
                <h4>Back-End: Node · Express · Mongo · SQL · Socket.io</h4>
                <h4>BI Tools: Tableau · PowerBI · Microstrategy · Alteryx </h4>
              </h4>
            </div>
          </div>
        </div>

        <div className="proj">
          <h2>Projects</h2>
        </div>

        <div className="container padding">
          <div className="about-child">
            <img
              src={require('../yelp.PNG')}
              alt="img23"
              className="port-img left"
            />
          </div>
          <div className="about-child right-text">
            <h2>Yelp Clone</h2>
            <h4 className="code">HTML · CSS · jQuery · Foursquare API</h4>
            <h4>
              My first date with state, what a ride. Built with jQuery and some{' '}
            </h4>
            <h4>
              love from Foursquare's API to give users the ability to quickly
            </h4>
            <h4> search for restaurants in their area.</h4>
          </div>
        </div>
        <div className="container">
          <div className="about-child left-text">
            <h2>Tailored Travels</h2>
            <h4 className="code">HTML · CSS · PHP · Javascript</h4>
            <h4>
              A gift to my father. His very own consulting services website.
            </h4>
            <h4>
              Built from a HTML template I bought off Themeforest. This was
            </h4>
            <h4> an excellent side project to test my web development</h4>
            <h4> fundamentals. Moving forward I would not recommend using</h4>
            <h4>a custom HTML template though because of how easy it is </h4>
            <h4>
              to standup a simle site like this with wordpress or another CMS.{' '}
            </h4>
          </div>
          <div className="about-child right-img">
            <img
              src={require('../tt.PNG')}
              alt="img23"
              className="port-img right-img"
            />
          </div>
        </div>
        <div className="container">
          <div className="about-child ">
            <img
              src={require('../goal.PNG')}
              alt="img23"
              className="port-img left"
            />
          </div>
          <div className="about-child right-text">
            <h2>Goal Getter</h2>
            <h4 className="code">Node · Express · Mongo · React · Redux </h4>
            <h4>
              My first full stack application. A labor of love the resulted
            </h4>
            <h4>
              in an ugly baby. This application allows users to create goals
            </h4>
            <h4>
              {' '}
              and enter reflections for those goals to stay on track. Not
            </h4>
            <h4>exactly the next Facebook but this project was instrumental</h4>
            <h4>
              {' '}
              in my web development learning process because it was my first
            </h4>
            <h4>
              {' '}
              experience passing data back and forth from the server to the
              client.
            </h4>
          </div>
        </div>
        <div className="container padding">
          <div className="about-child left-text">
            <h2>Slack Clone</h2>
            <h4 className="code">
              Node · Express · Mongo · Socket.io · React · Redux{' '}
            </h4>
            <h4>
              A slack clone built on the MERN stack. This application allows
            </h4>
            <h4>users to chat with other users on different channels. Using</h4>
            <h4>
              {' '}
              Socket.io to provide real time communication this application
            </h4>
            <h4>
              {' '}
              served as the perfect project to gain an appreciation for managing
            </h4>
            <h4>application state.</h4>
          </div>
          <div className="about-child right-img">
            <img
              src={require('../slack.PNG')}
              alt="img23"
              className="port-img right-img"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Test;
