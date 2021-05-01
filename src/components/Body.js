import React from 'react'
import { Col, Container, Image, Row, Card } from 'react-bootstrap'
import myImage from '../assets/images/IMG_7416.jpeg'

function Body() {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <Image src= {myImage} fluid rounded />
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem', height: "100%" }}>
                        <Card.Body>
                            <Card.Title>About Me</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Body
