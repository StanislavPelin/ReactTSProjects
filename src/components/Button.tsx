import React from "react";

interface Props {
    isSidebarShown: boolean;
    setIsSidebarShown: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Button({isSidebarShown, setIsSidebarShown}: Props) {

    const toggle = () => {
        setIsSidebarShown(!isSidebarShown);
    }

    return (
        <button className="sidebar-toggle" onClick={toggle}>
            <i className="fas fa-bars"></i>
        </button>
    )
}