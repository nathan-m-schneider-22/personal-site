import React from 'react';
import '../styles/projects.scss';
import Squirrel from '../media/squirrel.jpg';

class Bio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="projects-container">
        <h1>Projects</h1>

        <div className="projects-list">
          <div className="project">
            <div>
              <h2> Squirrel Camera</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <img src={Squirrel} className="project-pic" alt="squirrel in crosshairs" />
          </div>
          <div className="project">
            <div>
              <h2> Squirrel Camera</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <img src={Squirrel} className="project-pic" alt="squirrel in crosshairs" />
          </div>
          <div className="project">
            <div>
              <h2> Squirrel Camera</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <img src={Squirrel} className="project-pic" alt="squirrel in crosshairs" />
          </div>

        </div>
      </div>
    );
  }
}

export default Bio;
