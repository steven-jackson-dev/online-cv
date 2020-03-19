import React, { useState } from 'react'
import { Row, Container, Col, Figure } from 'react-bootstrap'
import { PopIn } from "react-spring-pop";
import ModalImage from '../../../components/ModalImage/ModalImage';
import { PortfolioPreviousData } from '../../../../inc/portfolioPreviousData'

const PortfolioPrevious = () => {

    const [modalShow, setModalShow] = useState(false);
    const [modalContent, setModalContent] = useState(false);

    const handleImageClick = (e, data) => {
        setModalContent(data)
        setModalShow(true);
    }

    return (
        <section className="PortfolioPrevious">
            <PopIn>
                <Container>
                    <Row>
                        <Col md={12} xs={12} lg={12}>
                            <div className="title text-center mb-5">
                                <h2 className="text-uppercase">Previous Work and Clients</h2>
                                <p className="lead">My clients and work I have done over my career</p>
                                <em>Note: Some of the older images are bad. I do not have the originals anymore</em>
                                <hr />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {PortfolioPreviousData.map(e => {
                            return <Col key={e.id} md={4} xs={12} lg={3}>
                                <div className="item text-center mb-5">
                                    <Figure>
                                        <Figure.Image
                                            alt={e.name}
                                            src={e.thumb}
                                            onClick={((evt) => handleImageClick(evt, e))}
                                        />
                                        <Figure.Caption>
                                            <h3>{e.name}</h3>
                                            <em>{e.type}</em>
                                        </Figure.Caption>
                                    </Figure>

                                </div>
                            </Col>
                        })}
                        <ModalImage show={modalShow} content={modalContent} onHide={() => setModalShow(false)} />
                    </Row>
                </Container>
            </PopIn>
        </section>
    )
}

export default PortfolioPrevious
