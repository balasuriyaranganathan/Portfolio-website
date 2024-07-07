import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/deve.gif";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ABOUT <span className="purple"> ME </span>
            </h1>
            <p className="home-about-body">
                I am an undergraduate student with a strong background in <b className="purple">Artificial Intelligence (AI)</b> and <b className="purple"> Machine Learning (ML)</b>. 
              <br />
              <br />I am proficent in 
              <i>
                <b className="purple"> Python</b> and <b className="purple">MYSQL</b>
              </i>
              <br />
              <br />
              As an <b className="purple">Intel oneAPI Student Ambassador</b>, I have actively participated in various AI/ML projects.&nbsp;
              <br />
              <br />
              My passion lies in problem-solving and competitive programming, and I possess proficiency in <b className="purple">Python</b> programming languages, particularly with <b className="purple">TensorFlow</b> and <b className="purple">PyTorch</b> libraries.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" width="500" height="500"
              style={{ borderRadius: "20px" }}
                />
            </Tilt>
          </Col>
        </Row>
        <Row> 
          <Col md={12} className="home-about-social">
            <h1>REACH ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/balasuriyaranganathan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/balasuriyaranganathan/"
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
export default Home2;
