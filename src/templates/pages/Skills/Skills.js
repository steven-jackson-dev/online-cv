import React, { useEffect } from 'react'
import { Row, Container, Col } from 'react-bootstrap'
import { BounceInRight } from "react-spring-pop";
import './Skills.scss'


const Skills = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    
    return (
        <section className="Skills py-5">
            <Container>
                <Row>
                    <Col md={3} xs={12} lg={2}>
                        <div className="title text-center">
                            <h3>Skills</h3>
                        </div>
                    </Col>
                    {/* Main Skills */}
                    <Col md={9} xs={12} lg={10} className="content">
                        <h4>Main Skills</h4>
                        <p className="mb-5">
                            These skills are just what I know the most about, but I am flexible on new languages and frameworks and pick up skills very quickly.
                                </p>

                        <BounceInRight>
                            <div className="mb-5">
                                <Row no-noGutters>
                                    <Col md={6} xs={12} lg={6} className="mb-4">
                                        <Row>
                                            <Col md={6} xs={12} lg={4}> <img src="https://via.placeholder.com/100x100" /></Col>
                                            <Col md={6} xs={12} lg={8}> <h2>HTML 5</h2>
                                                <b>Very Experienced</b><br />
                                                <em>5 Years</em>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md={6} xs={12} lg={6} className="mb-4">
                                        <Row>
                                            <Col md={6} xs={12} lg={4}> <img src="https://via.placeholder.com/100x100" /></Col>
                                            <Col md={6} xs={12} lg={8}> <h2>HTML 5</h2>
                                                <b>Very Experienced</b><br />
                                                <em>5 Years</em>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md={6} xs={12} lg={6} className="mb-4">
                                        <Row>
                                            <Col md={6} xs={12} lg={4}> <img src="https://via.placeholder.com/100x100" /></Col>
                                            <Col md={6} xs={12} lg={8}> <h2>HTML 5</h2>
                                                <b>Very Experienced</b><br />
                                                <em>5 Years</em>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md={6} xs={12} lg={6} className="mb-4">
                                        <Row>
                                            <Col md={6} xs={12} lg={4}> <img src="https://via.placeholder.com/100x100" /></Col>
                                            <Col md={6} xs={12} lg={8}> <h2>HTML 5</h2>
                                                <b>Very Experienced</b><br />
                                                <em>5 Years</em>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md={6} xs={12} lg={6} className="mb-4">
                                        <Row>
                                            <Col md={6} xs={12} lg={4}> <img src="https://via.placeholder.com/100x100" /></Col>
                                            <Col md={6} xs={12} lg={8}> <h2>HTML 5</h2>
                                                <b>Very Experienced</b><br />
                                                <em>5 Years</em>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                            </div>
                        </BounceInRight>
                        {/* Secondary Skills */}
                        <Col md={9} xs={12} lg={10}>
                            <h4>Secondary Skills</h4>
                            <p className="mb-5">
                                These secondary skills are just things that I have basic knowledge of and need work, but are not a priority.
                                </p>

                            <BounceInRight>
                                <div className="mb-5">
                                    <Row no-noGutters>
                                        <Col md={6} xs={12} lg={6} className="mb-4">
                                            <Row>
                                                <Col md={6} xs={12} lg={4}> <img src="https://via.placeholder.com/100x100" /></Col>
                                                <Col md={6} xs={12} lg={8}> <h2>HTML 5</h2>
                                                    <b>Very Experienced</b><br />
                                                    <em>5 Years</em>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col md={6} xs={12} lg={6} className="mb-4">
                                            <Row>
                                                <Col md={6} xs={12} lg={4}> <img src="https://via.placeholder.com/100x100" /></Col>
                                                <Col md={6} xs={12} lg={8}> <h2>HTML 5</h2>
                                                    <b>Very Experienced</b><br />
                                                    <em>5 Years</em>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col md={6} xs={12} lg={6} className="mb-4">
                                            <Row>
                                                <Col md={6} xs={12} lg={4}> <img src="https://via.placeholder.com/100x100" /></Col>
                                                <Col md={6} xs={12} lg={8}> <h2>HTML 5</h2>
                                                    <b>Very Experienced</b><br />
                                                    <em>5 Years</em>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col md={6} xs={12} lg={6} className="mb-4">
                                            <Row>
                                                <Col md={6} xs={12} lg={4}> <img src="https://via.placeholder.com/100x100" /></Col>
                                                <Col md={6} xs={12} lg={8}> <h2>HTML 5</h2>
                                                    <b>Very Experienced</b><br />
                                                    <em>5 Years</em>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col md={6} xs={12} lg={6} className="mb-4">
                                            <Row>
                                                <Col md={6} xs={12} lg={4}> <img src="https://via.placeholder.com/100x100" /></Col>
                                                <Col md={6} xs={12} lg={8}> <h2>HTML 5</h2>
                                                    <b>Very Experienced</b><br />
                                                    <em>5 Years</em>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>

                                </div>
                            </BounceInRight>

                        </Col>
                        {/* Secondary Skills */}
                        <Col md={9} xs={12} lg={10}>
                            <h4>Tools</h4>
                            <p className="mb-5">
                                These are the tools that I use.
                                </p>

                            <BounceInRight>
                                <div className="mb-5">
                                    <Row no-noGutters>
                                        <Col md={6} xs={12} lg={6} className="mb-4">
                                            <Row>
                                                <Col md={6} xs={12} lg={4}> <img src="https://via.placeholder.com/100x100" /></Col>
                                                <Col md={6} xs={12} lg={8}> <h2>HTML 5</h2>
                                                    <b>Very Experienced</b><br />
                                                    <em>5 Years</em>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col md={6} xs={12} lg={6} className="mb-4">
                                            <Row>
                                                <Col md={6} xs={12} lg={4}> <img src="https://via.placeholder.com/100x100" /></Col>
                                                <Col md={6} xs={12} lg={8}> <h2>HTML 5</h2>
                                                    <b>Very Experienced</b><br />
                                                    <em>5 Years</em>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col md={6} xs={12} lg={6} className="mb-4">
                                            <Row>
                                                <Col md={6} xs={12} lg={4}> <img src="https://via.placeholder.com/100x100" /></Col>
                                                <Col md={6} xs={12} lg={8}> <h2>HTML 5</h2>
                                                    <b>Very Experienced</b><br />
                                                    <em>5 Years</em>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col md={6} xs={12} lg={6} className="mb-4">
                                            <Row>
                                                <Col md={6} xs={12} lg={4}> <img src="https://via.placeholder.com/100x100" /></Col>
                                                <Col md={6} xs={12} lg={8}> <h2>HTML 5</h2>
                                                    <b>Very Experienced</b><br />
                                                    <em>5 Years</em>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col md={6} xs={12} lg={6} className="mb-4">
                                            <Row>
                                                <Col md={6} xs={12} lg={4}> <img src="https://via.placeholder.com/100x100" /></Col>
                                                <Col md={6} xs={12} lg={8}> <h2>HTML 5</h2>
                                                    <b>Very Experienced</b><br />
                                                    <em>5 Years</em>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>

                                </div>
                            </BounceInRight>

                        </Col>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}

export default Skills
