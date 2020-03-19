import React from 'react'
import { Row, Container, Col } from 'react-bootstrap'
import { PopIn } from "react-spring-pop";
import './PortfolioClientList.scss'
import { PortfolioClientListData } from '../../../../inc/PortfolioClientListData'

function PortfolioClientList() {
    return (
        <section className="PortfolioClientList">
            <PopIn>
                <Container>
                    <Row>
                        <Col md={12} xs={12} lg={12}>
                            <div className="title text-center mb-5">
                                <h2 className="text-uppercase">Client History</h2>
                                <p className="lead">All the clients I have worked with over my career.</p>
                                <hr />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {PortfolioClientListData.map(e => {
                            return <Col key={e.id} md={4} xs={12} lg={3}>
                                <div className="client-item text-center mb-5">
                                    <b>{e.name}</b>
                                </div>
                            </Col>
                        })}
                    </Row>
                </Container>
            </PopIn>
        </section>
    )
}

export default PortfolioClientList
