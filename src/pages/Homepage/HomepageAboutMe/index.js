import React from 'react'
import AppNavArrow from 'components/AppNavArrow';
import HomepageLink from '../HomepageLink'
import { Row, Container, Col, Image } from 'react-bootstrap'
import { BounceInRight } from "react-spring-pop";
import profileImage from 'assets/images/steven-jackson.jpg'

const HomepageAboutMe = () => {
    return (
        <section id="HomepageAboutMe">
            <Container>
                <Row>
                    <Col md={3} xs={12} lg={3}>
                        <div className="title text-center">
                            <Image src={profileImage} fluid thumbnail />
                        </div>
                    </Col>
                    <Col md={9} xs={12} lg={9}>
                        <BounceInRight>
                            <div className="content">
                            <h2 className="my-4">About Me</h2>
                                <p className="description ">
                                    I find everything to do with coding to be fantastic and love learning new things and looking at new ways to improve myself
                                    on a daily basis. My passion for learning new technologies has made me a variable jack of all trades and have done a little of everything.
                                </p>
                            </div>
                        </BounceInRight>
                    </Col>
                </Row>
            </Container>
            <HomepageLink link="/about" name="More About Me" colors={{ bgColor: '#fff', color: '#313131' }} />
            <AppNavArrow link="#HomepageSkills" color="#fff" />
        </section>
    )
}

export default HomepageAboutMe
