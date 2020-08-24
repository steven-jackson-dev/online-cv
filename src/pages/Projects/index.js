import React, { useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import AppPageDivider from "components/AppPageDivider";
import { BounceInRight } from "react-spring-pop";
import "./Projects.scss";
import FontAwesome from "react-fontawesome";
const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="Projects" className="py-5 mt-5">
      <Container>
        <Row>
          <Col md={3} xs={12} lg={3}>
            <div className="title text-center">
              <h3>Projects</h3>
            </div>
          </Col>
          <Col md={9} xs={12} lg={9} className="content">
            <BounceInRight>
              <div className="mb-5">
                <h2>Script Kid - Github Alias</h2>
                <p className="mt-3 mb-5">
                  A separate personal repo that I use for uploading code that is
                  reusable in combination with Script Kiddie.
                  <br />
                </p>
                <a
                  href="https://github.com/script-kid-official/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View Script Kid Repo
                  <FontAwesome className="arrow-down" name="arrow-right" />
                </a>{" "}
                <br />
              </div>
              <AppPageDivider />
              <div className="mb-5">
                <h2>Script Kiddie</h2>
                <p className="mt-3 mb-5">
                  A personal app for storing useful information and snippets for
                  HTML 5, CSS 3, PHP, Javascript, jQuery, Wordpress, React,
                  Bootstrap, SCSS, Theory, ect.
                  <br />
                </p>
                <a
                  className="mt-3 mb-5"
                  href="http://script-kiddie.co.za/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Script Kiddie - Wordpress API
                  <FontAwesome className="arrow-down" name="arrow-right" />
                </a>{" "}
                <br />
                <br />
                <br />
                <a
                  className="mt-3 mb-5"
                  href="http://script-kiddie.co.za/app"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Script Kiddie React App
                  <FontAwesome className="arrow-down" name="arrow-right" />
                </a>{" "}
                <br />
              </div>
              <AppPageDivider />
              <div className="mb-5">
                <h2>Github User and Repo Search</h2>
                <p className="mt-3 mb-5">
                  A basic App that allows you to search through Github Users and
                  Repositories.
                </p>
                <a
                  href="https://steven-jackson-dev.github.io/react-github-search/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View Github User and Repo Search{" "}
                  <FontAwesome className="arrow-down" name="arrow-right" />
                </a>
              </div>
              <AppPageDivider />
              <div className="mb-5">
                <h2>Covid 19 Tracker</h2>
                <p className="mt-3 mb-5">
                  A Covid Tracking App to track the status of the infection
                </p>
                <a
                  href="https://steven-jackson-dev.github.io/covid-tracker/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View Covid Tracker App
                  <FontAwesome className="arrow-down" name="arrow-right" />
                </a>
              </div>
              <AppPageDivider />
              <div className="mb-5">
                <h2>React Boilerplate with Bootstrap</h2>
                <em>Boilerplate Template</em>
                <p className="mt-3 mb-5">
                  Scaffold React App with common packages using React Bootstrap
                  as the CSS Framework
                </p>
                <a
                  href="https://steven-jackson-dev.github.io/react-bootstrap-boilerplate/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Bootstrap Boilerplate
                  <FontAwesome className="arrow-down" name="arrow-right" />
                </a>
              </div>
              <AppPageDivider />

              <div className="mb-5">
                <h2>React Boilerplate with Material</h2>
                <em>Boilerplate Template</em>
                <p className="mt-3 mb-5">
                  Scaffold React App with common packages using Material UI as
                  the CSS Framework
                </p>
                <a
                  href="https://steven-jackson-dev.github.io/react-material-boilerplate/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Material Boilerplate
                  <FontAwesome className="arrow-down" name="arrow-right" />
                </a>
              </div>
            </BounceInRight>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
