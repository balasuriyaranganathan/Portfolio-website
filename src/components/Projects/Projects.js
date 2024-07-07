import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/traffic.jpg";
import editor from "../../Assets/Projects/codeEditor.png";
import railway from "../../Assets/Projects/railway.jpg";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={railway}
              isBlog={false}
              title="Railway Alert System"
              description="Address the critical challenge of railway track trespassing by designing and implementing an effective alert system capable of promptly detecting and notifying authorities about any unauthorized presence, thereby minimizing the risk of accidents and ensuring the safety of individuals and wildlife."
              ghLink="https://github.com/balasuriyaranganathan/human-detection-in-railway-using-openvino.git"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Finetuing GPT-2 with Roberta"
              description="Finetuning GPT2 using Roberta for Twitter dataset. The project aims to perform sentiment analysis using reinforcement Learning."
              ghLink="https://github.com/balasuriyaranganathan/Finetuning-gpt2-using-Roberta.git"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Yolov8 and mobilenetv2 for fruit classification"
              description="This project implements a YOLOv8 and mobilenetv2 based object detection model for classifying fruits and vegetables. It can identify 22 different classes of fruits and vegetables."
              ghLink="https://github.com/balasuriyaranganathan/yolov8-classification-for-fruit-dataset.git"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Network Traffic Analysis"
              description="Network security is crucial, and anomaly detection helps by spotting unusual activity that might indicate threats or problems. This approach learns normal network behavior and flags deviations for investigation."
              ghLink="https://github.com/balasuriyaranganathan/Network-Traffic-Analysis-using-Machine-learning.git"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Crime Data Analysis"
              description="This repository contains Python code for analyzing crime data using PySpark and visualizing insights through Tkinter and Matplotlib. The code covers various aspects such as crime statistics, weapon involvement, crime locations, and temporal patterns."
              ghLink="https://github.com/balasuriyaranganathan/Crime-data-analysis-using-spark.git"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
