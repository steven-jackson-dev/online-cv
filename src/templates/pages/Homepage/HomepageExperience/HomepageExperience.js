import React from 'react'
import { Row, Container, Col } from 'react-bootstrap'
import { BounceInRight } from "react-spring-pop";
import './HomepageExperience.scss'
import HomepageLink from '../HomepageLink/HomepageLink';
import NavigationArrow from '../../../components/NavigationArrow/NavigationArrow';

const HomepageExperience = () => {
    return (
        <section id="HomepageExperience" className="py-5 mt-5">
            <Container>
                <Row>
                    <Col md={3} xs={12} lg={3}>
                        <div className="title text-center">
                            <h3>Experience</h3>
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
                            <div className="content mb-5">
                                <h2>ROI Digital/Media</h2>
                                <b>July 2012 to July 2015</b> <br />
                                <em>Intern/Junior Developer &amp; IT Technician</em>
                                <p className="mt-3">
                                    ROI was a fantastic place for me to get my foot in the door for I.T and Development
                                    and enjoyed every minute of working on multiple client's sites as well as different platforms.
                                    I was a I.T Technician by day and a Intern/Junior Dev by night and leading both the
                                    I.T and Development Department towards the end of my time there.
                                </p>
                            </div>
                        </BounceInRight>
                    </Col>
                </Row>
            </Container>
            <HomepageLink link="/" name="Visit Experience Page" />
            <NavigationArrow link="#HomepageEducation" color="#000" />
        </section>
    )
}

export default HomepageExperience
