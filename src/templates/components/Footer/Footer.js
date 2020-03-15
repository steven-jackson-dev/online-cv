import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Footer = () => {
    const styles = {
        backgroundColor: '#1f1f1f'
    }
    return (
        <footer style={styles} className="text-white py-5">
            <Row>
                <Col className="content text-center">
                    <p>Written by Steven Jackson 2020</p>
                </Col>

            </Row>
        </footer>
    )
}

export default Footer;
