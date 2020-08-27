import React from "react";
import { Row, Container, Col, Card } from "react-bootstrap";
import AppNavArrow from "components/AppNavArrow";
import HomepageLink from "../HomepageLink";
import HtmlImage from "assets/images/skills-images/html5.png";
import CssImage from "assets/images/skills-images/css3.png";
import JavascriptImage from "assets/images/skills-images/javascript.png";
import PhpImage from "assets/images/skills-images/php.png";
import BootstrapImage from "assets/images/skills-images/bootstrap.png";
import WordpressImage from "assets/images/skills-images/wordpress.png";
import jQueryImage from "assets/images/skills-images/jquery.png";
import ScssImage from "assets/images/skills-images/scss.png";

const HomepageSkills = () => {
  return (
    <section id="HomepageSkills">
      <Container>
        <Row className="heading mb-5">
          <Col md={12} xs={12} lg={12}>
            <h2 className="mb-5 text-center">SKILLS</h2>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3} xs={12} lg={3}>
            <Card className="text-center py-5">
              <Card.Img variant="top" src={HtmlImage} />
              <Card.Body>
                <Card.Title>HTML 5</Card.Title>
                <Card.Text>
                  <b>Very Experienced</b>
                  <br />
                  <em>5 Years</em>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} xs={12} lg={3}>
            <Card className="text-center py-5">
              <Card.Img variant="top" src={CssImage} />
              <Card.Body>
                <Card.Title>CSS 3</Card.Title>
                <Card.Text>
                  <b>Very Experienced</b>
                  <br />
                  <em>5 Years</em>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} xs={12} lg={3}>
            <Card className="text-center py-5">
              <Card.Img variant="top" src={JavascriptImage} />
              <Card.Body>
                <Card.Title>Javascript</Card.Title>
                <Card.Text>
                  <b>Experienced</b>
                  <br />
                  <em>5 Years</em>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} xs={12} lg={3}>
            <Card className="text-center py-5">
              <Card.Img variant="top" src={PhpImage} />
              <Card.Body>
                <Card.Title>PHP</Card.Title>
                <Card.Text>
                  <b>Experienced</b>
                  <br />
                  <em>4 Years</em>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} xs={12} lg={3}>
            <Card className="text-center py-5">
              <Card.Img variant="top" src={BootstrapImage} />
              <Card.Body>
                <Card.Title>Bootstrap</Card.Title>
                <Card.Text>
                  <b>Very Experienced</b>
                  <br />
                  <em>5 Years</em>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} xs={12} lg={3}>
            <Card className="text-center py-5">
              <Card.Img variant="top" src={WordpressImage} />
              <Card.Body>
                <Card.Title>Wordpress</Card.Title>
                <Card.Text>
                  <b>Very Experienced</b>
                  <br />
                  <em>5 Years</em>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} xs={12} lg={3}>
            <Card className="text-center py-5">
              <Card.Img variant="top" src={jQueryImage} />
              <Card.Body>
                <Card.Title>jQuery</Card.Title>
                <Card.Text>
                  <b>Very Experienced</b>
                  <br />
                  <em>4 Years</em>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} xs={12} lg={3}>
            <Card className="text-center py-5">
              <Card.Img variant="top" src={ScssImage} />
              <Card.Body>
                <Card.Title>SCSS</Card.Title>
                <Card.Text>
                  <b>Experienced</b>
                  <br />
                  <em>3 Years</em>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="links">
          <Col>
            <HomepageLink link="/skills" name="Visit Skills Page" />
          </Col>
        </Row>
        <Row>
          <Col>
            <AppNavArrow link="#HomepageExperience" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomepageSkills;
