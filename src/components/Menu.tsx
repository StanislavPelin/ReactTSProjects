import React from "react";

interface Props {
    menuItemsDisplay: React.JSX.Element[]
}

export default function Menu({menuItemsDisplay}: Props) {
    return (
        <div className="section-center">
            {menuItemsDisplay}
        </div>
    )
}