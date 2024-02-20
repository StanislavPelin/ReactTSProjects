import video from '../images/video.mp4';
import {useRef, useState} from "react";

export default function Header() {
    const [slide, setSlide] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const click = () => {
        if (!slide) {
            setSlide(true);
            videoRef.current?.pause();
        } else {
            setSlide(false);
            videoRef.current?.play();
        }
    }

    return (
        <header>
            <video ref={videoRef} className="video-container" muted autoPlay loop>
                <source src={video} type="video/mp4"/>
            </video>
            <h1>video project</h1>
            <button className={`switch-btn${slide ? ' slide' : ''}`} onClick={click}>
                <span>
                  play
                </span>
                <span>
                  pause
                </span>
                <span className="switch"> </span>
            </button>
        </header>
    )
}