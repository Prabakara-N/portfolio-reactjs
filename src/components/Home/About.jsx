import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, My name is <b className="yellow">Prabakaran </b>
              and I'm from <b className="yellow"> TamilNadu, India.</b>
              <br />
              <br />I recently graduated with a Bachelor's degree in
              Metallurgical Engineering in 2022 and also I'm currently pursuing
              my MERN Stack developer course. My educational background in
              metallurgy has given me a solid foundation in technical and
              analytical skills, while my training in the
              <b className="yellow"> MERN Stack</b> has equipped me with the
              ability to develop innovative web applications. I have a strong
              interest in and proficiency with
              <b className="yellow"> Front-end</b> technologies. I'm now looking
              to launch my career as a React JS Developer.
              <br />
              <br />
              I'm proficient in
              <b className="yellow"> JavaScript. </b>As a
              <b className="yellow"> React-JS </b>developer, I enjoy tackling
              new challenges and continuously expanding my skillset.
              <br />
              I'm confident in my ability to positively contribute with my
              skills and knowledge.
              <br />
              <br />
              I'm also interested in building new
              <i>
                <b className="yellow"> Web Technologies and Products, </b>
              </i>
              as well as exploring areas related to
              <i>
                <b className="yellow"> Artificial Intelligence.</b>
              </i>
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={LaptopImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Please don't hesitate to reach out to me and{" "}
              <span className="yellow">connect.</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Prabakara-N"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/prabakaran-m-105289219/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/swag__55__/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
