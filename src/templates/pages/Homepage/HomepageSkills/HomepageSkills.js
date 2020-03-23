import React from 'react'
import { Row, Container, Col } from 'react-bootstrap'
import { BounceInRight } from "react-spring-pop";
import { Link } from "react-router-dom"
import './HomepageSkills.scss'
import NavigationArrow from '../../../components/NavigationArrow/NavigationArrow';
import HomepageLink from '../HomepageLink/HomepageLink';

const HomepageSkills = () => {
    return (
        <section id="HomepageSkills" className="pt-5 mt-5">
            <Container>
                <Row>
                    <Col md={3} xs={12} lg={3}>
                        <div className="title text-center">
                            <h3>Skills</h3>
                        </div>
                    </Col>
                    <Col md={9} xs={12} lg={9}>
                        <BounceInRight>
                            <div className="content">
                                <p className="description">
                                    My main skills as a Web Developer are HTML5, CSS3, Javascript, PHP and Wordpress with a React becoming a core addition for future use.
                                    I have tinkered around with a lot of languages and framework. <br /><br />
                                    Visit my <Link to='/skills'>Skills Page </Link> for a more detailed list of frameworks, libraries and tools that I have used</p>
                                {/* <ul className="list">
                                <li>
                                    <span className="html5"></span>
                                    <em>HTML5</em>
                                </li>
                                <li>
                                    <span className="css3"></span>
                                    <em>CSS3</em>
                                </li>
                                <li>
                                    <span className="javascript"></span>
                                    <em>Javascript</em>
                                </li>
                                <li>
                                    <span className="php"></span>
                                    <em>PHP</em>
                                </li>
                                <li>
                                    <span className="wordpress"></span>
                                    <em>Wordpress</em>
                                </li>
                                <li>
                                    <span className="react"></span>
                                    <em>React</em>
                                </li>
                            </ul> */}

                            </div>
                        </BounceInRight>
                    </Col>
                </Row>
            </Container>
            <HomepageLink link="/skills" name="Visit Skills Page" />
            <NavigationArrow link="#HomepageExperience" color="#000" />
        </section >
    )
}

export default HomepageSkills
