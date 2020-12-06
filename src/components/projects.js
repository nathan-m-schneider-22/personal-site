import React from 'react';
import '../styles/projects.scss';

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
        <p>I have worked on many projects</p>
      </div>
    );
  }
}

export default Bio;
