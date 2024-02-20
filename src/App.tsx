import './App.css';
import React from "react";
import Header from "./components/Header";
import Preloader from "./components/Preloader";

export default function App() {
    return (
        <>
            <Preloader />
            <Header />
        </>
    );
}
