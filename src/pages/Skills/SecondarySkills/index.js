import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { BounceInRight } from "react-spring-pop";
import jQueryImage from 'assets/images/skills-images/jquery.png'
import MysqlImage from 'assets/images/skills-images/mysql.png'
import WindowsImage from 'assets/images/skills-images/windows-10.jpg'
import WampServerImage from 'assets/images/skills-images/WampServer-logo.png'
import NpmImage from 'assets/images/skills-images/npm-logo.png'
import TailwindImage from 'assets/images/skills-images/Tailwind.png'
import FileZillaImage from 'assets/images/skills-images/FileZilla_logo.png'
import PhotoshopImage from 'assets/images/skills-images/Adobe_Photoshop_Logo.jpg'
import ScssImage from 'assets/images/skills-images/scss.png'

const SecondarySkills = () => {
    return (
        <section className="SecondarySkills">
            <h4>Secondary Skills</h4>
            <p className="mb-5">These various platforms, libraries and tools that I have used or still use.</p>

            <BounceInRight>
                <div className="mb-5">
                    <Row>
                        <Col md={6} xs={12} lg={4} className="mb-4">
                            <Card className="text-center p-3">
                                <Card.Img variant="top" src={WindowsImage} />
                                <Card.Body>
                                    <Card.Title>Windows 10</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} xs={12} lg={4} className="mb-4">
                            <Card className="text-center p-3">
                                <Card.Img variant="top" src={WampServerImage} />
                                <Card.Body>
                                    <Card.Title>Wamp</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} xs={12} lg={4} className="mb-4">
                            <Card className="text-center p-3">
                                <Card.Img variant="top" src={jQueryImage} />
                                <Card.Body>
                                    <Card.Title>jQuery</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} xs={12} lg={4} className="mb-4">
                            <Card className="text-center p-3">
                                <Card.Img variant="top" src={MysqlImage} />
                                <Card.Body>
                                    <Card.Title>MySql</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} xs={12} lg={4} className="mb-4">
                            <Card className="text-center p-3">
                                <Card.Img variant="top" src={NpmImage} />
                                <Card.Body>
                                    <Card.Title>Npm</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} xs={12} lg={4} className="mb-4">
                            <Card className="text-center p-3">
                                <Card.Img variant="top" src={TailwindImage} />
                                <Card.Body>
                                    <Card.Title>Tailwind</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} xs={12} lg={4} className="mb-4">
                            <Card className="text-center p-3">
                                <Card.Img variant="top" src={FileZillaImage} />
                                <Card.Body>
                                    <Card.Title>FileZilla</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} xs={12} lg={4} className="mb-4">
                            <Card className="text-center p-3">
                                <Card.Img variant="top" src={PhotoshopImage} />
                                <Card.Body>
                                    <Card.Title>Photoshop</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} xs={12} lg={4} className="mb-4">
                            <Card className="text-center p-3">
                                <Card.Img variant="top" src={ScssImage} />
                                <Card.Body>
                                    <Card.Title>SCSS</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </div>
            </BounceInRight>
        </section>
    )
}

export default SecondarySkills


