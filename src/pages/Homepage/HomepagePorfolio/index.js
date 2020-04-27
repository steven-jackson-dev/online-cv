import React, { useState } from 'react'
import { Row, Container, Col, Figure } from 'react-bootstrap'
import { PopIn } from "react-spring-pop";
import './HomepagePortfolio.scss'
import ModalImage from 'components/AppModalImage';
import AppNavArrow from 'components/AppNavArrow';
import HomepageLink from '../HomepageLink';
import { Link } from "react-router-dom"
import { homepagePortfolioData } from 'api/portfolioData'

const HomepagePortfolio = () => {
    const [modalShow, setModalShow] = useState(false);
    const [modalContent, setModalContent] = useState(false);

    const handleImageClick = (e, data) => {
        setModalContent(data)
        setModalShow(true);
    }

    return (
        <section id="HomepagePortfolio" className="py-5 mt-5 text-white">
            <PopIn>
                <Container>
                    <Row>
                        <Col md={12} xs={12} lg={12}>
                            <div className="title text-center mb-5">
                                <h2 className="text-uppercase">Portfolio</h2>
                                <hr style={{ borderColor: '#fff' }} />
                                <p className="lead">A small sample of my portfolio.<br />
                                    Please visit my <Link to='/skills'>Portfolio Page</Link> to view a list of all the clients I have worked with.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {homepagePortfolioData.map(e => {
                            return <Col key={e.id} md={4} xs={12} lg={3}>
                                <div className="item text-center mb-5">
                                    <Figure>
                                        <Figure.Image
                                            alt={e.name}
                                            src={e.thumb}
                                            onClick={((evt) => handleImageClick(evt, e))}
                                        />
                                        <Figure.Caption className="text-white">
                                            <h3>{e.name}</h3>
                                            <em>{e.type}</em>
                                        </Figure.Caption>
                                    </Figure>

                                </div>
                            </Col>
                        })}
                        <ModalImage show={modalShow} content={modalContent} onHide={() => setModalShow(false)} />
                    </Row>
                    <HomepageLink link="/portfolio" name="View Portfolio" colors={{ bgColor: '#fff', color: '#313131' }} />
                </Container>
            </PopIn>
            <AppNavArrow link="#HomepageProjects" color="#fff" />
        </section>
    )
}

export default HomepagePortfolio
