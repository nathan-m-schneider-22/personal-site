import OnVisible from 'react-on-visible';
import React from 'react';

const Experience = () => {
  return (
    <div className="experience-container">
      <h1>Work Experience</h1>

      <OnVisible className="experience" percent={20}>
        <h2>
          Software Development Engineer I
        </h2>
        <h3>
          August 2022 - Present
        </h3>
        <h3>
          <i>
            Amazon Web Services, Seattle WA
          </i>
          <br />
          <i>
            AWS IoT Device Ecosystem
          </i>
        </h3>
        <ul>
          <li>
            Using AWS CDK, designed and deployed native AWS canary services to monitor the health of our product
          </li>
          <li>
            Collaborated with a team to design high level solutions with well-written, highly organized documentation
          </li>
          <li>
            Officially recognized by team for outstanding work in over 45% of sprint retrospectives
          </li>
        </ul>
      </OnVisible>

      <OnVisible className="experience" percent={20}>
        <h2>
          Software Development Engineer Intern
        </h2>
        <h3>
          June 2021 - September 2020
        </h3>
        <h3>
          <i>
            Amazon Web Services, Seattle, WA
          </i>
        </h3>
        <ul>
          <li>
            Designed and implemented a cloud infrastructure tool for collaboration and automation in software testing
          </li>
          <li>
            Through investigation and research, diagnosed and defined team productivity losses
          </li>
          <li>
            Using AWS CDK Infrastructure as Code, provisioned and tuned cloud services for reliability and security
          </li>
          <li>
            Wrote high quality Python, Go, and Typescript code, chosen for varying needs of the project
          </li>
        </ul>
      </OnVisible>

      <OnVisible className="experience" percent={20}>
        <h2>
          Full-Stack Engineer
        </h2>
        <h3>
          December 2019 - December 2020
        </h3>
        <h3>
          <i>
            DALI Lab, Hanover, NH
          </i>
        </h3>
        <ul>
          <li>
            Collaborated with an interdisciplinary Agile team to design, develop, and deploy multiple software solutions
          </li>
          <li>
            Implemented multiple tech stacks dependent on project needs
          </li>
          <li>
            Contributed to many diverse projects over multiple terms

            <ul>
              <li>
                Project Pine Beetle - a web platform to visualize and predict outbreaks of Southern Pine Beetle
              </li>
              <li>
                GoPhish - an education tool to teach users to identify and prevent phishing attacks
              </li>
              <li>
                SLAR - Sign Language Augmented Reality game to teach finger spelling
              </li>
              <li>
                Vox Daily - Modernization of campus email news system
              </li>

            </ul>
          </li>

        </ul>
      </OnVisible>

      <OnVisible className="experience" percent={20}>
        <h2>
          Data Science Researcher
        </h2>
        <h3>
          December 2020 - Present
        </h3>

        <h3>
          <i>
            Computer Science Department at Dartmouth College, Hanover, NH
          </i>
        </h3>
        <ul>
          <li>
            Utilized Unix scripting tools, Python, and Ctypes, to quickly parse and transform massive datasets
          </li>
          <li>
            Aggregated, summarized, and anonymized 15+ years of Wifi Syslog files for research distribution
          </li>
        </ul>
      </OnVisible>

      <OnVisible className="experience" percent={20}>
        <h2>
          Data Science Intern
        </h2>
        <h3>
          June 2019 - September 2019
        </h3>

        <h3>
          <i>
            Laboratory for Atmospheric and Space Physics, Boulder, CO
          </i>
        </h3>
        <ul>
          <li>
            Using Python and LabVIEW, designed and implemented a database analysis tool for accelerator functionality
          </li>
          <li>
            Provided curated graphics and metrics for novel insights on historical data in a SQL database
          </li>
          <li>
            Iteratively improved user interface and capabilities based on projected user needs
          </li>

        </ul>
      </OnVisible>

      <h1>Education</h1>

      <OnVisible className="experience" percent={20}>
        <h2>
          Dartmouth College
        </h2>
        <h3>
          Sept 2018 - June 2022
        </h3>

        <h3>
          Major in Computer Science, Minor in Engineering
        </h3>
      </OnVisible>

      <h2>Coursework</h2>
      <OnVisible className="experience" percent={20}>
        <h3>
          Reinforcement Learning (independent study)
        </h3>
      </OnVisible>

      <OnVisible className="experience" percent={20}>
        <h3>
          Machine Learning
        </h3>
      </OnVisible>

      <OnVisible className="experience" percent={20}>
        <h3>
          Artificial Intelligence
        </h3>
      </OnVisible>

      <OnVisible className="experience" percent={20}>
        <h3>
          Robotics
        </h3>
      </OnVisible>

      <OnVisible className="experience" percent={20}>
        <h3>
          Software Development
        </h3>
      </OnVisible>

      <OnVisible className="experience" percent={20}>
        <h3>
          Algorithms
        </h3>
      </OnVisible>

      <OnVisible className="experience" percent={20}>
        <h3>
          Discrete Math
        </h3>
      </OnVisible>

      <OnVisible className="experience" percent={20}>
        <h3>
          Full-Stack Web Development
        </h3>
      </OnVisible>

    </div>
  );
};

export default Experience;
