import React from "react";
import { Row, Container, Col, Card } from "react-bootstrap";
import HomepageLink from "../HomepageLink";
import ScriptKiddie from "assets/images/script-kiddie.png";
import CovidTracker from "assets/images/covid-tracker.png";

const HomepageProjects = () => {
  return (
    <section id="HomepageProjects">
      <Container>
        <Row className="heading mb-5">
          <Col md={12} xs={12} lg={12}>
            <h2 className="mb-5 text-center">My Projects</h2>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6} xs={12} lg={6}>
            <Card className="text-center py-5">
              <Card.Img variant="top" src={ScriptKiddie} />
              <Card.Body>
                <Card.Title>Script Kiddie</Card.Title>
                <Card.Text>
                  A personal app for storing useful information and snippets for
                  HTML 5, CSS 3, PHP, Javascript, jQuery, Wordpress, React,
                  Bootstrap, SCSS, Theory, ect.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xs={12} lg={6}>
            <Card className="text-center py-5">
              <Card.Img variant="top" src={CovidTracker} />
              <Card.Body>
                <Card.Title>Covid Tracker</Card.Title>
                <Card.Text>
                  A Covid Tracking App to track the status of the infection
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="links">
          <Col>
            <HomepageLink link="/projects" name="Visit Projects" />
          </Col>
        </Row>
      </Container>
      {/* <Row>
                <Col className="content text-center">
                    <h2 className="text-uppercase">My Projects</h2>
                    <hr style={{ borderColor: '#fff' }} />
                    <p>A collection of my projects</p>
                    <HomepageLink link="/projects" name="Visit Projects" colors={{ bgColor: '#fff', color: '#313131' }} />
                </Col>

            </Row> */}
    </section>
  );
};

export default HomepageProjects;
