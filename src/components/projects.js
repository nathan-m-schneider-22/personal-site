import React from 'react';
import '../styles/projects.scss';
import Carousel from 'react-elastic-carousel';
import Squirrel from '../media/squirrel.png';
import Moonboard from '../media/moonboard.jpg';
import Vox from '../media/vox.png';
import SLAR from '../media/slar.jpg';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="projects-container">
        <h1>Projects</h1>
        <Link to="/engs21/">
              Introduction to Engineering
            </Link>

        <div className="projects-list">
          <Carousel itemsToShow={1}>

            <div className="project">
              <div className="project-blurb">
                <h1> Squirrel-Cam Bird Feeder Defense System</h1>
                <h3>June 2020 - Present</h3>
                <p>
                  When it comes to bird feeders, squirrels are a tenacious threat.
                  Using near-infrared spotlights and cameras, combined with a Tensorflow object recognition model,
                  intelligent surviellance was established.
                  Once identified, the program running on a Raspberry Pi will use its volage pins to trigger irrigation equipment to spray the offending squirrels.
                </p>
              </div>
              <img src={Squirrel} className="project-pic" alt="squirrel in crosshairs" />
            </div>

            <div className="project">
              <img src={Vox} className="project-pic" alt="Vox daily logo" />
              <div className="project-blurb">
                <h1> Vox Daily Platform</h1>
                <h3>September 2020 - December 2020</h3>
                <p>
                  Partnering with the DALI Lab, Dartmouth College sought to remake its faculty news aggregation platform.
                  On this project, I implemented a React/Redux frontend, Node.js backend, and MongoDB stack from the ground up.
                </p>
              </div>
            </div>

            <div className="project">
              <div className="project-blurb">
                <h1> Moonboard Difficulty Classification</h1>
                <h3>September 2019</h3>
                <p>
                  Climbing community members catalog routes for a standardized climbing wall call Moonboard.
                  Using thousands of these routes, the difficulties of routes were estimated based on the holds available.
                  Multiple machine learning algorithms, such as Random Forest and Neural netowrks, were compared.
                </p>
              </div>
              <img src={Moonboard} className="project-pic" alt="moonboard climbing route" />
            </div>

            <div className="project">
              <div className="project-blurb">
                <h1> Sign Language Augmented Reality</h1>
                <h3>May 2020 - September 2020</h3>
                <p>
                  The Sign Language Augmented Reality (SLAR) project was designed and developed in the DALI Lab,
                  using Unity and C#.
                  I collected data for and designed two new evaluation metrics for determining the correctness of a hand sign.
                </p>
              </div>
              <img src={SLAR} className="project-pic" alt="Sign language in VR" />
            </div>

          </Carousel>
        </div>
      </div>
    );
  }
}

export default Projects;
