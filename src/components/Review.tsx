import {ReviewObject, reviews} from "./reviews";
import {useEffect, useState} from "react";

export default function Review() {
    const [value, setValue] = useState<number>(0);
    const [review, setReview] = useState<ReviewObject>();

    let currentItem = value;

    useEffect(() => {
        showPerson(currentItem);
    }, [currentItem]);

    const nextReview = () => {
        currentItem++;
        if(currentItem > reviews.length-1) {
            currentItem = 0;
        }
        setValue(currentItem);
        showPerson(currentItem);
    }

    const prevReview = () => {
        currentItem--;
        if(currentItem < 0) {
            currentItem = reviews.length-1
        }
        setValue(currentItem);
        showPerson(currentItem);
    }

    const randomReview = () => {
        currentItem = Math.floor(Math.random() * reviews.length);
        setValue(currentItem);
        showPerson(currentItem);
    }

    function showPerson(person: number) {
        const item = reviews[person];
        setReview(item);
    }

    return (
        <article className="review">
            <div className="img-container">
                <img src={review?.img} id="person-img" alt="" />
            </div>
            <h4 id="author">{review?.name}</h4>
            <p id="job">{review?.job}</p>
            <p id="info">{review?.text}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={prevReview}>
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button className="next-btn" onClick={nextReview}>
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
            <button className="random-btn" onClick={randomReview}>surprise me</button>
        </article>
    )
}