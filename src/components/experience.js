import OnVisible from 'react-on-visible';
import React from 'react';

const Experience = () => {
  return (
    <div className="experience-container">
      <h1>Work Experience</h1>
      <OnVisible className="experience" percent={20}>
        <h2>Software Development Engineer II</h2>
        <h3>April 2025 - Present</h3>
        <h3>
          <i>Amazon Web Services, Seattle, WA</i>
          <br />
          <i>AWS Bedrock Guardrails</i>
        </h3>
        <ul>
          <li>Launched LLM-backed&nbsp;
            <a href="https://aws.amazon.com/blogs/machine-learning/tailor-responsible-ai-with-new-safeguard-tiers-in-amazon-bedrock-guardrails/">
              guardrail tiers
            </a>
            &nbsp;processing 150M+ tokens/min across 60+ languages
          </li>
          <li>Optimized prompt-based systems for latency, cost, and availability with prompt caching and cross-region inference</li>
          <li>Configured Guardrail Image Filter model for inference; improved throughput 50% with multi-tenant GPU hosts</li>
          <li>Developed internal system for in-domain confidence of Guardrails content moderation</li>
        </ul>
      </OnVisible>

      <OnVisible className="experience" percent={20}>
        <h2>Software Development Engineer</h2>
        <h3>September 2023 - April 2025</h3>
        <h3>
          <i>Amazon Web Services, Seattle, WA</i>
          <br />
          <i>AWS Bedrock Guardrails</i>
        </h3>
        <ul>
          <li>Launched customer-configurable&nbsp;
            <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-sensitive-filters.html">
              PII detection
            </a>
            &nbsp;guardrails processing 250M tokens/min
          </li>
          <li>Increased model performance 84% with FlashAttention and classification heads&nbsp;
            <a href="https://aws.amazon.com/about-aws/whats-new/2025/02/amazon-bedrock-guardrails-increase-service-quota-limits/">
              increasing throughput
            </a>
          </li>
          <li>Reduced hosting costs 64% across a 4,000-GPU fleet,&nbsp;
            <a href="https://aws.amazon.com/about-aws/whats-new/2024/12/amazon-bedrock-guardrails-reduces-pricing-85-percent/">
              lowering customer costs
            </a>
          </li>
          <li>Used AWS CDK IaC to deploy across 25 regions with 99.99% availability</li>
          <li>Engineering liaison with PhD ML scientists to optimize SLMs for inference</li>
        </ul>
      </OnVisible>

      <OnVisible className="experience" percent={20}>
        <h2>Software Development Engineer</h2>
        <h3>August 2022 - September 2023</h3>
        <h3>
          <i>Amazon Web Services, Seattle, WA</i>
          <br />
          <i>AWS IoT Greengrass</i>
        </h3>
        <ul>
          <li>Implemented native AWS canary services with AWS CDK IaC to monitor product health</li>
          <li>Deployed services to EC2 with CI/CD pipelines, test automation, and CloudWatch monitoring</li>
          <li>Collaborated on high-level solutions with well-organized documentation</li>
          <li>Recognized for outstanding work in 45%+ of sprint retrospectives</li>
          <li>Developed open-source components to ensure high availability at the edge</li>
        </ul>
      </OnVisible>

      <OnVisible className="experience" percent={20}>
        <h2>Software Development Engineer Intern</h2>
        <h3>May 2021 - September 2021</h3>
        <h3>
          <i>Amazon Web Services, Seattle, WA</i>
          <br />
          <i>AWS IoT Device Ecosystem</i>
        </h3>
        <ul>
          <li>Built a cloud-based hardware mutex for collaboration and automation in software testing</li>
          <li>Investigated and defined team productivity losses through research and analysis</li>
          <li>Provisioned and tuned cloud services with AWS CDK IaC for reliability and security</li>
          <li>Wrote production-quality Python, Go, and TypeScript for varied project needs</li>
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
