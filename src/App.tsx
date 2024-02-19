import './App.css';
import React, {useState} from "react";
import Title from "./components/Title";
import ButtonContainer from "./components/ButtonContainer";
import Menu from "./components/Menu";
import {menu} from "./components/menuItems";

export type MenuItem = {
    id: number;
    title: string;
    category: string;
    price: number;
    img: string;
    desc: string;
}

export default function App() {
    const [menuItemsDisplay, setMenuItemsDisplay] = useState<React.JSX.Element[]>(displayMenuItems(menu));

    function displayMenuItems(menuItems: MenuItem[]) {
        return menuItems.map(function(item) {
            return <article key={item.id} className="menu-item">
                <img src={item.img} className="photo" alt={item.title} />
                <div className="item-info">
                    <header>
                        <h4>{item.title}</h4>
                        <h4 className="price">{item.price}</h4>
                    </header>
                    <p className="item-text">{item.desc}</p>
                </div>
            </article>
        });
    }

    return (
        <section className="menu">
            <Title />
            <ButtonContainer
                displayMenuItems={displayMenuItems}
                setMenuItemsDisplay={setMenuItemsDisplay}
            />
            <Menu menuItemsDisplay={menuItemsDisplay}/>
        </section>
    );
}
