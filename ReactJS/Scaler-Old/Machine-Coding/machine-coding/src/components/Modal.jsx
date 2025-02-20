import React from 'react'

function Modal({ isVisible, hide }) {
    return (
        <div>
            {
                isVisible &&
                <>
                    <h1>Modal Component</h1>
                    <p>This is a modal</p>
                    <button className='btn' onClick={hide}>Hide modal</button>
                </>
            }
        </div>
    )
}

export default Modal
