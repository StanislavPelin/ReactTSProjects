import React, {forwardRef, MutableRefObject} from "react";

interface Props {
    name: string;
    extraClasses?: string;
}

const ScrollLink = forwardRef<HTMLDivElement, Props>(({name, extraClasses}: Props, ref) => {
    const scrollRef = ref as MutableRefObject<HTMLDivElement>;

    const scroll = () => {
        scrollRef.current.scrollIntoView({block: 'center'});
    }

    return (
        <li>
            <a href={`#${name}`} className={`scroll-link${extraClasses !== undefined ? ' btn btn-white' : ''}`} onClick={scroll}>{(extraClasses !== undefined ? 'explore ' : '') + name}</a>
        </li>
    )
});

export default ScrollLink;