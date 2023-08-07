import React from 'react';
import './WeatherCard.scss';
import { getWeatherIcon } from '../../helpers/getWeatherIcon';
import { getWeekDayName } from '../../helpers/getWeekDayName';

function WeatherCard(props) {
    const { datetime, icon, tempmax, tempmin } = props.day;

    return (
        <div className="weather-card">
            <div className="day-name">{getWeekDayName(datetime)}</div>
            <div className="weather-icon">{getWeatherIcon(icon)}</div>
            <div className="temperature">
                {tempmax}° / {tempmin}°
            </div>
        </div>
    );
}

export default WeatherCard;
