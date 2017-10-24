import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import '../App.css';

class Test extends Component {
  render() {
    return (
      <div className="back">
        <h2>Hi</h2>
        <h4>
          My name is Will and this is my porfolio site. I'm a technology consultant
           by day and an aspiring web developer when I'm not doing
          that.
        </h4>
        <SocialIcon className="icon" url="https://www.linkedin.com/in/will-bunker-428b9155/" />
        <SocialIcon className="icon" url="https://github.com/Bunks18/"/>
        <div className="content">
          <div className="grid">
            <figure className="effect-goliath">
              <img src={require('../yelp.PNG')} alt="img23" />
              <figcaption>
                <p>
                  My first date with state, what a ride. Built with jQuery and
                  some love from 4square's api
                </p>
                <a
                  target="_blank"
                  href="https://bunks18.github.io/Restaurant-Recommendation-Application/index.html"
                >
                  View more
                </a>
              </figcaption>
            </figure>
            <figure className="effect-goliath">
            <img src={require('../tt.PNG')} alt="img23" />
            <figcaption>
              <p>
                A gift to my father. His very own travel consulting services website. Built with an html template purchased from Themeforest for $17.
              </p>
              <a
                target="_blank"
                href="http://tailoredtravels.co/index.html"
              >
                View more
              </a>
            </figcaption>
          </figure>
          <figure className="effect-goliath">
          <img src={require('../goal.PNG')} alt="img23" />
          <figcaption>
            <p>
              My first full stack application. A labor of love that resulted in an ugly baby. Built with Mongo, Node, Express, React, & Redux.
            </p>
            <a
              target="_blank"
              href="https://cryptic-brushlands-72828.herokuapp.com/landing"
            >
              View more
            </a>
          </figcaption>
        </figure>
        <figure className="effect-goliath">
        <img src={require('../slack.PNG')} alt="img23" />
        <figcaption>
          <p>
            My pride and joy. Coming soon...a slack clone, but way worse. Built on the MERN stack with socket.io.
          </p>
        </figcaption>
      </figure>
        </div>
      </div>
      </div>
    );
  }
}

export default Test;
