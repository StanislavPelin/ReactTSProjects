import React, {useEffect, useState} from "react";

export default function Hex() {
    const [color, setColor] = useState<string>("white")
    const hex: (number | string)[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    const click = (color: string) => {
        setColor(color);
    }

    useEffect(() => {
        document.body.style.backgroundColor = color;
    }, [color]);

    function buildHexCode(): string {
        let hexColor = '#';
        for(let i = 0; i<6; i++) {
            hexColor += hex[getRandomNumber()];
        }
        return hexColor;
    }

    function getRandomNumber(): number {
        return Math.floor(Math.random() * hex.length);
    }

    return (
        <main>
            <div className="container">
                <h2>background color : <span className="color">{color}</span></h2>
                <button onClick={() => click(buildHexCode())} className="btn btn-hero" id="btn">click me</button>
            </div>
        </main>
    );
}