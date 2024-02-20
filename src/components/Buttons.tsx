import React, {useState} from "react";

interface Props {
    counter: number;
    setCounter: React.Dispatch<React.SetStateAction<number>>;
    setTransform: React.Dispatch<React.SetStateAction<string>>;
    slides: number[];
}

export default function Buttons({counter, setCounter, setTransform, slides}: Props) {
    const [prevBtnDisplay, setPrevBtnDisplay] = useState<string>('none');
    const [nextBtnDisplay, setNextBtnDisplay] = useState<string>('');
    let value = counter;

    const increment = () => {
        value++;
        setCounter(value);
        carousel();
    }
    const decrement = () => {
        value--;
        setCounter(value);
        carousel();
    }

    function carousel() {
        if (value < slides.length) {
            setNextBtnDisplay('block');
        } else {
            setNextBtnDisplay('none');
        }
        if (value > 1) {
            setPrevBtnDisplay('block');
        } else {
            setPrevBtnDisplay('none');
        }

        setTransform(`translateX(-${(value-1) * 100}%)`);
    }

    return (
        <div className="btn-container">
            <button type="button" className="prevBtn" onClick={decrement} style={{display: prevBtnDisplay}}>prev</button>
            <button type="button" className="nextBtn" onClick={increment} style={{display: nextBtnDisplay}}>next</button>
        </div>
    )
}