import React from 'react'
import { Row, Container, Col, Jumbotron } from 'react-bootstrap'
import { PopIn } from "react-spring-pop";
import FontAwesome from 'react-fontawesome'
import AppNavArrow from 'components/AppNavArrow';
import './HomepageProfile.scss'
import bgImage from 'assets/images/fotis-fotopoulos-LJ9KY8pIH3E-unsplash.jpg'

const HomepageProfile = () => {

    const content = {
        name: 'Steven Jackson',
        title: 'Freelance Web Developer',
        intro: 'A adaptive and versatile Web Developer who loves exploring everything to do with code and the technologies surrounding the Web.'
    }
    return (
        <section className="HomepageProfile">
            <Jumbotron className="text-center" style={{ backgroundImage: `url(${bgImage})` }} fluid>
                <div className="intro">
                    <Container>
                        <Row style={{ marginTop: '15%' }}>
                            <Col xs={12} md={12} lg={12}>
                                <PopIn>
                                    <h1 className="heading">{content.name}</h1>
                                    <p className="lead mb-5"><i>{content.title}</i></p>

                                    <p className="intro-text">{content.intro}</p>
                                    <hr style={{ borderColor: '#fff' }} />
                                    <a href="https://github.com/steven-jackson-dev/" rel="noopener noreferrer" target="_blank" className="profile-links">
                                        <FontAwesome className="link" name="github" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/steven-jackson-199978b3/" rel="noopener noreferrer" target="_blank" className="profile-links px-4">
                                        <FontAwesome className="link" name="linkedin" />
                                    </a>
                                </PopIn>
                            </Col>
                        </Row>
                    </Container>
                    <AppNavArrow link="#HomepageAboutMe" />
                </div>
            </Jumbotron>
        </section>

    )
}

export default HomepageProfile
