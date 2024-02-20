import './App.css';
import React, {useState} from "react";
import Buttons from "./components/Buttons";
import Slider from "./components/Slider";

export default function App() {
    const [counter, setCounter] = useState<number>(1);
    const [transform, setTransform] = useState<string>('');
    const slides = [1, 2, 3, 4]

    return (
        <>
            <Slider transform={transform} slides={slides}/>
            <Buttons counter={counter} setCounter={setCounter} setTransform={setTransform} slides={slides}/>
        </>
    );
}
