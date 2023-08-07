import React, { useState, useEffect, useMemo, useCallback } from 'react';
import LeftSide from '../LeftSide/LeftSide';
import RightSide from '../RightSide/RightSide';
import Modal from '../AddTripModalWindow/AddTripModalWindow';
import { getWeatherPeriod, getWeatherToday } from '../../services/weatherService';
import './App.scss';

import { filterTripsByCity } from '../../helpers/filterTripsByCity';
import { sortTripsByStartDate } from '../../helpers/sortTripsByStartDate';

function App() {
  const initialMyTrips = useMemo(() => {
    const storedMyTrips = localStorage.getItem('myTrips');
    return storedMyTrips ? JSON.parse(storedMyTrips) : [
      {
        id: 'cb568a79-45e5-378c-cb31-c7e7c86693b4',
        city: 'Bangkok',
        startDate: '2023-08-07',
        endDate: '2023-08-12',
      },
    ];
  }, []);

  const [myTrips, setMyTrips] = useState(initialMyTrips);
  const [showModal, setShowModal] = useState(false);
  const [activeTrip, setActiveTrip] = useState(myTrips[0]);
  const [activeTripId, setActiveTripId] = useState(myTrips[0]?.id);
  const [weatherPeriod, setWeatherPeriod] = useState(null);
  const [weatherToday, setWeatherToday] = useState(null);
  const [searchCity, setSearchCity] = useState('');

  useEffect(() => {
    localStorage.setItem('myTrips', JSON.stringify(myTrips));
  }, [myTrips]);

  const addTrip = useCallback((trip) => {
    setMyTrips((prevMyTrips) => sortTripsByStartDate([...prevMyTrips, trip]));
  }, []);

  useEffect(() => {
    if (activeTrip) {
      const { city, startDate, endDate } = activeTrip;
      fetchWeatherPeriodData(city, startDate, endDate);
      fetchWeatherTodayData(city);
    }
  }, [activeTrip]);

  useEffect(() => {
    const storedMyTrips = localStorage.getItem('myTrips');
    if (storedMyTrips) {
      setMyTrips(JSON.parse(storedMyTrips));
    }
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false);
  }, []);

  const onActiveTrip = useCallback((id) => {
    const foundTrip = myTrips.find((trip) => trip.id === id);
    if (foundTrip) {
      setActiveTrip(foundTrip);
      setActiveTripId(foundTrip.id);
    }
  }, [myTrips]);

  const openModal = useCallback(() => {
    setShowModal(true);
  }, []);

  const fetchWeatherPeriodData = async (city, startDate, endDate) => {
    try {
      const data = await getWeatherPeriod(city, startDate, endDate);
      setWeatherPeriod(data);
    } catch (error) {
      console.error('Error fetching weather period data:', error);
    }
  };

  const fetchWeatherTodayData = async (city) => {
    try {
      const today = new Date().toISOString().slice(0, 10);
      const data = await getWeatherToday(city, today);
      setWeatherToday(data);
    } catch (error) {
      console.error('Error fetching weather today data:', error);
    }
  };

  const filteredTrips = useMemo(() => filterTripsByCity(myTrips, searchCity), [myTrips, searchCity]);

  return (
    <div className="App">
      <LeftSide
        myTrips={filteredTrips}
        weatherPeriod={weatherPeriod?.days}
        addTrip={addTrip}
        openModal={openModal}
        onActiveTrip={onActiveTrip}
        activeTripId={activeTripId}
        searchCity={searchCity}
        setSearchCity={setSearchCity}
      />
      <RightSide weatherToday={weatherToday} startDate={activeTrip.startDate} />
      {showModal && (
        <Modal
          addTrip={addTrip}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}

export default App;
