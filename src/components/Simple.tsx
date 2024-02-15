import React, {useEffect, useState} from "react";

export default function Simple() {
    const [color, setColor] = useState<string>("white")
    const colors: string[] = ["green", "red", "rgba(133,122,200)", "#f15025"];
    const click = (color: string) => {
        setColor(color);
    }

    useEffect(() => {
        document.body.style.backgroundColor = color;
    }, [color]);

    function getRandomNumber(): number {
        return Math.floor(Math.random() * colors.length);
    }

    return (
        <main>
            <div className="container">
                <h2>background color : <span className="color">{color}</span></h2>
                <button onClick={() => click(colors[getRandomNumber()])} className="btn btn-hero" id="btn">click me</button>
            </div>
        </main>
    );
}