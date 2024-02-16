import {useEffect, useState} from "react";
import {Grocery} from "../App";

function getSavedValue(key: string, initialValue: Grocery[] | Function) {
    const savedValue = JSON.parse(localStorage.getItem(key) || '{}');
    if (savedValue) return savedValue;

    if (initialValue instanceof Function) return initialValue();
    return initialValue;
}

export default function useLocalStorage(key:string, initialValue: Grocery[] | Function) {
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initialValue);
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue]
}