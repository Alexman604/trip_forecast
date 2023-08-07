import React from 'react'
import './WeatherToday.scss';
import { getWeatherIcon } from '../../helpers/getWeatherIcon';
import { getWeekDayName } from '../../helpers/getWeekDayName';

function WeatherToday(props) {
    const { address, days: [{ datetime, icon, temp }] } = props.weatherToday

    return (
        <div className="today-weather">
            <div className="day-name">{getWeekDayName(datetime)}</div>
            <div className="weather-info">
                <div className="weather-icon">{getWeatherIcon(icon)}</div>
                {temp}&#176;
            </div>
            <div className="temperature">
                <div className="city-name">{address}</div>
            </div>
        </div>
    );
}

export default WeatherToday