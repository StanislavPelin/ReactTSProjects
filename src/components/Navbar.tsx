import {NavLink, Outlet} from "react-router-dom";
import React from "react";

export default function Navbar() {
    return (
        <nav>
            <div className="nav-center">
                <h4>color Flipper</h4>
                <ul className="nav-links">
                    <li>
                        <NavLink to="/simple" className="button">Simple</NavLink>
                    </li>
                    <li>
                        <NavLink to="/hex" className="button">Hex</NavLink>
                    </li>
                </ul>
            </div>
            <Outlet />
        </nav>
    );
}