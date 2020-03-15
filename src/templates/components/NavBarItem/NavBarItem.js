import React, { Fragment } from 'react'
import { ListGroup } from 'react-bootstrap'

import PropTypes from 'prop-types'

const NavBarItem = props => {
    return (
        <Fragment>
            <ListGroup.Item>No style</ListGroup.Item>
            <a href="#"><ListGroup.Item variant="primary">Primary</ListGroup.Item></a>
            <ListGroup.Item action variant="secondary">
                Secondary
                        </ListGroup.Item>
            <ListGroup.Item action variant="success">
                Success
                        </ListGroup.Item>
            <ListGroup.Item action variant="danger">
                Danger
                            </ListGroup.Item>
            <ListGroup.Item action variant="warning">
                Warning
                                        </ListGroup.Item>
            <ListGroup.Item action variant="info">
                Info
                        </ListGroup.Item>
            <ListGroup.Item action variant="light">
                Light
                                </ListGroup.Item>
            <ListGroup.Item action variant="dark">
                Dark
                            </ListGroup.Item>
        </Fragment>
    )
}

NavBarItem.propTypes = {

}

export default NavBarItem
