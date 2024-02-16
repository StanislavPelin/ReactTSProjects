import Button from "./Button";
import React, {useEffect} from "react";
import {Grocery} from "../App";

interface Props {
    groceries: Grocery[];
    setGroceries: React.Dispatch<React.SetStateAction<Object[]>>;
    groceryItem: string;
    setGroceryItem: React.Dispatch<React.SetStateAction<string>>;
    setContainerVisible: React.Dispatch<React.SetStateAction<boolean>>;
    submitBtnText: string;
    alertType: string;
    alertText: string;
    editFlag: boolean;
    editID: string;
    displayAlert: (text: string, action: string) => void;
    setBackToDefault: () => void;
}

export default function GroceryForm({groceries, setGroceries, groceryItem, setGroceryItem,
                                        setContainerVisible, submitBtnText, alertType, alertText,
                                        editFlag, editID, displayAlert, setBackToDefault
                                    }: Props) {

    const click = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        const id = new Date().getTime().toString();
        if (groceryItem && !editFlag) {
            setGroceries(groceries => [...groceries, {
                id: id,
                name: groceryItem
            }]);
            displayAlert('item added to the list', 'success');
            setContainerVisible(true);
            setBackToDefault();
        } else if (groceryItem && editFlag) {
            displayAlert('value changed', 'success');
            editLocalStorage(editID, groceryItem);
        } else {
            displayAlert('please enter value', 'danger');
        }
    }

    useEffect(() => {
        if (groceries.length > 0) {
            setContainerVisible(true);
        }
    }, []);

    function editLocalStorage(id: string, value: string) {
        let items = groceries;
        items = items.map(function (item) {
            if (item.id === id) {
                item.name = value;
            }
            return item;
        });
        setGroceries(items);
    }

    return (
        <form className="grocery-form">
            <p className={alertType}>{alertText}</p>
            <h3>grocery bud</h3>
            <div className="form-control">
                <input value={groceryItem} onChange={e => setGroceryItem(e.target.value)} type="text"
                       id="grocery" placeholder="e.g. eggs"/>
                <Button buttonClass="submit-btn" buttonText={submitBtnText} handleClick={click}/>
            </div>
        </form>
    )
}