import React from "react";

interface Props {
    modalOpened: boolean;
    setModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ModalOverlay({modalOpened, setModalOpened}: Props) {

    const click = () => {
        setModalOpened(false);
    }

    return (
        <div className={`modal-overlay${modalOpened ? ' open-modal' : ''}`}>
            <div className="modal-container">
                <h3>modal content</h3>
                <button className="close-btn" onClick={click}>
                    <i className="fas fa-times"></i>
                </button>
            </div>
        </div>
    )
}