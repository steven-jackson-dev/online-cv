import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { BounceInRight } from "react-spring-pop";
import HtmlImage from '../../../../assets/images/skills-images/html5.png'
import CssImage from '../../../../assets/images/skills-images/css3.png'
import JavascriptImage from '../../../../assets/images/skills-images/javascript.png'
import PhpImage from '../../../../assets/images/skills-images/php.png'
import BootstrapImage from '../../../../assets/images/skills-images/bootstrap.png'
import WordpressImage from '../../../../assets/images/skills-images/wordpress.png'

const MainSkills = () => {
    return (

        <section className="MainSkills">
            <h4>Main Skills</h4>
            <p className="mb-5">
                These are my core skills that I know the most about, but I am flexible on new languages and frameworks and pick up skills very quickly. My skills update daily due to studying and researching.
             </p>

            <BounceInRight>
                <div className="mb-5">
                    <Row no-noGutters>
                        <Col md={6} xs={12} lg={4} className="mb-4">
                            <Card className="text-center p-3">
                                <Card.Img variant="top" src={HtmlImage} />
                                <Card.Body>
                                    <Card.Title>HTML 5</Card.Title>
                                    <Card.Text>
                                        <b>Very Experienced</b><br />
                                        <em>5 Years</em>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} xs={12} lg={4} className="mb-4">
                            <Card className="text-center p-3">
                                <Card.Img variant="top" src={CssImage} />
                                <Card.Body>
                                    <Card.Title>CSS 3</Card.Title>
                                    <Card.Text>
                                        <b>Very Experienced</b><br />
                                        <em>5 Years</em>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} xs={12} lg={4} className="mb-4">
                            <Card className="text-center p-3">
                                <Card.Img variant="top" src={JavascriptImage} />
                                <Card.Body>
                                    <Card.Title>Javascript</Card.Title>
                                    <Card.Text>
                                        <b>Experienced</b><br />
                                        <em>4 Years</em>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} xs={12} lg={4} className="mb-4">
                            <Card className="text-center p-3">
                                <Card.Img variant="top" src={PhpImage} />
                                <Card.Body>
                                    <Card.Title>PHP</Card.Title>
                                    <Card.Text>
                                        <b>Experienced</b><br />
                                        <em>3 Years</em>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} xs={12} lg={4} className="mb-4">
                            <Card className="text-center p-3">
                                <Card.Img variant="top" src={BootstrapImage} />
                                <Card.Body>
                                    <Card.Title>Bootstrap</Card.Title>
                                    <Card.Text>
                                        <b>Very Experienced</b><br />
                                        <em>4 Years</em>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} xs={12} lg={4} className="mb-4">
                            <Card className="text-center p-3">
                                <Card.Img variant="top" src={WordpressImage} />
                                <Card.Body>
                                    <Card.Title>Wordpress</Card.Title>
                                    <Card.Text>
                                        <b>Experienced</b><br />
                                        <em>3 Years</em>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </BounceInRight>
        </section>
    )
}

export default MainSkills
