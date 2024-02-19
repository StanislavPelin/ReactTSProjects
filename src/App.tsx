import './App.css';
import React, {useState} from "react";
import Header from "./components/Header";
import Links from "./components/Links";
import SocialIcons from "./components/SocialIcons";

export default function App() {
    const [toggle, setToggle] = useState<boolean>(false);

    return (
        <nav>
            <div className="nav-center">
                <Header toggle={toggle} setToggle={setToggle}/>
                <Links toggle={toggle}/>
                <SocialIcons />
            </div>
        </nav>
    );
}
