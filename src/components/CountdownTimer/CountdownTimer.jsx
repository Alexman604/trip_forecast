import React, { useEffect, useState, useRef } from 'react';
import './CountdownTimer.scss';

function CountdownTimer({ startDate }) {
   
    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const tripStartDate = new Date(startDate).getTime();
        const difference = tripStartDate - now;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            };
        } else {
            timeLeft = {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState({});
    const timerRef = useRef(null);

    useEffect(() => {
        const updateTimer = () => {
            const newTimeLeft = calculateTimeLeft();
            setTimeLeft(newTimeLeft);

            if (newTimeLeft.days === 0 && newTimeLeft.hours === 0 && newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
                clearInterval(timerRef.current);
            }
        };

        const initialTimeLeft = calculateTimeLeft();
        setTimeLeft(initialTimeLeft);
        timerRef.current = setInterval(updateTimer, 1000);

        return () => {
            clearInterval(timerRef.current);
        };
    }, [startDate]);

    return (
        <div className="countdown-timer">
            {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="countdown-unit">
                    <div className="value">{value}</div>
                    <div className="label">{unit}</div>
                </div>
            ))}
        </div>
    );
}

export default CountdownTimer;
