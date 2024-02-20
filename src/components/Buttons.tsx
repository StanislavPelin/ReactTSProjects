import React from "react";

interface Props {
    activeIndex: number;
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function Buttons({activeIndex, setActiveIndex}: Props) {
    return (
        <div className="btn-container">
            <button className={`tab-btn${activeIndex===0 ? ' active' : ''}`} data-id="history" onClick={() => setActiveIndex(0)}>history</button>
            <button className={`tab-btn${activeIndex===1 ? ' active' : ''}`} data-id="vision" onClick={() => setActiveIndex(1)}>vision</button>
            <button className={`tab-btn${activeIndex===2 ? ' active' : ''}`} data-id="goals" onClick={() => setActiveIndex(2)}>goals</button>
        </div>
    )
}