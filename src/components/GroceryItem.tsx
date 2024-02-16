import React from "react";

interface Props {
    id: string;
    name: string;
    editItem: (event: React.MouseEvent<HTMLElement>) => void;
    deleteItem: (event: React.MouseEvent<HTMLElement>) => void;
}

export default function GroceryItem({id, name, editItem, deleteItem}: Props) {
    return <article className="grocery-item" data-id={id}>
        <p className="title">{name}</p>
        <div className="btn-container">
            <button className="edit-btn" onClick={editItem}>
                <i className="fas fa-edit"></i>
            </button>
            <button className="delete-btn" onClick={deleteItem}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    </article>
}