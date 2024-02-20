import img from '../images/img-1.jpeg';
import person from '../images/person-1.jpeg'
import React from "react";

interface Props {
    transform: string;
    slides: number[];
}

export default function Slider({transform, slides}: Props) {
    const pickImage = (slide: number) => {
        if (slide === 1) {
            return <img src={img} className="slide-img" alt=""/>
        } else if (slide === 4) {
            return <img src={person} className="person-img" alt=""/>
        } else {
            return <></>
        }
    }

    return (
        <div className="slider-container">
            {slides.map((slide) => {
                return (
                    <div className="slide" style={{left:`${(slide-1) * 100}%`, transform: transform}}>
                        {pickImage(slide)}
                        {slide === 4 ? <h4>susan doe</h4> : <></>}
                        <h1>{slide}</h1>
                    </div>
                )
            })}
        </div>
    )
}