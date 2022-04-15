import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import weatherBot3000 from "../../Assets/Projects/weather-bot-3000.png";
import readEasy from "../../Assets/Projects/read-easy.png";
import nowness from "../../Assets/Projects/nowness.jpg";
import aNewCohort from "../../Assets/Projects/a-new-cohort.png";
import findSparks from "../../Assets/Projects/find-sparks.jpg";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={findSparks}
              isBlog={false}
              title="Find Sparks"
              tools="React | Node.js | SQL | Bootstrap | Redux"
              description="A full stack dating app created to solve one of lifes' biggest challenge in finding love. Features registration / log in functionality, matching algorithm and messaging feature. Created together in a team of 4."
              link="https://findsparks.uk/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={readEasy}
              isBlog={false}
              title="Read Easy"
              tools="React | GSAP | HTML | CSS"
              description="A Hackaton challenge with a goal to produce an interactive app to help children learn to read. Working in a team, we were given 7 hours to complete the challenge. Features text-to-speech functionality."
              link="https://read-easy.stevenhoang.co.uk/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherBot3000}
              isBlog={false}
              title="WEATHER-BOT-3000"
              tools="Vanilla Javascript | DOM manipulation"
              description="A weather forecast app that returns weather forecast based on both user geo-location and user-inputted location. Features regex validation on user input."
              link="https://weather-bot-3000.stevenhoang.co.uk/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nowness}
              isBlog={false}
              title="NOWNESS homage"
              tools="HTML | CSS | SASS"
              description="Replica website of the NOWNESS built using HTML and CSS to showcase my ability to build and implement a design to a professional standard."
              link="https://nowness.stevenhoang.co.uk/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aNewCohort}
              isBlog={false}
              title="SVG Challenge | A New Cohort"
              tools="SVG | CSS"
              description="My winning submission for the SVG challenge after our first week of coding bootcamp. The challenge was to create an animation using SVG and keyframe animations."
              link="https://a-new-cohort.stevenhoang.co.uk/"
            />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/stevehoang91"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/steven-hoang-55372a67/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
