import React from 'react'
import { Row, Col } from 'react-bootstrap'
import HomepageLink from '../HomepageLink/HomepageLink'
import NavigationArrow from './../../../components/NavigationArrow/NavigationArrow';

export const HomepageContactMe = () => {
    return (
        <section id="HomepageContactMe" className="py-5">
            {/* <Row>
                <Col className="content text-center">
                    <h2 className="text-uppercase">Contact Me</h2>
                    <hr style={{ borderColor: '#fff' }} />
                    <HomepageLink link="#HomepageAboutMe" name="Contact Me" />
                </Col>
            </Row> */}
            <NavigationArrow link="#" color="#000" backToTop />
            <p className="text-center">Back to Top</p>
        </section>
    )
}
