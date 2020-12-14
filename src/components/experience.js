import OnVisible from 'react-on-visible';
import React from 'react';

const Experience = () => {
  return (
    <div className="experience-container">
      <h1>Work Experience</h1>
      <OnVisible className="experience" percent={20}>
        <h2>
          Full-Stack Engineer
        </h2>
        <h3>
          <i>
            DALI Lab, Hanover, NH
          </i>
        </h3>
        <p>
          At the DALI Lab, I collaborated with an interdisciplinary Agile team to design, develop, and deploy web apps.
          Over multiple projects, I implemented several tech stacks dependent on project requirements.
        </p>
      </OnVisible>

      <OnVisible className="experience" percent={20}>
        <h2>
          Full-Stack Engineer
        </h2>
        <h3>
          <i>
            DALI Lab, Hanover, NH
          </i>
        </h3>
        <p>
          At the DALI Lab, I collaborated with an interdisciplinary Agile team to design, develop, and deploy web apps.
          Over multiple projects, I implemented several tech stacks dependent on project requirements.
        </p>
      </OnVisible>

      <OnVisible className="experience" percent={20}>
        <h2>
          Full-Stack Engineer
        </h2>
        <h3>
          <i>
            DALI Lab, Hanover, NH
          </i>
        </h3>
        <p>
          At the DALI Lab, I collaborated with an interdisciplinary Agile team to design, develop, and deploy web apps.
          Over multiple projects, I implemented several tech stacks dependent on project requirements.
        </p>
      </OnVisible>

      <h1>Coursework</h1>
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
