import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import weatherBot3000 from "../../Assets/Projects/weather-bot-3000.png";
import readEasy from "../../Assets/Projects/read-easy.png";
import nowness from "../../Assets/Projects/nowness.png";
import aNewCohort from "../../Assets/Projects/a-new-cohort.png";
import findSparks from "../../Assets/Projects/find-sparks.jpg";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={findSparks}
              isBlog={false}
              title="Find Sparks"
              tools="React | Node | SQL | Bootstrap"
              description="A dating app created to solve one of lifes' biggest challenge in finding love. Created together with 3 members of my bootcamp."
              link="https://github.com/soumyajit4419/Chatify"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={readEasy}
              isBlog={false}
              title="Read Easy"
              tools="React | GSAP | HTML | CSS"
              description="A Hackaton challenge with a goal to produce an interactive app to help children learn to read. We were given 7 hours to complete the challenge."
              link="https://github.com/soumyajit4419/Bits-0f-C0de"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherBot3000}
              isBlog={false}
              title="WEATHER-BOT-3000"
              tools="Vanilla Javascript"
              description="A weather forecast app that returns weather forecast based on both location permissions and user-inputted location."
              link="https://github.com/soumyajit4419/Editor.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nowness}
              isBlog={false}
              title="NOWNESS homage"
              tools="HTML | CSS"
              description="Replica website of the NOWNESS built using HTML and CSS to showcase my ability to build and implement a design to a professional standard."
              link="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aNewCohort}
              isBlog={false}
              title="SVG Challenge | A New Cohort"
              tools="SVG | CSS"
              description="After our first week of coding bootcamp, we had a challenge to create a small animation using SVG and keyframe animations. My submission won the contest!"
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>
          {/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col> */}
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
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
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
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
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/s.o.u.m.y.a_j.i.t/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
