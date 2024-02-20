import './App.css';
import React, {useState} from "react";
import Button from "./components/Button";
import Sidebar from "./components/Sidebar";

export default function App() {
    const [isSidebarShown, setIsSidebarShown] = useState(false);

    return (
        <>
            <Button isSidebarShown={isSidebarShown} setIsSidebarShown={setIsSidebarShown}/>
            <Sidebar isSidebarShown={isSidebarShown} setIsSidebarShown={setIsSidebarShown}/>
        </>
    );
}
