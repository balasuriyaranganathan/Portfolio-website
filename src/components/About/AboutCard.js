import React from "react";
import Card from "react-bootstrap/Card";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Balasuriya Ranganathan </span>
            from <span className="purple"> Coimbatore, India.</span>
            <br />
            I am currently completing my final year 
            of a <span className="purple">Bachelor of Technology (B.Tech.) </span>
            degree in Computer Science with
            a specialization in <span className="purple">Artificial Intelligence</span> at <span className="purple">Amrita University.</span>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
