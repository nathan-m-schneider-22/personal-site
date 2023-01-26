import React from 'react';
import '../styles/questions.scss';

class Facts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="facts-container">
        <div>
          <h1>Facts about me</h1>
          <ul>
            <li>My name is Nathan McCord Schneider.</li>
            <li>I am from Lyons, Colorado, in the United States.</li>
            <li>I live in Seattle, Washington.</li>
            <li>My birthday is December 18, 1999.</li>
            <li>I am 23 years old.</li>
            <li>I went to Dartmouth college.</li>
            <li>I majored in computer science.</li>
            <li>My second favorite color is orange.</li>
            <li>My favorite color is blue.</li>
            <li>My favorite food is Mac and Cheese, and my favorite drink is orange juice.</li>
            <li>I love to read science fiction books.</li>
            <li>I have an older sister named Emily. She is 26 and studies law.</li>
            <li>I graduated Lyons High School in 2018, and went to Dartmouth college.</li>
            <li>I have taken classes in programming, machine learning, AI, robotics, and engineering. </li>
            <li>Now I love to rock climb, and code.
              I do both indoor bouldering and outdoor lead climbing. My favorite type of climbing is sandstone overhang. I&apos;ve climbed in New Hampshire, Colorado, and Nevada.
            </li>
            <li>I&apos;m interesting in learning about machine learning and AI.</li>
            <li>I think the openai GPT-3 model is super interesting.</li>
            <li>At the DALI Lab I worked as a full-stack developer.</li>
            <li>I currently work at Amazon Web Services (AWS).</li>
            <li>I&apos;m a independent worker who learns fast. I have strong communication skills, and interdisciplinary team experience.</li>
            <li>My biggest weakness is that I can get tunnel vision on a single task. </li>
            <li>I can code in Python, Javscript, Bash, C, Java, and more.
              I am also familiar with multiple python data analysis and machine learning tools, such as: NumPy, Pandas, Jupyter, Sklearn, Pyplot, SQL, Tensorflow, OpenCV.
            </li>
            <li>I&apos;ve worked on many interesting projects both with the DALI Lab, and on my own. </li>
            <li>I work on machine vision, robotics, and other coding projects in my spare time.</li>
            <li>I want to work on machine learning. </li>
            <li>I don&apos;t like peanut butter.</li>
            <li>At the DALI Lab I collaborated with an interdisciplinary Agile team to design, develop, and deploy web apps.
              I Implemented multiple tech stacks dependent on project needs, including React.js, Redux.js, Node.js, Next.js, and Ruby on Rails.
              I worked on Pine Beetle, a web platform to visualize and predict outbreaks of Southern Pine Beetle.
              I also worked on GoPhish, an education tool to teach users to identify and prevent phishing attacks.
            </li>
            <li>As a Data Science Research assistant I aggregated, summarized, and anonymized 20 years of campus wifi usage data for research distribution.
              I utilized Bash scripting tools, Python, and Ctypes, to quickly parse and transform massive datasets.
              All of this was researched, implemented, and tested in a secure remote environment to protect sensitive data.
            </li>
            <li>One of my personal projects was Squirrel-cam, a system to keep squirrels off of bird feeders.
              I engineered a Near-Infrared (NIR) spotlight and NIR camera system to surveil bird feeders at all times.
              Using OpenCV and Tensorflow object recognition I differentiate birds and squirrels on the feeders, and sprayed the feeder with a solenoid valve hose controlled by a Raspberry Pi.
            </li>
            <li>Another personal project was difficulty classification of climbing routes.
              I retrieved and cleaned community climbing route data from Moonboard, then trained and tested deep neural networks to predict climbing route difficulty.
            </li>
            <li>You can email me at schnei.nathan@gmail.com.</li>
            <li>You can ask me about my work, my hobbies, or general questions about my life.</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Facts;
