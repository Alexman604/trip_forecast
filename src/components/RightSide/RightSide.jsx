import React from 'react';
import './RightSide.scss';
import WeatherToday from '../WeatherToday/WeatherToday';
import Spinner from '../Spinner/Spinner';
import CountdownTimer from '../CountdownTimer/CountdownTimer';

function RightSide(props) {
  const { weatherToday, startDate } = props;

  return (
    <div className='right-side' style={{ backgroundImage: `url(/assets/sky_background.png)`, backgroundSize: 'cover' }}>
      {weatherToday ? <WeatherToday weatherToday={weatherToday} /> : <Spinner />}
      {startDate && <CountdownTimer startDate={startDate} />}
    </div>
  );
}

export default RightSide;
