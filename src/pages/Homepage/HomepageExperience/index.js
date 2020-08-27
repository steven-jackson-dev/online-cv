import React from 'react'
import { Row, Container, Col } from 'react-bootstrap'
import { BounceInRight } from "react-spring-pop";
import HomepageLink from '../HomepageLink';
import AppNavArrow from 'components/AppNavArrow';

const HomepageExperience = () => {
    return (
        <section id="HomepageExperience" className="py-5 mt-5">
            <Container>
                <Row>
                    <Col md={3} xs={12} lg={3}>
                        <div className="title text-center">
                            <h3>Current Work</h3>
                        </div>
                    </Col>
                    <Col md={9} xs={12} lg={9}>
                        <BounceInRight>
                            <div className="content mb-5">
                                <h2>Freelance Developer</h2>
                                <b>July 2015 to Current</b> <br />
                                <em>Digital Agencies and Individual Clients</em>
                                <p className="mt-3">
                                    I have been a Freelance developer for the majority of my Developer career. I am purely self-taught
                                    and have learned many things and have worked with a few Agencies and many Clients to accomplish their
                                    goals and meet their requirements in a extremely short time frame.
                                </p>
                            </div>
                        </BounceInRight>
                    </Col>
                </Row>
            </Container>
            <HomepageLink link="/experience" name="Visit Experience Page" />
            <AppNavArrow link="#HomepagePortfolio" color="#000" />
        </section>
    )
}

export default HomepageExperience
