import preloader from '../images/preloader.gif';
import {useState} from "react";

export default function Preloader() {
    const [hidden, setHidden] = useState(false);

    const hide = () => {
        setHidden(true);
    }

    return (
        <div className={`preloader${hidden ? ' hide-preloader' : ''}`} onLoad={hide}>
            <img src={preloader} alt="preloader"/>
        </div>
    )
}