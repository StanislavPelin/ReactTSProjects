import React, {forwardRef} from "react";

interface Props {
    title: React.JSX.Element;
}

const Section = forwardRef<HTMLDivElement, Props>(function Section({title}: Props, ref) {
    return (
        <section ref={ref} className="section">
            <div className="title">
                <h2>{title}</h2>
            </div>
        </section>
    )
});

export default Section;