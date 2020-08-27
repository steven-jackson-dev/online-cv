import React from 'react'
import { Modal, Image } from 'react-bootstrap'

const AppModalImage = props => {
    const { imgsrc, name, type } = props.content;
    return (
        <Modal className="ModalImage"
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <div className="content">
                    <h4>{name}</h4>
                    <em>{type}</em>
                </div>
            </Modal.Header>
            <Modal.Body>

                <div className="content text-center">
                    <Image src={imgsrc} />
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default AppModalImage
