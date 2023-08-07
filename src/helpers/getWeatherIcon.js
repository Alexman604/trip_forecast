import { WiDaySunny } from 'react-icons/wi';
import { WiCloudy } from 'react-icons/wi';
import { WiRain } from 'react-icons/wi';
import { WiDayCloudy } from 'react-icons/wi';


export const getWeatherIcon = (icon) => {
    switch (icon) {
        case 'clear-day':
            return <WiDaySunny size={40} />;
        case 'cloudy':
            return <WiCloudy size={40} />;
        case 'rain':
            return <WiRain size={40} />;
        default:
            return <WiDayCloudy size={40} />;
    }
};
