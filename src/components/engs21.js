import React from 'react';
import '../styles/engs.scss';
import hand from '../media/engs/hand.png';
import mouth from '../media/engs/mouth-stick.png';
import chorder from '../media/engs/chorder.gif';
import basic from '../media/engs/basic.png';
import jason from '../media/engs/jason.jpeg';
import mine from '../media/engs/mine.png';
import functional from '../media/engs/functional.gif';
import layout from '../media/engs/layout.png';
import lego from '../media/engs/lego.png';

class ENGS21 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <div className="page">
          <h1>ENGS 021 Portfolio</h1>
          <p className="blurb">For the course Introduction to Engineering (ENGS 21), I brainstormed, designed,
            and prototyped a product with a team of other students around the theme of Veteran&apos;s Experiences
          </p>

          <div className="engs">

            <div className="engs-section">
              <div className="engs-text">
                <h2>Project Background</h2>
                <p>
                  For our project, we targeted meeting the needs of disabled veterans to keep up with an increasingly digitized workforce.
                  Over 65% of jobs require typing skills, while disabled veterans who are missing hands or fingers may be unable to adapt to fast-paced computer usage required for modern jobs.
                  Our team designed a keyboard-like input device, which allow an estimated 30,000 veterans with missing
                  hands and fingers to type with speeds at or above those using QWERTY keyboards with ten fingers.
                </p>
              </div>
              <img src={hand} className="engs-pic" alt="hand with missing fingers" />
            </div>

            <div className="engs-section">
              <div className="engs-text">
                <h2>State of the Art Technology</h2>
                <p>
                  For our project, we needed a keyboard that is accessible, and significantly improves typing speed.
                  For this, we investigated technologies that focus on accessibility, such as one-handed keyboards, mouth-stick keyboards, and speech-to-text systems.
                  These accessible options were highly usable, but too slow to keep up with required typing speeds of computer-heavy work.
                </p>
                <p>
                  We also investigated two important technologies for increasing typing speeds: directional keys (where eack key can be pushed in a different direction for different inputs)
                  and key chording(when two key presses are combined to form a new, distinct input).
                  These technologies greatly improved typing speed, are impossible to use for users missing fingers.
                </p>
              </div>
              <img src={mouth} className="engs-pic" alt="a mouth stick keyboard" />
              <img src={chorder} className="engs-pic" alt="a directional keyboard" />
            </div>

            <div className="engs-section">
              <div>
                <img src={basic} className="engs-pic" alt="initial prototype" />
                <figcaption>Basic concept</figcaption>
              </div>
              <div className="engs-text">
                <h2>Initial Prototyping</h2>
                <p>We decided to combine the technologies of directional keys and chording for our input device, where pushing one or more joysticks in specific directions inputs a letter. </p>
                <p>
                  From initial ideas, we produced several prototypes, centered on two main specifications: typing speed and configurability.

                </p>
              </div>
              <div />
              <img src={jason} className="engs-pic" alt="jason's prototype" />
              <img src={mine} className="engs-pic" alt="my prototype" />

            </div>

            <div className="engs-section">
              <div className="engs-text">
                <h2>First Functional Prototype</h2>
                <p>
                  Our first functional prototype worked fully, with the user entering letters based on chorded directional inputs.
                  Using the layout chart, the system translated joystick directions into letters.
                  The main issue was that the system was still not configurable, so only users with specific fingers could use it.
                </p>
              </div>

              <img src={layout} className="engs-pic" alt="layout chart" />

              <img src={functional} className="engs-pic" alt="functional prototype" />
            </div>

            <div className="engs-section">
              <div className="engs-text">
                <h2>Further Prototyping</h2>
                <p>
                  After testing the functional prototype for comfort and typing speed on volunteers, we confronted two main problems.
                </p>
                <ol>
                  <li>The layout was too confusing to read, leading to slower learning and typing</li>
                  <li>The keys were uncomfortable to reach and use for different sized hands</li>
                </ol>
                <p>For the first issue, we re-created the layout to be easer to learn, so memorization would lead to faster typing speeds.
                  We also implemented a memorization game to assist users in learning how to type.
                </p>
                <p>
                  For the second issue, we constructed our next prototype out of LEGOs.
                  This allows use to pick up, place, and adjust any finger joystick to fit the specific users.
                  This allows for far greater configurability between users.
                </p>
              </div>
              <img src={lego} className="engs-pic" alt="lego prototype" />
            </div>

          </div>
          <p>Thanks for viewing!</p>
        </div>
      </div>
    );
  }
}

export default ENGS21;
