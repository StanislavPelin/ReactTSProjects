import logo from '../images/logo.svg'
import React from "react";

interface Props {
    isSidebarShown: boolean;
    setIsSidebarShown: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Sidebar({isSidebarShown, setIsSidebarShown}: Props) {

    const click = () => {
        setIsSidebarShown(false);
    }

    return (
        <aside className={`sidebar${isSidebarShown ? ' show-sidebar' : ''}`}>
            <div className="sidebar-header">
                <img src={logo} className="logo" alt="logo"/>
                <button className="close-btn" onClick={click}>
                    <i className="fas fa-times"></i>
                </button>
            </div>
            <ul className="links">
                <li>
                    <a href="index.html">home</a>
                </li>
                <li>
                    <a href="about.html">about</a>
                </li>
                <li>
                    <a href="projects.html">projects</a>
                </li>
                <li>
                    <a href="contact.html">contact</a>
                </li>
            </ul>
            <ul className="social-icons">
                <li>
                    <a href="https://www.twitter.com">
                        <i className="fab fa-facebook"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.twitter.com">
                        <i className="fab fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.twitter.com">
                        <i className="fab fa-behance"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.twitter.com">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.twitter.com">
                        <i className="fab fa-sketch"></i>
                    </a>
                </li>
            </ul>
        </aside>
    )
}