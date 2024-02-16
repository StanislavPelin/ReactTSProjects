import {MouseEventHandler} from "react";

interface Props {
    buttonClass: string;
    handleClick: MouseEventHandler<HTMLButtonElement>;
    buttonText: string;
}

export default function Button({buttonClass, handleClick, buttonText}: Props) {
    return <button type="button" className={buttonClass} onClick={handleClick}>{buttonText}</button>
}