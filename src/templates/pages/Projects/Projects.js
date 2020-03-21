import React, { useEffect } from 'react'
import { Row, Container, Col } from 'react-bootstrap'
import Divider from '../../components/Divider/Divider'
import { BounceInRight } from "react-spring-pop";
import './Projects.scss'
import FontAwesome from 'react-fontawesome';
const Projects = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <section id="Projects" className="py-5 mt-5">
            <Container>
                <Row>
                    <Col md={3} xs={12} lg={3}>
                        <div className="title text-center">
                            <h3>Projects</h3>
                        </div>
                    </Col>
                    <Col md={9} xs={12} lg={9} className="content">
                        <BounceInRight>
                            <div className="mb-5">
                                <h2>Projects App</h2>
                                <em>Various Projects</em>
                                <p className="mt-3">
                                    Contains small apps built using React as practice while learning the library and various packages.
                            </p>
                                <b>Current Projects</b>
                                <ul  className="mb-5">
                                    <li>Card Deck</li>
                                    <li>Coin Flipper</li>
                                    <li>Color Boxes</li>
                                    <li>Lights Out Game</li>
                                    <li>Pokemon Card Game</li>
                                    <li>Roll Dice</li>
                                    <li>Todo List</li>
                                </ul>
                                <a href="https://stevenjackson.co.za/projects/" rel="noopener noreferrer" target="_blank">Visit Projects App<FontAwesome className="arrow-down" name="arrow-right" /></a>
                            </div>
                            <Divider />
                            <div className="mb-5">
                                <h2>CopyPasta</h2>
                                <em>In Development</em>
                                <p className="mt-3">
                                    A personal app for storing useful information and snippets
                            </p>
                            </div>
                        </BounceInRight>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}

export default Projects
