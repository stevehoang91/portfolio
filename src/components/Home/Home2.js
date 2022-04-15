import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>About myself</h1>
            <p className="home-about-body text-center">
              I combine professional-grade software engineering with an
              analytical mindset and a focus on spotting opportunities for
              improvement.
            </p>
            <p className="home-about-body text-center">
              After 10 years working in digital analytical roles and the fashion
              industry, I decided to take a career change to pursue a goal of
              becoming a software engineer.
            </p>
            <p className="home-about-body text-center">
              I am motivated in solving real-world challenges using technical
              solutions.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img src={myImg} className="img-fluid" alt="avatar" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
