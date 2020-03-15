import React from 'react'
import { Container } from 'react-bootstrap'

const Divider = () => {
    return (
        <div className="divider">
            <Container>
                <hr style={{ width: '100%', margin: '2em auto' }} />
            </Container>
        </div>
    )
}

export default Divider
