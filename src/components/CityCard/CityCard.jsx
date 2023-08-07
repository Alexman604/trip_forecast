import React from 'react';
import './CityCard.scss';
import { citiesPictures } from '../../constants/Cities.js';

function CityCard(props) {
    const { trip, onActiveTrip, activeTripId } = props;
    const {id, city, startDate, endDate } = trip

    const cardClasses = id === activeTripId ? 'city-card active' : 'city-card';

    return (
        <div className={cardClasses} onClick={()=>onActiveTrip(id)}>
            <div className="city-picture-container">
                <img
                    src={citiesPictures[trip.city]}
                    alt="City"
                    className="city-picture"
                />
            </div>
            <div className="city-info">
                <h3 className="city-name">{city}</h3>
                <p className="period"> {startDate} - {endDate}</p>
            </div>
        </div>
    );
}

export default CityCard;
