import './App.css';
import React, {useState} from "react";
import Header from "./components/Header";
import ModalOverlay from "./components/ModalOverlay";

export type MenuItem = {
    id: number;
    title: string;
    category: string;
    price: number;
    img: string;
    desc: string;
}

export default function App() {
    const [modalOpened, setModalOpened] = useState<boolean>(false);

    return (
        <>
            <Header setModalOpened={setModalOpened}/>
            <ModalOverlay modalOpened={modalOpened} setModalOpened={setModalOpened}/>
        </>
    );
}
