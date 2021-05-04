import React from "react";
import { Col, Container, Image, Row, Card } from "react-bootstrap";
import myImage from "../assets/images/IMG_7416.jpeg";

function Body() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src={myImage} fluid rounded />
          </Col>
          <Col>
            <Card style={{ width: "40rem", height: "100%" }}>
              <Card.Body>
                <Card.Title className="aboutMe">About Me</Card.Title>
                <Card.Text className="bodyText">
                            I used to work in the medical field but I decided to change careers to
                            learn how to become a full stack developer.
                            I'm curently attending a bootcamp in the University of Arizona
                            that will teach me all the skills.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Body;
