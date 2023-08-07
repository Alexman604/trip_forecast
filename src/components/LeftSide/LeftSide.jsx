import React, { useRef, useMemo } from 'react';
import './LeftSide.scss';
import { FaSearch } from 'react-icons/fa';
import CityCard from '../CityCard/CityCard';
import AddCity from '../AddTripButton/AddTripButton';
import WeatherCard from '../WeatherCard/WeatherCard';
import Spinner from '../Spinner/Spinner';

function LeftSide(props) {
  const {
    myTrips,
    openModal,
    searchCity,
    activeTripId,
    onActiveTrip,
    setSearchCity,
    weatherPeriod,
  } = props;
  const citiesScrollContainer = useRef(null);
  const weatherScrollContainer = useRef(null);

  const handleCitiesScrollLeft = () => {
    citiesScrollContainer.current.scrollLeft -= 450; 
  };

  const handleCitiesScrollRight = () => {
    citiesScrollContainer.current.scrollLeft += 450; 
  };

  const handleWeatherScrollLeft = () => {
    weatherScrollContainer.current.scrollLeft -= 200;
  };

  const handleWeatherScrollRight = () => {
    weatherScrollContainer.current.scrollLeft += 200; 
  };

  const filteredTrips = useMemo(() =>
    myTrips.filter((trip) =>
      trip.city.toLowerCase().includes(searchCity.toLowerCase())
    ), [myTrips, searchCity]);

  return (
    <div className='left-side'>
      <p className='title'>Weather <b>Forecast</b></p>
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input
          className='search-input'
          type="text"
          name=""
          id=""
          placeholder='Search your trip'
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
        />
      </div>

      <div className='scroll-container for-cities'>
        <div className="scroll-button left" onClick={handleCitiesScrollLeft}>
          &lt;
        </div>
        <div className='cities' ref={citiesScrollContainer}>
          {filteredTrips.map((trip) => (
            <CityCard key={trip.id} trip={trip} onActiveTrip={onActiveTrip} activeTripId={activeTripId} />
          ))}
          <AddCity openModal={openModal} />
        </div>
        <div className="scroll-button right" onClick={handleCitiesScrollRight}>
          &gt;
        </div>
      </div>

      <div className='week'>Week</div>

      <div className='scroll-container for-weather'>
        <div className="scroll-button left" onClick={handleWeatherScrollLeft}>
          &lt;
        </div>

        {weatherPeriod ? (
          <div className='weather' ref={weatherScrollContainer}>
            {weatherPeriod.map((day) => (
              <WeatherCard key={day.date} day={day} />
            ))}
          </div>
        ) : (
          <Spinner />
        )}

        <div className="scroll-button right" onClick={handleWeatherScrollRight}>
          &gt;
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
