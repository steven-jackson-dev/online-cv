import React from "react";
import { Row, Container, Col, Jumbotron } from "react-bootstrap";
import FontAwesome from "react-fontawesome";
import AppNavArrow from "components/AppNavArrow";
import bgImage from "assets/images/fotis-fotopoulos-LJ9KY8pIH3E-unsplash.jpg";

const HomepageProfile = () => {
  const content = {
    name: "Steven Jackson",
    title: "Freelance Web Developer",
    intro:
      "I am a self-taught Web Developer who specializes in Wordpress and it has been my core CMS for the last 5 years with over 100 clients under my belt. Coding is a passion, hobby and career. ",
    introTwo:
      "I am a adaptive and versatile Web Developer who loves exploring everything to do with code and the technologies surrounding the Web. I have done simple email templates to custom booking systems.",
  };
  return (
    <section className="HomepageProfile">
      <Jumbotron className="text-center" fluid>
        <div className="intro">
          <Container>
            <Row>
              <Col xs={12} md={12} lg={12} className="intro__wrapper">
                <h1 className="heading text-uppercase  mb-3">{content.name}</h1>
                <p className="lead mb-3">{content.title}</p>

                <p className="intro-text">{content.intro}</p>
                <p className="intro-text">{content.introTwo}</p>
                <a
                  href="https://github.com/steven-jackson-dev/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="profile-links"
                >
                  <FontAwesome className="link" name="github" />
                </a>
                <a
                  href="https://www.linkedin.com/in/steven-jackson-199978b3/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="profile-links px-4"
                >
                  <FontAwesome className="link" name="linkedin" />
                </a>
                <hr style={{ borderColor: "#fff" }} />

                <AppNavArrow link="#HomepageAboutMe" />
              </Col>
            </Row>
          </Container>
        </div>
      </Jumbotron>
    </section>
  );
};

export default HomepageProfile;
