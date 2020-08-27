import React, { useEffect } from "react";
import { Row, Container, Col, Image } from "react-bootstrap";
import { BounceInRight } from "react-spring-pop";
import setupImage from "assets/images/my_setup.jpg";
import FontAwesome from "react-fontawesome";
import "./AboutMe.scss";

const AboutMe = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="AboutMe py-5">
      <Container>
        <Row>
          <Col md={3} xs={12} lg={3}>
            <div className="title text-center">
              <h3>ABOUT ME</h3>
            </div>
          </Col>
          <Col md={9} xs={12} lg={9} className="content">
            <BounceInRight>
              <div className="mb-5 aboutMe-contactDetails">
                <h2>Contact Details</h2>
                <ul>
                  <li>
                    <FontAwesome name="phone-square" /> +2776 997 5180
                  </li>
                  <li>
                    <FontAwesome name="envelope" /> Stevenjackson.dev@gmail.com
                  </li>
                </ul>
                <div className="aboutMe-downloadCv">
                  <a
                    style={{ marginRight: "10px" }}
                    href="https://script-kiddie.co.za/external-images/Steven-Jackson-CV-2020.docx"
                  >
                    Download CV{" "}
                    <FontAwesome className="arrow-down" name="download" />
                  </a>
                  <a href="https://script-kiddie.co.za/external-images/Steven-Jackson-Cover-Letter.docx">
                    Cover Letter{" "}
                    <FontAwesome className="arrow-down" name="download" />
                  </a>
                </div>
              </div>
              <div className="mb-5">
                <h2>General</h2>
                <p className="mt-3">
                  <p className="mt-3">
                    I am a self-taught Web Developer who specializes in
                    Wordpress and it has been my core CMS for the last 5 years
                    with over 100 clients under my belt. Coding is a passion,
                    hobby and career. If you need something done from simple to
                    custom and complex then I am a great choice.
                  </p>
                  <p className="mt-3">
                    I am very easy to talk to and very responsive to
                    communications. You can even contact me on weekends. (^_^)
                    My working hours are from 8am - 11pm.
                  </p>
                  I am a very calm and happy person. I like to help people and I
                  am very good at explaining technical jargon to non-technical
                  people using analogies and situations. I take pride in my work
                  and coding is not just a career for me, it is also a passion
                  and hobby. I love creating functionality and making things
                  work while keeping the user experience in mind. I will not
                  stop coding till I know as much as I possibily can in FED and
                  BED.
                </p>

                <p className="mt-3">
                  I have much more Web Technology under my belt. If you need
                  someone to just manage everything for you and make your life
                  simple and/or automated. Your customers will love your site
                  after a quick visit from me.
                </p>
              </div>
              <div className="mb-5">
                <h2>Personality Type</h2>
                <p>
                  <b>
                    <em>INTJ (The Architect)</em>
                  </b>
                </p>
                <p>
                  I am not a believer in online personality tests, but this test
                  hit the nail on the head and I highly recommend it.
                </p>
                <blockquote className="blockquote mt-3">
                  <small className="mb-2">
                    <i>
                      "It can be lonely at the top. Being one of the rarest
                      personality types and being among the most capable people,
                      Architects know this all too well. They make up just two
                      percent of the population, and women with this personality
                      type are especially rare, forming only 0.8%. It can be
                      difficult for Architects to find people who can keep up
                      with their non-stop analysis of things. People with this
                      personality type are imaginative yet decisive... ambitious
                      yet like their privacy... curious about everything but
                      remain focused."
                    </i>
                  </small>
                  <span className="blockquote-footer">
                    <cite title="16personalities.com">16personalities.com</cite>
                  </span>
                </blockquote>
              </div>
              <div className="mb-5">
                <h2>Interests</h2>
                <p>I am a big fan of anime, coding, researching and gaming</p>
                <p>
                  My free time is spent watching anime, gaming and
                  learning/researching something new. The majority of my day is
                  working or communicating with clients to make sure they
                  receive the best Experience
                </p>
              </div>
              <div className="mb-5">
                <h2>My Setup</h2>
                <Image src={setupImage} fluid thumbnail />
              </div>
            </BounceInRight>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMe;
