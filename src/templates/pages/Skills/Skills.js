import React, { useEffect } from 'react'
import { Row, Container, Col } from 'react-bootstrap'
import './Skills.scss'
import MainSkills from './MainSkills/MainSkills';
import SecondarySkills from './SecondarySkills/SecondarySkills';
import ExtraSkillsInfo from './ExtraSkillsInfo/ExtraSkillsInfo';


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
                    <Col md={9} xs={12} lg={10}>
                        <MainSkills />
                        <SecondarySkills />
                        <ExtraSkillsInfo />
                    </Col>
                </Row>
            </Container>

        </section >
    )
}

export default Skills
