import React from 'react';
import '../styles/bio.scss';

class Bio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    // this.reportIP();
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

        <h1>Nathan Schneider</h1>
        <p>I am a software developer</p>
      </div>
    );
  }
}

export default Bio;
