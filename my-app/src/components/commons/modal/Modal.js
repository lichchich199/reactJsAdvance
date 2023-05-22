import './modal.css'


export default function Modal(props) {
  return (
    <>
        
    </>
  )
}

export const ModalHeader = props => {
    return <div className="modal__header">
        {props.children}
    </div>
}

export const ModalBody = props => {
    return <div className="modal__body">
        {props.children}
    </div>
}

export const ModalFooter = props => {
    return <div className="modal__footer">
        {props.children}
    </div>
}
