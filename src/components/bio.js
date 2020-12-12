import React from 'react';
import '../styles/bio.scss';
import ProfilePic from '../media/profile_pic.jpg';

class Bio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    if (!window.location.origin.includes('localhost')) {
      console.log('Sending ip');
      this.reportIP();
    }
  }

  reportIP = () => {
    fetch('https://icanhazip.com/').then((res) => res.text()).then((data) => {
      console.log(data);
      const live = 'https://ip-reporter.herokuapp.com/report';
      //   const local = 'http://localhost:9090/report';
      fetch(live, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ip: data }),
      });
    });
  }

  render() {
    return (
      <div className="bio-container">

        <img src={ProfilePic} className="profile-pic" alt="Nathan Schneider" />
        <h1>Nathan Schneider</h1>
        <h3>Software Developer, Dartmouth Junior</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    );
  }
}

export default Bio;
