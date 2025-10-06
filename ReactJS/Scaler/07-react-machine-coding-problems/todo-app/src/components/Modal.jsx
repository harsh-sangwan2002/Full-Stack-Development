const Modal = ({ isVisible, hide }) => {

    if (!isVisible)
        return null;

    return (
        <>
            <h1>Modal Component</h1>
            <p>This is a modal</p>
            <button onClick={hide}>Hide Modal</button>
        </>
    )
}

export default Modal
