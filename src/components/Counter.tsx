import {useState} from "react";

export default function Counter() {
    const [value, setValue] = useState<number>(0);
    const [color, setColor] = useState<string>('black')
    let count: number = value;

    const click = (event: string) => {
        if (event === 'decrease') {
            count--;
        } else if (event === 'reset') {
            count = 0;
        } else if (event === 'increase') {
            count++;
        }
        if (count > 0) {
            setColor('green');
        }
        if (count < 0) {
            setColor('red');
        }
        if (count === 0) {
            setColor('black');
        }
        setValue(count);
    }

    return (
        <div className="container">
            <h1>counter</h1>
            <span id="value" style={{color: color}}>{value}</span>
            <div className="button-container">
                <button className="btn" onClick={() => click('decrease')}>decrease</button>
                <button className="btn" onClick={() => click('reset')}>reset</button>
                <button className="btn" onClick={() => click('increase')}>increase</button>
            </div>
        </div>
    )
}