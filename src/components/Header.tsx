import logo from '../images/logo.svg'
import React, {useRef, useState} from "react";
import ScrollLink from "./ScrollLink";
import {Refs} from "../App";

interface Props {
    isFixedNav: boolean;
    refs: Refs;
}

const Header = ({isFixedNav, refs}: Props) => {
    const [linksContainerHeight, setLinksContainerHeight] = useState('0');
    const linksContainerRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<HTMLUListElement>(null);
    const {navbarRef, homeRef, aboutRef, servicesRef, toursRef} = refs;

    const click = () => {
        const containerHeight = linksContainerRef.current?.clientHeight;
        const linksHeight = linksRef.current?.clientHeight;

        if (containerHeight === 0) {
            setLinksContainerHeight(`${linksHeight}px`);
        } else {
            setLinksContainerHeight('0');
        }
    }

    return (
        <header ref={homeRef}>
            <nav id="nav" ref={navbarRef} className={isFixedNav ? 'fixed-nav' : ''}>
                <div className="nav-center">
                    <div className="nav-header">
                        <img src={logo} alt="logo" className="logo"/>
                        <button className="nav-toggle" onClick={click}>
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div className="links-container" ref={linksContainerRef} style={{height: linksContainerHeight}}>
                        <ul className="links" ref={linksRef}>
                            <ScrollLink name="home" ref={homeRef}/>
                            <ScrollLink name="about" ref={aboutRef}/>
                            <ScrollLink name="services" ref={servicesRef}/>
                            <ScrollLink name="tours" ref={toursRef}/>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="banner">
                <div className="container">
                    <h1>scroll project</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eaque nulla magni aperiam
                        voluptatem neque officia sapiente. Deleniti, eveniet quidem.</p>
                    <ScrollLink name="tours" ref={toursRef} extraClasses="btn btn-white"/>
                </div>
            </div>
        </header>
    )
}

export default Header;