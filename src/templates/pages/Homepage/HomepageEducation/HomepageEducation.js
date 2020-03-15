import React from 'react'
import { Row, Container, Col } from 'react-bootstrap'
import { BounceInRight } from "react-spring-pop";
import './HomepageEducation.scss'
import NavigationArrow from '../../../components/NavigationArrow/NavigationArrow';

const HomepageEducation = () => {
    return (
        <section id="HomepageEducation" className="py-5 mt-5">
            <Container>
                <Row>
                    <Col md={3} xs={12} lg={3}>
                        <div className="title text-center">
                            <h3>Education</h3>
                        </div>
                    </Col>
                    <Col md={9} xs={12} lg={9}>
                        <BounceInRight>
                            <div className="content mb-5">
                                <h2>Diploma Information Technology</h2>
                                <b>2007 to 2008</b> <br />
                                <em>Varsity College, Cape Town</em>
                            </div>
                            <div className="content mb-5">
                                <h2>Matric</h2>
                                <b>2006</b> <br />
                                <em>Northlink College, Cape Town</em>
                            </div>
                        </BounceInRight>
                    </Col>
                </Row>
            </Container>
            <NavigationArrow link="#HomepagePortfolio" color="#000" />
        </section>
    )
}

export default HomepageEducation
