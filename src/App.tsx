import './App.css';
import React, {useState} from "react";
import Question from "./components/Question";

export default function App() {
    const [activeIndex, setActiveIndex] = useState<number>(-1);

    return (
        <section className="questions">
            <div className="title">
                <h2>general questions</h2>
            </div>
            <div className="section-center">
                <Question title="do you accept all major credit cards" isActive={activeIndex === 0}
                          handleClick={() => {
                              if (activeIndex !== 0) {
                                  setActiveIndex(0);
                              } else {
                                  setActiveIndex(-1);
                              }
                          }}
                />
                <Question title="do you support local farmers" isActive={activeIndex === 1}
                          handleClick={() => {
                              if (activeIndex !== 1) {
                                  setActiveIndex(1);
                              } else {
                                  setActiveIndex(-1);
                              }
                          }}
                />
                <Question title="do you use organic ingredients" isActive={activeIndex === 2}
                          handleClick={() => {
                              if (activeIndex !== 2) {
                                  setActiveIndex(2);
                              } else {
                                  setActiveIndex(-1);
                              }
                          }}
                />
            </div>
        </section>
    );
}
