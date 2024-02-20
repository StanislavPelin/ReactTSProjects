import './App.css';
import React, {Fragment, useEffect, useRef, useState} from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import TopLink from "./components/TopLink";

export type Refs = {
    navbarRef:  React.RefObject<HTMLDivElement>;
    homeRef:  React.RefObject<HTMLDivElement>;
    aboutRef:  React.RefObject<HTMLDivElement>;
    servicesRef:  React.RefObject<HTMLDivElement>;
    toursRef:  React.RefObject<HTMLDivElement>
}

export default function App() {
    const [topLinkVisible, setTopLinkVisible] = useState<boolean>(false);
    const [isFixedNav, setIsFixedNav] = useState<boolean>(false);
    const navbarRef = useRef<HTMLDivElement>(null);
    const homeRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const servicesRef = useRef<HTMLDivElement>(null);
    const toursRef = useRef<HTMLDivElement>(null);
    const refs: Refs = {
        navbarRef: navbarRef,
        homeRef: homeRef,
        aboutRef: aboutRef,
        servicesRef: servicesRef,
        toursRef: toursRef
    }

    useEffect(() => {
        const onScroll = () => {
            const scrollHeight = window.scrollY;
            const navHeight = refs.navbarRef.current?.clientHeight;

            if (navHeight!== undefined && scrollHeight > navHeight) {
                setIsFixedNav(true);
            } else {
                setIsFixedNav(false)
            }

            if (scrollHeight > 500) {
                setTopLinkVisible(true);
            } else {
                setTopLinkVisible(false);
            }
        }

        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, [refs]);

    return (
        <>
            <Header isFixedNav={isFixedNav} refs={refs}/>
            <Section ref={aboutRef} title={<Fragment>about <span>us</span></Fragment>}/>
            <Section ref={servicesRef} title={<Fragment>our <span>services</span></Fragment>}/>
            <Section ref={toursRef} title={<Fragment>featured <span>tours</span></Fragment>}/>
            <Footer />
            <TopLink ref={homeRef} topLinkVisible={topLinkVisible}/>
        </>
    );
}
