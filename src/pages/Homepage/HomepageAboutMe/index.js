import React from "react";
import AppNavArrow from "components/AppNavArrow";
import HomepageLink from "../HomepageLink";
import { Row, Container, Col, Image } from "react-bootstrap";
import { BounceInRight } from "react-spring-pop";
import profileImage from "assets/images/steven-jackson.jpg";
const HomepageAboutMe = () => {
  return (
    <section id="HomepageAboutMe">
      <BounceInRight>
        <Container>
          <Row>
            <Col md={12} xs={12} lg={12}>
              <h2 className="my-4 text-center">ABOUT ME</h2>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={8} xs={12} lg={8}>
              <div className="content">
                <h3 className="mb-3 text-uppercase">General</h3>
                <p className="description">
                  I am a very calm and happy person. I like to help people and I
                  am very good at explaining technical jargon to non-technical
                  people using analogies and situations. I take pride in my work
                  and coding is not just a career for me, it is also a passion
                  and hobby. I love creating functionality and making things
                  work while keeping the user experience in mind. I will not
                  stop coding till I know as much as I possibily can in FED and
                  BED.
                </p>
                <h3 className="mb-3 mt-5 text-uppercase">Interests</h3>
                <p className="description ">
                  I am a big fan of anime, coding, researching and gaming My
                  free time is spent watching anime, gaming and
                  learning/researching something new. The majority of my day is
                  working or communicating with clients to make sure they
                  receive the best Experience
                </p>
              </div>
            </Col>
            <Col md={4} xs={12} lg={4}>
              <div className="img-wrapper">
                <Image src={profileImage} fluid />
              </div>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col>
              <HomepageLink link="/about" name="More About Me" />
            </Col>
          </Row>
          <Row>
            <Col>
              <AppNavArrow link="#HomepageSkills" color="#000" />
            </Col>
          </Row>
        </Container>
      </BounceInRight>
    </section>
  );
};

export default HomepageAboutMe;
