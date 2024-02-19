import Link from "./Link";
import React from "react";

interface Props {
    toggle: boolean;
}

export default function Links({toggle}: Props) {
    return (
        <ul className={`links${toggle ? ' show-links' : ''}`}>
            <Link link="index" />
            <Link link="abount" />
            <Link link="projects" />
            <Link link="contact" />
        </ul>
    );
}