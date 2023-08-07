import { WiDaySunny } from 'react-icons/wi';
import { WiCloudy } from 'react-icons/wi';
import { WiRain } from 'react-icons/wi';
import { WiDayCloudy } from 'react-icons/wi';
import { getWeatherIcon } from '../getWeatherIcon';

describe('getWeatherIcon', () => {
    it('should return WiDaySunny icon for "clear-day" weather', () => {
        const icon = getWeatherIcon('clear-day');
        expect(icon.type).toBe(WiDaySunny);
        expect(icon.props.size).toBe(40);
    });

    it('should return WiCloudy icon for cloudy weather', () => {
        const icon = getWeatherIcon('cloudy');
        expect(icon.type).toBe(WiCloudy);
        expect(icon.props.size).toBe(40);
    });

    it('should return WiRain icon for rainy weather', () => {
        const icon = getWeatherIcon('rain');
        expect(icon.type).toBe(WiRain);
        expect(icon.props.size).toBe(40);
    });

    it('should return WiDayCloudy icon for unknown weather', () => {
        const icon = getWeatherIcon('unknown-weather');
        expect(icon.type).toBe(WiDayCloudy);
        expect(icon.props.size).toBe(40);
    });
});
