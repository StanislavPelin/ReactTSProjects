import Deadline from "./Deadline";

export default function GiftInfo() {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const weekdays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    let tempDate = new Date();
    let tempYear = tempDate.getFullYear();
    let tempMonth = tempDate.getMonth();
    let tempDay = tempDate.getDate();

    const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
    const year = futureDate.getFullYear();
    const hours = futureDate.getHours();
    const minutes = futureDate.getMinutes();

    const month = months[futureDate.getMonth()];
    const date = futureDate.getDate();
    const weekday = weekdays[futureDate.getDay()]

    const futureTime = futureDate.getTime();

    return (
        <article className="gift-info">
            <h3>old iphone giveaway</h3>
            <h4 className="giveaway">giveaway ends on {weekday}, {date} {month} {year} {hours}:{minutes}</h4>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ab consectetur accusamus reiciendis quae autem cumque ratione cum, eligendi obcaecati vitae eum illum et, iusto porro, harum animi? Dolorem, inventore.
            </p>
            <Deadline futureTime={futureTime} />
        </article>
    )
}