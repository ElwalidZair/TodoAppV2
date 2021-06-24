import React from 'react'
import Modal from 'react-modal';
import './ConfirmationToDelete.css';

Modal.setAppElement('#root')

const ConfirmationToDelete = ({setShowModal, showModal, deleteItem,todo}) => {
    return (
        <div>
            <Modal className="modal" isOpen={showModal}> 
                <h1>Are you sure that you want to delete this task?</h1>
                <button onClick={()=>deleteItem(todo.id)}>Yes</button>
                <button className="modal-close" onClick={()=>setShowModal(false)}>Cancel</button>
            </Modal>
        </div>
    )
}

export default ConfirmationToDelete
