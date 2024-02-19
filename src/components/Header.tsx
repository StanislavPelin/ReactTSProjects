import React from "react";

interface Props {
    setModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({setModalOpened}: Props) {

    const click = () => {
        setModalOpened(true)
    }

    return (
        <header className="hero">
            <div className="banner">
                <h1>modal project</h1>
                <button className="btn modal-btn" onClick={click}>
                    open modal
                </button>
            </div>
        </header>
    )
}