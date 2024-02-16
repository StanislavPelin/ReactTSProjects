import React, {useEffect, useState} from "react";

interface Props {
    futureTime: number;
}

export default function Deadline({futureTime}: Props) {

    const today = new Date().getTime();
    const t = futureTime - today;
    const [days, setDays] = useState<number>(0);
    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);
    const [timers, setTimers] = useState<React.JSX.Element[]>([]);

    //values in ms

    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;

    useEffect(() => {
        const timeFractions = ['days', 'hours', 'mins', 'secs'];
        const updateTimer = () => {
            setDays(Math.floor(t / oneDay));
            setHours(Math.floor((t % oneDay) / oneHour));
            setMinutes(Math.floor((t % oneHour) / oneMinute));
            setSeconds(Math.floor((t % oneMinute) / 1000));
        }
    
        function format(item: number | string) {
            if (item < 10) {
                return (item = `0${item}`)
            }
            return item;
        }
        
        const createCountdown = () => {
            const values = [days, hours, minutes, seconds];
            const dynamicHTML: React.JSX.Element[] = [];
            values.forEach(function (value: number | string, index) {
                dynamicHTML.push(<div className="deadline-format" key={index}>
                    <div>
                        <h4 className={timeFractions[index]}>{format(value)}</h4>
                        <span>{timeFractions[index]}</span>
                    </div>
                </div>)
            });
            setTimers(dynamicHTML);
        }
    
        function getRemainingTime() {
            updateTimer();
            createCountdown();
        }

    
        let countdown = setInterval(getRemainingTime, 1000);
        getRemainingTime();
        if (t < 0) {
            setTimers( [<h4 className="expired" key="1">sorry, this giveaway has expired</h4>]);
        }
        return () => clearInterval(countdown);
    }, [days, hours, minutes, oneDay, oneHour, oneMinute, seconds, t]);

    

    return (
        <div className="deadline">
            {timers}
        </div>
    )
}