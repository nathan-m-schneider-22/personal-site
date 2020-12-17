import React from 'react';
import '../styles/bio.scss';
import Typist from 'react-typist';
import ProfilePic from '../media/profile_pic.jpg';
import Experience from './experience';

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
      <div>
        <div className="bio-container">

          <div className="pic-container">
            <div>
              <img src={ProfilePic} className="profile-pic" alt="Nathan Schneider" />
            </div>
            <div>
              <h1>Nathan Schneider</h1>
              <Typist avgTypingDelay={30} stdTypingDelay={5} cursor={{ show: false }}>
                <h3>Software Engineer</h3>
                <h3><a href="mailto:schnei.nathan@gmail.com">schnei.nathan@gmail.com</a></h3>
              </Typist>
              <div className="logos">
                <a href="http://linkedin.com/in/nathan-schneider22/" target="_blank" rel="noreferrer">
                  <i className="fa fa-linkedin-square" />
                </a>
                <a target="_blank" href="/src/media/Full_Resume.pdf">
                  <i className="fa fa-file" />
                </a>
              </div>

            </div>
          </div>
          <div className="blurb-container">
            <Typist avgTypingDelay={20} startDelay={2000} stdTypingDelay={5} cursor={{ show: false }}>
              <p>
                Hi, I&apos;m Nathan, a computer science major at Dartmouth College, graduating in 2022.
              </p>

              <Typist.Delay ms={1000} />
              <p>
                I&apos;ve worked in full-stack web development and data science, and I&apos;m always looking to learn more!
              </p>
            </Typist>

          </div>
        </div>
        <hr />
        <Experience />
      </div>
    );
  }
}

export default Bio;