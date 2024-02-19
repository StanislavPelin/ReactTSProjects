interface Props {
    title: string;
    isActive: boolean;
    handleClick: () => void;
}

export default function Question({title, isActive, handleClick}: Props) {
    return (
        <article className={`question${isActive ? ' show-text' : ''}`}>
            <div className="question-title">
                <p>{title}</p>
                <button type="button" className="question-btn" onClick={handleClick}>
                    <span className="plus-icon">
                      <i className="far fa-plus-square"></i>
                    </span>
                    <span className="minus-icon">
                        <i className="far fa-minus-square"></i>
                    </span>
                </button>
            </div>
            <div className="question-text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quas officiis tempora soluta
                    aliquam aliquid ducimus, voluptatum cupiditate aspernatur? Nihil.</p>
            </div>
        </article>
    )
}