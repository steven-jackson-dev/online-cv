import React from 'react'
import NavigationArrow from '../../../components/NavigationArrow/NavigationArrow';
import { Row, Container, Col, Image } from 'react-bootstrap'
import { BounceInRight } from "react-spring-pop";
import FontAwesome from 'react-fontawesome'
import './HomepageAboutMe.scss'
import profileImage from '../../../../assets/images/steven-jackson.jpg'
const HomepageAboutMe = () => {
    return (
        <section id="HomepageAboutMe">
            <Container>
                <Row className="aboutMe">
                    <Col md={4} xs={12} lg={4}>
                        <Image src={profileImage} fluid thumbnail />
                    </Col>
                    <Col md={8} xs={12} lg={8}>
                        <BounceInRight>
                            <h2>About Me</h2>
                            <p className="lead"></p>
                            <p className="text-left">I find everything to do with coding to be fantastic and love learning new things and looking at new ways to improve myself
                        on a daily basis. My passion for learning new technologies has made me a variable jack of all trades and have done a little of everything.</p>
                            <Row className="aboutMe-contactDetails my-5">
                                <Col md={6} xs={12} lg={6}>
                                    <h4>Contact Details</h4>
                                    <ul>
                                        <li><FontAwesome name="phone-square" /> +27769975180</li>
                                        <li><FontAwesome name="envelope" /> Stevenjackson.dev@gmail.com</li>
                                    </ul>
                                </Col>
                                <Col md={6} xs={12} lg={6}>
                                    <div className="aboutMe-downloadCv">
                                        <a href="/">Download CV <FontAwesome className="arrow-down" name="download" /></a>
                                    </div>
                                </Col>
                            </Row>
                        </BounceInRight>
                    </Col>
                </Row>
            </Container>
            <NavigationArrow link="#HomepageSkills" color="#fff" />
        </section>
    )
}

export default HomepageAboutMe
