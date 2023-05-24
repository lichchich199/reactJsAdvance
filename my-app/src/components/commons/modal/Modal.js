import './modal.css'
import Modal from 'react-bootstrap/Modal';

// modal
export default function ModalCustom(props) {
  return (
    <Modal className='modalCustom' show={props.show} onHide={props.handleClose}>
        {props.children}
    </Modal>
  )
}
// header modal
export const ModalHeader = props => {
    return (<Modal.Header>
        <Modal.Title>{props.title}</Modal.Title>
  </Modal.Header>)
}
// body modal
export const ModalBody = props => {
    return <Modal.Body>{props.children}</Modal.Body>
}
// footer modal
export const ModalFooter = props => {
    return (<Modal.Footer>
            {props.children}
        </Modal.Footer>)
}
