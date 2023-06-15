import React from 'react';
import '../styles/projects.scss';
import Carousel from 'react-elastic-carousel';
import {
  NavLink,
} from 'react-router-dom';
import Squirrel from '../media/squirrel.png';
import Moonboard from '../media/moonboard.jpg';
import Vox from '../media/vox.png';
import SLAR from '../media/slar.jpg';
import MANI from '../media/MANI.png';
import RL from '../media/RL_robot.gif';
import wiring from '../media/engs/wiring.png';
import comp from '../media/valorant/win_rate_comp.png';

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
        <div className="projects-list">
          <Carousel itemsToShow={1}>
            <div className="project">
              <div className="project-blurb">
                <h1> Comfort Pick: A statistical study of Valorant matches </h1>
                <h3>June 2023</h3>
                <p>
                  As I was playing Valorant with a friend of mine, we started debating the importance of team
                  composition. He was adamant that it was important, important enough to prioritize over more comfortable options.
                  I, however, thought the concept was overrated, believed it`&apos;`s best to pick what you`&apos;`re most comfortable with.
                  I could have left it at that, however I instead collected over 200GB of match data (over 75k matches) to prove my point. Check out the <NavLink to="/valorant"> writeup</NavLink>
                </p>
              </div>
              <img src={comp} className="project-pic" alt="a graph showing I was right the whole time" />
            </div>

            <div className="project">
              <div className="project-blurb">
                <h1> MANI: Gesture Controlled Virtual Assistant </h1>
                <h3>November 2022 - June 2022</h3>
                <p>
                  For a senior project, I led a team of peers to create a gesture-based virtual assistant.
                  MANI utilized computer vision and machine learning to recognize finger spelled letters and autocomplete queries.
                  Powered by Google assistant, MANI is able to display the weather, answer questions, control home automation, and more.
                  The system was deployed on a Raspberry Pi, which was able to run powerful pose detection, hand tracking, and classification models with the help of Google Coral TPUs.
                </p>
              </div>
              <img src={MANI} className="project-pic" alt="computer vision recognizing hand signs" />
            </div>

            <div className="project">
              <div className="project-blurb">
                <h1> Reinforcement Learning with a Robotic Manipulator</h1>
                <h3>November 2021</h3>
                <p>
                  Reinforcement Learning allows AI agents to practice wide ranges of simulated tasks, then transfer to a real environment.
                  For this project I trained an AI agent to perform a simple task, then transferred the agent to the real world, use a real robotic arm. Check out the
                  <a href="https://puckreport.netlify.app/"> full writeup </a>
                </p>
              </div>
              <img src={RL} className="project-pic" alt="a robot pushing a puck towards a target" />
            </div>

            <div className="project">
              <div className="project-blurb">
                <h1> Configurable accessible keyboard prototypes (ENGS21)</h1>
                <h3>January 2022</h3>
                <p>
                  My team developed an alternative typing device that takes simultaneous inputs (chords) from directional keys
                  and outputs them to a computer.
                  These keys and chords are configurable for individuals with any set of missing fingers,
                  like our target user with symbrachydactyly and promises to be a faster, more accessible typing alternative.
                  Check out the <NavLink to="/projects"> writeup</NavLink>
                  <p />

                </p>
              </div>
              <img src={wiring} className="project-pic" alt="a wiring diagrams for a configurable keyboard" />
            </div>

            <div className="project">
              <div className="project-blurb">
                <h1> Squirrel-Cam Bird Feeder Defense System</h1>
                <h3>June 2020 - Present</h3>
                <p>
                  When it comes to bird feeders, squirrels are a tenacious threat.
                  Using near-infrared spotlights and cameras, combined with a Tensorflow object recognition model,
                  intelligent surveillance was established.
                  Once identified, the program running on a Raspberry Pi will use its voltage pins to trigger irrigation equipment to spray the offending squirrels.
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
                  Multiple machine learning algorithms, such as Random Forest and Neural networks, were compared.
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
