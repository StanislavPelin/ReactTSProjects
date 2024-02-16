import GroceryItem from "./GroceryItem";
import Button from "./Button";
import React from "react";
import {Grocery} from "../App";

interface Props {
    groceries: Grocery[];
    setGroceries: React.Dispatch<React.SetStateAction<Object[]>>;
    setGroceryItem: React.Dispatch<React.SetStateAction<string>>;
    containerVisible: boolean;
    setContainerVisible: React.Dispatch<React.SetStateAction<boolean>>;
    setSubmitBtnText: React.Dispatch<React.SetStateAction<string>>;
    setEditFlag: React.Dispatch<React.SetStateAction<boolean>>;
    setEditID: React.Dispatch<React.SetStateAction<string>>;
    displayAlert: (text: string, action: string) => void;
    setBackToDefault: () => void;
}

export default function GroceryList({groceries, setGroceries, setGroceryItem, containerVisible,
                                        setContainerVisible, setSubmitBtnText,
                                        setEditFlag, setEditID, displayAlert, setBackToDefault
                                    }: Props) {

    const click = () => {
        setGroceries([]);
        setContainerVisible(false);
    }

    function editItem(event: React.MouseEvent<HTMLElement>) {
        const element = event.currentTarget?.parentElement?.parentElement;

        setGroceryItem(groceries.find((grocery: Grocery) => grocery.id === element?.dataset.id)?.name as string);
        setEditFlag(true);
        setEditID(element?.dataset.id as string);
        setSubmitBtnText('edit');
    }

    function deleteItem(event: React.MouseEvent<HTMLElement>) {
        const element = event.currentTarget?.parentElement?.parentElement;
        const id = element?.dataset.id;
        setGroceries(groceries.filter(function (item: Grocery) {
            if (item.id !== id) {
                return item;
            }
        }));
        if (groceries.length === 1) {
            setContainerVisible(false);
        }
        displayAlert('item removed', 'danger');
        setBackToDefault();
    }

    return (
        <div className={`grocery-container${containerVisible ? " show-container" : ""}`}>

            <div className="grocery-list">
                {groceries.map((grocery: Grocery) => {
                    return <GroceryItem key={grocery.id} id={grocery.id} name={grocery.name} editItem={editItem} deleteItem={deleteItem}/>;
                })}
            </div>
            <Button buttonClass="clear-btn" buttonText="clear items" handleClick={click}/>
        </div>
    )
}