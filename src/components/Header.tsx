import React from "react";
import logo from '../images/logo.svg'

interface Props {
    toggle: boolean;
    setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({toggle, setToggle}: Props) {

    const click = () => {
        setToggle(!toggle);
    }

    return (
        <div className="nav-header">
            <img src={logo} className="logo" alt="logo" />
            <button className="nav-toggle" onClick={click}>
                <i className="fas fa-bars"></i>
            </button>
        </div>
    )
}