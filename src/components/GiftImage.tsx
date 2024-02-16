import gift from '../images/gift.jpeg'

export default function GiftImage() {
    return (
        <article className="gift-img">
            <img src={gift} alt="gift" />
        </article>
    );
}