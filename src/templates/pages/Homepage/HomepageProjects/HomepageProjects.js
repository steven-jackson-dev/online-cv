import React from 'react'
import { Row, Col } from 'react-bootstrap'
import HomepageLink from '../HomepageLink/HomepageLink'

const HomepageProjects = () => {
    const styles = {
        backgroundColor: '#1f1f1fe3'
    }
    return (
        <section id="HomepageProjects" className="text-white py-5" style={styles}>
            <Row>
                <Col className="content text-center">
                    <h2 className="text-uppercase">My Projects</h2>
                    <hr style={{ borderColor: '#fff' }} />
                    <p>A collection of my mini projects</p>
                    <HomepageLink link="/" name="Visit Projects" colors={{ bgColor: '#fff', color: '#313131' }} />
                </Col>

            </Row>
        </section>
    )
}

export default HomepageProjects
