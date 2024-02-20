import React, {forwardRef, MutableRefObject} from "react";

interface Props {
    topLinkVisible: boolean;
}

const TopLink = forwardRef<HTMLDivElement, Props>(({topLinkVisible}: Props, ref) => {
    const scrollRef = ref as MutableRefObject<HTMLDivElement>;

    const scroll = () => {
        scrollRef.current.scrollIntoView();
    }

    return (
        <a href="#home" className={`scroll-link top-link${topLinkVisible ? ' show-link' : ''}`} onClick={scroll}>
            <i className="fas fa-arrow-up"></i>
        </a>
    )
});

export default TopLink;