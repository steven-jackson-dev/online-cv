

import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { BounceInRight } from "react-spring-pop";
import ReactImage from '../../../../assets/images/skills-images/react.png'
import ReactNativeImage from '../../../../assets/images/skills-images/react-native.png'
import GraphQLImage from '../../../../assets/images/skills-images/GraphQL.png'
import DockerImage from '../../../../assets/images/skills-images/docker.png'
import NodejsImage from '../../../../assets/images/skills-images/Nodejs.png'

const ExtraSkillsInfo = () => {
    return (
        <section className="ExtraSkillsInfo">
            <h4>Upcoming Skills</h4>
            <p className="mb-5">These Upcoming skills that I am improving. You can see my progress on my projects page.</p>

            <BounceInRight>
                <div className="mb-5">
                    <Row no-noGutters>
                        <Col md={6} xs={12} lg={4} className="mb-4">
                            <Card className="text-center p-3">
                                <Card.Img variant="top" src={ReactImage} />
                                <Card.Body>
                                    <Card.Title>Reactjs</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} xs={12} lg={4} className="mb-4">
                            <Card className="text-center p-3">
                                <Card.Img variant="top" src={ReactNativeImage} />
                                <Card.Body>
                                    <Card.Title>React Native</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} xs={12} lg={4} className="mb-4">
                            <Card className="text-center p-3">
                                <Card.Img variant="top" src={GraphQLImage} />
                                <Card.Body>
                                    <Card.Title>GraphQL</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} xs={12} lg={4} className="mb-4">
                            <Card className="text-center p-3">
                                <Card.Img variant="top" src={NodejsImage} />
                                <Card.Body>
                                    <Card.Title>Nodejs</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} xs={12} lg={4} className="mb-4">
                            <Card className="text-center p-3">
                                <Card.Img variant="top" src={DockerImage} />
                                <Card.Body>
                                    <Card.Title>Docker</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </div>
            </BounceInRight>
        </section>
    )
}

export default ExtraSkillsInfo
