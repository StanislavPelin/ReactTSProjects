import './App.css';
import React, {useState} from "react";
import Buttons from "./components/Buttons";
import AboutContent from "./components/AboutContent";
import hero from './images/hero-bcg.jpeg';

export default function App() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="section">
            <div className="title">
                <h2>about</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, maxime.</p>
            </div>
            <div className="about-center section-senter">
                <article className="about-img">
                    <img src={hero} alt="about"/>
                </article>
                <article className="about">
                    <Buttons activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
                </article>
                <AboutContent activeIndex={activeIndex}/>
            </div>
        </section>
    );
}
