import axios from 'axios';

const apiKey = 'ZM7QYM4G3EF4RZ2B49KRM99M8';

export const getWeatherPeriod = async (city, startDate, endDate) => {
    try {
        const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(
            city
        )}/${encodeURIComponent(startDate)}/${encodeURIComponent(endDate)}?unitGroup=metric&include=days&key=${apiKey}`;
        const response = await axios.get(apiUrl);

        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error(`Error fetching weather data: ${response.status} ${response.statusText}`);
        }
    } catch (error) {
        throw new Error('Error fetching weather data:', error.message);
    }
};


export const getWeatherToday = async (city) => {
    try {
        const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(
            city
        )}/today?unitGroup=metric&include=days&key=${apiKey}&contentType=json`;
        const response = await axios.get(apiUrl);
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error(`Error fetching weather data: ${response.status} ${response.statusText}`);
        }
    } catch (error) {
        throw new Error('Error fetching weather data:', error.message);
    }
};
