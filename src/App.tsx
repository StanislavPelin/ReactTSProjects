import './App.css';
import React, {useState} from "react";
import useLocalStorage from "./components/useLocalStorage";
import GroceryForm from "./components/GroceryForm";
import GroceryList from "./components/GroceryList";

export type Grocery = {
    id: string;
    name: string;
}

export default function App() {
    const [groceries, setGroceries] = useLocalStorage('list', []);
    const [containerVisible, setContainerVisible] = useState<boolean>(false);
    const [submitBtnText, setSubmitBtnText] = useState<string>('submit');
    const [groceryItem, setGroceryItem] = useState<string>('');
    const [alertType, setAlertType] = useState<string>('alert');
    const [alertText, setAlertText] = useState<string>('');
    const [editFlag, setEditFlag] = useState<boolean>(false);
    const [editID, setEditID] = useState<string>('');

    function displayAlert(text: string, action: string) {
        setAlertText(text);
        setAlertType(alertType + ` alert-${action}`);

        setTimeout(function() {
            setAlertText('');
            setAlertType('alert')
        }, 1000)
    }

    function setBackToDefault() {
        setGroceryItem('');
        setEditFlag(false);
        setEditID('');
        setSubmitBtnText('submit');
    }

    return (
        <section className="section-center">
            <GroceryForm
                groceries={groceries} setGroceries={setGroceries}
                groceryItem={groceryItem} setGroceryItem={setGroceryItem}
                setContainerVisible={setContainerVisible}
                alertType={alertType} alertText={alertText}
                editFlag={editFlag}
                editID={editID}
                displayAlert={displayAlert}
                setBackToDefault={setBackToDefault}
                submitBtnText={submitBtnText}
            />
            <GroceryList
                groceries={groceries} setGroceries={setGroceries}
                setGroceryItem={setGroceryItem}
                containerVisible={containerVisible} setContainerVisible={setContainerVisible}
                setEditFlag={setEditFlag}
                setEditID={setEditID}
                displayAlert={displayAlert}
                setBackToDefault={setBackToDefault}
                setSubmitBtnText={setSubmitBtnText}
            />
        </section>
    );
}
