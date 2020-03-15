import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Container } from 'react-bootstrap'


const Content = props => {

    const { content, imagePath } = props;
    return (
        <section className="Content">
            <Container>
                <Row>
                    <Col md={6}>{content}</Col>
                    <Col md={6}><img src={imagePath} className="img-fluid" alt="" /></Col>
                </Row>
            </Container>
        </section>

    )
}

Content.propTypes = {

}

export default Content
