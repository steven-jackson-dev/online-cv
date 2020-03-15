import React from 'react'
import FontAwesome from 'react-fontawesome'
import { Row, Container } from 'react-bootstrap'
import './NavigationArrow.scss'
import { PropTypes } from 'prop-types';
const NavigationArrow = props => {
    const { link, color = '#fff', backToTop } = props;

    NavigationArrow.propTypes = {
        link: PropTypes.string.isRequired,
        color: PropTypes.string
    }

    return (
        <Row>
            <Container>
                <div className="NavigationArrow text-center my-4">
                    <a href={link}><FontAwesome className={backToTop ? "arrow-up" : "arrow-down"} style={{ color: color, border: `2px solid ${color}` }} name={backToTop ? "angle-up" : "angle-down"} /></a>
                </div>
            </Container>
        </Row>
    )


}

export default NavigationArrow
