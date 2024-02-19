import {menu} from './menuItems';
import React from "react";
import {MenuItem} from "../App";

interface Props {
    displayMenuItems: (menuItems: MenuItem[]) => React.JSX.Element[];
    setMenuItemsDisplay:  React.Dispatch<React.SetStateAction<React.JSX.Element[]>>;
}

export default function ButtonContainer({displayMenuItems, setMenuItemsDisplay}: Props) {

    const click = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const category = event.currentTarget.dataset.id;
        const menuCategory = menu.filter((menuItem) => menuItem.category === category);
        if (category === 'all') {
            setMenuItemsDisplay(displayMenuItems(menu));
        } else {
            setMenuItemsDisplay(displayMenuItems(menuCategory));
        }
    }

    function displayFilterBtns(menuItems: MenuItem[]) {
        return menuItems
            .reduce(function (values, item) {
                if (!values.includes(item.category)) {
                    values.push(item.category);
                }
                return values;
            }, ['all'])
            .map(function (category, index) {
                return [<button key={index} className="filter-btn" type="button" onClick={click} data-id={category}>{category}</button>]
            });
    }

    return (
        <div className="btn-container">
            {displayFilterBtns(menu)}
        </div>
    )
}